"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQ } from "@/components/ui/FAQ";
import { HOME_FAQS } from "@/constants/home";

export function FAQSection() {
  return (
    <section className="kc-section relative">
      <div className="kc-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <SectionHeading
            overline="FAQ"
            heading="Frequently Asked Questions"
            subheading="Everything you need to know about working with us."
          />

          <div>
            <FAQ faqs={HOME_FAQS} />
          </div>
        </div>
      </div>
    </section>
  );
}
