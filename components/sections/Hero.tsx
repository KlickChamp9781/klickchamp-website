"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_NAME } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-28 lg:overflow-hidden bg-background">
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="container-main h-full">
          <div className="grid-12 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="hairline-v" />
            ))}
          </div>
        </div>
      </div>

      {/* Diagonal line accents */}
      <motion.div
        className="absolute top-0 right-0 w-px h-[200vh] bg-gradient-to-b from-transparent via-[rgb(var(--primary))]/10 to-transparent origin-top-right rotate-[25deg]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      />
      <motion.div
        className="absolute top-0 right-32 w-px h-[200vh] bg-gradient-to-b from-transparent via-[rgb(var(--primary))]/5 to-transparent origin-top-right rotate-[25deg]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.8 }}
      />

      <div className="container-main relative z-10">
        <div className="grid-12 items-center gap-y-12 lg:gap-x-16">
          {/* LEFT COLUMN — Text content */}
          <div className="col-span-12 lg:col-span-6">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 border border-[rgb(var(--primary))]/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-primary">
                <span className="w-2 h-2 bg-primary animate-pulse" />
                Digital Marketing Agency in Kolkata
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.03em] mb-6 max-w-3xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              We Engineer{" "}
              <span className="text-gradient-gold">Digital</span>
              <br />
              Excellence.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {SITE_NAME} is a precision-driven digital marketing agency in Kolkata crafting
              high-performance SEO strategies, Google Ads campaigns, stunning web design, and measurable
              results for ambitious brands across India.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Button size="lg" asChild>
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="pt-8 border-t border-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Trusted by forward-thinking brands
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN — Brand visual */}
          <div className="col-span-12 lg:col-span-6">
            <motion.div
              className="relative w-full aspect-[4/3] lg:aspect-[5/4] overflow-hidden"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Image
                src="/images/3d-illustration-cartoon-man-holding-megaphone-blogger-character-announcing-loudspeaker-Photoroom.png"
                alt="Digital marketing announcement"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
