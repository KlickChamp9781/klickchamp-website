"use client";

import { useState, useEffect, useCallback } from "react";
import { List, ChevronDown } from "lucide-react";

interface TocItem {
  id: string;
  label: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

function extractHeadings(content: string): TocItem[] {
  const headings: TocItem[] = [];
  const lines = content.split("\n");
  for (const line of lines) {
    const match = line.match(/^##\s+(.+)/);
    if (match) {
      const label = match[1].trim();
      headings.push({ id: slugify(label), label });
    }
  }
  return headings;
}

interface TableOfContentsProps {
  content: string;
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState("");
  const [isMobileCollapsed, setIsMobileCollapsed] = useState(true);
  const headings = extractHeadings(content);

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );

    const timer = setTimeout(() => {
      for (const h of headings) {
        const el = document.getElementById(h.id);
        if (el) observer.observe(el);
      }
    }, 300);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="rounded-lg border border-border bg-card">
      {/* Desktop: always visible, Mobile: collapsible */}
      <button
        onClick={() => setIsMobileCollapsed(!isMobileCollapsed)}
        className="flex items-center justify-between w-full p-6 lg:cursor-default"
      >
        <div className="flex items-center gap-2">
          <List className="h-4 w-4 text-primary" />
          <span className="text-sm font-semibold uppercase tracking-wider text-foreground">
            On this page
          </span>
        </div>
        <ChevronDown
          className={`h-4 w-4 text-muted-foreground transition-transform duration-200 lg:hidden ${isMobileCollapsed ? "" : "rotate-180"}`}
        />
      </button>
      <ul className={`space-y-1 px-6 pb-6 ${isMobileCollapsed ? "hidden lg:block" : "block"}`}>
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              onClick={(e) => {
                handleClick(e, h.id);
                setIsMobileCollapsed(true);
              }}
              className={`block py-1.5 text-sm leading-snug border-l-2 pl-3 transition-all duration-200 ${
                activeId === h.id
                  ? "border-primary text-primary font-medium"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              }`}
            >
              {h.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
