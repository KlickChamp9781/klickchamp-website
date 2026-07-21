import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { webPageJsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Badge } from "@/components/ui/badge";
import { CaseStudiesList } from "./CaseStudiesList";

export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "Case Studies",
    description: `Real results from real projects. Explore ${SITE_NAME}'s case studies across industries and services.`,
    path: "/case-studies",
  });
}

export default function CaseStudiesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd({ name: "Case Studies", description: `Case studies by ${SITE_NAME}`, url: `${SITE_URL}/case-studies` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd({ items: [{ name: "Home", url: "/" }, { name: "Case Studies", url: "/case-studies" }] })) }} />
      <section className="relative pt-40 pb-20">
        <div className="container-main">
          <Badge className="mb-6">Case Studies</Badge>
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-[-0.03em] leading-[1.05] mb-6">
            Results that <span className="text-gradient-gold">speak.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Real results from real projects. Explore how we&apos;ve helped brands
            across industries achieve measurable growth.
          </p>
        </div>
      </section>
      <CaseStudiesList />
    </>
  );
}
