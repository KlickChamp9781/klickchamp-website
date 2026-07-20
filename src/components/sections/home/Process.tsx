"use client";

import { motion } from "framer-motion";

const STEPS = [
  { number: "01", title: "Discovery", description: "We audit your digital presence, analyze competitors, and understand your business goals inside out." },
  { number: "02", title: "Strategy", description: "A custom, data-driven roadmap tailored to your objectives — no templates, no cookie-cutter plans." },
  { number: "03", title: "Execution", description: "Our team of specialists launches, designs, and builds with precision. Every detail matters." },
  { number: "04", title: "Scale", description: "We measure, optimize, and double down on what works. Your growth compounds month over month." },
];

export function Process() {
  return (
    <section className="kc-section relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-kc-white/5 to-transparent" />

      <div className="kc-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 max-w-3xl"
        >
          <p className="text-overline font-[family-name:var(--kc-font-heading)] kc-gold-text mb-8">
            Our Process
          </p>
          <h2 className="text-display font-display text-kc-white">
            How We Drive
            <br />
            <span className="kc-gold-text">Results.</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-kc-gold/20 via-kc-gold/10 to-transparent" />

          <div className="kc-grid">
            {STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.12 }}
                className="lg:col-span-3 md:col-span-6 col-span-12"
              >
                <span className="text-7xl md:text-8xl font-display kc-gold-text opacity-40 leading-none block mb-8 select-none">
                  {step.number}
                </span>
                <h3 className="text-[var(--kc-text-h3)] font-[family-name:var(--kc-font-heading)] font-bold text-kc-white mb-4">
                  {step.title}
                </h3>
                <p className="text-[var(--kc-text-body)] text-kc-gray-400 leading-[var(--kc-leading-relaxed)]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
