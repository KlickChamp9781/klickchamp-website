"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
  quickReplies?: string[];
}

const GREETINGS = [
  "Hey there! Welcome to KlickChamp — we build digital empires. What brings you here today?",
  "Hi! Great to see you. I'm the KlickChamp assistant. Looking for a specific service, or just exploring?",
  "Hello! Welcome to KlickChamp. Whether it's SEO, Ads, or a full digital strategy — I've got you covered. What do you need?",
];

const SERVICES_OVERVIEW = `We offer 12 specialized services:

• SEO — Rank higher on Google with data-driven strategy
• Meta Ads — Facebook & Instagram campaigns that convert
• Google Ads — PPC management focused on ROAS
• Social Media Optimization — Build an engaged audience
• Email Marketing — Automated sequences that nurture leads
• YouTube Optimization — Grow your channel & views
• WhatsApp Campaigns — Direct outreach at scale
• Google My Business — Dominate local search
• Website Design & Development — Fast, conversion-focused sites
• Graphic Design — Premium visual branding
• Video Editing — Scroll-stopping content

Want details on any of these?`;

const SERVICE_DETAILS: Record<string, string> = {
  seo: `Our SEO service covers everything to dominate Google rankings:

• Technical audits & site health optimization
• Deep keyword research & competitor analysis
• On-page optimization (meta, structure, schema)
• Content strategy that drives organic traffic
• High-quality link building
• Local SEO for location-based businesses

We've helped clients achieve 3.2x average ROI through organic search. Want to discuss your SEO goals?`,
  "meta ads": `Our Meta Ads service turns ad spend into revenue:

• Data-driven campaign architecture
• Audience research & targeting precision
• Creative testing & optimization
• A/B testing at every funnel stage
• Real-time bid management
• Weekly performance reports

We focus on maximizing ROAS while minimizing cost per acquisition. Shall I connect you with our ads team?`,
  "google ads": `Our Google Ads management is built for performance:

• Search, Display, Shopping & YouTube campaigns
• Keyword strategy backed by conversion data
• Landing page optimization recommendations
• Smart bidding & budget allocation
• Conversion tracking setup
• Monthly ROI reports

Our clients typically see a 3-4x return on ad spend. Want a free audit?`,
  "social media": `Our Social Media Optimization builds real communities:

• Platform-specific content strategy
• Consistent posting & engagement management
• Community building & audience growth
• Trend monitoring & viral content creation
• Analytics & performance tracking
• Influencer collaboration strategy

We manage Instagram, Facebook, LinkedIn, Twitter & more. Which platform matters most to you?`,
  "email marketing": `Our Email Marketing turns subscribers into customers:

• Automated drip sequences & nurture flows
• Segmentation for personalized messaging
• A/B testing subject lines & content
• Clean list management & deliverability
• Performance analytics & optimization
• Integration with your CRM/tools

We've helped businesses achieve 40%+ open rates. Want to improve your email game?`,
  youtube: `Our YouTube Optimization grows your channel organically:

• SEO-optimized titles, descriptions & tags
• Thumbnail design that drives clicks
• Content strategy based on search demand
• Audience retention analysis
• Competitor benchmarking
• Monetization strategy

We've helped channels grow from 0 to 10K+ subscribers. Ready to scale yours?`,
  "whatsapp campaign": `Our WhatsApp Campaigns deliver direct, personal outreach:

• Broadcast lists & segmented messaging
• Automated reply flows & chatbots
• Rich media campaigns (images, videos, docs)
• Click-to-WhatsApp ad setup
• Performance tracking & analytics
• Compliance with WhatsApp policies

With 98% open rates, WhatsApp is the most powerful channel. Want to try it?`,
  "google my business": `Our Google My Business optimization puts you on the local map:

• Profile optimization & verification
• Regular posts & updates
• Review management & response strategy
• Local keyword targeting
• Photo & video optimization
• Q&A management

We help businesses dominate the local 3-pack. Want to be the top result in your area?`,
  "website design": `Our Website Design & Development builds sites that convert:

• Custom design aligned with your brand
• Mobile-first responsive development
• Speed optimization (sub-2s load times)
• SEO-ready architecture
• Conversion-focused layouts
• CMS integration (Next.js, WordPress, etc.)

We build with Next.js, React & modern frameworks. Need a site that performs?`,
  "graphic design": `Our Graphic Design creates premium visual identities:

• Logo design & brand identity systems
• Social media creatives & templates
• Marketing collateral (brochures, flyers, pitch decks)
• UI/UX design for apps & websites
• Packaging design
• Brand guidelines documentation

Every design is crafted to reflect your brand's premium positioning. What do you need designed?`,
  "video editing": `Our Video Editing produces scroll-stopping content:

• Short-form reels & TikToks
• YouTube video editing & post-production
• Ad creatives for Meta & Google
• Corporate videos & brand films
• Motion graphics & animations
• Thumbnail design

We make content that stops thumbs and drives action. What kind of video do you need?`,
};

