import Link from "next/link";
import Image from "next/image";
import { SITE_NAME, PHONE, WHATSAPP, CONTACT_EMAIL, ADDRESS } from "@/lib/constants";
import { SERVICE_CATEGORIES } from "@/lib/data/services";
import { INDUSTRIES } from "@/lib/data/industries";
import { RESOURCE_LINKS, COMPANY_LINKS, LEGAL_LINKS } from "@/lib/data/navigation";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaYoutube } from "react-icons/fa";

const displayIndustries = INDUSTRIES.slice(0, 16);

export function Footer() {
  return (
    <footer className="border-t border-border relative overflow-hidden bg-[rgb(var(--secondary))] text-[#EDE8DA]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgb(var(--primary))/4] to-[rgb(var(--primary))/8] pointer-events-none" />
      <div className="container-main section-padding">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" aria-label="Go to Homepage" className="block mb-6">
              <Image
                src="/images/footer logo.png"
                alt="KlickChamp Logo"
                width={170}
                height={55}
                className="w-[140px] md:w-[170px] h-auto"
                unoptimized
              />
            </Link>
            <p className="text-[#EDE8DA]/70 text-sm leading-relaxed mb-6 max-w-sm">
              Engineering digital excellence. We transform brands through
              precision-driven marketing, design, and technology.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-2 text-[#EDE8DA]/70 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                {PHONE}
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-2 text-[#EDE8DA]/70 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                {CONTACT_EMAIL}
              </a>
              <div className="flex items-center gap-2 text-[#EDE8DA]/70">
                <MapPin className="h-4 w-4" />
                {ADDRESS}
              </div>
              <div className="mt-4">
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">Follow Us</span>
                <div className="flex items-center gap-4 mt-3">
                  <a href="https://www.facebook.com/profile.php?id=61563670773035" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#EDE8DA]/70 hover:text-primary transition-colors duration-200">
                    <FaFacebook className="h-5 w-5" />
                  </a>
                  <a href="https://www.instagram.com/klickchamp/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#EDE8DA]/70 hover:text-primary transition-colors duration-200">
                    <FaInstagram className="h-5 w-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/klick-champ-74a055423/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#EDE8DA]/70 hover:text-primary transition-colors duration-200">
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                  <a href="https://www.pinterest.com/klickchamp/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="text-[#EDE8DA]/70 hover:text-primary transition-colors duration-200">
                    <FaPinterest className="h-5 w-5" />
                  </a>
                  <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-[#EDE8DA]/70 hover:text-primary transition-colors duration-200">
                    <FaYoutube className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] mb-6 text-primary">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {SERVICE_CATEGORIES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-[#EDE8DA]/70 hover:text-primary transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] mb-6 text-primary">
              Industries
            </h4>
            <ul className="flex flex-col gap-3">
              {displayIndustries.map((industry) => (
                <li key={industry.slug}>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="text-sm text-[#EDE8DA]/70 hover:text-primary transition-colors"
                  >
                    {industry.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] mb-6 text-primary">
              Resources
            </h4>
            <ul className="flex flex-col gap-3">
              {RESOURCE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#EDE8DA]/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] mb-6 text-primary">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#EDE8DA]/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] mt-8 mb-4 text-primary">
              Legal
            </h4>
            <ul className="flex flex-col gap-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#EDE8DA]/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline mt-16 mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#EDE8DA]/70">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={`https://wa.me/${WHATSAPP.replace(/\s+/g, "").replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#EDE8DA]/70 hover:text-primary transition-colors flex items-center gap-1"
            >
              WhatsApp <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
