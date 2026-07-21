import { Check } from "lucide-react";
import { Heading } from "@/components/content/Heading";
import { SectionWrapper } from "@/components/content/SectionWrapper";
import { Container } from "@/components/content/Container";
import type { FeatureGridSection } from "@/lib/content/types";

export function FeatureGrid({ heading, headingGold, items, theme = "default" }: FeatureGridSection) {
  return (
    <SectionWrapper theme={theme} bordered={theme === "default"}>
      <Container>
        <Heading gold={headingGold}>{heading}</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {items.map((item) => (
            <div key={item.title} className="bg-[#F1EBDE] p-6 sm:p-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 border border-foreground/40 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-3 w-3 text-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{item.title}</h3>
                  {item.description && (
                    <p className="text-sm text-[#4B5563] leading-relaxed">{item.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
