import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white relative overflow-hidden bg-gradient-to-br from-ctc-navy via-blue-900 to-blue-800">
      {/* Subtle background pattern with gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <div className="relative w-auto h-10 aspect-[4/1]">
                <Image
                  src="/fonts/logo/ctc-blanco.jpg"
                  alt="CTC Logo"
                  fill
                  className="object-contain"
                  sizes="200px"
                />
              </div>
            </Link>
            <p className="text-white/80 text-sm mb-6 leading-relaxed">
              Soluciones tecnológicas para entornos empresariales.<br />
              Infraestructura IT, licenciamiento y soporte profesional.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/#servicios" className="text-white/80 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/#productos" className="text-white/80 hover:text-white transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className="text-white/80 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/servicios/infraestructura-it" className="text-white/80 hover:text-white transition-colors">
                  Infraestructura IT
                </Link>
              </li>
              <li>
                <Link href="/servicios/sistemas-informaticos" className="text-white/80 hover:text-white transition-colors">
                  Sistemas Informáticos
                </Link>
              </li>
              <li>
                <Link href="/servicios/erp" className="text-white/80 hover:text-white transition-colors">
                  ERP / Software de Gestión
                </Link>
              </li>
              <li>
                <Link href="/servicios/licencias" className="text-white/80 hover:text-white transition-colors">
                  Licencias Empresariales
                </Link>
              </li>
              <li>
                <Link href="/servicios/soporte-tecnico" className="text-white/80 hover:text-white transition-colors">
                  Soporte Técnico
                </Link>
              </li>
              <li>
                <Link href="/servicios/servicios-tecnologicos" className="text-white/80 hover:text-white transition-colors">
                  Servicios Tecnológicos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:info@teknogroup.com.ar"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  info@teknogroup.com.ar
                </a>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-white/80">+54 9 1138923268</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="whitespace-pre-line text-white/80">
                  Lunes a viernes de 9 a 18 hs.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20">
        <div className="container-custom py-6">
          <div className="text-center text-sm text-white/80">
            <p>© {currentYear} CTC Sistemas. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
