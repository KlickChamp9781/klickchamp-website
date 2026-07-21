import type { ServiceCategory } from "./services";
import type { Industry } from "./industries";

export interface MegaMenuGroup {
  label: string;
  href: string;
  children: MegaMenuItem[];
}

export interface MegaMenuItem {
  title: string;
  href: string;
  description: string;
  icon: string;
}

export function buildServiceMenuItems(services: ServiceCategory[]): MegaMenuItem[] {
  return services.map((s) => ({
    title: s.title,
    href: `/services/${s.slug}`,
    description: s.description.split(".")[0] + ".",
    icon: s.icon,
  }));
}

export function buildIndustryMenuItems(industries: Industry[]): MegaMenuItem[] {
  return industries.slice(0, 8).map((i) => ({
    title: i.title,
    href: `/industries/${i.slug}`,
    description: i.description.split(".")[0] + ".",
    icon: i.icon,
  }));
}

export const RESOURCE_LINKS = [
  { label: "Blog", href: "/blog" },
  { label: "Case Studies", href: "/case-studies" },
];

export const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Locations", href: "/locations" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];
