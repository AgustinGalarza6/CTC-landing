'use client';

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<{ destroy: () => void } | null>(null);

  const benefits = [
    "Atencion profesional para empresas",
    "Equipo tecnico especializado",
    "Soluciones adaptadas a cada operacion",
  ];

  useEffect(() => {
    let destroyed = false;

    const initVanta = async () => {
      const THREE = await import("three");
      const VANTA = (await import("vanta/dist/vanta.net.min")).default;

      if (destroyed || !vantaRef.current) return;

      vantaEffect.current = VANTA({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xffffff,
        backgroundColor: 0x003d7a,
        points: 12,
        spacing: 13,
      });
    };

    initVanta();

    return () => {
      destroyed = true;
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <>
      <section
        id="hero"
        ref={vantaRef}
        className="relative w-full pt-20 md:pt-24 min-h-[560px] md:min-h-[680px] lg:min-h-[780px] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/40 z-[1]" />
        <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center max-w-4xl mx-auto py-32">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight drop-shadow-lg">
            Potenciamos su infraestructura con{" "}
            <span className="text-white">soluciones IT premium</span>
          </h1>
          <p className="mt-6 text-base md:text-xl text-white/80 max-w-2xl">
            Soporte tecnico, infraestructura de red, ciberseguridad y mas para que su empresa opere sin interrupciones.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#servicios"
              className="px-8 py-3 rounded-lg border-2 border-white/60 hover:border-white hover:bg-white/10 text-white font-semibold text-base transition-colors backdrop-blur-sm"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 md:py-14 border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center md:flex-row gap-3 text-center md:text-left">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#003d7a] flex items-center justify-center shadow-sm">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm md:text-base lg:text-lg font-medium text-[#003d7a]">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}