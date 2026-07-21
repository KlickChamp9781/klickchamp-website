export interface Location {
  id: string;
  title: string;
  slug: string;
  area: string;
  city: string;
  state: string;
  pincode: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  nearbyAreas: string[];
  longDescription: string;
  localBusinesses: string[];
  localHighlights: string[];
  semanticKeywords?: string[];
  searchIntent?: "informational" | "navigational" | "commercial" | "transactional";
  pagePurpose?: string;
  /* Enterprise Data Engine fields */
  seo?: import("@/lib/data/types").SEOConfig;
  media?: import("@/lib/data/types").MediaConfig;
  cta?: import("@/lib/data/types").CTAConfig;
  navigation?: import("@/lib/data/types").NavigationConfig;
  content?: import("@/lib/data/types").ContentOverrides;
  /** Centralized image management */
  images?: import("@/lib/data/types").ImageConfig;
}

export const LOCATIONS: Location[] = [
  {
    id: "kolkata",
    title: "Kolkata",
    slug: "kolkata",
    area: "Kolkata",
    city: "Kolkata",
    state: "West Bengal",
    pincode: "700001",
    description: "Digital marketing services across Kolkata — the cultural capital of India. From Park Street to Salt Lake, we serve businesses throughout the city.",
    metaTitle: "Digital Marketing Agency in Kolkata | SEO, Web Design & Ads",
    metaDescription: "KlickChamp is a premium digital marketing agency in Kolkata offering SEO services, Google Ads management, web design, social media marketing, and graphic design across West Bengal.",
    nearbyAreas: ["Salt Lake", "New Town", "Howrah", "Behala", "Garia", "Barasat", "Dum Dum", "Ballygunge"],
    longDescription: "Kolkata's vibrant mix of heritage commerce and modern startups demands a digital strategy that stands out. KlickChamp partners with businesses across the city to build a powerful online presence that drives real growth.",
    localBusinesses: ["Heritage Retailers", "Hospitality & Tourism", "Education & Coaching Institutes", "IT & Software Firms"],
    localHighlights: ["Victoria Memorial", "Park Street", "Howrah Bridge", "Indian Museum"],
  },
  {
    id: "salt-lake",
    title: "Salt Lake",
    slug: "salt-lake",
    area: "Salt Lake City",
    city: "Kolkata",
    state: "West Bengal",
    pincode: "700064",
    description: "Digital marketing services in Salt Lake, Kolkata's IT and business hub. We help tech companies and startups in Sector V and beyond.",
    metaTitle: "Digital Marketing Agency in Salt Lake, Kolkata | Sector V",
    metaDescription: "Premium digital marketing services in Salt Lake, Kolkata. SEO, PPC, web design, and social media marketing for IT companies and businesses in Sector V.",
    nearbyAreas: ["Sector V", "Sector I", "Sector III", "Bidhannagar", "Lake Town"],
    longDescription: "Salt Lake's Sector V is home to hundreds of IT companies and startups competing for attention in a crowded digital space. KlickChamp helps these businesses cut through the noise with targeted SEO, paid ads, and social media campaigns.",
    localBusinesses: ["IT Companies", "Startups & SaaS", "Corporate Offices", "Co-working Spaces"],
    localHighlights: ["Sector V IT Hub", "Salt Lake Stadium", "Central Park", "City Centre Mall"],
  },
  {
    id: "new-town",
    title: "New Town",
    slug: "new-town",
    area: "New Town",
    city: "Kolkata",
    state: "West Bengal",
    pincode: "700156",
    description: "Digital marketing services in New Town, Kolkata's planned satellite city. Serving businesses in Rajarhat and the IT corridor.",
    metaTitle: "Digital Marketing Agency in New Town, Kolkata | Rajarhat",
    metaDescription: "Digital marketing services in New Town, Kolkata. Expert SEO, Google Ads, web development, and social media marketing for Rajarhat and IT corridor businesses.",
    nearbyAreas: ["Rajarhat", "Action Area I", "Action Area II", "Airport", "Topsia"],
    longDescription: "As Kolkata's fastest-growing planned city, New Town is attracting modern businesses that need a strong digital footprint from day one. KlickChamp delivers data-driven marketing strategies that help New Town companies scale quickly.",
    localBusinesses: ["IT & Tech Parks", "Real Estate Developers", "Modern Retail Chains", "Healthcare Facilities"],
    localHighlights: ["Topsia City Centre", "Eco Park", "World Trade Park", "DLF IT Park"],
  },
  {
    id: "howrah",
    title: "Howrah",
    slug: "howrah",
    area: "Howrah",
    city: "Howrah",
    state: "West Bengal",
    pincode: "711101",
    description: "Digital marketing services in Howrah. Helping industrial and commercial businesses grow their online presence.",
    metaTitle: "Digital Marketing Agency in Howrah | SEO & Web Design",
    metaDescription: "Professional digital marketing services in Howrah. SEO, PPC, social media marketing, and web design for industrial, commercial, and wholesale businesses.",
    nearbyAreas: ["Shibpur", "Bally", "Belur", "Domjur", "Uttarpara"],
    longDescription: "Howrah's deep-rooted industrial and commercial heritage is rapidly embracing digital transformation. KlickChamp helps traditional businesses in Howrah modernize their marketing to reach customers across Bengal and beyond.",
    localBusinesses: ["Industrial Manufacturers", "Wholesale Traders", "Engineering Firms", "Logistics Companies"],
    localHighlights: ["Howrah Bridge", "Howrah Junction Railway Station", "Botanical Gardens", "Belur Math"],
  },
  {
    id: "behala",
    title: "Behala",
    slug: "behala",
    area: "Behala",
    city: "Kolkata",
    state: "West Bengal",
    pincode: "700034",
    description: "Digital marketing services in Behala. Supporting local businesses and growing brands in South Kolkata.",
    metaTitle: "Digital Marketing Agency in Behala, Kolkata | Local SEO",
    metaDescription: "Digital marketing services in Behala, Kolkata. Local SEO, social media marketing, web design, and Google Business Profile optimization for South Kolkata businesses.",
    nearbyAreas: ["Behala Chowrasta", "Behala Park", "Sarsuna", "Kolitala", "Moulali"],
    longDescription: "Behala's bustling local markets and residential neighborhoods are full of businesses ready to go digital. KlickChamp provides tailored local SEO and social media strategies that help Behala shops, clinics, and services attract nearby customers.",
    localBusinesses: ["Local Retail Shops", "Healthcare Clinics", "Educational Tutoring Centres", "Restaurants & Eateries"],
    localHighlights: ["Behala Chowrasta", "Behala Tram Depot", "Thakurpukur", "Patipukur"],
  },
  {
    id: "garia",
    title: "Garia",
    slug: "garia",
    area: "Garia",
    city: "Kolkata",
    state: "West Bengal",
    pincode: "700084",
    description: "Digital marketing services in Garia. Growing businesses in one of South Kolkata's fastest-developing neighborhoods.",
    metaTitle: "Digital Marketing Agency in Garia, Kolkata | SEO & Google Ads",
    metaDescription: "Digital marketing services in Garia, Kolkata. Local SEO, Google Ads, web development, and social media marketing for South Kolkata businesses.",
    nearbyAreas: ["Garia Station", "Kamalgazi", "Naktala", "Tagore Park", "Mukundapur"],
    longDescription: "Garia's rapid residential expansion has created a thriving local economy that needs professional digital marketing to stay competitive. KlickChamp helps Garia businesses build online visibility and capture the growing customer base in this emerging neighborhood.",
    localBusinesses: ["Real Estate Agencies", "Grocery & Daily Needs Stores", "Healthcare Clinics", "Automobile Dealerships"],
    localHighlights: ["Garia Metro Station", "Kamalgazi Flyover", "Patuli", "Boral"],
  },
  {
    id: "barasat",
    title: "Barasat",
    slug: "barasat",
    area: "Barasat",
    city: "North 24 Parganas",
    state: "West Bengal",
    pincode: "700124",
    description: "Digital marketing services in Barasat. Helping businesses in North 24 Parganas establish strong digital presence.",
    metaTitle: "Digital Marketing Agency in Barasat | North 24 Parganas",
    metaDescription: "Digital marketing services in Barasat, North 24 Parganas. SEO, social media marketing, web design, and Google Ads for Barasat and surrounding businesses.",
    nearbyAreas: ["Airport", "Barrackpore", "Noapara", "Madhyamgram", "Hridaypur"],
    longDescription: "Barasat serves as the commercial hub of North 24 Parganas, connecting a vast suburban market hungry for digital-first brands. KlickChamp empowers Barasat businesses with SEO and social media strategies that reach customers throughout the district.",
    localBusinesses: ["District Administrative Offices", "College & Educational Institutions", "Retail & Shopping Complexes", "Agricultural Trade"],
    localHighlights: ["Barasat Court", "Krishnanagar", "Barrackpore Cantonment", "North 24 Parganas Collectorate"],
  },
  {
    id: "dum-dum",
    title: "Dum Dum",
    slug: "dum-dum",
    area: "Dum Dum",
    city: "Kolkata",
    state: "West Bengal",
    pincode: "700028",
    description: "Digital marketing services in Dum Dum. Strategic marketing for businesses near Kolkata's gateway.",
    metaTitle: "Digital Marketing Agency in Dum Dum, Kolkata | Airport Area",
    metaDescription: "Digital marketing services in Dum Dum, Kolkata. Local SEO, Google Ads, brand marketing, and social media for businesses near Kolkata airport.",
    nearbyAreas: ["Dum Dum Park", "Jessore Road", "Bangaon", "Nagerbazar", "Biryanagar"],
    longDescription: "Dum Dum's strategic location near the airport and major transit routes makes it a prime spot for businesses targeting travelers and commuters. KlickChamp helps these businesses leverage digital marketing to maximize visibility and foot traffic.",
    localBusinesses: ["Travel & Tourism Agencies", "Airport-Adjacent Hotels", "Automobile Showrooms", "Retail Shops"],
    localHighlights: ["Netaji Subhas Chandra Bose International Airport", "Dum Dum Junction", "Jessore Road Market", "Nagerbazar"],
  },
];

export function getLocation(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}
