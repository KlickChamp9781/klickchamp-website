import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { AdjacentPost } from "@/lib/data/blog";

interface PostNavigationProps {
  prev: AdjacentPost | null;
  next: AdjacentPost | null;
}

export function PostNavigation({ prev, next }: PostNavigationProps) {
  if (!prev && !next) return null;

  return (
    <div className="blog-post-nav">
      <h4 className="blog-post-nav-label">Continue Reading</h4>
      <div className="blog-post-nav-grid">
        {prev ? (
          <Link href={`/blog/${prev.slug}`} className="blog-post-nav-link blog-post-nav-prev">
            <span className="blog-post-nav-direction">
              <ArrowLeft className="h-4 w-4" />
              Previous Article
            </span>
            <span className="blog-post-nav-title">{prev.title}</span>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link href={`/blog/${next.slug}`} className="blog-post-nav-link blog-post-nav-next">
            <span className="blog-post-nav-direction">
              Next Article
              <ArrowRight className="h-4 w-4" />
            </span>
            <span className="blog-post-nav-title">{next.title}</span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
