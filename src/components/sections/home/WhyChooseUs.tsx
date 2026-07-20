"use client";

import { motion } from "framer-motion";
import { WHY_CHOOSE_US } from "@/constants/home";

export function WhyChooseUs() {
  return (
    <section className="kc-section relative overflow-hidden bg-kc-black-pure">
      <div className="kc-divider absolute top-0 left-8 right-8" />

      <div className="kc-container">
        <div className="kc-grid items-start gap-16">
          <div className="lg:col-span-4 col-span-12 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-overline font-heading text-kc-gray-500 mb-8 tracking-[0.25em]">
                Why KlickChamp
              </p>
              <h2 className="text-display font-display text-kc-white">
                Why Leading Brands
                <br />
                <span className="kc-gold-text">Choose Us.</span>
              </h2>
            </motion.div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 col-span-12">
            <div className="space-y-14">
              {WHY_CHOOSE_US.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
                  className="kc-border-bottom pb-14 last:border-b-0 last:pb-0"
                >
                  <div className="flex items-start gap-8">
                    <span className="text-2xl font-heading font-bold text-kc-white/10 leading-none flex-shrink-0 w-10 select-none">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-kc-white mb-3">{item.title}</h3>
                      <p className="text-base font-heading font-medium text-kc-gray-500 leading-relaxed">{item.description}</p>
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
