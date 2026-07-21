"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { INDUSTRIES } from "@/lib/data/industries";

export function TrustSignals() {
  const industryCount = INDUSTRIES.length;

  return (
    <section className="section-padding border-t border-border">
      <div className="container-main">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-4">
              Trust <span className="text-gradient-gold">KlickChamp.</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Real numbers. Real results. No exaggerations.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[rgb(var(--border))] border border-border">
            <div className="p-6 text-center">
              <p className="text-xl font-bold mb-1">5+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-[0.08em]">Years Experience</p>
            </div>
            <div className="p-6 text-center">
              <p className="text-xl font-bold mb-1">200+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-[0.08em]">Projects Completed</p>
            </div>
            <div className="p-6 text-center">
              <p className="text-xl font-bold mb-1">{industryCount}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-[0.08em]">Industries Served</p>
            </div>
            <div className="p-6 text-center">
              <p className="text-xl font-bold mb-1">&lt; 24h</p>
              <p className="text-xs text-muted-foreground uppercase tracking-[0.08em]">Response Time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
