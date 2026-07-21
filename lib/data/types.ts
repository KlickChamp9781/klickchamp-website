import type { SearchIntent } from "@/lib/seo/types";

/* ------------------------------------------------------------------ */
/*  SEO Config                                                         */
/* ------------------------------------------------------------------ */

export interface SEOConfig {
  /** Override meta title (falls back to entity title) */
  title?: string;
  /** Override meta description */
  description?: string;
  /** Canonical URL path override */
  canonical?: string;
  /** Open Graph overrides */
  openGraph?: {
    title?: string;
    description?: string;
    image?: string;
    type?: "website" | "article";
  };
  /** Twitter card overrides */
  twitter?: {
    card?: "summary" | "summary_large_image";
    title?: string;
    description?: string;
    image?: string;
  };
  /** Additional structured data schemas */
  schemas?: Record<string, unknown>[];
}

/* ------------------------------------------------------------------ */
/*  Media Config                                                       */
/* ------------------------------------------------------------------ */

export interface MediaConfig {
  /** Hero/banner image path */
  heroImage?: string;
  /** Alt text for hero image */
  heroAlt?: string;
  /** Image gallery */
  gallery?: MediaItem[];
  /** Icon identifier (lucide icon name) */
  icon?: string;
}

export interface MediaItem {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

/* ------------------------------------------------------------------ */
/*  Image Config — Centralized image management                        */
/* ------------------------------------------------------------------ */

export interface ImageConfig {
  /** Main hero/banner image */
  heroImage?: ImageSource;
  /** Featured image (used in cards, listings) */
  featuredImage?: ImageSource;
  /** Open Graph / social share image */
  ogImage?: ImageSource;
  /** Thumbnail (small card preview) */
  thumbnail?: ImageSource;
  /** Image gallery */
  gallery?: ImageSource[];
  /** Default alt text (fallback for all images) */
  altText?: string;
  /** Default caption */
  caption?: string;
}

export interface ImageSource {
  /** Image path (relative to public/ or absolute URL) */
  src: string;
  /** SEO-friendly alt text */
  alt: string;
  /** Image width in pixels (required for CLS prevention) */
  width?: number;
  /** Image height in pixels (required for CLS prevention) */
  height?: number;
  /** Base64 blur placeholder for blur-up loading */
  blurDataURL?: string;
  /** Caption displayed below the image */
  caption?: string;
  /** Loading priority hint: "high" | "low" | "auto" */
  fetchPriority?: "high" | "low" | "auto";
  /** Whether this is an above-the-fold image */
  priority?: boolean;
}

/* ------------------------------------------------------------------ */
/*  CTA Config                                                         */
/* ------------------------------------------------------------------ */

export interface CTAConfig {
  /** CTA section heading */
  heading: string;
  /** CTA section description */
  description?: string;
  /** CTA button */
  button?: {
    label: string;
    href: string;
    variant?: "default" | "outline";
  };
}

/* ------------------------------------------------------------------ */
/*  Navigation Config                                                  */
/* ------------------------------------------------------------------ */

export interface NavigationConfig {
  /** Whether this entity appears in navigation */
  visible?: boolean;
  /** Custom navigation label */
  navLabel?: string;
  /** Navigation group (for categorizing in menus) */
  navGroup?: string;
  /** Sort order in navigation */
  navOrder?: number;
}

/* ------------------------------------------------------------------ */
/*  Content Overrides                                                  */
/* ------------------------------------------------------------------ */

/**
 * Per-entity content overrides.
 * These override the default section generation.
 * All fields are optional — missing fields use auto-generated content.
 */
export interface ContentOverrides {
  /** Override hero heading */
  heroHeading?: string;
  /** Override hero heading gold portion */
  heroHeadingGold?: string;
  /** Override hero description */
  heroDescription?: string;
  /** Override hero badge */
  heroBadge?: string;
  /** Override hero secondary description */
  heroSecondaryDescription?: string;
  /** Override "Why KlickChamp" items */
  whyKlickChamp?: { title: string; description: string }[];
  /** Override FAQ items */
  faqs?: { question: string; answer: string }[];
  /** Override CTA */
  cta?: CTAConfig;
}

/* ------------------------------------------------------------------ */
/*  Relationship Config                                                */
/* ------------------------------------------------------------------ */

export interface RelationshipConfig {
  /** Slug of parent entity (for sub-services) */
  parentSlug?: string;
  /** Slugs of child entities (for services → sub-services) */
  childSlugs?: string[];
  /** Slugs of related entities of each type */
  related?: {
    services?: string[];
    industries?: string[];
    locations?: string[];
    blogs?: string[];
    caseStudies?: string[];
  };
}

/* ------------------------------------------------------------------ */
/*  Entity Base                                                        */
/* ------------------------------------------------------------------ */

/**
 * Base fields shared by all entities.
 */
export interface EntityBase {
  id: string;
  title: string;
  slug: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  seo?: SEOConfig;
  media?: MediaConfig;
  cta?: CTAConfig;
  navigation?: NavigationConfig;
  content?: ContentOverrides;
  semanticKeywords?: string[];
  searchIntent?: SearchIntent;
  pagePurpose?: string;
}

/* ------------------------------------------------------------------ */
/*  Utility types                                                      */
/* ------------------------------------------------------------------ */

/** Extract slug type from an entity array */
export type EntitySlug<T extends { slug: string }> = T["slug"];

/**
 * Entity that supports the centralized image system.
 * Used by templates to read images from a consistent property.
 */
export interface ImageEntity {
  images?: ImageConfig;
  image?: string;
  thumbnail?: string;
}
