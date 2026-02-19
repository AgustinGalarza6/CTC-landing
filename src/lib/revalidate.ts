"use server";

import { revalidatePath, revalidateTag } from "next/cache";

/**
 * Revalidate paths after collection changes
 */
export async function revalidateCollection(
  collectionSlug: string,
  operation: "create" | "update" | "delete",
  slug?: string
) {
  console.log(`[Revalidation] ${operation} on ${collectionSlug}${slug ? ` (${slug})` : ""}`);

  try {
    // Revalidate the collection tag
    revalidateTag(collectionSlug);

    // Revalidate specific paths based on collection
    switch (collectionSlug) {
      case "products":
        revalidatePath("/productos");
        if (slug) {
          revalidatePath(`/productos/${slug}`);
        }
        revalidatePath("/"); // Home page shows featured products
        break;

      case "categories":
        revalidatePath("/productos");
        if (slug) {
          revalidatePath(`/productos/categoria/${slug}`);
        }
        break;

      case "orders":
        // Orders don't affect frontend, but we could add admin paths here
        break;

      default:
        break;
    }
  } catch (error) {
    // Ignore revalidation errors in seed scripts or non-runtime contexts
    console.log(`[Revalidation] Skipped (not in Next.js runtime context)`);
  }
}

/**
 * Revalidate paths after global changes
 */
export async function revalidateGlobal(globalSlug: string) {
  console.log(`[Revalidation] Global changed: ${globalSlug}`);

  try {
    // Revalidate the global tag
    revalidateTag(`global-${globalSlug}`);

    // Most globals affect the home page
    switch (globalSlug) {
      case "hero-section":
      case "services":
      case "why-choose-us":
      case "testimonials":
      case "faqs":
      case "cta-section":
        revalidatePath("/");
        break;

      case "contact-info":
        revalidatePath("/");
        revalidatePath("/contacto");
        break;

      case "navigation":
      case "footer":
      case "site-settings":
        // These affect all pages
        revalidatePath("/", "layout");
        break;

      default:
        revalidatePath("/");
        break;
    }
  } catch (error) {
    // Ignore revalidation errors in seed scripts or non-runtime contexts
    console.log(`[Revalidation] Skipped (not in Next.js runtime context)`);
  }
}

/**
 * Revalidate all pages (use sparingly, only for media changes)
 */
export async function revalidateAll() {
  console.log("[Revalidation] Revalidating all pages");
  revalidatePath("/", "layout");
}
