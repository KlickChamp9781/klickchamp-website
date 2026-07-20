"use client";

import { NAVIGATION, SITE_CONFIG } from "@/constants/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-kc-black-pure border-t border-kc-white/[0.04]">
      <div className="kc-container">
        <div className="py-20 lg:py-28">
          <div className="kc-grid">
            <div className="lg:col-span-4 col-span-12">
              <a href="/" className="flex items-center gap-3 mb-6 group">
                <div className="w-11 h-11 rounded-[var(--kc-radius-md)] bg-kc-gold flex items-center justify-center group-hover:shadow-[var(--kc-shadow-gold-lg)] transition-shadow duration-500">
                  <span className="text-kc-black font-bold text-base font-heading">K</span>
                </div>
                <span className="text-[var(--kc-text-h4)] font-heading font-bold text-kc-white">
                  Klick<span className="kc-gold-text">Champ</span>
                </span>
              </a>
              <p className="text-[var(--kc-text-body)] text-kc-gray-500 leading-relaxed mb-10 max-w-sm">
                {SITE_CONFIG.description}
              </p>
              <div className="flex items-center gap-3">
                {Object.entries(SITE_CONFIG.social).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-kc-white/[0.03] flex items-center justify-center text-kc-gray-600 hover:text-kc-white hover:bg-kc-white/[0.06] transition-all duration-300"
                  >
                    <span className="text-xs uppercase font-heading font-medium">{platform.charAt(0)}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 col-span-12">
              <h3 className="text-xs font-heading font-semibold text-kc-gray-400 uppercase tracking-[0.2em] mb-8">
                Services
              </h3>
              <ul className="space-y-3">
                {NAVIGATION.footer.services.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-[var(--kc-text-body)] text-kc-gray-500 hover:text-kc-white transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2 col-span-12">
              <h3 className="text-xs font-heading font-semibold text-kc-gray-400 uppercase tracking-[0.2em] mb-8">
                Company
              </h3>
              <ul className="space-y-3">
                {NAVIGATION.footer.company.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-[var(--kc-text-body)] text-kc-gray-500 hover:text-kc-white transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-4 col-span-12">
              <h3 className="text-xs font-heading font-semibold text-kc-gray-400 uppercase tracking-[0.2em] mb-8">
                Contact
              </h3>
              <ul className="space-y-5">
                <li>
                  <p className="text-xs uppercase tracking-[0.2em] text-kc-gray-600 mb-2 font-heading">Email</p>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-[var(--kc-text-body)] text-kc-gray-400 hover:text-kc-white transition-colors duration-300">
                    {SITE_CONFIG.email}
                  </a>
                </li>
                <li>
                  <p className="text-xs uppercase tracking-[0.2em] text-kc-gray-600 mb-2 font-heading">Phone</p>
                  <a href={`tel:${SITE_CONFIG.phone}`} className="text-[var(--kc-text-body)] text-kc-gray-400 hover:text-kc-white transition-colors duration-300">
                    {SITE_CONFIG.phoneFormatted}
                  </a>
                </li>
                <li>
                  <p className="text-xs uppercase tracking-[0.2em] text-kc-gray-600 mb-2 font-heading">Address</p>
                  <p className="text-[var(--kc-text-body)] text-kc-gray-400 leading-relaxed">
                    {SITE_CONFIG.address.street}, {SITE_CONFIG.address.city}
                    <br />
                    {SITE_CONFIG.address.state}, {SITE_CONFIG.address.zip}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-8 border-t border-kc-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-kc-gray-600">
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="text-sm text-kc-gray-600 hover:text-kc-gray-400 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-sm text-kc-gray-600 hover:text-kc-gray-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
