"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/constants/site";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "350px" }}>
      <div className="absolute inset-0 bg-gradient-to-br from-kc-gold-dark via-kc-gold to-kc-gold-light" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.15)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 kc-noise" />

      <div className="kc-container relative z-10 h-full flex items-center" style={{ minHeight: "350px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-display font-display text-kc-black-pure font-bold leading-[var(--kc-leading-tight)]">
                Ready to Grow Your
                <br />
                Digital Empire?
              </h2>
              <p className="text-lg text-kc-black/70 mt-4 max-w-lg">
                Book a free 30-minute strategy call. No pitches, no pressure.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-[var(--kc-radius-lg)] bg-kc-black-pure text-kc-white font-heading font-medium text-lg hover:bg-kc-gray-900 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                Book Free Strategy Call
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-[var(--kc-radius-lg)] bg-kc-black/10 text-kc-black-pure font-heading font-medium text-lg hover:bg-kc-black/20 transition-all duration-300 backdrop-blur-sm"
              >
                {SITE_CONFIG.phoneFormatted}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
