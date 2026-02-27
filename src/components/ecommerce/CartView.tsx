"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import { getMediaUrl } from "@/lib/media-utils";

type CartItem = {
  id: string | number;
  name: string;
  slug: string;
  price: number;
  quantity: number;
  image: any;
};

export default function CartView() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const WHATSAPP_NUMBER = "5491138923268"; 

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
  }, []);

  const updateQuantity = (id: string | number, newQuantity: number) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
    );
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const removeItem = (id: string | number) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleWhatsAppCheckout = () => {
    const items = cart.map(i => `• ${i.name} (x${i.quantity})`).join('\n');
    const msg = encodeURIComponent(`¡Hola! Pedido:\n${items}\n\n*Total: ${formatPrice(total)}*`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  if (cart.length === 0) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start">
      
      {/* DETALLE DE PRODUCTOS */}
      <div className="lg:col-span-7 space-y-8 md:space-y-10">
        <div className="bg-white rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl border border-gray-100 overflow-hidden">
          <div className="px-8 py-8 border-b border-gray-50 flex justify-between items-center bg-gray-50/20">
            <h2 className="text-xs md:text-base font-black text-[#003d7a] uppercase tracking-[0.3em]">Detalle</h2>
            <span className="text-[10px] md:text-[12px] font-black text-[#003d7a] bg-white px-4 py-2 rounded-full border border-gray-100 uppercase tracking-widest">
              {cart.length} {cart.length === 1 ? 'Ítem' : 'Ítems'}
            </span>
          </div>

          <div className="divide-y divide-gray-50">
            {cart.map((item) => (
              <div key={item.id} className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 group hover:bg-gray-50/10 transition-colors">
                <div className="relative w-32 h-32 bg-white rounded-[2rem] border border-gray-100 p-4 shrink-0">
                  <Image src={getMediaUrl(item.image)} alt={item.name} fill className="object-contain" />
                </div>

                <div className="flex-1 text-center md:text-left">
                  {/* Nombre sin truncar para máxima visibilidad */}
                  <h3 className="font-black text-xl md:text-2xl text-gray-900 uppercase tracking-tight mb-2 leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-[12px] md:text-[13px] font-black text-gray-400 uppercase tracking-widest mb-8 leading-none">P.U: {formatPrice(item.price)}</p>
                  
                  <div className="flex items-center justify-center md:justify-start gap-10">
                    <div className="flex items-center border border-gray-200 rounded-full h-12 bg-white overflow-hidden">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-6 h-full hover:bg-gray-50 text-[#003d7a] font-bold text-lg">-</button>
                      <span className="px-4 font-black text-base min-w-[3rem] text-center tabular-nums">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-6 h-full hover:bg-gray-50 text-[#003d7a] font-bold text-lg">+</button>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-[12px] font-black text-red-400 uppercase tracking-widest hover:text-red-700 transition-colors border-b-2 border-transparent hover:border-red-100 pb-1">
                      Eliminar
                    </button>
                  </div>
                </div>

                <div className="text-center md:text-right shrink-0 border-t md:border-0 pt-6 md:pt-0 w-full md:w-auto">
                  <p className="text-3xl md:text-4xl font-black text-[#003d7a] tabular-nums tracking-tighter">{formatPrice(item.price * item.quantity)}</p>
                  <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest mt-2 block">Subtotal</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Botón de seguir comprando centrado en móvil */}
        <div className="flex justify-center md:justify-start px-4 md:px-0">
          <Link href="/productos" className="flex items-center gap-4 px-10 py-5 bg-white border border-gray-200 rounded-full shadow-sm active:scale-95 transition-all">
            <svg className="w-5 h-5 text-[#003d7a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-[12px] font-black text-[#003d7a] uppercase tracking-[0.25em]">Continuar comprando</span>
          </Link>
        </div>
      </div>

      {/* RESUMEN FINANCIERO - RESPONSIVE */}
      <div className="lg:col-span-5 lg:sticky lg:top-32 pb-12 lg:pb-0">
        <div className="bg-white p-10 md:p-14 rounded-[3rem] md:rounded-[4rem] shadow-2xl border border-gray-100 flex flex-col items-center">
          <h3 className="text-[14px] md:text-[15px] font-black text-[#003d7a] uppercase tracking-[0.5em] mb-10 opacity-50 text-center leading-none">Resumen</h3>

          <div className="w-full space-y-6 mb-10">
            <div className="flex justify-between items-center px-4 md:px-8">
              <span className="text-[14px] font-black text-gray-400 uppercase tracking-widest">Base Imponible:</span>
              <span className="text-xl md:text-2xl font-black text-gray-700 tabular-nums">{formatPrice(total)}</span>
            </div>
            
            <div className="flex flex-col gap-4 py-8 border-y border-gray-50 items-center justify-center w-full text-center">
              <span className="text-[13px] font-black text-gray-400 uppercase tracking-widest">Entrega Logística</span>
              <span className="text-[12px] font-black text-blue-600 bg-blue-50/50 px-10 py-3 rounded-full border border-blue-100/50 uppercase tracking-[0.2em]">
                A CONVENIR
              </span>
            </div>
          </div>

          <div className="text-center w-full bg-gray-50/30 p-10 md:p-14 rounded-[3rem] border border-gray-100 flex flex-col items-center">
            <span className="text-[12px] md:text-[13px] font-black text-[#003d7a] uppercase tracking-[0.55em] block mb-5 opacity-40 leading-none">Presupuesto Final</span>
            <p className="text-5xl md:text-7xl font-black text-[#003d7a] tabular-nums tracking-tighter leading-none">{formatPrice(total)}</p>
            <p className="text-[11px] font-black text-gray-300 uppercase mt-10 tracking-[0.3em] leading-none">IVA Incluido • Sujeto a stock</p>
          </div>

          <button onClick={handleWhatsAppCheckout} className="w-full mt-10 bg-[#25D366] hover:bg-[#128C7E] text-white py-7 md:py-8 rounded-full font-black uppercase tracking-[0.3em] text-[15px] shadow-2xl flex items-center justify-center gap-6 active:scale-95 transition-all">
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            Finalizar Pedido
          </button>
        </div>
      </div>
    </div>
  );
}