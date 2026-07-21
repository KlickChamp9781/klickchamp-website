import Link from "next/link";
import { Heading } from "@/components/content/Heading";
import { SectionWrapper } from "@/components/content/SectionWrapper";
import { Container } from "@/components/content/Container";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import type { LinkGridSection } from "@/lib/content/types";

export function LinkGrid({ heading, headingGold, items, columns = 3, theme = "default" }: LinkGridSection) {
  const colsClass = columns === 5 ? "md:grid-cols-2 lg:grid-cols-3" : columns === 4 ? "lg:grid-cols-4" : columns === 2 ? "md:grid-cols-2" : "md:grid-cols-3";

  return (
    <SectionWrapper theme={theme} bordered>
      <Container>
        <Heading gold={headingGold}>{heading}</Heading>
        <div className={`grid grid-cols-1 ${colsClass} gap-px bg-border`}>
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group block bg-background hover:bg-card transition-colors"
            >
              {item.image ? (
                <div className="aspect-[16/9] bg-muted relative overflow-hidden">
                  <OptimizedImage
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ) : null}
              <div className="p-8">
                <h3 className="font-bold group-hover:text-primary transition-colors mb-2">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
