import type { Metadata } from "next";
import type {
  PageSEOInput,
  SEOResult,
  BreadcrumbItem,
  SchemaType,
  PageType,
} from "./types";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { generatePageMetadata } from "./metadata";
import {
  organizationJsonLd,
  serviceJsonLd,
  localBusinessJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
  articleJsonLd,
  videoObjectJsonLd,
  webPageJsonLd,
} from "./jsonld";
import {
  getServiceLinks,
  getSubServiceLinks,
  getIndustryLinks,
  getLocationLinks,
  getBlogLinks,
  getCaseStudyLinks,
} from "./internal-links";

/* ------------------------------------------------------------------ */
/*  Schema resolution                                                  */
/* ------------------------------------------------------------------ */

function resolveSchemas(
  input: PageSEOInput,
  breadcrumbs: BreadcrumbItem[]
): object[] {
  const schemas: object[] = [];
  const types = input.schemas || getDefaultSchemas(input.type);
  const url = `${SITE_URL}${input.path}`;

  if (types.includes("organization")) {
    schemas.push(organizationJsonLd());
  }

  if (types.includes("service")) {
    schemas.push(serviceJsonLd({ name: input.title, description: input.description, url }));
  }

  if (types.includes("localBusiness")) {
    schemas.push(localBusinessJsonLd({ name: input.title, description: input.description, url }));
  }

  if (types.includes("breadcrumb") && breadcrumbs.length > 0) {
    schemas.push(
      breadcrumbJsonLd({
        items: breadcrumbs.map((b) => ({ name: b.label, url: b.href })),
      })
    );
  }

  if (types.includes("faq") && input.faqs && input.faqs.length > 0) {
    schemas.push(faqJsonLd({ questions: input.faqs }));
  }

  if (types.includes("article")) {
    schemas.push(
      articleJsonLd({
        title: input.title,
        description: input.description,
        url,
        datePublished: input.content?.publishedDate || new Date().toISOString(),
        dateModified: input.content?.modifiedDate,
        author: input.content?.author,
      })
    );
  }

  if (types.includes("webPage")) {
    schemas.push(
      webPageJsonLd({
        name: input.title,
        description: input.description,
        url,
        datePublished: input.content?.publishedDate,
        dateModified: input.content?.modifiedDate,
      })
    );
  }

  return schemas;
}

function getDefaultSchemas(type: PageType): SchemaType[] {
  switch (type) {
    case "service":
      return ["organization", "service", "breadcrumb", "faq"];
    case "sub-service":
      return ["organization", "service", "breadcrumb", "faq"];
    case "industry":
      return ["organization", "webPage", "breadcrumb", "faq"];
    case "location":
      return ["organization", "localBusiness", "breadcrumb", "faq"];
    case "blog":
      return ["organization", "article", "breadcrumb", "faq"];
    case "case-study":
      return ["organization", "article", "breadcrumb", "faq"];
    case "static":
      return ["organization", "webPage", "breadcrumb"];
  }
}

/* ------------------------------------------------------------------ */
/*  Internal links resolution                                          */
/* ------------------------------------------------------------------ */

function resolveInternalLinks(type: PageType, slug: string) {
  switch (type) {
    case "service":
      return getServiceLinks(slug);
    case "sub-service": {
      const parts = slug.split("/");
      return getSubServiceLinks(parts[0], parts[1]);
    }
    case "industry":
      return getIndustryLinks(slug);
    case "location":
      return getLocationLinks(slug);
    case "blog":
      return getBlogLinks(slug);
    case "case-study":
      return getCaseStudyLinks(slug);
    case "static":
      return { children: [], siblings: [], related: { services: [], industries: [], locations: [], blogs: [], caseStudies: [] } };
  }
}

/* ------------------------------------------------------------------ */
/*  Breadcrumb generation                                              */
/* ------------------------------------------------------------------ */

function getDefaultBreadcrumbs(type: PageType, slug: string, title: string): BreadcrumbItem[] {
  const base: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
  ];

  switch (type) {
    case "service":
      return [...base, { label: "Services", href: "/services" }, { label: title, href: `/services/${slug}` }];
    case "sub-service": {
      const parts = slug.split("/");
      const serviceTitle = parts[0].replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
      return [
        ...base,
        { label: "Services", href: "/services" },
        { label: serviceTitle, href: `/services/${parts[0]}` },
        { label: title, href: `/services/${slug}` },
      ];
    }
    case "industry":
      return [...base, { label: "Industries", href: "/industries" }, { label: title, href: `/industries/${slug}` }];
    case "location":
      return [...base, { label: "Locations", href: "/locations" }, { label: title, href: `/locations/${slug}` }];
    case "blog":
      return [...base, { label: "Blog", href: "/blog" }, { label: title, href: `/blog/${slug}` }];
    case "case-study":
      return [...base, { label: "Case Studies", href: "/case-studies" }, { label: title, href: `/case-studies/${slug}` }];
    case "static":
      return base;
  }
}

