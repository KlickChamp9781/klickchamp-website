"use client";

import { motion } from "framer-motion";

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
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="kc-card group block relative overflow-hidden p-8"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-kc-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-[var(--kc-radius-md)] bg-kc-gold/10 flex items-center justify-center mb-8 group-hover:bg-kc-gold/20 transition-colors duration-500">
          <span className="text-2xl">{icon}</span>
        </div>
        <h3 className="text-[var(--kc-text-h3)] font-[family-name:var(--kc-font-heading)] font-semibold text-kc-white mb-4">
          {title}
        </h3>
        <p className="text-[var(--kc-text-body)] text-kc-gray-400 leading-[var(--kc-leading-relaxed)] mb-8">
          {description}
        </p>
        {features && (
          <ul className="space-y-4 mb-8">
            {features.slice(0, 3).map((feature) => (
              <li key={feature} className="flex items-center gap-4 text-[var(--kc-text-body-sm)] text-kc-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-kc-gold flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        )}
        <div className="flex items-center gap-4 text-[var(--kc-text-body-sm)] text-kc-gold font-[family-name:var(--kc-font-heading)] font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-0 group-hover:translate-x-2">
          Learn More
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </motion.a>
  );
}
