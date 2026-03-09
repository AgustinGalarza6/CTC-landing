"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { formatPrice, hasDiscount, calculateDiscount } from "@/lib/utils";
import { getMediaUrl } from "@/lib/media-utils";

export default function ProductCard({ product, viewMode = "grid" }: { product: any, viewMode?: "grid" | "list" }) {
  const imageUrl = getMediaUrl(product.images?.[0]?.image) || '/placeholder-product.svg';
  const showDiscount = hasDiscount(product.originalPrice, product.price);
  const discount = showDiscount ? calculateDiscount(product.originalPrice!, product.price) : 0;

  // MODO LISTA (Horizontal)
  if (viewMode === "list") {
    return (
      <Link 
        href={`/productos/${product.slug}`} 
        className="flex flex-row items-center gap-6 bg-white p-4 md:p-6 rounded-[2rem] border border-gray-100 hover:shadow-lg transition-all group"
      >
        <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 bg-[#FBFBFB] rounded-2xl p-4 overflow-hidden">
          <Image src={imageUrl} alt={product.name} fill className="object-contain p-2 group-hover:scale-110 transition-transform" />
        </div>
        
        <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="max-w-md">
            <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest block mb-1">
              {product.brand?.name || 'Hardware'}
            </span>
            <h3 className="text-sm md:text-lg font-bold text-[#003d7a] uppercase leading-tight line-clamp-1">{product.name}</h3>
            <p className="hidden md:block text-xs text-gray-400 mt-1 line-clamp-1">{product.shortDescription}</p>
          </div>

          <div className="flex flex-row md:flex-col items-center md:items-end gap-4 md:gap-0 border-t md:border-0 pt-3 md:pt-0">
            <p className="text-xl md:text-2xl font-black text-[#003d7a] tabular-nums">{formatPrice(product.price)}</p>
            <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Stock: {product.stock}</span>
          </div>
        </div>
        
        <div className="hidden md:flex pr-4">
           <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#003d7a] group-hover:bg-[#003d7a] group-hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M9 5l7 7-7 7" /></svg>
           </div>
        </div>
      </Link>
    );
  }

  // MODO GRILLA (Original)
  return (
    <motion.div whileHover={{ y: -5 }} className="h-full w-full">
      <Link 
        href={`/productos/${product.slug}`} 
        className="group flex flex-col h-full bg-white rounded-[2rem] md:rounded-[2.5rem] border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden"
      >
        <div className="relative aspect-square bg-[#FBFBFB] flex items-center justify-center p-6 md:p-10">
          <Image src={imageUrl} alt={product.name} fill className="object-contain p-6 md:p-8 group-hover:scale-105 transition-transform duration-500" />
          {showDiscount && (
            <div className="absolute top-6 left-6 bg-red-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm">
              -{discount}% OFF
            </div>
          )}
        </div>

        <div className="p-8 flex flex-col flex-grow text-left">
          <div className="mb-4">
            <span className="text-[12px] font-bold text-blue-600 uppercase tracking-widest">
              {product.brand?.name || 'Hardware'}
            </span>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-[#003d7a] mb-2 line-clamp-2 leading-tight">{product.name}</h3>
          <div className="mb-4">
            <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">SKU: {product.sku || 'N/A'}</span>
          </div>
          
          <div className="mt-auto pt-6">
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-3xl font-bold text-[#003d7a]">{formatPrice(product.price)}</span>
              <span className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">Final</span>
            </div>
            
            <div className="w-full bg-gradient-to-r from-[#003d7a] to-[#1e40af] text-white py-3.5 px-4 rounded-full text-[13px] font-bold flex items-center justify-center gap-2 group-hover:brightness-110 transition-all duration-300 shadow-md">
              <span>Ver ficha técnica</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}