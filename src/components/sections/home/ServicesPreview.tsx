"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { getFeaturedServices } from "@/data/services";

const numbers = ["01", "02", "03", "04", "05", "06"];

export function ServicesPreview() {
  const services = getFeaturedServices();

  return (
    <section className="kc-section relative overflow-hidden bg-kc-black-pure">
      <div className="kc-divider absolute top-0 left-8 right-8" />

      <div className="kc-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <p className="text-overline font-heading text-kc-gray-500 mb-8 tracking-[0.25em]">
            What We Do
          </p>
          <h2 className="text-display font-display text-kc-white">
            Services Built for
            <br />
            <span className="kc-gold-text">Growth.</span>
          </h2>
        </motion.div>

        <div className="kc-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.06 }}
              className="lg:col-span-4 col-span-12 group"
            >
              <a
                href={`/services/${service.slug}`}
                className="block relative h-full border-b border-kc-white/[0.04] pb-12 group-hover:border-kc-gold/20 transition-colors duration-500"
              >
                <span className="text-7xl md:text-8xl font-display text-kc-white/[0.03] leading-none block mb-8 select-none group-hover:text-kc-gold/[0.06] transition-colors duration-500">
                  {numbers[index]}
                </span>
                <h3 className="text-[var(--kc-text-h3)] font-heading font-bold text-kc-white mb-4 group-hover:text-kc-gold transition-colors duration-500">
                  {service.shortTitle}
                </h3>
                <p className="text-[var(--kc-text-body)] text-kc-gray-500 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-8 flex items-center gap-2 text-kc-gray-600 group-hover:text-kc-gold transition-all duration-500">
                  <span className="text-xs font-heading font-medium uppercase tracking-[0.2em]">Learn More</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="mt-20 text-center"
        >
          <Button href="/services" variant="outline" size="lg">
            View All Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
