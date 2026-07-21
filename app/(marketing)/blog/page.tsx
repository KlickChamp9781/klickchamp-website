import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { webPageJsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Badge } from "@/components/ui/badge";
import { BlogGrid } from "@/components/sections/BlogGrid";

export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "Blog",
    description: `Insights, strategies, and expert perspectives on digital marketing, design, and technology from ${SITE_NAME}.`,
    path: "/blog",
  });
}

export default function BlogPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd({ name: "Blog", description: `Digital marketing insights from ${SITE_NAME}`, url: `${SITE_URL}/blog` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd({ items: [{ name: "Home", url: "/" }, { name: "Blog", url: "/blog" }] })) }} />
      <section className="relative pt-40 pb-20">
        <div className="container-main">
          <Badge className="mb-6">Blog</Badge>
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-[-0.03em] leading-[1.05] mb-6">
            Insights & <span className="text-gradient-gold">perspectives.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Expert perspectives on digital marketing, design, and the
            strategies that drive real business growth.
          </p>
        </div>
      </section>
      <BlogGrid />
    </main>
  );
}
