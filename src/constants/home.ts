import type { Stat, FAQ, TimelineItem } from "@/types";

export const HOME_STATS: Stat[] = [
  { value: 150, suffix: "+", label: "Clients Served", description: "Brands across India trust us" },
  { value: 98, suffix: "%", label: "Client Retention", description: "Results keep them coming back" },
  { value: 3.2, suffix: "x", label: "Avg. ROI Delivered", description: "Return on your ad spend" },
  { value: 50, suffix: "M+", label: "Leads Generated", description: "And counting" },
];

export const HOME_FAQS: FAQ[] = [
  {
    question: "What services does KlickChamp offer?",
    answer:
      "We offer a comprehensive suite of digital marketing services including SEO, Meta Ads, Google Ads, Social Media Optimization, Email Marketing, WhatsApp Campaigns, YouTube Optimization, Google My Business management, Graphic Design, Video Editing, and Website Design & Development.",
  },
  {
    question: "How much does digital marketing cost?",
    answer:
      "Our packages start from ₹15,000/month for SMEs. Pricing depends on your business goals, competition, and scope. We offer transparent pricing with no hidden fees. Contact us for a custom quote.",
  },
  {
    question: "Do you work with businesses outside Kolkata?",
    answer:
      "Absolutely. While we're based in Kolkata, we serve clients across India and internationally. Our remote-first approach allows us to deliver the same premium quality regardless of location.",
  },
  {
    question: "How long before I see results?",
    answer:
      "Paid campaigns (Meta Ads, Google Ads) can show results within the first week. SEO typically takes 3-6 months for significant results. Social media growth becomes noticeable within 2-3 months. We provide monthly reports with clear KPIs.",
  },
  {
    question: "What makes KlickChamp different?",
    answer:
      "We combine data-driven strategy with premium execution. Every campaign is backed by analytics, every design is crafted with intention, and every strategy is tailored to your specific business goals. We don't do cookie-cutter.",
  },
];

export const COMPANY_TIMELINE: TimelineItem[] = [
  {
    year: "2021",
    title: "The Spark",
    description:
      "KlickChamp was founded in Kolkata with a vision to bring world-class digital marketing to Indian businesses.",
  },
  {
    year: "2022",
    title: "First 50 Clients",
    description:
      "Reached 50 active clients within the first year. Built our core team of strategists, designers, and developers.",
  },
  {
    year: "2023",
    title: "Expansion",
    description:
      "Expanded service offerings to include video editing, YouTube optimization, and WhatsApp campaigns. Crossed ₹1 Cr in revenue.",
  },
  {
    year: "2024",
    title: "Premium Positioning",
    description:
      "Pivoted to premium positioning. Launched enterprise-grade solutions. Served 150+ brands with a 98% retention rate.",
  },
  {
    year: "2025",
    title: "The Future",
    description:
      "Scaling operations, building AI-powered tools, and establishing ourselves as India's most trusted digital growth partner.",
  },
];
