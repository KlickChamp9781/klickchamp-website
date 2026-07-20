"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CASE_STUDIES } from "@/constants/home";

export function CaseStudies() {
  return (
    <section className="kc-section relative">
      <div className="kc-container">
        <SectionHeading
          overline="Case Studies"
          heading="Results That Speak"
          subheading="Real clients. Real numbers. Real growth."
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {CASE_STUDIES.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.1,
              }}
              className="kc-card group p-8 flex flex-col"
            >
              {/* Industry badge */}
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 text-xs font-[family-name:var(--kc-font-heading)] font-medium bg-kc-gold/10 text-kc-gold rounded-full border border-kc-gold/20">
                  {study.industry}
                </span>
                <span className="text-xs text-kc-gray-500">
                  {study.service}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[var(--kc-text-h3)] font-[family-name:var(--kc-font-heading)] font-bold text-kc-white mb-3 leading-tight">
                {study.title}
              </h3>

              {/* Client */}
              <p className="text-sm kc-gold-text font-[family-name:var(--kc-font-heading)] font-medium mb-4">
                {study.client}
              </p>

              {/* Description */}
              <p className="text-sm text-kc-gray-400 leading-[var(--kc-leading-relaxed)] mb-8 flex-1">
                {study.description}
              </p>

              {/* Results grid */}
              <div className="grid grid-cols-3 gap-4 mb-6 py-5 border-t border-kc-white/5">
                {study.results.map((result) => (
                  <div key={result.metric} className="text-center">
                    <p className="text-xl font-[family-name:var(--kc-font-display)] kc-gold-text font-bold mb-1">
                      {result.value}
                    </p>
                    <p className="text-[10px] uppercase tracking-[var(--kc-tracking-wider)] text-kc-gray-500 font-[family-name:var(--kc-font-heading)]">
                      {result.metric}
                    </p>
                  </div>
                ))}
              </div>

              {/* Testimonial quote */}
              {study.testimonial && (
                <div className="pt-4 border-t border-kc-white/5">
                  <p className="text-xs text-kc-gray-400 italic">
                    &ldquo;{study.testimonial}&rdquo;
                  </p>
                  <p className="text-xs text-kc-gray-600 mt-1">
                    — {study.author}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Button href="/testimonials" variant="outline" size="md">
            View All Testimonials
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
