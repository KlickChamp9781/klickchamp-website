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
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[var(--kc-z-sticky)] transition-all duration-500",
          isScrolled
            ? "bg-kc-black/80 backdrop-blur-xl border-b border-kc-white/5 py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="kc-container flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-[var(--kc-radius-sm)] bg-kc-gold flex items-center justify-center">
              <span className="text-kc-black font-bold text-sm font-[family-name:var(--kc-font-heading)]">K</span>
            </div>
            <span className="text-2xl font-[family-name:var(--kc-font-heading)] font-bold text-kc-white">
              Klick<span className="kc-gold-text">Champ</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {(NAVIGATION.main as unknown as Array<{ label: string; href: string; children?: Array<{ label: string; href: string }> }>).map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={item.href}
                  className="px-4 py-2 text-base font-[family-name:var(--kc-font-heading)] font-medium text-kc-gray-300 hover:text-kc-white transition-colors duration-300 rounded-[var(--kc-radius-sm)] hover:bg-kc-white/5"
                >
                  {item.label}
                </a>
                {item.children && openDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 pt-2 w-64"
                  >
                    <div className="kc-glass rounded-[var(--kc-radius-lg)] p-2 shadow-[var(--kc-shadow-xl)]">
                      {item.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-base text-kc-gray-300 hover:text-kc-white hover:bg-kc-white/5 rounded-[var(--kc-radius-sm)] transition-colors duration-200"
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

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Button href="/contact" variant="primary" size="sm" className="hidden lg:inline-flex">
              Get a Quote
            </Button>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
            >
              <motion.span
                animate={isMobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-6 h-px bg-kc-white block"
              />
              <motion.span
                animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-px bg-kc-white block"
              />
              <motion.span
                animate={isMobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-6 h-px bg-kc-white block"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[var(--kc-z-overlay)] bg-kc-black/95 backdrop-blur-xl lg:hidden"
          >
            <div className="kc-container pt-24 pb-8">
              <nav className="space-y-1">
                {NAVIGATION.main.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="block py-3 text-3xl font-[family-name:var(--kc-font-heading)] font-bold text-kc-white hover:text-kc-gold transition-colors"
                    >
                      {item.label}
                    </a>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-8">
                <Button href="/contact" variant="primary" size="lg" className="w-full">
                  Get a Quote
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
