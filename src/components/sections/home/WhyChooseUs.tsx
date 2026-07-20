"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WHY_CHOOSE_US } from "@/constants/home";

export function WhyChooseUs() {
  return (
    <section className="kc-section relative overflow-hidden">
      <div className="kc-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Decorative panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block"
          >
            <div className="relative aspect-[4/5] rounded-[var(--kc-radius-2xl)] overflow-hidden border border-kc-white/10 bg-gradient-to-br from-kc-black-elevated to-kc-black">
              <div className="absolute inset-0 bg-gradient-to-tr from-kc-gold/8 via-transparent to-kc-gold/3" />
              <div className="absolute inset-0 opacity-[0.04]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z' fill='none' stroke='%23C9A84C' stroke-width='0.5'/%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px'
              }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-48 h-48 rounded-full bg-kc-gold/5 blur-3xl" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[8rem] font-display kc-gold-text opacity-[0.08] select-none">KC</span>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-kc-black/80 to-transparent">
                <p className="text-[var(--kc-text-overline)] text-kc-gray-500 uppercase tracking-[var(--kc-tracking-widest)]">
                  Why Us
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <div>
            <SectionHeading
              overline="Why KlickChamp"
              heading="Why Leading Brands Choose Us."
              subheading="We're not the cheapest. We're not the biggest. We're the ones who deliver."
              className="mb-12"
            />

            <div className="space-y-10">
              {WHY_CHOOSE_US.slice(0, 4).map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                    delay: index * 0.08,
                  }}
                  className="flex gap-6 group"
                >
                  <div className="text-4xl flex-shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-[var(--kc-text-h4)] font-[family-name:var(--kc-font-heading)] font-semibold text-kc-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[var(--kc-text-body)] text-kc-gray-400 leading-[var(--kc-leading-relaxed)]">
                      {item.description}
                    </p>
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
