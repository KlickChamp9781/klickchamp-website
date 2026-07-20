"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const STEPS = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We audit your digital presence, analyze competitors, and understand your business goals inside out.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "A custom, data-driven roadmap tailored to your objectives — no templates, no cookie-cutter plans.",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "Our team of specialists launches, designs, and builds with precision. Every detail matters.",
  },
  {
    number: "04",
    title: "Scale",
    description:
      "We measure, optimize, and double down on what works. Your growth compounds month over month.",
  },
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

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-[3px] bg-gradient-to-r from-kc-gold/5 via-kc-gold/20 to-kc-gold/5 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.15,
                }}
                className="relative text-center lg:text-left"
              >
                {/* Step circle */}
                <div className="relative inline-flex items-center justify-center w-32 h-32 rounded-full border border-kc-gold/20 bg-kc-black mb-8 mx-auto lg:mx-0">
                  <span className="text-4xl font-[family-name:var(--kc-font-display)] kc-gold-text">
                    {step.number}
                  </span>
                  <div className="absolute inset-0 rounded-full bg-kc-gold/5 blur-2xl" />
                </div>

                <h3 className="text-[var(--kc-text-h3)] font-[family-name:var(--kc-font-heading)] font-semibold text-kc-white mb-4">
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
