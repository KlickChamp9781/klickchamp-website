import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { webPageJsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Badge } from "@/components/ui/badge";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "Team",
    description: `Meet the team behind ${SITE_NAME} — strategists, designers, developers, and marketers dedicated to engineering digital excellence.`,
    path: "/team",
  });
}

export default function TeamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageJsonLd({
            name: "Our Team",
            description: `Meet the team behind ${SITE_NAME}.`,
            url: `${SITE_URL}/team`,
          })),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd({
            items: [
              { name: "Home", url: "/" },
              { name: "Team", url: "/team" },
            ],
          })),
        }}
      />
      <main>
        <Breadcrumbs items={[
          { label: "Home", href: "/" },
          { label: "Team", href: "/team" },
        ]} />
        <section className="relative pt-40 pb-20">
          <div className="container-main">
            <Badge className="mb-6">Our Team</Badge>
            <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-[-0.03em] leading-[1.05] mb-6">
              The minds behind
              <br />
              <span className="text-gradient-gold">KlickChamp.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              A team of specialists united by a shared obsession with quality
              and a relentless drive for results.
            </p>
          </div>
        </section>
        <TeamGrid />
        <ContactCTA />
      </main>
    </>
  );
}
