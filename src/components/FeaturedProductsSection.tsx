"use client";

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
          <h2 className="text-3xl md:text-4xl font-normal mb-3" style={{ color: '#003d7a' }}>
            Potencie su infraestructura tecnológica
          </h2>
          <p className="text-lg max-w-2xl mx-auto font-normal text-gray-600">
            Equipamiento confiable, rendimiento empresarial y tecnologías diseñadas para entornos profesionales.
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
            className="inline-flex items-center px-8 py-3.5 text-white bg-gradient-to-r from-ctc-navy to-blue-800 rounded-full transition-all duration-300 shadow-lg shadow-blue-900/30 hover:shadow-xl hover:-translate-y-0.5"
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
