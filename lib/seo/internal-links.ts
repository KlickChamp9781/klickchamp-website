import type { InternalLinkSet, LinkItem } from "./types";
import { getServiceBySlug } from "@/lib/data/services";
import { ALL_SERVICES } from "@/lib/data/services/index";
import { INDUSTRIES } from "@/lib/data/industries";
import { LOCATIONS } from "@/lib/data/locations";
import { BLOG_POSTS } from "@/lib/data/blog";
import { CASE_STUDIES } from "@/lib/data/case-studies";

function toLink(item: { title: string; slug: string; description?: string }): LinkItem {
  return { title: item.title, href: `/services/${item.slug}`, description: item.description?.split(".")[0] };
}

/**
 * Compute the full internal link set for a service page.
 */
export function getServiceLinks(serviceSlug: string): InternalLinkSet {
  const service = getServiceBySlug(serviceSlug);
  if (!service) return { children: [], siblings: [], related: emptyRelated() };

  const children: LinkItem[] = service.subServices.map((sub) => ({
    title: sub.title,
    href: `/services/${serviceSlug}/${sub.slug}`,
    description: sub.description.split(".")[0],
  }));

  const siblings: LinkItem[] = ALL_SERVICES
    .filter((s) => s.slug !== serviceSlug)
    .map((s) => ({ title: s.title, href: `/services/${s.slug}`, description: s.description.split(".")[0] }));

  return {
    children,
    siblings,
    related: computeRelatedServices(serviceSlug, service.relatedServices, service.relatedIndustries, service.relatedBlogs, service.relatedCaseStudies),
  };
}

/**
 * Compute the full internal link set for a sub-service page.
 */
export function getSubServiceLinks(serviceSlug: string, subSlug: string): InternalLinkSet {
  const service = getServiceBySlug(serviceSlug);
  if (!service) return { children: [], siblings: [], related: emptyRelated() };

  const parent: LinkItem = { title: service.title, href: `/services/${serviceSlug}` };

  const siblings: LinkItem[] = service.subServices
    .filter((sub) => sub.slug !== subSlug)
    .map((sub) => ({ title: sub.title, href: `/services/${serviceSlug}/${sub.slug}`, description: sub.description.split(".")[0] }));

  const currentSub = service.subServices.find((sub) => sub.slug === subSlug);

  return {
    parent,
    children: [],
    siblings,
    related: computeRelatedServices(
      serviceSlug,
      currentSub?.relatedIndustries ? [] : service.relatedServices,
      currentSub?.relatedIndustries || [],
      currentSub?.relatedBlogs || [],
      currentSub?.relatedCaseStudies || []
    ),
  };
}

/**
 * Compute the full internal link set for an industry page.
 */
export function getIndustryLinks(industrySlug: string): InternalLinkSet {
  const industry = INDUSTRIES.find((i) => i.slug === industrySlug);
  if (!industry) return { children: [], siblings: [], related: emptyRelated() };

  const siblings: LinkItem[] = INDUSTRIES
    .filter((i) => i.slug !== industrySlug)
    .map((i) => ({ title: i.title, href: `/industries/${i.slug}`, description: i.description.split(".")[0] }));

  const relatedServices: LinkItem[] = (industry.relatedServices || [])
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean)
    .map((s) => ({ title: s!.title, href: `/services/${s!.slug}`, description: s!.description.split(".")[0] }));

  return {
    children: [],
    siblings,
    related: { services: relatedServices, industries: [], locations: [], blogs: [], caseStudies: [] },
  };
}

/**
 * Compute the full internal link set for a location page.
 */
export function getLocationLinks(locationSlug: string): InternalLinkSet {
  const siblings: LinkItem[] = LOCATIONS
    .filter((l) => l.slug !== locationSlug)
    .map((l) => ({ title: l.title, href: `/locations/${l.slug}`, description: l.description.split(".")[0] }));

  return { children: [], siblings, related: emptyRelated() };
}

/**
 * Compute the full internal link set for a blog post.
 */
export function getBlogLinks(postSlug: string): InternalLinkSet {
  const post = BLOG_POSTS.find((p) => p.slug === postSlug);
  const siblings: LinkItem[] = BLOG_POSTS
    .filter((p) => p.slug !== postSlug)
    .map((p) => ({ title: p.title, href: `/blog/${p.slug}`, description: p.excerpt.split(".")[0] }));

  const relatedServices: LinkItem[] = (post?.relatedServices || [])
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean)
    .map((s) => ({ title: s!.title, href: `/services/${s!.slug}` }));

  return { children: [], siblings, related: { services: relatedServices, industries: [], locations: [], blogs: [], caseStudies: [] } };
}

/**
 * Compute the full internal link set for a case study.
 */
export function getCaseStudyLinks(csSlug: string): InternalLinkSet {
  const cs = CASE_STUDIES.find((c) => c.slug === csSlug);
  const siblings: LinkItem[] = CASE_STUDIES
    .filter((c) => c.slug !== csSlug)
    .map((c) => ({ title: c.title, href: `/case-studies/${c.slug}`, description: c.overview.split(".")[0] }));

  const relatedServices: LinkItem[] = (cs?.services || [])
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean)
    .map((s) => ({ title: s!.title, href: `/services/${s!.slug}` }));

  return { children: [], siblings, related: { services: relatedServices, industries: [], locations: [], blogs: [], caseStudies: [] } };
}

function computeRelatedServices(
  currentSlug: string,
  serviceSlugs: string[],
  industrySlugs: string[],
  blogSlugs: string[],
  csSlugs: string[]
): InternalLinkSet["related"] {
  const services: LinkItem[] = serviceSlugs
    .filter((s) => s !== currentSlug)
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean)
    .map((s) => ({ title: s!.title, href: `/services/${s!.slug}` }));

  const industries: LinkItem[] = industrySlugs
    .map((slug) => INDUSTRIES.find((i) => i.slug === slug))
    .filter(Boolean)
    .map((i) => ({ title: i!.title, href: `/industries/${i!.slug}` }));

  const blogs: LinkItem[] = blogSlugs
    .map((slug) => BLOG_POSTS.find((p) => p.slug === slug))
    .filter(Boolean)
    .map((p) => ({ title: p!.title, href: `/blog/${p!.slug}` }));

  const caseStudies: LinkItem[] = csSlugs
    .map((slug) => CASE_STUDIES.find((c) => c.slug === slug))
    .filter(Boolean)
    .map((c) => ({ title: c!.title, href: `/case-studies/${c!.slug}` }));

  return { services, industries, locations: [], blogs, caseStudies };
}

function emptyRelated(): InternalLinkSet["related"] {
  return { services: [], industries: [], locations: [], blogs: [], caseStudies: [] };
}
