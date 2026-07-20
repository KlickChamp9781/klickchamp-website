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
    <section className="kc-section relative overflow-hidden bg-kc-black-pure">
      <div className="kc-divider absolute top-0 left-8 right-8" />

      <div className="kc-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="text-overline font-heading text-kc-gray-500 mb-8 tracking-[0.25em]">
            Our Process
          </p>
          <h2 className="text-display font-display text-kc-white">
            How We Drive
            <br />
            <span className="kc-gold-text">Results.</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              className="relative flex gap-10 pb-20 last:pb-0"
            >
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 rounded-full border border-kc-white/10 flex items-center justify-center bg-kc-black-pure z-10">
                  <span className="text-base font-heading font-bold text-kc-gray-400">{step.number}</span>
                </div>
                {index < STEPS.length - 1 && (
                  <div className="w-px flex-1 bg-gradient-to-b from-kc-white/[0.06] to-transparent mt-2" />
                )}
              </div>
              <div className="pb-10 kc-border-bottom last:border-b-0 flex-1">
                <h3 className="text-2xl font-heading font-bold text-kc-white mb-4">{step.title}</h3>
                <p className="text-base font-heading font-medium text-kc-gray-500 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
