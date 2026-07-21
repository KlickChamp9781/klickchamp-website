"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Search, Target, Share2, Monitor, Palette, Film, MapPin, Mail, MessageCircle, Play } from "lucide-react";
import { SERVICE_CATEGORIES } from "@/lib/data/services";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerContainer, staggerItemVariants } from "@/components/animations/StaggerContainer";
import { Badge } from "@/components/ui/badge";

const serviceImages: Record<string, string> = {
  "seo": "/images/seo-3d-word-with-target-computer-mouse.jpg",
  "google-ads": "/images/ad-website-social-media-banner-ads-internet-digital-marketing-concept-marketer-analyzing-online-advertising-campaigns-performance-metrics-laptop-with-graphical-data-interface.jpg",
  "meta-ads": "/images/pile-3d-popular-social-media-logos.jpg",
  "website-design": "/images/rendering-illustration-cartoon-characters-website-word.jpg",
  "graphic-design": "/images/graphic-design-icons-dark-background-3d-rendering.jpg",
  "video-editing": "/images/video-editor-content-creator-filming-tutorial-about-professionally-editing-footage.jpg",
  "google-business": "/images/opening-a-new-store-and-advertising-the-location-2026-03-27-02-46-10-utc.webp",
  "email-marketing": "/images/top-view-of-red-paper-and-the-text-email-marketing-2026-03-19-07-04-15-utc.webp",
  "whatsapp-marketing": "/images/person-holding-up-green-phone-icon-indoors-2026-01-07-07-22-41-utc.webp",
  "youtube-optimization": "/images/pile-3d-play-button-logos.jpg",
  "social-media-optimization": "/images/close-up-of-female-hands-using-laptop-and-smartpho-2026-01-11-08-33-22-utc.webp",
};

const iconMap: Record<string, React.ElementType> = {
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
};

export function ServicesOverview() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <ScrollReveal>
          <div className="grid-12 mb-16">
            <div className="col-span-12 lg:col-span-8">
              <Badge className="mb-6">Our Expertise</Badge>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em] leading-[1.1]">
                Services built for
                <br />
                <span className="text-gradient-gold">measurable impact.</span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4 flex items-end">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Comprehensive digital marketing services, each engineered to
                deliver results that matter.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {SERVICE_CATEGORIES.map((service) => {
            const Icon = iconMap[service.icon] || Search;
            return (
              <motion.div
                key={service.id}
                variants={staggerItemVariants}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group block bg-background p-8 md:p-12 transition-colors hover:bg-card"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-[rgb(var(--primary))]/5 transition-all">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <div className="w-full aspect-video relative mb-6 overflow-hidden border border-border bg-muted">
                    <Image
                      src={serviceImages[service.slug] || ""}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.slice(0, 4).map((feature) => {
                      const label = typeof feature === "string" ? feature : feature.title;
                      return (
                        <span
                          key={label}
                          className="text-xs uppercase tracking-[0.1em] text-muted-foreground border border-border px-3 py-1"
                        >
                          {label}
                        </span>
                      );
                    })}
                    {service.features.length > 4 && (
                      <span className="text-xs uppercase tracking-[0.1em] text-primary px-3 py-1">
                        +{service.features.length - 4} more
                      </span>
                    )}
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
