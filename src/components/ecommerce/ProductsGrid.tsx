"use client";

import type { PayloadProduct } from "@/lib/payload";
import ProductCard from "./ProductCard";
import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import FloatingCartButton from "./FloatingCartButton"; 

type Props = {
  products: PayloadProduct[];
};

export default function ProductsGrid({ products }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("categoria");

  const filteredAndSortedProducts = useMemo(() => {
    let result = products;
    if (currentCategory) {
      result = result.filter((product) => {
        const categorySlug = typeof product.category === 'string' 
          ? product.category 
          : product.category?.slug;
        return categorySlug === currentCategory;
      });
    }
    if (searchQuery) {
      result = result.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    return result;
  }, [products, searchQuery, currentCategory]);

  return (
    <div className="relative w-full max-w-[1400px] mx-auto px-4 md:px-6">
      
      {/* Buscador Estilo Premium */}
      <div className="bg-white rounded-3xl border border-gray-100 p-6 md:p-8 mb-10 shadow-xl shadow-blue-900/5">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="w-full md:max-w-md">
             <input 
               type="text"
               placeholder="Buscar en el catálogo..."
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               className="w-full bg-gray-50 border-none rounded-full px-8 py-4 text-sm font-bold focus:ring-2 focus:ring-[#003d7a]/20 transition-all"
             />
          </div>
          <div className="text-[11px] font-black text-[#003d7a] uppercase tracking-widest bg-gray-50 px-6 py-3 rounded-full border border-gray-100">
            {filteredAndSortedProducts.length} productos disponibles
          </div>
        </div>
      </div>

      {/* Grilla Centrada y Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 justify-items-center">
        {filteredAndSortedProducts.map((product) => (
          <div key={product.id} className="w-full max-w-[340px] md:max-w-none flex justify-center">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Único botón flotante en esta vista */}
      <FloatingCartButton /> 
    </div>
  );
}