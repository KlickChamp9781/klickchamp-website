"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerContainer, staggerItemVariants } from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";
import { Cpu, Layers, Globe, Settings } from "lucide-react";

const pillars = [
  { icon: Cpu, title: "Data-Driven Approach", description: "Every strategy is backed by analytics, research, and performance data." },
  { icon: Layers, title: "End-to-End Capability", description: "From strategy to execution — design, development, marketing, all under one roof." },
  { icon: Globe, title: "Global Standards", description: "World-class quality delivered with local expertise and personal attention." },
  { icon: Settings, title: "Technical Excellence", description: "Engineering-grade precision in every campaign, design, and line of code." },
];

export function WhyKlickChamp() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] mb-6">
              Why <span className="text-gradient-gold">KlickChamp?</span>
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                variants={staggerItemVariants}
                className="bg-background p-8 text-center group"
              >
                <div className="w-14 h-14 border border-border flex items-center justify-center mx-auto mb-6 group-hover:border-primary group-hover:bg-[rgb(var(--primary))]/5 transition-all">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-3">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
