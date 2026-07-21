import type { ContentSection } from "@/lib/content/types";
import type { LinkItem } from "@/lib/seo/types";
import type { ServiceHubConfig, SubService } from "@/lib/data/services/types";
import type { Industry } from "@/lib/data/industries";
import type { Location } from "@/lib/data/locations";
import type { BlogPost } from "@/lib/data/blog";
import { BLOG_POSTS, getBlogCategoryTitle } from "@/lib/data/blog";
import type { CaseStudy } from "@/lib/data/case-studies";
import { CASE_STUDIES } from "@/lib/data/case-studies";
import { SITE_NAME } from "@/lib/constants";
import { getServiceBySlug } from "@/lib/data/services/index";
import { resolveImage } from "@/lib/data/image-utils";
import {
  getServiceRelationships,
  getSubServiceRelationships,
  getIndustryRelationships,
  getLocationRelationships,
  getBlogRelationships,
  getCaseStudyRelationships,
} from "./relationships";

/* ------------------------------------------------------------------ */
/*  Default CTA                                                        */
/* ------------------------------------------------------------------ */

const DEFAULT_SERVICE_CTA = {
  heading: "Ready to get started?",
  description: "Let\u2019s discuss how our services can grow your business.",
  button: { label: "Start Your Project", href: "/contact" as const },
};

function serviceCTA(title: string) {
  return {
    heading: `Ready to get started with ${title.toLowerCase()}?`,
    description: `Let\u2019s discuss how our ${title.toLowerCase()} services can grow your business.`,
    button: { label: "Start Your Project", href: "/contact" as const },
  };
}

/* ------------------------------------------------------------------ */
/*  Service page builder                                               */
/* ------------------------------------------------------------------ */

