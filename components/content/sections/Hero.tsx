import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { HeroSection } from "@/lib/content/types";

export function Hero({ badge, heading, headingGold, description, ctas, secondaryDescription }: HeroSection) {
  return (
    <section className="relative pt-16 pb-20">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            {badge && <Badge className="mb-6">{badge}</Badge>}
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-[-0.03em] leading-[1.05] mb-6">
              {heading}
              {headingGold && (
                <>
                  <span className="text-gradient-gold">{headingGold}</span>
                </>
              )}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
              {description}
            </p>
            {ctas && ctas.length > 0 && (
              <div className="flex flex-col sm:flex-row gap-4">
                {ctas.map((cta) => (
                  <Button
                    key={cta.href}
                    size="lg"
                    variant={cta.variant}
                    asChild
                  >
                    <Link href={cta.href}>
                      {cta.label}
                      {cta.variant !== "outline" && (
                        <ArrowRight className="ml-2 h-4 w-4" />
                      )}
                    </Link>
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
