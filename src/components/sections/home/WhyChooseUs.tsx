"use client";

import { motion } from "framer-motion";
import { WHY_CHOOSE_US } from "@/constants/home";

const featureIcons: Record<string, string> = {
  "🎯": "M12 3l2 6h6l-4.5 4 1.5 6-5-3.5L7 19l1.5-6L4 9h6z",
  "🏆": "M8 21h8M12 17v4M8 3h8l-1 9H9z",
  "📈": "M3 20h18M6 14l4-6 4 4 5-7",
  "🤝": "M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2M15 3a4 4 0 100 8 4 4 0 000-8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75",
  "⚡": "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  "🔒": "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
};

export function WhyChooseUs() {
  return (
    <section className="kc-section relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-kc-white/5 to-transparent" />

      <div className="kc-container">
        <div className="kc-grid items-start">
          <div className="lg:col-span-4 col-span-12 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-overline font-heading kc-gold-text mb-8">Why KlickChamp</p>
              <h2 className="text-display font-display text-kc-white">
                Why Leading Brands
                <br />
                <span className="kc-gold-text">Choose Us.</span>
              </h2>
            </motion.div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 col-span-12">
            <div className="space-y-10">
              {WHY_CHOOSE_US.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-kc-gold/10 border border-kc-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-6 h-6 text-kc-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={featureIcons[item.icon] || featureIcons["🎯"]} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[var(--kc-text-h3)] font-heading font-bold text-kc-white mb-2">{item.title}</h3>
                      <p className="text-[var(--kc-text-body)] text-kc-gray-400 leading-relaxed">{item.description}</p>
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