export function buildServiceSections(
  service: ServiceHubConfig,
  subService?: SubService,
): ContentSection[] {
  const isSub = Boolean(subService);
  const sections: ContentSection[] = [];

  const displayTitle = isSub ? subService!.title : service.title;
  const displayProcess = isSub ? subService!.process : service.process;
  const displayFaqs = isSub ? subService!.faqs : service.faqs;
  const displayWhyKlickChamp = isSub ? subService!.whyKlickChamp : service.whyKlickChamp;
  const displayIndustries = isSub ? service.relatedIndustries : service.industriesServed;
  const displayBusinessProblems = isSub ? subService!.businessProblems : (service.businessProblems ?? []);
  const displayBlogs = isSub ? subService!.relatedBlogs : service.relatedBlogs;
  const displayCaseStudies = isSub ? subService!.relatedCaseStudies : service.relatedCaseStudies;

  // Content overrides
  const heroOverride = service.content;
  const ctaOverride = service.cta || (isSub ? subService!.cta : undefined);

  // Hero
  sections.push({
    type: "hero",
    badge: heroOverride?.heroBadge ?? service.title,
    heading: isSub
      ? (heroOverride?.heroHeading ?? `${subService!.title} services `)
      : (heroOverride?.heroHeading ?? `Digital marketing ${service.title} services.`),
    headingGold: isSub ? (heroOverride?.heroHeadingGold ?? `by ${SITE_NAME}.`) : heroOverride?.heroHeadingGold,
    description: heroOverride?.heroDescription ?? (isSub ? subService!.description : service.longDescription),
    ctas: [
      { label: "Get a Free Consultation", href: "/contact" },
      ...(!isSub ? [{ label: "View Case Studies", href: "/case-studies", variant: "outline" as const }] : []),
    ],
  });

  // Introduction — sub-service only
  if (isSub) {
    sections.push({
      type: "rich-text",
      paragraphs: [
        subService!.longDescription,
        `At ${SITE_NAME}, we combine deep industry expertise with a data-driven methodology to deliver ${subService!.title.toLowerCase()} solutions that generate measurable results. Every engagement is tailored to your unique business objectives, ensuring maximum ROI and sustainable growth.`,
      ],
      maxWidth: "default",
    });
  }

  // Business Problems
  if (displayBusinessProblems.length > 0) {
    sections.push({
      type: "problem-cards",
      heading: "Problems we ",
      headingGold: "solve.",
      items: displayBusinessProblems,
    });
  }

  // Features Grid
  if (!isSub && service.features.length > 0) {
    sections.push({
      type: "feature-grid",
      heading: "What we ",
      headingGold: "deliver.",
      items: service.features.map((f) => typeof f === "string" ? { title: f } : { title: f.title, description: f.description }),
    });
  }
  if (isSub && subService!.features && subService!.features.length > 0) {
    sections.push({
      type: "feature-grid",
      heading: "What we ",
      headingGold: "deliver.",
      items: subService!.features.map((f) => ({ title: f.title, description: f.description })),
    });
  }

  // Benefits
  sections.push({
    type: "check-list",
    heading: `Why choose ${SITE_NAME} for ${displayTitle.toLowerCase()}?`,
    items: isSub
      ? subService!.benefits.map((b) => ({ text: b }))
      : service.benefits.map((b) => ({ text: b })),
    variant: isSub ? "check" : "numbered",
    theme: "secondary",
    columns: 2,
  });

  // Why KlickChamp
  const whyItems = heroOverride?.whyKlickChamp ?? displayWhyKlickChamp;
  if (whyItems && whyItems.length > 0) {
    sections.push({
      type: "check-list",
      heading: "Why ",
      headingGold: `${SITE_NAME}?`,
      items: Array.isArray(whyItems) && typeof whyItems[0] === "string"
        ? (whyItems as string[]).map((r) => ({ text: r }))
        : (whyItems as { title: string; description: string }[]).map((r) => ({ title: r.title, description: r.description })),
      variant: "check",
      theme: "default",
      columns: 2,
    });
  }

  // Process
  sections.push({
    type: "process",
    heading: `Our ${displayTitle.toLowerCase()} `,
    headingGold: "process.",
    steps: displayProcess,
  });

  // Deliverables — sub-service only
  if (isSub && subService!.deliverables && subService!.deliverables.length > 0) {
    sections.push({
      type: "check-list",
      heading: "What you\u2019ll ",
      headingGold: "get.",
      items: subService!.deliverables.map((d) => ({ text: d })),
      variant: "check",
      theme: "default",
      columns: 1,
    });
  }

  // Sub-services Grid — parent only
  if (!isSub && service.subServices.length > 0) {
    sections.push({
      type: "sub-service-grid",
      heading: `Our ${service.title.toLowerCase()} `,
      headingGold: "services.",
      items: service.subServices.map((sub) => ({
        title: sub.title,
        href: `/services/${service.slug}/${sub.slug}`,
        description: sub.description,
      })),
      theme: "secondary",
    });
  }

  // Related Services — from relationship engine
  if (!isSub) {
    const rels = getServiceRelationships(service.slug);
    if (rels.relatedServices.length > 0) {
      sections.push({
        type: "link-grid",
        heading: "Related ",
        headingGold: "services.",
        items: rels.relatedServices,
        columns: 3,
        theme: "card",
      });
    }
  }

  // Sibling Sub-Services — sub-service only
  if (isSub) {
    const rels = getSubServiceRelationships(service.slug, subService!.slug);
    if (rels.siblings.length > 0) {
      sections.push({
        type: "link-grid",
        heading: `Other ${service.title} `,
        headingGold: "services.",
        items: rels.siblings.slice(0, 4),
        columns: 4,
        theme: "card",
      });
    }
  }

  // Industries Served
  if (displayIndustries.length > 0) {
    sections.push({
      type: "tag-cloud",
      heading: "Industries we ",
      headingGold: "serve.",
      tags: displayIndustries.map((ind) => ({
        label: ind.replace(/-/g, " "),
        href: `/industries/${ind}`,
      })),
    });
  }

  // Related Blogs
  if (displayBlogs.length > 0) {
    const rels = isSub
      ? getSubServiceRelationships(service.slug, subService!.slug)
      : getServiceRelationships(service.slug);
    const blogLinks = rels.relatedBlogs.length > 0 ? rels.relatedBlogs : displayBlogs.map((slug) => ({ title: slug.replace(/-/g, " "), href: `/blog/${slug}` }));
    sections.push({
      type: "link-grid",
      heading: "Related ",
      headingGold: "articles.",
      items: blogLinks,
      columns: 5,
    });
  }

  // Related Case Studies
  const rels = isSub
    ? getSubServiceRelationships(service.slug, subService!.slug)
    : getServiceRelationships(service.slug);
  const csLinks = rels.relatedCaseStudies.length > 0
    ? rels.relatedCaseStudies
    : displayCaseStudies
        .map((slug) => {
          const c = CASE_STUDIES.find((x) => x.slug === slug);
          if (!c) return null;
          const img = resolveImage(c);
          return { title: c.title, href: `/case-studies/${c.slug}`, description: c.overview.split(".")[0] + ".", image: img?.src };
        })
        .filter(Boolean) as LinkItem[];
  if (csLinks.length > 0) {
    const colCount = csLinks.length < 2 ? 2 : Math.min(csLinks.length, 3);
    sections.push({
      type: "link-grid",
      heading: "Case ",
      headingGold: "studies.",
      items: csLinks,
      columns: colCount as 2 | 3,
    });
  }

  // FAQ
  const faqs = heroOverride?.faqs ?? displayFaqs;
  if (faqs && faqs.length > 0) {
    sections.push({
      type: "faq",
      heading: "Frequently asked ",
      headingGold: "questions.",
      faqs,
    });
  }

  // CTA
  sections.push({
    type: "cta",
    ...(ctaOverride ?? serviceCTA(displayTitle)),
  });

  return sections;
}

