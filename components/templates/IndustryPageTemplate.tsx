"use client";

import type { Industry } from "@/lib/data/industries";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContentRenderer } from "@/components/content/ContentRenderer";
import { buildIndustrySections } from "@/lib/data/content-builders";

interface IndustryPageTemplateProps {
  industry: Industry;
}

export function IndustryPageTemplate({ industry }: IndustryPageTemplateProps) {
  const sections = buildIndustrySections(industry);

  return (
    <>
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: industry.title, href: `/industries/${industry.slug}` },
      ]} />
      <ContentRenderer sections={sections} />
    </>
  );
}
