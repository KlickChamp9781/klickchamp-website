"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQ } from "@/components/ui/FAQ";
import { HOME_FAQS } from "@/constants/home";

export function FAQSection() {
  return (
    <section className="kc-section relative">
      <div className="kc-container">
        <div className="kc-grid">
          <div className="lg:col-span-5 col-span-12">
            <SectionHeading
              overline="FAQ"
              heading="Frequently Asked Questions."
              subheading="Everything you need to know about working with us."
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-16 text-[var(--kc-text-body)] text-kc-gray-500 leading-[var(--kc-leading-relaxed)]"
            >
              Still have questions? <a href="/contact" className="text-kc-gold hover:underline">Contact us</a> and we&apos;ll get back to you within 24 hours.
            </motion.p>
          </div>
          <div className="lg:col-span-7 col-span-12">
            <FAQ faqs={HOME_FAQS} />
          </div>
        </div>
      </div>
    </section>
  );
}
