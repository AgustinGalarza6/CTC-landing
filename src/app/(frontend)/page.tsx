import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClientsSlider from "@/components/ClientsSlider";
import ServicesSection from "@/components/ServicesSection";
import FeaturedProductsSection from "@/components/FeaturedProductsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getFeaturedProducts, getCategories } from "@/lib/payload";

// Lazy load below-the-fold components
const WhyChooseUsSection = dynamic(() => import("@/components/WhyChooseUsSection"));
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"));
const FAQsSection = dynamic(() => import("@/components/FAQsSection"));
const CTASection = dynamic(() => import("@/components/CTASection"));

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
