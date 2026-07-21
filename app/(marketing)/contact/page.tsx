import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { webPageJsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Badge } from "@/components/ui/badge";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { ContactInfoSection } from "@/components/sections/ContactInfoSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "Contact",
    description: `Get in touch with ${SITE_NAME}. Contact us for a free consultation about your digital marketing, design, or development needs.`,
    path: "/contact",
  });
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageJsonLd({
            name: "Contact KlickChamp",
            description: `Get in touch with ${SITE_NAME} for a free consultation.`,
            url: `${SITE_URL}/contact`,
          })),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd({
            items: [
              { name: "Home", url: "/" },
              { name: "Contact", url: "/contact" },
            ],
          })),
        }}
      />
      <main>
        <Breadcrumbs items={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]} />
        <section className="relative pt-40 pb-10">
          <div className="container-main">
            <Badge className="mb-6">Get in Touch</Badge>
            <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-[-0.03em] leading-[1.05] mb-6">
              Let&apos;s start a <span className="text-gradient-gold">conversation.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Have a project in mind? We respond within 24 hours.
            </p>
          </div>
        </section>
        <ContactInfoSection />
        <ContactFormSection />
      </main>
    </>
  );
}
