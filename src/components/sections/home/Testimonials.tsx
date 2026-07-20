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

        <div className="kc-grid mb-8">
          <div className="lg:col-span-8 col-span-12">
            <TestimonialCard testimonial={featured} index={0} />
          </div>
          <div className="lg:col-span-4 col-span-12">
            <TestimonialCard testimonial={rest[0]} index={1} />
          </div>
        </div>

        <div className="kc-grid">
          {rest.slice(1).map((testimonial, index) => (
            <div key={testimonial.id} className="lg:col-span-6 col-span-12">
              <TestimonialCard testimonial={testimonial} index={index + 2} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
