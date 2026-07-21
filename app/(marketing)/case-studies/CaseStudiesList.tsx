"use client";

import Link from "next/link";
import { CASE_STUDIES } from "@/lib/data/case-studies";
import { Badge } from "@/components/ui/badge";
import { StaggerContainer, staggerItemVariants } from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { resolveImage } from "@/lib/data/image-utils";

export function CaseStudiesList() {
  return (
    <section className="py-20 lg:py-30 border-t border-border">
      <div className="container-main">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {CASE_STUDIES.map((cs) => {
            const img = resolveImage(cs);
            return (
              <motion.div key={cs.slug} variants={staggerItemVariants}>
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="group block bg-background hover:bg-card transition-colors"
                >
                  <div className="aspect-[16/9] bg-muted relative overflow-hidden">
                    {img ? (
                      <OptimizedImage
                        src={img.src}
                        alt={img.alt || cs.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-[rgb(var(--secondary))]/70 group-hover:bg-[rgb(var(--secondary))]/50 transition-all" />
                    )}
                    <div className="absolute top-4 left-4 z-10">
                      <Badge>{cs.industry}</Badge>
                    </div>
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{cs.title}</h2>
                        <p className="text-sm text-muted-foreground leading-relaxed">{cs.overview}</p>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-all shrink-0 mt-1" />
                    </div>
                    <div className="flex gap-6 mt-6 pt-6 border-t border-border">
                      {cs.metrics.slice(0, 3).map((m) => (
                        <div key={m.label}>
                          <span className="text-lg font-bold text-primary">{m.value}</span>
                          <span className="text-xs text-muted-foreground ml-1">{m.label}</span>
                        </div>
                      ))}
                    </div>
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
