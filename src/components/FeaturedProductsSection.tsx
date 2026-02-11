import Link from "next/link";
import type { PayloadProduct, PayloadCategory } from "@/lib/payload";
import ProductCard from "@/components/ecommerce/ProductCard";

type Props = {
  products: PayloadProduct[];
  categories: PayloadCategory[];
};

export default function FeaturedProductsSection({ products, categories }: Props) {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section id="productos" className="py-16 bg-gray-50">
      <div className="container-custom">
        {/* Section Header - Clean and minimal */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Productos Destacados
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Soluciones de hardware profesional para empresas
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA Button - Centered */}
        <div className="text-center">
          <Link
            href="/productos"
            className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-all duration-300 rounded-full"
          >
            Ver Todo el Catálogo
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
