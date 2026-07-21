import type { BreadcrumbItem, InternalLinkSet, LinkItem, SEOResult } from "@/lib/seo/types";

/* ------------------------------------------------------------------ */
/*  Base types                                                         */
/* ------------------------------------------------------------------ */

export interface CTAButton {
  label: string;
  href: string;
  variant?: "default" | "outline";
}

/* ------------------------------------------------------------------ */
/*  Section types                                                      */
/* ------------------------------------------------------------------ */

export interface HeroSection {
  type: "hero";
  badge?: string;
  heading: string;
  headingGold?: string;
  description: string;
  ctas?: CTAButton[];
  /** Secondary description shown after main description */
  secondaryDescription?: string;
}

export interface RichTextSection {
  type: "rich-text";
  /** Optional heading above the text */
  heading?: string;
  headingGold?: string;
  /** Array of paragraph strings */
  paragraphs: string[];
  /** Max width constraint: "default" = max-w-3xl, "full" = full width */
  maxWidth?: "default" | "full";
}

export interface CheckListSection {
  type: "check-list";
  heading: string;
  headingGold?: string;
  items: CheckListItem[];
  /** "check" = check icons, "numbered" = numbered list */
  variant?: "check" | "numbered";
  /** "default" = normal bg, "secondary" = secondary bg */
  theme?: "default" | "secondary";
  /** Grid columns: 1, 2, or 3 */
  columns?: 1 | 2 | 3;
}

export interface CheckListItem {
  title?: string;
  description?: string;
  /** If no title, just render as plain text */
  text?: string;
}

export interface ProblemCardsSection {
  type: "problem-cards";
  heading: string;
  headingGold?: string;
  items: { title: string; description: string }[];
}

export interface FeatureGridSection {
  type: "feature-grid";
  heading: string;
  headingGold?: string;
  items: FeatureGridItem[];
  /** "default" = normal bg, "secondary" = secondary bg */
  theme?: "default" | "secondary";
}

export interface FeatureGridItem {
  title: string;
  description?: string;
}

export interface ProcessSection {
  type: "process";
  heading: string;
  headingGold?: string;
  steps: ProcessStep[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface StatsSection {
  type: "stats";
  heading?: string;
  headingGold?: string;
  stats: StatItem[];
  /** "default" = py-12 border-y, "full" = section-padding */
  layout?: "compact" | "full";
}

export interface StatItem {
  label: string;
  value: string;
}

export interface FAQSection {
  type: "faq";
  heading?: string;
  headingGold?: string;
  faqs: FAQItem[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CTASection {
  type: "cta";
  heading: string;
  description?: string;
  button?: CTAButton;
  /** "default" = secondary bg, "card" = card bg */
  theme?: "default" | "card";
}

export interface LinkGridSection {
  type: "link-grid";
  heading: string;
  headingGold?: string;
  items: LinkItem[];
  /** Number of columns (5 = responsive: md:grid-cols-2 lg:grid-cols-3) */
  columns?: 2 | 3 | 4 | 5;
  /** "default" = normal bg, "card" = card bg */
  theme?: "default" | "card";
}

export interface TagCloudSection {
  type: "tag-cloud";
  heading?: string;
  headingGold?: string;
  tags: TagItem[];
  /** "default" = normal bg, "card" = card bg */
  theme?: "default" | "card";
}

export interface TagItem {
  label: string;
  href: string;
}

export interface TestimonialSection {
  type: "testimonial";
  quote: string;
  author: string;
  role: string;
}

export interface SubServiceGridSection {
  type: "sub-service-grid";
  heading: string;
  headingGold?: string;
  items: SubServiceGridItem[];
  /** "default" = normal bg, "secondary" = secondary bg */
  theme?: "default" | "secondary";
}

export interface SubServiceGridItem {
  title: string;
  href: string;
  description?: string;
}

export interface ContentProseSection {
  type: "content-prose";
  /** Raw markdown-like content */
  content: string;
}

export interface MetaBarSection {
  type: "meta-bar";
  items: MetaBarItem[];
}

export interface MetaBarItem {
  icon?: "calendar" | "clock" | "user" | "tag" | "refresh";
  text: string;
}

export interface SpacerSection {
  type: "spacer";
  height?: "sm" | "md" | "lg";
}

/* ------------------------------------------------------------------ */
/*  Union type                                                         */
/* ------------------------------------------------------------------ */

export type ContentSection =
  | HeroSection
  | RichTextSection
  | CheckListSection
  | ProblemCardsSection
  | FeatureGridSection
  | ProcessSection
  | StatsSection
  | FAQSection
  | CTASection
  | LinkGridSection
  | TagCloudSection
  | TestimonialSection
  | SubServiceGridSection
  | ContentProseSection
  | MetaBarSection
  | SpacerSection;

/* ------------------------------------------------------------------ */
/*  Page content models                                                */
/* ------------------------------------------------------------------ */

export interface PageContent {
  sections: ContentSection[];
}

export interface ServicePageContent extends PageContent {
  breadcrumbs: BreadcrumbItem[];
  seo: SEOResult;
}

export interface SubServicePageContent extends PageContent {
  breadcrumbs: BreadcrumbItem[];
  seo: SEOResult;
}

export interface IndustryPageContent extends PageContent {
  breadcrumbs: BreadcrumbItem[];
  seo: SEOResult;
}

export interface LocationPageContent extends PageContent {
  breadcrumbs: BreadcrumbItem[];
  seo: SEOResult;
}

export interface BlogPageContent extends PageContent {
  breadcrumbs: BreadcrumbItem[];
  seo: SEOResult;
}

export interface CaseStudyPageContent extends PageContent {
  breadcrumbs: BreadcrumbItem[];
  seo: SEOResult;
}
