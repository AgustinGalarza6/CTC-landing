/**
 * Seed script para agregar productos de ejemplo
 * Ejecutar con: npm run seed:products
 */

import { getPayload } from 'payload';
import config from '../src/payload.config.js';

const sampleProducts = [
  {
    name: 'Dell OptiPlex 7090 Desktop',
    slug: 'dell-optiplex-7090',
    description: 'PC de escritorio empresarial de alto rendimiento con procesador Intel Core i7, ideal para tareas intensivas y multitarea.',
    shortDescription: 'PC empresarial Intel Core i7, 16GB RAM, SSD 512GB',
    price: 124999,
    originalPrice: 149999,
    sku: 'DELL-OPT-7090',
    category: 'Computadoras',
    stock: 15,
    lowStockThreshold: 5,
    isNew: true,
    isFeatured: true,
    status: 'published',
    specifications: [
      { key: 'Procesador', value: 'Intel Core i7-11700 (8 núcleos, 16 threads)' },
      { key: 'Memoria RAM', value: '16GB DDR4' },
      { key: 'Almacenamiento', value: 'SSD NVMe 512GB' },
      { key: 'Sistema Operativo', value: 'Windows 11 Pro' },
      { key: 'Garantía', value: '3 años on-site' },
    ],
  },
  {
    name: 'HP EliteBook 840 G8',
    slug: 'hp-elitebook-840-g8',
    description: 'Laptop empresarial ultraportátil con seguridad avanzada, ideal para profesionales móviles que requieren rendimiento y durabilidad.',
    shortDescription: 'Laptop 14" Intel Core i5, 16GB RAM, diseño premium',
    price: 189999,
    sku: 'HP-EB-840-G8',
    category: 'Laptops',
    stock: 8,
    lowStockThreshold: 3,
    isNew: true,
    isFeatured: true,
    status: 'published',
    specifications: [
      { key: 'Pantalla', value: '14" FHD (1920x1080) IPS' },
      { key: 'Procesador', value: 'Intel Core i5-1135G7' },
      { key: 'Memoria RAM', value: '16GB DDR4' },
      { key: 'Almacenamiento', value: 'SSD 512GB' },
      { key: 'Batería', value: 'Hasta 14 horas' },
      { key: 'Peso', value: '1.36 kg' },
    ],
  },
  {
    name: 'Cisco Catalyst 2960-X Series Switch',
    slug: 'cisco-catalyst-2960-x',
    description: 'Switch de red empresarial Layer 2/3 con 48 puertos Gigabit Ethernet, ideal para redes corporativas de mediano tamaño.',
    shortDescription: 'Switch 48 puertos Gigabit, PoE+, gestión avanzada',
    price: 349999,
    sku: 'CISCO-2960X-48',
    category: 'Redes',
    stock: 5,
    lowStockThreshold: 2,
    isFeatured: true,
    status: 'published',
    specifications: [
      { key: 'Puertos', value: '48x Gigabit Ethernet' },
      { key: 'Uplink', value: '4x SFP+ 10G' },
      { key: 'PoE+', value: 'Hasta 30W por puerto' },
      { key: 'Throughput', value: '176 Gbps' },
      { key: 'Garantía', value: 'Lifetime warranty' },
    ],
  },
  {
    name: 'Lenovo ThinkCentre M90t Tower',
    slug: 'lenovo-thinkcentre-m90t',
    description: 'Torre de escritorio confiable y expandible, perfecta para oficinas que necesitan potencia y capacidad de actualización.',
    shortDescription: 'Torre Intel Core i5, 8GB RAM, diseño modular',
    price: 94999,
    originalPrice: 109999,
    sku: 'LEN-M90T-TWR',
    category: 'Computadoras',
    stock: 12,
    lowStockThreshold: 5,
    status: 'published',
    specifications: [
      { key: 'Procesador', value: 'Intel Core i5-10500' },
      { key: 'Memoria RAM', value: '8GB DDR4 (expandible a 128GB)' },
      { key: 'Almacenamiento', value: 'HDD 1TB + SSD 256GB' },
      { key: 'Bahías', value: '4x 3.5" internas' },
      { key: 'Sistema Operativo', value: 'Windows 10 Pro' },
    ],
  },
  {
    name: 'Dell UltraSharp U2722DE Monitor',
    slug: 'dell-ultrasharp-u2722de',
    description: 'Monitor profesional de 27 pulgadas con resolución QHD, USB-C Hub integrado y precisión de color excepcional.',
    shortDescription: 'Monitor 27" QHD, USB-C, IPS, calibrado de fábrica',
    price: 74999,
    sku: 'DELL-U2722DE',
    category: 'Monitores',
    stock: 20,
    lowStockThreshold: 8,
    isNew: true,
    isFeatured: true,
    status: 'published',
    specifications: [
      { key: 'Tamaño', value: '27 pulgadas' },
      { key: 'Resolución', value: '2560x1440 (QHD)' },
      { key: 'Panel', value: 'IPS, 99% sRGB' },
      { key: 'USB-C', value: '90W Power Delivery' },
      { key: 'Conectividad', value: 'HDMI, DisplayPort, USB-C, RJ45' },
    ],
  },
  {
    name: 'Ubiquiti UniFi Dream Machine Pro',
    slug: 'ubiquiti-udm-pro',
    description: 'Router empresarial todo-en-uno con controlador UniFi, firewall avanzado y capacidad para redes de alta velocidad.',
    shortDescription: 'Router empresarial, UniFi Controller, IPS/IDS',
    price: 129999,
    sku: 'UBNT-UDM-PRO',
    category: 'Redes',
    stock: 6,
    lowStockThreshold: 2,
    isNew: true,
    isFeatured: true,
    status: 'published',
    specifications: [
      { key: 'Throughput', value: '3.5 Gbps' },
      { key: 'WAN', value: '2x RJ45 Gigabit' },
      { key: 'LAN', value: '8x RJ45 Gigabit + 2x SFP+' },
      { key: 'HDD', value: 'Bahía 3.5" para almacenamiento' },
      { key: 'Display', value: 'Pantalla táctil integrada' },
    ],
  },
  {
    name: 'HP LaserJet Enterprise M507dn',
    slug: 'hp-laserjet-m507dn',
    description: 'Impresora láser monocromática de alto volumen con velocidad de hasta 45 ppm y seguridad empresarial.',
    shortDescription: 'Impresora láser 45ppm, duplex, red Ethernet',
    price: 84999,
    sku: 'HP-LJ-M507DN',
    category: 'Impresoras',
    stock: 10,
    lowStockThreshold: 3,
    status: 'published',
    specifications: [
      { key: 'Velocidad', value: 'Hasta 45 ppm' },
      { key: 'Resolución', value: '1200 x 1200 dpi' },
      { key: 'Duplex', value: 'Automático' },
      { key: 'Conectividad', value: 'Ethernet, USB' },
      { key: 'Capacidad papel', value: '650 hojas' },
    ],
  },
  {
    name: 'Synology DS920+ NAS',
    slug: 'synology-ds920-nas',
    description: 'Sistema de almacenamiento en red de 4 bahías con transcodificación de hardware y expansión flexible.',
    shortDescription: 'NAS 4 bahías, Intel Celeron, hasta 72TB',
    price: 169999,
    sku: 'SYN-DS920-PLUS',
    category: 'Almacenamiento',
    stock: 7,
    lowStockThreshold: 2,
    isNew: true,
    isFeatured: true,
    status: 'published',
    specifications: [
      { key: 'Bahías', value: '4x 3.5"/2.5" SATA' },
      { key: 'Procesador', value: 'Intel Celeron J4125 4-core' },
      { key: 'Memoria', value: '4GB DDR4 (expandible a 8GB)' },
      { key: 'Red', value: '2x Gigabit Ethernet' },
      { key: 'Capacidad máx', value: 'Hasta 72TB (4x 18TB)' },
    ],
  },
];

