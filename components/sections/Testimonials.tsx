"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerContainer, staggerItemVariants } from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    company: "TechNova Solutions",
    role: "CEO",
    content: "KlickChamp transformed our digital presence entirely. Their data-driven approach delivered a 400% increase in qualified leads within 6 months.",
    rating: 5,
  },
  {
    name: "Priya Banerjee",
    company: "StyleHub Fashion",
    role: "Marketing Director",
    content: "The creative team at KlickChamp is exceptional. Their design work and social media strategy helped us build a brand that truly stands out.",
    rating: 5,
  },
  {
    name: "Amit Das",
    company: "GreenLeaf Organics",
    role: "Founder",
    content: "Professional, responsive, and results-oriented. KlickChamp is not just an agency; they're a growth partner. Highly recommended.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-card">
      <div className="container-main">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em] mb-6">
              Client <span className="text-gradient-gold">voices.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Don&apos;t take our word for it. Hear from the brands we&apos;ve helped transform.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={staggerItemVariants}
              className="bg-background p-8 flex flex-col"
            >
              <Quote className="h-8 w-8 text-[rgb(var(--primary))]/20 mb-6" />
              <p className="text-foreground leading-relaxed mb-8 flex-1">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[rgb(var(--primary))] text-primary"
                    />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
