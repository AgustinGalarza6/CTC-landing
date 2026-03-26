"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "./ProductCard";
import FloatingCartButton from "./FloatingCartButton"; 

export default function ProductsGrid({ products }: { products: any[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const searchParams = useSearchParams();

  const filters = {
    category: searchParams.get("categoria"),
    brand: searchParams.get("marca"),
  };

  function filterProducts(items: any[], { category, brand }: { category: string | null; brand: string | null }) {
    return items.filter((p) => {
      const catMatch = !category || (typeof p.category === "object" ? p.category?.slug === category : p.category === category);
      const brandMatch = !brand || p.brand?.slug === brand;
      return catMatch && brandMatch;
    });
  }

  const filteredProducts = useMemo(() => {
    const byFilters = filterProducts(products, filters);
    if (!searchQuery) return byFilters;
    return byFilters.filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [products, searchQuery, filters.category, filters.brand]);

  return (
    <div className="relative w-full max-w-[1400px] mx-auto">
      {/* TOOLBAR PREMIUM */}
      <div className="bg-white rounded-3xl border border-gray-100 p-6 md:p-8 mb-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 w-full md:max-w-md">
           {/* Hamburguesa Mobile (Trigger de Sidebar) */}
           <button className="md:hidden p-4 bg-gray-50 rounded-2xl text-[#003d7a] active:scale-95 transition-transform">
             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" /></svg>
           </button>
           <input 
             type="text"
             placeholder="Buscar productos o marcas..."
             className="w-full bg-gray-50 rounded-full px-8 py-4 text-sm font-bold focus:ring-2 focus:ring-[#003d7a]/20 outline-none"
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
           />
        </div>

        {/* SELECTOR GRILLA/LISTA */}
        <div className="flex items-center gap-2 bg-gray-50 p-1.5 rounded-2xl border border-gray-100">
          <button 
            onClick={() => setViewMode("grid")}
            className={`p-2.5 rounded-xl transition-all ${viewMode === "grid" ? "bg-white text-[#003d7a] shadow-md" : "text-gray-400 hover:text-gray-600"}`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
          </button>
          <button 
            onClick={() => setViewMode("list")}
            className={`p-2.5 rounded-xl transition-all ${viewMode === "list" ? "bg-white text-[#003d7a] shadow-md" : "text-gray-400 hover:text-gray-600"}`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>

      {/* RENDERIZADO DE GRILLA O LISTA */}
      <div className={viewMode === "grid" 
        ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10" 
        : "flex flex-col gap-4"
      }>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} viewMode={viewMode} />
        ))}
      </div>

      <FloatingCartButton /> 
    </div>
  );
}