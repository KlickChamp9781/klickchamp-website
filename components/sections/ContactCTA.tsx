"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { PHONE, WHATSAPP } from "@/lib/constants";

export function ContactCTA() {
  return (
    <section className="py-20 lg:py-30 bg-secondary text-secondary-foreground">
      <div className="container-main">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em] mb-6">
              Ready to <span className="text-gradient-gold">grow?</span>
            </h2>
            <p className="text-[rgb(var(--secondary-foreground))]/60 text-lg mb-12 leading-relaxed">
              Let&apos;s discuss how KlickChamp can engineer your next phase of growth.
              Free consultation, no obligations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={`tel:${PHONE}`}>Call {PHONE}</a>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
