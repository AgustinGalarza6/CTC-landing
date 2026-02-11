import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductsGrid from "@/components/ecommerce/ProductsGrid";
import CategoryFilter from "@/components/ecommerce/CategoryFilter";
import { getProducts, getCategories } from "@/lib/payload";
import Link from "next/link";

export const metadata = {
  title: "Catálogo de Productos | CTCSistemas",
  description: "Hardware profesional y equipamiento tecnológico de última generación para empresas.",
};

export default async function ProductosPage() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 pt-20 md:pt-24">
        {/* Simple Header */}
        <section className="bg-white border-b border-gray-200">
          <div className="container-custom py-8">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm">
              <Link href="/" className="text-gray-700 hover:text-gray-900">
                Inicio
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-900">Productos</span>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Catálogo de Productos
            </h1>
            <p className="text-lg text-gray-600">
              Explora nuestra selección completa de productos tecnológicos
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar - Category Filter */}
              <aside className="lg:w-72 flex-shrink-0">
                <div className="sticky top-24">
                  <CategoryFilter categories={categories} />
                </div>
              </aside>

              {/* Products Grid */}
              <div className="flex-1 min-w-0">
                <ProductsGrid products={products} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
