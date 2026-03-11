/**
 * Script para migrar productos de Zenity -> CTC Sistemas
 * 
 * Uso en VPS:
 *   ZENITY_DB_PATH=/ruta/a/zenity/database.db npx tsx scripts/migrate-from-zenity.ts
 * 
 * El script lee directamente el SQLite de Zenity con node:sqlite
 * e inserta los registros en CTC usando la API local de Payload.
 */

import { DatabaseSync } from 'node:sqlite';
import { getPayload } from 'payload';
import config from '../src/payload.config.js';

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
  console.log(`\n🔗 Conectando a Zenity DB: ${ZENITY_DB_PATH}`);
  const zenity = new DatabaseSync(ZENITY_DB_PATH!, { open: true });

  // Leer datos de Zenity
  const zenityCategories = zenity.prepare('SELECT * FROM categories ORDER BY "order"').all() as ZenityCategory[];
  const zenityProducts = zenity.prepare('SELECT * FROM products ORDER BY id').all() as ZenityProduct[];
  const zenitySpecs = zenity.prepare('SELECT * FROM products_specs ORDER BY _parent_id, _order').all() as ZenitySpec[];
  const zenityFeatures = zenity.prepare('SELECT * FROM products_features ORDER BY _parent_id, _order').all() as ZenityFeature[];
  const zenityTags = zenity.prepare('SELECT * FROM products_tags ORDER BY _parent_id, _order').all() as ZenityTag[];
  zenity.close();

  console.log(`📦 Encontrados: ${zenityCategories.length} categorías, ${zenityProducts.length} productos`);

  // Agrupar specs/features/tags por product id
  const specsByProduct = zenitySpecs.reduce<Record<number, ZenitySpec[]>>((acc, s) => {
    (acc[s._parent_id] ??= []).push(s);
    return acc;
  }, {});
  const featuresByProduct = zenityFeatures.reduce<Record<number, ZenityFeature[]>>((acc, f) => {
    (acc[f._parent_id] ??= []).push(f);
    return acc;
  }, {});
  const tagsByProduct = zenityTags.reduce<Record<number, ZenityTag[]>>((acc, t) => {
    (acc[t._parent_id] ??= []).push(t);
    return acc;
  }, {});

  // Inicializar Payload
  console.log('\n⚙️  Inicializando Payload CTC...');
  const payload = await getPayload({ config });

  // ── 1. Categorías ──────────────────────────────────────────────────────────
  console.log('\n📁 Migrando categorías...');
  const categoryIdMap: Record<number, string> = {}; // zenity_id → ctc_id

  for (const cat of zenityCategories) {
    const existing = await payload.find({
      collection: 'categories',
      where: { name: { equals: cat.name } },
      limit: 1,
    });

    if (existing.docs.length > 0) {
      categoryIdMap[cat.id] = String(existing.docs[0].id);
      console.log(`  ⏭  Categoría ya existe: "${cat.name}"`);
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
      categoryIdMap[cat.id] = String(created.id);
      console.log(`  ✓ Categoría creada: "${cat.name}" (id: ${created.id})`);
    }
  }

  // ── 2. Productos ───────────────────────────────────────────────────────────
  console.log('\n🛍️  Migrando productos...');
  let created = 0;
  let skipped = 0;
  let errors = 0;

  for (const prod of zenityProducts) {
    // Verificar si ya existe
    const existing = await payload.find({
      collection: 'products',
      where: { slug: { equals: prod.slug } },
      limit: 1,
    });

    if (existing.docs.length > 0) {
      console.log(`  ⏭  Ya existe: "${prod.name}"`);
      skipped++;
      continue;
    }

    const categoryId = categoryIdMap[prod.category_id];
    if (!categoryId) {
      console.warn(`  ⚠️  Sin categoría para "${prod.name}" (category_id: ${prod.category_id}), omitiendo`);
      errors++;
      continue;
    }

    const specs = (specsByProduct[prod.id] || []).map(s => ({ label: s.label, value: s.value }));
    const features = (featuresByProduct[prod.id] || []).map(f => ({ feature: f.feature }));
    const tags = (tagsByProduct[prod.id] || []).map(t => ({ tag: t.tag }));

    try {
      await payload.create({
        collection: 'products',
        data: {
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
          status: 'published',
        },
      });
      console.log(`  ✓ "${prod.name}"`);
      created++;
    } catch (err) {
      console.error(`  ✗ Error en "${prod.name}":`, err instanceof Error ? err.message : err);
      errors++;
    }
  }

  // ── Resumen ────────────────────────────────────────────────────────────────
  console.log('\n📊 Resultado:');
  console.log(`   ✓ Creados:  ${created}`);
  console.log(`   ⏭  Omitidos: ${skipped} (ya existían)`);
  console.log(`   ✗ Errores:  ${errors}`);
  console.log('\n✅ Migración completada\n');

  process.exit(0);
}

migrate().catch(err => {
  console.error('\n❌ Error fatal:', err);
  process.exit(1);
});
