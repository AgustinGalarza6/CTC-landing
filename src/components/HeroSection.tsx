import Image from "next/image";

export default function HeroSection() {
  const benefits = [
    "Atención profesional para empresas",
    "Equipo técnico especializado",
    "Soluciones adaptadas a cada operación",
  ];

  return (
    <>
      {/* Hero Slider Section */}
      <section 
        id="hero" 
        className="relative w-full pt-20 md:pt-24 overflow-hidden"
      >
        {/* USAMOS aspect-video (16/9) en móvil para que la imagen NO se recorte.
           'object-contain' asegura que se vea el 100% de tu diseño (marcos y texto).
           Le ponemos el fondo azul exacto para que no queden bordes blancos si sobra espacio.
        */}
        <div className="relative w-full aspect-video md:aspect-[21/9] lg:aspect-[2.5/1] bg-[#003d7a]">
          <Image
            src="/background/Slide-ctc.png"
            alt="CTC Sistemas - La tecnología de tu empresa a otro nivel"
            fill
            className="object-contain" // IMPORTANTE: Mantiene la imagen íntegra
            priority
            quality={100}
          />
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