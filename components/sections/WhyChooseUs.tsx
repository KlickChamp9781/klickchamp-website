"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerContainer, staggerItemVariants } from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";
import { Target, Zap, Shield, Gem } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Result-Obsessed",
    description: "Every strategy is built around measurable KPIs and revenue impact.",
  },
  {
    icon: Zap,
    title: "Speed & Precision",
    description: "Agile execution with engineering-grade attention to detail.",
  },
  {
    icon: Shield,
    title: "Transparent Partnership",
    description: "Full visibility into every campaign, every metric, every dollar spent.",
  },
  {
    icon: Gem,
    title: "Premium Quality",
    description: "We never compromise on craft. Every deliverable is portfolio-worthy.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <div className="grid-12 gap-12 lg:gap-16">
          <ScrollReveal className="col-span-12 lg:col-span-5">
            <Badge>Why KlickChamp</Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] mt-6 mb-6">
              Engineering trust through <span className="text-gradient-gold">excellence.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We don&apos;t just deliver services. We build partnerships grounded
              in performance, transparency, and an unwavering commitment to your success.
            </p>
          </ScrollReveal>

          <StaggerContainer className="col-span-12 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  variants={staggerItemVariants}
                  className="bg-background p-8 group"
                >
                  <div className="w-12 h-12 border border-border flex items-center justify-center mb-6 group-hover:border-primary group-hover:bg-[rgb(var(--primary))]/5 transition-all">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center border border-[rgb(var(--primary))]/30 px-4 py-2 text-xs uppercase tracking-[0.15em] text-primary ${className || ""}`}>
      {children}
    </span>
  );
}
