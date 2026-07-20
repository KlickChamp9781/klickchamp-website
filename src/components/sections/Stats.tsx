"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import type { Stat } from "@/types";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

type StatsProps = {
  stats: Stat[];
  className?: string;
};

export function Stats({ stats, className }: StatsProps) {
  return (
    <section className={cn("relative", className)}>
      <div className="kc-container" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="kc-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              className="text-center lg:col-span-3 col-span-6"
            >
              <div className="text-[var(--kc-text-display)] font-[family-name:var(--kc-font-display)] kc-gold-text mb-4">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <h3 className="text-[var(--kc-text-h4)] font-[family-name:var(--kc-font-heading)] font-semibold text-kc-white mb-4">
                {stat.label}
              </h3>
              {stat.description && (
                <p className="text-[var(--kc-text-body-sm)] text-kc-gray-500">{stat.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