const TEAM_INFO: Record<string, string> = {
  team: `Our leadership team at KlickChamp:

• Arjun Kapoor — Founder & CEO
  Visionary leader driving the company's growth and strategy.

• Ishita Banerjee — Head of Strategy
  Crafts data-driven digital strategies for maximum ROI.

• Rohit Gupta — Creative Director
  Leads all creative output — design, video, and branding.

• Sonia Mandal — SEO Lead
  Specializes in organic growth and search dominance.

• Kabir Sen — Head of Development
  Builds fast, modern websites and digital products.

• Naina Das — Social Media Lead
  Manages community growth and content strategy.

A team of 150+ professionals, all focused on your growth.`,
  founder: `Arjun Kapoor is the Founder & CEO of KlickChamp. He started the company in 2021 with a vision to deliver premium, measurable digital growth for businesses. Under his leadership, KlickChamp has served 150+ clients with a 98% retention rate.`,
  arjun: `Arjun Kapoor is the Founder & CEO of KlickChamp. He started the company in 2021 with a vision to deliver premium, measurable digital growth for businesses. Under his leadership, KlickChamp has served 150+ clients with a 98% retention rate.`,
};

const TESTIMONIALS: Record<string, string> = {
  testimonial: `Here's what our clients say:

⭐ "KlickChamp transformed our online presence. Our leads increased by 300% in just 3 months."
— Rahul Mehta, Mehta Constructions

⭐ "The ROI on our Meta Ads campaign was incredible. Best investment we've made."
— Priya Sharma, Luxe Interiors

⭐ "Their SEO strategy took us from page 3 to position 1 on Google. Game changer."
— Amit Das, TechNova Solutions

⭐ "Professional, creative, and always delivering on time. Highly recommended."
— Sneha Roy, Roy Fashions

We're proud of our 98% client retention rate. Want similar results?`,
  review: `Here's what our clients say:

⭐ "KlickChamp transformed our online presence. Our leads increased by 300% in just 3 months."
— Rahul Mehta, Mehta Constructions

⭐ "The ROI on our Meta Ads campaign was incredible. Best investment we've made."
— Priya Sharma, Luxe Interiors

⭐ "Their SEO strategy took us from page 3 to position 1 on Google. Game changer."
— Amit Das, TechNova Solutions

⭐ "Professional, creative, and always delivering on time. Highly recommended."
— Sneha Roy, Roy Fashions

We're proud of our 98% client retention rate. Want similar results?`,
};

const CASE_STUDIES = `Here are some of our success stories:

📊 Mehta Constructions — Real estate brand that saw 300% lead increase through Meta Ads & SEO

📊 Luxe Interiors — Premium interior design brand with exceptional ROAS on paid campaigns

📊 TechNova Solutions — Tech company that went from page 3 to position 1 on Google

Each case study shows our approach: understand the business, craft a strategy, execute precisely, and measure everything. Want to be our next success story?`;

