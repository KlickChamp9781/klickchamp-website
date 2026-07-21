"use client";

import Link from "next/link";
import { ArrowUpRight, Search, Target, Share2, Monitor, Palette, Film, MapPin, Mail, MessageCircle, Play } from "lucide-react";
import { SERVICE_CATEGORIES } from "@/lib/data/services";
import { StaggerContainer, staggerItemVariants } from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ElementType> = {
  Search,
  Target,
  Share2,
  Monitor,
  Palette,
  Film,
  MapPin,
  Mail,
  MessageCircle,
  Play,
};

export function ServicesPageGrid() {
  return (
    <section className="section-padding border-t border-border">
      <div className="container-main">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {SERVICE_CATEGORIES.map((service) => {
            const Icon = iconMap[service.icon] || Search;
            return (
              <motion.div key={service.id} variants={staggerItemVariants}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block bg-background p-8 md:p-12 min-h-[400px] flex flex-col justify-between transition-colors hover:bg-card"
                >
                  <div>
                    <div className="flex items-start justify-between mb-8">
                      <div className="w-14 h-14 border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-[rgb(var(--primary))]/5 transition-all">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => {
                      const label = typeof feature === "string" ? feature : feature.title;
                      return (
                        <span
                          key={label}
                          className="text-xs uppercase tracking-[0.1em] text-muted-foreground border border-border px-3 py-1 group-hover:border-[rgb(var(--primary))]/30 transition-colors"
                        >
                          {label}
                        </span>
                      );
                    })}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
