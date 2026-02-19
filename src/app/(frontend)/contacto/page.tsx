import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";

export const metadata = {
  title: "Contacto | CTCSistemas",
  description: "Contacta con nuestro equipo de expertos. Estamos para ayudarte.",
};

export default function ContactoPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 pt-20 md:pt-24">
        {/* Header */}
        <section className="text-white py-16" style={{ background: 'linear-gradient(to bottom right, #003d7a, #475569)' }}>
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contáctanos
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Estamos aquí para ayudarte con tus proyectos tecnológicos
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <ContactInfo />

              {/* Contact Form */}
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
