"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/Button";
import { getFeaturedServices } from "@/data/services";

export function ServicesPreview() {
  const services = getFeaturedServices();

  return (
    <section className="kc-section relative">
      {/* Subtle divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-kc-gold/30 to-transparent" />

      <div className="kc-container">
        <SectionHeading
          overline="What We Do"
          heading="Services Built for Growth"
          subheading="We don't offer everything. We offer what works. Each service is engineered to deliver measurable business outcomes."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.slug}
              icon={service.icon}
              title={service.shortTitle}
              description={service.description}
              href={`/services/${service.slug}`}
              features={service.features.slice(0, 3)}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Button href="/services" variant="outline" size="md">
            View All Services
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
