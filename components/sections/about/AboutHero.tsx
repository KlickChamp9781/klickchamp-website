"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function AboutHero() {
  return (
    <section className="relative pt-40 pb-20 bg-background">
      <div className="container-main">
        <div className="grid-12">
          <div className="col-span-12 lg:col-span-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6">About KlickChamp</Badge>
            </motion.div>
            <motion.h1
              className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-[-0.03em] leading-[1.05] mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              The agency behind
              <br />
              <span className="text-gradient-gold">extraordinary</span> brands.
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              We are a precision-driven digital agency combining engineering
              excellence with creative vision to build brands that dominate.
            </motion.p>
            <motion.p
              className="text-base text-muted-foreground max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Founded in Kolkata with a mission to democratize world-class digital marketing.
              We believe every business — from a neighborhood clinic to a national brand —
              deserves strategies engineered with precision, executed with creativity,
              and measured by impact.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
