"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FloatingCartButton() {
  const [itemCount, setItemCount] = useState(0);
  const pathname = usePathname();

  const updateCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setItemCount(cart.length);
  };

  useEffect(() => {
    updateCount();
    window.addEventListener("cartUpdated", updateCount);
    return () => window.removeEventListener("cartUpdated", updateCount);
  }, []);

  if (itemCount === 0 || pathname === "/carrito") return null;

  return (
    /* ESTRATEGIA DE APILADO:
       - Móvil: Bottom-6 para que sea la base.
       - Desktop: Bottom-10.
       - IMPORTANTE: Debes ir a tu componente de WhatsApp y ponerle 
         'bottom-24' (móvil) y 'bottom-28' (desktop) para que flote ARRIBA de este.
    */
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[90] w-[90%] max-w-[380px] md:max-w-none md:w-auto md:left-auto md:right-10 md:translate-x-0 md:bottom-10">
      <Link 
        href="/carrito"
        className="flex items-center justify-center bg-gradient-to-r from-[#003d7a] to-[#1e40af] text-white px-8 py-4 md:py-3.5 rounded-full shadow-[0_15px_35px_-5px_rgba(0,61,122,0.4)] hover:scale-105 active:scale-95 transition-all group border border-white/10"
      >
        <span className="text-[12px] md:text-[11px] font-black uppercase tracking-[0.25em] whitespace-nowrap drop-shadow-sm">
          Ver mi pedido <span className="ml-2 text-blue-300">({itemCount})</span>
        </span>
      </Link>
    </div>
  );
}