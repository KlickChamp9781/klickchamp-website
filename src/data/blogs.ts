import type { BlogPost, BlogCategory } from "@/types";

export const BLOG_CATEGORIES: BlogCategory[] = [
  { slug: "seo", name: "SEO", description: "Search engine optimization insights and strategies" },
  { slug: "social-media", name: "Social Media", description: "Social media marketing tips and trends" },
  { slug: "ads", name: "Paid Advertising", description: "Meta Ads, Google Ads, and PPC strategies" },
  { slug: "web-design", name: "Web Design", description: "Website design trends and development insights" },
  { slug: "content", name: "Content Marketing", description: "Content strategy and creation tips" },
  { slug: "business", name: "Business Growth", description: "Digital growth strategies for businesses" },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "seo-trends-2025",
    title: "Top 10 SEO Trends That Will Dominate 2025",
    excerpt:
      "Stay ahead of the curve with these SEO trends. From AI-powered search to voice optimization, here's what matters.",
    content: "",
    author: "Sonia Mandal",
    publishedAt: "2025-01-15",
    category: "seo",
    tags: ["SEO", "Google", "Trends", "2025"],
    readTime: 6,
    meta: {
      title: "Top 10 SEO Trends 2025 | KlickChamp Blog",
      description: "Discover the top SEO trends for 2025 that will shape search rankings and digital marketing strategies.",
    },
  },
  {
    slug: "meta-ads-guide-beginners",
    title: "The Complete Meta Ads Guide for Beginners",
    excerpt:
      "Everything you need to know about running your first Facebook & Instagram ad campaign. From setup to optimization.",
    content: "",
    author: "Ishita Banerjee",
    publishedAt: "2025-01-10",
    category: "ads",
    tags: ["Meta Ads", "Facebook", "Instagram", "PPC"],
    readTime: 10,
    meta: {
      title: "Complete Meta Ads Guide for Beginners | KlickChamp",
      description: "Learn how to create, manage, and optimize Facebook and Instagram ad campaigns from scratch.",
    },
  },
  {
    slug: "website-speed-optimization",
    title: "Why Your Website Speed is Killing Your Business",
    excerpt:
      "A 1-second delay can cost you 7% in conversions. Here's how to fix your website speed and boost revenue.",
    content: "",
    author: "Kabir Sen",
    publishedAt: "2025-01-05",
    category: "web-design",
    tags: ["Performance", "Web Design", "UX", "Speed"],
    readTime: 5,
    meta: {
      title: "Website Speed Optimization Guide | KlickChamp",
      description: "Learn how website speed affects your business and how to optimize for maximum performance.",
    },
  },
];

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.category === category);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
