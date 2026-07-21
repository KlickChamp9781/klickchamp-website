import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { BlogPost } from "@/lib/data/blog";
import { getAuthorInfo, getAdjacentPosts, getBlogCategoryTitle } from "@/lib/data/blog";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContentRenderer } from "@/components/content/ContentRenderer";
import { buildBlogSections } from "@/lib/data/content-builders";
import { getBlogRelationships } from "@/lib/data/relationships";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import { AuthorCard } from "@/components/blog/AuthorCard";
import { PostNavigation } from "@/components/blog/PostNavigation";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { resolveImage } from "@/lib/data/image-utils";
import type { ContentSection } from "@/lib/content/types";

interface BlogPageTemplateProps {
  post: BlogPost;
}

export function BlogPageTemplate({ post }: BlogPageTemplateProps) {
  const allSections = buildBlogSections(post);
  const rels = getBlogRelationships(post.slug);
  const { prev, next } = getAdjacentPosts(post.slug);
  const authorInfo = getAuthorInfo(post.author);

  const heroSection = allSections.find((s) => s.type === "hero");
  const metaSection = allSections.find((s) => s.type === "meta-bar");
  const proseSection = allSections.find((s) => s.type === "content-prose");
  const bottomSections = allSections.filter(
    (s) => s.type !== "hero" && s.type !== "meta-bar" && s.type !== "content-prose"
  );

  const contentSections: ContentSection[] = [];
  if (metaSection) contentSections.push(metaSection);
  if (proseSection) contentSections.push(proseSection);

  const categoryTitle = getBlogCategoryTitle(post.category);
  const publishedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <ReadingProgress />
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog" },
        { label: post.title, href: `/blog/${post.slug}` },
      ]} />
      <main>
        <article className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          {/* Hero section */}
          {heroSection && (
            <div className="blog-hero-wrapper">
              <ContentRenderer sections={[heroSection]} />
            </div>
          )}

          <div className="container-main">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </div>

          {/* Hero image */}
          {(() => {
            const img = resolveImage(post) ?? (post.image ? { src: post.image, alt: post.title } : undefined);
            return img ? (
              <div className="container-main mb-12">
                <div className="blog-hero-image-wrapper">
                  <OptimizedImage
                    src={img.src}
                    alt={img.alt || post.title}
                    className="blog-hero-image"
                    priority
                    width={1200}
                    height={675}
                  />
                </div>
              </div>
            ) : null;
          })()}

          {/* Metadata row */}
          <div className="container-main mb-12">
            <div className="blog-meta-bar">
              <div className="blog-meta-item">
                <span>{publishedDate}</span>
              </div>
              <div className="blog-meta-item">
                <span>{post.readTime}</span>
              </div>
              <div className="blog-meta-item">
                <span>By {post.author}</span>
              </div>
              <div className="blog-meta-item">
                <Link href={`/blog?category=${post.category}`} className="blog-meta-category">
                  {categoryTitle}
                </Link>
              </div>
              {post.updatedDate && (
                <div className="blog-meta-item">
                  <span>Updated {new Date(post.updatedDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                </div>
              )}
            </div>
          </div>

          {/* Two-column article layout */}
          <div className="container-main">
            <div className="blog-article-layout">
              <div className="blog-article-content">
                {proseSection && (
                  <ContentRenderer sections={[proseSection]} />
                )}
              </div>
              <div className="blog-article-sidebar">
                <div className="blog-sidebar-sticky">
                  <TableOfContents content={post.content} />
                  <BlogSidebar
                    postSlug={post.slug}
                    postTitle={post.title}
                    relatedServices={rels.relatedServices}
                    relatedCaseStudies={[]}
                    relatedBlogs={rels.siblings}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* End-of-article CTA */}
          <div className="container-main mt-16">
            <div className="blog-article-cta">
              <h2 className="blog-article-cta-title">
                Need help implementing this for your business?
              </h2>
              <p className="blog-article-cta-desc">
                Our team specializes in {categoryTitle.toLowerCase()} strategies that deliver measurable results.
                Let&apos;s discuss how we can help you grow.
              </p>
              <div className="blog-article-cta-buttons">
                <Link href="/contact" className="blog-article-cta-btn blog-article-cta-btn-primary">
                  Get Free Consultation
                </Link>
                <Link href="/contact" className="blog-article-cta-btn blog-article-cta-btn-outline">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>

          {/* Author card */}
          <div className="container-main mt-12">
            <AuthorCard author={authorInfo} />
          </div>

          {/* Post navigation */}
          <div className="container-main mt-12">
            <PostNavigation prev={prev} next={next} />
          </div>

          {/* Bottom sections (related services, tags, case studies, related blogs) */}
          {bottomSections.length > 0 && (
            <div className="mt-16">
              <ContentRenderer sections={bottomSections} />
            </div>
          )}
        </article>
      </main>
    </>
  );
}