const BLOG_INFO = `We regularly publish insights on:

📝 "Top 10 SEO Trends You Can't Ignore in 2025" — Stay ahead of the curve
📝 "The Complete Guide to Meta Ads for Beginners" — Start advertising smarter
📝 "Why Your Website Speed is Killing Your Business" — Speed = conversions

Check out our Blogs section for the latest digital marketing insights.`;

const PRICING_INFO = `Our pricing is tailored to your business goals. We don't believe in one-size-fits-all packages.

What we can tell you:
• Projects start from ₹9,999/month
• Custom strategies based on your industry & competition
• Transparent reporting — you see exactly where every rupee goes
• Flexible plans that scale with your growth

The best way to get accurate pricing is to tell us about your business. Want me to connect you with our team for a free consultation?`;

const CONTACT_INFO = `Here's how to reach us:

📞 Phone: +91-9876543210
📧 Email: hello@klickchamp.com
📍 Address: Salt Lake City, Kolkata 700091, West Bengal, India

🔗 Social Media:
• LinkedIn: KlickChamp
• Instagram: @klickchamp
• Facebook: KlickChamp
• Twitter: @klickchamp
• YouTube: KlickChamp

Or use the Contact page on our website. We typically respond within 2 hours during business hours.`;

const STATS_INFO = `Our numbers speak for themselves:

📊 150+ — Clients served across industries
📊 98% — Client retention rate (industry avg is 60%)
📊 3.2x — Average ROI delivered to clients
📊 50M+ — Leads generated for our clients
📊 2021 — Year we were founded

We're obsessed with measurable results. Ready to be part of these numbers?`;

const LOCATION_INFO = `We're headquartered in Salt Lake City, Kolkata 700091, West Bengal, India.

While we're based in Kolkata, we serve clients nationwide and internationally. Our remote-first approach means we can work with businesses anywhere.

Whether you're a local Kolkata business or a national brand, we've got the expertise to grow your digital presence.`;

const WHY_CHOOSE = `6 reasons clients choose KlickChamp:

🎯 Data-Driven Strategy — Every decision backed by data, not guesswork
💎 Premium Execution — Quality that reflects your brand's ambition
📈 Measurable ROI — We track what matters: revenue, not vanity metrics
🤝 Dedicated Partnership — You get a dedicated strategist, not a ticket system
⚡ Rapid Execution — Move fast without sacrificing quality
🏆 98% Retention — Clients stay because we deliver results

We're not just a vendor — we're your growth partner.`;

