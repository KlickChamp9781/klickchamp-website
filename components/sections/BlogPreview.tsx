"use client";

import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerContainer, staggerItemVariants } from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";
import { BLOG_POSTS } from "@/lib/data/blog";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { resolveImage } from "@/lib/data/image-utils";

const posts = BLOG_POSTS.slice(0, 3).map((p) => ({
  ...p,
  imageSrc: resolveImage(p),
}));

export function BlogPreview() {
  return (
    <section className="py-20 lg:py-30">
      <div className="container-main">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em]">
                Latest <span className="text-gradient-gold">insights.</span>
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden md:flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors"
            >
              All Articles
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {posts.map((post) => (
            <motion.article key={post.slug} variants={staggerItemVariants}>
              <Link href={`/blog/${post.slug}`} className="group block bg-background">
                <div className="aspect-[16/9] bg-muted relative overflow-hidden">
                  {post.imageSrc ? (
                    <OptimizedImage
                      src={post.imageSrc.src}
                      alt={post.imageSrc.alt || post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[rgb(var(--secondary))]/70 group-hover:bg-[rgb(var(--secondary))]/50 transition-all duration-500" />
                  )}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-xs uppercase tracking-[0.15em] text-primary border border-[rgb(var(--primary))]/30 px-3 py-1 bg-[rgb(var(--background))]/80 backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
                    <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
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
