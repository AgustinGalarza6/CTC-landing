import dynamicImport from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClientsSlider from "@/components/ClientsSlider";
import ServicesSection from "@/components/ServicesSection";
import FeaturedProductsSection from "@/components/FeaturedProductsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getFeaturedProducts, getCategories } from "@/lib/payload";

// Forzar renderizado dinámico hasta que se carguen productos en la DB
export const dynamic = 'force-dynamic';

// Lazy load below-the-fold components
const WhyChooseUsSection = dynamicImport(() => import("@/components/WhyChooseUsSection"));
const TestimonialsSection = dynamicImport(() => import("@/components/TestimonialsSection"));
const FAQsSection = dynamicImport(() => import("@/components/FAQsSection"));
const CTASection = dynamicImport(() => import("@/components/CTASection"));

export default async function Home() {
  // Fetch data from Payload
  const [products, categories] = await Promise.all([
    getFeaturedProducts(),
    getCategories(),
  ]);

  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Clients Slider */}
        <ClientsSlider />

        {/* Services Section */}
        <ServicesSection />

        {/* Featured Products Section */}
        <FeaturedProductsSection products={products} categories={categories} />

        {/* Why Choose Us Section */}
        <WhyChooseUsSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* FAQs Section */}
        <FAQsSection />

        {/* CTA Section */}
        <CTASection />

        {/* Contact Form */}
        <ContactSection />
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </>
  );
}
