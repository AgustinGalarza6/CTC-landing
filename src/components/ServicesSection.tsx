import React from "react";
import Link from "next/link";

const services = [
  {
    id: 1,
    slug: "infraestructura-it",
    title: "Infraestructura IT",
    description:
      "Diseñamos e implementamos infraestructuras robustas, seguras y escalables para entornos corporativos.",
    bullets: [
      "Redes corporativas",
      "Servidores y virtualización",
      "Seguridad y performance",
    ],
    image: "/images/services/infraestructura.jpg", // Placeholder
  },
  {
    id: 2,
    slug: "sistemas-informaticos",
    title: "Sistemas Informáticos",
    description:
      "Implementación y optimización de sistemas tecnológicos empresariales para mejorar continuidad y eficiencia operativa.",
    bullets: [
      "Integraciones entre plataformas",
      "Optimización operativa",
      "Migración y estandarización",
    ],
    image: "/images/services/sistemas.jpg",
  },
  {
    id: 3,
    slug: "erp",
    title: "ERP / Software de Gestión",
    description:
      "Soluciones de gestión orientadas a optimizar procesos críticos y centralizar información estratégica del negocio.",
    bullets: [
      "Implementación y parametrización",
      "Integraciones y automatización",
      "Soporte y mantenimiento",
    ],
    image: "/images/services/erp.jpg",
  },
  {
    id: 4,
    slug: "licencias",
    title: "Licencias Empresariales",
    description:
      "Licenciamiento oficial y asesoramiento especializado para cumplimiento, seguridad y productividad empresarial.",
    bullets: [
      "Windows y Microsoft 365",
      "Gestión de renovaciones",
      "Asesoramiento técnico",
    ],
    image: "/images/services/licencias.jpg",
  },
  {
    id: 5,
    slug: "soporte-tecnico",
    title: "Soporte Técnico",
    description:
      "Asistencia técnica profesional para garantizar continuidad operativa y respuesta eficiente ante incidentes.",
    bullets: [
      "Soporte remoto y on-site",
      "Mesa de ayuda técnica",
      "Mantenimiento preventivo",
    ],
    image: "/images/services/soporte.jpg",
  },
  {
    id: 6,
    slug: "servicios-tecnologicos",
    title: "Servicios Tecnológicos para Empresas",
    description:
      "Servicios integrales para acompañar decisiones tecnológicas y proyectos orientados a eficiencia y escalabilidad.",
    bullets: [
      "Consultoría IT",
      "Proyectos a medida",
      "Optimización de infraestructura",
    ],
    image: "/images/services/consultoria.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-normal mb-3"
            style={{ color: "#003d7a" }}
          >
            Soluciones Tecnológicas Empresariales
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Infraestructura IT, sistemas de gestión, licencias y servicios
            tecnológicos diseñados para entornos empresariales exigentes.
          </p>
        </div>

        {/* Services Cards - Horizontal Layout */}
        <div className="space-y-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="grid md:grid-cols-[280px_1fr_auto] gap-6 p-6 md:p-7 items-center">
                {/* LEFT: Image with Premium Gradient */}
                <div className="relative w-full h-44 md:h-full min-h-[160px] rounded-2xl overflow-hidden">
                  {/* Premium Tech Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800"></div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-purple-500/20 opacity-60"></div>
                  
                  {/* Grid Pattern Overlay */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                    backgroundSize: '24px 24px'
                  }}></div>
                  
                  {/* Number */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-7xl md:text-8xl font-bold text-white/10 select-none">
                      {service.id}
                    </span>
                  </div>
                  
                  {/* Subtle Corner Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-400/20 rounded-full blur-3xl"></div>
                </div>

                {/* CENTER: Content */}
                <div className="flex flex-col justify-center min-w-0">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 bg-gradient-to-r from-ctc-navy to-blue-800 bg-clip-text text-transparent">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.bullets.map((bullet, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <svg 
                          className="w-5 h-5 text-ctc-blue flex-shrink-0 mt-0.5" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                        <span className="font-medium">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* RIGHT: CTA Button */}
                <div className="flex items-end justify-center md:justify-end pt-4 md:pt-0">
                  <Link
                    href={`/servicios/${service.slug}`}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm text-white bg-gradient-to-r from-ctc-navy to-blue-800 rounded-xl transition-all duration-300 whitespace-nowrap shadow-lg shadow-blue-900/30 hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <span>Explorar solución</span>
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}