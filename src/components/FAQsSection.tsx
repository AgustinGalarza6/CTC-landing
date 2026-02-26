import { getPayload } from "payload";
import config from "@/payload.config";
import { FAQAccordion } from "./FAQAccordion";
import FAQCTA from "./FAQCTA";

export default async function FAQsSection() {
  const payload = await getPayload({ config });
  const data = await payload.findGlobal({ slug: "faqs" });

  if (!data?.faqs || data.faqs.length === 0) return null;

  return (
    <section id="faqs" className="py-24 bg-gray-50/50">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-normal leading-tight mb-6" style={{ color: '#003d7a' }}>
            Preguntas <br />
            <span className="font-bold">Frecuentes</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-normal leading-relaxed">
            Resolvemos sus dudas principales sobre nuestras soluciones tecnológicas y procesos de trabajo.
          </p>
        </div>
        <FAQAccordion faqs={data.faqs} />
        <FAQCTA />
      </div>
    </section>
  );
}