"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { PayloadCategory } from "@/lib/payload";

type Props = {
  categories: PayloadCategory[];
};

export default function CategoryFilter({ categories }: Props) {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("categoria");
  const [isOpen, setIsOpen] = useState(false); // Estado para el dropdown mobile

  return (
    <div className="flex flex-col gap-6 md:gap-10 text-left">
      {/* 1. Panel de Filtros */}
      <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] border border-gray-100 p-6 md:p-10 shadow-sm">
        {/* BOTÓN DESPLEGABLE (Solo visible en Mobile) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-full flex items-center justify-between text-[#003d7a] font-bold uppercase text-xs tracking-widest"
        >
          <span>{currentCategory ? `Categoría: ${currentCategory}` : "Explorar Catálogo"}</span>
          <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <h3 className="hidden md:block text-2xl font-normal text-[#003d7a] mb-10">
          Explorar <span className="font-bold">Catálogo</span>
        </h3>

        {/* LISTADO: Oculto en mobile a menos que esté abierto, siempre visible en PC */}
        <nav className={`${isOpen ? "flex" : "hidden"} md:flex flex-col gap-3 mt-6 md:mt-0`}>
          <Link
            href="/productos"
            scroll={false}
            onClick={() => setIsOpen(false)}
            className={`flex items-center justify-between px-6 py-4 rounded-2xl text-sm transition-all duration-300 ${
              !currentCategory 
                ? "bg-blue-50 text-[#003d7a] font-bold shadow-sm" 
                : "text-gray-500 hover:bg-gray-50 hover:text-[#003d7a]"
            }`}
          >
            <span>Todo el catálogo</span>
            {!currentCategory && <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />}
          </Link>

          {categories
            .sort((a, b) => (a.order || 999) - (b.order || 999))
            .map((category) => {
              const isSelected = currentCategory === category.slug;
              return (
                <Link
                  key={category.id}
                  href={`/productos?categoria=${category.slug}`}
                  scroll={false}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-6 py-4 rounded-2xl text-sm transition-all duration-300 ${
                    isSelected 
                      ? "bg-blue-50 text-[#003d7a] font-bold shadow-sm" 
                      : "text-gray-500 hover:bg-gray-50 hover:text-[#003d7a]"
                  }`}
                >
                  <span>{category.name}</span>
                  {isSelected && <div className="w-2 h-2 rounded-full bg-blue-600" />}
                </Link>
              );
            })}
        </nav>

        {currentCategory && (
          <div className={`mt-8 pt-6 border-t border-gray-100 ${isOpen ? "flex" : "hidden"} md:flex justify-center`}>
            <Link 
              href="/productos" 
              scroll={false}
              onClick={() => setIsOpen(false)}
              className="text-[11px] font-black text-[#003d7a] hover:text-blue-800 uppercase tracking-[0.2em] transition-all"
            >
              Limpiar selección
            </Link>
          </div>
        )}
      </div>

      {/* 2. Banner Mayorista (Adaptado para mobile) */}
      <div className="bg-gradient-to-br from-[#003d7a] to-[#005bb5] rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl" />
        <div className="relative z-10">
          <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-blue-200 mb-4 md:mb-6">
            Canal Exclusivo
          </p>
          <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-5 leading-tight text-white">
            Venta <br />
            <span className="text-blue-100">Catálogo Mayorista</span>
          </h4>
          <p className="text-xs md:text-sm text-white/70 font-light mb-8 md:mb-10 leading-relaxed">
            Ofrecemos bonificaciones especiales y atención personalizada para compras de volumen empresarial.
          </p>
          <Link href="/#contacto" className="group inline-flex items-center gap-2 text-sm md:text-base font-bold transition-all text-white">
            <span className="border-b-2 border-white/30 group-hover:border-white pb-1">Hablar con un asesor</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}