/* ------------------------------------------------------------------ */
/*  Industry page builder                                              */
/* ------------------------------------------------------------------ */

const DEFAULT_INDUSTRY_WHY_CHOOSE = [
  { title: "Result-Obsessed", description: "Every strategy we deploy is tied to measurable business outcomes. We do not chase vanity metrics \u2014 we chase revenue, leads, and growth that move your bottom line." },
  { title: "Speed & Precision", description: "We move fast without cutting corners. Our agile workflows mean campaigns launch sooner, optimizations happen daily, and your brand stays ahead of the competition." },
  { title: "Transparent Partnership", description: "No black boxes. You see exactly where your budget goes, how campaigns perform, and what we are doing next. Real-time dashboards and honest reporting built on trust." },
  { title: "Premium Quality", description: "From ad copy to analytics, every deliverable meets an uncompromising standard. We treat your brand as if it were our own \u2014 because your reputation is our reputation." },
];

function generateIndustryFAQs(title: string) {
  return [
    { question: `How can digital marketing help my ${title.toLowerCase()} business?`, answer: `Digital marketing helps ${title.toLowerCase()} businesses reach their target audience where they spend the most time \u2014 online. From SEO that puts you at the top of search results to targeted ad campaigns that reach the right customers at the right moment, a strategic digital presence builds trust, generates qualified leads, and drives sustainable growth in an increasingly competitive landscape.` },
    { question: `What digital marketing channels work best for ${title.toLowerCase()}?`, answer: `The ideal mix depends on your specific goals, but ${title.toLowerCase()} businesses typically see strong results from SEO (to capture high-intent search traffic), Google Ads (for immediate lead generation), social media marketing (for brand building and engagement), and a conversion-optimized website (to turn visitors into customers). We customize the channel mix based on your audience behavior and competitive landscape.` },
    { question: `How long does it take to see results from digital marketing in ${title.toLowerCase()}?`, answer: `Paid campaigns like Google Ads can generate leads within the first week. SEO typically shows meaningful organic traffic improvements within 3 to 6 months. Social media marketing builds momentum over 2 to 4 months. The most successful ${title.toLowerCase()} businesses invest in both short-term paid strategies and long-term organic growth for compounding returns over time.` },
    { question: `How much should a ${title.toLowerCase()} business invest in digital marketing?`, answer: `Investment depends on your growth goals, market competition, and current digital maturity. Most ${title.toLowerCase()} businesses see meaningful results with a monthly budget that covers core SEO, targeted advertising, and content creation. We provide transparent recommendations based on competitive analysis and expected ROI, ensuring every rupee works hard for your business.` },
    { question: `What makes KlickChamp different for ${title.toLowerCase()} marketing?`, answer: `Unlike generic agencies, we take the time to understand the nuances of the ${title.toLowerCase()} industry \u2014 from customer behavior patterns to seasonal trends and competitive dynamics. Our data-driven approach combines industry expertise with premium creative execution, delivering campaigns that do not just look great but generate measurable business results backed by transparent reporting.` },
  ];
}

