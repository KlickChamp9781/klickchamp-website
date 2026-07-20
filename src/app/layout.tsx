import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://klickchamp.com"),
  title: {
    default: "KlickChamp - Premium Digital Marketing Agency | Kolkata",
    template: "%s | KlickChamp",
  },
  description:
    "KlickChamp is a premium digital marketing agency in Kolkata, India. We deliver SEO, Meta Ads, Google Ads, Social Media, Web Design, and complete digital growth solutions.",
  keywords: [
    "digital marketing agency kolkata",
    "SEO services kolkata",
    "Meta Ads agency",
    "Google Ads management",
    "social media marketing",
    "website design kolkata",
    "graphic design agency",
    "video editing services",
    "email marketing",
    "YouTube optimization",
    "WhatsApp campaign",
    "Google My Business",
  ],
  authors: [{ name: "KlickChamp" }],
  creator: "KlickChamp",
  publisher: "KlickChamp",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://klickchamp.com",
    siteName: "KlickChamp",
    title: "KlickChamp - Premium Digital Marketing Agency | Kolkata",
    description:
      "Premium digital marketing agency delivering measurable growth. SEO, Ads, Social Media, Web Design & more.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "KlickChamp - Digital Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KlickChamp - Premium Digital Marketing Agency | Kolkata",
    description:
      "Premium digital marketing agency delivering measurable growth.",
    images: ["/images/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-kc-black text-kc-white antialiased">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
