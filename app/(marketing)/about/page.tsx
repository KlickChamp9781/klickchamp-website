import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { webPageJsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { Story } from "@/components/sections/about/Story";
import { MissionVision } from "@/components/sections/about/MissionVision";
import { Values } from "@/components/sections/about/Values";
import { Process } from "@/components/sections/about/Process";
import { IndustriesServed } from "@/components/sections/about/IndustriesServed";
import { Timeline } from "@/components/sections/about/Timeline";
import { WhyKlickChamp } from "@/components/sections/about/WhyKlickChamp";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "About Us",
    description: `Learn about ${SITE_NAME} — our story, mission, vision, and the team behind Kolkata's premium digital marketing agency.`,
    path: "/about",
  });
}

export default function AboutPage() {
  const webPageSchema = webPageJsonLd({
    name: "About KlickChamp",
    description: `Learn about ${SITE_NAME} — our story, mission, vision, and the team behind Kolkata's premium digital marketing agency.`,
    url: `${SITE_URL}/about`,
  });

  const breadcrumbSchema = breadcrumbJsonLd({
    items: [
      { name: "Home", url: "/" },
      { name: "About", url: "/about" },
    ],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main>
        <Breadcrumbs items={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]} />
        <AboutHero />
        <TrustSignals />
        <Story />
        <MissionVision />
        <Values />
        <Process />
        <IndustriesServed />
        <Timeline />
        <WhyKlickChamp />
        <ContactCTA />
      </main>
    </>
  );
}
