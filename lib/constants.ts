export const SITE_NAME = "KlickChamp";
export const SITE_DESCRIPTION = "KlickChamp is a premium digital marketing agency in Kolkata offering SEO services, Google Ads management, social media marketing, web design, graphic design, video editing, and WhatsApp marketing to businesses across India.";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://klickchamp.com";
export const CONTACT_EMAIL = "klickchamp5@gmail.com";
export const PHONE = "+91 7890444460";
export const WHATSAPP = "+91 9674088861";
export const ADDRESS = "Kolkata 700029, West Bengal, India";

export const TEAM_MEMBERS = [
  {
    name: "Sayan Nath",
    role: "Technical Expert",
    image: "/images/sayan nath.png",
    bio: "Driving technical excellence with innovative solutions.",
  },
  {
    name: "Sumit Chakrabarty",
    role: "Marketing Executive",
    image: "/images/sumit chakrabarty.png",
    bio: "Crafting data-driven marketing strategies that deliver results.",
  },
  {
    name: "Surajit Bera",
    role: "Sales & Marketing Executive",
    image: "/images/surajit.png",
    bio: "Building lasting client relationships through strategic outreach.",
  },
] as const;
