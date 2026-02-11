import React from "react";
import Link from "next/link";

const services = [
  {
    id: 1,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Soporte Técnico Especializado",
    description:
      "Aseguramos la continuidad operativa de su infraestructura tecnológica mediante esquemas de asistencia técnica profesional, preventiva y correctiva.",
    bullets: [
      "Mesa de ayuda técnica",
      "Soporte remoto y on-site",
      "Diagnóstico y resolución de incidencias",
      "Mantenimiento preventivo",
      "Gestión de fallas críticas",
      "Optimización de rendimiento",
    ],
  },
  {
    id: 2,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    title: "Implementación de Infraestructura IT",
    description:
      "Arquitecturas tecnológicas robustas, escalables y seguras para soportar el crecimiento empresarial con las mejores prácticas del mercado.",
    bullets: [
      "Diseño de redes corporativas",
      "Implementación de servidores",
      "Virtualización",
      "Seguridad perimetral",
      "Optimización de performance",
      "Escalabilidad",
    ],
  },
  {
    id: 3,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    title: "Sistemas ERP & Gestión Empresarial",
    description:
      "Soluciones ERP para optimizar la administración de recursos, integrar procesos críticos y centralizar la información empresarial en tiempo real.",
    bullets: [
      "Venta de licencias ERP",
      "Implementación y parametrización",
      "Integraciones entre sistemas",
      "Migraciones",
      "Soporte y mantenimiento",
      "Automatización de procesos",
    ],
  },
  {
    id: 4,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Ciberseguridad Corporativa",
    description:
      "Protegemos la infraestructura tecnológica de tu empresa contra amenazas internas y externas, asegurando la integridad de tus datos críticos.",
    bullets: [
      "Auditorías de seguridad",
      "Firewalls y hardening",
      "Protección de endpoints",
      "Monitoreo",
      "Respuesta ante incidentes",
      "Buenas prácticas",
    ],
  },
  {
    id: 5,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Desarrollo de Soluciones a Medida",
    description:
      "Plataformas y sistemas empresariales personalizados, aplicaciones web y automatizaciones diseñadas específicamente para tus procesos de negocio.",
    bullets: [
      "Software empresarial",
      "Aplicaciones web",
      "Integraciones ERP / APIs",
      "Automatizaciones",
      "Dashboards",
      "Sistemas internos",
    ],
  },
  {
    id: 6,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Consultoría IT y Transformación Digital",
    description:
      "Asesoramiento estratégico en tecnología. Análisis de necesidades, roadmap tecnológico y gestión del cambio organizacional hacia la digitalización.",
    bullets: [
      "Análisis de infraestructura",
      "Roadmap tecnológico",
      "Optimización de procesos",
      "Estrategia digital",
      "Arquitectura de soluciones",
      "Escalamiento tecnológico",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-ctc-navy">
            Soluciones Tecnológicas Empresariales
          </h2>
          <p className="text-lg text-gray-600">
            Servicios especializados, arquitectura tecnológica e implementación estratégica
            para entornos corporativos modernos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl border border-gray-200 p-8 transition-all duration-300 hover:shadow-xl hover:border-ctc-blue/30 hover:-translate-y-1 flex flex-col"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 bg-ctc-navy text-white rounded-xl mb-6 group-hover:bg-ctc-blue transition-colors duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-ctc-navy mb-3 leading-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-5 leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Bullets */}
              <ul className="space-y-2.5 mb-6 flex-grow">
                {service.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <svg
                      className="w-4 h-4 text-ctc-blue mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                href="/#contacto"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-ctc-blue hover:text-white bg-white hover:bg-ctc-blue border-2 border-ctc-blue rounded-lg transition-all duration-300 group-hover:shadow-md"
              >
                Más información
                <svg
                  className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
