"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { getFeaturedServices } from "@/data/services";

const serviceIcons: Record<string, string> = {
  Search: "01",
  Facebook: "02",
  Globe: "03",
  Code: "04",
  Share2: "05",
  Palette: "06",
};

export function ServicesPreview() {
  const services = getFeaturedServices();

  return (
    <section className="kc-section relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-kc-gold/30 to-transparent" />

      <div className="kc-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <p className="text-overline font-[family-name:var(--kc-font-heading)] kc-gold-text mb-8">
            What We Do
          </p>
          <h2 className="text-display font-display text-kc-white">
            Services Built for
            <br />
            <span className="kc-gold-text">Growth.</span>
          </h2>
        </motion.div>

        {/* Row 1: Large 8-col card + 4-col card */}
        <div className="kc-grid mb-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 col-span-12 group"
          >
            <a
              href={`/services/${services[0].slug}`}
              className="block relative h-full kc-card p-10 md:p-14 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-kc-gold/[0.03] to-transparent" />
              <span className="text-8xl md:text-9xl font-display text-kc-white/[0.03] absolute bottom-0 right-6 leading-none select-none pointer-events-none">
                {serviceIcons[services[0].icon] || "01"}
              </span>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <span className="text-sm font-[family-name:var(--kc-font-heading)] font-medium text-kc-gold mb-6 block">
                    {serviceIcons[services[0].icon] || "01"}
                  </span>
                  <h3 className="text-[var(--kc-text-h3)] font-[family-name:var(--kc-font-heading)] font-bold text-kc-white mb-4">
                    {services[0].shortTitle}
                  </h3>
                  <p className="text-[var(--kc-text-body)] text-kc-gray-400 leading-[var(--kc-leading-relaxed)] max-w-xl">
                    {services[0].description}
                  </p>
                </div>
                <div className="mt-10 flex items-center gap-3 text-kc-gold group-hover:gap-5 transition-all duration-[var(--kc-duration-normal)] ease-[var(--kc-ease-out-expo)]">
                  <span className="text-sm font-[family-name:var(--kc-font-heading)] font-medium uppercase tracking-[var(--kc-tracking-widest)]">
                    Learn More
                  </span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-4 col-span-12 group"
          >
            <a
              href={`/services/${services[1].slug}`}
              className="block relative h-full kc-card p-10 md:p-12 overflow-hidden"
            >
              <span className="text-8xl md:text-9xl font-display text-kc-white/[0.03] absolute bottom-0 right-4 leading-none select-none pointer-events-none">
                {serviceIcons[services[1].icon] || "02"}
              </span>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <span className="text-sm font-[family-name:var(--kc-font-heading)] font-medium text-kc-gold mb-6 block">
                    {serviceIcons[services[1].icon] || "02"}
                  </span>
                  <h3 className="text-[var(--kc-text-h3)] font-[family-name:var(--kc-font-heading)] font-bold text-kc-white mb-4">
                    {services[1].shortTitle}
                  </h3>
                  <p className="text-[var(--kc-text-body)] text-kc-gray-400 leading-[var(--kc-leading-relaxed)]">
                    {services[1].description}
                  </p>
                </div>
                <div className="mt-10 flex items-center gap-3 text-kc-gold group-hover:gap-5 transition-all duration-[var(--kc-duration-normal)] ease-[var(--kc-ease-out-expo)]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          </motion.div>
        </div>

        {/* Row 2: 4-col + 8-col (alternating visual rhythm) */}
        <div className="kc-grid mb-6">
          {services.slice(2, 4).map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              className={`${index === 0 ? "lg:col-span-4" : "lg:col-span-8"} col-span-12 group`}
            >
              <a
                href={`/services/${service.slug}`}
                className={`block relative h-full kc-card p-10 md:p-12 overflow-hidden ${index === 1 ? "md:p-14" : ""}`}
              >
                <span className="text-8xl md:text-9xl font-display text-kc-white/[0.03] absolute bottom-0 right-4 leading-none select-none pointer-events-none">
                  {serviceIcons[service.icon] || String(index + 3).padStart(2, "0")}
                </span>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <span className="text-sm font-[family-name:var(--kc-font-heading)] font-medium text-kc-gold mb-6 block">
                      {serviceIcons[service.icon] || String(index + 3).padStart(2, "0")}
                    </span>
                    <h3 className="text-[var(--kc-text-h3)] font-[family-name:var(--kc-font-heading)] font-bold text-kc-white mb-4">
                      {service.shortTitle}
                    </h3>
                    <p className="text-[var(--kc-text-body)] text-kc-gray-400 leading-[var(--kc-leading-relaxed)] max-w-xl">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-10 flex items-center gap-3 text-kc-gold group-hover:gap-5 transition-all duration-[var(--kc-duration-normal)] ease-[var(--kc-ease-out-expo)]">
                    <span className="text-sm font-[family-name:var(--kc-font-heading)] font-medium uppercase tracking-[var(--kc-tracking-widest)]">
                      Learn More
                    </span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Row 3: 4-col + 4-col + 4-col */}
        <div className="kc-grid">
          {services.slice(4).map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
              className="lg:col-span-4 col-span-12 group"
            >
              <a
                href={`/services/${service.slug}`}
                className="block relative h-full kc-card p-10 md:p-12 overflow-hidden"
              >
                <span className="text-7xl md:text-8xl font-display text-kc-white/[0.03] absolute bottom-0 right-4 leading-none select-none pointer-events-none">
                  {serviceIcons[service.icon] || String(index + 5).padStart(2, "0")}
                </span>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <span className="text-sm font-[family-name:var(--kc-font-heading)] font-medium text-kc-gold mb-6 block">
                      {serviceIcons[service.icon] || String(index + 5).padStart(2, "0")}
                    </span>
                    <h3 className="text-[var(--kc-text-h3)] font-[family-name:var(--kc-font-heading)] font-bold text-kc-white mb-4">
                      {service.shortTitle}
                    </h3>
                    <p className="text-[var(--kc-text-body)] text-kc-gray-400 leading-[var(--kc-leading-relaxed)]">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-10 flex items-center gap-3 text-kc-gold group-hover:gap-5 transition-all duration-[var(--kc-duration-normal)] ease-[var(--kc-ease-out-expo)]">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
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
          className="mt-16 text-center"
        >
          <Button href="/services" variant="outline" size="lg">
            View All Services
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
