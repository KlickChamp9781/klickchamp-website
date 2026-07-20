"use client";

import { motion } from "framer-motion";
import { getFeaturedTestimonials } from "@/data/testimonials";

const avatars: Record<string, string> = {
  "Rahul Mehta": "RM",
  "Priya Sharma": "PS",
  "Amit Das": "AD",
};

const avatarColors: Record<string, string> = {
  "Rahul Mehta": "bg-amber-900/30 border-amber-700/30 text-amber-300",
  "Priya Sharma": "bg-rose-900/30 border-rose-700/30 text-rose-300",
  "Amit Das": "bg-blue-900/30 border-blue-700/30 text-blue-300",
};

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
          className="mb-16"
        >
          <p className="text-overline font-heading kc-gold-text mb-8">Testimonials</p>
          <h2 className="text-display font-display text-kc-white">
            Trusted by
            <br />
            <span className="kc-gold-text">Growing Brands.</span>
          </h2>
        </motion.div>

        {/* Featured - full width */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <div className="kc-card-testimonial p-10 md:p-14">
            <div className="kc-grid items-center">
              <div className="lg:col-span-8 col-span-12">
                <span className="text-6xl md:text-7xl font-display kc-gold-text opacity-20 leading-none block mb-4 select-none">&ldquo;</span>
                <p className="text-[var(--kc-text-h3)] font-heading text-kc-gray-200 leading-relaxed mb-8">
                  {testimonials[0].content}
                </p>
                <div className="flex items-center gap-5">
                  <div className={`w-14 h-14 rounded-full ${avatarColors[testimonials[0].name] || "bg-kc-gold/20 border border-kc-gold/30"} flex items-center justify-center`}>
                    <span className="text-lg font-heading font-bold">{avatars[testimonials[0].name] || testimonials[0].name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-lg font-heading font-semibold text-kc-white">{testimonials[0].name}</p>
                    <p className="text-sm text-kc-gray-500">{testimonials[0].role}, {testimonials[0].company}</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-3 lg:col-start-10 col-span-12 mt-8 lg:mt-0 flex lg:flex-col items-start gap-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-kc-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                {testimonials[0].results && (
                  <p className="text-sm font-heading font-medium text-kc-gold uppercase tracking-[var(--kc-tracking-widest)]">
                    {testimonials[0].results}
                  </p>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Secondary */}
        <div className="kc-grid">
          {testimonials.slice(1).map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              className="lg:col-span-6 col-span-12"
            >
              <div className="kc-card-testimonial p-10 md:p-12 h-full flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-kc-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[var(--kc-text-body-lg)] text-kc-gray-300 leading-relaxed mb-8">{t.content}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className={`w-11 h-11 rounded-full ${avatarColors[t.name] || "bg-kc-gold/20 border border-kc-gold/30"} flex items-center justify-center`}>
                    <span className="text-sm font-heading font-bold">{avatars[t.name] || t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-base font-heading font-semibold text-kc-white">{t.name}</p>
                    <p className="text-sm text-kc-gray-500">{t.role}, {t.company}</p>
                  </div>
                  {t.results && (
                    <p className="ml-auto text-xs font-heading font-medium text-kc-gold uppercase tracking-[var(--kc-tracking-widest)]">{t.results}</p>
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
