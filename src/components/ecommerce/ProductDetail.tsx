"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { PayloadProduct } from "@/lib/payload";
import { formatPrice, hasDiscount, calculateDiscount } from "@/lib/utils";
import { getMediaUrl } from "@/lib/media-utils";
import AddToCartButton from "./AddToCartButton";

// ── Lexical rich text renderer ─────────────────────────────────────────────────

type LexicalNode = {
  type: string;
  text?: string;
  format?: number;
  children?: LexicalNode[];
  tag?: string;
  listType?: string;
  url?: string;
};

function renderNode(node: LexicalNode, key: number): React.ReactNode {
  if (node.type === 'text') {
    let el: React.ReactNode = node.text;
    // format bitmask: 1=bold, 2=italic, 4=strikethrough, 8=underline, 16=code, 32=subscript, 64=superscript
    if (node.format && node.format & 16) el = <code key={key} className="bg-gray-100 px-1 rounded text-sm font-mono">{el}</code>;
    if (node.format && node.format & 4)  el = <s key={key}>{el}</s>;
    if (node.format && node.format & 8)  el = <u key={key}>{el}</u>;
    if (node.format && node.format & 2)  el = <em key={key}>{el}</em>;
    if (node.format && node.format & 1)  el = <strong key={key}>{el}</strong>;
    return el;
  }
  const children = node.children?.map((c, i) => renderNode(c, i));
  switch (node.type) {
    case 'root': return <div key={key}>{children}</div>;
    case 'paragraph': return <p key={key} className="text-gray-700 leading-relaxed text-base mb-4">{children}</p>;
    case 'heading': return node.tag === 'h1' ? <h1 key={key} className="text-2xl font-bold mb-3">{children}</h1>
                        : node.tag === 'h2' ? <h2 key={key} className="text-xl font-bold mb-3">{children}</h2>
                        : node.tag === 'h3' ? <h3 key={key} className="text-lg font-semibold mb-2">{children}</h3>
                        : <h4 key={key} className="font-semibold mb-2">{children}</h4>;
    case 'list': return node.listType === 'bullet'
      ? <ul key={key} className="list-disc list-inside mb-4 space-y-1 text-gray-700">{children}</ul>
      : <ol key={key} className="list-decimal list-inside mb-4 space-y-1 text-gray-700">{children}</ol>;
    case 'listitem': return <li key={key}>{children}</li>;
    case 'link': return <a key={key} href={node.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">{children}</a>;
    case 'linebreak': return <br key={key} />;
    default: return <span key={key}>{children}</span>;
  }
}

function LexicalContent({ content, fallback }: { content: unknown; fallback?: string | null }) {
  if (!content || typeof content !== 'object') {
    return <p className="text-gray-700 leading-relaxed text-base">{fallback}</p>;
  }
  const root = (content as { root?: LexicalNode }).root;
  if (!root) {
    return <p className="text-gray-700 leading-relaxed text-base">{fallback}</p>;
  }
  return <div>{root.children?.map((node, i) => renderNode(node, i))}</div>;
}

// ── Component ──────────────────────────────────────────────────────────────────

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
    <section className="pt-4 md:pt-8 pb-16 md:pb-20">
      <div className="container-custom px-4 md:px-6">
        {/* Breadcrumb - Con scroll horizontal en mobile */}
        <nav className="mb-6 text-sm flex items-center whitespace-nowrap overflow-x-auto scrollbar-hide">
          <Link href="/" className="text-gray-700 hover:text-gray-900 flex-shrink-0">
            Inicio
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/productos" className="text-gray-700 hover:text-gray-900 flex-shrink-0">
            Productos
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900 truncate">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Imágenes - Adaptadas para mobile */}
          <div>
            <div className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden mb-4 border border-gray-50">
              {product.images && product.images.length > 0 ? (
                <Image
                  src={getMediaUrl(product.images[selectedImage]?.image)}
                  alt={product.name}
                  fill
                  className="object-contain p-4 md:p-8"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <svg className="w-20 h-20 md:w-24 md:h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}
            </div>

            {/* Miniaturas - Scroll lateral en mobile */}
            {product.images && product.images.length > 1 && (
              <div className="flex md:grid md:grid-cols-4 gap-3 md:gap-4 overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-hide">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className="relative flex-shrink-0 w-20 h-20 md:w-auto md:aspect-square bg-white rounded-lg overflow-hidden border-2 transition-all"
                    style={selectedImage === index ? { borderColor: '#003d7a' } : { borderColor: '#f3f4f6' }}
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
          <div className="flex flex-col">
            <div className="flex gap-2 mb-4">
              {product.isNew && (
                <span className="bg-[#003d7a] text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-sm">
                  Nuevo
                </span>
              )}
              {showDiscount && (
                <span className="bg-orange-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full">
                  -{discount}% OFF
                </span>
              )}
            </div>

            <h1 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900 leading-tight">{product.name}</h1>

            {product.sku && (
              <p className="text-gray-500 text-xs md:text-sm mb-4 uppercase font-bold tracking-widest">SKU: {product.sku}</p>
            )}

            <div className="mb-6">
              <div className="flex items-baseline gap-4">
                <span className="text-3xl md:text-4xl font-black" style={{ color: '#003d7a' }}>
                  {formatPrice(product.price)}
                </span>
                {showDiscount && (
                  <span className="text-lg md:text-xl text-gray-400 line-through font-bold">
                    {formatPrice(product.originalPrice!)}
                  </span>
                )}
              </div>
            </div>

            <div className="mb-6">
              <div className={`flex items-center gap-2 font-bold uppercase text-[11px] tracking-widest ${isOutOfStock ? "text-red-600" : "text-green-600"}`}>
                <div className={`w-2 h-2 rounded-full ${isOutOfStock ? "bg-red-500" : "bg-green-500"}`} />
                {isOutOfStock ? "Sin stock" : isLowStock ? `¡Últimas ${product.stock} unidades!` : "En stock para entrega inmediata"}
              </div>
            </div>

            <div className="prose prose-sm md:prose-base max-w-none mb-8">
              <p className="text-gray-600">{product.shortDescription}</p>
            </div>

            {product.features && product.features.length > 0 && (
              <div className="mb-8">
                <h3 className="font-bold text-sm md:text-lg mb-4 text-gray-900">Características destacadas</h3>
                <ul className="space-y-3">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="bg-blue-50 p-1 rounded-full flex-shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5 text-[#003d7a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="font-medium text-gray-700 text-xs md:text-sm">{f.feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <AddToCartButton product={product} disabled={isOutOfStock} className="w-full" />
          </div>
        </div>

        {/* TABS SECCIÓN CENTRADA Y MODERNA - Adaptada a Mobile */}
        <div className="mt-16 md:mt-24">
          <div className="flex justify-start md:justify-center border-b border-gray-100 mb-8 md:mb-12 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <div className="flex gap-8 md:gap-12 px-4 md:px-0">
              {(["descripcion", "especificaciones", "descargas"] as TabType[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-[10px] md:text-sm font-black uppercase tracking-[0.2em] transition-all relative ${
                    activeTab === tab ? "text-[#003d7a]" : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {tab}
                  {tab === "descargas" && product.downloads && product.downloads.length > 0 && (
                    <span className="ml-2 bg-[#003d7a] text-white text-[9px] px-1.5 py-0.5 rounded-full">
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

          <div className="max-w-4xl mx-auto px-4 md:px-0">
            {activeTab === "descripcion" && (
              <div>
                <LexicalContent content={product.description} fallback={product.shortDescription} />
              </div>
            )}

            {activeTab === "especificaciones" && (
              <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm">
                {product.specs && product.specs.length > 0 ? (
                  <div className="divide-y divide-gray-50">
                    {product.specs.map((spec, i) => (
                      <div key={i} className="flex flex-col md:grid md:grid-cols-2 gap-1 md:gap-4 p-4 md:p-6 hover:bg-gray-50/50 transition-colors">
                        <div className="text-[10px] md:text-[11px] font-black text-[#003d7a] uppercase tracking-[0.2em]">
                          {spec.label}
                        </div>
                        <div className="text-gray-600 font-bold text-sm md:text-base">
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="p-12 text-center text-gray-400 italic">No hay datos disponibles.</p>
                )}
              </div>
            )}

            {activeTab === "descargas" && (
              <div className="space-y-4">
                {product.downloads && product.downloads.length > 0 ? (
                  product.downloads.map((download, i) => (
                    <div key={i} className="flex flex-col md:flex-row items-start md:items-center justify-between p-5 md:p-6 bg-white border border-gray-100 rounded-2xl hover:border-blue-100 transition-all gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#003d7a] flex-shrink-0">
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-[#003d7a] text-sm md:text-lg leading-tight">{download.name}</h4>
                          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">{download.type} • {download.size}</p>
                        </div>
                      </div>
                      <a
                        href={download.externalUrl || (typeof download.file === 'string' ? download.file : getMediaUrl(download.file))}
                        target="_blank"
                        rel="noopener noreferrer"
                        download={!download.externalUrl}
                        className="w-full md:w-auto text-center bg-[#003d7a] text-white px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-800 transition-colors shadow-sm"
                      >
                        Descargar
                      </a>
                    </div>
                  ))
                ) : (
                  <p className="p-12 text-center text-gray-400 italic">No hay documentos.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}