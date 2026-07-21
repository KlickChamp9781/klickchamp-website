import type { LinkItem } from "@/lib/seo/types";
import { resolveImage } from "@/lib/data/image-utils";
import { ALL_SERVICES, getServiceBySlug } from "@/lib/data/services/index";
import { INDUSTRIES } from "@/lib/data/industries";
import { LOCATIONS } from "@/lib/data/locations";
import { BLOG_POSTS } from "@/lib/data/blog";
import { CASE_STUDIES } from "@/lib/data/case-studies";

/* ------------------------------------------------------------------ */
/*  Link helpers                                                       */
/* ------------------------------------------------------------------ */

function serviceToLink(slug: string): LinkItem | null {
  const s = getServiceBySlug(slug);
  if (!s) return null;
  return { title: s.title, href: `/services/${s.slug}`, description: s.description.split(".")[0] + "." };
}

function industryToLink(slug: string): LinkItem | null {
  const i = INDUSTRIES.find((x) => x.slug === slug);
  if (!i) return null;
  return { title: i.title, href: `/industries/${i.slug}`, description: i.description.split(".")[0] + "." };
}

function locationToLink(slug: string): LinkItem | null {
  const l = LOCATIONS.find((x) => x.slug === slug);
  if (!l) return null;
  return { title: l.title, href: `/locations/${l.slug}`, description: l.description.split(".")[0] + "." };
}

function blogToLink(slug: string): LinkItem | null {
  const p = BLOG_POSTS.find((x) => x.slug === slug);
  if (!p) return null;
  return { title: p.title, href: `/blog/${p.slug}`, description: p.excerpt.split(".")[0] + ".", image: resolveImage(p)?.src };
}

function csToLink(slug: string): LinkItem | null {
  const cs = CASE_STUDIES.find((x) => x.slug === slug);
  if (!cs) return null;
  const img = resolveImage(cs);
  return { title: cs.title, href: `/case-studies/${cs.slug}`, description: cs.overview.split(".")[0] + ".", image: img?.src };
}

function subServiceToLink(serviceSlug: string, sub: { slug: string; title: string; description: string }): LinkItem {
  return { title: sub.title, href: `/services/${serviceSlug}/${sub.slug}`, description: sub.description.split(".")[0] + "." };
}

/* ------------------------------------------------------------------ */
/*  Service relationships                                              */
/* ------------------------------------------------------------------ */

export interface ServiceRelationships {
  parent: null;
  children: LinkItem[];
  siblings: LinkItem[];
  relatedServices: LinkItem[];
  relatedIndustries: LinkItem[];
  relatedBlogs: LinkItem[];
  relatedCaseStudies: LinkItem[];
}

export function getServiceRelationships(serviceSlug: string): ServiceRelationships {
  const service = getServiceBySlug(serviceSlug);
  if (!service) {
    return { parent: null, children: [], siblings: [], relatedServices: [], relatedIndustries: [], relatedBlogs: [], relatedCaseStudies: [] };
  }

  const children = service.subServices.map((sub) => subServiceToLink(service.slug, sub));

  const siblings = ALL_SERVICES
    .filter((s) => s.slug !== serviceSlug)
    .map((s) => serviceToLink(s.slug))
    .filter(Boolean) as LinkItem[];

  const relatedServices = (service.relatedServices || [])
    .map((slug) => serviceToLink(slug))
    .filter(Boolean) as LinkItem[];

  const relatedIndustries = (service.relatedIndustries || service.industriesServed || [])
    .map((slug) => industryToLink(slug))
    .filter(Boolean) as LinkItem[];

  const relatedBlogs = (service.relatedBlogs || [])
    .map((slug) => blogToLink(slug))
    .filter(Boolean) as LinkItem[];

  const relatedCaseStudies = (service.relatedCaseStudies || [])
    .map((slug) => csToLink(slug))
    .filter(Boolean) as LinkItem[];

  return { parent: null, children, siblings, relatedServices, relatedIndustries, relatedBlogs, relatedCaseStudies };
}

/* ------------------------------------------------------------------ */
/*  Sub-service relationships                                          */
/* ------------------------------------------------------------------ */

export interface SubServiceRelationships {
  parent: LinkItem;
  siblings: LinkItem[];
  relatedServices: LinkItem[];
  relatedIndustries: LinkItem[];
  relatedBlogs: LinkItem[];
  relatedCaseStudies: LinkItem[];
}

export function getSubServiceRelationships(serviceSlug: string, subSlug: string): SubServiceRelationships {
  const service = getServiceBySlug(serviceSlug);
  if (!service) {
    return { parent: { title: "", href: "" }, siblings: [], relatedServices: [], relatedIndustries: [], relatedBlogs: [], relatedCaseStudies: [] };
  }

  const parent: LinkItem = { title: service.title, href: `/services/${service.slug}` };

  const currentSub = service.subServices.find((s) => s.slug === subSlug);
  const siblings = service.subServices
    .filter((s) => s.slug !== subSlug)
    .map((s) => subServiceToLink(service.slug, s));

  const relatedIndustries = (currentSub?.relatedIndustries || [])
    .map((slug) => industryToLink(slug))
    .filter(Boolean) as LinkItem[];

  const relatedBlogs = (currentSub?.relatedBlogs || service.relatedBlogs || [])
    .map((slug) => blogToLink(slug))
    .filter(Boolean) as LinkItem[];

  const relatedCaseStudies = (currentSub?.relatedCaseStudies || service.relatedCaseStudies || [])
    .map((slug) => csToLink(slug))
    .filter(Boolean) as LinkItem[];

  return { parent, siblings, relatedServices: [], relatedIndustries, relatedBlogs, relatedCaseStudies };
}

