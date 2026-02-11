import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CartView from "@/components/ecommerce/CartView";

export const metadata = {
  title: "Carrito | CTCSistemas",
  description: "Revisa tu carrito de compras y solicita tu cotización.",
};

export default function CarritoPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary-600 to-secondary-500 text-white py-16">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold">
              Carrito de Compras
            </h1>
          </div>
        </section>

        {/* Cart */}
        <section className="section-padding">
          <div className="container-custom">
            <CartView />
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
