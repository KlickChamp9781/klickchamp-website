import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CASE_STUDIES, getCaseStudy } from "@/lib/data/case-studies";
import { CaseStudyPageTemplate } from "@/components/templates/CaseStudyPageTemplate";
import { generateCaseStudyMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd, articleJsonLd, faqJsonLd } from "@/lib/seo/jsonld";
import { resolveOgImage } from "@/lib/data/image-utils";
import { SITE_URL } from "@/lib/constants";

export function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return generateCaseStudyMetadata(cs.title, cs.overview, slug, resolveOgImage(cs));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd({
            title: cs.title,
            description: cs.overview,
            url: `${SITE_URL}/case-studies/${slug}`,
            datePublished: cs.date || new Date().toISOString().split("T")[0],
          })),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd({
            items: [
              { name: "Home", url: "/" },
              { name: "Case Studies", url: "/case-studies" },
              { name: cs.title, url: `/case-studies/${slug}` },
            ],
          })),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd({
            questions: cs.faqs && cs.faqs.length > 0 ? cs.faqs : [
              { question: "How long does it take to see results from a digital marketing campaign?", answer: "Timeline varies by channel. Paid ads generate results within the first week. SEO shows meaningful improvements within 3 to 6 months." },
              { question: "How do you measure campaign success?", answer: "We track conversions, cost per acquisition, return on ad spend, organic traffic growth, and revenue attribution tied to specific KPIs." },
              { question: "What is the typical budget range?", answer: "Budgets vary based on industry, competition, and objectives. We provide transparent recommendations based on competitive analysis and expected ROI." },
            ],
          })),
        }}
      />
      <CaseStudyPageTemplate caseStudy={cs} />
    </>
  );
}
