"use client";

import { Star, Quote } from "lucide-react";
import { StaggerContainer, staggerItemVariants } from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Sharma",
    company: "TechNova Solutions",
    role: "CEO",
    content: "KlickChamp transformed our digital presence entirely. Their data-driven approach delivered a 400% increase in qualified leads within 6 months. They don't just execute — they think strategically about every move.",
    rating: 5,
  },
  {
    name: "Priya Banerjee",
    company: "StyleHub Fashion",
    role: "Marketing Director",
    content: "The creative team at KlickChamp is exceptional. Their design work and social media strategy helped us build a brand that truly stands out in a crowded market.",
    rating: 5,
  },
  {
    name: "Amit Das",
    company: "GreenLeaf Organics",
    role: "Founder",
    content: "Professional, responsive, and results-oriented. KlickChamp is not just an agency; they're a growth partner. Their attention to detail is unmatched.",
    rating: 5,
  },
  {
    name: "Sneha Gupta",
    company: "UrbanEstate Properties",
    role: "Director",
    content: "From website design to lead generation campaigns, KlickChamp delivered beyond our expectations. Our online inquiries increased by 300% in the first quarter.",
    rating: 5,
  },
  {
    name: "Vikram Mehta",
    company: "HealthFirst Clinics",
    role: "Operations Head",
    content: "Their Google Ads expertise is remarkable. They helped us achieve a 5x ROAS while reducing our cost per acquisition by 60%. Highly recommended.",
    rating: 5,
  },
  {
    name: "Ananya Roy",
    company: "Cafe Bean & Beyond",
    role: "Owner",
    content: "KlickChamp gave our small business a big brand feel. Their social media management and content creation have been game-changers for our growth.",
    rating: 5,
  },
];

export function TestimonialsGrid() {
  return (
    <section className="py-20 lg:py-30 border-t border-border">
      <div className="container-main">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={staggerItemVariants}
              className="bg-background p-6 sm:p-8 flex flex-col group"
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
                <p className="font-semibold text-sm">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
