import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServicesDetail from "@/components/ServicesDetail";

export const metadata = {
  title: "Servicios | CTCSistemas",
  description: "Soporte IT, ERP, Desarrollo Web y Marketing Digital para empresas.",
};

export default function ServiciosPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white pt-20 md:pt-24">
        {/* Header */}
        <section className="text-white py-16" style={{ background: 'linear-gradient(to bottom right, #003d7a, #475569)' }}>
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nuestros Servicios
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Soluciones tecnológicas integrales para impulsar tu negocio
            </p>
          </div>
        </section>

        {/* Services Detail */}
        <ServicesDetail />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
