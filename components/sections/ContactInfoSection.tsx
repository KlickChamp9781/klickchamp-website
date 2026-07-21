"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CONTACT_EMAIL, PHONE, WHATSAPP, ADDRESS } from "@/lib/constants";
import { LOCATIONS } from "@/lib/data/locations";
import { INDUSTRIES } from "@/lib/data/industries";
import { Mail, Phone, MessageCircle, MapPin, Clock, Reply } from "lucide-react";

const enquiryTypes = [
  {
    icon: Mail,
    title: "Service Enquiry",
    description: "Interested in a specific service? Tell us what you need and we'll prepare a tailored proposal.",
    email: CONTACT_EMAIL,
    subject: "Service Enquiry",
  },
  {
    icon: MapPin,
    title: "Project Enquiry",
    description: "Have a project in mind? Share the details and we'll outline the scope, timeline, and investment.",
    email: CONTACT_EMAIL,
    subject: "Project Enquiry",
  },
  {
    icon: Reply,
    title: "General Enquiry",
    description: "Questions about our agency, partnership opportunities, or anything else? We're here to help.",
    email: CONTACT_EMAIL,
    subject: "General Enquiry",
  },
];

export function ContactInfoSection() {
  const industryCount = INDUSTRIES.length;
  const locationCount = LOCATIONS.length;

  return (
    <section className="section-padding border-t border-border">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Enquiry Types */}
          <ScrollReveal className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">How can we help?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {enquiryTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <div
                    key={type.title}
                    className="border border-border p-6 flex flex-col"
                  >
                    <Icon className="h-5 w-5 text-primary mb-4" />
                    <h3 className="font-bold mb-2">{type.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {type.description}
                    </p>
                    <a
                      href={`mailto:${type.email}?subject=${encodeURIComponent(type.subject)}`}
                      className="mt-auto text-sm font-medium text-primary hover:underline"
                      aria-label={`Send ${type.title.toLowerCase()}`}
                    >
                      {type.email} &rarr;
                    </a>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Contact Details */}
          <ScrollReveal delay={0.2}>
            <h2 className="text-2xl font-bold mb-6">Contact details</h2>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold mb-1">Email</p>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold mb-1">Phone</p>
                  <a href={`tel:${PHONE}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {PHONE}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold mb-1">WhatsApp</p>
                  <a href={`https://wa.me/${WHATSAPP.replace(/[^0-9]/g, "")}`} className="text-sm text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                    {WHATSAPP}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold mb-1">Address</p>
                  <p className="text-sm text-muted-foreground">{ADDRESS}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold mb-1">Business Hours</p>
                  <p className="text-sm text-muted-foreground">Mon – Sat, 9:00 AM – 6:00 PM</p>
                  <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Reply className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold mb-1">Response Time</p>
                  <p className="text-sm text-muted-foreground">Within 24 hours (business days)</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Service Areas */}
        <ScrollReveal className="mt-16">
          <div className="border border-border p-8">
            <h2 className="text-xl font-bold mb-2">Service Areas</h2>
            <p className="text-sm text-muted-foreground mb-6 max-w-xl">
              We serve businesses across {locationCount} locations throughout Kolkata and surrounding areas, spanning {industryCount} industries.
            </p>
            <div className="flex flex-wrap gap-2">
              {LOCATIONS.map((loc) => (
                <a
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="text-xs border border-border px-3 py-1.5 hover:border-primary hover:text-primary transition-colors"
                  aria-label={`Digital marketing services in ${loc.title}`}
                >
                  {loc.title}
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
