import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import { notFound } from "next/navigation";
import { getBlogPost, BLOG_POSTS } from "@/lib/data/blog";
import { getAuthor } from "@/lib/data/authors";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd, personJsonLd } from "@/lib/seo/jsonld";
import { generateBlogMetadata } from "@/lib/seo/metadata";
import { resolveOgImage } from "@/lib/data/image-utils";
import { BlogPageTemplate } from "@/components/templates/BlogPageTemplate";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return generateBlogMetadata(
    post.title,
    post.excerpt,
    slug,
    post.date,
    post.updatedDate,
    resolveOgImage(post),
  );
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const authorData = getAuthor(post.author);
  const authorUrl = authorData?.social?.linkedin;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd({
            title: post.title,
            description: post.excerpt,
            url: `${SITE_URL}/blog/${slug}`,
            datePublished: post.date,
            dateModified: post.updatedDate || post.date,
            author: post.author,
            authorUrl,
          })),
        }}
      />
      {authorData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd({
              name: authorData.name,
              jobTitle: authorData.role,
              description: authorData.shortBio,
              sameAs: Object.values(authorData.social || {}).filter(Boolean) as string[],
            })),
          }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd({
            items: [
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: post.title, url: `/blog/${slug}` },
            ],
          })),
        }}
      />
      {post.faqs && post.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd({ questions: post.faqs })),
          }}
        />
      )}
      <BlogPageTemplate post={post} />
    </>
  );
}
