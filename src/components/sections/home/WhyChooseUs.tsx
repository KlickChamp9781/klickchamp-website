"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WHY_CHOOSE_US } from "@/constants/home";

export function WhyChooseUs() {
  return (
    <section className="kc-section relative overflow-hidden">
      <div className="kc-container">
        <div className="kc-grid items-center">
          {/* Left — Decorative panel: 5 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 col-span-12 hidden lg:block"
          >
            <div className="relative aspect-[4/5] rounded-[var(--kc-radius-2xl)] overflow-hidden border border-kc-white/10 bg-gradient-to-br from-kc-black-elevated to-kc-black">
              <div className="absolute inset-0 bg-gradient-to-tr from-kc-gold/8 via-transparent to-kc-gold/3" />
              <div className="absolute inset-0 opacity-[0.04]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z' fill='none' stroke='%23C9A84C' stroke-width='0.5'/%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px'
              }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-kc-gold/5 blur-3xl" />
                <span className="absolute text-[8rem] font-display kc-gold-text opacity-[0.08] select-none">KC</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-kc-black/80 to-transparent">
                <p className="text-overline text-kc-gray-500 uppercase tracking-[var(--kc-tracking-widest)]">Why Us</p>
              </div>
            </div>
          </motion.div>

          {/* Right — Content: 7 columns */}
          <div className="lg:col-span-7 col-span-12">
            <SectionHeading
              overline="Why KlickChamp"
              heading="Why Leading Brands Choose Us."
              subheading="We're not the cheapest. We're not the biggest. We're the ones who deliver."
              className="mb-16"
            />

            <div className="space-y-8">
              {WHY_CHOOSE_US.slice(0, 4).map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
                  className="flex gap-8 group"
                >
                  <div className="text-4xl flex-shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-[var(--kc-text-h4)] font-[family-name:var(--kc-font-heading)] font-semibold text-kc-white mb-4">
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
