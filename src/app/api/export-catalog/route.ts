import { getPayload } from 'payload';
import config from '@/payload.config';
import ExcelJS from 'exceljs';
import path from 'path';
import fs from 'fs';

export const dynamic = 'force-dynamic';

// â”€â”€ Paleta de colores (estilo Zenity) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const C = {
  TITLE_BG:  '1A3A5C',
  HEADER_BG: '2C5282',
  CAT_BG:    '1565A5',
  WHITE:     'FFFFFFFF',
  CODIGO_FG: '1565A5',
  DESC_FG:   '1F2937',
  PRICE_FG:  '111827',
  ROW_A:     'FFFFFF',
  ROW_B:     'EDF2F7',
  BORDER:    'CBD5E0',
};

// â”€â”€ Columnas (A=1 â€¦ J=10) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const COLS = [
  { header: 'IMAGEN',       width: 14  }, // A
  { header: 'CODIGO',       width: 22  }, // B
  { header: 'DESCRIPCION',  width: 65  }, // C
  { header: 'GREMIO',       width: 14  }, // D
  { header: 'DISTRIBUIDOR', width: 16  }, // E
  { header: 'IVA',          width: 7   }, // F
  { header: 'CATEGORIA',    width: 22  }, // G
  { header: 'SUBCATEGORIA', width: 22  }, // H
  { header: 'MARCA',        width: 14  }, // I
  { header: 'STOCK',        width: 9   }, // J
];
const N = COLS.length;

// Altura de fila de producto en puntos (equivale aprox. a una miniatura 70px)
const PRODUCT_ROW_HEIGHT = 55;
// Ruta al directorio de medios en disco
const MEDIA_DIR = path.resolve(process.cwd(), 'public', 'media');

function solidFill(argb: string): ExcelJS.Fill {
  return { type: 'pattern', pattern: 'solid', fgColor: { argb } };
}
function hairBorder(color: string): Partial<ExcelJS.Borders> {
  const s: ExcelJS.Border = { style: 'hair', color: { argb: color } };
  return { top: s, bottom: s, left: s, right: s };
}

/** Devuelve el path en disco del thumbnail (400Ã—300) del primer imagen del producto */
function getImagePath(
  images: Array<{ image: unknown }> | null | undefined,
): string | null {
  if (!images?.length) return null;
  const first = images[0].image;
  if (!first || typeof first !== 'object') return null;

  const media = first as {
    filename?: string;
    sizes?: { thumbnail?: { filename?: string } };
  };

  // Preferir thumbnail generado (mÃ¡s pequeÃ±o â†’ Excel liviano)
  const thumbFilename = media.sizes?.thumbnail?.filename ?? media.filename;
  if (!thumbFilename) return null;

  const fullPath = path.join(MEDIA_DIR, thumbFilename);
  return fs.existsSync(fullPath) ? fullPath : null;
}

/** Determina extensión → tipo de imagen para ExcelJS (no soporta webp) */
function imageExtension(filePath: string): 'jpeg' | 'png' | 'gif' {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === '.jpg' || ext === '.jpeg') return 'jpeg';
  if (ext === '.gif') return 'gif';
  return 'png'; // webp → png fallback
}

