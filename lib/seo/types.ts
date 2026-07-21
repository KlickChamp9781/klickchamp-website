import type { Metadata } from "next";

export type PageType =
  | "service"
  | "sub-service"
  | "industry"
  | "location"
  | "blog"
  | "case-study"
  | "static";

export type SearchIntent =
  | "informational"
  | "navigational"
  | "commercial"
  | "transactional";

export interface KeywordConfig {
  primary: string;
  secondary: string[];
  semantic: string[];
}

export interface PageSEOInput {
  type: PageType;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  path: string;
  image?: string;
  keywords?: KeywordConfig;
  searchIntent?: SearchIntent;
  pagePurpose?: string;
  content?: ContentMetadata;
  breadcrumbs?: BreadcrumbItem[];
  schemas?: SchemaType[];
  faqs?: { question: string; answer: string }[];
}

export interface ContentMetadata {
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
  readingTime?: string;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export type SchemaType =
  | "organization"
  | "service"
  | "localBusiness"
  | "breadcrumb"
  | "faq"
  | "article"
  | "videoObject"
  | "webPage";

export interface InternalLinkSet {
  parent?: LinkItem;
  children: LinkItem[];
  siblings: LinkItem[];
  related: {
    services: LinkItem[];
    industries: LinkItem[];
    locations: LinkItem[];
    blogs: LinkItem[];
    caseStudies: LinkItem[];
  };
}

export interface LinkItem {
  title: string;
  href: string;
  description?: string;
  image?: string;
}

export interface ImageSEOConfig {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export interface SEOResult {
  metadata: Metadata;
  schemas: object[];
  breadcrumbs: BreadcrumbItem[];
  internalLinks: InternalLinkSet;
}

export interface ValidationIssue {
  severity: "error" | "warning" | "info";
  page: string;
  field: string;
  message: string;
}
