import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white relative overflow-hidden bg-[var(--ctc-navy)]">
      {/* Fondo con Gradiente y Esferas de Luz (Basado en Foto 2) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#003d7a] via-[#002a54] to-[#001a33]">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[100px]"></div>
      </div>

      {/* Contenido Principal */}
      <div className="container-custom py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Logo y Propuesta */}
          <div className="space-y-6">
            <Link href="/" className="inline-block transition-transform hover:scale-105">
              <div className="relative w-48 h-12">
                <Image
                  src="/fonts/logo/ctc-blanco.jpg" 
                  alt="CTC Sistemas"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Acompañamos a organizaciones en la implementación, soporte y 
              <span className="font-bold text-white"> optimización de sus entornos estratégicos.</span>
            </p>
          </div>

          {/* Institucional */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white tracking-tight">Institucional</h4>
            <ul className="space-y-3">
              {["Servicios", "Productos", "Nosotros", "FAQ", "Contacto"].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/#${item.toLowerCase()}`} 
                    className="text-white/70 hover:text-white transition-all hover:translate-x-1 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios IT */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white tracking-tight">Servicios IT</h4>
            <ul className="space-y-3">
              {[
                { label: "Infraestructura", slug: "infraestructura-it" },
                { label: "Gestión ERP", slug: "erp" },
                { label: "Soporte Técnico", slug: "soporte-tecnico" },
                { label: "Licenciamiento", slug: "licencias" }
              ].map((service) => (
                <li key={service.slug}>
                  <Link 
                    href={`/servicios/${service.slug}`} 
                    className="text-white/70 hover:text-white transition-all hover:translate-x-1 inline-block"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold mb-6 text-white tracking-tight">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#003d7a] transition-all">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <a href="mailto:info@ctcsistemas.com.ar" className="text-white/70 hover:text-white transition-colors">info@ctcsistemas.com.ar</a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#003d7a] transition-all">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span className="text-white/70">+54 9 11 3892-3268</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/40">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span className="text-white/70">Lun a Vie: 9 a 18 hs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Franja Legal (Diseño oscuro como en Foto 2) */}
      <div className="border-t border-white/10 bg-black/20 relative z-10">
        <div className="container-custom py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-medium text-white/40 uppercase tracking-[0.2em]">
          <p>© {currentYear} CTC SISTEMAS. TODOS LOS DERECHOS RESERVADOS.</p>
          <div className="flex gap-8">
            <Link href="/privacidad" className="hover:text-white transition-colors">PRIVACIDAD</Link>
            <Link href="/terminos" className="hover:text-white transition-colors">TERMINOS</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}