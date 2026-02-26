"use client";

export default function TestimonialsCTA() {
  return (
    <div className="mt-16 text-center">
      <p className="text-gray-600 mb-6 text-lg">
        ¿Desea conocer cómo podemos asistir a su empresa?
      </p>
      {/* BOTÓN CORREGIDO CON btn-primary */}
      <a
        href="#contacto"
        className="btn-primary inline-flex items-center justify-center"
      >
        Hablar con un asesor
      </a>
    </div>
  );
}