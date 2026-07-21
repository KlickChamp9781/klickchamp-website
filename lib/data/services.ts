// Compatibility re-export — all data now lives in ./services/ directory
// This file re-exports everything under the old names so existing imports keep working.

export type { FAQ, ProcessStep, SubService, BusinessProblem, ServiceFeature, ServiceHubConfig } from "./services/index";

import {
  ALL_SERVICES,
  getServiceBySlug,
  getSubServiceBySlug,
} from "./services/index";

export { getServiceBySlug, getSubServiceBySlug };

// Old name alias
export const SERVICE_CATEGORIES = ALL_SERVICES;
export type ServiceCategory = import("./services").ServiceHubConfig;

// Old helper aliases
export function getServiceCategory(slug: string) {
  return getServiceBySlug(slug);
}

export function getSubService(serviceSlug: string, subSlug: string) {
  const result = getSubServiceBySlug(serviceSlug, subSlug);
  return result?.subService;
}
