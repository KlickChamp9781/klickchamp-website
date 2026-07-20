"use client";

import { motion } from "framer-motion";
import type { TeamMember } from "@/types";

type TeamCardProps = {
  member: TeamMember;
  index?: number;
};

export function TeamCard({ member, index = 0 }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1,
      }}
      className="kc-card group overflow-hidden"
    >
      <div className="aspect-[4/5] bg-kc-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-kc-black/80 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl font-[family-name:var(--kc-font-display)] text-kc-gray-700">
            {member.name.charAt(0)}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-[family-name:var(--kc-font-heading)] font-semibold text-kc-white mb-1">
          {member.name}
        </h3>
        <p className="text-sm kc-gold-text font-[family-name:var(--kc-font-heading)] font-medium mb-3">
          {member.role}
        </p>
        <p className="text-xs text-kc-gray-400 leading-[var(--kc-leading-relaxed)] mb-4">
          {member.bio}
        </p>

        {member.social && (
          <div className="flex items-center gap-3">
            {member.social.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-kc-white/5 flex items-center justify-center text-kc-gray-400 hover:text-kc-gold hover:bg-kc-gold/10 transition-colors duration-300"
              >
                <span className="text-xs">in</span>
              </a>
            )}
            {member.social.twitter && (
              <a
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-kc-white/5 flex items-center justify-center text-kc-gray-400 hover:text-kc-gold hover:bg-kc-gold/10 transition-colors duration-300"
              >
                <span className="text-xs">X</span>
              </a>
            )}
            {member.social.instagram && (
              <a
                href={member.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-kc-white/5 flex items-center justify-center text-kc-gray-400 hover:text-kc-gold hover:bg-kc-gold/10 transition-colors duration-300"
              >
                <span className="text-xs">ig</span>
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
