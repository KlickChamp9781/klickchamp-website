"use client";

import { motion } from "framer-motion";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

type PageHeaderProps = {
  title: string;
  description?: string;
  breadcrumbs: { label: string; href?: string }[];
};

export function PageHeader({ title, description, breadcrumbs }: PageHeaderProps) {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="kc-container">
        <Breadcrumb items={breadcrumbs} />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="mt-6 text-[var(--kc-text-h1)] font-[family-name:var(--kc-font-heading)] font-bold text-kc-white leading-[var(--kc-leading-tight)] tracking-[var(--kc-tracking-tight)]"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="mt-4 text-[var(--kc-text-body-lg)] text-kc-gray-400 max-w-2xl"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
