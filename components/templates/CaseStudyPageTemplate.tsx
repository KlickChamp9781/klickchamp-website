"use client";

import type { CaseStudy } from "@/lib/data/case-studies";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContentRenderer } from "@/components/content/ContentRenderer";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { resolveImage } from "@/lib/data/image-utils";
import { buildCaseStudySections } from "@/lib/data/content-builders";

interface CaseStudyPageTemplateProps {
  caseStudy: CaseStudy;
}

export function CaseStudyPageTemplate({ caseStudy }: CaseStudyPageTemplateProps) {
  const sections = buildCaseStudySections(caseStudy);
  const img = resolveImage(caseStudy);

  return (
    <>
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Case Studies", href: "/case-studies" },
        { label: caseStudy.title, href: `/case-studies/${caseStudy.slug}` },
      ]} />
      {img && (
        <div className="container-main mb-12">
          <div className="max-w-960 mx-auto">
            <OptimizedImage
              src={img.src}
              alt={img.alt || caseStudy.title}
              className="w-full aspect-[16/9] object-cover rounded-lg shadow-md"
              priority
              width={1200}
              height={675}
            />
          </div>
        </div>
      )}
      <ContentRenderer sections={sections} />
    </>
  );
}
