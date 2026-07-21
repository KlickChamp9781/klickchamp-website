"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerContainer, staggerItemVariants } from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";

const milestones = [
  { year: "2020", title: "Founded", description: "KlickChamp established in Kolkata with a vision for precision-driven digital marketing." },
  { year: "2021", title: "First 50 Clients", description: "Reached 50 active clients across diverse industries within the first year." },
  { year: "2022", title: "Full-Service Launch", description: "Expanded to offer complete digital services — design, development, video, and marketing." },
  { year: "2023", title: "200+ Projects", description: "Delivered over 200 projects with a 98% client retention rate." },
  { year: "2025", title: "National Expansion", description: "Serving brands across India with a growing team of specialists." },
];

export function Timeline() {
  return (
    <section className="py-20 lg:py-30 bg-card">
      <div className="container-main">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] mb-6">
              Our <span className="text-gradient-gold">journey.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          <StaggerContainer className="space-y-0">
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                variants={staggerItemVariants}
                className="flex gap-8 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-px flex-1 bg-border group-last:hidden" />
                  <div className="w-3 h-3 border-2 border-primary bg-background shrink-0 my-4" />
                  <div className="w-px flex-1 bg-border group-first:hidden" />
                </div>
                <div className="pb-12">
                  <span className="text-sm font-semibold text-primary uppercase tracking-[0.15em]">
                    {milestone.year}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
