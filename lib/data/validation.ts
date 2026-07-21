import type { ValidationIssue } from "@/lib/seo/types";
import { ALL_SERVICES } from "@/lib/data/services/index";
import { INDUSTRIES } from "@/lib/data/industries";
import { LOCATIONS } from "@/lib/data/locations";
import { BLOG_POSTS } from "@/lib/data/blog";
import { CASE_STUDIES } from "@/lib/data/case-studies";

/* ------------------------------------------------------------------ */
/*  Helpers — push only non-null issues                                */
/* ------------------------------------------------------------------ */

function pushRequired(issues: ValidationIssue[], page: string, field: string, value: unknown) {
  if (value === undefined || value === null || value === "") {
    issues.push({ severity: "error", page, field, message: `Missing required field: ${field}` });
  }
}

function pushRecommended(issues: ValidationIssue[], page: string, field: string, value: unknown) {
  if (value === undefined || value === null || value === "") {
    issues.push({ severity: "warning", page, field, message: `Missing recommended field: ${field}` });
  }
}

function pushMaxLength(issues: ValidationIssue[], page: string, field: string, value: string, max: number) {
  if (value && value.length > max) {
    issues.push({ severity: "warning", page, field, message: `Field "${field}" exceeds ${max} chars (${value.length})` });
  }
}

function pushBrokenRef(issues: ValidationIssue[], page: string, field: string, slug: string, validSlugs: string[]) {
  if (!validSlugs.includes(slug)) {
    issues.push({ severity: "error", page, field, message: `Broken reference: "${slug}" not found` });
  }
}

/* ------------------------------------------------------------------ */
/*  Service validation                                                 */
/* ------------------------------------------------------------------ */

export function validateServices(): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const allSlugs = ALL_SERVICES.map((s) => s.slug);

  for (const service of ALL_SERVICES) {
    const page = `/services/${service.slug}`;

    pushRequired(issues, page, "title", service.title);
    pushRequired(issues, page, "slug", service.slug);
    pushRequired(issues, page, "description", service.description);
    pushRequired(issues, page, "metaTitle", service.metaTitle);
    pushRequired(issues, page, "metaDescription", service.metaDescription);
    pushRequired(issues, page, "primaryKeyword", service.primaryKeyword);

    pushRecommended(issues, page, "longDescription", service.longDescription);
    pushRecommended(issues, page, "heroTagline", service.heroTagline);
    pushRecommended(issues, page, "heroSubtitle", service.heroSubtitle);

    pushMaxLength(issues, page, "metaTitle", service.metaTitle, 60);
    pushMaxLength(issues, page, "metaDescription", service.metaDescription, 160);

    for (const relSlug of service.relatedServices) {
      pushBrokenRef(issues, page, "relatedServices", relSlug, allSlugs);
    }
    for (const indSlug of service.relatedIndustries) {
      pushBrokenRef(issues, page, "relatedIndustries", indSlug, INDUSTRIES.map((i) => i.slug));
    }

    for (const sub of service.subServices) {
      const subPage = `${page}/${sub.slug}`;
      pushRequired(issues, subPage, "title", sub.title);
      pushRequired(issues, subPage, "slug", sub.slug);
      pushRequired(issues, subPage, "description", sub.description);
      pushRequired(issues, subPage, "metaTitle", sub.metaTitle);
      pushRequired(issues, subPage, "metaDescription", sub.metaDescription);
      pushRequired(issues, subPage, "primaryKeyword", sub.primaryKeyword);
      pushMaxLength(issues, subPage, "metaTitle", sub.metaTitle, 60);
      pushMaxLength(issues, subPage, "metaDescription", sub.metaDescription, 160);
    }
  }

  return issues;
}

/* ------------------------------------------------------------------ */
/*  Industry validation                                                */
/* ------------------------------------------------------------------ */

export function validateIndustries(): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  for (const industry of INDUSTRIES) {
    const page = `/industries/${industry.slug}`;
    pushRequired(issues, page, "title", industry.title);
    pushRequired(issues, page, "slug", industry.slug);
    pushRequired(issues, page, "description", industry.description);
    pushRequired(issues, page, "metaTitle", industry.metaTitle);
    pushRequired(issues, page, "metaDescription", industry.metaDescription);
    pushMaxLength(issues, page, "metaTitle", industry.metaTitle, 60);
    pushMaxLength(issues, page, "metaDescription", industry.metaDescription, 160);

    if (industry.challenges.length === 0) {
      issues.push({ severity: "warning", page, field: "challenges", message: "No challenges defined" });
    }
    if (industry.stats.length === 0) {
      issues.push({ severity: "warning", page, field: "stats", message: "No stats defined" });
    }
  }

  return issues;
}

