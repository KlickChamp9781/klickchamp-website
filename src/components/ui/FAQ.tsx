"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { FAQ } from "@/types";

type FAQItemProps = {
  faq: FAQ;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
};

function FAQItem({ faq, index, isOpen, onToggle }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
      className="border-b border-kc-white/5"
    >
      <button
        onClick={onToggle}
        className="w-full py-8 flex items-center justify-between text-left cursor-pointer"
      >
        <span className="text-[var(--kc-text-body-xl)] font-[family-name:var(--kc-font-heading)] font-medium text-kc-white pr-8">
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-7 h-7 flex-shrink-0 text-kc-gold"
        >
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-[var(--kc-text-body)] text-kc-gray-400 leading-[var(--kc-leading-relaxed)]">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

type FAQProps = {
  faqs: FAQ[];
};

export function FAQ({ faqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      {faqs.map((faq, index) => (
        <FAQItem
          key={faq.question}
          faq={faq}
          index={index}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
