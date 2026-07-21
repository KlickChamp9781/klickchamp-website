import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { webPageJsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Badge } from "@/components/ui/badge";
import { IndustriesList } from "./IndustriesList";

export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "Industries We Serve",
    description: `Digital marketing solutions tailored for every industry. ${SITE_NAME} serves healthcare, real estate, education, e-commerce, and more.`,
    path: "/industries",
  });
}

export default function IndustriesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd({ name: "Industries We Serve", description: `Digital marketing solutions tailored for every industry by ${SITE_NAME}`, url: `${SITE_URL}/industries` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd({ items: [{ name: "Home", url: "/" }, { name: "Industries", url: "/industries" }] })) }} />
      <section className="relative pt-40 pb-20">
        <div className="container-main">
          <Badge className="mb-6">Industries</Badge>
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-[-0.03em] leading-[1.05] mb-6">
            Industries we <span className="text-gradient-gold">serve.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Deep domain expertise across sectors, delivering tailored strategies
            that drive growth in every vertical.
          </p>
        </div>
      </section>
      <IndustriesList />
    </>
  );
}
