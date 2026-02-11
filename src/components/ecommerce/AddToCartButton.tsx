"use client";

import { useState } from "react";
import type { PayloadProduct } from "@/lib/payload";

type Props = {
  product: PayloadProduct;
  disabled?: boolean;
};

export default function AddToCartButton({ product, disabled }: Props) {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);

    // Get cart from localStorage
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Check if product already in cart
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

    // Show feedback
    setTimeout(() => {
      setIsAdding(false);
      alert("Producto agregado al carrito");
    }, 500);
  };

  return (
    <div className="flex gap-4 items-center">
      {/* Quantity Selector */}
      <div className="flex items-center border border-gray-300 rounded-lg">
        <button
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className="px-4 py-3 hover:bg-gray-100 transition-colors"
          disabled={disabled}
        >
          -
        </button>
        <span className="px-6 py-3 font-semibold border-x">{quantity}</span>
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="px-4 py-3 hover:bg-gray-100 transition-colors"
          disabled={disabled}
        >
          +
        </button>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        disabled={disabled || isAdding}
        className="btn btn-primary flex-1 disabled:opacity-50"
      >
        {isAdding ? "Agregando..." : disabled ? "Sin Stock" : "Agregar al Carrito"}
      </button>
    </div>
  );
}
