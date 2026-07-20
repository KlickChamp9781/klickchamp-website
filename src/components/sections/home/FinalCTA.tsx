"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/constants/site";

export function FinalCTA() {
  return (
    <section className="kc-section relative overflow-hidden border-t border-kc-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-kc-black via-kc-black-elevated to-kc-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--kc-gold)_0%,_transparent_70%)] opacity-[0.04]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-[radial-gradient(ellipse_at_center,_var(--kc-gold)_0%,_transparent_60%)] opacity-[0.03] blur-3xl" />

      <div className="kc-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-overline font-[family-name:var(--kc-font-heading)] kc-gold-text mb-8"
          >
            Ready to Grow?
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[var(--kc-text-display)] font-[family-name:var(--kc-font-heading)] font-bold text-kc-white mb-8 leading-tight"
          >
            Let&apos;s Build Your
            <br />
            <span className="kc-gold-text">Digital Empire.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[var(--kc-text-body-xl)] text-kc-gray-400 mb-16 max-w-lg mx-auto"
          >
            Book a free 30-minute strategy call. No pitches, no pressure — just honest advice about how to grow your business online.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8"
          >
            <Button href="/contact" variant="primary" size="xl">
              Book Free Strategy Call
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="text-[var(--kc-text-body)] text-kc-gray-400 hover:text-kc-gold transition-colors duration-300 font-[family-name:var(--kc-font-heading)]"
            >
              Or call us at {SITE_CONFIG.phoneFormatted}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
