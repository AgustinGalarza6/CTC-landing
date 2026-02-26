"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { PayloadProduct } from "@/lib/payload";
import { formatPrice, hasDiscount, calculateDiscount } from "@/lib/utils";
import { getMediaUrl } from "@/lib/media-utils";

export default function ProductCard({ product }: { product: PayloadProduct }) {
  const imageUrl = getMediaUrl(product.images?.[0]?.image);
  const showDiscount = hasDiscount(product.originalPrice, product.price);
  const discount = showDiscount ? calculateDiscount(product.originalPrice!, product.price) : 0;

  return (
    <motion.div whileHover={{ y: -5 }} className="h-full">
      <Link 
        href={`/productos/${product.slug}`} 
        className="group flex flex-col h-full bg-white rounded-[2.5rem] border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden"
      >
        <div className="relative aspect-square bg-[#FBFBFB] flex items-center justify-center p-10">
          {imageUrl ? (
            <Image src={imageUrl} alt={product.name} fill className="object-contain p-8 group-hover:scale-105 transition-transform duration-500" />
          ) : (
            <span className="text-gray-300 text-xs italic">Imagen no disponible</span>
          )}
          {showDiscount && (
            <div className="absolute top-6 left-6 bg-red-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm">
              -{discount}% OFF
            </div>
          )}
        </div>

        <div className="p-8 flex flex-col flex-grow text-left">
          <div className="mb-4">
            <span className="text-[12px] font-bold text-blue-600 uppercase tracking-widest">
              {typeof product.category === 'object' ? product.category?.name : 'Hardware'}
            </span>
          </div>
          <h3 className="text-xl font-bold text-[#003d7a] mb-2 line-clamp-2 leading-tight">{product.name}</h3>
          <div className="mb-4">
            <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">SKU: {product.sku || 'N/A'}</span>
          </div>
          <p className="text-[14px] text-gray-500 mb-8 line-clamp-2 font-light leading-relaxed">{product.shortDescription}</p>

          <div className="mt-auto">
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-3xl font-bold text-[#003d7a]">{formatPrice(product.price)}</span>
              <span className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">Final</span>
            </div>
            
            {/* BOTÓN CORREGIDO: En un solo nivel */}
            <div className="w-full bg-gradient-to-r from-[#003d7a] to-[#1e40af] text-white py-3.5 px-4 rounded-full text-[13px] font-bold flex items-center justify-center gap-2 group-hover:brightness-110 transition-all duration-300 shadow-md whitespace-nowrap">
              <span>Ver especificaciones</span>
              <svg className="w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}