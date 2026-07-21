export interface Author {
  name: string;
  role: string;
  bio: string;
  shortBio: string;
  avatar: string;
  expertise: string[];
  social?: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
  articles: string[];
}

export const AUTHORS: Record<string, Author> = {
  "Sayan Nath": {
    name: "Sayan Nath",
    role: "Technical Lead & Co-Founder",
    bio: "Sayan leads KlickChamp's technical strategy, specializing in SEO, web performance, and data-driven marketing. With deep expertise in Google's algorithm updates, technical site architecture, and conversion rate optimization, he crafts strategies that deliver measurable business outcomes for businesses across India.",
    shortBio: "Technical lead specializing in SEO and data-driven marketing.",
    avatar: "/images/team/sayan-nath.jpg",
    expertise: ["Technical SEO", "Web Performance", "Conversion Optimization", "Google Ads", "Site Architecture"],
    social: {
      linkedin: "https://linkedin.com/in/sayan-nath",
    },
    articles: [
      "seo-guide-small-business",
      "technical-seo-checklist",
      "youtube-seo-guide",
      "website-design-vs-development",
      "whatsapp-marketing-local-businesses",
    ],
  },
  "Sumit Chakrabarty": {
    name: "Sumit Chakrabarty",
    role: "Marketing Executive",
    bio: "Sumit brings creative campaign strategy and brand storytelling to KlickChamp. His work spans content marketing, social media strategy, and brand development for businesses across India. He combines creative vision with data-informed decision making to build campaigns that resonate.",
    shortBio: "Creative strategist specializing in content and brand marketing.",
    avatar: "/images/team/sumit-chakrabarty.jpg",
    expertise: ["Content Marketing", "Brand Strategy", "Social Media", "Campaign Management", "Storytelling"],
    social: {
      linkedin: "https://linkedin.com/in/sumit-chakrabarty",
    },
    articles: [
      "social-media-marketing-strategy",
      "email-marketing-best-practices",
      "graphic-design-brand-identity",
    ],
  },
  "KlickChamp Team": {
    name: "KlickChamp Team",
    role: "Editorial Team",
    bio: "The KlickChamp editorial team combines decades of collective experience across SEO, paid media, design, and content strategy to deliver actionable insights for businesses.",
    shortBio: "KlickChamp's collective editorial expertise.",
    avatar: "/images/team/default.jpg",
    expertise: ["Digital Marketing", "SEO", "Content Strategy", "Social Media", "Brand Building"],
    social: {},
    articles: [
      "video-editing-marketing-results",
      "email-marketing-best-practices",
      "whatsapp-marketing-local-businesses",
      "social-media-marketing-strategy",
      "graphic-design-brand-identity",
    ],
  },
  "Surajit Bera": {
    name: "Surajit Bera",
    role: "Sales & Marketing Executive",
    bio: "Surajit connects businesses with the digital strategies they need to grow. His deep understanding of market dynamics and client needs ensures every campaign delivers tangible ROI. He specializes in Google Ads, Meta Ads, and performance-driven marketing across multiple industries.",
    shortBio: "Performance marketing expert driving client growth and ROI.",
    avatar: "/images/team/surajit-bera.jpg",
    expertise: ["Google Ads", "Meta Ads", "Lead Generation", "PPC Strategy", "Client Growth"],
    social: {
      linkedin: "https://linkedin.com/in/surajit-bera",
    },
    articles: [
      "google-ads-vs-meta-ads",
      "google-business-profile-optimization",
      "video-editing-marketing-results",
    ],
  },
};

export function getAuthor(name: string): Author | undefined {
  return AUTHORS[name];
}

export function getAllAuthors(): Author[] {
  return Object.values(AUTHORS);
}
