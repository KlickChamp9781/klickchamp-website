"use client";

import Link from "next/link";
import { INDUSTRIES } from "@/lib/data/industries";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerContainer, staggerItemVariants } from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Industries() {
  return (
    <section className="py-20 lg:py-30">
      <div className="container-main">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em] mb-6">
              Industries we <span className="text-gradient-gold">serve.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Deep domain expertise across sectors, delivering tailored strategies
              that drive growth in every vertical.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {INDUSTRIES.map((industry) => (
            <motion.div
              key={industry.slug}
              variants={staggerItemVariants}
            >
              <Link
                href={`/industries/${industry.slug}`}
                className="flex items-center justify-between bg-background p-4 sm:p-6 md:p-8 group hover:bg-card transition-colors"
              >
                <span className="text-lg font-medium group-hover:text-primary transition-colors">
                  {industry.title}
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
