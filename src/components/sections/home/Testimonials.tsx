"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { getFeaturedTestimonials } from "@/data/testimonials";

export function Testimonials() {
  const [featured, ...rest] = getFeaturedTestimonials();

  return (
    <section className="kc-section relative">
      <div className="kc-container">
        <SectionHeading
          overline="Testimonials"
          heading="Trusted by Growing Brands."
          subheading="Don't take our word for it. Here's what our clients have to say."
          className="mb-16"
        />

        <div className="space-y-8">
          {/* Featured testimonial — spans wider */}
          <TestimonialCard testimonial={featured} index={0} featured />

          {/* Rest in a 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rest.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