export function buildIndustrySections(industry: Industry): ContentSection[] {
  const sections: ContentSection[] = [];
  const heroOverride = industry.content;
  const ctaOverride = industry.cta;
  const rels = getIndustryRelationships(industry.slug);

  // 1. Hero
  sections.push({
    type: "hero",
    badge: heroOverride?.heroBadge ?? industry.title,
    heading: heroOverride?.heroHeading ?? "Digital marketing for ",
    headingGold: heroOverride?.heroHeadingGold ?? `${industry.title}.`,
    description: heroOverride?.heroDescription ?? industry.description,
    ctas: [
      { label: "Get a Free Consultation", href: "/contact" },
      { label: "View Case Studies", href: "/case-studies", variant: "outline" },
    ],
  });

  // 2. Industry Stats
  if (industry.stats && industry.stats.length > 0) {
    sections.push({
      type: "stats",
      stats: industry.stats,
      layout: "compact",
    });
  }

  // 3. Industry Overview
  if (industry.longDescription) {
    sections.push({
      type: "rich-text",
      heading: "About ",
      headingGold: `${industry.title} marketing.`,
      paragraphs: [industry.longDescription],
    });
  }

  // 4. Digital Marketing Challenges
  if (industry.challenges && industry.challenges.length > 0) {
    sections.push({
      type: "problem-cards",
      heading: "Digital marketing challenges in ",
      headingGold: `${industry.title.toLowerCase()}.`,
      items: industry.challenges.map((c) => ({
        title: c.split(".")[0],
        description: c,
      })),
    });
  }

  // 5. Business Opportunities
  if (industry.businessOpportunities && industry.businessOpportunities.length > 0) {
    sections.push({
      type: "check-list",
      heading: "Business opportunities through ",
      headingGold: "digital marketing.",
      items: industry.businessOpportunities.map((o) => ({
        title: o.split(":")[0] || o.split(".")[0],
        description: o,
      })),
      variant: "check",
      columns: 2,
    });
  }

  // 6. Recommended Services
  if (rels.relatedServices.length > 0) {
    sections.push({
      type: "link-grid",
      heading: "Recommended ",
      headingGold: "services.",
      items: rels.relatedServices,
      columns: 3,
    });
  }

  // 7. Industry-Specific Solutions
  if (industry.solutions && industry.solutions.length > 0) {
    sections.push({
      type: "feature-grid",
      heading: "Our ",
      headingGold: `${industry.title.toLowerCase()} solutions.`,
      items: industry.solutions.map((s) => ({
        title: s.split(":")[0] || s.split(" - ")[0],
        description: s,
      })),
      theme: "secondary",
    });
  }

  // 8. Customer Journey
  if (industry.customerJourney && industry.customerJourney.length > 0) {
    sections.push({
      type: "process",
      heading: "Typical ",
      headingGold: "customer journey.",
      steps: industry.customerJourney,
    });
  }

  // 9. Marketing Channels
  if (industry.marketingChannels && industry.marketingChannels.length > 0) {
    sections.push({
      type: "feature-grid",
      heading: "Recommended ",
      headingGold: "marketing channels.",
      items: industry.marketingChannels.map((mc) => ({
        title: mc.channel,
        description: mc.description,
      })),
    });
  }

  // 10. Why Choose KlickChamp
  const whyItems = heroOverride?.whyKlickChamp ?? DEFAULT_INDUSTRY_WHY_CHOOSE;
  sections.push({
    type: "check-list",
    heading: "Why choose ",
    headingGold: `${SITE_NAME}?`,
    items: whyItems.map((item) => ({ title: item.title, description: item.description })),
    variant: "check",
    theme: "secondary",
    columns: 2,
  });

  // 11. FAQ
  const faqs = heroOverride?.faqs ?? generateIndustryFAQs(industry.title);
  sections.push({
    type: "faq",
    heading: "Frequently asked ",
    headingGold: "questions.",
    faqs,
  });

  // 12. Related Blogs
  if (industry.relatedBlogs && industry.relatedBlogs.length > 0) {
    const blogLinks = industry.relatedBlogs
      .map((slug) => {
        const post = BLOG_POSTS.find((p) => p.slug === slug);
        if (!post) return null;
        return { title: post.title, href: `/blog/${post.slug}`, description: post.excerpt.split(".")[0] + ".", image: resolveImage(post)?.src };
      })
      .filter(Boolean) as { title: string; href: string; description: string; image?: string }[];
    if (blogLinks.length > 0) {
      sections.push({
        type: "link-grid",
        heading: "Related ",
        headingGold: "articles.",
        items: blogLinks,
        columns: 3,
      });
    }
  }

  // 13. Related Case Studies
  if (industry.relatedCaseStudies && industry.relatedCaseStudies.length > 0) {
    const csLinks = industry.relatedCaseStudies
      .map((slug) => {
        const cs = CASE_STUDIES.find((c) => c.slug === slug);
        if (!cs) return null;
        const img = resolveImage(cs);
        return { title: cs.title, href: `/case-studies/${cs.slug}`, description: cs.overview.split(".")[0] + ".", image: img?.src };
      })
      .filter(Boolean) as { title: string; href: string; description: string; image?: string }[];
    if (csLinks.length > 0) {
      sections.push({
        type: "link-grid",
        heading: "Related ",
        headingGold: "case studies.",
        items: csLinks,
        columns: 2,
      });
    }
  }

  // 14. CTA
  sections.push({
    type: "cta",
    heading: ctaOverride?.heading ?? `${SITE_NAME} \u2014 ${industry.title} digital marketing experts.`,
    description: ctaOverride?.description ?? `Let\u2019s discuss how we can help your ${industry.title.toLowerCase()} business grow.`,
    button: ctaOverride?.button ?? { label: "Start Your Project", href: "/contact" },
  });

  return sections;
}

