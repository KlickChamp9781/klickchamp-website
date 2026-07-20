"use client";

import { motion } from "framer-motion";
import { getFeaturedTestimonials } from "@/data/testimonials";

const avatars: Record<string, string> = {
  "Rahul Mehta": "RM",
  "Priya Sharma": "PS",
  "Amit Das": "AD",
};

export function Testimonials() {
  const testimonials = getFeaturedTestimonials();

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
            Testimonials
          </p>
          <h2 className="text-display font-display text-kc-white">
            Trusted by
            <br />
            <span className="kc-gold-text">Growing Brands.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <div className="kc-grid">
            <div className="lg:col-span-12 col-span-12">
              <span className="text-6xl md:text-7xl font-display text-kc-white/[0.04] leading-none block mb-6 select-none">&ldquo;</span>
              <p className="text-2xl md:text-3xl font-heading font-bold text-kc-gray-300 leading-relaxed mb-10 max-w-4xl">
                {testimonials[0].content}
              </p>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-kc-white/[0.04] border border-kc-white/[0.06] flex items-center justify-center">
                  <span className="text-lg font-heading font-bold text-kc-gray-400">{avatars[testimonials[0].name] || testimonials[0].name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-lg font-heading font-bold text-kc-white">{testimonials[0].name}</p>
                  <p className="text-sm font-heading font-medium text-kc-gray-500">{testimonials[0].role}, {testimonials[0].company}</p>
                </div>
                {testimonials[0].results && (
                  <p className="ml-auto text-xs font-heading font-bold text-kc-gray-400 uppercase tracking-[0.2em]">{testimonials[0].results}</p>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="kc-divider my-14" />

        <div className="kc-grid gap-14">
          {testimonials.slice(1).map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              className="lg:col-span-6 col-span-12"
            >
              <div className="h-full">
                <p className="text-lg font-heading font-medium text-kc-gray-400 leading-relaxed mb-8">{t.content}</p>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-kc-white/[0.04] border border-kc-white/[0.06] flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-heading font-bold text-kc-gray-400">{avatars[t.name] || t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-base font-heading font-bold text-kc-white">{t.name}</p>
                    <p className="text-sm font-heading font-medium text-kc-gray-500">{t.role}, {t.company}</p>
                  </div>
                  {t.results && (
                    <p className="ml-auto text-xs font-heading font-bold text-kc-gray-500 uppercase tracking-[0.2em]">{t.results}</p>
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
