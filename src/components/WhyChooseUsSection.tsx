"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Users, BadgeCheck, ShieldCheck, Zap } from "lucide-react";

const reasons = [
  {
    icon: <CheckCircle2 className="w-6 h-6" aria-hidden="true" />,
    title: "Trayectoria y continuidad",
    description: "Más de una década asistiendo a empresas en la gestión, modernización y soporte de su infraestructura tecnológica."
  },
  {
    icon: <Clock className="w-6 h-6" aria-hidden="true" />,
    title: "Asistencia técnica permanente",
    description: "Disponibilidad operativa para garantizar continuidad, minimizar interrupciones y resolver incidentes críticos."
  },
  {
    icon: <Users className="w-6 h-6" aria-hidden="true" />,
    title: "Equipo técnico especializado",
    description: "Profesionales con experiencia en entornos corporativos, soluciones empresariales y tecnologías líderes del mercado."
  },
  {
    icon: <BadgeCheck className="w-6 h-6" aria-hidden="true" />,
    title: "Alianzas estratégicas",
    description: "Trabajamos con fabricantes y plataformas reconocidas, asegurando compatibilidad, respaldo y soporte oficial."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" aria-hidden="true" />,
    title: "Respaldo y garantías",
    description: "Equipamiento y soluciones con garantía oficial, opciones de cobertura extendida y soporte post-implementación."
  },
  {
    icon: <Zap className="w-6 h-6" aria-hidden="true" />,
    title: "Capacidad de respuesta",
    description: "Procesos orientados a la agilidad operativa, priorización de incidentes y asistencia eficiente ante situaciones críticas."
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="nosotros" className="py-24 bg-white relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-normal mb-6 text-[#003d7a]"
          >
            Un partner tecnológico <br className="hidden md:block" /> 
            <span className="font-bold">para su empresa</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Acompañamos a organizaciones exigentes en la implementación, optimización y soporte estratégico de sus entornos digitales.
          </motion.p>
        </div>

        {/* Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white border border-gray-100 p-8 rounded-[2rem] transition-all duration-500 hover:shadow-2xl hover:border-blue-100"
            >
              <div className="flex flex-col items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-[#003d7a] to-blue-600 text-white flex items-center justify-center rounded-2xl shadow-lg shadow-blue-900/20 group-hover:scale-110 transition-transform duration-300">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#003d7a] mb-3 group-hover:text-blue-700 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}