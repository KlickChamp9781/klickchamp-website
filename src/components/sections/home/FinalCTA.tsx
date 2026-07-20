"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/constants/site";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-kc-black-pure border-t border-kc-white/[0.04]">
      <div className="kc-container relative z-10" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-overline font-heading text-kc-gray-500 mb-8 tracking-[0.25em]">
            Ready to Grow?
          </p>
          <h2 className="text-display font-display text-kc-white mb-6">
            Let&apos;s Build Your
            <br />
            <span className="kc-gold-text">Digital Empire.</span>
          </h2>
          <p className="text-xl font-heading font-bold text-kc-gray-500 mb-14 max-w-lg mx-auto leading-relaxed">
            Book a free 30-minute strategy call. No pitches, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button href="/contact" variant="primary" size="xl">
              Book Free Strategy Call
            </Button>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-[var(--kc-radius-lg)] text-kc-gray-400 font-heading font-bold text-lg hover:text-kc-white transition-all duration-300"
            >
              {SITE_CONFIG.phoneFormatted}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
