import type { ValidationIssue, SEOResult, PageSEOInput } from "./types";
import { SITE_URL } from "@/lib/constants";
import { ALL_SERVICES } from "@/lib/data/services/index";
import { INDUSTRIES } from "@/lib/data/industries";
import { LOCATIONS } from "@/lib/data/locations";
import { BLOG_POSTS } from "@/lib/data/blog";
import { CASE_STUDIES } from "@/lib/data/case-studies";

/* ------------------------------------------------------------------ */
/*  Single-page validation                                             */
/* ------------------------------------------------------------------ */

const TITLE_MIN = 30;
const TITLE_MAX = 60;
const DESC_MIN = 70;
const DESC_MAX = 160;

/**
 * Validate a single SEO result against best-practice thresholds.
 */
export function validateSEO(page: string, seo: SEOResult): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  // ── Title length ──
  const title = (seo.metadata.title as string) || "";
  if (title.length < TITLE_MIN) {
    issues.push({ severity: "warning", page, field: "title", message: `Title too short (${title.length}/${TITLE_MIN} min)` });
  } else if (title.length > TITLE_MAX) {
    issues.push({ severity: "warning", page, field: "title", message: `Title too long (${title.length}/${TITLE_MAX} max)` });
  }

  // ── Description length ──
  const desc = (seo.metadata.description as string) || "";
  if (desc.length < DESC_MIN) {
    issues.push({ severity: "warning", page, field: "description", message: `Description too short (${desc.length}/${DESC_MIN} min)` });
  } else if (desc.length > DESC_MAX) {
    issues.push({ severity: "warning", page, field: "description", message: `Description too long (${desc.length}/${DESC_MAX} max)` });
  }

  // ── Canonical URL ──
  const canonical = seo.metadata.alternates?.canonical as string | undefined;
  if (!canonical) {
    issues.push({ severity: "error", page, field: "canonical", message: "Missing canonical URL" });
  } else if (!canonical.startsWith(SITE_URL)) {
    issues.push({ severity: "error", page, field: "canonical", message: `Canonical URL not on same domain: ${canonical}` });
  }

  // ── Schema ──
  if (seo.schemas.length === 0) {
    issues.push({ severity: "warning", page, field: "schemas", message: "No JSON-LD schemas emitted" });
  }
  const hasOrg = seo.schemas.some((s) => (s as Record<string, string>)["@type"] === "Organization");
  if (!hasOrg) {
    issues.push({ severity: "info", page, field: "schemas", message: "Missing Organization schema" });
  }

  // ── Breadcrumbs ──
  if (seo.breadcrumbs.length === 0) {
    issues.push({ severity: "info", page, field: "breadcrumbs", message: "No breadcrumbs defined" });
  }

  return issues;
}

/**
 * Validate SEO input before generation (data quality).
 */
export function validatePageInput(page: string, input: PageSEOInput): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  if (!input.title) {
    issues.push({ severity: "error", page, field: "title", message: "Missing page title" });
  }
  if (!input.metaTitle) {
    issues.push({ severity: "warning", page, field: "metaTitle", message: "Missing metaTitle — falling back to title" });
  }
  if (!input.metaDescription) {
    issues.push({ severity: "warning", page, field: "metaDescription", message: "Missing metaDescription — falling back to description" });
  }
  if (!input.description) {
    issues.push({ severity: "error", page, field: "description", message: "Missing description" });
  }
  if (!input.path) {
    issues.push({ severity: "error", page, field: "path", message: "Missing page path" });
  }

  return issues;
}

/* ------------------------------------------------------------------ */
/*  Site-wide validation                                               */
/* ------------------------------------------------------------------ */

/**
 * Validate the entire site SEO across all page types.
 * Returns all issues found with severity and page context.
 */
