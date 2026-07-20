"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HOME_FAQS } from "@/constants/home";
import type { FAQ } from "@/types";

function FAQItem({ faq, index, isOpen, onToggle }: { faq: FAQ; index: number; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
      className="border-b border-kc-white/5 last:border-b-0"
    >
      <button onClick={onToggle} className="w-full py-8 flex items-center justify-between text-left cursor-pointer group">
        <span className="text-[var(--kc-text-body-xl)] font-heading font-medium text-kc-white pr-8 group-hover:text-kc-gold transition-colors duration-300">
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="w-8 h-8 flex-shrink-0 text-kc-gold/60 group-hover:text-kc-gold transition-colors"
        >
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-[var(--kc-text-body)] text-kc-gray-400 leading-relaxed max-w-2xl">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
              <p className="text-overline font-heading kc-gold-text mb-8">FAQ</p>
              <h2 className="text-display font-display text-kc-white">
                Frequently Asked
                <br />
                <span className="kc-gold-text">Questions.</span>
              </h2>
              <p className="text-[var(--kc-text-body)] text-kc-gray-500 leading-relaxed mt-8 max-w-sm">
                Still have questions? <a href="/contact" className="text-kc-gold hover:underline transition-colors">Contact us</a> and we&apos;ll get back to you within 24 hours.
              </p>
            </motion.div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 col-span-12 mt-12 lg:mt-0">
            {HOME_FAQS.map((faq, index) => (
              <FAQItem key={faq.question} faq={faq} index={index} isOpen={openIndex === index} onToggle={() => setOpenIndex(openIndex === index ? null : index)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