/* ------------------------------------------------------------------ */
/*  Location page builder                                              */
/* ------------------------------------------------------------------ */

const DEFAULT_LOCATION_BENEFITS = [
  { title: "Local Market Expertise", description: "We understand the unique dynamics of your local market \u2014 from audience behavior and regional trends to the competitive landscape that shapes your customers\u2019 decisions." },
  { title: "Hyper-Local Targeting", description: "Our campaigns are precision-targeted to reach customers in your specific service area, ensuring your marketing budget is spent on the audiences most likely to convert." },
  { title: "Dedicated Local Support", description: "A dedicated account manager who understands your area and can meet face-to-face when needed. We are not a distant agency \u2014 we are your local digital partner." },
  { title: "Google Business Profile Mastery", description: "We optimize your Google Business Profile to dominate the local 3-pack, manage reviews strategically, and ensure customers in your area find you first." },
];

function generateLocationFAQs(loc: Location) {
  return [
    { question: `Why do I need a digital marketing agency in ${loc.title}?`, answer: `A local digital marketing agency understands the unique market dynamics of ${loc.title} \u2014 from local search behavior and seasonal patterns to the competitive landscape specific to ${loc.area}. This local expertise means more targeted campaigns, better ROI, and strategies tailored to how customers in ${loc.title} actually discover and choose businesses like yours.` },
    { question: `How does local SEO help my ${loc.title} business?`, answer: `Local SEO puts your business in front of customers in ${loc.title} who are actively searching for your services right now. When someone nearby searches for what you offer, local SEO ensures your business appears in Google Maps, the local 3-pack, and location-specific search results \u2014 driving foot traffic, phone calls, and website visits from ready-to-buy customers in your area.` },
    { question: `What digital marketing services do you offer in ${loc.title}?`, answer: `We offer the full spectrum of digital marketing services in ${loc.title} including SEO, Google Ads, Meta Ads, website design, social media marketing, Google Business Profile management, WhatsApp marketing, and content creation. Every service is tailored to the local market dynamics and competitive landscape of ${loc.area} and surrounding neighborhoods.` },
    { question: `How quickly can I see results from marketing in ${loc.title}?`, answer: `Paid advertising like Google Ads and Meta Ads can generate leads within the first week of launch. Local SEO typically shows improvements in Google Maps visibility and local search rankings within 2 to 3 months. We focus on quick wins from paid channels while building sustainable organic growth that compounds over time for long-term success in the ${loc.title} market.` },
    { question: `Do you serve businesses near ${loc.title} as well?`, answer: `Absolutely. While we are based in and focused on ${loc.title}, we also serve businesses across ${loc.city} and ${loc.state}. Our digital marketing strategies are designed to capture both hyper-local customers in ${loc.area} and broader audiences across the region, giving you the best of both worlds.` },
  ];
}

