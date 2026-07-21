import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { INDUSTRIES, getIndustry } from "@/lib/data/industries";
import { IndustryPageTemplate } from "@/components/templates/IndustryPageTemplate";
import { generateIndustryMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo/jsonld";
import { resolveOgImage } from "@/lib/data/image-utils";
import { SITE_URL } from "@/lib/constants";

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return generateIndustryMetadata(industry.metaTitle, industry.metaDescription, slug, resolveOgImage(industry));
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd({
            items: [
              { name: "Home", url: "/" },
              { name: "Industries", url: "/industries" },
              { name: industry.title, url: `/industries/${slug}` },
            ],
          })),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd({
            questions: [
              { question: `How can digital marketing help my ${industry.title.toLowerCase()} business?`, answer: `Digital marketing helps ${industry.title.toLowerCase()} businesses reach their target audience where they spend the most time — online. From SEO that puts you at the top of search results to targeted ad campaigns that reach the right customers at the right moment, a strategic digital presence builds trust, generates qualified leads, and drives sustainable growth.` },
              { question: `What digital marketing channels work best for ${industry.title.toLowerCase()}?`, answer: `The ideal mix depends on your specific goals, but ${industry.title.toLowerCase()} businesses typically see strong results from SEO, Google Ads, social media marketing, and a conversion-optimized website. We customize the channel mix based on your audience behavior and competitive landscape.` },
              { question: `How long does it take to see results from digital marketing in ${industry.title.toLowerCase()}?`, answer: `Paid campaigns like Google Ads can generate leads within the first week. SEO typically shows meaningful organic traffic improvements within 3 to 6 months. Social media marketing builds momentum over 2 to 4 months.` },
              { question: `How much should a ${industry.title.toLowerCase()} business invest in digital marketing?`, answer: `Investment depends on your growth goals, market competition, and current digital maturity. We provide transparent recommendations based on competitive analysis and expected ROI.` },
              { question: `What makes KlickChamp different for ${industry.title.toLowerCase()} marketing?`, answer: `Unlike generic agencies, we take the time to understand the nuances of the ${industry.title.toLowerCase()} industry. Our data-driven approach combines industry expertise with premium creative execution, delivering campaigns that generate measurable business results.` },
            ],
          })),
        }}
      />
      <IndustryPageTemplate industry={industry} />
    </>
  );
}
