import type { Metadata, Viewport } from "next";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "@/lib/constants";
import { organizationJsonLd, webSiteJsonLd, localBusinessJsonLd } from "@/lib/seo/jsonld";
import { Analytics } from "@/components/Analytics";
import { inter } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Digital Marketing Agency in Kolkata | SEO, Ads & Web Design`,
    template: `%s | ${SITE_NAME}`,
  },
  alternates: { canonical: SITE_URL },
  description: SITE_DESCRIPTION,
  keywords: [
    "digital marketing agency in kolkata",
    "digital marketing company in kolkata",
    "SEO services in kolkata",
    "google ads agency kolkata",
    "social media marketing agency kolkata",
    "website design company kolkata",
    "graphic designer kolkata",
    "video editing services kolkata",
    "web development company kolkata",
    "digital marketing services india",
    "ppc management kolkata",
    "email marketing agency",
    "whatsapp marketing services",
    "youtube channel optimization",
    "logo design kolkata",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Digital Marketing Agency in Kolkata | SEO, Ads & Web Design`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Digital Marketing Agency in Kolkata | SEO, Ads & Web Design`,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
    creator: "@klickchamp",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd()),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
