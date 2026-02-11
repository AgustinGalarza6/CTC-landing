import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductDetail from "@/components/ecommerce/ProductDetail";
import RelatedProducts from "@/components/ecommerce/RelatedProducts";
import { getProductBySlug, getRelatedProducts, getProducts } from "@/lib/payload";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: "Producto no encontrado | CTCSistemas",
    };
  }

  return {
    title: product.metaTitle || `${product.name} | CTCSistemas`,
    description: product.metaDescription || product.shortDescription,
  };
}

export default async function ProductoPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Get category ID for related products
  const categoryId = typeof product.category === "object" 
    ? String(product.category.id) 
    : String(product.category);

  const relatedProducts = await getRelatedProducts(String(product.id), categoryId, 4);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white pt-16 md:pt-20">
        {/* Product Detail */}
        <ProductDetail product={product} />

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <RelatedProducts products={relatedProducts} />
        )}
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
