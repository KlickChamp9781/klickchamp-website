import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { faqJsonLd } from "@/lib/seo/jsonld";
import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { Industries } from "@/components/sections/Industries";
import { Process } from "@/components/sections/Process";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { FAQ } from "@/components/sections/FAQ";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { ContactCTA } from "@/components/sections/ContactCTA";

export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "Home",
    description: "KlickChamp is a premium digital marketing agency in Kolkata offering SEO services, Google Ads management, social media marketing, web design, graphic design, video editing, and WhatsApp marketing to businesses across India.",
    path: "/",
  });
}

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd({
            questions: [
              { question: "What makes KlickChamp different from other digital marketing agencies in Kolkata?", answer: "We combine engineering precision with creative excellence. Every strategy is data-driven, every design is portfolio-quality, and every campaign is optimized for measurable ROI." },
              { question: "How much does digital marketing cost in Kolkata?", answer: "We offer customized pricing based on your specific needs, goals, and scope of work — from affordable packages for small businesses to comprehensive strategies for enterprises." },
              { question: "How long does it take to see SEO results?", answer: "SEO typically takes 3-6 months to show significant results, while Google Ads and social media campaigns can drive traffic within days." },
              { question: "Do you work with small businesses and startups?", answer: "Absolutely. We work with businesses of all sizes in Kolkata and across India, from ambitious startups to established enterprises." },
              { question: "What digital marketing services does KlickChamp offer?", answer: "We offer a complete range including SEO, Google Ads, Meta Ads, social media marketing, website design, graphic design, video editing, email marketing, WhatsApp marketing, YouTube optimization, and Google Business Profile management." },
              { question: "Can I see reports on campaign performance?", answer: "Yes. We provide comprehensive monthly reports with detailed analytics, insights, and recommendations covering every metric." },
            ],
          })),
        }}
      />
      <Hero />
      <ServicesOverview />
      <Industries />
      <Process />
      <WhyChooseUs />
      <BlogPreview />
      <FAQ />
      <ContactFormSection />
      <ContactCTA />
    </main>
  );
}
