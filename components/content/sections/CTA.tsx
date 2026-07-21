import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/content/SectionWrapper";
import { Container } from "@/components/content/Container";
import type { CTASection as CTASectionType } from "@/lib/content/types";

export function CTA({ heading, description, button, theme = "default" }: CTASectionType) {
  return (
    <SectionWrapper theme={theme}>
      <Container>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-6">
            {heading}
          </h2>
          {description && (
            <p className={`${theme === "card" ? "text-muted-foreground" : "text-[rgb(var(--secondary-foreground))]/60"} text-lg mb-8 max-w-2xl mx-auto`}>
              {description}
            </p>
          )}
          {button && (
            <Button size="lg" variant={button.variant} asChild>
              <Link href={button.href}>
                {button.label}
                {button.variant !== "outline" && (
                  <ArrowRight className="ml-2 h-4 w-4" />
                )}
              </Link>
            </Button>
          )}
        </div>
      </Container>
    </SectionWrapper>
  );
}
