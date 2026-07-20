"use client";

import { motion } from "framer-motion";
import type { CTAData } from "@/types";
import { Button } from "@/components/ui/Button";

type CTAProps = {
  data: CTAData;
  className?: string;
};

export function CTA({ data, className }: CTAProps) {
  return (
    <section className={className}>
      <div className="kc-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[var(--kc-radius-2xl)] p-12 md:p-16 lg:p-20"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-kc-gradient-card" />
          <div className="absolute inset-0 bg-gradient-to-br from-kc-gold/10 to-transparent" />
          <div className="absolute inset-0 border border-kc-white/5 rounded-[var(--kc-radius-2xl)]" />

          {/* Glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-kc-gold/5 rounded-full blur-[100px]" />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            {data.overline && (
              <p className="text-overline font-[family-name:var(--kc-font-heading)] kc-gold-text mb-4">
                {data.overline}
              </p>
            )}
            <h2 className="text-[var(--kc-text-h2)] font-[family-name:var(--kc-font-heading)] font-bold text-kc-white mb-4">
              {data.heading}
            </h2>
            {data.subheading && (
              <p className="text-[var(--kc-text-body-lg)] text-kc-gray-400 mb-8">
                {data.subheading}
              </p>
            )}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href={data.primaryCta.href} variant="primary" size="lg">
                {data.primaryCta.label}
              </Button>
              {data.secondaryCta && (
                <Button href={data.secondaryCta.href} variant="secondary" size="lg">
                  {data.secondaryCta.label}
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
