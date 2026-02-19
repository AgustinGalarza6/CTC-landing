"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { PayloadProduct } from "@/lib/payload";
import { formatPrice, hasDiscount, calculateDiscount } from "@/lib/utils";
import { getMediaUrl } from "@/lib/media-utils";
import AddToCartButton from "./AddToCartButton";

type Props = {
  product: PayloadProduct;
};

type TabType = "descripcion" | "especificaciones" | "descargas";

export default function ProductDetail({ product }: Props) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState<TabType>("descripcion");

  const showDiscount = hasDiscount(product.originalPrice, product.price);
  const discount = showDiscount ? calculateDiscount(product.originalPrice!, product.price) : 0;

  const isLowStock = product.stock > 0 && product.stock <= (product.lowStockThreshold || 5);
  const isOutOfStock = product.stock === 0;

  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-20">
      <div className="container-custom">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <Link href="/" className="text-gray-700 hover:text-gray-900">
            Inicio
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/productos" className="text-gray-700 hover:text-gray-900">
            Productos
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <div>
            {/* Main Image */}
            <div className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden mb-4">
              {product.images && product.images.length > 0 ? (
                <Image
                  src={getMediaUrl(product.images[selectedImage]?.image)}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {product.images && product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square bg-gray-100 rounded-lg overflow-hidden`}
                    style={selectedImage === index ? { boxShadow: '0 0 0 2px #003d7a' } : {}}
                  >
                    <Image
                      src={getMediaUrl(img.image)}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            {/* Badges */}
            <div className="flex gap-2 mb-4">
              {product.isNew && (
                <span className="bg-accent-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                  Nuevo
                </span>
              )}
              {showDiscount && (
                <span className="bg-orange-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                  -{discount}% OFF
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>

            {product.sku && (
              <p className="text-gray-600 mb-4">SKU: {product.sku}</p>
            )}

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-bold" style={{ color: '#003d7a' }}>
                  {formatPrice(product.price)}
                </span>
                {showDiscount && (
                  <span className="text-xl text-gray-500 line-through">
                    {formatPrice(product.originalPrice!)}
                  </span>
                )}
              </div>
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              {isOutOfStock ? (
                <span className="text-red-600 font-semibold">Sin stock</span>
              ) : isLowStock ? (
                <span className="text-yellow-600 font-semibold">
                  ¡Últimas {product.stock} unidades!
                </span>
              ) : (
                <span className="text-green-600 font-semibold">En stock</span>
              )}
            </div>

            {/* Description */}
            <div className="prose max-w-none mb-8">
              <p className="text-gray-700">{product.shortDescription}</p>
            </div>

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div className="mb-8">
                <h3 className="font-bold text-lg mb-4">Características destacadas</h3>
                <ul className="space-y-2">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{f.feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Add to Cart */}
            <AddToCartButton product={product} disabled={isOutOfStock} />
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-12">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex gap-8">
              <button
                onClick={() => setActiveTab("descripcion")}
                className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors`}
                style={activeTab === "descripcion" ? { borderColor: '#003d7a', color: '#003d7a' } : { borderColor: 'transparent', color: '#6b7280' }}
                onMouseEnter={(e) => { if (activeTab !== "descripcion") { e.currentTarget.style.color = '#374151'; e.currentTarget.style.borderColor = '#d1d5db'; } }}
                onMouseLeave={(e) => { if (activeTab !== "descripcion") { e.currentTarget.style.color = '#6b7280'; e.currentTarget.style.borderColor = 'transparent'; } }}
              >
                Descripción
              </button>
              <button
                onClick={() => setActiveTab("especificaciones")}
                className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors`}
                style={activeTab === "especificaciones" ? { borderColor: '#003d7a', color: '#003d7a' } : { borderColor: 'transparent', color: '#6b7280' }}
                onMouseEnter={(e) => { if (activeTab !== "especificaciones") { e.currentTarget.style.color = '#374151'; e.currentTarget.style.borderColor = '#d1d5db'; } }}
                onMouseLeave={(e) => { if (activeTab !== "especificaciones") { e.currentTarget.style.color = '#6b7280'; e.currentTarget.style.borderColor = 'transparent'; } }}
              >
                Especificaciones
              </button>
              <button
                onClick={() => setActiveTab("descargas")}
                className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors relative`}
                style={activeTab === "descargas" ? { borderColor: '#003d7a', color: '#003d7a' } : { borderColor: 'transparent', color: '#6b7280' }}
                onMouseEnter={(e) => { if (activeTab !== "descargas") { e.currentTarget.style.color = '#374151'; e.currentTarget.style.borderColor = '#d1d5db'; } }}
                onMouseLeave={(e) => { if (activeTab !== "descargas") { e.currentTarget.style.color = '#6b7280'; e.currentTarget.style.borderColor = 'transparent'; } }}
              >
                Descargas
                {product.downloads && product.downloads.length > 0 && (
                  <span className="ml-2 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white rounded-full" style={{ backgroundColor: '#003d7a' }}>
                    {product.downloads.length}
                  </span>
                )}
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="py-8">
            {/* Descripción Tab */}
            {activeTab === "descripcion" && (
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {product.description && typeof product.description === 'string' 
                    ? product.description 
                    : product.shortDescription}
                </p>
              </div>
            )}

            {/* Especificaciones Tab */}
            {activeTab === "especificaciones" && (
              <div>
                {product.specs && product.specs.length > 0 ? (
                  <div className="border rounded-lg divide-y max-w-3xl">
                    {product.specs.map((spec, i) => (
                      <div key={i} className="grid grid-cols-2 gap-4 p-4">
                        <div className="font-semibold text-gray-700">{spec.label}</div>
                        <div className="text-gray-600">{spec.value}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No hay especificaciones técnicas disponibles.</p>
                )}
              </div>
            )}

            {/* Descargas Tab */}
            {activeTab === "descargas" && (
              <div>
                {product.downloads && product.downloads.length > 0 ? (
                  <div className="space-y-4 max-w-3xl">
                    {product.downloads.map((download, i) => (
                      <div key={i} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6" style={{ color: '#003d7a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{download.name}</h4>
                            <p className="text-sm text-gray-500">
                              {download.type} {download.size && `• ${download.size}`}
                            </p>
                          </div>
                        </div>
                        <a
                          href={typeof download.file === 'string' ? download.file : getMediaUrl(download.file)}
                          download
                          className="px-4 py-2 text-white rounded-lg transition-colors text-sm font-medium"
                          style={{ backgroundColor: '#003d7a' }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#002a5c'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#003d7a'}
                        >
                          Descargar
                        </a>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No hay archivos de descarga disponibles.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
