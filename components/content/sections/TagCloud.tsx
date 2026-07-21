import Link from "next/link";
import { Heading } from "@/components/content/Heading";
import { SectionWrapper } from "@/components/content/SectionWrapper";
import { Container } from "@/components/content/Container";
import type { TagCloudSection } from "@/lib/content/types";

export function TagCloud({ heading, headingGold, tags, theme = "default" }: TagCloudSection) {
  return (
    <SectionWrapper theme={theme} bordered>
      <Container>
        {heading && <Heading gold={headingGold}>{heading}</Heading>}
        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <Link
              key={tag.href}
              href={tag.href}
              className="px-5 py-3 border border-border text-sm font-medium uppercase tracking-[0.1em] hover:border-primary hover:text-primary transition-colors"
            >
              {tag.label}
            </Link>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
