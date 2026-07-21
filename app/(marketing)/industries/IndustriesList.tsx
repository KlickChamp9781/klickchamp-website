"use client";

import Link from "next/link";
import { INDUSTRIES } from "@/lib/data/industries";
import { Badge } from "@/components/ui/badge";
import { StaggerContainer, staggerItemVariants } from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";
import {
  Heart, Building, GraduationCap, ShoppingCart, Landmark,
  Utensils, Coffee, Dumbbell, Sparkles, Scale, HardHat, Plane,
  Building2, Globe, Store,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Heart, Building, GraduationCap, ShoppingCart, Landmark,
  Utensils, Coffee, Dumbbell, Sparkles, Scale, HardHat, Plane,
  Building2, Globe, Store,
};

export function IndustriesList() {
  return (
    <section className="py-20 lg:py-30 border-t border-border">
      <div className="container-main">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {INDUSTRIES.map((industry) => {
            const Icon = iconMap[industry.icon] || Building;
            return (
              <motion.div key={industry.slug} variants={staggerItemVariants}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group block bg-background p-6 sm:p-8 hover:bg-card transition-colors"
                >
                  <Icon className="h-8 w-8 text-primary mb-4" />
                  <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {industry.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {industry.description}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
