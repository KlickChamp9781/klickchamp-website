import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { webPageJsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Badge } from "@/components/ui/badge";
import { LocationsList } from "./LocationsList";

export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "Locations We Serve",
    description: `${SITE_NAME} provides digital marketing services across Kolkata and surrounding areas. Find us in your area.`,
    path: "/locations",
  });
}

export default function LocationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd({ name: "Locations We Serve", description: `Digital marketing services across Kolkata by ${SITE_NAME}`, url: `${SITE_URL}/locations` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd({ items: [{ name: "Home", url: "/" }, { name: "Locations", url: "/locations" }] })) }} />
      <section className="relative pt-40 pb-20">
        <div className="container-main">
          <Badge className="mb-6">Locations</Badge>
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-[-0.03em] leading-[1.05] mb-6">
            Serving <span className="text-gradient-gold">Kolkata & beyond.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Digital marketing services across Kolkata and surrounding areas.
            Find us wherever your business operates.
          </p>
        </div>
      </section>
      <LocationsList />
    </>
  );
}