async function seed() {
  try {
    console.log('Iniciando seed de productos...');
    
    const payload = await getPayload({ config });

    // Crear categoría si no existe
    const categoriesData = [
      { name: 'Computadoras', icon: 'cpu' },
      { name: 'Laptops', icon: 'laptop' },
      { name: 'Redes', icon: 'wifi' },
      { name: 'Monitores', icon: 'monitor' },
      { name: 'Impresoras', icon: 'printer' },
      { name: 'Almacenamiento', icon: 'hard-drive' },
    ];
    
    for (const catData of categoriesData) {
      const existing = await payload.find({
        collection: 'categories',
        where: {
          name: {
            equals: catData.name,
          },
        },
      });

      if (existing.docs.length === 0) {
        await payload.create({
          collection: 'categories',
          data: {
            name: catData.name,
            slug: catData.name.toLowerCase().replace(/\s+/g, '-'),
            icon: catData.icon,
            description: `Productos de ${catData.name}`,
          },
        });
        console.log(`✓ Categoría creada: ${catData.name}`);
      }
    }

    // Obtener IDs de categorías
    const allCategories = await payload.find({
      collection: 'categories',
      limit: 100,
    });

    const categoryMap: { [key: string]: string } = {};
    allCategories.docs.forEach((cat: any) => {
      categoryMap[cat.name] = cat.id;
    });

    // Crear productos
    for (const product of sampleProducts) {
      const existing = await payload.find({
        collection: 'products',
        where: {
          sku: {
            equals: product.sku,
          },
        },
      });

      if (existing.docs.length === 0) {
        const categoryId = categoryMap[product.category];
        const { category, specifications, ...productData } = product;

        await payload.create({
          collection: 'products',
          data: {
            ...productData,
            category: categoryId,
            description: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        text: productData.description,
                      },
                    ],
                  },
                ],
                direction: null,
                format: '',
                indent: 0,
                version: 1,
              },
            },
            specifications: specifications || [],
          },
        });
        console.log(`✓ Producto creado: ${product.name}`);
      } else {
        console.log(`⊘ Producto ya existe: ${product.name}`);
      }
    }

    console.log('\n✓ Seed completado exitosamente!');
    process.exit(0);
  } catch (error) {
    console.error('Error en seed:', error);
    process.exit(1);
  }
}

seed();
