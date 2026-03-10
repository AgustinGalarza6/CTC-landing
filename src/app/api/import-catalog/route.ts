import { getPayload } from 'payload';
import config from '@/payload.config';
import { NextRequest, NextResponse } from 'next/server';

const BRAND_NAME = 'Zenity';

const COL = { SKU: 1, DESCRIPTION: 2, PRICE_GUILD: 3, PRICE_DIST: 4 };

function parseUSD(str: string): number {
  if (!str?.trim()) return 0;
  return parseFloat(str.replace(/U\$S\s*/i, '').replace(/\./g, '').replace(',', '.')) || 0;
}

function toSlug(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function parseCSVLine(line: string): string[] {
  const values: string[] = [];
  let current = '';
  let inQuotes = false;
  for (const char of line) {
    if (char === '"') { inQuotes = !inQuotes; continue; }
    if (char === ',' && !inQuotes) { values.push(current.trim()); current = ''; continue; }
    current += char;
  }
  values.push(current.trim());
  return values;
}

function isCategoryHeader(cols: string[]): boolean {
  return (
    !cols[COL.SKU]?.trim() &&
    !!cols[COL.DESCRIPTION]?.trim() &&
    !cols[COL.PRICE_GUILD]?.trim()
  );
}

export async function POST(req: NextRequest) {
  const payload = await getPayload({ config });

  // Verificar autenticación
  const { user } = await payload.auth({ headers: req.headers });
  if (!user) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;
    if (!file) {
      return NextResponse.json({ error: 'No se proporcionó archivo CSV' }, { status: 400 });
    }

    const text = await file.text();
    const lines = text.trim().split('\n').slice(1); // saltar fila de headers del CSV

    const categoryCache: Record<string, number> = {};
    const brandCache: Record<string, number> = {};
    let currentCategory = '';
    const results = {
      created: 0,
      updated: 0,
      unchanged: 0,
      errors: [] as string[],
    };

    // Asegurar que la marca existe
    const existingBrand = await payload.find({
      collection: 'brands',
      where: { slug: { equals: toSlug(BRAND_NAME) } },
      limit: 1,
    });
    if (existingBrand.docs.length > 0) {
      brandCache[BRAND_NAME] = existingBrand.docs[0].id as number;
    } else {
      const b = await payload.create({
        collection: 'brands',
        draft: false,
        data: { name: BRAND_NAME, slug: toSlug(BRAND_NAME) } as any,
      });
      brandCache[BRAND_NAME] = b.id as number;
    }

    for (const line of lines) {
      if (!line.trim()) continue;
      const cols = parseCSVLine(line);

      // ── Header azul → detectar categoría ─────────────────────────────────
      if (isCategoryHeader(cols)) {
        currentCategory = cols[COL.DESCRIPTION].trim();

        if (!categoryCache[currentCategory]) {
          const slug = toSlug(currentCategory);
          const existing = await payload.find({
            collection: 'categories',
            where: { slug: { equals: slug } },
            limit: 1,
          });
          if (existing.docs.length > 0) {
            categoryCache[currentCategory] = existing.docs[0].id as number;
          } else {
            const cat = await payload.create({
              collection: 'categories',
              draft: false,
              data: { name: currentCategory, slug, icon: 'package' } as any,
            });
            categoryCache[currentCategory] = cat.id as number;
          }
        }
        continue;
      }

      // Saltar filas sin SKU o sin categoría activa
      if (!cols[COL.SKU]?.trim() || !currentCategory) continue;

      const sku = cols[COL.SKU].trim();
      const rawDesc = cols[COL.DESCRIPTION]?.trim() ?? '';
      const priceGuild = parseUSD(cols[COL.PRICE_GUILD]);
      const priceDist  = parseUSD(cols[COL.PRICE_DIST]);
      const price = priceGuild > 0 ? priceGuild : priceDist;
      const originalPriceVal = priceDist > price ? priceDist : undefined;
      const categoryId = categoryCache[currentCategory];
      const brandId = brandCache[BRAND_NAME];

      try {
        const existing = await payload.find({
          collection: 'products',
          where: { sku: { equals: sku } },
          limit: 1,
        });

        if (existing.docs.length > 0) {
          // ── PRODUCTO EXISTENTE: solo llenar campos vacíos ─────────────────
          const prod = existing.docs[0];
          const updateData: Record<string, unknown> = {};

          if (!prod.price && price)               updateData.price = price;
          if (!prod.originalPrice && originalPriceVal) updateData.originalPrice = originalPriceVal;
          if (!prod.category && categoryId)        updateData.category = categoryId;
          if (!prod.brand && brandId)              updateData.brand = brandId;

          if (Object.keys(updateData).length > 0) {
            await payload.update({
              collection: 'products',
              id: prod.id,
              draft: false,
              data: updateData,
            });
            results.updated++;
          } else {
            results.unchanged++;
          }
        } else {
          // ── PRODUCTO NUEVO: crear con datos básicos del sheet ─────────────
          const descParts = rawDesc.split('|').map(p => p.trim()).filter(Boolean);
          const productType = descParts[0] ?? sku;
          const specParts = descParts
            .slice(1)
            .filter(p => p.toUpperCase() !== sku.toUpperCase());

          await payload.create({
            collection: 'products',
            draft: false,
            data: {
              name: `${productType} ${sku}`,
              sku,
              slug: toSlug(sku),
              shortDescription: rawDesc.substring(0, 200),
              description: {
                root: {
                  type: 'root',
                  version: 1,
                  direction: 'ltr' as const,
                  format: '' as const,
                  indent: 0,
                  children: [
                    {
                      type: 'paragraph',
                      version: 1,
                      direction: 'ltr' as const,
                      format: '' as const,
                      indent: 0,
                      textFormat: 0,
                      textStyle: '',
                      children: [
                        {
                          type: 'text',
                          text: rawDesc,
                          version: 1,
                          format: 0,
                          detail: 0,
                          mode: 'normal' as const,
                          style: '',
                        },
                      ],
                    },
                  ],
                },
              },
              price,
              ...(originalPriceVal ? { originalPrice: originalPriceVal } : {}),
              stock: 0,
              category: categoryId,
              brand: brandId,
              features: specParts.map(f => ({ feature: f })),
              specs: [],
              tags: [
                { tag: toSlug(productType) },
                { tag: toSlug(currentCategory) },
              ],
              isFeatured: false,
              isNew: false,
            },
          });
          results.created++;
        }
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        results.errors.push(`${sku}: ${msg}`);
      }
    }

    return NextResponse.json(results);
  } catch (err: unknown) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Error desconocido' },
      { status: 500 }
    );
  }
}
