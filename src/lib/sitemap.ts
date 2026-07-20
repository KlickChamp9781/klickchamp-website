export function generateSitemapXML() {
  const baseUrl = "https://klickchamp.com";
  const now = new Date().toISOString();

  const routes = [
    "",
    "/about",
    "/services",
    "/services/digital-marketing",
    "/services/seo",
    "/services/meta-ads",
    "/services/google-ads",
    "/services/google-my-business",
    "/services/email-marketing",
    "/services/youtube-optimization",
    "/services/whatsapp-campaign",
    "/services/social-media-optimization",
    "/services/graphic-design",
    "/services/video-editing",
    "/services/website-design-development",
    "/testimonials",
    "/team",
    "/blogs",
    "/contact",
  ];

  const urls = routes
    .map(
      (route) => `  <url>
    <loc>${baseUrl}${route}/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${route === "" ? "weekly" : "monthly"}</changefreq>
    <priority>${route === "" ? "1.0" : route === "/services" ? "0.9" : "0.8"}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}
