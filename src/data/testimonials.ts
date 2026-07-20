import type { Testimonial } from "@/types";

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Rahul Mehta",
    role: "Founder",
    company: "Mehta Constructions",
    content:
      "KlickChamp transformed our online presence completely. Our leads increased by 340% in just 4 months. Their SEO and Google Ads strategy is phenomenal.",
    rating: 5,
    service: "google-ads",
    results: "340% increase in leads",
    featured: true,
  },
  {
    id: "t2",
    name: "Priya Sharma",
    role: "Marketing Head",
    company: "Luxe Interiors",
    content:
      "The attention to detail in their work is extraordinary. Our Instagram engagement went from 2% to 11% within 3 months. Absolutely worth every rupee.",
    rating: 5,
    service: "social-media-optimization",
    results: "11% engagement rate",
    featured: true,
  },
  {
    id: "t3",
    name: "Amit Das",
    role: "CEO",
    company: "TechNova Solutions",
    content:
      "We've tried multiple agencies before KlickChamp. The difference is night and day. Data-driven, creative, and they actually care about results.",
    rating: 5,
    service: "meta-ads",
    results: "5x ROAS achieved",
    featured: true,
  },
  {
    id: "t4",
    name: "Sneha Roy",
    role: "Director",
    company: "Roy Fashion House",
    content:
      "Our website now looks like a million-dollar brand. The design quality and performance are incredible. Page load under 1.5 seconds!",
    rating: 5,
    service: "website-design-development",
    results: "1.2s page load time",
    featured: false,
  },
  {
    id: "t5",
    name: "Vikram Singh",
    role: "Partner",
    company: "Singh Legal Associates",
    content:
      "KlickChamp helped us rank #1 for 'lawyer in Kolkata' within 5 months. Their SEO expertise is unmatched in this city.",
    rating: 5,
    service: "seo",
    results: "#1 Google ranking",
    featured: false,
  },
  {
    id: "t6",
    name: "Ananya Bose",
    role: "Founder",
    company: "HealthyBowl",
    content:
      "The email campaigns they designed for us have a 42% open rate. Our customers love the content and our revenue from email doubled.",
    rating: 5,
    service: "email-marketing",
    results: "42% email open rate",
    featured: false,
  },
];

export function getFeaturedTestimonials(): Testimonial[] {
  return TESTIMONIALS.filter((t) => t.featured);
}

export function getTestimonialsByService(service: string): Testimonial[] {
  return TESTIMONIALS.filter((t) => t.service === service);
}
