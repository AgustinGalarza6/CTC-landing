import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CTC Sistemas | Soluciones Tecnológicas Empresariales",
  description: "Soporte IT, implementación de ERP, infraestructura y servicios tecnológicos profesionales para empresas.",
  icons: {
    icon: "/fonts/logo/logo-metadata.png",
    apple: "/fonts/logo/logo-metadata.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased bg-white text-gray-900 selection:bg-blue-100">
        {children}
      </body>
    </html>
  );
}