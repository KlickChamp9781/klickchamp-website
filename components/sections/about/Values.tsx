"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerContainer, staggerItemVariants } from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";
import { Target, Lightbulb, Shield, Gem, Users, BarChart3 } from "lucide-react";

const values = [
  { icon: Target, title: "Precision", description: "Every decision is data-informed, every execution is deliberate." },
  { icon: Lightbulb, title: "Innovation", description: "We push boundaries to find better, smarter, more effective solutions." },
  { icon: Shield, title: "Integrity", description: "Transparent partnerships built on honesty and mutual respect." },
  { icon: Gem, title: "Excellence", description: "We never settle. Every deliverable must be portfolio-worthy." },
  { icon: Users, title: "Collaboration", description: "Your success is our success. We work as an extension of your team." },
  { icon: BarChart3, title: "Results", description: "Impact over impressions. We measure what matters." },
];

export function Values() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] mb-6">
              Our <span className="text-gradient-gold">values.</span>
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                variants={staggerItemVariants}
                className="bg-background p-8 group"
              >
                <div className="w-12 h-12 border border-border flex items-center justify-center mb-6 group-hover:border-primary group-hover:bg-[rgb(var(--primary))]/5 transition-all">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
