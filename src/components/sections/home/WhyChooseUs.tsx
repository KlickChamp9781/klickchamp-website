"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WHY_CHOOSE_US } from "@/constants/home";

export function WhyChooseUs() {
  return (
    <section className="kc-section relative">
      <div className="kc-container">
        <SectionHeading
          overline="Why KlickChamp"
          heading="Why Leading Brands Choose Us"
          subheading="We're not the cheapest. We're not the biggest. We're the ones who deliver."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.08,
              }}
              className="group"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-[var(--kc-text-h4)] font-[family-name:var(--kc-font-heading)] font-semibold text-kc-white mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-kc-gray-400 leading-[var(--kc-leading-relaxed)]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
