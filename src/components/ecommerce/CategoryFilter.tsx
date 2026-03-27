"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { getMediaUrl } from "@/lib/media-utils";

// ── Grupos estáticos de categorías ─────────────────────────────────────────
const CATEGORY_GROUPS = [
  {
    label: "Computación y Consumo",
    slugs: ["notebooks", "tablets", "monitores"],
  },
  {
    label: "Soluciones Industriales y POS",
    slugs: [
      "sistema-kiosco",
      "monitor-touch",
      "mini-pc-industriales",
      "perifericos-de-equipos-industriales",
      "punto-de-venta",
    ],
  },
  {
    label: "Infraestructura y Redes",
    slugs: ["redes", "almacenamiento"],
  },
  {
    label: "Smart Home y Seguridad",
    slugs: ["soluciones-para-domotica", "alarmas-lora"],
  },
  {
    label: "Complementos",
    slugs: ["accesorios"],
  },
];

// Construye una URL preservando ambos parámetros de filtro
function buildFilterUrl(newParams: { categoria?: string | null; marca?: string | null }) {
  const params = new URLSearchParams();
  if (newParams.categoria) params.set("categoria", newParams.categoria);
  if (newParams.marca) params.set("marca", newParams.marca);
  const qs = params.toString();
  return qs ? `/productos?${qs}` : "/productos";
}

export default function EnhancedSidebar({ categories, brands = [] }: { categories: any[]; brands?: any[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentCategory = searchParams.get("categoria");
  const currentBrand = searchParams.get("marca");

  // Grupos que tienen al menos una categoría con productos disponibles
  const populatedGroups = CATEGORY_GROUPS.map((group) => ({
    ...group,
    categories: categories
      .filter((cat) => group.slugs.includes(cat.slug))
      .sort((a, b) => group.slugs.indexOf(a.slug) - group.slugs.indexOf(b.slug)),
  })).filter((group) => group.categories.length > 0);

  // Grupo dinámico "Zenity" con todas las categorías que no encajan en ningún grupo estático
  const groupedSlugs = CATEGORY_GROUPS.flatMap((g) => g.slugs);
  const ungroupedCategories = categories
    .filter((cat) => !groupedSlugs.includes(cat.slug))
    .sort((a, b) => (a.order || 999) - (b.order || 999));

  const zenityGroupActive = ungroupedCategories.some((c) => c.slug === currentCategory);

  // Grupo que contiene la categoría actualmente seleccionada (expandido por defecto)
  const activeGroupLabel =
    populatedGroups.find((g) => g.categories.some((c) => c.slug === currentCategory))?.label ?? null;

  const [openGroups, setOpenGroups] = useState<Set<string>>(
    () => new Set(activeGroupLabel ? [activeGroupLabel] : zenityGroupActive ? ["Zenity"] : [])
  );

  const toggleGroup = (label: string) => {
    setOpenGroups((prev) => {
      const next = new Set(prev);
      next.has(label) ? next.delete(label) : next.add(label);
      return next;
    });
  };

  const hasFilters = currentCategory || currentBrand;

  return (
    <div className="flex flex-col gap-6 text-left">
      {/* ── PANEL DE CATEGORÍAS ─────────────────────────────── */}
      <div className="bg-white rounded-[2rem] border border-gray-100 p-8 shadow-sm">
        <h3 className="text-xl font-black text-[#003d7a] uppercase tracking-widest mb-8 border-b pb-4">
          Categorías
        </h3>

        <nav className="flex flex-col gap-1">
          {/* Grupos con submenús desplegables */}
          {populatedGroups.map((group) => {
            const isOpen = openGroups.has(group.label);
            const groupIsActive = group.categories.some((c) => c.slug === currentCategory);

            return (
              <div key={group.label}>
                {/* Cabecera del grupo */}
                <button
                  onClick={() => toggleGroup(group.label)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                    groupIsActive
                      ? "text-[#003d7a]"
                      : "text-gray-600 hover:text-[#003d7a] hover:bg-gray-50"
                  }`}
                >
                  <span>{group.label}</span>
                  <svg
                    className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Subcategorías desplegables */}
                {isOpen && (
                  <div className="ml-4 mb-2 flex flex-col gap-0.5 border-l-2 border-blue-100 pl-4">
                    {group.categories.map((category) => {
                      const isSelected = currentCategory === category.slug;
                      return (
                        <Link
                          key={category.id}
                          href={buildFilterUrl({ categoria: category.slug, marca: currentBrand })}
                          className={`flex items-center px-3 py-2.5 rounded-xl text-sm transition-all ${
                            isSelected
                              ? "bg-blue-50 text-[#003d7a] font-black shadow-sm"
                              : "text-gray-500 hover:bg-gray-50 hover:text-[#003d7a]"
                          }`}
                        >
                          {category.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          {/* Grupo dinámico "Zenity" con categorías no clasificadas */}
          {ungroupedCategories.length > 0 && (
            <div>
              <button
                onClick={() => toggleGroup("Zenity")}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                  zenityGroupActive
                    ? "text-[#003d7a]"
                    : "text-gray-600 hover:text-[#003d7a] hover:bg-gray-50"
                }`}
              >
                <span>Zenity</span>
                <svg
                  className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${openGroups.has("Zenity") ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openGroups.has("Zenity") && (
                <div className="ml-4 mb-2 flex flex-col gap-0.5 border-l-2 border-blue-100 pl-4">
                  {ungroupedCategories.map((category) => {
                    const isSelected = currentCategory === category.slug;
                    return (
                      <Link
                        key={category.id}
                        href={buildFilterUrl({ categoria: category.slug, marca: currentBrand })}
                        className={`flex items-center px-3 py-2.5 rounded-xl text-sm transition-all ${
                          isSelected
                            ? "bg-blue-50 text-[#003d7a] font-black shadow-sm"
                            : "text-gray-500 hover:bg-gray-50 hover:text-[#003d7a]"
                        }`}
                      >
                        {category.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          )}

        </nav>

        {/* Botón limpiar ambos filtros */}
        {hasFilters && (
          <button
            onClick={() => router.push("/productos")}
            className="w-full mt-6 py-4 bg-gray-50 text-[#003d7a] rounded-2xl font-black uppercase tracking-[0.15em] text-xs hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
          >
            Limpiar selección
          </button>
        )}
      </div>

      {/* ── FILTRO DE MARCAS ────────────────────────────────── */}
      {brands && brands.length > 0 && (
        <div className="bg-white rounded-[2rem] border border-gray-100 p-8 shadow-sm">
          <h3 className="text-xl font-black text-[#003d7a] uppercase tracking-widest mb-8 border-b pb-4">Marcas</h3>
          <div className="grid grid-cols-3 gap-2">
            {brands.map((brand) => (
              <Link
                key={brand.id}
                href={buildFilterUrl({ categoria: currentCategory, marca: brand.slug })}
                className={`group relative aspect-square border-2 rounded-xl flex items-center justify-center p-3 transition-all ${
                  currentBrand?.toLowerCase() === brand.slug?.toLowerCase()
                    ? "border-orange-500 bg-white shadow-sm"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                {getMediaUrl(brand.logo) ? (
                  <Image src={getMediaUrl(brand.logo)} alt={brand.name} fill className="object-contain p-2" />
                ) : (
                  <span className="text-xs font-bold text-gray-500 text-center leading-tight">{brand.name}</span>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}