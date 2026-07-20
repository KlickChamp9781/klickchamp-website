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
          heading="Results That Speak."
          subheading="Real clients. Real numbers. Real growth."
          className="mb-16"
        />

        <div className="space-y-12">
          {CASE_STUDIES.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.15,
              }}
              className={`kc-card p-10 md:p-14 ${
                index === 1 ? "lg:ml-16" : index === 2 ? "lg:mr-16" : ""
              }`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}>
                {/* Left content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-4 py-1.5 text-[var(--kc-text-caption)] font-[family-name:var(--kc-font-heading)] font-medium bg-kc-gold/10 text-kc-gold rounded-full border border-kc-gold/20">
                      {study.industry}
                    </span>
                    <span className="text-[var(--kc-text-caption)] text-kc-gray-500">
                      {study.service}
                    </span>
                  </div>

                  <h3 className="text-[var(--kc-text-h2)] font-[family-name:var(--kc-font-heading)] font-bold text-kc-white mb-4 leading-tight">
                    {study.title}
                  </h3>

                  <p className="text-[var(--kc-text-caption)] kc-gold-text font-[family-name:var(--kc-font-heading)] font-medium mb-5 uppercase tracking-[var(--kc-tracking-wide)]">
                    {study.client}
                  </p>

                  <p className="text-[var(--kc-text-body)] text-kc-gray-400 leading-[var(--kc-leading-relaxed)] mb-10">
                    {study.description}
                  </p>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-6 py-7 border-t border-kc-white/5">
                    {study.results.map((result) => (
                      <div key={result.metric}>
                        <p className="text-3xl md:text-4xl font-[family-name:var(--kc-font-display)] kc-gold-text font-bold mb-2">
                          {result.value}
                        </p>
                        <p className="text-xs uppercase tracking-[var(--kc-tracking-wider)] text-kc-gray-500 font-[family-name:var(--kc-font-heading)]">
                          {result.metric}
                        </p>
                      </div>
                    ))}
                  </div>

                  {study.testimonial && (
                    <div className="mt-8 pt-7 border-t border-kc-white/5">
                      <p className="text-[var(--kc-text-body)] text-kc-gray-400 italic leading-[var(--kc-leading-relaxed)]">
                        &ldquo;{study.testimonial}&rdquo;
                      </p>
                      <p className="text-[var(--kc-text-body-sm)] text-kc-gray-600 mt-2">
                        — {study.author}
                      </p>
                    </div>
                  )}
                </div>

                {/* Right — decorative panel */}
                <div className={`hidden lg:block ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-[4/3] rounded-[var(--kc-radius-xl)] bg-gradient-to-br from-kc-gold/5 to-transparent border border-kc-white/5 flex items-center justify-center">
                    <span className="text-[4rem] md:text-[6rem] font-display kc-gold-text opacity-[0.06] select-none">
                      {study.client.split(" ").map(w => w[0]).join("")}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="mt-14 text-center"
        >
          <Button href="/testimonials" variant="outline" size="lg">
            View All Testimonials
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
