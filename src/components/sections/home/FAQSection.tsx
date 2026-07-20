"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQ } from "@/components/ui/FAQ";
import { HOME_FAQS } from "@/constants/home";

export function FAQSection() {
  return (
    <section className="kc-section relative">
      <div className="kc-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5">
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
              className="mt-10 text-[var(--kc-text-body)] text-kc-gray-500 leading-[var(--kc-leading-relaxed)]"
            >
              Still have questions? <a href="/contact" className="text-kc-gold hover:underline">Contact us</a> and we&apos;ll get back to you within 24 hours.
            </motion.p>
          </div>
          <div className="lg:col-span-7">
            <FAQ faqs={HOME_FAQS} />
          </div>
        </div>
      </div>
    </section>
  );
}
