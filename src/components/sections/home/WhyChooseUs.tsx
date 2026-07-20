"use client";

import { motion } from "framer-motion";
import { WHY_CHOOSE_US } from "@/constants/home";

export function WhyChooseUs() {
  return (
    <section className="kc-section relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-kc-white/5 to-transparent" />

      <div className="kc-container">
        <div className="kc-grid items-start">
          <div className="lg:col-span-5 col-span-12 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-overline font-[family-name:var(--kc-font-heading)] kc-gold-text mb-8">
                Why KlickChamp
              </p>
              <h2 className="text-display font-display text-kc-white">
                Why Leading Brands
                <br />
                <span className="kc-gold-text">Choose Us.</span>
              </h2>
              <p className="text-[var(--kc-text-body-lg)] text-kc-gray-400 leading-[var(--kc-leading-relaxed)] mt-8 max-w-md">
                We&apos;re not the cheapest. We&apos;re not the biggest. We&apos;re the ones who deliver.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 col-span-12">
            <div className="space-y-16">
              {WHY_CHOOSE_US.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
                  className="group"
                >
                  <div className="flex items-start gap-8">
                    <span className="text-6xl md:text-7xl font-display text-kc-white/[0.06] leading-none flex-shrink-0 mt-[-4px] select-none">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="pt-2">
                      <h3 className="text-[var(--kc-text-h3)] font-[family-name:var(--kc-font-heading)] font-bold text-kc-white mb-4">
                        {item.title}
                      </h3>
                      <p className="text-[var(--kc-text-body)] text-kc-gray-400 leading-[var(--kc-leading-relaxed)]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
