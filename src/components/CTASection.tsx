import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container-custom">
        {/* Box container — no full width */}
        <div className="relative overflow-hidden rounded-3xl bg-[#0f2d54] px-8 py-16 md:px-16 md:py-20 text-center shadow-2xl">
          {/* Blobs decorativos */}
          <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-blue-500/15 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-blue-700/20 blur-[80px]" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2
              className="text-4xl md:text-6xl font-normal leading-tight mb-6"
              style={{ color: "#ffffff" }}
            >
              Potencie su<br /><span className="font-extrabold">infraestructura tecnológica</span>
            </h2>

            <p className="text-base md:text-lg mb-10" style={{ color: "rgba(255,255,255,0.7)" }}>
              Consulte con nuestro equipo para encontrar la solución tecnológica ideal<br className="hidden md:block" /> para optimizar su empresa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white font-bold rounded-full shadow-lg hover:bg-gray-50 hover:scale-[1.02] active:scale-95 transition-all duration-200"
                style={{ color: "#0f2d54" }}
              >
                Hablar con un asesor
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>

              <a
                href="https://wa.me/5491138923268"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent font-bold border-2 border-white/30 rounded-full hover:bg-white/10 hover:scale-[1.02] active:scale-95 transition-all duration-200"
                style={{ color: "#ffffff" }}
              >
                Escribir por WhatsApp
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-bold uppercase tracking-[0.18em]" style={{ color: "rgba(255,255,255,0.45)" }}>
              <span className="flex items-center gap-2"><span style={{ color: "rgba(255,255,255,0.3)" }}>•</span> Atención Profesional</span>
              <span className="flex items-center gap-2"><span style={{ color: "rgba(255,255,255,0.3)" }}>•</span> Equipo Especializado</span>
              <span className="flex items-center gap-2"><span style={{ color: "rgba(255,255,255,0.3)" }}>•</span> Soluciones a Medida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}