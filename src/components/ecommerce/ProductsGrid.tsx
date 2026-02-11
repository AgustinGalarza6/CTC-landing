"use client";

import type { PayloadProduct } from "@/lib/payload";
import ProductCard from "./ProductCard";
import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";

type Props = {
  products: PayloadProduct[];
};

type SortOption = "featured" | "name-asc" | "name-desc" | "price-low" | "price-high" | "newest";

export default function ProductsGrid({ products }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("categoria");

  const filteredAndSortedProducts = useMemo(() => {
    // Filter by category first
    let result = products;
    
    if (currentCategory) {
      result = result.filter((product) => {
        const categorySlug = typeof product.category === 'string' 
          ? product.category 
          : product.category?.slug;
        return categorySlug === currentCategory;
      });
    }

    // Then filter by search query
    if (searchQuery) {
      result = result.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.sku && product.sku.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Sort
    switch (sortBy) {
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result.sort((a, b) => {
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          return 0;
        });
        break;
      case "featured":
      default:
        result.sort((a, b) => {
          if (a.isFeatured && !b.isFeatured) return -1;
          if (!a.isFeatured && b.isFeatured) return 1;
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          return 0;
        });
    }

    return result;
  }, [products, searchQuery, sortBy, currentCategory]);

  return (
    <div>
      {/* Search & Sort Bar */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-sm"
            />
          </div>

          {/* Sort */}
          <div className="sm:w-56">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white cursor-pointer text-sm text-gray-700"
            >
              <option value="featured">Destacados</option>
              <option value="newest">Más nuevos</option>
              <option value="name-asc">Nombre: A-Z</option>
              <option value="name-desc">Nombre: Z-A</option>
              <option value="price-low">Precio: Menor a Mayor</option>
              <option value="price-high">Precio: Mayor a Menor</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6 text-sm text-gray-600">
        {filteredAndSortedProducts.length} productos encontrados
      </div>

      {/* Products Grid */}
      {filteredAndSortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
          <div className="max-w-md mx-auto">
            <h3 className="font-semibold text-gray-900 mb-2">No se encontraron productos</h3>
            <p className="text-sm text-gray-600">
              {searchQuery 
                ? `No hay productos que coincidan con "${searchQuery}"`
                : "No hay productos disponibles"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
