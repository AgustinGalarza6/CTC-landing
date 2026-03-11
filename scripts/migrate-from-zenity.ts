/**
 * Script para migrar productos de Zenity -> CTC Sistemas
 * Migra: categorías, productos, specs, features, tags e imágenes.
 *
 * Uso en VPS:
 *   NODE_ENV=production ZENITY_DB_PATH=/home/apps/zenity-landing-v2/database.db npx tsx scripts/migrate-from-zenity.ts
 *
 * Variables opcionales:
 *   ZENITY_MEDIA_DIR  — carpeta de media de Zenity (default: directorio del DB + /../public/media)
 */

import Database from 'better-sqlite3';
import { getPayload } from 'payload';
import config from '../src/payload.config.js';
import fs from 'fs';
import path from 'path';

const ZENITY_DB_PATH = process.env.ZENITY_DB_PATH;

if (!ZENITY_DB_PATH) {
  console.error('❌ Falta la variable de entorno ZENITY_DB_PATH');
  console.error('   Ejemplo: ZENITY_DB_PATH=/home/apps/zenity-app/database.db npx tsx scripts/migrate-from-zenity.ts');
  process.exit(1);
}

// ── Tipos del schema de Zenity ────────────────────────────────────────────────

interface ZenityCategory {
  id: number;
  name: string;
  slug: string;
  icon: string | null;
  description: string | null;
}

interface ZenityProduct {
  id: number;
  name: string;
  slug: string;
  short_description: string | null;
  description: string | null; // Lexical JSON serializado
  category_id: number;
  in_stock: number;
  is_new: number;
  is_featured: number;
  price: number | null;
  original_price: number | null;
}

interface ZenitySpec {
  _order: number;
  _parent_id: number;
  label: string;
  value: string;
}

interface ZenityFeature {
  _order: number;
  _parent_id: number;
  feature: string;
}

interface ZenityTag {
  _order: number;
  _parent_id: number;
  tag: string;
}

interface ZenityMedia {
  id: number;
  alt: string | null;
  caption: string | null;
  filename: string | null;
  mime_type: string | null;
  filesize: number | null;
  width: number | null;
  height: number | null;
}

interface ZenityProductImage {
  _order: number;
  _parent_id: number;
  image_id: number;
}

// ── Utilidades ─────────────────────────────────────────────────────────────────

/** Genera slug limpio */
function toSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * Intenta parsear el campo description de Zenity.
 * Zenity usa Payload Lexical — mismo formato que CTC.
 * Si no es JSON válido, lo convierte a un nodo Lexical básico.
 */
function parseDescription(raw: string | null): object {
  if (!raw) {
    return {
      root: {
        type: 'root',
        children: [{ type: 'paragraph', children: [{ type: 'text', text: '' }], version: 1 }],
        direction: null,
        format: '',
        indent: 0,
        version: 1,
      },
    };
  }
  try {
    return JSON.parse(raw);
  } catch {
    // Fallback: envolver texto plano en un nodo Lexical
    return {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [{ type: 'text', text: raw, version: 1 }],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    };
  }
}

// ── Migración ─────────────────────────────────────────────────────────────────

