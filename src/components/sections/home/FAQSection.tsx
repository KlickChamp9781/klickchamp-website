"use client";

import { motion } from "framer-motion";
import { FAQ } from "@/components/ui/FAQ";
import { HOME_FAQS } from "@/constants/home";

export function FAQSection() {
  return (
    <section className="kc-section relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-kc-white/5 to-transparent" />

      <div className="kc-container">
        <div className="kc-grid">
          <div className="lg:col-span-5 col-span-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:sticky lg:top-32"
            >
              <p className="text-overline font-[family-name:var(--kc-font-heading)] kc-gold-text mb-8">
                FAQ
              </p>
              <h2 className="text-display font-display text-kc-white">
                Frequently Asked
                <br />
                <span className="kc-gold-text">Questions.</span>
              </h2>
              <p className="text-[var(--kc-text-body)] text-kc-gray-500 leading-[var(--kc-leading-relaxed)] mt-8 max-w-sm">
                Still have questions? <a href="/contact" className="text-kc-gold hover:underline">Contact us</a> and we&apos;ll get back to you within 24 hours.
              </p>
            </motion.div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 col-span-12 mt-12 lg:mt-0">
            <FAQ faqs={HOME_FAQS} />
          </div>
        </div>
      </div>
    </section>
  );
}