/* ------------------------------------------------------------------ */
/*  Industry relationships                                             */
/* ------------------------------------------------------------------ */

export interface IndustryRelationships {
  parent: null;
  children: LinkItem[];
  siblings: LinkItem[];
  relatedServices: LinkItem[];
  relatedIndustries: LinkItem[];
}

export function getIndustryRelationships(industrySlug: string): IndustryRelationships {
  const industry = INDUSTRIES.find((i) => i.slug === industrySlug);
  if (!industry) {
    return { parent: null, children: [], siblings: [], relatedServices: [], relatedIndustries: [] };
  }

  const relatedServices = (industry.relatedServices || [])
    .map((slug) => serviceToLink(slug))
    .filter(Boolean) as LinkItem[];

  const siblings = INDUSTRIES
    .filter((i) => i.slug !== industrySlug)
    .filter((i) => i.relatedServices.some((s) => industry.relatedServices.includes(s)))
    .slice(0, 4)
    .map((i) => industryToLink(i.slug))
    .filter(Boolean) as LinkItem[];

  return { parent: null, children: [], siblings, relatedServices, relatedIndustries: [] };
}

/* ------------------------------------------------------------------ */
/*  Location relationships                                             */
/* ------------------------------------------------------------------ */

export interface LocationRelationships {
  parent: null;
  siblings: LinkItem[];
  nearbyAreas: LinkItem[];
}

export function getLocationRelationships(locationSlug: string): LocationRelationships {
  const location = LOCATIONS.find((l) => l.slug === locationSlug);
  if (!location) {
    return { parent: null, siblings: [], nearbyAreas: [] };
  }

  const siblings = LOCATIONS
    .filter((l) => l.slug !== locationSlug)
    .map((l) => locationToLink(l.slug))
    .filter(Boolean) as LinkItem[];

  const nearbyAreas = (location.nearbyAreas || [])
    .map((area) => ({
      label: area,
      href: `/locations/${location.slug}`,
    }));

  return { parent: null, siblings, nearbyAreas: nearbyAreas as any };
}

/* ------------------------------------------------------------------ */
/*  Blog relationships                                                 */
/* ------------------------------------------------------------------ */

export interface BlogRelationships {
  parent: null;
  siblings: LinkItem[];
  relatedServices: LinkItem[];
}

export function getBlogRelationships(postSlug: string): BlogRelationships {
  const post = BLOG_POSTS.find((p) => p.slug === postSlug);
  if (!post) {
    return { parent: null, siblings: [], relatedServices: [] };
  }

  const sameCategory = BLOG_POSTS
    .filter((p) => p.slug !== postSlug && p.category === post.category)
    .map((p) => blogToLink(p.slug))
    .filter(Boolean) as LinkItem[];

  const siblings = sameCategory.length > 0
    ? sameCategory
    : BLOG_POSTS
        .filter((p) => p.slug !== postSlug)
        .map((p) => blogToLink(p.slug))
        .filter(Boolean) as LinkItem[];

  const relatedServices = (post.relatedServices || [])
    .map((slug) => serviceToLink(slug))
    .filter(Boolean) as LinkItem[];

  return { parent: null, siblings: siblings.slice(0, 3), relatedServices };
}

/* ------------------------------------------------------------------ */
/*  Case Study relationships                                           */
/* ------------------------------------------------------------------ */

export interface CaseStudyRelationships {
  parent: null;
  siblings: LinkItem[];
  relatedServices: LinkItem[];
  relatedIndustries: LinkItem[];
}

export function getCaseStudyRelationships(csSlug: string): CaseStudyRelationships {
  const cs = CASE_STUDIES.find((c) => c.slug === csSlug);
  if (!cs) {
    return { parent: null, siblings: [], relatedServices: [], relatedIndustries: [] };
  }

  const siblings = CASE_STUDIES
    .filter((c) => c.slug !== csSlug)
    .map((c) => csToLink(c.slug))
    .filter(Boolean) as LinkItem[];

  const relatedServices = (cs.services || [])
    .map((slug) => serviceToLink(slug))
    .filter(Boolean) as LinkItem[];

  const relatedIndustries = cs.industry
    ? [industryToLink(cs.industry)].filter(Boolean) as LinkItem[]
    : [];

  return { parent: null, siblings, relatedServices, relatedIndustries };
}

/* ------------------------------------------------------------------ */
/*  Global lookups                                                     */
/* ------------------------------------------------------------------ */

/** Get all services as LinkItems */
export function getAllServiceLinks(): LinkItem[] {
  return ALL_SERVICES.map((s) => serviceToLink(s.slug)).filter(Boolean) as LinkItem[];
}

/** Get all industries as LinkItems */
export function getAllIndustryLinks(): LinkItem[] {
  return INDUSTRIES.map((i) => industryToLink(i.slug)).filter(Boolean) as LinkItem[];
}

/** Get all locations as LinkItems */
export function getAllLocationLinks(): LinkItem[] {
  return LOCATIONS.map((l) => locationToLink(l.slug)).filter(Boolean) as LinkItem[];
}

/** Get all blog posts as LinkItems */
export function getAllBlogLinks(): LinkItem[] {
  return BLOG_POSTS.map((p) => blogToLink(p.slug)).filter(Boolean) as LinkItem[];
}

/** Get all case studies as LinkItems */
export function getAllCaseStudyLinks(): LinkItem[] {
  return CASE_STUDIES.map((c) => csToLink(c.slug)).filter(Boolean) as LinkItem[];
}