function getBotResponse(input: string, messageCount: number): { text: string; quickReplies?: string[] } {
  const lower = input.toLowerCase().trim();

  // Greetings
  if (lower.match(/\b(hi|hello|hey|namaste|sup|yo|hola)\b/)) {
    if (messageCount <= 2) {
      return { text: GREETINGS[Math.floor(Math.random() * GREETINGS.length)], quickReplies: ["All Services", "Pricing", "Contact Us", "About Us"] };
    }
    return { text: "Hey again! What else can I help you with?", quickReplies: ["Services", "Pricing", "Team", "Contact"] };
  }

  // Thank you / goodbye
  if (lower.match(/\b(thank|thanks|bye|ok great|perfect|awesome|cool)\b/)) {
    return { text: "You're welcome! Feel free to come back anytime. Have a great day! 🙌", quickReplies: ["Services", "Contact Us"] };
  }

  // Services overview
  if (lower.match(/\b(all service|what service|list service|service list|offer|provide)\b/) && !lower.match(/\b(seo|meta|google|social|email|youtube|whatsapp|website|graphic|video|design)\b/)) {
    return { text: SERVICES_OVERVIEW, quickReplies: ["SEO", "Meta Ads", "Google Ads", "Website Design"] };
  }

  // Individual services
  if (lower.match(/\b(seo|search engine|ranking|google rank|organic)\b/)) {
    return { text: SERVICE_DETAILS.seo, quickReplies: ["Other Services", "Pricing", "Case Studies", "Contact Us"] };
  }
  if (lower.match(/\b(meta|facebook|instagram) ads?\b/)) {
    return { text: SERVICE_DETAILS["meta ads"], quickReplies: ["Google Ads", "Pricing", "Case Studies", "Contact Us"] };
  }
  if (lower.match(/\b(google ads?|ppc|pay per click)\b/)) {
    return { text: SERVICE_DETAILS["google ads"], quickReplies: ["Meta Ads", "Pricing", "Case Studies", "Contact Us"] };
  }
  if (lower.match(/\b(social media|smo|instagram|facebook|linkedin|twitter)\b/) && !lower.match(/\b(ads?|advert)\b/)) {
    return { text: SERVICE_DETAILS["social media"], quickReplies: ["Email Marketing", "SEO", "Pricing", "Contact Us"] };
  }
  if (lower.match(/\b(email|drip|newsletter|mail)\b/)) {
    return { text: SERVICE_DETAILS["email marketing"], quickReplies: ["WhatsApp", "SEO", "Pricing", "Contact Us"] };
  }
  if (lower.match(/\b(youtube|video|channel|subscriber)\b/) && !lower.match(/\b(edit|editing|production)\b/)) {
    return { text: SERVICE_DETAILS.youtube, quickReplies: ["Video Editing", "SEO", "Pricing", "Contact Us"] };
  }
  if (lower.match(/\b(whatsapp|broadcast|chat message)\b/)) {
    return { text: SERVICE_DETAILS["whatsapp campaign"], quickReplies: ["Email Marketing", "Pricing", "Contact Us"] };
  }
  if (lower.match(/\b(google my business|gmb|local seo|map|local search)\b/)) {
    return { text: SERVICE_DETAILS["google my business"], quickReplies: ["SEO", "Pricing", "Contact Us"] };
  }
  if (lower.match(/\b(website|web design|web dev|landing page|site)\b/) && !lower.match(/\b(speed|fast|load)\b/)) {
    return { text: SERVICE_DETAILS["website design"], quickReplies: ["Graphic Design", "SEO", "Pricing", "Contact Us"] };
  }
  if (lower.match(/\b(graphic|logo|brand|visual|identity|flyer|brochure)\b/)) {
    return { text: SERVICE_DETAILS["graphic design"], quickReplies: ["Video Editing", "Website Design", "Pricing", "Contact Us"] };
  }
  if (lower.match(/\b(video edit|editing|reel|shorts|motion|animation|post.?production)\b/)) {
    return { text: SERVICE_DETAILS["video editing"], quickReplies: ["Graphic Design", "YouTube", "Pricing", "Contact Us"] };
  }

  // Pricing
  if (lower.match(/\b(price|pricing|cost|plan|package|charge|rate|budget|affordable|cheap)\b/)) {
    return { text: PRICING_INFO, quickReplies: ["All Services", "Case Studies", "Contact Us"] };
  }

  // Contact
  if (lower.match(/\b(contact|reach|call|email|phone|whatsapp|talk|speak|meet)\b/)) {
    return { text: CONTACT_INFO, quickReplies: ["Services", "Pricing", "About Us"] };
  }

  // Team
  if (lower.match(/\b(team|who|people|staff|employee|member)\b/)) {
    return { text: TEAM_INFO.team, quickReplies: ["Founder", "Services", "Pricing", "Contact Us"] };
  }
  if (lower.match(/\b(founder|ceo|arjun|kapoor|leader|owner)\b/)) {
    return { text: TEAM_INFO.founder, quickReplies: ["Full Team", "Services", "Contact Us"] };
  }

  // Testimonials
  if (lower.match(/\b(testimonial|review|feedback|client say|what people)\b/)) {
    return { text: TESTIMONIALS.testimonial, quickReplies: ["Case Studies", "Services", "Contact Us"] };
  }

  // Case studies
  if (lower.match(/\b(case study|success story|portfolio|work|result|portfolio)\b/)) {
    return { text: CASE_STUDIES, quickReplies: ["Testimonials", "Services", "Contact Us"] };
  }

  // Stats
  if (lower.match(/\b(stat|number|metric|client|retention|roi|lead|growth|how many)\b/)) {
    return { text: STATS_INFO, quickReplies: ["Case Studies", "Services", "Contact Us"] };
  }

  // About / company
  if (lower.match(/\b(about|company|klickchamp|who are|what is|background|story|history)\b/)) {
    return { text: `${WHY_CHOOSE}\n\nWe were founded in 2021 in Kolkata and have grown to serve 150+ clients with a 98% retention rate. Want to know more about what makes us different?`, quickReplies: ["Why Choose Us", "Team", "Stats", "Contact Us"] };
  }

  // Why choose
  if (lower.match(/\b(why|choose|different|better|uniqu|special|usp|benefit)\b/)) {
    return { text: WHY_CHOOSE, quickReplies: ["Testimonials", "Case Studies", "Contact Us"] };
  }

  // Blog
  if (lower.match(/\b(blog|article|post|read|content marketing|insight)\b/)) {
    return { text: BLOG_INFO, quickReplies: ["Services", "SEO", "Contact Us"] };
  }

  // Location
  if (lower.match(/\b(where|location|address|kolkata|city|office|situated)\b/)) {
    return { text: LOCATION_INFO, quickReplies: ["Contact Us", "Services", "About Us"] };
  }

  // Speed / website issues
  if (lower.match(/\b(speed|fast|slow|load time|performance|core web)\b/)) {
    return { text: `Website speed is critical — a 1-second delay can reduce conversions by 7%.\n\nOur Website Design & Development service includes:\n• Speed optimization (sub-2s load times)\n• Core Web Vitals optimization\n• Image compression & lazy loading\n• CDN setup & caching\n• Mobile performance tuning\n\nWe build with Next.js for blazing-fast performance. Want a free speed audit?`, quickReplies: ["Website Design", "SEO", "Contact Us"] };
  }

  // ROI / results
  if (lower.match(/\b(roi|return|result|growth|increase|improve|boost)\b/)) {
    return { text: STATS_INFO + "\n\n" + CASE_STUDIES, quickReplies: ["Services", "Pricing", "Contact Us"] };
  }

  // Competition
  if (lower.match(/\b(competitor|competition|rival|alternative|compare)\b/)) {
    return { text: `We focus on your growth, not the competition. But here's what sets us apart:\n\n• 98% client retention (industry avg: 60%)\n• 3.2x average ROI delivered\n• Data-driven strategies, not guesswork\n• Dedicated strategist for every client\n• Transparent reporting — you see everything\n\nWe've helped businesses outperform their competition. Ready to be next?`, quickReplies: ["Case Studies", "Why Choose Us", "Contact Us"] };
  }

  // Services page
  if (lower.match(/\b(service page|services page|all service)\b/)) {
    return { text: `You can explore all 12 services on our Services page at klickchamp.com/services\n\nOr tell me what you're looking for and I'll give you the details right here.`, quickReplies: ["SEO", "Meta Ads", "Google Ads", "Website Design"] };
  }

  // Default / fallback
  const fallbacks = [
    `I'd love to help with that! Here's what I can assist with:\n\n• Our 12 digital marketing services\n• Pricing & packages\n• Client testimonials & case studies\n• Team & company info\n• Contact details\n\nWhat interests you?`,
    `Great question! While I might not have a specific answer for that, I can tell you about:\n\n• Services (SEO, Ads, Design, Development & more)\n• Our track record (150+ clients, 98% retention)\n• How to get in touch\n\nWhat would you like to explore?`,
  ];

  return {
    text: fallbacks[Math.floor(Math.random() * fallbacks.length)],
    quickReplies: ["Services", "Pricing", "Testimonials", "Contact Us"],
  };
}

