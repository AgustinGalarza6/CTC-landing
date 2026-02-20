import { getPayload } from "payload";
import config from "@/payload.config";
import { FAQAccordion } from "./FAQAccordion";
import FAQCTA from "./FAQCTA";

export default async function FAQsSection() {
  const payload = await getPayload({ config });
  const data = await payload.findGlobal({ slug: "faqs" });

  if (!data?.faqs || data.faqs.length === 0) {
    return null;
  }

  return (
    <section id="faqs" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-normal sm:text-4xl mb-4" style={{ color: '#003d7a' }}>
            {data.title || "Preguntas Frecuentes"}
          </h2>
        </div>

        <FAQAccordion faqs={data.faqs} />

        <FAQCTA />
      </div>
    </section>
  );
}
