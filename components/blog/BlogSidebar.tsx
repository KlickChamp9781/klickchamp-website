"use client";

import Link from "next/link";
import { Share2, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import type { LinkItem } from "@/lib/seo/types";

interface BlogSidebarProps {
  postSlug: string;
  postTitle: string;
  relatedServices: LinkItem[];
  relatedCaseStudies: LinkItem[];
  relatedBlogs: LinkItem[];
}

function ShareSection({ postSlug, postTitle }: { postSlug: string; postTitle: string }) {
  const url = `https://klickchamp.com/blog/${postSlug}`;

  const copyLink = () => {
    navigator.clipboard.writeText(url);
  };

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <div className="flex items-center gap-2 mb-4">
        <Share2 className="h-4 w-4 text-primary" />
        <span className="text-sm font-semibold uppercase tracking-wider text-foreground">
          Share this article
        </span>
      </div>
      <button
        onClick={copyLink}
        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium border border-border hover:border-primary hover:text-primary transition-colors"
      >
        Copy Link
      </button>
    </div>
  );
}

function RelatedLinks({
  title,
  items,
  type,
}: {
  title: string;
  items: LinkItem[];
  type: "services" | "case-studies" | "blogs";
}) {
  if (items.length === 0) return null;

  const hrefPrefix = type === "services" ? "/services/" : type === "case-studies" ? "/case-studies/" : "/blog/";

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <span className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4 block">
        {title}
      </span>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {item.image ? (
                <div className="w-16 aspect-[16/9] shrink-0 bg-muted relative overflow-hidden rounded">
                  <OptimizedImage
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ) : (
                <ArrowRight className="h-3.5 w-3.5 mt-0.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
              <span className="leading-snug">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CtaCard() {
  return (
    <div className="rounded-lg border border-[rgb(var(--primary))]/20 bg-secondary p-6">
      <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-3 block">
        Get Started
      </span>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        Ready to grow your business with proven digital marketing strategies?
      </p>
      <Button asChild className="w-full" size="sm">
        <Link href="/contact">
          Free Consultation
          <ArrowRight className="ml-2 h-3.5 w-3.5" />
        </Link>
      </Button>
    </div>
  );
}

export function BlogSidebar({
  postSlug,
  postTitle,
  relatedServices,
  relatedCaseStudies,
  relatedBlogs,
}: BlogSidebarProps) {
  return (
    <aside className="space-y-4">
      <ShareSection postSlug={postSlug} postTitle={postTitle} />
      <RelatedLinks title="Related Services" items={relatedServices} type="services" />
      <RelatedLinks title="Case Studies" items={relatedCaseStudies} type="case-studies" />
      <RelatedLinks title="Read More" items={relatedBlogs} type="blogs" />
      <CtaCard />
    </aside>
  );
}
