"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { getMediaUrl } from "@/lib/media-utils";

export default function EnhancedSidebar({ categories, brands = [] }: { categories: any[], brands?: any[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentCategory = searchParams.get("categoria");
  const currentBrand = searchParams.get("marca");
  const [isOpen, setIsOpen] = useState(false);

  // Verifica si hay algún filtro activo para mostrar el botón
  const hasFilters = currentCategory || currentBrand;

  return (
    <div className="flex flex-col gap-6 text-left">
      {/* 1. PANEL DE CATEGORÍAS (Card Principal) */}
      <div className="bg-white rounded-[2rem] border border-gray-100 p-8 shadow-sm">
        <h3 className="text-xl font-black text-[#003d7a] uppercase tracking-widest mb-8 border-b pb-4">
          Categorías
        </h3>

        <nav className="flex flex-col gap-2">
          {categories.sort((a, b) => (a.order || 999) - (b.order || 999)).map((category) => {
            const isSelected = currentCategory === category.slug;
            return (
              <div key={category.id} className="flex flex-col">
                <Link
                  href={`/productos?categoria=${category.slug}`}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-all ${
                    isSelected 
                      ? "bg-blue-50 text-[#003d7a] font-black shadow-sm" 
                      : "text-gray-500 hover:bg-gray-50 hover:text-[#003d7a]"
                  }`}
                >
                  <span>{category.name}</span>
                </Link>
                
                {/* SUB-CATEGORÍAS */}
                {isSelected && category.subcategories && (
                  <div className="ml-6 mt-1 flex flex-col gap-1 border-l-2 border-blue-100 pl-4 mb-3">
                    {category.subcategories.map((sub: any) => (
                      <Link 
                        key={sub.id}
                        href={`/productos?categoria=${category.slug}&sub=${sub.slug}`}
                        className="py-1.5 text-xs font-bold text-gray-400 hover:text-[#003d7a]"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* BOTÓN LIMPIAR FILTROS */}
        {hasFilters && (
          <button 
            onClick={() => router.push('/productos')}
            className="w-full mt-6 py-4 bg-gray-50 text-[#003d7a] rounded-2xl font-black uppercase tracking-[0.15em] text-xs hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
          >
            Limpiar selección
          </button>
        )}
      </div>

      {/* 3. FILTRO DE MARCAS (Card Secundaria) */}
      <div className="bg-white rounded-[2rem] border border-gray-100 p-8 shadow-sm">
        <h3 className="text-xl font-black text-[#003d7a] uppercase tracking-widest mb-8 border-b pb-4">Marcas</h3>
        <div className="grid grid-cols-3 gap-2">
          {brands?.map((brand) => (
            <Link
              key={brand.id}
              href={`/productos?marca=${brand.slug}`}
              className={`group relative aspect-square border-2 rounded-xl flex items-center justify-center p-3 transition-all ${
                currentBrand === brand.slug ? "border-orange-500 bg-white shadow-sm" : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <Image 
                src={getMediaUrl(brand.logo)} 
                alt={brand.name} 
                fill 
                className="object-contain p-2" 
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}