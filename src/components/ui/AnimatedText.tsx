"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import type { AnimationVariant } from "@/types";

type AnimatedTextProps = {
  children: string;
  className?: string;
  variant?: "hero" | "display" | "heading" | "subheading" | "body";
  animation?: AnimationVariant;
  delay?: number;
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
};

const variantClasses = {
  hero: "text-hero font-display",
  display: "text-display font-display",
  heading: "text-[var(--kc-text-h2)] font-[family-name:var(--kc-font-heading)] font-bold",
  subheading: "text-[var(--kc-text-h4)] font-[family-name:var(--kc-font-heading)] font-medium",
  body: "text-[var(--kc-text-body-lg)] font-[family-name:var(--kc-font-body)]",
};

export function AnimatedText({
  children,
  className,
  variant = "heading",
  animation = "fadeUp",
  delay = 0,
  tag = "h2",
}: AnimatedTextProps) {
  const Tag = tag;

  const animationProps = {
    fadeUp: { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } },
    fadeIn: { initial: { opacity: 0 }, animate: { opacity: 1 } },
    fadeLeft: { initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 } },
    fadeRight: { initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 } },
    scaleUp: { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 } },
    textReveal: { initial: { opacity: 0, y: "100%" }, animate: { opacity: 1, y: "0%" } },
    reveal: { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } },
    stagger: { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } },
    slideIn: { initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 } },
    parallax: { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } },
    imageZoom: { initial: { opacity: 0, scale: 1.1 }, animate: { opacity: 1, scale: 1 } },
    counterAnimation: { initial: { opacity: 0 }, animate: { opacity: 1 } },
  };

  const anim = animationProps[animation] || animationProps.fadeUp;

  return (
    <motion.div
      initial={anim.initial}
      whileInView={anim.animate}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
    >
      <Tag className={cn(variantClasses[variant], className)}>
        {children}
      </Tag>
    </motion.div>
  );
}
