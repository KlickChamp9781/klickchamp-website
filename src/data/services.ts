import type { Service, ServiceSlug } from "@/types";

const services: Record<ServiceSlug, Service> = {
  "digital-marketing": {
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortTitle: "Digital Marketing",
    description:
      "End-to-end digital marketing solutions that drive growth, generate leads, and build brands.",
    longDescription:
      "Our digital marketing service is a comprehensive growth engine. We combine paid media, organic growth, content strategy, and analytics to deliver measurable results for your business.",
    icon: "Rocket",
    features: [
      "Complete digital strategy",
      "Multi-channel campaigns",
      "Data-driven approach",
      "Monthly performance reports",
      "Dedicated account manager",
      "ROI-focused execution",
    ],
    benefits: [
      "Increase in qualified leads",
      "Higher conversion rates",
      "Better brand visibility",
      "Measurable ROI",
    ],
    process: [
      { step: 1, title: "Discovery", description: "Deep-dive into your business, goals, and competition" },
      { step: 2, title: "Strategy", description: "Custom roadmap tailored to your objectives" },
      { step: 3, title: "Execution", description: "Launch campaigns across all chosen channels" },
      { step: 4, title: "Optimization", description: "Continuous testing and refinement for maximum ROI" },
    ],
    meta: {
      title: "Digital Marketing Agency in Kolkata | KlickChamp",
      description:
        "KlickChamp offers premium digital marketing services in Kolkata. SEO, Ads, Social Media, Content & more — all under one roof.",
      canonical: "/services/digital-marketing",
    },
    faqs: [
      {
        question: "What is included in your digital marketing service?",
        answer: "Our digital marketing service includes SEO, paid advertising (Meta & Google), social media management, content creation, email marketing, and detailed analytics reporting.",
      },
      {
        question: "How do you measure success?",
        answer: "We track KPIs including traffic, leads, conversions, cost per acquisition, and ROI. You receive transparent monthly reports.",
      },
    ],
  },
  seo: {
    slug: "seo",
    title: "Search Engine Optimization (SEO)",
    shortTitle: "SEO",
    description:
      "Dominate Google rankings with our data-driven SEO strategies. Technical, On-Page, Off-Page — the complete package.",
    longDescription:
      "Our SEO service is engineered to deliver sustainable organic growth. We handle everything from technical audits to content strategy and link building.",
    icon: "Search",
    features: [
      "Technical SEO audit & fixes",
      "Keyword research & strategy",
      "On-page optimization",
      "Off-page & link building",
      "Content strategy",
      "Local SEO",
      "Monthly ranking reports",
    ],
    benefits: [
      "Higher Google rankings",
      "Increased organic traffic",
      "Better brand visibility",
      "Long-term sustainable growth",
    ],
    process: [
      { step: 1, title: "Audit", description: "Comprehensive technical and content audit" },
      { step: 2, title: "Strategy", description: "Keyword mapping and competitive analysis" },
      { step: 3, title: "Execute", description: "On-page, technical, and off-page optimization" },
      { step: 4, title: "Scale", description: "Content expansion and authority building" },
    ],
    meta: {
      title: "SEO Services in Kolkata | KlickChamp",
      description:
        "Get your website to page 1 of Google. KlickChamp offers premium SEO services in Kolkata with proven results.",
      canonical: "/services/seo",
    },
    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer: "SEO is a long-term strategy. Most clients see significant improvement in 3-6 months. However, technical fixes can show quick wins within weeks.",
      },
      {
        question: "Do you guarantee rankings?",
        answer: "No ethical agency can guarantee specific rankings. What we guarantee is a transparent, data-driven process that consistently delivers organic growth.",
      },
    ],
  },
  "meta-ads": {
    slug: "meta-ads",
    title: "Meta Ads (Facebook & Instagram)",
    shortTitle: "Meta Ads",
    description:
      "Precision-targeted Meta advertising campaigns that deliver leads, sales, and brand awareness at scale.",
    longDescription:
      "We create and manage high-performing ad campaigns on Facebook and Instagram. From creative strategy to audience targeting and optimization.",
    icon: "Facebook",
    features: [
      "Campaign strategy & setup",
      "Creative design & copywriting",
      "Audience research & targeting",
      "A/B testing",
      "Funnel optimization",
      "Retargeting campaigns",
      "Weekly performance reports",
    ],
    benefits: [
      "Lower cost per lead",
      "Higher ROAS",
      "Better audience targeting",
      "Scalable campaigns",
    ],
    process: [
      { step: 1, title: "Research", description: "Auditor analysis and audience mapping" },
      { step: 2, title: "Create", description: "Ad creatives, copy, and funnel setup" },
      { step: 3, title: "Launch", description: "Campaign go-live with monitoring" },
      { step: 4, title: "Optimize", description: "Daily optimization for maximum ROAS" },
    ],
    meta: {
      title: "Meta Ads Agency in Kolkata | KlickChamp",
      description:
        "KlickChamp is a premium Meta Ads agency in Kolkata. Facebook & Instagram advertising that delivers real results.",
      canonical: "/services/meta-ads",
    },
    faqs: [
      {
        question: "What budget do I need for Meta Ads?",
        answer: "We recommend a minimum ad spend of ₹15,000/month plus our management fee. The exact budget depends on your goals and competition.",
      },
    ],
  },
  "google-ads": {
    slug: "google-ads",
    title: "Google Ads (PPC)",
    shortTitle: "Google Ads",
    description:
      "Get instant visibility on Google with our expertly managed PPC campaigns. Search, Display, Shopping & YouTube.",
    longDescription:
      "Our Google Ads service covers Search, Display, Shopping, and YouTube campaigns. We focus on maximizing your ROAS with every rupee spent.",
    icon: "Globe",
    features: [
      "Search campaign management",
      "Display advertising",
      "Google Shopping setup",
      "YouTube ads",
      "Landing page optimization",
      "Conversion tracking",
      "Budget optimization",
    ],
    benefits: [
      "Immediate visibility",
      "Pay only for results",
      "Precise audience targeting",
      "Measurable ROI",
    ],
    process: [
      { step: 1, title: "Audit", description: "Existing account analysis or fresh setup" },
      { step: 2, title: "Build", description: "Campaign structure, keywords, and ad copy" },
      { step: 3, title: "Launch", description: "Go live with daily monitoring" },
      { step: 4, title: "Scale", description: "Increase spend on winning campaigns" },
    ],
    meta: {
      title: "Google Ads Management in Kolkata | KlickChamp",
      description:
        "KlickChamp manages Google Ads campaigns that deliver qualified leads and maximum ROAS for businesses in Kolkata.",
      canonical: "/services/google-ads",
    },
    faqs: [
      {
        question: "What is the minimum budget for Google Ads?",
        answer: "We recommend starting with at least ₹20,000/month for ad spend, plus our management fee, depending on your industry.",
      },
    ],
  },
  "google-my-business": {
    slug: "google-my-business",
    title: "Google My Business (GMB)",
    shortTitle: "GMB",
    description:
      "Dominate local search with an optimized Google My Business profile. Get found by customers in your area.",
    longDescription:
      "We optimize and manage your Google My Business profile to ensure maximum local visibility. From profile setup to review management and local SEO.",
    icon: "MapPin",
    features: [
      "Profile setup & optimization",
      "Local SEO strategy",
      "Review management",
      "Post scheduling",
      "Q&A management",
      "Photo & video optimization",
      "Local citation building",
    ],
    benefits: [
      "More local visibility",
      "Higher foot traffic",
      "Better local rankings",
      "Increased trust",
    ],
    process: [
      { step: 1, title: "Audit", description: "Profile and local presence analysis" },
      { step: 2, title: "Optimize", description: "Complete profile optimization" },
      { step: 3, title: "Manage", description: "Posts, reviews, and ongoing activity" },
      { step: 4, title: "Grow", description: "Local authority and ranking improvement" },
    ],
    meta: {
      title: "Google My Business Optimization | KlickChamp",
      description:
        "Optimize your Google My Business profile for maximum local visibility. KlickChamp offers GMB management in Kolkata.",
      canonical: "/services/google-my-business",
    },
    faqs: [],
  },
  "email-marketing": {
    slug: "email-marketing",
    title: "Email Marketing",
    shortTitle: "Email Marketing",
    description:
      "Turn subscribers into customers with our strategic email marketing campaigns. Automation, newsletters, and drip sequences.",
    longDescription:
      "Our email marketing service covers everything from strategy and design to automation and analytics. We build email experiences that convert.",
    icon: "Mail",
    features: [
      "Email strategy development",
      "Template design",
      "Automation setup",
      "Drip sequences",
      "Newsletter campaigns",
      "A/B testing",
      "Analytics & reporting",
    ],
    benefits: [
      "Higher engagement rates",
      "Increased customer retention",
      "Automated nurturing",
      "Measurable ROI",
    ],
    process: [
      { step: 1, title: "Strategy", description: "Email marketing plan and segmentation" },
      { step: 2, title: "Design", description: "Beautiful, conversion-focused templates" },
      { step: 3, title: "Automate", description: "Set up sequences and triggers" },
      { step: 4, title: "Optimize", description: "A/B test and improve performance" },
    ],
    meta: {
      title: "Email Marketing Services | KlickChamp",
      description:
        "KlickChamp offers premium email marketing services. Automation, newsletters, and campaigns that drive revenue.",
      canonical: "/services/email-marketing",
    },
    faqs: [],
  },
  "youtube-optimization": {
    slug: "youtube-optimization",
    title: "YouTube Optimization",
    shortTitle: "YouTube",
    description:
      "Grow your YouTube channel with our expert optimization services. Thumbnails, SEO, content strategy & more.",
    longDescription:
      "We help brands and creators grow on YouTube through channel optimization, video SEO, content strategy, thumbnail design, and audience development.",
    icon: "Youtube",
    features: [
      "Channel audit & optimization",
      "Video SEO & tags",
      "Thumbnail design",
      "Content strategy",
      "Audience development",
      "Playlist optimization",
      "Competitor analysis",
    ],
    benefits: [
      "More views and subscribers",
      "Better search rankings",
      "Higher watch time",
      "Increased revenue",
    ],
    process: [
      { step: 1, title: "Audit", description: "Channel performance and content analysis" },
      { step: 2, title: "Optimize", description: "SEO, thumbnails, and channel setup" },
      { step: 3, title: "Create", description: "Content calendar and production support" },
      { step: 4, title: "Grow", description: "Audience building and monetization" },
    ],
    meta: {
      title: "YouTube Optimization Services | KlickChamp",
      description:
        "Grow your YouTube channel with KlickChamp's optimization services. Video SEO, thumbnails, and content strategy.",
      canonical: "/services/youtube-optimization",
    },
    faqs: [],
  },
  "whatsapp-campaign": {
    slug: "whatsapp-campaign",
    title: "WhatsApp Campaign",
    shortTitle: "WhatsApp",
    description:
      "Reach customers directly on WhatsApp with our strategic campaigns. Bulk messaging, automation & broadcast lists.",
    longDescription:
      "WhatsApp has the highest open rates of any channel. We help you leverage it with strategic campaigns, chatbot automation, and broadcast management.",
    icon: "MessageCircle",
    features: [
      "WhatsApp Business setup",
      "Campaign strategy",
      "Bulk messaging",
      "Chatbot automation",
      "Broadcast management",
      "Template creation",
      "Analytics tracking",
    ],
    benefits: [
      "98% open rates",
      "Direct customer reach",
      "Instant engagement",
      "High conversion rates",
    ],
    process: [
      { step: 1, title: "Setup", description: "WhatsApp Business API configuration" },
      { step: 2, title: "Strategy", description: "Campaign planning and audience segmentation" },
      { step: 3, title: "Launch", description: "Campaign execution and monitoring" },
      { step: 4, title: "Scale", description: "Automation and performance optimization" },
    ],
    meta: {
      title: "WhatsApp Marketing Campaign | KlickChamp",
      description:
        "KlickChamp offers WhatsApp marketing campaigns. Bulk messaging, automation, and direct customer engagement.",
      canonical: "/services/whatsapp-campaign",
    },
    faqs: [],
  },
  "social-media-optimization": {
    slug: "social-media-optimization",
    title: "Social Media Optimization (SMO)",
    shortTitle: "Social Media",
    description:
      "Build a powerful brand presence across all social media platforms. Strategy, content, community & analytics.",
    longDescription:
      "We manage your complete social media presence across Instagram, LinkedIn, Facebook, X, and more. From content creation to community management and analytics.",
    icon: "Share2",
    features: [
      "Multi-platform management",
      "Content calendar creation",
      "Graphic design",
      "Community management",
      "Hashtag strategy",
      "Analytics & reporting",
      "Influencer collaborations",
    ],
    benefits: [
      "Stronger brand presence",
      "Higher engagement rates",
      "Community growth",
      "Brand loyalty",
    ],
    process: [
      { step: 1, title: "Audit", description: "Current presence and competitor analysis" },
      { step: 2, title: "Strategy", description: "Content pillars and posting schedule" },
      { step: 3, title: "Create", description: "Design, write, and schedule content" },
      { step: 4, title: "Engage", description: "Community management and optimization" },
    ],
    meta: {
      title: "Social Media Marketing Agency | KlickChamp",
      description:
        "KlickChamp manages your social media presence. Instagram, LinkedIn, Facebook, X — we handle it all.",
      canonical: "/services/social-media-optimization",
    },
    faqs: [],
  },
  "graphic-design": {
    slug: "graphic-design",
    title: "Graphic Design",
    shortTitle: "Graphic Design",
    description:
      "Premium visual design that communicates your brand story. Social media creatives, branding, print & digital.",
    longDescription:
      "Our design team creates stunning visuals that align with your brand identity. From social media creatives to complete brand identity systems.",
    icon: "Palette",
    features: [
      "Brand identity design",
      "Social media creatives",
      "Presentation design",
      "Print design",
      "Digital ads design",
      "Logo design",
      "Brand guidelines",
    ],
    benefits: [
      "Consistent brand identity",
      "Professional visual presence",
      "Higher engagement",
      "Brand recognition",
    ],
    process: [
      { step: 1, title: "Brief", description: "Understanding your vision and brand" },
      { step: 2, title: "Concept", description: "Mood boards and design concepts" },
      { step: 3, title: "Design", description: "Polished, pixel-perfect execution" },
      { step: 4, title: "Deliver", description: "All formats and brand guidelines" },
    ],
    meta: {
      title: "Graphic Design Agency in Kolkata | KlickChamp",
      description:
        "Premium graphic design services in Kolkata. Brand identity, social media creatives, and visual storytelling by KlickChamp.",
      canonical: "/services/graphic-design",
    },
    faqs: [],
  },
  "video-editing": {
    slug: "video-editing",
    title: "Video Editing",
    shortTitle: "Video Editing",
    description:
      "Professional video editing that captures attention. Reels, YouTube, ads, corporate videos & motion graphics.",
    longDescription:
      "Our video editing team crafts compelling visual stories. From short-form social content to long-form corporate productions.",
    icon: "Film",
    features: [
      "Social media reels & shorts",
      "YouTube video editing",
      "Ad video production",
      "Corporate video editing",
      "Motion graphics",
      "Color grading",
      "Sound design",
    ],
    benefits: [
      "Higher viewer retention",
      "Professional quality",
      "Platform-optimized content",
      "Time savings",
    ],
    process: [
      { step: 1, title: "Brief", description: "Share raw footage and your vision" },
      { step: 2, title: "Edit", description: "Rough cut and creative direction" },
      { step: 3, title: "Refine", description: "Color, sound, graphics, and polish" },
      { step: 4, title: "Deliver", description: "Exported in all required formats" },
    ],
    meta: {
      title: "Video Editing Services in Kolkata | KlickChamp",
      description:
        "Professional video editing services by KlickChamp. Reels, YouTube, ads, and corporate videos.",
      canonical: "/services/video-editing",
    },
    faqs: [],
  },
  "website-design-development": {
    slug: "website-design-development",
    title: "Website Design & Development",
    shortTitle: "Web Design",
    description:
      "Premium websites that convert. Custom design, blazing performance, and SEO-ready architecture.",
    longDescription:
      "We design and develop premium websites that look stunning and perform flawlessly. From landing pages to full-scale web applications.",
    icon: "Code",
    features: [
      "Custom UI/UX design",
      "Next.js / React development",
      "Responsive design",
      "SEO-optimized architecture",
      "Performance optimization",
      "CMS integration",
      "E-commerce solutions",
    ],
    benefits: [
      "Premium brand image",
      "Higher conversions",
      "Better SEO rankings",
      "Faster load times",
    ],
    process: [
      { step: 1, title: "Discovery", description: "Requirements, goals, and audience" },
      { step: 2, title: "Design", description: "UI/UX design and prototyping" },
      { step: 3, title: "Develop", description: "Clean code, fast performance" },
      { step: 4, title: "Launch", description: "Testing, optimization, and go-live" },
    ],
    meta: {
      title: "Website Design & Development Agency | KlickChamp",
      description:
        "KlickChamp builds premium websites. Custom design, Next.js development, SEO-optimized, blazing fast.",
      canonical: "/services/website-design-development",
    },
    faqs: [],
  },
};

export function getAllServices(): Service[] {
  return Object.values(services);
}

export function getServiceBySlug(slug: ServiceSlug): Service {
  return services[slug];
}

export function getFeaturedServices(): Service[] {
  return [
    services["seo"],
    services["meta-ads"],
    services["google-ads"],
    services["website-design-development"],
    services["social-media-optimization"],
    services["graphic-design"],
  ];
}
