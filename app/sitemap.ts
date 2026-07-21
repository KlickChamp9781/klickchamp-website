import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export const dynamic = "force-static";
import { SERVICE_CATEGORIES } from "@/lib/data/services";
import { INDUSTRIES } from "@/lib/data/industries";
import { LOCATIONS } from "@/lib/data/locations";
import { BLOG_POSTS } from "@/lib/data/blog";
import { CASE_STUDIES } from "@/lib/data/case-studies";

const NOW = new Date().toISOString();

function staticPage(path: string, priority: number): MetadataRoute.Sitemap[number] {
  return { url: `${SITE_URL}${path}`, lastModified: NOW, priority };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const paths: MetadataRoute.Sitemap = [];

  // ── Static pages ──────────────────────────────────────────────
  paths.push(
    staticPage("/", 1),
    staticPage("/about", 0.8),
    staticPage("/services", 0.9),
    staticPage("/industries", 0.8),
    staticPage("/locations", 0.8),
    staticPage("/case-studies", 0.8),
    staticPage("/blog", 0.7),
    staticPage("/contact", 0.8),
    staticPage("/team", 0.6),
    staticPage("/testimonials", 0.6),
    staticPage("/privacy", 0.3),
    staticPage("/terms", 0.3),
    staticPage("/resources", 0.5),
  );

  // ── Services (parent + sub-services) ──────────────────────────
  for (const service of SERVICE_CATEGORIES) {
    paths.push(staticPage(`/services/${service.slug}`, 0.8));

    for (const sub of service.subServices) {
      paths.push(staticPage(`/services/${service.slug}/${sub.slug}`, 0.7));
    }
  }

  // ── Industries ────────────────────────────────────────────────
  for (const industry of INDUSTRIES) {
    paths.push(staticPage(`/industries/${industry.slug}`, 0.7));
  }

  // ── Locations ─────────────────────────────────────────────────
  for (const location of LOCATIONS) {
    paths.push(staticPage(`/locations/${location.slug}`, 0.7));
  }

  // ── Blog posts ────────────────────────────────────────────────
  for (const post of BLOG_POSTS) {
    paths.push(staticPage(`/blog/${post.slug}`, 0.6));
  }

  // ── Case studies ──────────────────────────────────────────────
  for (const cs of CASE_STUDIES) {
    paths.push(staticPage(`/case-studies/${cs.slug}`, 0.6));
  }

  return paths;
}
