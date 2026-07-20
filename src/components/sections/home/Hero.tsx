"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-kc-black via-kc-black to-kc-black-pure" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--kc-gold)_0%,_transparent_65%)] opacity-[0.04]" />
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-kc-black-pure to-transparent" />

      <div className="kc-container relative z-10 w-full">
        <div className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-overline font-[family-name:var(--kc-font-heading)] kc-gold-text mb-10"
          >
            Premium Digital Marketing Agency — Kolkata, India
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="text-hero font-display text-kc-white"
          >
            We Build Digital
            <br />
            <span className="kc-gold-text">Empires.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="text-[var(--kc-text-body-xl)] text-kc-gray-400 leading-[var(--kc-leading-relaxed)] mt-10 max-w-2xl"
          >
            Data-driven strategies. Premium execution. Measurable growth.
            No cookie-cutter campaigns — just relentless focus on your ROI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
            className="flex flex-col sm:flex-row items-start gap-5 mt-16"
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
            className="mt-20 flex items-center gap-8 flex-wrap"
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
