"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CASE_STUDIES } from "@/constants/home";

const logos: Record<string, string> = {
  "Mehta Constructions": "MC",
  "Luxe Interiors": "LI",
  "TechNova Solutions": "TN",
};

export function CaseStudies() {
  return (
    <section className="kc-section relative overflow-hidden bg-kc-black-pure">
      <div className="kc-divider absolute top-0 left-8 right-8" />

      <div className="kc-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <p className="text-overline font-heading text-kc-gray-500 mb-8 tracking-[0.25em]">
            Case Studies
          </p>
          <h2 className="text-display font-display text-kc-white">
            Proof, Not
            <br />
            <span className="kc-gold-text">Promises.</span>
          </h2>
        </motion.div>

        <div className="space-y-24">
          {CASE_STUDIES.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.12 }}
              className="group"
            >
              {/* Preview image area */}
              <div className="relative h-64 md:h-80 rounded-[var(--kc-radius-xl)] overflow-hidden bg-gradient-to-br from-kc-black-elevated to-kc-black-pure border border-kc-white/[0.04] mb-12">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,_var(--kc-gold)_0%,_transparent_60%)] opacity-[0.02]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[clamp(5rem,12vw,10rem)] font-display text-kc-white/[0.03] select-none">
                    {logos[study.client] || study.client.split(" ").map((w: string) => w[0]).join("")}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-kc-black-pure via-transparent to-transparent" />

                <div className="absolute bottom-8 left-8 flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-kc-white/[0.03] border border-kc-white/[0.06] flex items-center justify-center">
                    <span className="text-xl font-heading font-bold text-kc-white/40">
                      {logos[study.client] || study.client.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-lg font-heading font-semibold text-kc-white">{study.client}</p>
                    <p className="text-sm text-kc-gray-500">{study.industry}</p>
                  </div>
                </div>

                <div className="absolute top-8 right-8">
                  <span className="px-4 py-1.5 text-xs font-heading font-medium text-kc-gray-400 border border-kc-white/[0.06] rounded-full">
                    {study.service}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="kc-grid gap-12">
                <div className="lg:col-span-7 col-span-12">
                  <h3 className="text-[var(--kc-text-h2)] font-heading font-bold text-kc-white leading-[var(--kc-leading-tight)] mb-6">
                    {study.title}
                  </h3>
                  <p className="text-[var(--kc-text-body-lg)] text-kc-gray-500 leading-relaxed">
                    {study.description}
                  </p>
                </div>
                <div className="lg:col-span-4 lg:col-start-9 col-span-12">
                  <div className="grid grid-cols-3 lg:grid-cols-1 gap-10">
                    {study.results.map((result) => (
                      <div key={result.metric}>
                        <p className="text-4xl md:text-5xl font-display text-kc-white font-bold leading-none mb-2">{result.value}</p>
                        <p className="text-xs uppercase tracking-[0.2em] text-kc-gray-600 font-heading font-medium">{result.metric}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {study.testimonial && (
                <div className="mt-10 pt-8 border-t border-kc-white/[0.04]">
                  <p className="text-[var(--kc-text-body)] text-kc-gray-500 italic leading-relaxed max-w-2xl">
                    &ldquo;{study.testimonial}&rdquo;
                  </p>
                  <p className="text-sm text-kc-gray-600 mt-3 font-heading">— {study.author}</p>
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
          className="mt-20 text-center"
        >
          <Button href="/testimonials" variant="outline" size="lg">
            View All Case Studies
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
