"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";
import { NAVIGATION, SITE_CONFIG } from "@/constants/site";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -88 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[var(--kc-z-sticky)] transition-all duration-700",
          isScrolled
            ? "bg-kc-black/70 backdrop-blur-2xl border-b border-kc-white/5"
            : "bg-transparent"
        )}
        style={{ height: "88px" }}
      >
        <div className="kc-container flex items-center justify-between h-full">
          <a href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-10 h-10 rounded-[var(--kc-radius-md)] bg-kc-gold flex items-center justify-center group-hover:shadow-[var(--kc-shadow-gold-lg)] transition-shadow duration-500">
              <span className="text-kc-black font-bold text-base font-[family-name:var(--kc-font-heading)]">K</span>
            </div>
            <span className="text-[var(--kc-text-h4)] font-[family-name:var(--kc-font-heading)] font-bold text-kc-white">
              Klick<span className="kc-gold-text">Champ</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2" style={{ gap: "40px" }}>
            {(NAVIGATION.main as unknown as Array<{ label: string; href: string; children?: Array<{ label: string; href: string }> }>).map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={item.href}
                  className="text-[var(--kc-text-body-sm)] font-[family-name:var(--kc-font-heading)] font-medium text-kc-gray-400 hover:text-kc-white transition-colors duration-300"
                >
                  {item.label}
                </a>
                {item.children && openDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-56"
                  >
                    <div className="kc-glass rounded-[var(--kc-radius-lg)] p-2 shadow-[var(--kc-shadow-xl)]">
                      {item.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-[var(--kc-text-body-sm)] text-kc-gray-300 hover:text-kc-white hover:bg-kc-white/5 rounded-[var(--kc-radius-sm)] transition-colors duration-200 text-center"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4 flex-shrink-0">
            <Button href="/contact" variant="primary" size="sm" className="hidden lg:inline-flex">
              Get a Quote
            </Button>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
            >
              <motion.span animate={isMobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="w-7 h-[1.5px] bg-kc-white block rounded-full" />
              <motion.span animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }} className="w-7 h-[1.5px] bg-kc-white block rounded-full" />
              <motion.span animate={isMobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="w-7 h-[1.5px] bg-kc-white block rounded-full" />
            </button>
          </div>
        </div>
      </motion.header>

      <div style={{ height: "88px" }} />

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[var(--kc-z-overlay)] bg-kc-black/98 lg:hidden"
          >
            <div className="kc-container pt-28 pb-8 h-full flex flex-col justify-between">
              <nav className="space-y-2">
                {NAVIGATION.main.map((item, index) => (
                  <motion.div key={item.label} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}>
                    <a
                      href={item.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="block py-4 text-5xl font-[family-name:var(--kc-font-heading)] font-bold text-kc-white hover:text-kc-gold transition-colors"
                    >
                      {item.label}
                    </a>
                  </motion.div>
                ))}
              </nav>
              <Button href="/contact" variant="primary" size="xl" className="w-full">
                Get a Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
