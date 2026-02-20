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
    return {
      title: "Servicio no encontrado | CTC Sistemas",
    };
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
          1️⃣ HERO SECTION - Premium & Editorial
      ======================================== */}
      <section className="pt-40 pb-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-cyan-50 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 leading-tight" style={{ color: '#003d7a' }}>
              {service.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed font-light">
              {service.hero.benefitStatement}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contacto"
                className="inline-flex items-center justify-center px-8 py-4 text-white bg-gradient-to-r from-ctc-navy to-blue-800 rounded-full transition-all duration-300 shadow-lg shadow-blue-900/30 hover:shadow-xl hover:-translate-y-0.5"
              >
                {service.hero.primaryCTA}
              </Link>
              <a
                href="https://wa.me/5491138923268"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-gray-700 bg-white border-2 border-gray-300 rounded-full transition-all duration-300 hover:border-ctc-navy hover:text-ctc-navy"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                {service.hero.secondaryCTA}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          2️⃣ EL PROBLEMA - Pain Points
      ======================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-normal mb-12 text-center" style={{ color: '#003d7a' }}>
            {service.problemStatement.title}
          </h2>

          <div className="space-y-3 mb-14">
            {service.problemStatement.problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200/60 hover:bg-gray-50/30 hover:border-gray-300/80 transition-all duration-200 ease-in-out"
              >
                <div className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-gray-400/50 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-gray-400/70"></div>
                </div>
                <p className="text-gray-800 leading-relaxed">{problem}</p>
              </div>
            ))}
          </div>

          <p className="text-lg text-gray-600 text-center italic border-l-4 border-ctc-navy pl-6 py-2 mt-2">
            {service.problemStatement.closingText}
          </p>
        </div>
      </section>

      {/* ========================================
          3️⃣ LA SOLUCIÓN - Qué Hacemos
      ======================================== */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-normal mb-4" style={{ color: '#003d7a' }}>
              {service.whatWeDo.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              {service.whatWeDo.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {service.whatWeDo.capabilities.map((capability, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-0.5 transition-all duration-300 ease-in-out"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-ctc-navy via-blue-700 to-blue-800 shadow-inner flex items-center justify-center mb-5">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3 text-gray-900">
                  {capability.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          4️⃣ COMPONENTES - Beneficios
      ======================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-normal mb-5" style={{ color: '#003d7a' }}>
              {service.benefits.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              {service.slug === 'sistemas-informaticos' 
                ? 'Una arquitectura de sistemas bien diseñada no solo optimiza procesos, sino que mejora estabilidad operativa, confiabilidad de la información y capacidad de crecimiento sostenido.'
                : service.slug === 'erp'
                ? 'Resultados concretos derivados de la implementación de un ecosistema ERP integrado y optimizado.'
                : 'Una infraestructura tecnológica bien diseñada no solo optimiza sistemas, sino que impacta directamente en la estabilidad, eficiencia y proyección de la operación empresarial.'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {service.benefits.items.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-lg hover:shadow-slate-200/50 hover:border-slate-200 transition-all duration-300 ease-in-out"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-100/50 flex items-center justify-center mb-5">
                  <div className="w-2.5 h-2.5 rounded-full bg-ctc-navy"></div>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          5️⃣ DIFERENCIALES - Cómo Trabajamos
      ======================================== */}
      <section className="py-20 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-normal mb-4" style={{ color: '#003d7a' }}>
              {service.howWeWork.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              {service.howWeWork.description}
            </p>
          </div>

          <div className="space-y-5">
            {service.howWeWork.steps.map((step, index) => (
              <div
                key={index}
                className="group flex gap-6 items-start bg-white rounded-2xl p-6 md:p-8 border border-slate-100 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 ease-in-out"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-ctc-navy via-blue-700 to-blue-800 shadow-inner flex items-center justify-center">
                    <span className="text-2xl font-light text-white tracking-tight">{step.number}</span>
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          6️⃣ TRUST SIGNALS - Por Qué Elegirnos
      ======================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-normal mb-14 text-center" style={{ color: '#003d7a' }}>
            {service.trust.title}
          </h2>

          <div className="space-y-3">
            {service.trust.statements.map((statement, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-lg bg-white border border-slate-100 hover:bg-slate-50/30 hover:border-slate-200 transition-all duration-200 ease-in-out"
              >
                <div className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-blue-500/30 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-blue-600/70"></div>
                </div>
                <p className="text-gray-700 leading-relaxed">{statement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          7️⃣ CTA FINAL - Cierre Comercial
      ======================================== */}
      <section className="py-20 bg-gradient-to-br from-ctc-navy via-blue-900 to-blue-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-6 text-white">
            {service.finalCTA.title}
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light">
            {service.finalCTA.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-ctc-navy rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-gray-50"
            >
              {service.finalCTA.primaryButton}
            </Link>
            <a
              href="https://wa.me/5491138923268"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white border-2 border-white rounded-full transition-all duration-300 hover:bg-white/10"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              {service.finalCTA.secondaryButton}
            </a>
          </div>

          {/* Trust Elements */}
          <div className="mt-16 pt-12 border-t border-white/20">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Soluciones empresariales certificadas</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Equipo técnico especializado</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Implementación ágil y profesional</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section Anchor */}
      <div id="contacto"></div>

      <Footer />
    </>
  );
}
