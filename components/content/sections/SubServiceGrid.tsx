import Link from "next/link";
import { Heading } from "@/components/content/Heading";
import { SectionWrapper } from "@/components/content/SectionWrapper";
import { Container } from "@/components/content/Container";
import type { SubServiceGridSection } from "@/lib/content/types";

export function SubServiceGrid({ heading, headingGold, items, theme = "default" }: SubServiceGridSection) {
  return (
    <SectionWrapper theme={theme} bordered={theme === "secondary"}>
      <Container>
        <Heading gold={headingGold}>{heading}</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block bg-[#F1EBDE] p-8"
            >
              <h3 className="text-lg font-bold mb-2 text-foreground">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              )}
            </Link>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