/* ------------------------------------------------------------------ */
/*  Location validation                                                */
/* ------------------------------------------------------------------ */

export function validateLocations(): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  for (const location of LOCATIONS) {
    const page = `/locations/${location.slug}`;
    pushRequired(issues, page, "title", location.title);
    pushRequired(issues, page, "slug", location.slug);
    pushRequired(issues, page, "description", location.description);
    pushRequired(issues, page, "metaTitle", location.metaTitle);
    pushRequired(issues, page, "metaDescription", location.metaDescription);
    pushMaxLength(issues, page, "metaTitle", location.metaTitle, 60);
    pushMaxLength(issues, page, "metaDescription", location.metaDescription, 160);
  }

  return issues;
}

/* ------------------------------------------------------------------ */
/*  Blog validation                                                    */
/* ------------------------------------------------------------------ */

export function validateBlog(): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  for (const post of BLOG_POSTS) {
    const page = `/blog/${post.slug}`;
    pushRequired(issues, page, "title", post.title);
    pushRequired(issues, page, "slug", post.slug);
    pushRequired(issues, page, "excerpt", post.excerpt);
    pushRequired(issues, page, "content", post.content);
    pushRequired(issues, page, "category", post.category);
    pushRequired(issues, page, "date", post.date);

    if (!post.faqs || post.faqs.length === 0) {
      issues.push({ severity: "info", page, field: "faqs", message: "No FAQs defined" });
    }
    if (post.tags.length === 0) {
      issues.push({ severity: "info", page, field: "tags", message: "No tags defined" });
    }
  }

  return issues;
}

/* ------------------------------------------------------------------ */
/*  Case Study validation                                              */
/* ------------------------------------------------------------------ */

export function validateCaseStudies(): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  for (const cs of CASE_STUDIES) {
    const page = `/case-studies/${cs.slug}`;
    pushRequired(issues, page, "title", cs.title);
    pushRequired(issues, page, "slug", cs.slug);
    pushRequired(issues, page, "client", cs.client);
    pushRequired(issues, page, "overview", cs.overview);
    pushRequired(issues, page, "challenge", cs.challenge);
    pushRequired(issues, page, "solution", cs.solution);
    pushRequired(issues, page, "results", cs.results);

    if (cs.isPlaceholder) {
      issues.push({ severity: "info", page, field: "isPlaceholder", message: "Placeholder case study" });
    }
    if (cs.metrics.length === 0) {
      issues.push({ severity: "warning", page, field: "metrics", message: "No metrics defined" });
    }
  }

  return issues;
}

/* ------------------------------------------------------------------ */
/*  Global validation                                                  */
/* ------------------------------------------------------------------ */

export function validateAllData(): ValidationIssue[] {
  return [
    ...validateServices(),
    ...validateIndustries(),
    ...validateLocations(),
    ...validateBlog(),
    ...validateCaseStudies(),
  ];
}

/* ------------------------------------------------------------------ */
/*  Slug uniqueness                                                    */
/* ------------------------------------------------------------------ */

export function validateUniqueSlugs(): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const allSlugs = new Map<string, string[]>();

  function track(page: string, slug: string) {
    const existing = allSlugs.get(slug) || [];
    existing.push(page);
    allSlugs.set(slug, existing);
  }

  for (const s of ALL_SERVICES) {
    track(`/services/${s.slug}`, s.slug);
    for (const sub of s.subServices) {
      track(`/services/${s.slug}/${sub.slug}`, `${s.slug}/${sub.slug}`);
    }
  }
  for (const i of INDUSTRIES) track(`/industries/${i.slug}`, i.slug);
  for (const l of LOCATIONS) track(`/locations/${l.slug}`, l.slug);
  for (const p of BLOG_POSTS) track(`/blog/${p.slug}`, p.slug);
  for (const cs of CASE_STUDIES) track(`/case-studies/${cs.slug}`, cs.slug);

  for (const [slug, pages] of allSlugs) {
    if (pages.length > 1 && !slug.includes("/")) {
      issues.push({
        severity: "error",
        page: pages[0],
        field: "slug",
        message: `Duplicate slug "${slug}" found on: ${pages.join(", ")}`,
      });
    }
  }

  return issues;
}
