/**
 * Script para importar datos desde JSON a Payload
 * Ejecutar con: npm run import:data
 */

import { getPayload } from 'payload';
import config from '../src/payload.config.js';
import fs from 'fs';
import path from 'path';

async function importData() {
  const payload = await getPayload({ config });
  
  console.log('🔄 Importando datos a Payload...\n');

  const exportDir = path.join(process.cwd(), 'payload-export');
  
  if (!fs.existsSync(exportDir)) {
    console.error('❌ No se encontró la carpeta "payload-export"');
    console.log('📌 Asegúrate de haber copiado la carpeta desde tu otra PC\n');
    process.exit(1);
  }

  try {
    // Importar Categories primero (las necesitan los productos)
    if (fs.existsSync(path.join(exportDir, 'categories.json'))) {
      console.log('📁 Importando categorías...');
      const categories = JSON.parse(
        fs.readFileSync(path.join(exportDir, 'categories.json'), 'utf-8')
      );
      
      for (const category of categories) {
        const { id, createdAt, updatedAt, ...categoryData } = category;
        try {
          await payload.create({
            collection: 'categories',
            data: categoryData,
          });
        } catch (error) {
          console.log(`  ⚠️  Error importando categoría: ${category.name}`);
        }
      }
      console.log(`✅ ${categories.length} categorías procesadas`);
    }

    // Importar Products
    if (fs.existsSync(path.join(exportDir, 'products.json'))) {
      console.log('📦 Importando productos...');
      const products = JSON.parse(
        fs.readFileSync(path.join(exportDir, 'products.json'), 'utf-8')
      );
      
      for (const product of products) {
        const { id, createdAt, updatedAt, ...productData } = product;
        try {
          await payload.create({
            collection: 'products',
            data: productData,
          });
        } catch (error) {
          console.log(`  ⚠️  Error importando producto: ${product.name}`);
        }
      }
      console.log(`✅ ${products.length} productos procesados`);
    }

    // Importar Orders
    if (fs.existsSync(path.join(exportDir, 'orders.json'))) {
      console.log('🛒 Importando órdenes...');
      const orders = JSON.parse(
        fs.readFileSync(path.join(exportDir, 'orders.json'), 'utf-8')
      );
      
      for (const order of orders) {
        const { id, createdAt, updatedAt, ...orderData } = order;
        try {
          await payload.create({
            collection: 'orders',
            data: orderData,
          });
        } catch (error) {
          console.log(`  ⚠️  Error importando orden: ${order.orderNumber}`);
        }
      }
      console.log(`✅ ${orders.length} órdenes procesadas`);
    }

    // Importar Globals
    if (fs.existsSync(path.join(exportDir, 'globals.json'))) {
      console.log('🌐 Importando configuraciones globales...');
      const globals = JSON.parse(
        fs.readFileSync(path.join(exportDir, 'globals.json'), 'utf-8')
      );
      
      for (const [slug, data] of Object.entries(globals)) {
        try {
          const { id, createdAt, updatedAt, globalType, ...globalData } = data as any;
          await payload.updateGlobal({
            slug,
            data: globalData,
          });
          console.log(`  ✅ ${slug} importado`);
        } catch (error) {
          console.log(`  ⚠️  Error importando ${slug}`);
        }
      }
    }

    console.log('\n✅ Importación completa!');
    console.log('🔄 Reinicia el servidor para ver los cambios\n');

  } catch (error) {
    console.error('❌ Error durante la importación:', error);
    process.exit(1);
  }

  process.exit(0);
}

importData();
