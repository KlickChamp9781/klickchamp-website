"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] bg-background flex items-center justify-center">
      <div className="text-center">
        <motion.div
          className="flex items-center justify-center gap-2 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-10 h-10 bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">
              K
            </span>
          </div>
          <span className="text-2xl font-bold tracking-tight">KlickChamp</span>
        </motion.div>

        <motion.div
          className="w-48 h-px bg-border mx-auto relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <motion.div
            className="absolute inset-y-0 left-0 bg-primary"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </div>
  );
}
