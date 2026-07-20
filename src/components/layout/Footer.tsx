"use client";

import { motion } from "framer-motion";
import { NAVIGATION, SITE_CONFIG } from "@/constants/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-kc-black-pure border-t border-kc-white/5">
      <div className="kc-container">
        <div className="py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Brand — wider column */}
            <div className="lg:col-span-4">
              <a href="/" className="flex items-center gap-3 mb-5 group">
                <div className="w-10 h-10 rounded-[var(--kc-radius-md)] bg-kc-gold flex items-center justify-center group-hover:shadow-[var(--kc-shadow-gold-lg)] transition-shadow duration-500">
                  <span className="text-kc-black font-bold text-base font-[family-name:var(--kc-font-heading)]">K</span>
                </div>
                <span className="text-[var(--kc-text-h4)] font-[family-name:var(--kc-font-heading)] font-bold text-kc-white">
                  Klick<span className="kc-gold-text">Champ</span>
                </span>
              </a>
              <p className="text-[var(--kc-text-body)] text-kc-gray-500 leading-[var(--kc-leading-relaxed)] mb-8 max-w-sm">
                {SITE_CONFIG.description.slice(0, 120)}...
              </p>
              <div className="flex items-center gap-3">
                {Object.entries(SITE_CONFIG.social).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-kc-white/5 flex items-center justify-center text-kc-gray-400 hover:text-kc-gold hover:bg-kc-gold/10 transition-all duration-300"
                  >
                    <span className="text-sm uppercase font-[family-name:var(--kc-font-heading)]">{platform.charAt(0)}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-2">
              <h3 className="text-[var(--kc-text-body-sm)] font-[family-name:var(--kc-font-heading)] font-semibold text-kc-white uppercase tracking-[var(--kc-tracking-widest)] mb-7">
                Services
              </h3>
              <ul className="space-y-4">
                {NAVIGATION.footer.services.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-[var(--kc-text-body)] text-kc-gray-400 hover:text-kc-gold transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="lg:col-span-2">
              <h3 className="text-[var(--kc-text-body-sm)] font-[family-name:var(--kc-font-heading)] font-semibold text-kc-white uppercase tracking-[var(--kc-tracking-widest)] mb-7">
                Company
              </h3>
              <ul className="space-y-4">
                {NAVIGATION.footer.company.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-[var(--kc-text-body)] text-kc-gray-400 hover:text-kc-gold transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-4">
              <h3 className="text-[var(--kc-text-body-sm)] font-[family-name:var(--kc-font-heading)] font-semibold text-kc-white uppercase tracking-[var(--kc-tracking-widest)] mb-7">
                Contact
              </h3>
              <ul className="space-y-5">
                <li>
                  <p className="text-[var(--kc-text-body-sm)] text-kc-gray-500 mb-1">Email</p>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-[var(--kc-text-body)] text-kc-gray-300 hover:text-kc-gold transition-colors duration-300"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </li>
                <li>
                  <p className="text-[var(--kc-text-body-sm)] text-kc-gray-500 mb-1">Phone</p>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="text-[var(--kc-text-body)] text-kc-gray-300 hover:text-kc-gold transition-colors duration-300"
                  >
                    {SITE_CONFIG.phoneFormatted}
                  </a>
                </li>
                <li>
                  <p className="text-[var(--kc-text-body-sm)] text-kc-gray-500 mb-1">Address</p>
                  <p className="text-[var(--kc-text-body)] text-kc-gray-300">
                    {SITE_CONFIG.address.full}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-kc-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[var(--kc-text-body-sm)] text-kc-gray-600">
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="text-[var(--kc-text-body-sm)] text-kc-gray-600 hover:text-kc-gray-400 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-[var(--kc-text-body-sm)] text-kc-gray-600 hover:text-kc-gray-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
