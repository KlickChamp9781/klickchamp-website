export interface FAQ {
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface BusinessProblem {
  title: string;
  description: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface SubService {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  benefits: string[];
  process: ProcessStep[];
  deliverables: string[];
  faqs: FAQ[];
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  businessProblems: BusinessProblem[];
  features: ServiceFeature[];
  whyKlickChamp: string[];
  relatedIndustries: string[];
  relatedBlogs: string[];
  relatedCaseStudies: string[];
  semanticKeywords?: string[];
  searchIntent?: "informational" | "navigational" | "commercial" | "transactional";
  pagePurpose?: string;
  /* Enterprise Data Engine fields */
  seo?: import("@/lib/data/types").SEOConfig;
  media?: import("@/lib/data/types").MediaConfig;
  cta?: import("@/lib/data/types").CTAConfig;
  content?: import("@/lib/data/types").ContentOverrides;
  /** Centralized image management */
  images?: import("@/lib/data/types").ImageConfig;
}

export interface ServiceHubConfig {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  icon: string;
  features: (string | { title: string; description?: string })[];
  benefits: string[];
  process: ProcessStep[];
  faqs: FAQ[];
  subServices: SubService[];
  businessProblems?: BusinessProblem[];
  relatedIndustries: string[];
  relatedServices: string[];
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  heroTagline: string;
  heroSubtitle: string;
  whyKlickChamp: string[];
  industriesServed: string[];
  relatedBlogs: string[];
  relatedCaseStudies: string[];
  semanticKeywords?: string[];
  searchIntent?: "informational" | "navigational" | "commercial" | "transactional";
  pagePurpose?: string;
  /* Enterprise Data Engine fields */
  seo?: import("@/lib/data/types").SEOConfig;
  media?: import("@/lib/data/types").MediaConfig;
  cta?: import("@/lib/data/types").CTAConfig;
  navigation?: import("@/lib/data/types").NavigationConfig;
  content?: import("@/lib/data/types").ContentOverrides;
  /** Centralized image management */
  images?: import("@/lib/data/types").ImageConfig;
}
