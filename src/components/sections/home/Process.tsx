"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const STEPS = [
  { number: "01", title: "Discovery", description: "We audit your digital presence, analyze competitors, and understand your business goals inside out." },
  { number: "02", title: "Strategy", description: "A custom, data-driven roadmap tailored to your objectives — no templates, no cookie-cutter plans." },
  { number: "03", title: "Execution", description: "Our team of specialists launches, designs, and builds with precision. Every detail matters." },
  { number: "04", title: "Scale", description: "We measure, optimize, and double down on what works. Your growth compounds month over month." },
];

export function Process() {
  return (
    <section className="kc-section relative overflow-hidden">
      <div className="kc-container">
        <SectionHeading
          overline="Our Process"
          heading="How We Drive Results."
          subheading="A proven 4-step framework that turns strategy into measurable business growth."
          align="center"
          className="mb-16"
        />

        <div className="kc-grid relative">
          <div className="hidden lg:block absolute top-16 left-[8.33%] right-[8.33%] h-[3px] bg-gradient-to-r from-kc-gold/5 via-kc-gold/20 to-kc-gold/5 rounded-full" />

          {STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.12 }}
              className="lg:col-span-3 md:col-span-6 col-span-12 text-center"
            >
              <div className="relative inline-flex items-center justify-center w-32 h-32 rounded-full border border-kc-gold/20 bg-kc-black mb-8">
                <span className="text-4xl font-[family-name:var(--kc-font-display)] kc-gold-text">{step.number}</span>
                <div className="absolute inset-0 rounded-full bg-kc-gold/5 blur-2xl" />
              </div>
              <h3 className="text-[var(--kc-text-h3)] font-[family-name:var(--kc-font-heading)] font-semibold text-kc-white mb-4">{step.title}</h3>
              <p className="text-[var(--kc-text-body)] text-kc-gray-400 leading-[var(--kc-leading-relaxed)]">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
