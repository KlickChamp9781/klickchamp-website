"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP } from "@/lib/constants";

export function WhatsAppButton() {
  const number = WHATSAPP.replace(/\s+/g, "").replace("+", "");
  const url = `https://wa.me/${number}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white shadow-lg hover:bg-[#1DA851] transition-colors cursor-pointer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="h-6 w-6 md:h-[26px] md:w-[26px]" />
    </motion.a>
  );
}
