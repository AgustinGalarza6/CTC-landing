/**
 * Script para exportar todos los datos de Payload a JSON
 * Ejecutar con: npm run export:data
 */

import { getPayload } from 'payload';
import config from '../src/payload.config.js';
import fs from 'fs';
import path from 'path';

async function exportData() {
  const payload = await getPayload({ config });
  
  console.log('🔄 Exportando datos de Payload...\n');

  const exportDir = path.join(process.cwd(), 'payload-export');
  if (!fs.existsSync(exportDir)) {
    fs.mkdirSync(exportDir, { recursive: true });
  }

  try {
    // Exportar Products
    console.log('📦 Exportando productos...');
    const products = await payload.find({
      collection: 'products',
      limit: 1000,
    });
    fs.writeFileSync(
      path.join(exportDir, 'products.json'),
      JSON.stringify(products.docs, null, 2)
    );
    console.log(`✅ ${products.docs.length} productos exportados`);

    // Exportar Categories
    console.log('📁 Exportando categorías...');
    const categories = await payload.find({
      collection: 'categories',
      limit: 1000,
    });
    fs.writeFileSync(
      path.join(exportDir, 'categories.json'),
      JSON.stringify(categories.docs, null, 2)
    );
    console.log(`✅ ${categories.docs.length} categorías exportadas`);

    // Exportar Orders
    console.log('🛒 Exportando órdenes...');
    const orders = await payload.find({
      collection: 'orders',
      limit: 1000,
    });
    fs.writeFileSync(
      path.join(exportDir, 'orders.json'),
      JSON.stringify(orders.docs, null, 2)
    );
    console.log(`✅ ${orders.docs.length} órdenes exportadas`);

    // Exportar Media (solo metadata, no archivos)
    console.log('🖼️  Exportando media (metadata)...');
    const media = await payload.find({
      collection: 'media',
      limit: 1000,
    });
    fs.writeFileSync(
      path.join(exportDir, 'media.json'),
      JSON.stringify(media.docs, null, 2)
    );
    console.log(`✅ ${media.docs.length} items de media exportados`);

    // Exportar Globals
    console.log('🌐 Exportando configuraciones globales...');
    const globals = [
      'hero-section',
      'contact-info',
      'navigation',
      'footer',
      'services',
      'faqs',
      'cta-section',
    ];

    const globalData: any = {};
    for (const slug of globals) {
      try {
        const data = await payload.findGlobal({ slug });
        globalData[slug] = data;
        console.log(`  ✅ ${slug} exportado`);
      } catch (error) {
        console.log(`  ⚠️  ${slug} no encontrado`);
      }
    }

    fs.writeFileSync(
      path.join(exportDir, 'globals.json'),
      JSON.stringify(globalData, null, 2)
    );

    console.log('\n✅ Exportación completa!');
    console.log(`📁 Archivos guardados en: ${exportDir}`);
    console.log('\n📌 Copia la carpeta "payload-export" a tu otra PC');
    console.log('📌 Luego ejecuta: npm run import:data\n');

  } catch (error) {
    console.error('❌ Error durante la exportación:', error);
    process.exit(1);
  }

  process.exit(0);
}

exportData();
