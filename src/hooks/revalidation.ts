import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
  GlobalAfterChangeHook,
} from "payload";
import { revalidateCollection, revalidateGlobal, revalidateAll } from "@/lib/revalidate";

// Hook factory for collection afterChange
export const createCollectionAfterChangeHook = (
  collectionSlug: string
): CollectionAfterChangeHook => {
  return async ({ doc, operation }) => {
    const slug = doc?.slug as string | undefined;
    await revalidateCollection(collectionSlug, operation as "create" | "update", slug);
    return doc;
  };
};

// Hook factory for collection afterDelete
export const createCollectionAfterDeleteHook = (
  collectionSlug: string
): CollectionAfterDeleteHook => {
  return async ({ doc }) => {
    const slug = doc?.slug as string | undefined;
    await revalidateCollection(collectionSlug, "delete", slug);
    return doc;
  };
};

// Hook factory for global afterChange
export const createGlobalAfterChangeHook = (
  globalSlug: string
): GlobalAfterChangeHook => {
  return async ({ doc }) => {
    await revalidateGlobal(globalSlug);
    return doc;
  };
};

// Special hook for media - revalidates all pages
export const mediaAfterChangeHook: CollectionAfterChangeHook = async ({ doc }) => {
  await revalidateAll();
  return doc;
};
