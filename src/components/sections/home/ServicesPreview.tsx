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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-kc-gold/30 to-transparent" />

      <div className="kc-container">
        <SectionHeading
          overline="What We Do"
          heading="Services Built for Growth."
          subheading="We don't offer everything. We offer what works. Each service is engineered to deliver measurable business outcomes."
          className="mb-16"
        />

        {/* Row 1: 8 + 4 split */}
        <div className="kc-grid mb-8">
          <div className="lg:col-span-8 col-span-12">
            <ServiceCard
              key={services[0].slug}
              icon={services[0].icon}
              title={services[0].shortTitle}
              description={services[0].description}
              href={`/services/${services[0].slug}`}
              features={services[0].features.slice(0, 3)}
              index={0}
            />
          </div>
          <div className="lg:col-span-4 col-span-12">
            <ServiceCard
              key={services[1].slug}
              icon={services[1].icon}
              title={services[1].shortTitle}
              description={services[1].description}
              href={`/services/${services[1].slug}`}
              features={services[1].features.slice(0, 3)}
              index={1}
            />
          </div>
        </div>

        {/* Row 2: 3 + 3 + 3 + 3 */}
        <div className="kc-grid">
          {services.slice(2).map((service, index) => (
            <div key={service.slug} className="lg:col-span-3 md:col-span-6 col-span-12">
              <ServiceCard
                icon={service.icon}
                title={service.shortTitle}
                description={service.description}
                href={`/services/${service.slug}`}
                features={service.features.slice(0, 3)}
                index={index + 2}
              />
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
