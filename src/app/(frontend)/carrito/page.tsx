import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CartView from "@/components/ecommerce/CartView";

export const metadata = {
  title: "Carrito | CTC Sistemas",
};

export default function CarritoPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FDFDFD]">
        {/* Hero Section: Centrado Absoluto Global (PC y Móvil) */}
        <section className="bg-[#003d7a] pt-52 pb-44 px-6 relative overflow-hidden flex items-center justify-center">
          {/* Efecto de profundidad técnica */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] -mr-32 -mt-32" />
          
          <div className="container-custom relative z-10 text-center">
            {/* Título imponente centrado globalmente */}
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
              CARRITO
            </h1>
            
            {/* Eslogan técnico centrado globalmente con flex-row en PC */}
            <p className="text-white font-black uppercase tracking-[0.45em] text-[10px] md:text-[11px] mt-8 flex flex-col md:flex-row items-center justify-center gap-4 opacity-95">
              <span className="text-white">CTC SISTEMAS</span>
              {/* El punto separador se oculta en móvil para un mejor apilado vertical */}
              <span className="w-2 h-2 rounded-full bg-white/40 hidden md:block" />
              <span className="text-white/80">SOLUCIONES INFORMÁTICAS</span>
            </p>
          </div>
        </section>

        {/* Contenedor del Carrito con profundidad técnica */}
        <div className="container-custom -mt-24 relative z-20 pb-32 px-4 md:px-6">
          <CartView />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}