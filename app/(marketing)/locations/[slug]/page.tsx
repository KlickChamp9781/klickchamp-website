import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCATIONS, getLocation } from "@/lib/data/locations";
import { LocationPageTemplate } from "@/components/templates/LocationPageTemplate";
import { generateLocationMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd, localBusinessJsonLd, faqJsonLd } from "@/lib/seo/jsonld";
import { resolveOgImage } from "@/lib/data/image-utils";
import { SITE_URL } from "@/lib/constants";

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};
  return generateLocationMetadata(location.metaTitle, location.metaDescription, slug, resolveOgImage(location));
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd({
            name: `KlickChamp - ${location.title}`,
            description: location.description,
          })),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd({
            items: [
              { name: "Home", url: "/" },
              { name: "Locations", url: "/locations" },
              { name: location.title, url: `/locations/${slug}` },
            ],
          })),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd({
            questions: [
              { question: `Why do I need a digital marketing agency in ${location.title}?`, answer: `A local digital marketing agency understands the unique market dynamics of ${location.title} — from local search behavior to the competitive landscape specific to ${location.area}. This means more targeted campaigns and better ROI.` },
              { question: `How does local SEO help my ${location.title} business?`, answer: `Local SEO puts your business in front of customers in ${location.title} who are actively searching for your services right now. It ensures your business appears in Google Maps, the local 3-pack, and location-specific search results.` },
              { question: `What digital marketing services do you offer in ${location.title}?`, answer: `We offer the full spectrum of digital marketing services in ${location.title} including SEO, Google Ads, Meta Ads, website design, social media marketing, Google Business Profile management, and WhatsApp marketing.` },
              { question: `How quickly can I see results from marketing in ${location.title}?`, answer: `Paid advertising can generate leads within the first week. Local SEO typically shows improvements in Google Maps visibility within 2 to 3 months. We focus on quick wins while building sustainable organic growth.` },
              { question: `Do you serve businesses near ${location.title} as well?`, answer: `Absolutely. While we focus on ${location.title}, we also serve businesses across ${location.city} and ${location.state}. Our strategies capture both hyper-local customers and broader regional audiences.` },
            ],
          })),
        }}
      />
      <LocationPageTemplate location={location} />
    </>
  );
}