export function validateEntireSite(): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  // Track titles and descriptions for duplication detection
  const titles = new Map<string, string[]>();
  const descriptions = new Map<string, string[]>();

  function trackDup(page: string, title: string, desc: string) {
    const t = title.toLowerCase().trim();
    const d = desc.toLowerCase().trim();
    if (t) {
      const existing = titles.get(t) || [];
      existing.push(page);
      titles.set(t, existing);
    }
    if (d) {
      const existing = descriptions.get(d) || [];
      existing.push(page);
      descriptions.set(d, existing);
    }
  }

  // ── Services ──
  for (const service of ALL_SERVICES) {
    const page = `/services/${service.slug}`;
    trackDup(page, service.metaTitle, service.metaDescription);
    issues.push(...validatePageInput(page, {
      type: "service", slug: service.slug, title: service.title,
      metaTitle: service.metaTitle, metaDescription: service.metaDescription,
      description: service.description, path: page,
    }));

    // Validate sub-services
    for (const sub of service.subServices) {
      const subPage = `${page}/${sub.slug}`;
      trackDup(subPage, sub.metaTitle, sub.metaDescription);
      issues.push(...validatePageInput(subPage, {
        type: "sub-service", slug: `${service.slug}/${sub.slug}`,
        title: sub.title, metaTitle: sub.metaTitle, metaDescription: sub.metaDescription,
        description: sub.description, path: subPage,
      }));
    }
  }

  // ── Industries ──
  for (const industry of INDUSTRIES) {
    const page = `/industries/${industry.slug}`;
    trackDup(page, industry.metaTitle, industry.metaDescription);
    issues.push(...validatePageInput(page, {
      type: "industry", slug: industry.slug, title: industry.title,
      metaTitle: industry.metaTitle, metaDescription: industry.metaDescription,
      description: industry.description, path: page,
    }));
  }

  // ── Locations ──
  for (const location of LOCATIONS) {
    const page = `/locations/${location.slug}`;
    trackDup(page, location.metaTitle, location.metaDescription);
    issues.push(...validatePageInput(page, {
      type: "location", slug: location.slug, title: location.title,
      metaTitle: location.metaTitle, metaDescription: location.metaDescription,
      description: location.description, path: page,
    }));
  }

  // ── Blog ──
  for (const post of BLOG_POSTS) {
    const page = `/blog/${post.slug}`;
    trackDup(page, post.title, post.excerpt);
  }

  // ── Case Studies ──
  for (const cs of CASE_STUDIES) {
    const page = `/case-studies/${cs.slug}`;
    trackDup(page, cs.title, cs.overview);
  }

  // ── Duplicate title detection ──
  for (const [title, pages] of titles) {
    if (pages.length > 1) {
      issues.push({
        severity: "error",
        page: pages[0],
        field: "title",
        message: `Duplicate title across ${pages.length} pages: "${pages.join(", ")}"`,
      });
    }
  }

  // ── Duplicate description detection ──
  for (const [desc, pages] of descriptions) {
    if (pages.length > 1) {
      issues.push({
        severity: "error",
        page: pages[0],
        field: "description",
        message: `Duplicate description across ${pages.length} pages`,
      });
    }
  }

  // ── Missing blog FAQs ──
  for (const post of BLOG_POSTS) {
    if (!post.faqs || post.faqs.length === 0) {
      issues.push({
        severity: "info",
        page: `/blog/${post.slug}`,
        field: "faqs",
        message: "Blog post has no FAQs — missing FAQ schema opportunity",
      });
    }
  }

  return issues;
}

/* ------------------------------------------------------------------ */
/*  Reporting                                                          */
/* ------------------------------------------------------------------ */

export type ValidationSeverity = ValidationIssue["severity"];

/**
 * Format issues into a readable report string.
 */
export function formatValidationReport(issues: ValidationIssue[]): string {
  if (issues.length === 0) return "All pages pass SEO validation.";

  const errors = issues.filter((i) => i.severity === "error");
  const warnings = issues.filter((i) => i.severity === "warning");
  const infos = issues.filter((i) => i.severity === "info");

  const lines: string[] = [
    `SEO Validation Report: ${errors.length} errors, ${warnings.length} warnings, ${infos.length} info`,
    "",
  ];

  function group(severity: ValidationSeverity, label: string) {
    const group = issues.filter((i) => i.severity === severity);
    if (group.length === 0) return;
    lines.push(`── ${label} (${group.length}) ──`);
    for (const issue of group) {
      lines.push(`  [${issue.page}] ${issue.field}: ${issue.message}`);
    }
    lines.push("");
  }

  group("error", "ERRORS");
  group("warning", "WARNINGS");
  group("info", "INFO");

  return lines.join("\n");
}

/**
 * Summary counts for quick checks.
 */
export function validationSummary(issues: ValidationIssue[]) {
  return {
    total: issues.length,
    errors: issues.filter((i) => i.severity === "error").length,
    warnings: issues.filter((i) => i.severity === "warning").length,
    info: issues.filter((i) => i.severity === "info").length,
    pagesWithErrors: [...new Set(issues.filter((i) => i.severity === "error").map((i) => i.page))].length,
  };
}
