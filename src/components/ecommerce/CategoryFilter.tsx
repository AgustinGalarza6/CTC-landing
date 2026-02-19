"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import type { PayloadCategory } from "@/lib/payload";

type Props = {
  categories: PayloadCategory[];
};

export default function CategoryFilter({ categories }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("categoria");

  const isAllSelected = !currentCategory && pathname === "/productos";

  const hasFilters = currentCategory;

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      {/* Header */}
      <div className="px-5 py-4 border-b border-gray-200">
        <h3 className="font-bold text-lg text-gray-900">Filtros</h3>
      </div>

      {/* Search */}
      <div className="px-5 py-4 border-b border-gray-200">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Buscar
        </label>
        <div>
          <input
            type="text"
            placeholder="Nombre, descripción..."
            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="px-5 py-4">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Categoría
        </label>
        <ul className="space-y-1">
          {/* All Products */}
          <li>
            <Link
              href="/productos"
              className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                isAllSelected
                  ? "text-white font-medium"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
              style={isAllSelected ? { backgroundColor: '#003d7a' } : {}}
            >
              Todos
            </Link>
          </li>

          {/* Individual Categories */}
          {categories
            .sort((a, b) => (a.order || 999) - (b.order || 999))
            .map((category) => {
              const isSelected = currentCategory === category.slug;
              return (
                <li key={category.id}>
                  <Link
                    href={`/productos?categoria=${category.slug}`}
                    className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                      isSelected
                        ? "text-white font-medium"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                    style={isSelected ? { backgroundColor: '#003d7a' } : {}}
                  >
                    {category.name}
                  </Link>
                </li>
              );
            })}
        </ul>

        {/* Clear Filters Button */}
        {hasFilters && (
          <div className="mt-6 pt-4 border-t border-gray-200">
            <Link
              href="/productos"
              className="block w-full text-center px-4 py-2 text-sm font-medium"
              style={{ color: '#003d7a' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#002a5c'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#003d7a'}
            >
              Limpiar filtros
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
