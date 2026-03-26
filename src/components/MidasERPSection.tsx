"use client";

import Link from "next/link";

const MIDAS_PRODUCTS = [
  {
    name: "MIDAS Desktop",
    badge: "Comercio Minorista",
    badgeColor: "bg-blue-100 text-[#003d7a]",
    description:
      "Sistema ERP completo para comercios y micro/pequeñas empresas. Funciona offline sin depender de internet.",
    highlights: [
      "Funcionalidad offline completa",
      "Facturación electrónica integrada (ARCA/AFIP)",
      "POS táctil para ventas rápidas",
      "Control de stock con trazabilidad",
    ],
    url: "https://www.midaserp.com.ar/licenses/desktop",
  },
  {
    name: "MIDAS Web",
    badge: "Todo en el navegador",
    badgeColor: "bg-indigo-100 text-indigo-700",
    description:
      "ERP accesible desde cualquier navegador. Interfaz intuitiva ideal para equipos sin experiencia previa en ERP.",
    highlights: [
      "Acceso desde cualquier dispositivo",
      "Interfaz amigable sin curva de aprendizaje",
      "Puntos de venta, stock y facturación",
      "Actualización de precios masiva",
    ],
    url: "https://www.midaserp.com.ar/licenses/web",
  },
  {
    name: "MIDAS Cloud®",
    badge: "PyME recomendado",
    badgeColor: "bg-emerald-100 text-emerald-700",
    description:
      "Solución basada en la nube para pequeñas y medianas empresas. Escalable, multiempresa y multimoneda.",
    highlights: [
      "Contabilidad integrada en tiempo real",
      "Multiempresa, multiusuario y multimoneda",
      "Integración con Mercado Libre y e-commerce",
      "Reportes exportables a Excel, PDF y Word",
    ],
    url: "https://www.midaserp.com.ar/licenses/cloud",
  },
  {
    name: "MIDAS Mobile",
    badge: "App móvil",
    badgeColor: "bg-orange-100 text-orange-700",
    description:
      "Gestión de ventas y stock desde tu smartphone. Sincronización en tiempo real con el sistema principal.",
    highlights: [
      "Ventas y cobros desde el celular",
      "Control de stock en tiempo real",
      "Sincronización automática",
      "Conexión encriptada y segura",
    ],
    url: "https://www.midaserp.com.ar/licenses/mobile",
  },
];

const KEY_FEATURES = [
  {
    title: "Facturación Electrónica",
    description:
      "Emisión directa de facturas electrónicas conectada a ARCA (ex AFIP), sin controladores fiscales.",
  },
  {
    title: "Stock con Trazabilidad",
    description:
      "Control de artículos con número de serie, lote, partida, medidas, colores y múltiples códigos de barra.",
  },
  {
    title: "Contabilidad Integrada",
    description:
      "Cada operación impacta en línea en la contabilidad. Subdiarios, mayores y balances en tiempo real.",
  },
  {
    title: "Integración con Mercado Libre",
    description:
      "Sincronización bidireccional de artículos, stock y precios con Mercado Libre y canales B2B/B2C.",
  },
  {
    title: "Multiempresa & Multimoneda",
    description:
      "Administrá varias empresas por separado y consolidá datos para una visión completa del grupo.",
  },
  {
    title: "Reportes y Estadísticas",
    description:
      "Cada módulo incluye reportes con filtros avanzados exportables a Excel, Word y PDF.",
  },
];

export default function MidasERPSection() {
  return (
    <section className="py-24 bg-gray-50/70">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full mb-4 tracking-wide uppercase" style={{ backgroundColor: '#E85D2020', color: '#E85D20' }}>
            Partner Oficial MIDAS®
          </span>
          <h2 className="text-3xl md:text-5xl font-normal mb-6" style={{ color: '#1a1a2e' }}>
            ERP MIDAS®: Sistema Integral{" "}
            <span className="font-bold">para tu Negocio</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed" style={{ color: '#4a4a6a' }}>
            MIDAS es un sistema ERP argentino diseñado para simplificar y
            automatizar los procesos administrativos de comercios y empresas.
            Desde facturación electrónica hasta control de stock, todo en una
            única plataforma.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-20">
          {MIDAS_PRODUCTS.map((product) => (
            <a
              key={product.name}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[2.5rem] p-8 border-2 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col" style={{ backgroundColor: '#faf7f4', borderColor: '#e5ddd5' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#E85D20')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = '#e5ddd5')}
            >
              <div className="mb-4">
                <span
                  className={`inline-block px-3 py-1 text-xs font-semibold rounded-full`}
                  style={{ backgroundColor: '#E85D2015', color: '#E85D20' }}
                >
                  {product.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 transition-colors" style={{ color: '#1a1a2e' }}>
                {product.name}
              </h3>
              <p className="text-sm leading-relaxed mb-5 flex-grow" style={{ color: '#4a4a6a' }}>
                {product.description}
              </p>
              <ul className="space-y-2">
                {product.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs" style={{ color: '#4a4a6a' }}>
                    <span className="font-bold mt-0.5 flex-shrink-0" style={{ color: '#E85D20' }}>✓</span>
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all" style={{ borderTop: '1px solid #e5ddd5', color: '#E85D20' }}>
                Ver más información
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ color: '#1a1a2e' }}>
            Funcionalidades clave de MIDAS ERP
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {KEY_FEATURES.map((feat, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 border shadow-sm hover:shadow-md transition-all"
                style={{ backgroundColor: '#faf7f4', borderColor: '#e5ddd5' }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#E85D2018' }}>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#E85D20' }} />
                </div>
                <h4 className="font-bold mb-2" style={{ color: '#1a1a2e' }}>{feat.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: '#4a4a6a' }}>{feat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner - MIDAS style */}
        <div className="relative overflow-hidden rounded-[2.5rem] p-10 md:p-14 text-center" style={{ backgroundColor: '#e8e0d6' }}>
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none" style={{ backgroundColor: '#E85D2015' }} />
          <div className="relative z-10">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#E85D20' }}>
              Demo gratuita disponible
            </p>
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#1a1a2e' }}>
              Probá una demostración de los Sistemas MIDAS®
            </h3>
            <p className="mb-8 max-w-xl mx-auto text-base leading-relaxed" style={{ color: '#4a4a6a' }}>
              Carga tus datos en el formulario y recibirás un link de acceso a nuestra
              demostración en línea con datos precargados para que puedas probar todas las operaciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.midaserp.com.ar/home"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-bold rounded-lg shadow-md hover:opacity-90 transition-all duration-300 active:scale-95 text-sm text-white"
                style={{ backgroundColor: '#E85D20' }}
              >
                Solicitar una demostración →
              </a>
              <Link
                href="#contacto"
                className="inline-flex items-center justify-center px-8 py-3.5 font-bold rounded-lg border-2 hover:opacity-80 transition-all duration-300 active:scale-95 text-sm"
                style={{ borderColor: '#1a1a2e', color: '#1a1a2e' }}
              >
                Consultar con un asesor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
