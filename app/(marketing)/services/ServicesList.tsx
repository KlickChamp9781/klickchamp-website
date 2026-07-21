"use client";

import Link from "next/link";
import { SERVICE_CATEGORIES } from "@/lib/data/services";
import { Badge } from "@/components/ui/badge";
import { StaggerContainer, staggerItemVariants } from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";
import {
  Search, Target, Share2, Monitor, Palette, Film, MapPin, Mail, MessageCircle, Play, Users,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Search, Target, Share2, Monitor, Palette, Film, MapPin, Mail, MessageCircle, Play, Users,
};

export function ServicesList() {
  return (
    <section className="py-20 lg:py-30 border-t border-border">
      <div className="container-main">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {SERVICE_CATEGORIES.map((service) => {
            const Icon = iconMap[service.icon] || Search;
            return (
              <motion.div key={service.slug} variants={staggerItemVariants}>
                <Link href={`/services/${service.slug}`} className="group block bg-background p-6 sm:p-8 md:p-12 min-h-[250px] md:min-h-[300px] flex flex-col justify-between hover:bg-card transition-colors">
                  <div>
                    <div className="w-12 h-12 border border-border flex items-center justify-center mb-6 group-hover:border-primary transition-colors">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {service.subServices.slice(0, 4).map((ss) => (
                      <span key={ss.slug} className="text-xs text-muted-foreground border border-border px-2 py-1">
                        {ss.title}
                      </span>
                    ))}
                    {service.subServices.length > 4 && (
                      <span className="text-xs text-primary px-2 py-1">+{service.subServices.length - 4} more</span>
                    )}
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