/* ------------------------------------------------------------------ */
/*  Public API — Unified SEO generators                                */
/* ------------------------------------------------------------------ */

/**
 * Generate complete SEO for any page from a single input.
 * Returns metadata for generateMetadata(), schemas for JSON-LD,
 * breadcrumbs for the Breadcrumbs component, and internal links.
 */
export function generatePageSEO(input: PageSEOInput): SEOResult {
  const breadcrumbs = input.breadcrumbs || getDefaultBreadcrumbs(input.type, input.slug, input.title);
  const metadata = generatePageMetadata({
    title: input.metaTitle || input.title,
    description: input.metaDescription || input.description,
    path: input.path,
    type: input.type === "blog" || input.type === "case-study" ? "article" : "website",
    publishedTime: input.content?.publishedDate,
    modifiedTime: input.content?.modifiedDate,
    authors: input.content?.author ? [input.content.author] : undefined,
  });

  const schemas = resolveSchemas(input, breadcrumbs);
  const internalLinks = resolveInternalLinks(input.type, input.slug);

  return { metadata, schemas, breadcrumbs, internalLinks };
}

/**
 * Convenience: generate SEO for a service page.
 */
export function servicePageSEO(service: {
  title: string;
  slug: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  faqs: { question: string; answer: string }[];
}): SEOResult {
  return generatePageSEO({
    type: "service",
    slug: service.slug,
    title: service.title,
    metaTitle: service.metaTitle,
    metaDescription: service.metaDescription,
    description: service.description,
    path: `/services/${service.slug}`,
    faqs: service.faqs,
  });
}

/**
 * Convenience: generate SEO for a sub-service page.
 */
export function subServicePageSEO(
  service: { title: string; slug: string },
  subService: {
    title: string;
    slug: string;
    description: string;
    metaTitle: string;
    metaDescription: string;
    faqs: { question: string; answer: string }[];
  }
): SEOResult {
  return generatePageSEO({
    type: "sub-service",
    slug: `${service.slug}/${subService.slug}`,
    title: subService.title,
    metaTitle: subService.metaTitle,
    metaDescription: subService.metaDescription,
    description: subService.description,
    path: `/services/${service.slug}/${subService.slug}`,
    faqs: subService.faqs,
  });
}

/**
 * Convenience: generate SEO for an industry page.
 */
export function industryPageSEO(industry: {
  title: string;
  slug: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  faqs?: { question: string; answer: string }[];
}): SEOResult {
  return generatePageSEO({
    type: "industry",
    slug: industry.slug,
    title: industry.title,
    metaTitle: industry.metaTitle,
    metaDescription: industry.metaDescription,
    description: industry.description,
    path: `/industries/${industry.slug}`,
    faqs: industry.faqs,
  });
}

/**
 * Convenience: generate SEO for a location page.
 */
export function locationPageSEO(location: {
  title: string;
  slug: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  faqs?: { question: string; answer: string }[];
}): SEOResult {
  return generatePageSEO({
    type: "location",
    slug: location.slug,
    title: location.title,
    metaTitle: location.metaTitle,
    metaDescription: location.metaDescription,
    description: location.description,
    path: `/locations/${location.slug}`,
    faqs: location.faqs,
  });
}

/**
 * Convenience: generate SEO for a blog post.
 */
export function blogPageSEO(post: {
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  date: string;
  updatedDate?: string;
  faqs?: { question: string; answer: string }[];
}): SEOResult {
  return generatePageSEO({
    type: "blog",
    slug: post.slug,
    title: post.title,
    metaTitle: post.title,
    metaDescription: post.excerpt,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    content: {
      author: post.author,
      publishedDate: post.date,
      modifiedDate: post.updatedDate,
    },
    faqs: post.faqs,
  });
}

/**
 * Convenience: generate SEO for a case study.
 */
export function caseStudyPageSEO(cs: {
  title: string;
  slug: string;
  overview: string;
  faqs?: { question: string; answer: string }[];
}): SEOResult {
  return generatePageSEO({
    type: "case-study",
    slug: cs.slug,
    title: cs.title,
    metaTitle: cs.title,
    metaDescription: cs.overview,
    description: cs.overview,
    path: `/case-studies/${cs.slug}`,
    content: { author: "KlickChamp Team" },
    faqs: cs.faqs,
  });
}

/**
 * Convenience: generate SEO for a static page.
 */
export function staticPageSEO(
  path: string,
  title: string,
  description: string
): SEOResult {
  return generatePageSEO({
    type: "static",
    slug: path,
    title,
    metaTitle: title,
    metaDescription: description,
    description,
    path,
  });
}
