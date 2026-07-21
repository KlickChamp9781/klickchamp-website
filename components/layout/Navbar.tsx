"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Target,
  Share2,
  Monitor,
  Palette,
  Film,
  MapPin,
  Mail,
  MessageCircle,
  Play,
  Users,
  Heart,
  Building,
  GraduationCap,
  ShoppingCart,
  Landmark,
  Utensils,
  Coffee,
  Dumbbell,
  Sparkles,
  Scale,
  HardHat,
  Plane,
  Building2,
  Globe,
  Store,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SERVICE_CATEGORIES } from "@/lib/data/services";
import { INDUSTRIES } from "@/lib/data/industries";
import { RESOURCE_LINKS, COMPANY_LINKS } from "@/lib/data/navigation";
import { Button } from "@/components/ui/button";
import { useScrollProgress } from "@/hooks/useScrollProgress";

const serviceIconMap: Record<string, React.ElementType> = {
  Search,
  Target,
  Share2,
  Monitor,
  Palette,
  Film,
  MapPin,
  Mail,
  MessageCircle,
  Play,
  Users,
};

const industryIconMap: Record<string, React.ElementType> = {
  Heart,
  Building,
  GraduationCap,
  ShoppingCart,
  Landmark,
  Utensils,
  Coffee,
  Dumbbell,
  Sparkles,
  Scale,
  HardHat,
  Plane,
  Building2,
  Globe,
  Store,
};

const displayIndustries = INDUSTRIES.slice(0, 16);

const resourcesItems = RESOURCE_LINKS.map((r) => ({ title: r.label, href: r.href }));

const companyItems = COMPANY_LINKS.map((c) => ({ title: c.label, href: c.href }));

type MegaMenu = "services" | "industries" | "resources" | "company";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMega, setActiveMega] = useState<MegaMenu | null>(null);
  const megaTimeout = useRef<NodeJS.Timeout | null>(null);
  const progress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleMegaEnter = (menu: MegaMenu) => {
    if (megaTimeout.current) clearTimeout(megaTimeout.current);
    setActiveMega(menu);
  };

  const handleMegaLeave = () => {
    megaTimeout.current = setTimeout(() => setActiveMega(null), 150);
  };

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 text-[#EDE8DA]",
          scrolled
            ? "bg-[rgb(var(--secondary))]/95 backdrop-blur-md border-b border-[rgb(var(--secondary))]/80"
            : "bg-[rgb(var(--secondary))]"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
      >
        <div className="container-main">
          <div className="flex items-center justify-between h-20">
            <Link href="/" aria-label="Go to Homepage" className="shrink-0">
              <Image
                src="/images/header logo.png"
                alt="KlickChamp"
                width={170}
                height={50}
                className="w-[130px] sm:w-[150px] lg:w-[170px] h-auto"
                unoptimized
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-0">
              {(["services", "industries", "resources", "company"] as MegaMenu[]).map((menu) => (
                <div
                  key={menu}
                  onMouseEnter={() => handleMegaEnter(menu)}
                  onMouseLeave={handleMegaLeave}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 text-sm font-medium uppercase tracking-[0.1em] transition-colors hover:text-primary cursor-pointer",
                      activeMega === menu && "text-primary"
                    )}
                  >
                    {menu === "services" && "Services"}
                    {menu === "industries" && "Industries"}
                    {menu === "resources" && "Resources"}
                    {menu === "company" && "Company"}
                    <ChevronDown
                      className={cn(
                        "h-3 w-3 transition-transform duration-300",
                        activeMega === menu && "rotate-180"
                      )}
                    />
                  </button>
                </div>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>

            <button
              className="lg:hidden p-2 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {activeMega && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 top-full pt-3"
              onMouseEnter={() => handleMegaEnter(activeMega)}
              onMouseLeave={handleMegaLeave}
            >
              <div className="container-main">
                {activeMega === "services" && (
                  <div className="bg-[rgb(var(--card))] border border-border shadow-lg p-6">
                    <div className="grid grid-cols-3 gap-1">
                      {SERVICE_CATEGORIES.map((service) => {
                        const Icon = serviceIconMap[service.icon] || Search;
                        return (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="flex items-start gap-3 p-3 hover:bg-muted transition-colors group"
                            onClick={() => setActiveMega(null)}
                          >
                            <Icon className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                            <div>
                              <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                                  {service.title}
                                </div>
                                <div className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                                  {service.description}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {activeMega === "industries" && (
                    <div className="bg-[rgb(var(--card))] border border-border shadow-lg p-6">
                      <div className="grid grid-cols-2 gap-1">
                        {displayIndustries.map((industry) => {
                          const Icon = industryIconMap[industry.icon] || Building;
                          return (
                            <Link
                              key={industry.slug}
                              href={`/industries/${industry.slug}`}
                              className="flex items-start gap-3 p-3 hover:bg-muted transition-colors group"
                              onClick={() => setActiveMega(null)}
                            >
                              <Icon className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                              <div>
                                <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                                  {industry.title}
                              </div>
                              <div className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                                {industry.description}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}

                {activeMega === "resources" && (
                  <div className="bg-[rgb(var(--card))] border border-border shadow-lg p-6">
                    <div className="grid grid-cols-1 gap-1">
                      {resourcesItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center gap-3 p-3 hover:bg-muted transition-colors group"
                          onClick={() => setActiveMega(null)}
                        >
                          <span className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                            {item.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {activeMega === "company" && (
                  <div className="bg-[rgb(var(--card))] border border-border shadow-lg p-6">
                    <div className="grid grid-cols-1 gap-1">
                      {companyItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center gap-3 p-3 hover:bg-muted transition-colors group"
                          onClick={() => setActiveMega(null)}
                        >
                          <span className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                            {item.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div
          className="h-px bg-primary"
          style={{ width: `${progress}%` }}
        />
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[rgb(var(--secondary))] text-[#EDE8DA] lg:hidden"
          >
            <div className="pt-24 px-6 pb-8 h-full overflow-y-auto">
              <nav className="flex flex-col gap-1">
                <MobileSection
                  title="Services"
                  delay={0}
                  links={SERVICE_CATEGORIES.map((s) => ({
                    title: s.title,
                    href: `/services/${s.slug}`,
                  }))}
                  onClose={() => setIsOpen(false)}
                />
                <MobileSection
                  title="Industries"
                  delay={0.05}
                  links={displayIndustries.map((i) => ({
                    title: i.title,
                    href: `/industries/${i.slug}`,
                  }))}
                  onClose={() => setIsOpen(false)}
                />
                <MobileSection
                  title="Resources"
                  delay={0.1}
                  links={resourcesItems.map((r) => ({
                    title: r.title,
                    href: r.href,
                  }))}
                  onClose={() => setIsOpen(false)}
                />
                <MobileSection
                  title="Company"
                  delay={0.15}
                  links={companyItems.map((c) => ({
                    title: c.title,
                    href: c.href,
                  }))}
                  onClose={() => setIsOpen(false)}
                />
              </nav>
              <div className="mt-8">
                <Button className="w-full" asChild>
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Get a Quote
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MobileSection({
  title,
  delay,
  links,
  onClose,
}: {
  title: string;
  delay: number;
  links: { title: string; href: string }[];
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-4 text-2xl font-medium border-b border-border hover:text-primary transition-colors cursor-pointer"
      >
        {title}
        <ChevronDown
          className={cn(
            "h-5 w-5 transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pl-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="block py-3 text-sm text-[#EDE8DA]/70 hover:text-primary transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
