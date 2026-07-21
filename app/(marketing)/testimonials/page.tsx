import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { webPageJsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Badge } from "@/components/ui/badge";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { TestimonialsGrid } from "@/components/sections/TestimonialsGrid";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "Testimonials",
    description: `Read what our clients say about ${SITE_NAME}. Real testimonials from brands we've helped transform through digital marketing.`,
    path: "/testimonials",
  });
}

export default function TestimonialsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageJsonLd({
            name: "Testimonials",
            description: `What our clients say about ${SITE_NAME}.`,
            url: `${SITE_URL}/testimonials`,
          })),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd({
            items: [
              { name: "Home", url: "/" },
              { name: "Testimonials", url: "/testimonials" },
            ],
          })),
        }}
      />
      <main>
        <Breadcrumbs items={[
          { label: "Home", href: "/" },
          { label: "Testimonials", href: "/testimonials" },
        ]} />
        <section className="relative pt-40 pb-20">
          <div className="container-main">
            <Badge className="mb-6">Testimonials</Badge>
            <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-[-0.03em] leading-[1.05] mb-6">
              What our clients <span className="text-gradient-gold">say.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Real stories from real brands. Discover why businesses trust
              KlickChamp to engineer their digital success.
            </p>
          </div>
        </section>
        <TestimonialsGrid />
        <ContactCTA />
      </main>
    </>
  );
}
