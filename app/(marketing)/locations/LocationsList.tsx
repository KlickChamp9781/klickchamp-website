"use client";

import Link from "next/link";
import { LOCATIONS } from "@/lib/data/locations";
import { MapPin } from "lucide-react";
import { StaggerContainer, staggerItemVariants } from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";

const PRIMARY = ["kolkata", "salt-lake", "new-town", "howrah"];
const LOCAL = ["behala", "garia", "barasat", "dum-dum"];

function PrimaryCard({ slug }: { slug: string }) {
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) return null;
  return (
    <motion.div variants={staggerItemVariants}>
      <Link
        href={`/locations/${loc.slug}`}
        className="group flex flex-col h-full bg-card border border-border p-6 lg:p-8 transition-all duration-250 ease-out hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(var(--primary))]"
        aria-label={`Explore digital marketing services in ${loc.title}`}
      >
        <MapPin className="h-6 w-6 text-primary mb-4 transition-colors duration-250 group-hover:text-primary" />
        <h3 className="text-lg font-bold mb-1 transition-colors duration-250 group-hover:text-primary">
          {loc.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          {loc.description.split(".")[0]}.
        </p>
        <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors duration-250 group-hover:text-primary">
          Explore Services
          <span className="transition-transform duration-250 group-hover:translate-x-0.5">
            &rarr;
          </span>
        </span>
      </Link>
    </motion.div>
  );
}

function LocalCard({ slug }: { slug: string }) {
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) return null;
  return (
    <motion.div variants={staggerItemVariants}>
      <Link
        href={`/locations/${loc.slug}`}
        className="group flex flex-col h-full bg-card border border-border p-6 lg:p-8 transition-all duration-250 ease-out hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(var(--primary))]"
        aria-label={`Explore digital marketing services in ${loc.title}`}
      >
        <MapPin className="h-6 w-6 text-primary mb-4 transition-colors duration-250 group-hover:text-primary" />
        <h3 className="text-lg font-bold mb-1 transition-colors duration-250 group-hover:text-primary">
          {loc.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          {loc.description.split(".")[0]}.
        </p>
        <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors duration-250 group-hover:text-primary">
          Explore Services
          <span className="transition-transform duration-250 group-hover:translate-x-0.5">
            &rarr;
          </span>
        </span>
      </Link>
    </motion.div>
  );
}

export function LocationsList() {
  return (
    <section className="py-20 lg:py-30 border-t border-border">
      <div className="container-main">
        {/* Primary Service Locations */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold tracking-tight mb-2">
            Primary Service Locations
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl">
            Our core offices across Kolkata&apos;s key business districts.
          </p>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PRIMARY.map((slug) => (
              <PrimaryCard key={slug} slug={slug} />
            ))}
          </StaggerContainer>
        </div>

        {/* Kolkata Local Areas */}
        <div>
          <h2 className="text-2xl font-bold tracking-tight mb-2">
            Kolkata Local Areas
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl">
            Neighbourhood-level marketing across the city.
          </p>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {LOCAL.map((slug) => (
              <LocalCard key={slug} slug={slug} />
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
