"use client";

import Image from "next/image";
import { TEAM_MEMBERS } from "@/lib/constants";
import { StaggerContainer, staggerItemVariants } from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";

export function TeamGrid() {
  return (
    <section className="py-20 lg:py-30 border-t border-border">
      <div className="container-main">
        <h2 className="sr-only">Meet Our Team</h2>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {TEAM_MEMBERS.map((member) => (
            <motion.div
              key={member.name}
              variants={staggerItemVariants}
              className="bg-background group"
            >
              <div className="aspect-[3/4] bg-muted relative overflow-hidden">
                <Image src={member.image} alt={member.name} fill className="object-cover" unoptimized />
                <div className="absolute inset-0 bg-[rgb(var(--secondary))]/60" />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm uppercase tracking-[0.1em] text-primary mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
