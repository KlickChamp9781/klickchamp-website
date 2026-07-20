"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { getFeaturedServices } from "@/data/services";

const icons: Record<string, string> = {
  Search: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  Facebook: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z",
  Globe: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 000 18 15 15 0 000-18z",
  Code: "M10 20l5-5-5-5M14 4l-5 5 5 5",
  Share2: "M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13",
  Palette: "M12 3a9 9 0 00-9 9c0 1.5.4 2.9 1 4.1A5 5 0 008 21h4a9 9 0 000-18z M8 13a1 1 0 100-2 1 1 0 000 2z M12 11a1 1 0 100-2 1 1 0 000 2z M16 13a1 1 0 100-2 1 1 0 000 2z",
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
          className="mb-16"
        >
          <p className="text-overline font-heading kc-gold-text mb-8">
            What We Do
          </p>
          <h2 className="text-display font-display text-kc-white">
            Services Built for
            <br />
            <span className="kc-gold-text">Growth.</span>
          </h2>
        </motion.div>

        <div className="kc-grid mb-6">
          <div className="lg:col-span-8 col-span-12 group">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <a href={`/services/${services[0].slug}`} className="kc-card-product block p-10 md:p-14">
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-kc-gold/10 border border-kc-gold/20 flex items-center justify-center mb-8 group-hover:bg-kc-gold/15 transition-colors duration-500">
                    <svg className="w-7 h-7 text-kc-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={icons[services[0].icon] || icons.Search} />
                    </svg>
                  </div>
                  <h3 className="text-[var(--kc-text-h3)] font-heading font-bold text-kc-white mb-4">{services[0].shortTitle}</h3>
                  <p className="text-[var(--kc-text-body)] text-kc-gray-400 leading-relaxed max-w-xl">{services[0].description}</p>
                  <div className="mt-10 flex items-center gap-3 text-kc-gold group-hover:gap-5 transition-all duration-[var(--kc-duration-normal)] ease-[var(--kc-ease-out-expo)]">
                    <span className="text-sm font-heading font-medium uppercase tracking-[var(--kc-tracking-widest)]">Learn More</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </a>
            </motion.div>
          </div>

          {services.slice(1, 3).map((service, i) => (
            <div key={service.slug} className={`${i === 0 ? "lg:col-span-4" : "lg:col-span-4"} col-span-12 group`}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
              >
                <a href={`/services/${service.slug}`} className="kc-card-product block p-10 md:p-12 h-full">
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-kc-gold/10 border border-kc-gold/20 flex items-center justify-center mb-6 group-hover:bg-kc-gold/15 transition-colors duration-500">
                      <svg className="w-6 h-6 text-kc-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={icons[service.icon] || icons.Globe} />
                      </svg>
                    </div>
                    <h3 className="text-[var(--kc-text-h3)] font-heading font-bold text-kc-white mb-4">{service.shortTitle}</h3>
                    <p className="text-[var(--kc-text-body)] text-kc-gray-400 leading-relaxed">{service.description}</p>
                    <div className="mt-8 flex items-center gap-3 text-kc-gold group-hover:gap-5 transition-all duration-[var(--kc-duration-normal)] ease-[var(--kc-ease-out-expo)]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </a>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="kc-grid">
          {services.slice(3).map((service, index) => (
            <div key={service.slug} className="lg:col-span-4 col-span-12 group">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.06 }}
              >
                <a href={`/services/${service.slug}`} className="kc-card-product block p-10 md:p-12 h-full">
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-kc-gold/10 border border-kc-gold/20 flex items-center justify-center mb-6 group-hover:bg-kc-gold/15 transition-colors duration-500">
                      <svg className="w-6 h-6 text-kc-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={icons[service.icon] || icons.Code} />
                      </svg>
                    </div>
                    <h3 className="text-[var(--kc-text-h3)] font-heading font-bold text-kc-white mb-4">{service.shortTitle}</h3>
                    <p className="text-[var(--kc-text-body)] text-kc-gray-400 leading-relaxed">{service.description}</p>
                    <div className="mt-8 flex items-center gap-3 text-kc-gold group-hover:gap-5 transition-all duration-[var(--kc-duration-normal)] ease-[var(--kc-ease-out-expo)]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </a>
              </motion.div>
            </div>
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
