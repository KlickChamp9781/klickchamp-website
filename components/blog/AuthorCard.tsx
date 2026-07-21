import Link from "next/link";
import { User, Linkedin, ExternalLink } from "lucide-react";
import { getAuthor } from "@/lib/data/authors";
import { SITE_NAME } from "@/lib/constants";

interface AuthorCardProps {
  author: {
    name: string;
    role: string;
    bio: string;
    avatar: string;
  };
}

export function AuthorCard({ author }: AuthorCardProps) {
  const fullAuthor = getAuthor(author.name);

  return (
    <div className="blog-author-card" itemScope itemType="https://schema.org/Person">
      <div className="blog-author-avatar">
        <User className="h-6 w-6 text-primary" />
      </div>
      <div className="blog-author-info">
        <div className="blog-author-meta">
          <h3 className="blog-author-name" itemProp="name">{author.name}</h3>
          <span className="blog-author-role" itemProp="jobTitle">{author.role}</span>
        </div>
        <p className="blog-author-bio" itemProp="description">{author.bio}</p>

        {fullAuthor?.expertise && fullAuthor.expertise.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3 mb-3">
            {fullAuthor.expertise.map((exp) => (
              <span key={exp} className="text-[10px] uppercase tracking-[0.08em] font-semibold text-primary border border-border px-2 py-0.5">
                {exp}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-4">
          {fullAuthor?.articles && (
            <Link
              href={`/blog?author=${encodeURIComponent(author.name)}`}
              className="text-sm text-primary hover:underline"
              aria-label={`View all ${fullAuthor.articles.length} articles by ${author.name}`}
            >
              View all {fullAuthor.articles.length} articles &rarr;
            </Link>
          )}
          {fullAuthor?.social?.linkedin && (
            <a
              href={fullAuthor.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
              aria-label={`${author.name} on LinkedIn`}
            >
              <Linkedin className="h-3.5 w-3.5" />
              <span>LinkedIn</span>
            </a>
          )}
          {fullAuthor && (
            <Link
              href={`/blog?author=${encodeURIComponent(author.name)}`}
              className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
              aria-label={`All articles by ${author.name}`}
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span>Articles</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
