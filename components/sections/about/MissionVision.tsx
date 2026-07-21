"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerContainer, staggerItemVariants } from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";

const items = [
  {
    label: "Mission",
    title: "To engineer measurable digital growth for every brand we partner with.",
    description: "We exist to transform businesses through precision-driven strategies, exceptional design, and relentless optimization.",
  },
  {
    label: "Vision",
    title: "To be India's most trusted and results-oriented digital agency.",
    description: "We envision a future where every brand has access to world-class digital expertise that drives real business outcomes.",
  },
];

export function MissionVision() {
  return (
    <section className="py-20 lg:py-30 bg-secondary text-secondary-foreground border-y border-border">
      <div className="container-main">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgb(var(--border))]/20">
          {items.map((item) => (
            <motion.div
              key={item.label}
              variants={staggerItemVariants}
              className="bg-secondary p-6 sm:p-8 md:p-12"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
                {item.label}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-6 leading-tight">
                {item.title}
              </h2>
              <p className="text-[rgb(var(--secondary-foreground))]/60 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
