import type { Metadata } from "next";
import { SITE_CONFIG } from "@/constants/site";
import type { SEO } from "@/types";

type GenerateMetadataProps = {
  seo: SEO;
  path?: string;
};

export function generateMetadata({ seo, path = "" }: GenerateMetadataProps): Metadata {
  const url = `${SITE_CONFIG.url}${seo.canonical || path}`;
  const title = seo.title.includes("KlickChamp")
    ? seo.title
    : `${seo.title} | KlickChamp`;

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: url,
    },
    robots: seo.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description: seo.description,
      url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: seo.ogImage || "/images/og-default.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: seo.description,
      images: [seo.ogImage || "/images/og-default.jpg"],
    },
  };
}
