import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductsGrid from "@/components/ecommerce/ProductsGrid";
import CategoryFilter from "@/components/ecommerce/CategoryFilter";
import { getProducts, getCategories, getBrands } from "@/lib/payload";
import Link from "next/link";
import { Suspense } from "react";

// Forzar renderizado dinámico hasta que se carguen productos en la DB
export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Catálogo de Productos | CTCSistemas",
  description: "Hardware profesional y equipamiento tecnológico de última generación para empresas.",
};

export default async function ProductosPage() {
  const [products, categories, brands] = await Promise.all([
    getProducts(),
    getCategories(),
    getBrands(),
  ]);

  // Solo mostrar categorías que tienen al menos un producto
  const categoriesWithProducts = categories.filter(cat =>
    products.some(p =>
      typeof p.category === 'object'
        ? (p.category as any)?.id === cat.id
        : p.category === cat.id
    )
  );

  return (
    <>
      <Navbar />

      {/* Agregamos pb-32 en móvil y pb-48 en desktop para separar del Footer */}
      <main className="min-h-screen bg-gray-50 pt-20 md:pt-24 pb-32 md:pb-48">
        
        {/* Simple Header */}
        <section className="bg-white border-b border-gray-200">
          <div className="container-custom py-8">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm">
              <Link href="/" className="text-gray-500 hover:text-[#003d7a] transition-colors">
                Inicio
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-[#003d7a] font-medium">Productos</span>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold text-[#003d7a] mb-2">
              Catálogo de Productos
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-lg text-gray-600">
                Explora nuestra selección completa de productos tecnológicos
              </p>
              <a
                href="/api/export-catalog"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#003d7a] text-white text-sm font-semibold rounded-xl shadow hover:bg-[#002d5a] transition-colors whitespace-nowrap"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v13m0 0l-4-4m4 4l4-4M4 20h16" />
                </svg>
                Descargar catálogo (.xlsx)
              </a>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="mt-12 md:mt-16">
          <div className="container-custom">
            <Suspense fallback={<div className="text-center py-12 text-[#003d7a] font-medium">Cargando catálogo...</div>}>
              <div className="flex flex-col lg:flex-row gap-12">
                
                {/* Sidebar - Category Filter */}
                <aside className="lg:w-80 flex-shrink-0">
                  <div className="sticky top-32">
                    <CategoryFilter categories={categoriesWithProducts} brands={brands} />
                  </div>
                </aside>

                {/* Products Grid */}
                <div className="flex-1 min-w-0">
                  <ProductsGrid products={products} />
                </div>
              </div>
            </Suspense>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}