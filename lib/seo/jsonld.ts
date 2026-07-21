import { SITE_NAME, SITE_URL, PHONE, CONTACT_EMAIL, ADDRESS } from "@/lib/constants";

interface OrganizationJsonLd {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
}

export function organizationJsonLd(data?: OrganizationJsonLd) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: data?.name || SITE_NAME,
    url: data?.url || SITE_URL,
    logo: data?.logo || `${SITE_URL}/logo.png`,
    description: data?.description || "Premium Digital Marketing Agency in Kolkata",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kolkata",
      addressLocality: "Kolkata",
      addressRegion: "West Bengal",
      postalCode: "700029",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE,
      contactType: "customer service",
      email: CONTACT_EMAIL,
    },
    sameAs: [
      "https://www.facebook.com/klickchamp",
      "https://www.instagram.com/klickchamp",
      "https://www.linkedin.com/company/klickchamp",
    ],
  };
}

interface ServiceJsonLd {
  name: string;
  description: string;
  url: string;
}

export function serviceJsonLd(data: ServiceJsonLd) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.name,
    description: data.description,
    url: data.url,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "City",
      name: "Kolkata",
    },
  };
}

interface LocalBusinessJsonLd {
  name?: string;
  description?: string;
  url?: string;
}

export function localBusinessJsonLd(data?: LocalBusinessJsonLd) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: data?.name || SITE_NAME,
    description: data?.description || "Premium Digital Marketing Agency in Kolkata",
    url: data?.url || SITE_URL,
    telephone: PHONE,
    email: CONTACT_EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kolkata",
      addressLocality: "Kolkata",
      addressRegion: "West Bengal",
      postalCode: "700029",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 22.5726,
      longitude: 88.3639,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
  };
}

interface BreadcrumbJsonLd {
  items: { name: string; url: string }[];
}

export function breadcrumbJsonLd(data: BreadcrumbJsonLd) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: data.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

interface FAQJsonLd {
  questions: { question: string; answer: string }[];
}

export function faqJsonLd(data: FAQJsonLd) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}

interface ArticleJsonLd {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  authorUrl?: string;
  image?: string;
}

export function articleJsonLd(data: ArticleJsonLd) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    description: data.description,
    url: data.url,
    datePublished: data.datePublished,
    dateModified: data.dateModified || data.datePublished,
    author: data.author
      ? {
          "@type": "Person",
          name: data.author,
          ...(data.authorUrl ? { url: data.authorUrl } : {}),
          sameAs: data.authorUrl ? [data.authorUrl] : [],
        }
      : {
          "@type": "Organization",
          name: SITE_NAME,
        },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    image: data.image || `${SITE_URL}/og-image.png`,
  };
}

interface VideoObjectJsonLd {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string;
  embedUrl?: string;
  contentUrl?: string;
}

export function videoObjectJsonLd(data: VideoObjectJsonLd) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: data.name,
    description: data.description,
    thumbnailUrl: data.thumbnailUrl,
    uploadDate: data.uploadDate,
    ...(data.duration && { duration: data.duration }),
    ...(data.embedUrl && { embedUrl: data.embedUrl }),
    ...(data.contentUrl && { contentUrl: data.contentUrl }),
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
  };
}

interface WebPageJsonLd {
  name: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}

export function webPageJsonLd(data: WebPageJsonLd) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: data.name,
    description: data.description,
    url: data.url,
    ...(data.datePublished && { datePublished: data.datePublished }),
    ...(data.dateModified && { dateModified: data.dateModified }),
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
  };
}

interface PersonJsonLd {
  name: string;
  jobTitle?: string;
  description?: string;
  url?: string;
  sameAs?: string[];
  image?: string;
}

export function personJsonLd(data: PersonJsonLd) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: data.name,
    ...(data.jobTitle && { jobTitle: data.jobTitle }),
    ...(data.description && { description: data.description }),
    ...(data.url && { url: data.url }),
    ...(data.sameAs && data.sameAs.length > 0 && { sameAs: data.sameAs }),
    ...(data.image && { image: data.image }),
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: "Premium Digital Marketing Agency in Kolkata",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}
