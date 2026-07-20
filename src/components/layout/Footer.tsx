"use client";

import { motion } from "framer-motion";
import { NAVIGATION, SITE_CONFIG } from "@/constants/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-kc-black border-t border-kc-white/5">
      {/* Main Footer */}
      <div className="kc-section">
        <div className="kc-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <a href="/" className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-[var(--kc-radius-sm)] bg-kc-gold flex items-center justify-center">
                  <span className="text-kc-black font-bold text-sm font-[family-name:var(--kc-font-heading)]">K</span>
                </div>
                <span className="text-xl font-[family-name:var(--kc-font-heading)] font-bold text-kc-white">
                  Klick<span className="kc-gold-text">Champ</span>
                </span>
              </a>
              <p className="text-sm text-kc-gray-500 leading-[var(--kc-leading-relaxed)] mb-6 max-w-xs">
                {SITE_CONFIG.description.slice(0, 120)}...
              </p>
              <div className="flex items-center gap-3">
                {Object.entries(SITE_CONFIG.social).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-kc-white/5 flex items-center justify-center text-kc-gray-400 hover:text-kc-gold hover:bg-kc-gold/10 transition-colors duration-300"
                  >
                    <span className="text-xs uppercase">{platform.charAt(0)}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-[family-name:var(--kc-font-heading)] font-semibold text-kc-white uppercase tracking-[var(--kc-tracking-widest)] mb-6">
                Services
              </h3>
              <ul className="space-y-3">
                {NAVIGATION.footer.services.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-kc-gray-400 hover:text-kc-gold transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-[family-name:var(--kc-font-heading)] font-semibold text-kc-white uppercase tracking-[var(--kc-tracking-widest)] mb-6">
                Company
              </h3>
              <ul className="space-y-3">
                {NAVIGATION.footer.company.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-kc-gray-400 hover:text-kc-gold transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-[family-name:var(--kc-font-heading)] font-semibold text-kc-white uppercase tracking-[var(--kc-tracking-widest)] mb-6">
                Contact
              </h3>
              <ul className="space-y-4">
                <li>
                  <p className="text-xs text-kc-gray-500 mb-1">Email</p>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-sm text-kc-gray-300 hover:text-kc-gold transition-colors duration-300"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </li>
                <li>
                  <p className="text-xs text-kc-gray-500 mb-1">Phone</p>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="text-sm text-kc-gray-300 hover:text-kc-gold transition-colors duration-300"
                  >
                    {SITE_CONFIG.phoneFormatted}
                  </a>
                </li>
                <li>
                  <p className="text-xs text-kc-gray-500 mb-1">Address</p>
                  <p className="text-sm text-kc-gray-300">
                    {SITE_CONFIG.address.full}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-kc-white/5">
        <div className="kc-container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-kc-gray-600">
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="text-xs text-kc-gray-600 hover:text-kc-gray-400 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-xs text-kc-gray-600 hover:text-kc-gray-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
