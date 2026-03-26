"use client";
import Link from "next/link";
import type { PayloadProduct, PayloadCategory } from "@/lib/payload";
import ProductCard from "@/components/ecommerce/ProductCard";

type Props = {
  products: PayloadProduct[];
  categories: PayloadCategory[];
};

export default function FeaturedProductsSection({ products, categories }: Props) {
  if (!products || products.length === 0) return null;

  return (
    <section id="productos" className="py-20 bg-white border-t border-gray-200">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-normal leading-tight mb-6" style={{ color: '#003d7a' }}>
            Potencie su <br />
            <span className="font-bold">infraestructura tecnológica</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-normal leading-relaxed">
            Equipamiento confiable, rendimiento empresarial y tecnologías diseñadas para entornos profesionales.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          {/* BOTÓN CORREGIDO CON LA CLASE btn-primary */}
          <Link
            href="/productos"
            className="btn-primary inline-flex items-center gap-2"
          >
            <span>Ver Todo el Catálogo</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}