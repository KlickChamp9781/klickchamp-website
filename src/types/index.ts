/* ================================================================
   KLICKCHAMP — TYPE DEFINITIONS
   Central type registry for the entire application
   ================================================================ */

// --- BASE TYPES ---

export type Locale = "en-IN";

export type SEO = {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
};

// --- NAVIGATION ---

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
  isExternal?: boolean;
};

// --- SERVICES ---

export type ServiceSlug =
  | "digital-marketing"
  | "seo"
  | "meta-ads"
  | "google-ads"
  | "google-my-business"
  | "email-marketing"
  | "youtube-optimization"
  | "whatsapp-campaign"
  | "social-media-optimization"
  | "graphic-design"
  | "video-editing"
  | "website-design-development";

export type Service = {
  slug: ServiceSlug;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  icon: string;
  features: string[];
  benefits: string[];
  process: ProcessStep[];
  pricing?: PricingTier[];
  image?: string;
  faqs: FAQ[];
  meta: SEO;
};

export type ProcessStep = {
  step: number;
  title: string;
  description: string;
};

export type PricingTier = {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  cta: string;
};

// --- TESTIMONIALS ---

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  content: string;
  rating: number;
  service: ServiceSlug;
  results?: string;
  featured?: boolean;
};

// --- TEAM ---

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
};

// --- BLOG ---

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  image?: string;
  category: string;
  tags: string[];
  readTime: number;
  meta: SEO;
};

export type BlogCategory = {
  slug: string;
  name: string;
  description: string;
};

// --- FAQ ---

export type FAQ = {
  question: string;
  answer: string;
};

// --- STATS ---

export type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
};

// --- CONTACT ---

export type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: ServiceSlug | "";
  budget?: string;
  message: string;
};

// --- TIMELINE ---

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

// --- CTA ---

export type CTAData = {
  overline?: string;
  heading: string;
  subheading?: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
};

// --- COMMON ---

export type AnimationVariant =
  | "fadeUp"
  | "fadeIn"
  | "fadeLeft"
  | "fadeRight"
  | "scaleUp"
  | "slideIn"
  | "reveal"
  | "textReveal"
  | "stagger";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "gold";

export type ButtonSize = "sm" | "md" | "lg" | "xl";
