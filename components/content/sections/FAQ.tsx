"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Heading } from "@/components/content/Heading";
import { SectionWrapper } from "@/components/content/SectionWrapper";
import { Container } from "@/components/content/Container";
import type { FAQSection as FAQSectionType } from "@/lib/content/types";

function FAQItem({ faq, isOpen, onToggle }: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-6 text-left text-lg font-medium transition-colors hover:text-primary cursor-pointer"
      >
        <span className="pr-4">{faq.question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-muted-foreground leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export function FAQSection({ heading, headingGold, faqs }: FAQSectionType) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper bordered>
      <Container maxWidth="3xl">
        <Heading gold={headingGold ?? "questions."}>{heading ?? "Frequently asked"}</Heading>
        <div className="divide-y divide-[rgb(var(--border))]">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
