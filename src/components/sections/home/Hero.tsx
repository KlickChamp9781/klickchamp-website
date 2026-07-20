"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-kc-black-pure">
      <div className="absolute inset-0 bg-gradient-to-b from-kc-black via-kc-black to-kc-black-pure" />
      <div className="absolute top-0 right-0 w-1/4 h-full bg-[radial-gradient(ellipse_at_center,_var(--kc-gold)_0%,_transparent_60%)] opacity-[0.03]" />

      <div className="kc-container relative z-10 w-full">
        <div className="kc-grid items-center min-h-screen">
          <div className="lg:col-span-7 col-span-12 flex flex-col justify-center py-32">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-overline font-heading text-kc-gray-500 mb-8 tracking-[0.25em]"
            >
              Premium Digital Marketing Agency
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="text-hero font-display text-kc-white"
            >
              We Build Digital
              <br />
              <span className="kc-gold-text">Empires.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="text-[var(--kc-text-body-xl)] text-kc-gray-500 leading-relaxed mt-10 max-w-xl"
            >
              Data-driven strategies. Premium execution. Measurable growth.
              No cookie-cutter campaigns — just relentless focus on your ROI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
              className="flex flex-col sm:flex-row items-start gap-5 mt-12"
            >
              <Button href="/contact" variant="primary" size="lg">
                Start Your Growth
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                View Services
              </Button>
            </motion.div>
          </div>

          <div className="lg:col-span-5 col-span-12 hidden lg:flex items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="relative w-full max-w-[380px] aspect-square"
            >
              <div className="absolute inset-[8%] rounded-full border border-kc-white/[0.04] animate-[spin-slow_40s_linear_infinite]" />
              <div className="absolute inset-[18%] rounded-full border border-kc-white/[0.03] animate-[spin-slow_25s_linear_infinite_reverse]" />

              <div className="absolute inset-[28%] flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--kc-gold)_0%,_transparent_60%)] opacity-[0.08] blur-xl animate-[pulse-soft_5s_ease-in-out_infinite]" />
                <span className="text-[clamp(5rem,10vw,9rem)] font-display text-kc-white/[0.04] select-none leading-none">
                  K
                </span>
              </div>

              <svg className="absolute inset-[5%] w-[90%] h-[90%] animate-[spin-slow_50s_linear_infinite]" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="45" stroke="rgba(255,255,255,0.03)" strokeWidth="0.3" strokeDasharray="4 8" />
                <circle cx="50" cy="50" r="35" stroke="rgba(201,168,76,0.06)" strokeWidth="0.3" strokeDasharray="2 6" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-kc-gray-700 font-heading font-medium">
          Scroll
        </span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="w-px h-8 bg-gradient-to-b from-kc-gray-600 to-transparent" />
      </motion.div>
    </section>
  );
}
