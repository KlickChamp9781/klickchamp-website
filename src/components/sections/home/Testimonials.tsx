"use client";

import { motion } from "framer-motion";
import { getFeaturedTestimonials } from "@/data/testimonials";

export function Testimonials() {
  const testimonials = getFeaturedTestimonials();

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
            Testimonials
          </p>
          <h2 className="text-display font-display text-kc-white">
            Trusted by
            <br />
            <span className="kc-gold-text">Growing Brands.</span>
          </h2>
        </motion.div>

        <div className="kc-grid">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              className={index === 0 ? "lg:col-span-7 col-span-12" : "lg:col-span-5 col-span-12"}
            >
              <div className="kc-card p-10 md:p-12 lg:p-14 h-full flex flex-col justify-between">
                <div>
                  <span className="text-6xl md:text-7xl font-display kc-gold-text opacity-20 leading-none block mb-6 select-none">
                    &ldquo;
                  </span>
                  <p className="text-[var(--kc-text-body-lg)] text-kc-gray-300 leading-[var(--kc-leading-relaxed)] mb-10">
                    {t.content}
                  </p>
                </div>
                <div>
                  <p className="text-[var(--kc-text-h4)] font-[family-name:var(--kc-font-heading)] font-bold text-kc-white">
                    {t.name}
                  </p>
                  <p className="text-[var(--kc-text-body-sm)] text-kc-gray-500 mt-1">
                    {t.role}, {t.company}
                  </p>
                  {t.results && (
                    <p className="text-sm font-[family-name:var(--kc-font-heading)] font-medium text-kc-gold mt-4 uppercase tracking-[var(--kc-tracking-widest)]">
                      {t.results}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
