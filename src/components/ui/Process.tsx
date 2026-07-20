"use client";

import { motion } from "framer-motion";
import type { ProcessStep } from "@/types";

type ProcessProps = {
  steps: ProcessStep[];
};

export function Process({ steps }: ProcessProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map((step, index) => (
        <motion.div
          key={step.step}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
            delay: index * 0.1,
          }}
          className="relative"
        >
          <div className="text-6xl font-[family-name:var(--kc-font-display)] text-kc-gold/10 mb-4">
            {String(step.step).padStart(2, "0")}
          </div>
          <h3 className="text-lg font-[family-name:var(--kc-font-heading)] font-semibold text-kc-white mb-2">
            {step.title}
          </h3>
          <p className="text-sm text-kc-gray-400 leading-[var(--kc-leading-relaxed)]">
            {step.description}
          </p>
          {index < steps.length - 1 && (
            <div className="hidden lg:block absolute top-8 right-0 w-16 h-px bg-gradient-to-r from-kc-gold/30 to-transparent translate-x-full" />
          )}
        </motion.div>
      ))}
    </div>
  );
}
