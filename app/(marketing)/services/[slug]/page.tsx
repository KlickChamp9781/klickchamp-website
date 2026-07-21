import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, SERVICE_CATEGORIES } from "@/lib/data/services";
import { ServiceHubTemplate } from "@/components/templates/ServiceHubTemplate";
import { generateServiceMetadata } from "@/lib/seo/metadata";
import { serviceJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo/jsonld";
import { resolveOgImage } from "@/lib/data/image-utils";
import { SITE_URL } from "@/lib/constants";

export function generateStaticParams() {
  return SERVICE_CATEGORIES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return generateServiceMetadata(service.metaTitle || service.title, service.metaDescription || service.description, slug, resolveOgImage(service));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd({
            name: `${service.title} Services by KlickChamp`,
            description: service.description,
            url: `${SITE_URL}/services/${slug}`,
          })),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd({
            items: [
              { name: "Home", url: "/" },
              { name: "Services", url: "/services" },
              { name: service.title, url: `/services/${slug}` },
            ],
          })),
        }}
      />
      {service.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd({ questions: service.faqs })),
          }}
        />
      )}
      <ServiceHubTemplate service={service} />
    </>
  );
}
