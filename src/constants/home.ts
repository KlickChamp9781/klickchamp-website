import type { Stat, FAQ, TimelineItem } from "@/types";

export type CaseStudy = {
  id: string;
  client: string;
  industry: string;
  service: string;
  title: string;
  description: string;
  results: { metric: string; value: string }[];
  testimonial?: string;
  author?: string;
};

export type WhyChooseUsItem = {
  icon: string;
  title: string;
  description: string;
};

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

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    icon: "🎯",
    title: "Data-Driven Strategy",
    description:
      "Every decision is backed by analytics. We don't guess — we measure, test, and optimize until we find what works.",
  },
  {
    icon: "🏆",
    title: "Premium Execution",
    description:
      "From pixel-perfect designs to campaign structures that convert — we obsess over the details that most agencies ignore.",
  },
  {
    icon: "📈",
    title: "Measurable ROI",
    description:
      "No vanity metrics. We track leads, revenue, and return on ad spend. You see exactly where every rupee goes.",
  },
  {
    icon: "🤝",
    title: "Dedicated Partnership",
    description:
      "You get a dedicated account manager, monthly strategy calls, and transparent reporting. We're an extension of your team.",
  },
  {
    icon: "⚡",
    title: "Rapid Execution",
    description:
      "Launch campaigns in days, not weeks. Our streamlined processes mean faster time-to-market without cutting corners.",
  },
  {
    icon: "🔒",
    title: "98% Retention Rate",
    description:
      "Our clients stay because we deliver. That's the highest retention rate in the Kolkata digital marketing space.",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs1",
    client: "Mehta Constructions",
    industry: "Real Estate",
    service: "Google Ads + SEO",
    title: "From Zero to 340% More Leads",
    description:
      "Mehta Constructions was invisible online. We built a full-funnel strategy combining Google Ads for immediate leads and SEO for long-term organic dominance.",
    results: [
      { metric: "Leads Increased", value: "340%" },
      { metric: "Cost Per Lead", value: "↓ 62%" },
      { metric: "Google Ranking", value: "Page 1" },
    ],
    testimonial: "KlickChamp transformed our online presence completely.",
    author: "Rahul Mehta, Founder",
  },
  {
    id: "cs2",
    client: "Luxe Interiors",
    industry: "Interior Design",
    service: "Social Media + Meta Ads",
    title: "Instagram Engagement from 2% to 11%",
    description:
      "Luxe Interiors needed a visual presence that matched their premium quality. We redesigned their social strategy and ran targeted Meta ad campaigns.",
    results: [
      { metric: "Engagement Rate", value: "11%" },
      { metric: "Followers Growth", value: "+850%" },
      { metric: "Monthly Leads", value: "120+" },
    ],
    testimonial: "The attention to detail in their work is extraordinary.",
    author: "Priya Sharma, Marketing Head",
  },
  {
    id: "cs3",
    client: "TechNova Solutions",
    industry: "SaaS",
    service: "Meta Ads + Email Marketing",
    title: "5x ROAS Across All Campaigns",
    description:
      "TechNova needed qualified demo requests, not just traffic. We built a multi-channel funnel with Meta Ads for acquisition and email for nurturing.",
    results: [
      { metric: "ROAS", value: "5x" },
      { metric: "Demo Requests", value: "+400%" },
      { metric: "Email Open Rate", value: "42%" },
    ],
    testimonial: "Data-driven, creative, and they actually care about results.",
    author: "Amit Das, CEO",
  },
];
