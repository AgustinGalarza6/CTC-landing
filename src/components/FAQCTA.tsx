"use client";

export default function FAQCTA() {
  return (
    <div className="mt-16 text-center">
      <p className="text-gray-600 mb-4 text-lg">¿Necesita asistencia o asesoramiento?</p>
      <a
        href="#contacto"
        className="inline-flex items-center justify-center px-6 py-3 text-white font-medium transition-all duration-200 rounded-full"
        style={{ backgroundColor: '#003d7a' }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#002a5c'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#003d7a'}
      >
        Hablar con un asesor
      </a>
    </div>
  );
}