async function migrate() {
  const zenityDbPath = ZENITY_DB_PATH!;
  // Zenity media dir: sibling of the DB's app root → <zenity-root>/public/media
  const zenityRoot = path.resolve(path.dirname(zenityDbPath), '..');
  const zenityMediaDir = process.env.ZENITY_MEDIA_DIR
    || path.join(zenityRoot, 'public', 'media');

  console.log(`\n🔗 Conectando a Zenity DB: ${zenityDbPath}`);
  console.log(`   Media dir: ${zenityMediaDir}`);
  const zenity = new Database(zenityDbPath, { readonly: true });

  // Leer datos de Zenity
  const zenityCategories = zenity.prepare('SELECT * FROM categories ORDER BY "order"').all() as ZenityCategory[];
  const zenityProducts = zenity.prepare('SELECT * FROM products ORDER BY id').all() as ZenityProduct[];
  const zenitySpecs = zenity.prepare('SELECT * FROM products_specs ORDER BY _parent_id, _order').all() as ZenitySpec[];
  const zenityFeatures = zenity.prepare('SELECT * FROM products_features ORDER BY _parent_id, _order').all() as ZenityFeature[];
  const zenityTags = zenity.prepare('SELECT * FROM products_tags ORDER BY _parent_id, _order').all() as ZenityTag[];
  const zenityMedia = zenity.prepare('SELECT * FROM media').all() as ZenityMedia[];
  const zenityProductImages = zenity.prepare('SELECT * FROM products_images ORDER BY _parent_id, _order').all() as ZenityProductImage[];
  zenity.close();

  console.log(`📦 Encontrados: ${zenityCategories.length} categorías, ${zenityProducts.length} productos, ${zenityMedia.length} archivos media`);

  // Agrupar specs/features/tags/images por product id
  const specsByProduct = zenitySpecs.reduce<Record<number, ZenitySpec[]>>((acc, s) => {
    (acc[s._parent_id] ??= []).push(s); return acc;
  }, {});
  const featuresByProduct = zenityFeatures.reduce<Record<number, ZenityFeature[]>>((acc, f) => {
    (acc[f._parent_id] ??= []).push(f); return acc;
  }, {});
  const tagsByProduct = zenityTags.reduce<Record<number, ZenityTag[]>>((acc, t) => {
    (acc[t._parent_id] ??= []).push(t); return acc;
  }, {});
  const imagesByProduct = zenityProductImages.reduce<Record<number, ZenityProductImage[]>>((acc, i) => {
    (acc[i._parent_id] ??= []).push(i); return acc;
  }, {});

  // Inicializar Payload
  console.log('\n⚙️  Inicializando Payload CTC...');
  const payload = await getPayload({ config });

  // ── 1. Categorías ──────────────────────────────────────────────────────────
  console.log('\n📁 Migrando categorías...');
  const categoryIdMap: Record<number, number> = {};

  for (const cat of zenityCategories) {
    const existing = await payload.find({
      collection: 'categories',
      where: { name: { equals: cat.name } },
      limit: 1,
    });
    if (existing.docs.length > 0) {
      categoryIdMap[cat.id] = existing.docs[0].id as number;
      console.log(`  ⏭  Ya existe: "${cat.name}"`);
    } else {
      const created = await payload.create({
        collection: 'categories',
        data: {
          name: cat.name,
          slug: cat.slug || toSlug(cat.name),
          icon: cat.icon || 'package',
          description: cat.description || '',
        },
      });
      categoryIdMap[cat.id] = created.id as number;
      console.log(`  ✓ "${cat.name}" (id: ${created.id})`);
    }
  }

  // ── 2. Media ───────────────────────────────────────────────────────────────
  console.log('\n🖼️  Migrando archivos media...');
  const mediaIdMap: Record<number, number> = {}; // zenity_media_id → ctc_media_id
  let mediaCreated = 0;
  let mediaSkipped = 0;
  let mediaErrors = 0;

  for (const m of zenityMedia) {
    if (!m.filename) { mediaErrors++; continue; }

    // ¿Ya existe en CTC con el mismo filename?
    const existing = await payload.find({
      collection: 'media',
      where: { filename: { equals: m.filename } },
      limit: 1,
    });
    if (existing.docs.length > 0) {
      mediaIdMap[m.id] = existing.docs[0].id as number;
      mediaSkipped++;
      continue;
    }

    const srcPath = path.join(zenityMediaDir, m.filename);
    if (!fs.existsSync(srcPath)) {
      console.warn(`  ⚠️  Archivo no encontrado: ${srcPath}`);
      mediaErrors++;
      continue;
    }

    try {
      const fileBuffer = fs.readFileSync(srcPath);
      const mimeType = m.mime_type || 'application/octet-stream';

      const created = await payload.create({
        collection: 'media',
        data: {
          alt: m.alt || m.filename,
          caption: m.caption || undefined,
        },
        file: {
          data: fileBuffer,
          mimetype: mimeType,
          name: m.filename,
          size: m.filesize || fileBuffer.length,
        },
      });
      mediaIdMap[m.id] = created.id as number;
      process.stdout.write(`  ✓ ${m.filename}\n`);
      mediaCreated++;
    } catch (err) {
      console.error(`  ✗ Error en "${m.filename}":`, err instanceof Error ? err.message : err);
      mediaErrors++;
    }
  }
  console.log(`   Media: ${mediaCreated} creados, ${mediaSkipped} omitidos, ${mediaErrors} errores`);

  // ── 3. Productos ───────────────────────────────────────────────────────────
  console.log('\n🛍️  Migrando productos...');
  let created = 0;
  let updated = 0;
  let skipped = 0;
  let errors = 0;

  for (const prod of zenityProducts) {
    const categoryId = categoryIdMap[prod.category_id];
    if (!categoryId) {
      console.warn(`  ⚠️  Sin categoría para "${prod.name}", omitiendo`);
      errors++;
      continue;
    }

    const specs = (specsByProduct[prod.id] || []).map(s => ({ label: s.label, value: s.value }));
    const features = (featuresByProduct[prod.id] || []).map(f => ({ feature: f.feature }));
    const tags = (tagsByProduct[prod.id] || []).map(t => ({ tag: t.tag }));
    const images = (imagesByProduct[prod.id] || [])
      .map(i => mediaIdMap[i.image_id])
      .filter(Boolean)
      .map(id => ({ image: id }));

    // Verificar si ya existe
    const existing = await payload.find({
      collection: 'products',
      where: { slug: { equals: prod.slug } },
      limit: 1,
    });

    const productData = {
      name: prod.name,
      slug: prod.slug || toSlug(prod.name),
      shortDescription: prod.short_description || prod.name,
      description: parseDescription(prod.description),
      category: categoryId,
      price: prod.price ?? 0,
      originalPrice: prod.original_price ?? undefined,
      stock: prod.in_stock ? 1 : 0,
      isFeatured: Boolean(prod.is_featured),
      isNew: Boolean(prod.is_new),
      specs: specs.length > 0 ? specs : undefined,
      features: features.length > 0 ? features : undefined,
      tags: tags.length > 0 ? tags : undefined,
      images: images.length > 0 ? images : undefined,
      status: 'published' as const,
    };

    try {
      if (existing.docs.length > 0) {
        // Ya existe — actualizar para agregar imágenes/specs que falten
        await payload.update({
          collection: 'products',
          id: existing.docs[0].id,
          data: productData,
        });
        console.log(`  🔄 "${prod.name}" actualizado`);
        updated++;
      } else {
        await payload.create({ collection: 'products', data: productData });
        console.log(`  ✓ "${prod.name}"`);
        created++;
      }
    } catch (err) {
      console.error(`  ✗ Error en "${prod.name}":`, err instanceof Error ? err.message : err);
      errors++;
    }
  }

  // ── Resumen ────────────────────────────────────────────────────────────────
  console.log('\n📊 Resultado:');
  console.log(`   ✓ Productos creados:    ${created}`);
  console.log(`   🔄 Productos actualizados: ${updated}`);
  console.log(`   ✗ Errores:             ${errors}`);
  console.log('\n✅ Migración completada\n');

  process.exit(0);
}

migrate().catch(err => {
  console.error('\n❌ Error fatal:', err);
  process.exit(1);
});
