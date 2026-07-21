"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function Story() {
  return (
    <section className="section-padding border-t border-border">
      <div className="container-main">
        <div className="grid-12 gap-12 lg:gap-16">
          <ScrollReveal className="col-span-12 lg:col-span-5">
            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.02em]">
              Our <span className="text-gradient-gold">story.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal className="col-span-12 lg:col-span-7" delay={0.2}>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                KlickChamp was born from a simple conviction: digital marketing
                should be engineered with the same precision as any world-class
                product. Founded in Kolkata, we set out to create an agency that
                bridges the gap between creative excellence and data-driven results.
              </p>
              <p>
                From our early days working with local businesses to our current
                position serving brands across India, we&apos;ve remained committed to
                one principle — every pixel, every campaign, every strategy must
                serve a measurable purpose.
              </p>
              <p>
                Today, we are a team of strategists, designers, developers, and
                marketers who share an obsession with quality and a relentless
                drive to deliver outcomes that matter. We don&apos;t just do digital.
                We engineer digital excellence.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
