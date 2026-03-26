import { getCachedTestimonials } from "@/lib/payload";
import TestimonialsCTA from "./TestimonialsCTA";

export default async function TestimonialsSection() {
  const data = await getCachedTestimonials()();
  if (!(data as any)?.testimonials || (data as any).testimonials.length === 0) return null;

  return (
    <section id="testimonios" className="py-24 bg-white border-t border-gray-200">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-normal leading-tight mb-6" style={{ color: '#003d7a' }}>
            Empresas que <br />
            <span className="font-bold">confían en CTCSistemas</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-normal leading-relaxed">
            Acompañamos a organizaciones exigentes en la implementación, optimización y soporte estratégico de sus entornos digitales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {((data as any).testimonials || []).map((testimonial: any, index: number) => (
            <div key={index} className="bg-gray-50/50 border border-gray-100 p-8 rounded-[2rem] hover:shadow-xl transition-all duration-300">
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating || 5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              {/* CORRECCIÓN: Usamos &quot; para las comillas de los testimonios */}
              <p className="text-gray-600 mb-6 leading-relaxed italic">&quot;{testimonial.content}&quot;</p>
              <div className="border-t border-gray-200 pt-4">
                <div className="font-bold text-[#003d7a]">{testimonial.name}</div>
                <div className="text-sm text-gray-500 mt-1">{testimonial.position}</div>
              </div>
            </div>
          ))}
        </div>
        <TestimonialsCTA />
      </div>
    </section>
  );
}