"use client";

export default function FAQCTA() {
  return (
    <div className="mt-20 text-center border-t border-gray-100 pt-12">
      <h3 className="text-2xl md:text-3xl font-normal text-[#003d7a] mb-6">
        ¿Aún tiene <span className="font-bold">dudas adicionales?</span>
      </h3>
      <p className="text-gray-600 mb-10 text-lg max-w-xl mx-auto">
        Nuestro equipo técnico está disponible para brindarle el asesoramiento especializado que su empresa necesita.
      </p>
      <a
        href="#contacto"
        className="btn-primary"
      >
        Hablar con un asesor
      </a>
    </div>
  );
}