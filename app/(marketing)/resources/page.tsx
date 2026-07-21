import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { webPageJsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Badge } from "@/components/ui/badge";
import { BookOpen, FileText } from "lucide-react";

export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "Resources",
    description: `Expert insights and case studies from ${SITE_NAME} to help you grow your digital marketing knowledge.`,
    path: "/resources",
  });
}

const resources = [
  { title: "Blog", description: "Expert insights on digital marketing, design, and technology.", href: "/blog", icon: BookOpen },
  { title: "Case Studies", description: "Real results from real projects across industries.", href: "/case-studies", icon: FileText },
];

export default function ResourcesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd({ name: "Resources", description: `Expert insights and case studies from ${SITE_NAME}`, url: `${SITE_URL}/resources` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd({ items: [{ name: "Home", url: "/" }, { name: "Resources", url: "/resources" }] })) }} />
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container-main">
          <Badge className="mb-6">Resources</Badge>
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-[-0.03em] leading-[1.05] mb-6">
            Resource <span className="text-gradient-gold">center.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Expert insights and case studies to help you master digital marketing
            and grow your business.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-30 border-t border-border">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {resources.map((resource) => {
              const Icon = resource.icon;
              return (
                <Link
                  key={resource.href}
                  href={resource.href}
                  className="group block bg-background p-6 sm:p-8 hover:bg-card transition-colors"
                >
                  <Icon className="h-8 w-8 text-primary mb-4" />
                  <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {resource.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {resource.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
