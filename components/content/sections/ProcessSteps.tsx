import { Heading } from "@/components/content/Heading";
import { SectionWrapper } from "@/components/content/SectionWrapper";
import { Container } from "@/components/content/Container";
import type { ProcessSection } from "@/lib/content/types";

export function ProcessSteps({ heading, headingGold, steps }: ProcessSection) {
  return (
    <SectionWrapper bordered>
      <Container>
        <Heading gold={headingGold}>{heading}</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {steps.map((step) => (
            <div key={step.step} className="group bg-[#F1EBDE] p-8 transition-all duration-200 hover:-translate-y-0.5 hover:bg-foreground hover:ring-1 hover:ring-primary hover:shadow-sm">
              <div className="text-4xl font-bold text-foreground/15 group-hover:text-primary mb-4">
                {String(step.step).padStart(2, "0")}
              </div>
              <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-200">{step.title}</h3>
              <p className="text-sm text-[#4B5563] group-hover:text-[#E7E2D6] leading-relaxed transition-colors duration-200">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
