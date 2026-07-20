"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  overline?: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
  className?: string;
  headingClassName?: string;
};

export function SectionHeading({
  overline,
  heading,
  subheading,
  align = "left",
  className,
  headingClassName,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "max-w-4xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {overline && (
        <p className="text-overline font-[family-name:var(--kc-font-heading)] kc-gold-text mb-5">
          {overline}
        </p>
      )}
      <h2
        className={cn(
          "text-[var(--kc-text-h2)] font-[family-name:var(--kc-font-heading)] font-bold text-kc-white leading-[var(--kc-leading-tight)] tracking-[var(--kc-tracking-tight)]",
          headingClassName
        )}
      >
        {heading}
      </h2>
      {subheading && (
        <p className="mt-5 text-[var(--kc-text-body-xl)] text-kc-gray-400 leading-[var(--kc-leading-relaxed)] max-w-3xl">
          {subheading}
        </p>
      )}
    </motion.div>
  );
}
