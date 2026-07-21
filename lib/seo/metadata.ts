import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

interface PageMetadata {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  noindex?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  path,
  image = "/og-image.png",
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  noindex = false,
}: PageMetadata): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_IN",
      type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(authors && { authors: authors.map((a) => ({ name: a })) }),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [ogImage],
      creator: "@klickchamp",
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function generateServiceMetadata(
  serviceTitle: string,
  serviceDescription: string,
  serviceSlug: string,
  image?: string
): Metadata {
  return generatePageMetadata({
    title: serviceTitle,
    description: serviceDescription,
    path: `/services/${serviceSlug}`,
    image,
  });
}

export function generateIndustryMetadata(
  industryTitle: string,
  industryDescription: string,
  industrySlug: string,
  image?: string
): Metadata {
  return generatePageMetadata({
    title: industryTitle,
    description: industryDescription,
    path: `/industries/${industrySlug}`,
    image,
  });
}

export function generateLocationMetadata(
  locationTitle: string,
  locationDescription: string,
  locationSlug: string,
  image?: string
): Metadata {
  return generatePageMetadata({
    title: locationTitle,
    description: locationDescription,
    path: `/locations/${locationSlug}`,
    image,
  });
}

export function generateBlogMetadata(
  title: string,
  description: string,
  slug: string,
  publishedTime: string,
  modifiedTime?: string,
  image?: string
): Metadata {
  return generatePageMetadata({
    title,
    description,
    path: `/blog/${slug}`,
    type: "article",
    publishedTime,
    modifiedTime,
    authors: ["KlickChamp Team"],
    image,
  });
}

export function generateCaseStudyMetadata(
  title: string,
  description: string,
  slug: string,
  image?: string
): Metadata {
  return generatePageMetadata({
    title,
    description,
    path: `/case-studies/${slug}`,
    type: "article",
    image,
  });
}
