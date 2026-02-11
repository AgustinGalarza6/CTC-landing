import { getCachedServices } from "@/lib/payload";

export default async function ServicesDetail() {
  const servicesData = await getCachedServices()();

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="space-y-16">
          {((servicesData as any)?.services || []).map((service: any, index: number) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                  {/* Icon would go here */}
                </div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 text-lg mb-6">{service.description}</p>

                {service.features && service.features.length > 0 && (
                  <ul className="space-y-3">
                    {service.features.map((f: any, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg
                          className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{f.feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
