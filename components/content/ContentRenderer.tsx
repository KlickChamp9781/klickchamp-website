import type { ContentSection } from "@/lib/content/types";
import { Hero } from "./sections/Hero";
import { CheckList } from "./sections/CheckList";
import { ProblemCards } from "./sections/ProblemCards";
import { FeatureGrid } from "./sections/FeatureGrid";
import { ProcessSteps } from "./sections/ProcessSteps";
import { StatsBar } from "./sections/StatsBar";
import { FAQSection } from "./sections/FAQ";
import { CTA } from "./sections/CTA";
import { LinkGrid } from "./sections/LinkGrid";
import { TagCloud } from "./sections/TagCloud";
import { Testimonial } from "./sections/Testimonial";
import { SubServiceGrid } from "./sections/SubServiceGrid";
import { ContentProse } from "./sections/ContentProse";
import { MetaBar } from "./sections/MetaBar";
import { RichText } from "./sections/RichText";

interface ContentRendererProps {
  sections: ContentSection[];
}

const sectionMap: Record<ContentSection["type"], React.ComponentType<any>> = {
  "hero": Hero,
  "rich-text": RichText,
  "check-list": CheckList,
  "problem-cards": ProblemCards,
  "feature-grid": FeatureGrid,
  "process": ProcessSteps,
  "stats": StatsBar,
  "faq": FAQSection,
  "cta": CTA,
  "link-grid": LinkGrid,
  "tag-cloud": TagCloud,
  "testimonial": Testimonial,
  "sub-service-grid": SubServiceGrid,
  "content-prose": ContentProse,
  "meta-bar": MetaBar,
  "spacer": () => null,
};

export function ContentRenderer({ sections }: ContentRendererProps) {
  return (
    <>
      {sections.map((section, i) => {
        const Component = sectionMap[section.type];
        if (!Component) return null;
        return <Component key={i} {...section} />;
      })}
    </>
  );
}
