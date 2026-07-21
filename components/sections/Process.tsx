"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerContainer, staggerItemVariants } from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";
import { Search, Lightbulb, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery & Research",
    description: "We dive deep into your brand, market, competition, and keyword opportunities to uncover the highest-impact growth levers.",
    icon: Search,
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description: "Data-driven digital marketing strategies crafted with precision — from SEO roadmaps to ad campaign structures and content calendars.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Execution & Launch",
    description: "Flawless implementation across all channels — SEO, Google Ads, social media, web design — with relentless attention to detail.",
    icon: Rocket,
  },
  {
    number: "04",
    title: "Measure & Optimize",
    description: "Continuous monitoring, A/B testing, and optimization for sustained organic growth and maximum return on ad spend.",
    icon: BarChart3,
  },
];

export function Process() {
  return (
    <section className="py-20 lg:py-30 bg-secondary text-secondary-foreground">
      <div className="container-main">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em] mb-6">
              Our <span className="text-gradient-gold">process.</span>
            </h2>
            <p className="text-[rgb(var(--secondary-foreground))]/60 text-lg max-w-2xl mx-auto">
              A systematic approach to delivering exceptional results, every time.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgb(var(--border))]/20">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={staggerItemVariants}
                className="bg-secondary p-6 sm:p-8 md:p-10 group"
              >
                <div className="text-6xl font-bold text-[rgb(var(--primary))]/10 mb-6">
                  {step.number}
                </div>
                <div className="w-12 h-12 border border-[rgb(var(--primary))]/30 flex items-center justify-center mb-6 group-hover:bg-[rgb(var(--primary))]/10 transition-colors">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-[rgb(var(--secondary-foreground))]/60 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
