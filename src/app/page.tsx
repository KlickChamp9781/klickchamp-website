import type { Metadata } from "next";
import {
  Hero,
  ServicesPreview,
  WhyChooseUs,
  Process,
  CaseStudies,
  Testimonials,
  FAQSection,
  FinalCTA,
} from "@/components/sections/home";
import { Stats } from "@/components/sections/Stats";
import { HOME_STATS } from "@/constants/home";

export const metadata: Metadata = {
  title: "Home",
  description:
    "KlickChamp is Kolkata's premium digital marketing agency. We craft data-driven strategies that deliver measurable growth — SEO, Ads, Social Media, Web Design & more.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "KlickChamp - Premium Digital Marketing Agency | Kolkata",
    description:
      "Premium digital marketing agency delivering measurable growth. SEO, Ads, Social Media, Web Design & more.",
    url: "https://klickchamp.com",
  },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Stats stats={HOME_STATS} className="border-y border-kc-white/5" />
      <ServicesPreview />
      <WhyChooseUs />
      <Process />
      <CaseStudies />
      <Testimonials />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}
