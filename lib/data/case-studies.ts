export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  services: string[];
  thumbnail: string;
  overview: string;
  challenge: string;
  solution: string;
  execution: string;
  results: string;
  metrics: { label: string; value: string }[];
  clientQuote?: { text: string; author: string; role: string };
  faqs?: { question: string; answer: string }[];
  isPlaceholder?: boolean;
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
  /** Publication date for structured data */
  date?: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "retailpro-ecommerce-growth",
    title: "RetailPro: 340% Increase in E-commerce Conversions",
    client: "RetailPro",
    industry: "e-commerce",
    services: ["website-design", "seo", "google-ads"],
    thumbnail: "/images/case-studies/retailpro.jpg",
    overview: "RetailPro, a growing e-commerce brand, needed to overhaul their digital presence to compete with larger players in the market.",
    challenge: "The client had an outdated website with poor mobile experience, low organic visibility, and inefficient ad spend resulting in a high cost per acquisition.",
    solution: "We redesigned their website with a mobile-first approach, implemented a comprehensive SEO strategy, and launched targeted Google Ads campaigns with optimized landing pages.",
    execution: "Phase 1: Complete website redesign with performance optimization. Phase 2: Technical SEO audit and implementation. Phase 3: Google Ads campaign restructuring with AI-powered bidding.",
    results: "Within 6 months, RetailPro saw a 340% increase in conversions, 180% increase in organic traffic, and 60% reduction in cost per acquisition.",
    metrics: [
      { label: "Conversion Increase", value: "340%" },
      { label: "Organic Traffic Growth", value: "180%" },
      { label: "Cost Per Acquisition Reduction", value: "60%" },
      { label: "Revenue Growth", value: "220%" },
    ],
    clientQuote: {
      text: "KlickChamp didn't just build us a website — they built us a revenue engine. The results speak for themselves.",
      author: "Rahul Sharma",
      role: "CEO, RetailPro",
    },
    date: "2025-11-15",
    isPlaceholder: true,
  },
  {
    slug: "healthfirst-patient-acquisition",
    title: "HealthFirst: 5x Patient Bookings in 90 Days",
    client: "HealthFirst Clinics",
    industry: "healthcare",
    services: ["google-ads", "seo", "google-business"],
    thumbnail: "/images/case-studies/healthfirst.jpg",
    overview: "HealthFirst Clinics wanted to increase patient bookings and establish a strong online presence in a competitive healthcare market.",
    challenge: "Low visibility in local search, outdated Google Business Profile, and no structured approach to online patient acquisition.",
    solution: "We implemented a multi-channel strategy combining local SEO, Google Ads for healthcare, and Google Business Profile optimization.",
    execution: "Phase 1: Complete Google Business Profile overhaul. Phase 2: Local SEO with 50+ directory listings. Phase 3: Google Ads with healthcare-compliant landing pages.",
    results: "Patient bookings increased 5x within 90 days, with a 40% reduction in cost per booking and significant improvement in local search rankings.",
    metrics: [
      { label: "Patient Bookings", value: "5x" },
      { label: "Cost Per Booking Reduction", value: "40%" },
      { label: "Local Search Rankings", value: "Top 3" },
      { label: "Google Reviews", value: "4.8★" },
    ],
    date: "2026-02-20",
    isPlaceholder: true,
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug);
}

export function getCaseStudiesByIndustry(industry: string): CaseStudy[] {
  return CASE_STUDIES.filter((cs) => cs.industry === industry);
}

export function getCaseStudiesByService(service: string): CaseStudy[] {
  return CASE_STUDIES.filter((cs) => cs.services.includes(service));
}
