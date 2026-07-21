import { Heading } from "@/components/content/Heading";
import { SectionWrapper } from "@/components/content/SectionWrapper";
import { Container } from "@/components/content/Container";
import type { StatsSection } from "@/lib/content/types";

export function StatsBar({ heading, headingGold, stats, layout = "compact" }: StatsSection) {
  return (
    <SectionWrapper
      bordered={layout === "compact"}
      padding={layout === "compact" ? "compact" : "section"}
    >
      <Container>
        {heading && <Heading gold={headingGold}>{heading}</Heading>}
        <div className={`grid grid-cols-2 ${stats.length >= 4 ? "md:grid-cols-4" : `md:grid-cols-${stats.length}`} gap-8`}>
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
