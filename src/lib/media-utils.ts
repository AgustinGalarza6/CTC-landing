import type { PayloadMedia } from "./payload";

/**
 * Get the URL from a media object or string
 */
export function getMediaUrl(media: PayloadMedia | string | null | undefined): string {
  if (!media) return "";
  if (typeof media === "string") return media;
  return media.url || "";
}

/**
 * Get the alt text from a media object
 */
export function getMediaAlt(media: PayloadMedia | string | null | undefined): string {
  if (!media || typeof media === "string") return "";
  return media.alt || "";
}

/**
 * Format file size
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
}
