"use client";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#003d7a]">
      {/* Fondo con Gradiente y Esferas de Luz (Estilo Footer) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#003d7a] via-[#002a54] to-[#001a33]">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[100px]"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-normal leading-tight mb-8 text-white">
            Potencie su <br /> <span className="font-bold">infraestructura tecnológica</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto font-normal leading-relaxed">
            Consulte con nuestro equipo para encontrar la solución tecnológica ideal para optimizar su empresa.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-[#002a54] font-bold rounded-full shadow-xl hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1 active:scale-95"
            >
              Hablar con un asesor
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <a
              href="https://wa.me/5491138923268"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-transparent text-white font-bold border-2 border-white/30 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Escribir por WhatsApp
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-sm text-white/60 font-medium uppercase tracking-[0.15em]">
            <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white/40"></div><span>Atención profesional</span></div>
            <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white/40"></div><span>Equipo especializado</span></div>
            <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white/40"></div><span>Soluciones a medida</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}