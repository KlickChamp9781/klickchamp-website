"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HOME_FAQS } from "@/lib/data/home-faqs";

export function FAQ() {
  return (
    <section className="py-20 lg:py-30 bg-card">
      <div className="container-main">
        <div className="grid-12 gap-12 lg:gap-16">
          <ScrollReveal className="col-span-12 lg:col-span-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] mb-6">
              Frequently asked <span className="text-gradient-gold">questions.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Everything you need to know about working with KlickChamp.
            </p>
          </ScrollReveal>

          <ScrollReveal className="col-span-12 lg:col-span-8" delay={0.2}>
            <Accordion type="single" collapsible className="border-t border-border">
              {HOME_FAQS.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
