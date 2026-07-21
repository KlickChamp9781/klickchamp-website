"use client";

import Link from "next/link";
import { Clock } from "lucide-react";
import { StaggerContainer, staggerItemVariants } from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";
import { BLOG_POSTS } from "@/lib/data/blog";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { resolveImage } from "@/lib/data/image-utils";

const posts = BLOG_POSTS.map((p) => ({
  slug: p.slug,
  title: p.title,
  excerpt: p.excerpt,
  category: p.category,
  date: new Date(p.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }),
  readTime: p.readTime,
  featured: p.featured ?? false,
  imageSrc: resolveImage(p),
}));

export function BlogGrid() {
  return (
    <section className="py-20 lg:py-30 border-t border-border">
      <div className="container-main">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {posts.map((post) => (
            <motion.article key={post.slug} variants={staggerItemVariants}>
              <Link href={`/blog/${post.slug}`} className="group block bg-background h-full">
                <div className="aspect-[16/9] bg-muted relative overflow-hidden">
                  {post.imageSrc ? (
                    <OptimizedImage
                      src={post.imageSrc.src}
                      alt={post.imageSrc.alt || post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[rgb(var(--secondary))]/70" />
                  )}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-xs uppercase tracking-[0.15em] text-primary border border-[rgb(var(--primary))]/30 px-3 py-1 bg-[rgb(var(--background))]/80 backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
