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

        <div className="space-y-16">
          {CASE_STUDIES.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.12 }}
              className="kc-card p-8 md:p-12"
            >
              <div className={`kc-grid items-center ${index % 2 === 1 ? "flex-row-reverse" : ""}`}>
                {/* Content */}
                <div className={`lg:col-span-7 col-span-12 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="px-4 py-1.5 text-[var(--kc-text-caption)] font-[family-name:var(--kc-font-heading)] font-medium bg-kc-gold/10 text-kc-gold rounded-full border border-kc-gold/20">
                      {study.industry}
                    </span>
                    <span className="text-[var(--kc-text-caption)] text-kc-gray-500">{study.service}</span>
                  </div>

                  <h3 className="text-[var(--kc-text-h2)] font-[family-name:var(--kc-font-heading)] font-bold text-kc-white mb-4 leading-tight">
                    {study.title}
                  </h3>

                  <p className="text-[var(--kc-text-caption)] kc-gold-text font-[family-name:var(--kc-font-heading)] font-medium mb-8 uppercase tracking-[var(--kc-tracking-widest)]">
                    {study.client}
                  </p>

                  <p className="text-[var(--kc-text-body)] text-kc-gray-400 leading-[var(--kc-leading-relaxed)] mb-16">
                    {study.description}
                  </p>

                  <div className="kc-grid mb-8">
                    {study.results.map((result) => (
                      <div key={result.metric} className="col-span-4">
                        <p className="text-3xl md:text-4xl font-[family-name:var(--kc-font-display)] kc-gold-text font-bold mb-4">
                          {result.value}
                        </p>
                        <p className="text-xs uppercase tracking-[var(--kc-tracking-widest)] text-kc-gray-500 font-[family-name:var(--kc-font-heading)]">
                          {result.metric}
                        </p>
                      </div>
                    ))}
                  </div>

                  {study.testimonial && (
                    <div className="pt-8 border-t border-kc-white/5">
                      <p className="text-[var(--kc-text-body)] text-kc-gray-400 italic leading-[var(--kc-leading-relaxed)]">
                        &ldquo;{study.testimonial}&rdquo;
                      </p>
                      <p className="text-[var(--kc-text-body-sm)] text-kc-gray-600 mt-4">— {study.author}</p>
                    </div>
                  )}
                </div>

                {/* Decorative panel */}
                <div className={`lg:col-span-5 col-span-12 hidden lg:block ${index % 2 === 1 ? "lg:order-1" : ""}`}>
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
          className="mt-16 text-center"
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
