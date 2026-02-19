import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      {/* Hero Slider Section */}
      <section 
        id="hero" 
        className="relative w-full pt-20 md:pt-24 overflow-hidden"
      >
        {/* Slider Image */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[2.5/1]">
          <Image
            src="/background/Slide-ctc.png"
            alt="CTC Sistemas - La tecnología de tu empresa a otro nivel"
            fill
            className="object-cover"
            priority
            quality={100}
          />
        </div>
      </section>

      {/* Trust badges section - Below hero with white background */}
      <section className="bg-white py-8 md:py-10 border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#003d7a] flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-base md:text-lg font-normal" style={{ color: '#003d7a' }}>Atención profesional para empresas</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#003d7a] flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-base md:text-lg font-normal" style={{ color: '#003d7a' }}>Equipo técnico especializado</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#003d7a] flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-base md:text-lg font-normal" style={{ color: '#003d7a' }}>Soluciones adaptadas a cada operación</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
