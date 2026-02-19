"use client";

import Link from "next/link";
import Image from "next/image";
import type { PayloadProduct } from "@/lib/payload";
import { formatPrice, hasDiscount, calculateDiscount } from "@/lib/utils";
import { getMediaUrl } from "@/lib/media-utils";

type Props = {
  product: PayloadProduct;
};

export default function ProductCard({ product }: Props) {
  const firstImage = product.images?.[0]?.image;
  const imageUrl = getMediaUrl(firstImage);
  const showDiscount = hasDiscount(product.originalPrice, product.price);
  const discount = showDiscount ? calculateDiscount(product.originalPrice!, product.price) : 0;

  const isLowStock = product.stock > 0 && product.stock <= (product.lowStockThreshold || 5);
  const isOutOfStock = product.stock === 0;

  return (
    <Link 
      href={`/productos/${product.slug}`} 
      className="group block bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200"
    >
      {/* Image Container */}
      <div className="relative aspect-square bg-gray-50 overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <span className="text-gray-400 text-sm">Sin imagen</span>
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: '#003d7a' }}>
              Nuevo
            </span>
          )}
          {showDiscount && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-red-600 text-white">
              -{discount}%
            </span>
          )}
          {isOutOfStock && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-900 text-white">
              Sin Stock
            </span>
          )}
          {isLowStock && !isOutOfStock && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-orange-600 text-white">
              Últimas unidades
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category */}
        {typeof product.category === 'object' && product.category?.name && (
          <span className="inline-block text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: '#003d7a' }}>
            {product.category.name}
          </span>
        )}

        {/* Title */}
        <h3 className="font-semibold text-base text-gray-900 mb-2 line-clamp-2 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#003d7a'} onMouseLeave={(e) => e.currentTarget.style.color = '#111827'}>
          {product.name}
        </h3>

        {/* Description */}
        {product.shortDescription && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {product.shortDescription}
          </p>
        )}

        {/* Brand/Marca */}
        <div className="text-sm text-gray-600 mb-3">
          <span className="font-medium">Marca:</span> {typeof product.category === 'object' && product.category?.name ? product.category.name : 'ZENITY'}
        </div>
        <div className="text-sm text-gray-600 mb-3">
          <span className="font-medium">Modelo:</span> {product.sku || product.slug}
        </div>

        {/* Price */}
        <div className="mb-4 flex items-baseline gap-2">
          {showDiscount && product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
          <span className="text-xl font-bold text-gray-900">
            {formatPrice(product.price)}
          </span>
        </div>

        {/* Ver ficha tecnica link */}
        <div className="text-sm font-medium" style={{ color: '#003d7a' }} onMouseEnter={(e) => e.currentTarget.style.color = '#002a5c'} onMouseLeave={(e) => e.currentTarget.style.color = '#003d7a'}>
          Ver ficha tecnica
        </div>
      </div>
    </Link>
  );
}
