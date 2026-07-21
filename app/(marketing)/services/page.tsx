import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { webPageJsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Badge } from "@/components/ui/badge";
import { ServicesList } from "./ServicesList";

export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "Services",
    description: `${SITE_NAME} offers comprehensive digital marketing services — SEO, Google Ads, Meta Ads, Website Design, Graphic Design, Video Editing, and more.`,
    path: "/services",
  });
}

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd({ name: "Services", description: `Digital marketing services by ${SITE_NAME}`, url: `${SITE_URL}/services` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd({ items: [{ name: "Home", url: "/" }, { name: "Services", url: "/services" }] })) }} />
      <section className="relative pt-40 pb-20">
        <div className="container-main">
          <Badge className="mb-6">Our Services</Badge>
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-[-0.03em] leading-[1.05] mb-6">
            Services built for <span className="text-gradient-gold">measurable impact.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Comprehensive digital solutions engineered to transform your brand
            presence and drive measurable business growth.
          </p>
        </div>
      </section>
      <ServicesList />
    </>
  );
}
