import type { ImageConfig, ImageSource } from "./types";

/**
 * Resolve the best available image source from an entity.
 * Priority: images.featuredImage → images.heroImage → images.thumbnail → images.ogImage → legacy image string → legacy thumbnail string
 */
export function resolveImage(
  entity: {
    images?: ImageConfig;
    image?: string;
    thumbnail?: string;
  } | null | undefined,
): ImageSource | undefined {
  if (!entity) return undefined;
  if (entity.images?.featuredImage) return entity.images.featuredImage;
  if (entity.images?.heroImage) return entity.images.heroImage;
  if (entity.images?.thumbnail) return entity.images.thumbnail;
  if (entity.images?.ogImage) return entity.images.ogImage;
  if (entity.images?.gallery && entity.images.gallery.length > 0) return entity.images.gallery[0];
  if (entity.image) return { src: entity.image, alt: "" };
  if (entity.thumbnail) return { src: entity.thumbnail, alt: "" };
  return undefined;
}

/** Extract a user-friendly alt for a given entity */
export function imageAlt(entity: { title?: string; name?: string; images?: { featuredImage?: { alt?: string }; heroImage?: { alt?: string }; thumbnail?: { alt?: string } } } | null | undefined, fallback?: string): string {
  if (!entity) return fallback || "";
  if (entity.images?.featuredImage?.alt) return entity.images.featuredImage.alt;
  if (entity.images?.heroImage?.alt) return entity.images.heroImage.alt;
  if (entity.images?.thumbnail?.alt) return entity.images.thumbnail.alt;
  return entity.title || entity.name || fallback || "";
}

/**
 * Resolve the OG image URL from an entity — used for social media meta tags.
 */
export function resolveOgImage(
  entity: {
    images?: ImageConfig;
    image?: string;
    seo?: { openGraph?: { image?: string } };
  } | null | undefined,
): string | undefined {
  if (!entity) return undefined;
  if (entity.seo?.openGraph?.image) return entity.seo.openGraph.image;
  if (entity.images?.ogImage?.src) return entity.images.ogImage.src;
  if (entity.images?.heroImage?.src) return entity.images.heroImage.src;
  if (entity.images?.featuredImage?.src) return entity.images.featuredImage.src;
  if (entity.image) return entity.image;
  return undefined;
}
