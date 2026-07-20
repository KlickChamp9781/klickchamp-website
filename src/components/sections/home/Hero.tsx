"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-kc-black via-kc-black to-kc-black-pure" />

      <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_center,_var(--kc-gold)_0%,_transparent_60%)] opacity-[0.06]" />

      <div className="kc-container relative z-10 w-full">
        <div className="kc-grid items-center min-h-screen">
          {/* Left — Content */}
          <div className="lg:col-span-6 col-span-12 flex flex-col justify-center py-32">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-overline font-heading kc-gold-text mb-8"
            >
              Premium Digital Marketing Agency — Kolkata, India
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
              className="text-[var(--kc-text-body-xl)] text-kc-gray-400 leading-[var(--kc-leading-relaxed)] mt-10 max-w-xl"
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
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                View Services
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-16 flex items-center gap-8 flex-wrap"
            >
              <div className="flex items-center gap-3 text-[var(--kc-text-body-sm)] text-kc-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-kc-success" />
                150+ Brands Served
              </div>
              <div className="w-px h-4 bg-kc-white/10" />
              <div className="flex items-center gap-3 text-[var(--kc-text-body-sm)] text-kc-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-kc-success" />
                98% Client Retention
              </div>
              <div className="w-px h-4 bg-kc-white/10" />
              <div className="flex items-center gap-3 text-[var(--kc-text-body-sm)] text-kc-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-kc-success" />
                3.2x Avg. ROI
              </div>
            </motion.div>
          </div>

          {/* Right — Branded Visual */}
          <div className="lg:col-span-6 col-span-12 hidden lg:flex items-center justify-center h-screen relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative w-full max-w-[500px] aspect-square"
            >
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-kc-gold/10 animate-[spin-slow_30s_linear_infinite]" />
              <div className="absolute inset-[10%] rounded-full border border-kc-gold/20 animate-[spin-slow_20s_linear_infinite_reverse]" />

              {/* Orbiting dots */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                  <div
                    key={angle}
                    className="absolute top-0 left-1/2 -translate-x-1/2"
                    style={{ transform: `rotate(${angle}deg) translateY(0px)`, transformOrigin: "0 50%" }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        background: angle % 90 === 0 ? "var(--kc-gold)" : "rgba(201,168,76,0.3)",
                        boxShadow: angle % 90 === 0 ? "0 0 12px rgba(201,168,76,0.6)" : "none",
                      }}
                    />
                  </div>
                ))}
              </motion.div>

              {/* Central K monogram */}
              <div className="absolute inset-[20%] flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--kc-gold)_0%,_transparent_60%)] opacity-[0.12] blur-2xl animate-[pulse-glow_4s_ease-in-out_infinite]" />
                  <span className="text-[clamp(6rem,12vw,12rem)] font-display kc-gold-text select-none leading-none">
                    K
                  </span>
                </div>
              </div>

              {/* Decorative arcs */}
              <svg className="absolute inset-[5%] w-[90%] h-[90%] animate-[spin-slow_40s_linear_infinite]" viewBox="0 0 100 100" fill="none">
                <path d="M50 5 A45 45 0 1 1 49.99 5" stroke="rgba(201,168,76,0.12)" strokeWidth="0.5" />
                <path d="M50 15 A35 35 0 1 1 49.99 15" stroke="rgba(201,168,76,0.08)" strokeWidth="0.3" />
              </svg>

              {/* Gold accent lines */}
              <div className="absolute top-[15%] right-[10%] w-16 h-px bg-gradient-to-r from-transparent to-kc-gold/40" />
              <div className="absolute bottom-[20%] left-[8%] w-24 h-px bg-gradient-to-r from-kc-gold/40 to-transparent" />
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
        <span className="text-[11px] uppercase tracking-[var(--kc-tracking-widest)] text-kc-gray-600 font-heading">
          Scroll
        </span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="w-px h-8 bg-gradient-to-b from-kc-gold/50 to-transparent" />
      </motion.div>
    </section>
  );
}
