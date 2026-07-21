"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerContainer, staggerItemVariants } from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";
import { Search, FileText, Settings, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery & Research",
    description: "We audit your current digital presence, analyse competitors, and identify growth opportunities specific to your industry and market.",
  },
  {
    icon: FileText,
    title: "Strategy & Planning",
    description: "We develop a tailored roadmap with clear KPIs, timelines, and channel strategies aligned to your business objectives and budget.",
  },
  {
    icon: Settings,
    title: "Execution & Optimization",
    description: "We implement the strategy — from technical SEO and ad campaigns to design and content — while continuously optimizing for performance.",
  },
  {
    icon: BarChart3,
    title: "Reporting & Scale",
    description: "We deliver transparent monthly reports with actionable insights, then scale what works to grow your results month over month.",
  },
];

export function Process() {
  return (
    <section className="py-20 lg:py-30 bg-card">
      <div className="container-main">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] mb-4">
              Our <span className="text-gradient-gold">process.</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A proven methodology that delivers consistent results.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                variants={staggerItemVariants}
                className="bg-card p-6 sm:p-8 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-[rgb(var(--primary))]/5 transition-all">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-primary">Step {i + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
