"use client";

import { NAVIGATION, SITE_CONFIG } from "@/constants/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-kc-black-pure border-t border-kc-white/[0.04]">
      <div className="kc-container">
        {/* Top */}
        <div className="py-24 lg:py-32">
          <div className="kc-grid gap-16 lg:gap-20">
            {/* Brand Column */}
            <div className="lg:col-span-4 col-span-12">
              <a href="/" className="flex items-center gap-4 mb-8 group">
                <div className="w-14 h-14 rounded-xl bg-kc-gold flex items-center justify-center group-hover:shadow-[var(--kc-shadow-gold-lg)] transition-all duration-500">
                  <span className="text-kc-black font-bold text-xl font-heading">K</span>
                </div>
                <span className="text-2xl font-heading font-bold text-kc-white">
                  Klick<span className="kc-gold-text">Champ</span>
                </span>
              </a>
              <p className="text-base font-heading font-medium text-kc-gray-500 leading-relaxed mb-8 max-w-sm">
                {SITE_CONFIG.description}
              </p>
              <div className="flex items-center gap-4">
                {Object.entries(SITE_CONFIG.social).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-kc-white/[0.03] border border-kc-white/[0.06] flex items-center justify-center text-kc-gray-500 hover:text-kc-gold hover:border-kc-gold/30 hover:bg-kc-gold/[0.04] transition-all duration-300"
                  >
                    <span className="text-sm uppercase font-heading font-bold">{platform.charAt(0)}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-2 col-span-12">
              <h3 className="text-sm font-heading font-bold text-kc-white uppercase tracking-[0.15em] mb-8">
                Services
              </h3>
              <ul className="space-y-4">
                {NAVIGATION.footer.services.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-base font-heading font-medium text-kc-gray-500 hover:text-kc-white transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="lg:col-span-2 col-span-12">
              <h3 className="text-sm font-heading font-bold text-kc-white uppercase tracking-[0.15em] mb-8">
                Company
              </h3>
              <ul className="space-y-4">
                {NAVIGATION.footer.company.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-base font-heading font-medium text-kc-gray-500 hover:text-kc-white transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-4 col-span-12">
              <h3 className="text-sm font-heading font-bold text-kc-white uppercase tracking-[0.15em] mb-8">
                Contact
              </h3>
              <ul className="space-y-6">
                <li>
                  <p className="text-xs font-heading font-bold text-kc-gray-600 uppercase tracking-[0.15em] mb-2">Email</p>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-lg font-heading font-bold text-kc-gray-300 hover:text-kc-gold transition-colors duration-300"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </li>
                <li>
                  <p className="text-xs font-heading font-bold text-kc-gray-600 uppercase tracking-[0.15em] mb-2">Phone</p>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="text-lg font-heading font-bold text-kc-gray-300 hover:text-kc-gold transition-colors duration-300"
                  >
                    {SITE_CONFIG.phoneFormatted}
                  </a>
                </li>
                <li>
                  <p className="text-xs font-heading font-bold text-kc-gray-600 uppercase tracking-[0.15em] mb-2">Address</p>
                  <p className="text-base font-heading font-medium text-kc-gray-400 leading-relaxed">
                    {SITE_CONFIG.address.street}, {SITE_CONFIG.address.city}
                    <br />
                    {SITE_CONFIG.address.state}, {SITE_CONFIG.address.zip}, {SITE_CONFIG.address.country}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-10 border-t border-kc-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm font-heading font-medium text-kc-gray-600">
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="/privacy-policy" className="text-sm font-heading font-medium text-kc-gray-600 hover:text-kc-white transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-sm font-heading font-medium text-kc-gray-600 hover:text-kc-white transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
