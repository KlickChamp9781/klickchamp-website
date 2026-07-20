"use client";

import { motion } from "framer-motion";
import type { BlogPost } from "@/types";
import { formatDate } from "@/lib/utils";

type BlogCardProps = {
  post: BlogPost;
  index?: number;
};

export function BlogCard({ post, index = 0 }: BlogCardProps) {
  return (
    <motion.a
      href={`/blogs/${post.slug}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1,
      }}
      whileHover={{ y: -4 }}
      className="kc-card group block overflow-hidden"
    >
      <div className="aspect-[16/10] bg-kc-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-kc-gradient-gold-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 text-xs font-[family-name:var(--kc-font-heading)] font-medium bg-kc-gold/10 text-kc-gold rounded-full border border-kc-gold/20">
            {post.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3 text-xs text-kc-gray-500 mb-3">
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          <span className="w-1 h-1 rounded-full bg-kc-gray-600" />
          <span>{post.readTime} min read</span>
        </div>

        <h3 className="text-lg font-[family-name:var(--kc-font-heading)] font-semibold text-kc-white mb-2 group-hover:text-kc-gold transition-colors duration-300 line-clamp-2">
          {post.title}
        </h3>

        <p className="text-sm text-kc-gray-400 leading-[var(--kc-leading-relaxed)] line-clamp-2">
          {post.excerpt}
        </p>

        <div className="mt-4 flex items-center gap-2 text-sm text-kc-gold font-[family-name:var(--kc-font-heading)] font-medium">
          Read Article
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </motion.a>
  );
}
