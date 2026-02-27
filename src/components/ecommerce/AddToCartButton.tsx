"use client";

import { useState } from "react";
import type { PayloadProduct } from "@/lib/payload";
import CartModal from "./CartModal";

type Props = {
  product: PayloadProduct;
  disabled?: boolean;
  className?: string;
};

export default function AddToCartButton({ product, disabled, className }: Props) {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingIndex = cart.findIndex((item: any) => item.id === product.id);

    if (existingIndex >= 0) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        slug: product.slug,
        price: product.price,
        quantity,
        image: product.images?.[0]?.image,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));

    setTimeout(() => {
      setIsAdding(false);
      setShowModal(true); // <--- Reemplaza el alert precario
    }, 600);
  };

  return (
    <>
      <div className={`flex flex-row gap-3 items-center ${className}`}>
        {/* Selector de Cantidad - Rounded Full Interactuable */}
        <div className="flex items-center border border-gray-200 rounded-full overflow-hidden bg-white shadow-sm h-12">
          <button
            type="button"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-4 h-full hover:bg-gray-50 transition-colors text-[#003d7a] font-bold active:scale-90"
            disabled={disabled}
          >
            -
          </button>
          <span className="px-2 h-full flex items-center justify-center font-black text-sm border-x border-gray-100 min-w-[2.5rem] tabular-nums">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity(quantity + 1)}
            className="px-4 h-full hover:bg-gray-50 transition-colors text-[#003d7a] font-bold active:scale-90"
            disabled={disabled}
          >
            +
          </button>
        </div>

        {/* Botón de Acción - FONT BLACK */}
        <button
          type="button"
          onClick={handleAddToCart}
          disabled={disabled || isAdding}
          className="flex-1 bg-gradient-to-r from-[#003d7a] to-[#1e40af] text-white h-12 px-8 rounded-full font-black uppercase tracking-[0.15em] text-[11px] md:text-[12px] shadow-lg transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3"
        >
          {isAdding ? (
            <span className="font-black animate-pulse">Añadiendo...</span>
          ) : (
            <>
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="whitespace-nowrap font-black">
                {disabled ? "Sin Stock" : "Añadir al Carrito"}
              </span>
            </>
          )}
        </button>
      </div>

      {/* Modal de Confirmación Premium */}
      <CartModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        product={product} 
        quantity={quantity}
      />
    </>
  );
}