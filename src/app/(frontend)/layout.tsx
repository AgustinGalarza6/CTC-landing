import type { Metadata } from "next";
import "./globals.css";
import { getCachedSiteSettings } from "@/lib/payload";

export const metadata: Metadata = {
  title: "CTCSistemas | Soluciones Tecnológicas Empresariales",
  description:
    "Soporte IT, implementación de ERP, desarrollo web profesional y venta de hardware. Soluciones integrales para tu empresa.",
  keywords: [
    "soporte it",
    "erp",
    "desarrollo web",
    "hardware",
    "notebooks",
    "servidores",
    "infraestructura it",
    "tecnología empresarial",
  ],
  authors: [{ name: "CTCSistemas" }],
  creator: "CTCSistemas",
  publisher: "CTCSistemas",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ctcsistemas.com.ar"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CTCSistemas | Soluciones Tecnológicas Empresariales",
    description:
      "Soporte IT, implementación de ERP, desarrollo web profesional y venta de hardware.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://ctcsistemas.com.ar",
    siteName: "CTCSistemas",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CTCSistemas | Soluciones Tecnológicas Empresariales",
    description:
      "Soporte IT, implementación de ERP, desarrollo web profesional y venta de hardware.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="font-sans antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
