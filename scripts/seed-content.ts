/**
 * Seed script para agregar contenido completo a la web
 * Ejecutar con: npm run seed:content
 */

import { getPayload } from 'payload';
import config from '../src/payload.config.js';

async function seed() {
  try {
    console.log('Iniciando seed de contenido completo...\n');
    
    const payload = await getPayload({ config });

    // 1. HERO SECTION
    console.log('📝 Actualizando Hero Section...');
    await payload.updateGlobal({
      slug: 'hero-section',
      data: {
        eyebrow: 'Soluciones Tecnológicas Empresariales',
        headline: 'Equipamiento IT Profesional para Empresas',
        subheadline: 'Proveemos hardware de última generación, servicios de integración y soporte técnico especializado para potenciar la productividad de tu organización.',
        primaryCTA: {
          text: 'Solicitar Cotización',
          href: '#contacto',
        },
        secondaryCTA: {
          text: 'Ver Catálogo',
          href: '#productos',
        },
      },
    });
    console.log('✓ Hero Section actualizado\n');

    // 2. SERVICES
    console.log('📝 Actualizando Servicios...');
    await payload.updateGlobal({
      slug: 'services',
      data: {
        title: 'Nuestros Servicios',
        subtitle: 'Soluciones integrales de tecnología para empresas',
        services: [
          {
            icon: 'headset',
            title: 'Soporte Técnico Especializado',
            description: 'Asistencia especializada on-site y remota 24/7. Mantenimiento preventivo y correctivo de equipos empresariales con técnicos certificados.',
          },
          {
            icon: 'server',
            title: 'Implementación de Infraestructura IT',
            description: 'Diseño e implementación de redes corporativas, servidores y sistemas de almacenamiento empresarial con las mejores prácticas del mercado.',
          },
          {
            icon: 'database',
            title: 'Sistemas ERP y Gestión',
            description: 'Implementación y personalización de sistemas de gestión empresarial. Integración con procesos existentes y migración de datos.',
          },
          {
            icon: 'shield',
            title: 'Ciberseguridad Corporativa',
            description: 'Auditorías de seguridad, implementación de firewalls, sistemas de detección de intrusos y protección de datos críticos.',
          },
          {
            icon: 'code',
            title: 'Desarrollo de Soluciones a Medida',
            description: 'Desarrollo de software empresarial personalizado, aplicaciones web y automatización de procesos de negocio.',
          },
          {
            icon: 'megaphone',
            title: 'Consultoría IT y Transformación Digital',
            description: 'Asesoramiento estratégico en tecnología. Análisis de necesidades, roadmap tecnológico y gestión del cambio organizacional.',
          },
        ],
      },
    });
    console.log('✓ Servicios actualizados\n');

    // 3. WHY CHOOSE US
    console.log('📝 Actualizando Por Qué Elegirnos...');
    await payload.updateGlobal({
      slug: 'why-choose-us',
      data: {
        title: '¿Por qué elegir CTC Sistemas?',
        subtitle: 'Más de 10 años brindando soluciones tecnológicas a empresas líderes',
        points: [
          {
            icon: 'check-circle',
            title: 'Experiencia Comprobada',
            description: 'Más de 10 años en el mercado implementando soluciones para empresas de todos los tamaños.',
          },
          {
            icon: 'clock',
            title: 'Soporte 24/7',
            description: 'Asistencia técnica disponible las 24 horas, todos los días del año para garantizar continuidad.',
          },
          {
            icon: 'users',
            title: 'Equipo Certificado',
            description: 'Técnicos e ingenieros con certificaciones de fabricantes líderes: Dell, HP, Cisco, Microsoft.',
          },
          {
            icon: 'award',
            title: 'Partner Autorizado',
            description: 'Partners certificados de las principales marcas. Acceso a precios preferenciales y soporte directo.',
          },
          {
            icon: 'shield',
            title: 'Garantía Extendida',
            description: 'Todos nuestros equipos incluyen garantía del fabricante más cobertura extendida opcional.',
          },
          {
            icon: 'zap',
            title: 'Respuesta Rápida',
            description: 'Tiempo de respuesta menor a 4 horas en emergencias. Stock permanente de repuestos críticos.',
          },
        ],
      },
    });
    console.log('✓ Por Qué Elegirnos actualizado\n');

    // 4. TESTIMONIALS
    console.log('📝 Actualizando Testimoniales...');
    await payload.updateGlobal({
      slug: 'testimonials',
      data: {
        title: 'Empresas que confían en CTCSistemas',
        subtitle: 'Acompañamos a empresas de distintos sectores en la implementación, optimización y soporte de sus soluciones tecnológicas.',
        testimonials: [
          {
            name: 'Carlos Mendoza',
            position: 'CTO - TechCorp Argentina',
            content: 'CTC Sistemas nos ayudó a migrar toda nuestra infraestructura a la nube en tiempo récord. Su equipo es altamente profesional y el soporte post-implementación es excepcional.',
            rating: 5,
          },
          {
            name: 'María González',
            position: 'Gerente de IT - Grupo Mercantil',
            content: 'Llevamos 5 años trabajando con CTC. La calidad de los equipos y el servicio técnico son inmejorables. Siempre encuentran la solución más adecuada para nuestras necesidades.',
            rating: 5,
          },
          {
            name: 'Roberto Silva',
            position: 'Director de Operaciones - Logística Global',
            content: 'Implementaron toda la red de nuestros 12 almacenes. El proyecto se completó antes de lo previsto y sin interrupciones en la operación. Muy recomendables.',
            rating: 5,
          },
          {
            name: 'Ana Rodríguez',
            position: 'CEO - Estudio Jurídico AR',
            content: 'El servicio de leasing nos permitió renovar todos los equipos sin impacto financiero. El soporte técnico resuelve cualquier inconveniente en minutos.',
            rating: 5,
          },
          {
            name: 'Juan Pérez',
            position: 'Gerente General - Industrias del Sur',
            content: 'Profesionalismo y compromiso en cada proyecto. Nos asesoraron en la mejor solución para nuestro presupuesto y las entregas siempre fueron puntuales.',
            rating: 5,
          },
          {
            name: 'Laura Martínez',
            position: 'Responsable IT - Clínica Central',
            content: 'La implementación del sistema de almacenamiento y backup fue impecable. Ahora tenemos total tranquilidad con la seguridad de nuestros datos críticos.',
            rating: 5,
          },
        ],
      },
    });
    console.log('✓ Testimoniales actualizados\n');

    // 5. CTA SECTION
    console.log('📝 Actualizando CTA Section...');
    await payload.updateGlobal({
      slug: 'cta-section',
      data: {
        title: '¿Listo para llevar tu empresa al siguiente nivel?',
        description: 'Solicita una cotización personalizada sin compromiso. Nuestro equipo analizará tus necesidades y te presentará la mejor solución.',
        buttonText: 'Solicitar Cotización Ahora',
        buttonLink: '#contacto',
      },
    });
    console.log('✓ CTA Section actualizado\n');

    // 6. FAQs
    console.log('📝 Actualizando FAQs...');
    await payload.updateGlobal({
      slug: 'faqs',
      data: {
        title: 'Preguntas Frecuentes',
        subtitle: 'Respuestas a las consultas más comunes',
        faqs: [
          {
            question: '¿Trabajan únicamente con empresas?',
            answer: 'Sí, nuestro enfoque es 100% B2B. Trabajamos con organizaciones de todos los tamaños, desde PyMEs hasta grandes corporaciones, brindando soluciones y atención especializada para el entorno empresarial.',
          },
          {
            question: '¿Realizan implementación e instalación de soluciones?',
            answer: 'Absolutamente. Contamos con técnicos certificados que se encargan de la instalación, configuración, integración y puesta en marcha de todas las soluciones que proveemos. Incluye migración de datos y capacitación del personal.',
          },
          {
            question: '¿Pueden asesorarnos antes de tomar una decisión?',
            answer: 'Por supuesto. Nuestro equipo técnico-comercial realiza un análisis detallado de sus requerimientos sin compromiso. Evaluamos su infraestructura actual y proponemos la solución más adecuada para su operación y presupuesto.',
          },
          {
            question: '¿Qué tipo de soporte ofrecen?',
            answer: 'Ofrecemos múltiples niveles de soporte: asistencia remota, servicio on-site, cobertura 24/7 y diferentes acuerdos de nivel de servicio (SLA) según las necesidades críticas de su operación. Incluye acceso a técnicos especializados.',
          },
          {
            question: '¿Trabajan con soluciones a medida?',
            answer: 'Sí, diseñamos e implementamos proyectos personalizados que se adaptan a la realidad de cada empresa. Desde infraestructuras de red hasta ambientes de servidores completos, cada solución es analizada y planificada en detalle.',
          },
          {
            question: '¿Qué tipo de soluciones tecnológicas ofrecen?',
            answer: 'Proveemos soluciones integrales de IT: infraestructura de servidores, redes corporativas, equipamiento de escritorio, almacenamiento y backup, ciberseguridad, sistemas ERP, desarrollo web, marketing digital y consultoría tecnológica.',
          },
          {
            question: '¿Pueden cotizar soluciones completas?',
            answer: 'Sí, realizamos cotizaciones integrales que incluyen hardware, software, licencias, instalación, configuración y servicios de soporte. Presentamos propuestas detalladas con diferentes opciones según su presupuesto y objetivos.',
          },
        ],
      },
    });
    console.log('✓ FAQs actualizados\n');

    // 7. CONTACT INFO
    console.log('📝 Actualizando Información de Contacto...');
    await payload.updateGlobal({
      slug: 'contact-info',
      data: {
        email: 'info@teknogroup.com.ar',
        phone: '+54 9 1138923268',
        whatsapp: '+54 9 1138923268',
        address: 'Avenida Av Regimientos de Patricios 176',
        workingHours: 'Lunes a viernes de 9 a 18 hs.',
        socialMedia: [
          { platform: 'facebook', url: 'https://facebook.com/ctcsistemas' },
          { platform: 'instagram', url: 'https://instagram.com/ctcsistemas' },
          { platform: 'linkedin', url: 'https://linkedin.com/company/ctcsistemas' },
          { platform: 'twitter', url: 'https://twitter.com/ctcsistemas' },
        ],
      },
    });
    console.log('✓ Información de Contacto actualizada\n');

    // 8. FOOTER
    console.log('📝 Actualizando Footer...');
    await payload.updateGlobal({
      slug: 'footer',
      data: {
        companyDescription: 'CTC Sistemas es líder en provisión de soluciones tecnológicas empresariales. Más de 10 años brindando equipamiento IT de última generación y servicios especializados.',
        copyright: '© 2026 CTC Sistemas. Todos los derechos reservados.',
        links: [
          {
            column: 'Empresa',
            items: [
              { label: 'Sobre Nosotros', href: '#nosotros' },
              { label: 'Nuestros Servicios', href: '#servicios' },
              { label: 'Por Qué Elegirnos', href: '#nosotros' },
              { label: 'Casos de Éxito', href: '#testimonios' },
            ],
          },
          {
            column: 'Productos',
            items: [
              { label: 'Computadoras', href: '#productos' },
              { label: 'Laptops', href: '#productos' },
              { label: 'Redes', href: '#productos' },
              { label: 'Monitores', href: '#productos' },
            ],
          },
          {
            column: 'Soporte',
            items: [
              { label: 'Centro de Ayuda', href: '#contacto' },
              { label: 'Preguntas Frecuentes', href: '#faqs' },
              { label: 'Garantías', href: '#contacto' },
              { label: 'Contacto', href: '#contacto' },
            ],
          },
        ],
      },
    });
    console.log('✓ Footer actualizado\n');

    // 9. SITE SETTINGS
    console.log('📝 Actualizando Site Settings...');
    await payload.updateGlobal({
      slug: 'site-settings',
      data: {
        siteName: 'CTC Sistemas',
        siteDescription: 'Soluciones tecnológicas empresariales - Hardware, infraestructura IT y servicios especializados para empresas',
        siteUrl: 'https://ctcsistemas.com.ar',
        defaultSEO: {
          title: 'CTC Sistemas - Soluciones IT Empresariales',
          description: 'Proveedor líder de hardware empresarial, implementación de infraestructura IT y servicios de soporte técnico. Más de 10 años en el mercado.',
          keywords: 'hardware empresarial, computadoras, servidores, redes, soporte IT, infraestructura tecnológica, equipamiento corporativo',
        },
        analytics: {
          googleAnalyticsId: 'UA-XXXXXXXX-X',
          facebookPixelId: '',
        },
      },
    });
    console.log('✓ Site Settings actualizados\n');

    // 10. NAVIGATION
    console.log('📝 Actualizando Navigation...');
    await payload.updateGlobal({
      slug: 'navigation',
      data: {
        mainMenu: [
          { label: 'Inicio', href: '#hero', type: 'internal' },
          { label: 'Servicios', href: '#servicios', type: 'internal' },
          { label: 'Productos', href: '#productos', type: 'internal' },
          { label: 'Nosotros', href: '#nosotros', type: 'internal' },
          { label: 'Contacto', href: '#contacto', type: 'internal' },
        ],
        ctaButton: {
          text: 'Cotizar',
          href: '#contacto',
        },
      },
    });
    console.log('✓ Navigation actualizado\n');

    console.log('═══════════════════════════════════════');
    console.log('✓ Seed de contenido completado exitosamente!');
    console.log('═══════════════════════════════════════\n');
    console.log('Contenido creado:');
    console.log('  ✓ Hero Section con CTAs');
    console.log('  ✓ 8 Servicios empresariales');
    console.log('  ✓ 6 Ventajas competitivas');
    console.log('  ✓ 6 Testimonios de clientes');
    console.log('  ✓ 8 Preguntas frecuentes');
    console.log('  ✓ Información de contacto completa');
    console.log('  ✓ Footer con links');
    console.log('  ✓ Configuración del sitio');
    console.log('  ✓ Navegación principal\n');
    
    process.exit(0);
  } catch (error) {
    console.error('Error en seed de contenido:', error);
    process.exit(1);
  }
}

seed();
