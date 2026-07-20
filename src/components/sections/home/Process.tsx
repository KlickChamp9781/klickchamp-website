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
          className="mb-16"
        >
          <p className="text-overline font-heading kc-gold-text mb-8">Our Process</p>
          <h2 className="text-display font-display text-kc-white">
            How We Drive
            <br />
            <span className="kc-gold-text">Results.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.12 }}
              className="relative flex gap-8 pb-16 last:pb-0"
            >
              {/* Timeline dot + connector */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-kc-gold/10 border border-kc-gold/30 flex items-center justify-center z-10">
                  <span className="text-lg font-heading font-bold kc-gold-text">{step.number}</span>
                </div>
                {index < STEPS.length - 1 && (
                  <div className="w-px flex-1 bg-gradient-to-b from-kc-gold/30 to-transparent mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="pb-8 border-b border-kc-white/5 last:border-b-0 flex-1">
                <h3 className="text-[var(--kc-text-h3)] font-heading font-bold text-kc-white mb-3">{step.title}</h3>
                <p className="text-[var(--kc-text-body)] text-kc-gray-400 leading-relaxed max-w-2xl">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
