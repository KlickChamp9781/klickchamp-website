"use client";

import { motion } from "framer-motion";

type BreadcrumbProps = {
  items: { label: string; href?: string }[];
};

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Breadcrumb"
      className="text-xs text-kc-gray-500"
    >
      <ol className="flex items-center gap-2">
        <li>
          <a href="/" className="hover:text-kc-gold transition-colors duration-200">
            Home
          </a>
        </li>
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            <span className="text-kc-gray-700">/</span>
            {item.href ? (
              <a href={item.href} className="hover:text-kc-gold transition-colors duration-200">
                {item.label}
              </a>
            ) : (
              <span className="text-kc-gray-300">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </motion.nav>
  );
}
