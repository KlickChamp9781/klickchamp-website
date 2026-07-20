"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
  href: string;
  features?: string[];
  index?: number;
};

export function ServiceCard({
  icon,
  title,
  description,
  href,
  features,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1,
      }}
      whileHover={{ y: -6 }}
      className="kc-card group block p-10 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-kc-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="w-16 h-16 rounded-[var(--kc-radius-lg)] bg-kc-gold/10 flex items-center justify-center mb-7 group-hover:bg-kc-gold/20 transition-colors duration-300">
          <span className="text-3xl">{icon}</span>
        </div>

        <h3 className="text-[var(--kc-text-h3)] font-[family-name:var(--kc-font-heading)] font-semibold text-kc-white mb-4">
          {title}
        </h3>

        <p className="text-kc-gray-400 text-[var(--kc-text-body)] leading-[var(--kc-leading-relaxed)] mb-5">
          {description}
        </p>

        {features && (
          <ul className="space-y-2">
            {features.slice(0, 3).map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-sm text-kc-gray-500"
              >
                <span className="w-1 h-1 rounded-full bg-kc-gold" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 flex items-center gap-2 text-sm text-kc-gold font-[family-name:var(--kc-font-heading)] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-0 group-hover:translate-x-1">
          Learn More
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </motion.a>
  );
}