export async function GET() {
  const payload = await getPayload({ config });

  const result = await payload.find({
    collection: 'products',
    depth: 3,   // necesario para popular images.image.sizes
    limit: 5000,
    sort: 'category',
  });

  // â”€â”€ Agrupar por categorÃ­a â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const byCategory: Record<string, typeof result.docs> = {};
  for (const p of result.docs) {
    const catName =
      typeof p.category === 'object' && p.category && 'name' in p.category
        ? (p.category as { name: string }).name
        : 'Sin CategorÃ­a';
    if (!byCategory[catName]) byCategory[catName] = [];
    byCategory[catName].push(p);
  }

  // â”€â”€ Workbook â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const wb = new ExcelJS.Workbook();
  wb.creator = 'CTC Sistemas';
  wb.created = new Date();

  const ws = wb.addWorksheet('CatÃ¡logo', {
    pageSetup: { orientation: 'landscape', fitToPage: true, fitToWidth: 1, paperSize: 9 },
  });

  COLS.forEach((col, i) => { ws.getColumn(i + 1).width = col.width; });

  let rowIdx = 1;

  // â”€â”€ Fila 1: TÃ­tulo empresa â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  for (let c = 1; c <= N; c++) {
    const cell = ws.getRow(rowIdx).getCell(c);
    cell.fill      = solidFill(C.TITLE_BG);
    cell.font      = { bold: true, color: { argb: C.WHITE }, size: 16, name: 'Calibri' };
    cell.alignment = { vertical: 'middle', horizontal: 'center' };
    cell.value     = '';
  }
  ws.getRow(rowIdx).getCell(1).value = 'CTC SISTEMAS';
  ws.mergeCells(rowIdx, 1, rowIdx, N);
  ws.getRow(rowIdx).height = 36;
  rowIdx++;

  // â”€â”€ Fila 2: Headers â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  COLS.forEach((col, i) => {
    const cell = ws.getRow(rowIdx).getCell(i + 1);
    cell.value     = col.header;
    cell.font      = { bold: true, color: { argb: C.WHITE }, size: 10, name: 'Calibri' };
    cell.fill      = solidFill(C.HEADER_BG);
    cell.alignment = { vertical: 'middle', horizontal: 'center' };
    cell.border    = { bottom: { style: 'thin', color: { argb: C.WHITE } } };
  });
  ws.getRow(rowIdx).height = 26;
  rowIdx++;

  // Fijar las 2 primeras filas
  ws.views = [{ state: 'frozen', xSplit: 0, ySplit: 2, topLeftCell: 'A3' }];

  let alt = false;

  for (const [catName, products] of Object.entries(byCategory)) {
    // â”€â”€ Fila de categorÃ­a â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    for (let c = 1; c <= N; c++) {
      const cell = ws.getRow(rowIdx).getCell(c);
      cell.fill      = solidFill(C.CAT_BG);
      cell.font      = { bold: true, color: { argb: C.WHITE }, size: 11, name: 'Calibri' };
      cell.alignment = { vertical: 'middle', horizontal: 'center' };
      cell.value     = '';
    }
    ws.getRow(rowIdx).getCell(3).value = catName.toUpperCase();
    ws.mergeCells(rowIdx, 1, rowIdx, N);
    ws.getRow(rowIdx).height = 22;
    rowIdx++;

    // â”€â”€ Fila Ãºnica por producto â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    for (const p of products) {
      const brand =
        typeof p.brand === 'object' && p.brand && 'name' in p.brand
          ? (p.brand as { name: string }).name : '';

      const priceGremio  = p.price         ? `U$S ${p.price.toLocaleString('es-UY')}` : '';
      const priceDist    = p.originalPrice ? `U$S ${p.originalPrice.toLocaleString('es-UY')}` : '';

      const bg = alt ? C.ROW_B : C.ROW_A;
      alt = !alt;

      const prodRow = ws.getRow(rowIdx);
      prodRow.height = PRODUCT_ROW_HEIGHT;

      // Estilo base de todas las celdas
      for (let c = 1; c <= N; c++) {
        const cell = prodRow.getCell(c);
        cell.fill      = solidFill(bg);
        cell.border    = hairBorder(C.BORDER);
        cell.font      = { size: 10, name: 'Calibri', color: { argb: C.DESC_FG } };
        cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: false };
        cell.value     = '';
      }

      // B: CODIGO â€” azul negrita
      const codigoCell        = prodRow.getCell(2);
      codigoCell.value        = p.sku ?? '';
      codigoCell.font         = { bold: true, color: { argb: C.CODIGO_FG }, size: 10, name: 'Calibri' };

      // C: DESCRIPCION â€” izquierda, wrap
      const descCell          = prodRow.getCell(3);
      descCell.value          = p.shortDescription ?? p.name ?? '';
      descCell.alignment      = { vertical: 'middle', horizontal: 'left', wrapText: true };

      // D: GREMIO
      prodRow.getCell(4).value = priceGremio;
      prodRow.getCell(4).font  = { size: 10, name: 'Calibri', color: { argb: C.PRICE_FG } };

      // E: DISTRIBUIDOR
      prodRow.getCell(5).value = priceDist;
      prodRow.getCell(5).font  = { size: 10, name: 'Calibri', color: { argb: C.PRICE_FG } };

      // F: IVA
      prodRow.getCell(6).value = 21;

      // G: CATEGORIA
      prodRow.getCell(7).value = catName;

      // I: MARCA
      prodRow.getCell(9).value  = brand;

      // J: STOCK
      prodRow.getCell(10).value = p.stock ?? 0;

      // â”€â”€ Imagen embebida en celda A â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      const imgPath = getImagePath(
        p.images as Array<{ image: unknown }> | null | undefined,
      );

      if (imgPath) {
        try {
          const imgBuffer = fs.readFileSync(imgPath);
          const imgId = wb.addImage({
            buffer: imgBuffer as any,
            extension: imageExtension(imgPath),
          });

          // tl = top-left corner, br = bottom-right corner (0-based col/row)
          ws.addImage(imgId, {
            tl: { col: 0, row: rowIdx - 1 } as any,
            br: { col: 1, row: rowIdx }    as any,
            editAs: 'oneCell',
          });
        } catch {
          // Si falla la imagen, dejamos la celda vacÃ­a
        }
      }

      rowIdx++;
    }
  }

  // â”€â”€ Serializar â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const buffer = await wb.xlsx.writeBuffer();
  const date   = new Date().toISOString().slice(0, 10);

  return new Response(buffer as unknown as BodyInit, {
    headers: {
      'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'Content-Disposition': `attachment; filename="catalogo-ctc-${date}.xlsx"`,
    },
  });
}
