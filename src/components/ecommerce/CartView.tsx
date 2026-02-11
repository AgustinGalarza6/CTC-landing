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
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    notes: "",
  });

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
  };

  const removeItem = (id: string | number) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmitQuote = async (e: React.FormEvent) => {
    e.preventDefault();

    // Here you would send the quote to your backend/Payload
    const quoteData = {
      ...customerInfo,
      items: cart,
      total,
    };

    console.log("Quote submitted:", quoteData);
    alert("Cotización enviada! Nos pondremos en contacto pronto.");

    // Clear cart
    setCart([]);
    localStorage.removeItem("cart");
  };

  if (cart.length === 0) {
    return (
      <div className="text-center py-12">
        <svg
          className="w-24 h-24 mx-auto text-gray-300 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Tu carrito está vacío</h2>
        <p className="text-gray-600 mb-6">Agrega productos para solicitar una cotización</p>
        <Link href="/productos" className="btn btn-primary">
          Ver Productos
        </Link>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Cart Items */}
      <div className="lg:col-span-2 space-y-4">
        <h2 className="text-2xl font-bold mb-6">Productos en tu carrito</h2>

        {cart.map((item) => (
          <div key={item.id} className="card p-6 flex gap-6">
            {/* Image */}
            <div className="relative w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
              {item.image && (
                <Image
                  src={getMediaUrl(item.image)}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              )}
            </div>

            {/* Info */}
            <div className="flex-1">
              <Link
                href={`/productos/${item.slug}`}
                className="font-bold text-lg hover:text-primary-600 transition-colors"
              >
                {item.name}
              </Link>
              <p className="text-gray-600 mt-1">{formatPrice(item.price)} c/u</p>

              {/* Quantity Controls */}
              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-3 py-1 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 border-x">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-600 hover:text-red-700 text-sm"
                >
                  Eliminar
                </button>
              </div>
            </div>

            {/* Subtotal */}
            <div className="text-right">
              <p className="text-xl font-bold text-primary-600">
                {formatPrice(item.price * item.quantity)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Quote Form */}
      <div className="lg:col-span-1">
        <div className="card p-6 sticky top-24">
          <h3 className="text-xl font-bold mb-6">Solicitar Cotización</h3>

          <form onSubmit={handleSubmitQuote} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Nombre Completo *</label>
              <input
                type="text"
                required
                value={customerInfo.name}
                onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email *</label>
              <input
                type="email"
                required
                value={customerInfo.email}
                onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Teléfono *</label>
              <input
                type="tel"
                required
                value={customerInfo.phone}
                onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Empresa</label>
              <input
                type="text"
                value={customerInfo.company}
                onChange={(e) => setCustomerInfo({ ...customerInfo, company: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Notas</label>
              <textarea
                rows={3}
                value={customerInfo.notes}
                onChange={(e) => setCustomerInfo({ ...customerInfo, notes: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between text-2xl font-bold mb-6">
                <span>Total:</span>
                <span className="text-primary-600">{formatPrice(total)}</span>
              </div>

              <button type="submit" className="btn btn-primary w-full">
                Enviar Cotización
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
