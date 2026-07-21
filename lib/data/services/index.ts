import type { ServiceHubConfig } from "./types";
import { seo } from "./seo";
import { googleAds } from "./google-ads";
import { metaAds } from "./meta-ads";
import { websiteDesign } from "./website-design";
import { graphicDesign } from "./graphic-design";
import { videoEditing } from "./video-editing";
import { googleBusiness } from "./google-business";
import { emailMarketing } from "./email-marketing";
import { whatsappMarketing } from "./whatsapp-marketing";
import { youtubeOptimization } from "./youtube-optimization";
import { socialMediaOptimization } from "./social-media-optimization";

export type { ServiceHubConfig, SubService, FAQ, ProcessStep, BusinessProblem, ServiceFeature } from "./types";

export const ALL_SERVICES: ServiceHubConfig[] = [
  seo,
  googleAds,
  metaAds,
  websiteDesign,
  graphicDesign,
  videoEditing,
  googleBusiness,
  emailMarketing,
  whatsappMarketing,
  youtubeOptimization,
  socialMediaOptimization,
];

export function getServiceBySlug(slug: string): ServiceHubConfig | undefined {
  return ALL_SERVICES.find((s) => s.slug === slug);
}

export function getSubServiceBySlug(
  serviceSlug: string,
  subSlug: string
): { service: ServiceHubConfig; subService: ServiceHubConfig["subServices"][number] } | undefined {
  const service = getServiceBySlug(serviceSlug);
  if (!service) return undefined;
  const subService = service.subServices.find((ss) => ss.slug === subSlug);
  if (!subService) return undefined;
  return { service, subService };
}

export function getAllServiceSlugs(): string[] {
  return ALL_SERVICES.map((s) => s.slug);
}

export function getAllSubServiceSlugs(): { serviceSlug: string; subSlug: string }[] {
  const result: { serviceSlug: string; subSlug: string }[] = [];
  for (const service of ALL_SERVICES) {
    for (const sub of service.subServices) {
      result.push({ serviceSlug: service.slug, subSlug: sub.slug });
    }
  }
  return result;
}

export function getServiceMeta(slug: string): { title: string; description: string } | undefined {
  const service = getServiceBySlug(slug);
  if (!service) return undefined;
  return { title: service.metaTitle, description: service.metaDescription };
}
