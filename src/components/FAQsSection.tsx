import { getPayload } from "payload";
import config from "@/payload.config";

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
          <h2 className="text-3xl font-bold sm:text-4xl mb-4 text-gray-900">
            {data.title || "Preguntas Frecuentes"}
          </h2>
          {data.subtitle && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {data.subtitle}
            </p>
          )}
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {data.faqs.map((faq: any, index: number) => (
              <details
                key={index}
                className="group border-2 border-gray-200 rounded-lg hover:border-primary-400 transition-all duration-300 bg-white hover:shadow-md"
              >
                <summary className="cursor-pointer p-6 font-medium text-gray-900 hover:text-primary-600 transition-colors duration-200 list-none flex justify-between items-center">
                  <span className="text-lg">{faq.question}</span>
                  <span className="ml-4 flex-shrink-0 text-primary-500 group-open:rotate-180 transition-transform duration-200">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-2">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* CTA adicional */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">¿No encontraste la respuesta que buscabas?</p>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-200 rounded-full font-medium"
          >
            Contactános
          </a>
        </div>
      </div>
    </section>
  );
}
