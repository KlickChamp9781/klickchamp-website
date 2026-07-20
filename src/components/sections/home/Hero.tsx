"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/constants/site";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-kc-black via-kc-black to-kc-black" />
      <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-kc-gold/[0.03] to-transparent" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[50%] bg-gradient-to-tr from-kc-gold/[0.02] to-transparent blur-3xl" />

      {/* Grid lines (subtle) */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-1/4 w-px h-full bg-kc-white" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-kc-white" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-kc-white" />
      </div>

      <div className="kc-container relative z-10 py-32 md:py-40">
        <div className="max-w-5xl">
          {/* Overline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-overline font-[family-name:var(--kc-font-heading)] kc-gold-text mb-6"
          >
            Premium Digital Marketing Agency — Kolkata, India
          </motion.p>

          {/* Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="text-hero font-display text-kc-white leading-[var(--kc-leading-tight)] tracking-[var(--kc-tracking-tight)] mb-8"
          >
            We Build Digital
            <br />
            <span className="kc-gold-text">Empires.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="text-[var(--kc-text-body-lg)] text-kc-gray-400 max-w-xl leading-[var(--kc-leading-relaxed)] mb-10"
          >
            Data-driven strategies. Premium execution. Measurable growth.
            <br className="hidden sm:block" />
            {SITE_CONFIG.tagline.toLowerCase()}.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
            className="flex flex-col sm:flex-row items-start gap-4"
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

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-16 flex items-center gap-8 flex-wrap"
          >
            <div className="flex items-center gap-2 text-xs text-kc-gray-500">
              <span className="w-1.5 h-1.5 rounded-full bg-kc-success" />
              150+ Brands Served
            </div>
            <div className="w-px h-4 bg-kc-white/10" />
            <div className="flex items-center gap-2 text-xs text-kc-gray-500">
              <span className="w-1.5 h-1.5 rounded-full bg-kc-success" />
              98% Client Retention
            </div>
            <div className="w-px h-4 bg-kc-white/10" />
            <div className="flex items-center gap-2 text-xs text-kc-gray-500">
              <span className="w-1.5 h-1.5 rounded-full bg-kc-success" />
              3.2x Avg. ROI
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[var(--kc-tracking-widest)] text-kc-gray-600 font-[family-name:var(--kc-font-heading)]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-kc-gold/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
