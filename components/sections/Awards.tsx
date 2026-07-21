"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Award, Trophy, Medal, Star } from "lucide-react";

const awards = [
  { icon: Trophy, title: "Best Digital Campaign 2024", org: "Kolkata Digital Awards" },
  { icon: Award, title: "Top Web Design Agency", org: "Clutch Reviews" },
  { icon: Medal, title: "Excellence in Branding", org: "India Creative Awards" },
  { icon: Star, title: "Client Satisfaction Award", org: "GoodFirms" },
];

export function Awards() {
  return (
    <section className="py-20 border-y border-border">
      <div className="container-main">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3">
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-4">
                Award-winning <span className="text-gradient-gold">agency.</span>
              </h2>
              <p className="text-muted-foreground">
                Recognized for delivering exceptional digital experiences.
              </p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border">
              {awards.map((award) => {
                const Icon = award.icon;
                return (
                  <div key={award.title} className="bg-background p-6 text-center group">
                    <Icon className="h-8 w-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <p className="font-semibold text-sm mb-1">{award.title}</p>
                    <p className="text-xs text-muted-foreground">{award.org}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
