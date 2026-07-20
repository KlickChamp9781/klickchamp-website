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
      className="kc-card p-8 flex flex-col"
    >
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-kc-gold"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <blockquote className="text-kc-gray-300 text-sm leading-[var(--kc-leading-relaxed)] flex-1 mb-6">
        &ldquo;{testimonial.content}&rdquo;
      </blockquote>

      {testimonial.results && (
        <div className="mb-6 py-3 px-4 rounded-[var(--kc-radius-sm)] bg-kc-gold/5 border border-kc-gold/10">
          <p className="text-sm font-[family-name:var(--kc-font-heading)] font-semibold kc-gold-text">
            {testimonial.results}
          </p>
        </div>
      )}

      <div className="flex items-center gap-3 pt-4 border-t border-kc-white/5">
        <div className="w-10 h-10 rounded-full bg-kc-gray-800 flex items-center justify-center">
          <span className="text-sm font-[family-name:var(--kc-font-heading)] font-semibold text-kc-gold">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-sm font-[family-name:var(--kc-font-heading)] font-medium text-kc-white">
            {testimonial.name}
          </p>
          <p className="text-xs text-kc-gray-500">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
