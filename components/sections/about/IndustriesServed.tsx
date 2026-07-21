"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerContainer, staggerItemVariants } from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";
import { INDUSTRIES } from "@/lib/data/industries";
import { ArrowUpRight } from "lucide-react";

export function IndustriesServed() {
  return (
    <section className="py-20 lg:py-30">
      <div className="container-main">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] mb-4">
              Industries we <span className="text-gradient-gold">serve.</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Deep expertise across diverse sectors, from healthcare to e-commerce.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {INDUSTRIES.slice(0, 15).map((industry) => (
              <motion.div key={industry.slug} variants={staggerItemVariants}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group flex items-center justify-between gap-2 border border-border px-4 py-3 hover:border-primary transition-colors text-sm"
                  aria-label={`Learn about our ${industry.title} services`}
                >
                  <span className="font-medium group-hover:text-primary transition-colors">
                    {industry.title}
                  </span>
                  <ArrowUpRight className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </Link>
              </motion.div>
            ))}
          </div>
        </StaggerContainer>

        <ScrollReveal className="text-center mt-10" delay={0.2}>
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            aria-label="View all industries we serve"
          >
            View All Industries &rarr;
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
