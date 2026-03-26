import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MidasERPSection from "@/components/MidasERPSection";
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

  // Función corregida: usa text-inherit para que la negrita no pierda el color blanco del padre
  const renderStyledTitle = (text: string) => {
    const words = text.split(' ');
    if (words.length <= 2) {
      return <span className="font-bold text-inherit">{text}</span>;
    }
    const lastTwo = words.slice(-2).join(' ');
    const firstPart = words.slice(0, -2).join(' ');
    return (
      <>
        {firstPart} <br />
        <span className="font-bold text-inherit">{lastTwo}</span>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <WhatsAppButton />

      {/* 1️⃣ HERO SECTION - Corregido text-white explícito */}
      <section className="pt-48 pb-24 relative overflow-hidden bg-[var(--ctc-navy)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#003d7a] via-[#002a54] to-[#001a33]">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[100px]"></div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Se añade text-white para que renderStyledTitle lo herede */}
            <h1 className="text-4xl md:text-6xl font-normal leading-tight mb-8 text-white">
              {renderStyledTitle(service.hero.title)}
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

      {/* 2️⃣ EL PROBLEMA */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center text-[#003d7a]">
            {service.problemStatement.title}
          </h2>

          <div className="space-y-4 mb-16">
            {service.problemStatement.problems.map((problem, index) => (
              <div key={index} className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 group hover:border-blue-200 transition-colors">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 shrink-0">
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

      {/* 3️⃣ LA SOLUCIÓN */}
      <section className="py-24 bg-gray-50/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-normal text-[#003d7a] mb-6">
              {renderStyledTitle(service.whatWeDo.title)}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              {service.whatWeDo.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* 4️⃣ MIDAS ERP (solo para slug erp) */}
      {slug === "erp" && <MidasERPSection />}

      {/* 5️⃣ METODOLOGÍA */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container-custom max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-normal text-[#003d7a] mb-6">
              {renderStyledTitle(service.howWeWork.title)}
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
                  <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5️⃣ CTA FINAL - Corregido text-white explícito */}
      <section className="py-24 relative overflow-hidden bg-[var(--ctc-navy)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#003d7a] via-[#002a54] to-[#001a33]">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[100px]"></div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <div className="max-w-4xl mx-auto text-white">
            {/* Se añade text-white para visibilidad total sobre fondo marino */}
            <h2 className="text-3xl md:text-5xl font-normal mb-8 text-white">
              {renderStyledTitle(service.finalCTA.title)}
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              {service.finalCTA.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link 
                href="#contacto" 
                className="inline-flex items-center justify-center px-10 py-4 bg-white text-[#003d7a] font-bold rounded-full shadow-xl hover:bg-gray-50 transition-all duration-300 active:scale-95"
              >
                {service.finalCTA.primaryButton}
              </Link>
              <a 
                href="https://wa.me/5491138923268" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-transparent text-white font-bold border-2 border-white/30 rounded-full hover:bg-white/10 transition-all duration-300 active:scale-95"
              >
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