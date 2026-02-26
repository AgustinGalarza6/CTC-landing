"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    slug: "infraestructura-it",
    title: "Infraestructura IT",
    description: "Diseñamos e implementamos infraestructuras robustas, seguras y escalables para entornos corporativos de alta demanda.",
    bullets: ["Redes corporativas", "Servidores y virtualización", "Seguridad y performance"],
    image: "/Images-Services/Infraestructura IT.png",
  },
  {
    id: 2,
    slug: "sistemas-informaticos",
    title: "Sistemas Informáticos",
    description: "Implementación y optimización de sistemas tecnológicos para mejorar la continuidad y eficiencia operativa de su negocio.",
    bullets: ["Integraciones entre plataformas", "Optimización operativa", "Migración y estandarización"],
    // Se mantiene la tilde exacta de tu captura
    image: "/Images-Services/Sistemas Informáticos.jpg",
  },
  {
    id: 3,
    slug: "erp",
    title: "ERP / Software de Gestión",
    description: "Soluciones de gestión orientadas a optimizar procesos críticos y centralizar información estratégica de manera eficiente.",
    bullets: ["Implementación y parametrización", "Integraciones y automatización", "Soporte y mantenimiento"],
    // CORRECCIÓN: Se agregaron los DOS ESPACIOS exactos entre ERP y Software como muestra tu captura
    image: "/Images-Services/ERP  Software de Gestión.jpg",
  },
  {
    id: 4,
    slug: "licencias",
    title: "Licencias Empresariales",
    description: "Licenciamiento oficial y asesoramiento especializado para garantizar cumplimiento, seguridad y productividad en su organización.",
    bullets: ["Windows y Microsoft 365", "Gestión de renovaciones", "Asesoramiento técnico"],
    image: "/Images-Services/Licencias Empresariales.jpg",
  },
  {
    id: 5,
    slug: "soporte-tecnico",
    title: "Soporte Técnico",
    description: "Asistencia técnica profesional constante para garantizar la continuidad operativa total y una respuesta eficiente ante cualquier incidente.",
    bullets: ["Soporte remoto y on-site", "Mesa de ayuda técnica", "Mantenimiento preventivo"],
    // Se mantiene la tilde exacta de tu captura
    image: "/Images-Services/Soporte Técnico.jpg",
  },
  {
    id: 6,
    slug: "servicios-tecnologicos",
    title: "Servicios Tecnológicos",
    description: "Servicios integrales diseñados para acompañar decisiones tecnológicas estratégicas y proyectos de alta escalabilidad futura.",
    bullets: ["Consultoría IT", "Proyectos a medida", "Optimización de infraestructura"],
    // CORRECCIÓN: Nombre exacto según tu captura
    image: "/Images-Services/Servicios Tecnológicos para Empresas.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-24 bg-gray-50/50">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-normal leading-tight mb-6" style={{ color: '#003d7a' }}>
            Soluciones Tecnológicas <br />
            <span className="font-bold">Empresariales</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-normal leading-relaxed">
            Infraestructura IT, sistemas de gestión, licencias y servicios
            tecnológicos diseñados para entornos empresariales exigentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[2.5rem] p-4 shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
            >
              <div className="relative h-60 w-full rounded-[2rem] overflow-hidden mb-6 flex-shrink-0 bg-gray-100">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              
              <div className="px-4 pb-6 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#003d7a]">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700 font-medium">
                      <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/servicios/${service.slug}`}
                  className="btn-primary w-full group !py-3.5"
                >
                  <span className="text-sm font-bold">Explorar solución</span>
                  <svg
                    className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}