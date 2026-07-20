"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/constants/site";

export function FinalCTA() {
  return (
    <section className="kc-section relative overflow-hidden border-t border-kc-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-kc-black via-kc-black-elevated to-kc-black" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-[radial-gradient(ellipse_at_center,_var(--kc-gold)_0%,_transparent_60%)] opacity-[0.04] blur-3xl" />

      <div className="kc-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-overline font-[family-name:var(--kc-font-heading)] kc-gold-text mb-10">
            Ready to Grow?
          </p>

          <h2 className="text-display font-display text-kc-white mb-10">
            Let&apos;s Build Your
            <br />
            <span className="kc-gold-text">Digital Empire.</span>
          </h2>

          <p className="text-[var(--kc-text-body-xl)] text-kc-gray-400 mb-16 max-w-lg mx-auto leading-[var(--kc-leading-relaxed)]">
            Book a free 30-minute strategy call. No pitches, no pressure — just honest advice about how to grow your business online.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
