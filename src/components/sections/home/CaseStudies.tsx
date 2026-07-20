"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CASE_STUDIES } from "@/constants/home";

export function CaseStudies() {
  return (
    <section className="kc-section relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-kc-white/5 to-transparent" />

      <div className="kc-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <p className="text-overline font-[family-name:var(--kc-font-heading)] kc-gold-text mb-8">
            Case Studies
          </p>
          <h2 className="text-display font-display text-kc-white">
            Proof, Not
            <br />
            <span className="kc-gold-text">Promises.</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {CASE_STUDIES.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.12 }}
              className="group relative"
            >
              <div className="kc-card p-10 md:p-14 lg:p-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-kc-gold/[0.02] to-transparent" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-kc-gold/[0.03] rounded-full blur-3xl" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-10">
                    <span className="px-5 py-2 text-[var(--kc-text-caption)] font-[family-name:var(--kc-font-heading)] font-medium bg-kc-gold/10 text-kc-gold rounded-full border border-kc-gold/20">
                      {study.industry}
                    </span>
                    <span className="text-[var(--kc-text-caption)] text-kc-gray-500">{study.service}</span>
                  </div>

                  <div className="kc-grid items-end">
                    <div className="lg:col-span-7 col-span-12">
                      <p className="text-sm uppercase tracking-[var(--kc-tracking-widest)] text-kc-gold font-[family-name:var(--kc-font-heading)] font-medium mb-4">
                        {study.client}
                      </p>
                      <h3 className="text-[var(--kc-text-h2)] font-[family-name:var(--kc-font-heading)] font-bold text-kc-white leading-[var(--kc-leading-tight)] mb-6">
                        {study.title}
                      </h3>
                      <p className="text-[var(--kc-text-body)] text-kc-gray-400 leading-[var(--kc-leading-relaxed)] max-w-xl">
                        {study.description}
                      </p>
                    </div>

                    <div className="lg:col-span-4 lg:col-start-9 col-span-12 mt-8 lg:mt-0">
                      <div className="kc-grid">
                        {study.results.map((result) => (
                          <div key={result.metric} className="col-span-4 lg:col-span-12">
                            <p className="text-4xl md:text-5xl font-display kc-gold-text font-bold leading-none mb-2">
                              {result.value}
                            </p>
                            <p className="text-xs uppercase tracking-[var(--kc-tracking-widest)] text-kc-gray-500 font-[family-name:var(--kc-font-heading)]">
                              {result.metric}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {study.testimonial && (
                    <div className="mt-12 pt-10 border-t border-kc-white/5">
                      <p className="text-[var(--kc-text-body-lg)] text-kc-gray-400 italic leading-[var(--kc-leading-relaxed)] max-w-2xl">
                        &ldquo;{study.testimonial}&rdquo;
                      </p>
                      <p className="text-[var(--kc-text-body-sm)] text-kc-gray-600 mt-4 font-[family-name:var(--kc-font-heading)]">
                        — {study.author}
                      </p>
                    </div>
                  )}
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
            View All Case Studies
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
