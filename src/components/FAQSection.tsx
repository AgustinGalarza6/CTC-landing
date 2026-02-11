import { getCachedFAQs } from "@/lib/payload";
import { FAQAccordion } from "./FAQAccordion";

// Server component wrapper
export default async function FAQSection() {
  const data = await getCachedFAQs()();

  if (!(data as any)?.faqs || (data as any).faqs.length === 0) {
    return null;
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {(data as any)?.title || "Preguntas Frecuentes"}
          </h2>
        </div>

        {/* FAQ Accordion */}
        <FAQAccordion faqs={(data as any).faqs || []} />
      </div>
    </section>
  );
}

