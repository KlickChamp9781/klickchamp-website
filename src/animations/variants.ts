/* ================================================================
   KLICKCHAMP — FRAMER MOTION ANIMATION VARIANTS
   Reusable animation presets for consistent motion design
   ================================================================ */

import type { Variants, Transition } from "framer-motion";

// --- EASING & TIMING ---

export const EASE = {
  outExpo: [0.16, 1, 0.3, 1] as const,
  outQuart: [0.25, 1, 0.5, 1] as const,
  inOutQuint: [0.83, 0, 0.17, 1] as const,
  spring: { type: "spring", stiffness: 100, damping: 20 } as const,
  springStiff: { type: "spring", stiffness: 200, damping: 25 } as const,
} as const;

// --- DURATION ---

export const DURATION = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.7,
  slower: 1.0,
} as const;

// --- TRANSITIONS ---

export const defaultTransition: Transition = {
  duration: DURATION.normal,
  ease: EASE.outExpo,
};

export const staggerTransition: Transition = {
  staggerChildren: 0.08,
};

export const staggerFastTransition: Transition = {
  staggerChildren: 0.05,
};

// --- FADE VARIANTS ---

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: defaultTransition,
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

// --- SCALE VARIANTS ---

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: defaultTransition,
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { ...defaultTransition, duration: DURATION.slow },
  },
};

// --- TEXT REVEAL ---

export const textReveal: Variants = {
  hidden: {
    opacity: 0,
    y: "100%",
  },
  visible: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: DURATION.slow,
      ease: EASE.outExpo,
    },
  },
};

export const charReveal: Variants = {
  hidden: { opacity: 0, y: "100%" },
  visible: (i: number) => ({
    opacity: 1,
    y: "0%",
    transition: {
      duration: DURATION.normal,
      ease: EASE.outExpo,
      delay: i * 0.03,
    },
  }),
};

// --- STAGGER CONTAINER ---

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

// --- PARALLAX ---

export const parallaxUp = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.slower,
      ease: EASE.outExpo,
    },
  },
};

// --- IMAGE REVEAL ---

export const imageReveal: Variants = {
  hidden: {
    clipPath: "inset(100% 0 0 0)",
  },
  visible: {
    clipPath: "inset(0% 0 0 0)",
    transition: {
      duration: DURATION.slower,
      ease: EASE.inOutQuint,
    },
  },
};

export const imageZoom: Variants = {
  hidden: {
    scale: 1.2,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: DURATION.slower,
      ease: EASE.outExpo,
    },
  },
};

// --- HOVER VARIANTS (for interactive elements) ---

export const hoverLift = {
  rest: { y: 0, transition: { duration: DURATION.fast, ease: EASE.outExpo } },
  hover: { y: -6, transition: { duration: DURATION.fast, ease: EASE.outExpo } },
};

export const hoverScale = {
  rest: { scale: 1, transition: { duration: DURATION.fast, ease: EASE.outExpo } },
  hover: { scale: 1.02, transition: { duration: DURATION.fast, ease: EASE.outExpo } },
};

// --- LIST ITEM ---

export const listItem: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};
