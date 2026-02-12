import { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServiceHero from "@/components/service-page/ServiceHero";
import ProblemStatement from "@/components/service-page/ProblemStatement";
import WhatWeDo from "@/components/service-page/WhatWeDo";
import Benefits from "@/components/service-page/Benefits";
import HowWeWork from "@/components/service-page/HowWeWork";
import TrustBlock from "@/components/service-page/TrustBlock";
import FinalCTA from "@/components/service-page/FinalCTA";
import { getServiceData, getAllServiceSlugs } from "@/data/servicesData";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all services
export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for each service
export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const serviceData = getServiceData(params.slug);

  if (!serviceData) {
    return {
      title: "Servicio no encontrado | CTCSistemas",
    };
  }

  return {
    title: `${serviceData.title} | CTCSistemas`,
    description: serviceData.subtitle,
    openGraph: {
      title: `${serviceData.title} | CTCSistemas`,
      description: serviceData.subtitle,
    },
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const serviceData = getServiceData(params.slug);

  // If service not found, show 404
  if (!serviceData) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <ServiceHero data={serviceData.hero} title={serviceData.title} />

        {/* Problem Statement */}
        <ProblemStatement data={serviceData.problemStatement} />

        {/* What We Do */}
        <WhatWeDo data={serviceData.whatWeDo} />

        {/* Benefits */}
        <Benefits data={serviceData.benefits} />

        {/* How We Work */}
        <HowWeWork data={serviceData.howWeWork} />

        {/* Trust Block */}
        <TrustBlock data={serviceData.trust} />

        {/* Final CTA */}
        <FinalCTA data={serviceData.finalCTA} serviceTitle={serviceData.title} />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
