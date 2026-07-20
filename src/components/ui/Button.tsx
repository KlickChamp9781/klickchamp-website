"use client";

import { cn } from "@/lib/cn";
import type { ButtonVariant, ButtonSize } from "@/types";

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-kc-gold text-kc-black hover:bg-kc-gold-light shadow-[var(--kc-shadow-gold)] hover:shadow-[var(--kc-shadow-gold-lg)]",
  secondary:
    "bg-transparent text-kc-white border border-kc-white/20 hover:bg-kc-white/10 hover:border-kc-white/30",
  outline:
    "bg-transparent text-kc-gold border border-kc-gold/40 hover:bg-kc-gold/10 hover:border-kc-gold/60",
  ghost:
    "bg-transparent text-kc-white/70 hover:text-kc-white hover:bg-kc-white/5",
  gold:
    "bg-gradient-to-r from-kc-gold-dark via-kc-gold to-kc-gold-light text-kc-black font-semibold hover:shadow-[var(--kc-shadow-gold-lg)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-6 py-3 text-sm rounded-[var(--kc-radius-sm)]",
  md: "px-9 py-4 text-base rounded-[var(--kc-radius-md)]",
  lg: "px-12 py-5 text-lg rounded-[var(--kc-radius-lg)]",
  xl: "px-14 py-6 text-xl rounded-[var(--kc-radius-xl)]",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  disabled,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-3 font-[family-name:var(--kc-font-heading)] font-medium transition-all duration-[var(--kc-duration-normal)] ease-[var(--kc-ease-out-expo)] cursor-pointer select-none whitespace-nowrap",
    variantClasses[variant],
    sizeClasses[size],
    disabled && "opacity-50 pointer-events-none",
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
