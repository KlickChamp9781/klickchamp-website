"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import type { Testimonial } from "@/types";

type TestimonialCardProps = {
  testimonial: Testimonial;
  index?: number;
};

export function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1,
      }}
      className="kc-card p-10 flex flex-col"
    >
      <div className="flex items-center gap-1.5 mb-5">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-kc-gold"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <blockquote className="text-kc-gray-300 text-[var(--kc-text-body)] leading-[var(--kc-leading-relaxed)] flex-1 mb-6">
        &ldquo;{testimonial.content}&rdquo;
      </blockquote>

      {testimonial.results && (
        <div className="mb-6 py-3.5 px-5 rounded-[var(--kc-radius-md)] bg-kc-gold/5 border border-kc-gold/10">
          <p className="text-[var(--kc-text-body-sm)] font-[family-name:var(--kc-font-heading)] font-semibold kc-gold-text">
            {testimonial.results}
          </p>
        </div>
      )}

      <div className="flex items-center gap-3.5 pt-5 border-t border-kc-white/5">
        <div className="w-11 h-11 rounded-full bg-kc-gray-800 flex items-center justify-center">
          <span className="text-base font-[family-name:var(--kc-font-heading)] font-semibold text-kc-gold">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-[var(--kc-text-body-sm)] font-[family-name:var(--kc-font-heading)] font-medium text-kc-white">
            {testimonial.name}
          </p>
          <p className="text-sm text-kc-gray-500">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
