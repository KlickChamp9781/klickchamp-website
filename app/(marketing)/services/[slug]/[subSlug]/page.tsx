import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, getSubServiceBySlug, SERVICE_CATEGORIES } from "@/lib/data/services";
import { ServiceHubTemplate } from "@/components/templates/ServiceHubTemplate";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { serviceJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo/jsonld";
import { SITE_URL } from "@/lib/constants";

export function generateStaticParams() {
  const params: { slug: string; subSlug: string }[] = [];
  SERVICE_CATEGORIES.forEach((service) => {
    service.subServices.forEach((sub) => {
      params.push({ slug: service.slug, subSlug: sub.slug });
    });
  });
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; subSlug: string }> }): Promise<Metadata> {
  const { slug, subSlug } = await params;
  const result = getSubServiceBySlug(slug, subSlug);
  if (!result) return {};
  return generatePageMetadata({
    title: result.subService.metaTitle || result.subService.title,
    description: result.subService.metaDescription || result.subService.description,
    path: `/services/${slug}/${subSlug}`,
  });
}

export default async function SubServicePage({ params }: { params: Promise<{ slug: string; subSlug: string }> }) {
  const { slug, subSlug } = await params;
  const service = getServiceBySlug(slug);
  const result = getSubServiceBySlug(slug, subSlug);
  if (!service || !result) notFound();
  const { subService } = result;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd({
            name: `${subService.title} by KlickChamp`,
            description: subService.description,
            url: `${SITE_URL}/services/${slug}/${subSlug}`,
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
              { name: subService.title, url: `/services/${slug}/${subSlug}` },
            ],
          })),
        }}
      />
      {subService.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd({ questions: subService.faqs })),
          }}
        />
      )}
      <ServiceHubTemplate service={service} subService={subService} />
    </>
  );
}
