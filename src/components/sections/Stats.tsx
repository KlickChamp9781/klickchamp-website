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
      <div className="kc-container py-14 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.1,
              }}
              className="text-center"
            >
              <div className="text-[var(--kc-text-display)] font-[family-name:var(--kc-font-display)] kc-gold-text mb-2">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                />
              </div>
              <h3 className="text-[var(--kc-text-h4)] font-[family-name:var(--kc-font-heading)] font-semibold text-kc-white mb-1">
                {stat.label}
              </h3>
              {stat.description && (
                <p className="text-[var(--kc-text-body-sm)] text-kc-gray-500">{stat.description}</p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
