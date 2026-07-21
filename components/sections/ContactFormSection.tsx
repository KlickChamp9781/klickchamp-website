"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle } from "lucide-react";

const serviceOptions = [
  { value: "digital-marketing", label: "Digital Marketing" },
  { value: "graphic-design", label: "Graphic Design" },
  { value: "video-editing", label: "Video Editing" },
  { value: "website-design", label: "Website Design & Development" },
  { value: "other", label: "Other" },
];

const budgetOptions = [
  { value: "under-25k", label: "Under ₹25,000" },
  { value: "25k-50k", label: "₹25,000 - ₹50,000" },
  { value: "50k-1l", label: "₹50,000 - ₹1,00,000" },
  { value: "1l-5l", label: "₹1,00,000 - ₹5,00,000" },
  { value: "5l+", label: "₹5,00,000+" },
];

export function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const company = formData.get("company") as string;
    const service = formData.get("service") as string;
    const budget = formData.get("budget") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !service || !message) {
      setError(true);
      setTimeout(() => setError(false), 3000);
      return;
    }

    const subject = encodeURIComponent(`New Inquiry from ${name} — ${service}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nCompany: ${company || "N/A"}\nService: ${service}\nBudget: ${budget || "N/A"}\n\nMessage:\n${message}`
    );

    window.open(`mailto:klickchamp5@gmail.com?subject=${subject}&body=${body}`);
    setSubmitted(true);
    form.reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="py-20 lg:py-30" id="contact">
      <div className="container-main">
        <div className="grid-12 gap-8 lg:gap-16">
          <ScrollReveal className="col-span-12 lg:col-span-5">
            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] mb-6">
              Let&apos;s build <span className="text-gradient-gold">together.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Tell us about your project and we&apos;ll get back to you within 24 hours
              with a tailored proposal.
            </p>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.1em] mb-2">Email</p>
                <p className="text-muted-foreground">klickchamp5@gmail.com</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.1em] mb-2">Phone</p>
                <p className="text-muted-foreground">+91 7890444460</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.1em] mb-2">WhatsApp</p>
                <p className="text-muted-foreground">+91 9674088861</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.1em] mb-2">Address</p>
                <p className="text-muted-foreground">Kolkata 700029, West Bengal, India</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="col-span-12 lg:col-span-7" delay={0.2}>
            {submitted && (
              <div className="flex items-center gap-3 p-4 border border-green-500/30 bg-green-500/5 mb-8">
                <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                <p className="text-sm">Email client opened! Send the email to complete your inquiry.</p>
              </div>
            )}

            {error && (
              <div className="flex items-center gap-3 p-4 border border-red-500/30 bg-red-500/5 mb-8">
                <AlertCircle className="h-5 w-5 text-red-500 shrink-0" />
                <p className="text-sm">Please fill in all required fields.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.1em] mb-2 block">
                    Full Name *
                  </label>
                  <Input name="name" placeholder="John Doe" required />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.1em] mb-2 block">
                    Email Address *
                  </label>
                  <Input name="email" type="email" placeholder="john@company.com" required />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.1em] mb-2 block">
                    Phone
                  </label>
                  <Input name="phone" placeholder="+91 XXXXX XXXXX" />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.1em] mb-2 block">
                    Company
                  </label>
                  <Input name="company" placeholder="Company Name" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.1em] mb-2 block">
                    Service Required *
                  </label>
                  <Select name="service" options={serviceOptions} placeholder="Select a service" />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.1em] mb-2 block">
                    Budget Range
                  </label>
                  <Select name="budget" options={budgetOptions} placeholder="Select budget" />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.1em] mb-2 block">
                  Project Details *
                </label>
                <Textarea
                  name="message"
                  placeholder="Tell us about your project, goals, and timeline..."
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full md:w-auto">
                Send Message
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
