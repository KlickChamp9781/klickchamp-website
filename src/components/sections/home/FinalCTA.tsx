"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/constants/site";

export function FinalCTA() {
  return (
    <section className="kc-section relative overflow-hidden">
      <div className="kc-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[var(--kc-radius-2xl)] p-12 md:p-16 lg:p-20 text-center"
        >
          {/* Background layers */}
          <div className="absolute inset-0 bg-kc-gradient-card" />
          <div className="absolute inset-0 bg-gradient-to-br from-kc-gold/10 via-transparent to-kc-gold/5" />
          <div className="absolute inset-0 border border-kc-white/5 rounded-[var(--kc-radius-2xl)]" />

          {/* Glow orbs */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-kc-gold/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-kc-gold/3 rounded-full blur-[80px]" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-overline font-[family-name:var(--kc-font-heading)] kc-gold-text mb-4"
            >
              Ready to Grow?
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[var(--kc-text-h2)] font-[family-name:var(--kc-font-heading)] font-bold text-kc-white mb-4 leading-tight"
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
              className="text-[var(--kc-text-body-lg)] text-kc-gray-400 mb-10 max-w-lg mx-auto"
            >
              Book a free 30-minute strategy call. No pitches, no pressure — just honest advice about how to grow your business online.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button href="/contact" variant="primary" size="lg">
                Book Free Strategy Call
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="text-sm text-kc-gray-400 hover:text-kc-gold transition-colors duration-300 font-[family-name:var(--kc-font-heading)]"
              >
                Or call us at {SITE_CONFIG.phoneFormatted}
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