export function buildLocationSections(location: Location): ContentSection[] {
  const sections: ContentSection[] = [];
  const heroOverride = location.content;
  const ctaOverride = location.cta;
  const rels = getLocationRelationships(location.slug);

  // Hero
  sections.push({
    type: "hero",
    badge: heroOverride?.heroBadge ?? `${location.area}, ${location.city}`,
    heading: heroOverride?.heroHeading ?? "Digital marketing agency in ",
    headingGold: heroOverride?.heroHeadingGold ?? `${location.title}.`,
    description: heroOverride?.heroDescription ?? location.description,
    ctas: [
      { label: "Get a Free Consultation", href: "/contact" },
      { label: "View Case Studies", href: "/case-studies", variant: "outline" },
    ],
  });

  // Services Available (top 6 from SERVICE_CATEGORIES)
  const { SERVICE_CATEGORIES } = require("@/lib/data/services");
  const topServices = SERVICE_CATEGORIES.slice(0, 6);
  sections.push({
    type: "link-grid",
    heading: "Our services in ",
    headingGold: `${location.title}.`,
    items: topServices.map((s: any) => ({
      title: s.title,
      href: `/services/${s.slug}`,
      description: s.description.split(".")[0] + ".",
    })),
    columns: 3,
  });

  // Why Choose KlickChamp
  const whyItems = heroOverride?.whyKlickChamp ?? DEFAULT_LOCATION_BENEFITS;
  sections.push({
    type: "check-list",
    heading: "Why choose ",
    headingGold: `${SITE_NAME} in ${location.title}?`,
    items: whyItems.map((item) => ({ title: item.title, description: item.description })),
    variant: "check",
    theme: "secondary",
    columns: 2,
  });

  // Nearby Areas
  if (location.nearbyAreas && location.nearbyAreas.length > 0) {
    sections.push({
      type: "tag-cloud",
      heading: `Areas we serve near ${location.title}`,
      tags: location.nearbyAreas.map((area) => ({
        label: area,
        href: `/locations/${location.slug}`,
      })),
      theme: "card",
    });
  }

  // FAQ
  const faqs = heroOverride?.faqs ?? generateLocationFAQs(location);
  sections.push({
    type: "faq",
    heading: "Frequently asked ",
    headingGold: "questions.",
    faqs,
  });

  // CTA
  sections.push({
    type: "cta",
    heading: ctaOverride?.heading ?? `${SITE_NAME} \u2014 Your ${location.title} digital partner.`,
    description: ctaOverride?.description ?? `Ready to grow your business in ${location.title}? Let\u2019s build a digital strategy that delivers real results.`,
    button: ctaOverride?.button ?? { label: "Start Your Project", href: "/contact" },
  });

  return sections;
}

/* ------------------------------------------------------------------ */
/*  Blog page builder                                                  */
/* ------------------------------------------------------------------ */

export function buildBlogSections(post: BlogPost): ContentSection[] {
  const sections: ContentSection[] = [];
  const heroOverride = post.contentOverrides;

  // Hero
  sections.push({
    type: "hero",
    badge: heroOverride?.heroBadge ?? post.category,
    heading: heroOverride?.heroHeading ?? post.title,
    headingGold: heroOverride?.heroHeadingGold,
    description: heroOverride?.heroDescription ?? "",
  });

  // Meta Bar
  const metaItems: { icon: "calendar" | "clock" | "user" | "tag" | "refresh"; text: string }[] = [
    { icon: "calendar", text: new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) },
    { icon: "clock", text: post.readTime },
    { icon: "user", text: `By ${post.author}` },
    { icon: "tag", text: getBlogCategoryTitle(post.category) },
  ];
  if (post.updatedDate) {
    metaItems.push({
      icon: "refresh",
      text: `Updated ${new Date(post.updatedDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}`,
    });
  }
  sections.push({ type: "meta-bar", items: metaItems });

  // Content
  sections.push({
    type: "content-prose",
    content: post.content,
  });

  // Related Services
  const serviceLinks = (post.relatedServices || [])
    .map((slug) => ({ title: getServiceBySlug(slug)?.title || slug, href: `/services/${slug}`, description: getServiceBySlug(slug)?.description?.split(".")[0] + "." || "" }))
    .filter((s) => s.title);
  if (serviceLinks.length > 0) {
    sections.push({
      type: "link-grid",
      heading: "Related ",
      headingGold: "services.",
      items: serviceLinks,
      columns: 3,
    });
  }

  // Tags
  if (post.tags && post.tags.length > 0) {
    sections.push({
      type: "tag-cloud",
      tags: post.tags.map((tag) => ({
        label: tag,
        href: `/blog?tag=${encodeURIComponent(tag)}`,
      })),
    });
  }

  // Related Case Studies
  const csLinks = (post.relatedCaseStudies || [])
    .map((slug) => {
      const cs = CASE_STUDIES.find((c) => c.slug === slug);
      if (!cs) return null;
      const img = resolveImage(cs);
      return { title: cs.title, href: `/case-studies/${cs.slug}`, description: cs.overview.split(".")[0] + ".", image: img?.src };
    })
    .filter(Boolean) as { title: string; href: string; description: string; image?: string }[];
  if (csLinks.length > 0) {
    sections.push({
      type: "link-grid",
      heading: "Related ",
      headingGold: "case studies.",
      items: csLinks,
      columns: 2,
    });
  }

  // Related Posts
  const rels = getBlogRelationships(post.slug);
  if (rels.siblings.length > 0) {
    sections.push({
      type: "link-grid",
      heading: "Related ",
      headingGold: "articles.",
      items: rels.siblings,
      columns: 3,
    });
  }

  return sections;
}

