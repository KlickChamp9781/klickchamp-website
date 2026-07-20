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
    <section className={cn("relative bg-kc-black-pure", className)}>
      <div className="kc-container" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
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
              <div className="text-[var(--kc-text-display)] font-heading font-bold text-kc-white leading-none mb-4">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <h3 className="text-xl font-heading font-bold text-kc-gray-300 mb-3">
                {stat.label}
              </h3>
              {stat.description && (
                <p className="text-sm text-kc-gray-600 font-heading font-medium">{stat.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
