'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SLIDE_DURATION = 8000; // ms

const slides = [
  {
    src: "/background/7.png",
    alt: "CTC Sistemas - La tecnología de tu empresa a otro nivel",
  },
  {
    src: "/background/5.png",
    alt: "CTC Sistemas - Soluciones tecnológicas profesionales",
  },
];

export default function HeroSection() {
  const benefits = [
    "Atención profesional para empresas",
    "Equipo técnico especializado",
    "Soluciones adaptadas a cada operación",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setProgressKey((prev) => prev + 1);
    }, SLIDE_DURATION);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const goToSlide = (idx: number) => {
    if (idx === currentSlide) return;
    setCurrentSlide(idx);
    setProgressKey((prev) => prev + 1);
  };

  return (
    <>
      {/* Hero Slider Section */}
      <section
        id="hero"
        className="relative w-full pt-20 md:pt-24 overflow-hidden"
      >
        <div className="relative w-full aspect-video md:aspect-[21/9] lg:aspect-[2.5/1] overflow-hidden">

          {/* Slides */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={slides[currentSlide].src}
                alt={slides[currentSlide].alt}
                fill
                className="object-cover"
                priority
                quality={100}
              />
            </motion.div>
          </AnimatePresence>

          {/* Barra de progreso con gradiente */}
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-black/20 z-10">
            <div
              key={progressKey}
              className="hero-progress-bar h-full"
              style={{ "--slide-duration": `${SLIDE_DURATION}ms` } as React.CSSProperties}
            />
          </div>

          {/* Indicadores de slide */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlide
                    ? "bg-white scale-125 shadow-md"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Ir al slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust badges section */}
      <section className="bg-white py-10 md:py-14 border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Centrado para móvil, fila para desktop */}
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