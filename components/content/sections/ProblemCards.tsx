import { Heading } from "@/components/content/Heading";
import { SectionWrapper } from "@/components/content/SectionWrapper";
import { Container } from "@/components/content/Container";
import type { ProblemCardsSection } from "@/lib/content/types";

export function ProblemCards({ heading, headingGold, items }: ProblemCardsSection) {
  return (
    <SectionWrapper bordered>
      <Container>
        <Heading gold={headingGold}>{heading}</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <span className="text-4xl font-bold text-foreground/15 shrink-0 w-12 text-right">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-[#4B5563] leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
