"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CASE_STUDIES } from "@/constants/home";

const logos: Record<string, string> = {
  "Mehta Constructions": "MC",
  "Luxe Interiors": "LI",
  "TechNova Solutions": "TN",
};

const gradients: Record<string, string> = {
  "Mehta Constructions": "from-amber-900/30 via-transparent to-transparent",
  "Luxe Interiors": "from-rose-900/30 via-transparent to-transparent",
  "TechNova Solutions": "from-blue-900/30 via-transparent to-transparent",
};

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
          className="mb-16"
        >
          <p className="text-overline font-heading kc-gold-text mb-8">Case Studies</p>
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
              className="group"
            >
              <div className="kc-card-case">
                {/* Preview Image Area */}
                <div className="relative h-56 md:h-72 bg-gradient-to-br from-kc-black-elevated to-kc-black-pure overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradients[study.client] || "from-kc-gold/10 via-transparent to-transparent"}`} />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,_var(--kc-gold)_0%,_transparent_60%)] opacity-[0.03]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[clamp(4rem,10vw,8rem)] font-display kc-gold-text opacity-[0.06] select-none">
                      {logos[study.client] || study.client.split(" ").map((w: string) => w[0]).join("")}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.9)] via-transparent to-transparent" />

                  {/* Client logo + industry on image */}
                  <div className="absolute bottom-6 left-8 flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-kc-gold/15 border border-kc-gold/25 flex items-center justify-center">
                      <span className="text-xl font-heading font-bold kc-gold-text">
                        {logos[study.client] || study.client.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-lg font-heading font-semibold text-kc-white">{study.client}</p>
                      <p className="text-sm text-kc-gray-400">{study.industry}</p>
                    </div>
                  </div>

                  {/* Service tag */}
                  <div className="absolute top-6 right-8">
                    <span className="px-4 py-1.5 text-xs font-heading font-medium bg-kc-gold/10 text-kc-gold rounded-full border border-kc-gold/20">
                      {study.service}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-10 md:p-14">
                  <div className="kc-grid items-start gap-10">
                    <div className="lg:col-span-7 col-span-12">
                      <h3 className="text-[var(--kc-text-h2)] font-heading font-bold text-kc-white leading-[var(--kc-leading-tight)] mb-6">
                        {study.title}
                      </h3>
                      <p className="text-[var(--kc-text-body)] text-kc-gray-400 leading-relaxed">
                        {study.description}
                      </p>
                    </div>
                    <div className="lg:col-span-4 lg:col-start-9 col-span-12">
                      <div className="grid grid-cols-3 lg:grid-cols-1 gap-8">
                        {study.results.map((result) => (
                          <div key={result.metric}>
                            <p className="text-4xl md:text-5xl font-display kc-gold-text font-bold leading-none mb-2">{result.value}</p>
                            <p className="text-xs uppercase tracking-[var(--kc-tracking-widest)] text-kc-gray-500 font-heading">{result.metric}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {study.testimonial && (
                    <div className="mt-10 pt-8 border-t border-kc-white/5">
                      <p className="text-[var(--kc-text-body-lg)] text-kc-gray-400 italic leading-relaxed max-w-2xl">
                        &ldquo;{study.testimonial}&rdquo;
                      </p>
                      <p className="text-[var(--kc-text-body-sm)] text-kc-gray-600 mt-3 font-heading">— {study.author}</p>
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
          className="mt-12 text-center"
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
