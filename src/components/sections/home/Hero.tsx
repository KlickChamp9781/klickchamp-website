"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/constants/site";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-kc-black via-kc-black to-kc-black-pure" />
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--kc-gold)_0%,_transparent_60%)] opacity-[0.04]" />

      <div className="kc-container relative z-10 w-full">
        <div className="kc-grid items-center min-h-[75vh]">
          {/* Left — Content: 7 columns */}
          <div className="lg:col-span-7 col-span-12">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-overline font-[family-name:var(--kc-font-heading)] kc-gold-text mb-8"
            >
              Premium Digital Marketing Agency — Kolkata, India
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="text-hero font-display text-kc-white leading-[var(--kc-leading-tight)] tracking-[var(--kc-tracking-tight)]"
            >
              We Build Digital
              <br />
              <span className="kc-gold-text">Empires.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="text-[var(--kc-text-body-lg)] text-kc-gray-400 leading-[var(--kc-leading-relaxed)] mt-8 max-w-xl"
            >
              Data-driven strategies. Premium execution. Measurable growth.
              <br />
              {SITE_CONFIG.tagline.toLowerCase()}.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
              className="flex flex-col sm:flex-row items-start gap-4 mt-16"
            >
              <Button href="/contact" variant="primary" size="lg">
                Start Your Growth
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                View Services
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-16 flex items-center gap-8 flex-wrap"
            >
              <div className="flex items-center gap-4 text-[var(--kc-text-body-sm)] text-kc-gray-500">
                <span className="w-2 h-2 rounded-full bg-kc-success" />
                150+ Brands Served
              </div>
              <div className="w-px h-5 bg-kc-white/10" />
              <div className="flex items-center gap-4 text-[var(--kc-text-body-sm)] text-kc-gray-500">
                <span className="w-2 h-2 rounded-full bg-kc-success" />
                98% Client Retention
              </div>
              <div className="w-px h-5 bg-kc-white/10" />
              <div className="flex items-center gap-4 text-[var(--kc-text-body-sm)] text-kc-gray-500">
                <span className="w-2 h-2 rounded-full bg-kc-success" />
                3.2x Avg. ROI
              </div>
            </motion.div>
          </div>

          {/* Right — Decorative Panel: 5 columns */}
          <div className="lg:col-span-5 col-span-12 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="relative"
            >
              <div className="relative aspect-[3/4] rounded-[var(--kc-radius-2xl)] overflow-hidden border border-kc-white/10 bg-gradient-to-br from-kc-black-elevated to-kc-black">
                <div className="absolute inset-0 bg-gradient-to-br from-kc-gold/8 via-transparent to-kc-gold/3" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="text-[clamp(6rem,15vw,14rem)] font-display kc-gold-text opacity-[0.12] select-none">
                    KC
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-overline text-kc-gray-500 mb-4">Est. 2021</p>
                  <p className="text-[var(--kc-text-body-lg)] font-[family-name:var(--kc-font-heading)] text-kc-white font-medium">
                    Kolkata, India
                  </p>
                </div>
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-kc-gold/[0.08] to-transparent rounded-bl-[var(--kc-radius-2xl)]" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[11px] uppercase tracking-[var(--kc-tracking-widest)] text-kc-gray-600 font-[family-name:var(--kc-font-heading)]">
          Scroll
        </span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="w-px h-10 bg-gradient-to-b from-kc-gold/50 to-transparent" />
      </motion.div>
    </section>
  );
}
