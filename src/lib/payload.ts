import { getPayload } from "payload";
import { unstable_cache } from "next/cache";
import config from "@payload-config";
import type { Config } from "@/payload-types";

type GlobalSlug = keyof Config["globals"];

// Types for products, categories, orders
export type PayloadProduct = {
  id: number | string;
  name: string;
  sku?: string;
  slug: string;
  shortDescription: string;
  description: unknown;
  category: PayloadCategory | string;
  price: number;
  originalPrice?: number | null;
  stock: number;
  lowStockThreshold?: number;
  images?: { image: PayloadMedia | string }[];
  features?: { feature: string }[];
  specs?: { label: string; value: string }[];
  downloads?: { name: string; type: string; file: PayloadMedia | string; size?: string }[];
  isFeatured?: boolean;
  isNew?: boolean;
  tags?: { tag: string }[];
  metaTitle?: string;
  metaDescription?: string;
};

export type PayloadCategory = {
  id: number | string;
  name: string;
  slug: string;
  icon: string;
  description?: string;
  order?: number;
};

export type PayloadMedia = {
  id: number | string;
  url: string;
  alt?: string;
  caption?: string;
  width?: number;
  height?: number;
};

export type PayloadOrder = {
  id: number | string;
  orderNumber: string;
  status: string;
  type: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerCompany?: string;
  items: {
    product: PayloadProduct | string;
    productName: string;
    quantity: number;
    price: number;
    subtotal: number;
  }[];
  subtotal: number;
  shippingCost?: number;
  discount?: number;
  total: number;
  customerNotes?: string;
  createdAt: string;
};

// Get Payload client
export const getPayloadClient = async () => {
  return await getPayload({ config });
};

// ============================================
// PRODUCTS
// ============================================

export async function getProducts() {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "products",
    depth: 1,
    limit: 100,
    sort: "-createdAt",
  });
  return docs as PayloadProduct[];
}

export async function getFeaturedProducts() {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "products",
    where: {
      isFeatured: { equals: true },
    },
    depth: 1,
    limit: 12,
  });
  return docs as PayloadProduct[];
}

export async function getNewProducts() {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "products",
    where: {
      isNew: { equals: true },
    },
    depth: 1,
    limit: 12,
  });
  return docs as PayloadProduct[];
}

export async function getProductBySlug(slug: string) {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "products",
    where: {
      slug: { equals: slug },
    },
    depth: 1,
    limit: 1,
  });
  return (docs[0] as PayloadProduct) || null;
}

export async function getProductsByCategory(categorySlug: string) {
  const payload = await getPayloadClient();

  // First get category ID
  const { docs: categories } = await payload.find({
    collection: "categories",
    where: {
      slug: { equals: categorySlug },
    },
    limit: 1,
  });

  if (!categories[0]) return [];

  const { docs } = await payload.find({
    collection: "products",
    where: {
      category: { equals: categories[0].id },
    },
    depth: 1,
    limit: 100,
  });
  return docs as PayloadProduct[];
}

export async function getRelatedProducts(productId: string, categoryId: string, limit = 4) {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "products",
    where: {
      and: [
        { category: { equals: categoryId } },
        { id: { not_equals: productId } },
      ],
    },
    depth: 1,
    limit,
  });
  return docs as PayloadProduct[];
}

export async function searchProducts(query: string) {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "products",
    where: {
      or: [
        { name: { contains: query } },
        { shortDescription: { contains: query } },
      ],
    },
    depth: 1,
    limit: 50,
  });
  return docs as PayloadProduct[];
}

// ============================================
// CATEGORIES
// ============================================

export async function getCategories() {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "categories",
    sort: "order",
    limit: 100,
  });
  return docs as PayloadCategory[];
}

export async function getCategoryBySlug(slug: string) {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "categories",
    where: {
      slug: { equals: slug },
    },
    limit: 1,
  });
  return (docs[0] as PayloadCategory) || null;
}

// ============================================
// ORDERS
// ============================================

export async function createOrder(orderData: Partial<PayloadOrder>) {
  const payload = await getPayloadClient();
  const order = await payload.create({
    collection: "orders",
    data: orderData as any,
  });
  return order as PayloadOrder;
}

// ============================================
// GLOBALS
// ============================================

export async function getGlobal<T>(slug: GlobalSlug): Promise<T> {
  const payload = await getPayloadClient();
  const data = await payload.findGlobal({
    slug,
    depth: 1,
  });
  return data as T;
}

// ============================================
// CACHED GLOBALS (for better performance)
// ============================================

export const getCachedGlobal = <T>(slug: GlobalSlug) => {
  return unstable_cache(
    async () => getGlobal<T>(slug),
    [`global-${slug}`],
    {
      revalidate: 3600, // 1 hour
      tags: [`global-${slug}`],
    }
  );
};

export const getCachedHeroSection = () => getCachedGlobal("hero-section");
export const getCachedServices = () => getCachedGlobal("services");
export const getCachedWhyChooseUs = () => getCachedGlobal("why-choose-us");
export const getCachedTestimonials = () => getCachedGlobal("testimonials");
export const getCachedFAQs = () => getCachedGlobal("faqs");
export const getCachedCTASection = () => getCachedGlobal("cta-section");
export const getCachedContactInfo = () => getCachedGlobal("contact-info");
export const getCachedNavigation = () => getCachedGlobal("navigation");
export const getCachedFooter = () => getCachedGlobal("footer");
export const getCachedSiteSettings = () => getCachedGlobal("site-settings");
