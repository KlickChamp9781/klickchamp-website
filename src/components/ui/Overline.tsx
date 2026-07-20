"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type OverlineProps = {
  children: string;
  className?: string;
  gold?: boolean;
};

export function Overline({ children, className, gold = true }: OverlineProps) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "text-overline font-[family-name:var(--kc-font-heading)]",
        gold ? "kc-gold-text" : "text-kc-gray-400",
        className
      )}
    >
      {children}
    </motion.p>
  );
}
