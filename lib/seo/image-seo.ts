import type { ImageSEOConfig } from "./types";
import { SITE_URL } from "@/lib/constants";

/**
 * Build alt text for an image, falling back to a default.
 */
export function buildImageAlt(config: ImageSEOConfig, context?: string): string {
  if (config.alt) return config.alt;
  if (context) return `${context} - ${config.src}`;
  return config.src.split("/").pop()?.replace(/\.\w+$/, "").replace(/-/g, " ") || "Image";
}

/**
 * Build complete next/image-compatible props with SEO attributes.
 */
export function getImageProps(config: ImageSEOConfig, context?: string) {
  const src = config.src.startsWith("http") ? config.src : `${SITE_URL}${config.src}`;
  return {
    src,
    alt: buildImageAlt(config, context),
    width: config.width || 1200,
    height: config.height || 630,
    caption: config.caption,
  };
}

/**
 * Build JSON-LD image object for schema markup.
 */
export function imageJsonLd(config: ImageSEOConfig) {
  return {
    "@type": "ImageObject",
    url: config.src.startsWith("http") ? config.src : `${SITE_URL}${config.src}`,
    alt: config.alt,
    caption: config.caption,
    width: config.width || 1200,
    height: config.height || 630,
  };
}
