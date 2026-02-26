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
        {/* Breadcrumb Original */}
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
          {/* Imágenes Originales */}
          <div>
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

          {/* Info Producto */}
          <div>
            <div className="flex gap-2 mb-4">
              {product.isNew && (
                <span className="bg-[#003d7a] text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-sm">
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

            <div className="prose max-w-none mb-8">
              <p className="text-gray-700">{product.shortDescription}</p>
            </div>

            {product.features && product.features.length > 0 && (
              <div className="mb-8">
                <h3 className="font-bold text-lg mb-4">Características destacadas</h3>
                <ul className="space-y-3">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="bg-blue-50 p-1 rounded-full flex-shrink-0">
                        <svg className="w-3.5 h-3.5 text-[#003d7a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="font-medium text-gray-700 text-sm">{f.feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <AddToCartButton product={product} disabled={isOutOfStock} />
          </div>
        </div>

        {/* TABS SECCIÓN CENTRADA Y MODERNA */}
        <div className="mt-24">
          <div className="flex justify-center border-b border-gray-100 mb-12">
            <div className="flex gap-12">
              {(["descripcion", "especificaciones", "descargas"] as TabType[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-6 text-sm font-bold uppercase tracking-[0.2em] transition-all relative ${
                    activeTab === tab ? "text-[#003d7a]" : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {tab}
                  {tab === "descargas" && product.downloads && product.downloads.length > 0 && (
                    <span className="ml-2 bg-[#003d7a] text-white text-[10px] px-2 py-0.5 rounded-full">
                      {product.downloads.length}
                    </span>
                  )}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#003d7a] rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {activeTab === "descripcion" && (
              <div className="prose prose-blue max-w-none text-center">
                <p className="text-gray-700 leading-loose text-lg font-light">
                  {product.description && typeof product.description === 'string' 
                    ? product.description 
                    : product.shortDescription}
                </p>
              </div>
            )}

            {activeTab === "especificaciones" && (
              <div className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm">
                {product.specs && product.specs.length > 0 ? (
                  <div className="divide-y divide-gray-50">
                    {product.specs.map((spec, i) => (
                      <div key={i} className="grid grid-cols-2 gap-4 p-6 hover:bg-gray-50/50 transition-colors">
                        <div className="text-[11px] font-black text-[#003d7a] uppercase tracking-[0.2em] self-center">
                          {spec.label}
                        </div>
                        <div className="text-gray-600 font-medium">
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="p-12 text-center text-gray-400 italic">Especificaciones técnicas no disponibles.</p>
                )}
              </div>
            )}

            {activeTab === "descargas" && (
              <div className="space-y-4">
                {product.downloads && product.downloads.length > 0 ? (
                  product.downloads.map((download, i) => (
                    <div key={i} className="flex items-center justify-between p-6 bg-white border border-gray-100 rounded-[2rem] hover:shadow-lg transition-all">
                      <div className="flex items-center gap-6">
                        <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[#003d7a]">
                          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-[#003d7a] text-lg leading-tight">{download.name}</h4>
                          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">{download.type} • {download.size}</p>
                        </div>
                      </div>
                      <a
                        href={typeof download.file === 'string' ? download.file : getMediaUrl(download.file)}
                        download
                        className="bg-[#003d7a] hover:bg-[#1e40af] text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all shadow-md"
                      >
                        Descargar
                      </a>
                    </div>
                  ))
                ) : (
                  <p className="p-12 text-center text-gray-400 italic">No hay documentos para descarga.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}