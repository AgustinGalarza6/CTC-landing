import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getServiceData, getAllServiceSlugs } from "@/data/servicesData";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceData(slug);

  if (!service) {
    return { title: "Servicio no encontrado | CTC Sistemas" };
  }

  return {
    title: `${service.title} | CTC Sistemas`,
    description: service.subtitle,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceData(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <WhatsAppButton />

      {/* ========================================
          1️⃣ HERO SECTION - Deep Blue Aesthetic
      ======================================== */}
      <section className="pt-48 pb-24 relative overflow-hidden bg-[var(--ctc-navy)]">
        {/* Fondo con Gradiente y Esferas de Luz (Estilo Home/Footer) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#003d7a] via-[#002a54] to-[#001a33]">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[100px]"></div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-normal leading-tight mb-8 text-white">
              {service.hero.title.split(' ').slice(0, -2).join(' ')} <br />
              <span className="font-bold">{service.hero.title.split(' ').slice(-2).join(' ')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-12 font-light leading-relaxed">
              {service.hero.benefitStatement}
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link 
                href="#contacto" 
                className="inline-flex items-center justify-center px-10 py-4 bg-white text-[#003d7a] font-bold rounded-full shadow-xl hover:bg-gray-50 transition-all duration-300 active:scale-95"
              >
                {service.hero.primaryCTA}
              </Link>
              <a 
                href="https://wa.me/5491138923268" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-transparent text-white font-bold border-2 border-white/30 rounded-full hover:bg-white/10 transition-all duration-300 active:scale-95"
              >
                {service.hero.secondaryCTA}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          2️⃣ EL PROBLEMA - Pain Points
      ======================================== */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-normal mb-14 text-center text-[#003d7a]">
            {service.problemStatement.title}
          </h2>

          <div className="space-y-4 mb-16">
            {service.problemStatement.problems.map((problem, index) => (
              <div key={index} className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 group hover:border-blue-200 transition-colors">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-[#003d7a]"></div>
                </div>
                <p className="text-gray-700 leading-relaxed font-medium">{problem}</p>
              </div>
            ))}
          </div>

          <p className="text-xl text-gray-600 text-center italic border-l-4 border-[#003d7a] pl-8 py-4">
            {service.problemStatement.closingText}
          </p>
        </div>
      </section>

      {/* ========================================
          3️⃣ LA SOLUCIÓN - Qué Hacemos (Cards Unificadas)
      ======================================== */}
      <section className="py-24 bg-gray-50/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-normal text-[#003d7a] mb-6">
              {service.whatWeDo.title.split(' ').slice(0, -1).join(' ')} <br />
              <span className="font-bold">{service.whatWeDo.title.split(' ').slice(-1)}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              {service.whatWeDo.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Se renderizan las 6 tarjetas dinámicamente desde el objeto capabilities del serviceData */}
            {service.whatWeDo.capabilities.map((cap, index) => (
              <div key={index} className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="btn-primary w-14 h-14 !p-0 mb-6 rounded-2xl flex items-center justify-center shrink-0">
                   <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                     <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                   </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#003d7a]">{cap.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm flex-grow">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          4️⃣ METODOLOGÍA - Cómo Trabajamos
      ======================================== */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container-custom max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-normal text-[#003d7a] mb-6">
              {service.howWeWork.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              {service.howWeWork.description}
            </p>
          </div>

          <div className="space-y-6">
            {service.howWeWork.steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 hover:bg-white hover:shadow-xl transition-all group">
                <div className="btn-primary w-20 h-20 !p-0 !text-3xl font-light rounded-[1.5rem] flex items-center justify-center shrink-0">
                  {step.number}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-3 text-[#003d7a] group-hover:text-blue-700 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          5️⃣ CTA FINAL - Cierre Comercial Unificado
      ======================================== */}
      <section className="py-24 relative overflow-hidden bg-[var(--ctc-navy)]">
        {/* Fondo con Gradiente y Esferas de Luz (Estilo Home/Footer) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#003d7a] via-[#002a54] to-[#001a33]">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[100px]"></div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-normal text-white mb-8">
              {service.finalCTA.title.split(' ').slice(0, -2).join(' ')} <br />
              <span className="font-bold">{service.finalCTA.title.split(' ').slice(-2).join(' ')}</span>
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              {service.finalCTA.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link 
                href="#contacto" 
                className="inline-flex items-center justify-center px-10 py-4 bg-white text-[#003d7a] font-bold rounded-full shadow-xl hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1 active:scale-95"
              >
                {service.finalCTA.primaryButton}
              </Link>

              <a 
                href="https://wa.me/5491138923268" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-transparent text-white font-bold border-2 border-white/30 rounded-full hover:bg-white/10 transition-all duration-300 active:scale-95"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                {service.finalCTA.secondaryButton}
              </a>
            </div>
          </div>
        </div>
      </section>

      <div id="contacto"></div>
      <Footer />
    </>
  );
}