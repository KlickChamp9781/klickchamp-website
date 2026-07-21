import { Heading } from "@/components/content/Heading";
import { SectionWrapper } from "@/components/content/SectionWrapper";
import { Container } from "@/components/content/Container";
import type { RichTextSection } from "@/lib/content/types";

export function RichText({ heading, headingGold, paragraphs, maxWidth = "default" }: RichTextSection) {
  const containerMax = maxWidth === "full" ? "default" : "3xl";
  return (
    <SectionWrapper bordered>
      <Container maxWidth={containerMax}>
        {heading && <Heading gold={headingGold}>{heading}</Heading>}
        {paragraphs.map((p, i) => (
          <p key={i} className="text-lg text-muted-foreground leading-relaxed mb-6 last:mb-0">
            {p}
          </p>
        ))}
      </Container>
    </SectionWrapper>
  );
}