/* ------------------------------------------------------------------ */
/*  Case Study page builder                                            */
/* ------------------------------------------------------------------ */

const GENERIC_CS_FAQS = [
  { question: "How long does it take to see results from a digital marketing campaign?", answer: "Timeline varies by channel and industry. Paid advertising like Google Ads and Meta Ads can generate results within the first week. SEO typically shows meaningful organic improvements within 3 to 6 months. Social media marketing builds momentum over 2 to 4 months. We design strategies that combine quick wins from paid channels with sustainable long-term organic growth." },
  { question: "How do you measure the success of a campaign?", answer: "We track metrics that directly impact your business \u2014 conversions, cost per acquisition, return on ad spend, organic traffic growth, and revenue attribution. Every campaign is tied to specific KPIs agreed upon at the start, and we provide transparent reporting dashboards so you can see real-time performance alongside our strategic analysis and optimization recommendations." },
  { question: "What is the typical budget range for campaigns like these?", answer: "Budgets vary based on your industry, competition level, and growth objectives. We work with businesses across a wide range of budgets and always focus on maximizing ROI regardless of scale. During our strategy phase, we provide transparent budget recommendations based on competitive analysis, keyword costs, and expected returns \u2014 ensuring every rupee is allocated for maximum impact." },
];

export function buildCaseStudySections(cs: CaseStudy): ContentSection[] {
  const sections: ContentSection[] = [];
  const heroOverride = cs.content;
  const ctaOverride = cs.cta;

  // Hero
  sections.push({
    type: "hero",
    badge: heroOverride?.heroBadge ?? cs.industry,
    heading: heroOverride?.heroHeading ?? cs.title,
    headingGold: heroOverride?.heroHeadingGold,
    description: heroOverride?.heroDescription ?? cs.overview,
  });

  // Metrics
  if (cs.metrics.length > 0) {
    sections.push({
      type: "stats",
      stats: cs.metrics,
      layout: "compact",
    });
  }

  // Challenge, Solution, Execution, Results
  sections.push(
    { type: "rich-text", heading: "The Challenge", paragraphs: [cs.challenge], maxWidth: "default" },
    { type: "rich-text", heading: "Our Solution", paragraphs: [cs.solution], maxWidth: "default" },
    { type: "rich-text", heading: "Execution", paragraphs: [cs.execution], maxWidth: "default" },
    { type: "rich-text", heading: "Results", paragraphs: [cs.results], maxWidth: "default" },
  );

  // Client Quote
  if (cs.clientQuote) {
    sections.push({
      type: "testimonial",
      quote: cs.clientQuote.text,
      author: cs.clientQuote.author,
      role: cs.clientQuote.role,
    });
  }

  // FAQ
  const faqs = heroOverride?.faqs ?? (cs.faqs && cs.faqs.length > 0 ? cs.faqs : GENERIC_CS_FAQS);
  sections.push({
    type: "faq",
    heading: "Frequently asked ",
    headingGold: "questions.",
    faqs,
  });

  // Related Services
  if (cs.services && cs.services.length > 0) {
    sections.push({
      type: "link-grid",
      heading: "Services used in this project",
      items: cs.services.map((s) => ({
        title: s.replace(/-/g, " "),
        href: `/services/${s}`,
      })),
      columns: 3,
    });
  }

  // CTA
  sections.push({
    type: "cta",
    heading: ctaOverride?.heading ?? "Want results like this? Let\u2019s talk.",
    description: ctaOverride?.description ?? `Let\u2019s discuss how ${SITE_NAME} can engineer similar outcomes for your business.`,
    button: ctaOverride?.button ?? { label: "Start Your Project", href: "/contact" },
  });

  return sections;
}