const INITIAL_QUICK_REPLIES = ["All Services", "Pricing", "Testimonials", "Contact Us"];

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const greetUser = useCallback(() => {
    if (!hasGreeted) {
      setMessages([
        {
          id: 1,
          text: GREETINGS[Math.floor(Math.random() * GREETINGS.length)],
          isBot: true,
          timestamp: new Date(),
          quickReplies: INITIAL_QUICK_REPLIES,
        },
      ]);
      setHasGreeted(true);
    }
  }, [hasGreeted]);

  useEffect(() => {
    if (isOpen && !hasGreeted) {
      const timer = setTimeout(greetUser, 400);
      return () => clearTimeout(timer);
    }
  }, [isOpen, hasGreeted, greetUser]);

  const addBotMessage = (text: string, quickReplies?: string[]) => {
    setIsTyping(true);
    const delay = 500 + Math.min(text.length * 3, 1200) + Math.random() * 400;
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          text,
          isBot: true,
          timestamp: new Date(),
          quickReplies,
        },
      ]);
      setIsTyping(false);
    }, delay);
  };

  const handleSend = (text?: string) => {
    const value = text || inputValue.trim();
    if (!value) return;

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: value,
        isBot: false,
        timestamp: new Date(),
      },
    ]);
    setInputValue("");

    const { text: response, quickReplies } = getBotResponse(value, messages.length);
    addBotMessage(response, quickReplies);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const lastBotMessage = [...messages].reverse().find((m) => m.isBot);
  const currentQuickReplies = isTyping ? undefined : lastBotMessage?.quickReplies;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Chat Panel */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="fixed bottom-[5.5rem] right-6 z-[310] w-[380px] max-w-[calc(100vw-3rem)] rounded-2xl overflow-hidden flex flex-col"
                style={{
                  height: "min(520px, calc(100vh - 8rem))",
                  background:
                    "linear-gradient(145deg, rgba(10,14,10,0.97) 0%, rgba(6,10,6,0.99) 100%)",
                  border: "1px solid rgba(34,197,94,0.15)",
                  boxShadow:
                    "0 0 60px rgba(34,197,94,0.08), 0 25px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(34,197,94,0.1)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                }}
              >
                {/* Header */}
                <div
                  className="px-5 py-4 flex items-center gap-3 flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(34,197,94,0.12) 0%, rgba(22,163,74,0.08) 100%)",
                    borderBottom: "1px solid rgba(34,197,94,0.12)",
                  }}
                >
                  <div className="relative">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(135deg, #22C55E 0%, #16A34A 100%)",
                        boxShadow: "0 0 20px rgba(34,197,94,0.3)",
                      }}
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </div>
                    <div
                      className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2"
                      style={{
                        background: "#22C55E",
                        borderColor: "rgba(10,14,10,0.97)",
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4
                      className="text-sm font-semibold truncate"
                      style={{ color: "#FAFAFA", fontFamily: "var(--kc-font-heading)" }}
                    >
                      KlickChamp Assistant
                    </h4>
                    <p className="text-xs" style={{ color: "rgba(34,197,94,0.7)" }}>
                      Typically replies instantly
                    </p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200 flex-shrink-0"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "rgba(255,255,255,0.06)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "transparent")
                    }
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Messages */}
                <div
                  className="flex-1 overflow-y-auto px-4 py-4"
                  style={{
                    scrollbarWidth: "thin",
                    scrollbarColor: "rgba(34,197,94,0.2) transparent",
                  }}
                >
                  <div className="flex flex-col gap-3">
                    {messages.map((msg) => (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}
                      >
                        <div
                          className="max-w-[88%] px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line"
                          style={{
                            fontFamily: "var(--kc-font-body)",
                            color: msg.isBot ? "#FAFAFA" : "#FFFFFF",
                            background: msg.isBot
                              ? "rgba(255,255,255,0.05)"
                              : "linear-gradient(135deg, #22C55E 0%, #16A34A 100%)",
                            border: msg.isBot
                              ? "1px solid rgba(255,255,255,0.06)"
                              : "none",
                            borderRadius: msg.isBot
                              ? "2px 16px 16px 16px"
                              : "16px 2px 16px 16px",
                          }}
                        >
                          {msg.text}
                        </div>
                      </motion.div>
                    ))}
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-start"
                      >
                        <div
                          className="px-4 py-3 rounded-2xl flex gap-1"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.06)",
                            borderRadius: "2px 16px 16px 16px",
                          }}
                        >
                          {[0, 1, 2].map((i) => (
                            <motion.span
                              key={i}
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ background: "rgba(34,197,94,0.5)" }}
                              animate={{ y: [0, -4, 0] }}
                              transition={{
                                duration: 0.6,
                                repeat: Infinity,
                                delay: i * 0.15,
                              }}
                            />
                          ))}
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </div>

                {/* Quick Replies */}
                {currentQuickReplies && currentQuickReplies.length > 0 && (
                  <div
                    className="px-4 pb-2 flex gap-2 overflow-x-auto flex-shrink-0"
                    style={{ scrollbarWidth: "none" }}
                  >
                    {currentQuickReplies.map((reply) => (
                      <button
                        key={reply}
                        onClick={() => handleSend(reply)}
                        className="flex-shrink-0 px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200"
                        style={{
                          fontFamily: "var(--kc-font-body)",
                          color: "rgba(34,197,94,0.85)",
                          background: "rgba(34,197,94,0.08)",
                          border: "1px solid rgba(34,197,94,0.2)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "rgba(34,197,94,0.18)";
                          e.currentTarget.style.borderColor = "rgba(34,197,94,0.4)";
                          e.currentTarget.style.color = "rgba(34,197,94,1)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "rgba(34,197,94,0.08)";
                          e.currentTarget.style.borderColor = "rgba(34,197,94,0.2)";
                          e.currentTarget.style.color = "rgba(34,197,94,0.85)";
                        }}
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                )}

                {/* Input */}
                <div
                  className="px-4 py-3 flex-shrink-0"
                  style={{
                    borderTop: "1px solid rgba(34,197,94,0.1)",
                    background: "rgba(0,0,0,0.2)",
                  }}
                >
                  <div
                    className="flex items-center gap-2 rounded-xl px-3 py-2"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Ask about our services..."
                      className="flex-1 bg-transparent text-sm outline-none"
                      style={{
                        fontFamily: "var(--kc-font-body)",
                        color: "#FAFAFA",
                      }}
                    />
                    <button
                      onClick={() => handleSend()}
                      disabled={!inputValue.trim()}
                      className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 flex-shrink-0"
                      style={{
                        background: inputValue.trim()
                          ? "linear-gradient(135deg, #22C55E 0%, #16A34A 100%)"
                          : "rgba(255,255,255,0.04)",
                        color: inputValue.trim() ? "#FFFFFF" : "rgba(255,255,255,0.2)",
                        boxShadow: inputValue.trim()
                          ? "0 0 16px rgba(34,197,94,0.3)"
                          : "none",
                      }}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 19V5M5 12l7-7 7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="fixed bottom-[5.5rem] right-6 z-[310] w-14 h-14 rounded-full flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #22C55E 0%, #16A34A 100%)",
              boxShadow: isOpen
                ? "0 0 30px rgba(34,197,94,0.5), 0 4px 20px rgba(34,197,94,0.3)"
                : "0 0 20px rgba(34,197,94,0.3), 0 4px 16px rgba(34,197,94,0.2)",
            }}
          >
            <span
              className="absolute inset-0 rounded-full chatbot-glow-ring"
              style={{
                border: "2px solid rgba(34,197,94,0.3)",
              }}
            />
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.svg
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </motion.svg>
              ) : (
                <motion.svg
                  key="chat"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </motion.svg>
              )}
            </AnimatePresence>
          </motion.button>
        </>
      )}
    </AnimatePresence>
  );
}
