"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { getMediaUrl } from "@/lib/media-utils";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  product: any;
  quantity: number;
};

export default function CartModal({ isOpen, onClose, product, quantity }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#003d7a]/20 backdrop-blur-sm"
          />
          
          {/* Modal Card */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl p-8 overflow-hidden"
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500 border border-green-100">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-black text-[#003d7a] uppercase tracking-tighter mb-2">
                ¡Producto añadido!
              </h3>
              <p className="text-gray-500 text-sm font-medium mb-8">
                Has agregado {quantity} unidad(es) de <br/>
                <span className="text-gray-900 font-bold uppercase">{product.name}</span>
              </p>

              <div className="flex flex-col gap-3">
                <Link 
                  href="/carrito"
                  className="w-full bg-gradient-to-r from-[#003d7a] to-[#1e40af] text-white py-4 rounded-full font-black uppercase tracking-[0.15em] text-[11px] shadow-lg hover:brightness-110 transition-all text-center"
                >
                  Ir al Carrito y Cotizar
                </Link>
                <button 
                  onClick={onClose}
                  className="w-full py-4 text-[#003d7a] font-black uppercase tracking-[0.15em] text-[11px] hover:bg-gray-50 rounded-full transition-all"
                >
                  Continuar comprando
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}