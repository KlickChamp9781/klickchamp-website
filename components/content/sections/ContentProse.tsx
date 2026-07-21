import type { ContentProseSection } from "@/lib/content/types";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

type Block =
  | { type: "h2"; text: string; id: string }
  | { type: "h3"; text: string }
  | { type: "h4"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "blockquote"; text: string }
  | { type: "code"; lang: string; code: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "callout"; variant: "tip" | "warning" | "note" | "success"; text: string };

function renderInline(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  // Handle inline code first
  const codeRegex = /`([^`]+)`/g;
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = codeRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      const segment = text.slice(lastIndex, match.index);
      parts.push(...renderBold(segment, key));
      key += 100;
    }
    parts.push(
      <code key={key++} className="blog-inline-code">{match[1]}</code>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(...renderBold(text.slice(lastIndex), key));
  }

  return parts.length === 0 ? text : parts;
}

function renderBold(text: string, baseKey: number): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const regex = /\*\*(.+?)\*\*/g;
  let lastIndex = 0;
  let match;
  let key = baseKey;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(<span key={key++}>{text.slice(lastIndex, match.index)}</span>);
    }
    parts.push(
      <strong key={key++} className="font-semibold text-foreground">
        {match[1]}
      </strong>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(<span key={key++}>{text.slice(lastIndex)}</span>);
  }

  return parts;
}

function parseContent(content: string): Block[] {
  const lines = content.split("\n");
  const blocks: Block[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Empty line
    if (trimmed === "") {
      i++;
      continue;
    }

    // H2
    if (trimmed.startsWith("## ")) {
      const text = trimmed.slice(3).trim();
      blocks.push({ type: "h2", text, id: slugify(text) });
      i++;
      continue;
    }

    // H3 (standalone bold line)
    if (/^\*\*(?!\s*$)(.+?)\*\*$/.test(trimmed)) {
      const text = trimmed.replace(/^\*\*(.+?)\*\*$/, "$1");
      blocks.push({ type: "h3", text });
      i++;
      continue;
    }

    // Code block
    if (trimmed.startsWith("```")) {
      const lang = trimmed.slice(3).trim() || "text";
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      if (i < lines.length) i++; // skip closing ```
      blocks.push({ type: "code", lang, code: codeLines.join("\n") });
      continue;
    }

    // Table
    if (trimmed.startsWith("|") && i + 1 < lines.length && /^\|[\s-:|]+\|$/.test(lines[i + 1].trim())) {
      const headers = trimmed
        .split("|")
        .filter((c) => c.trim() !== "")
        .map((c) => c.trim());
      i += 2; // skip header + separator
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        rows.push(
          lines[i]
            .trim()
            .split("|")
            .filter((c) => c.trim() !== "")
            .map((c) => c.trim())
        );
        i++;
      }
      blocks.push({ type: "table", headers, rows });
      continue;
    }

    // Image: ![alt](src) or ![alt](src "caption")
    if (/^!\[.*?\]\(.+?\)$/.test(trimmed)) {
      const m = trimmed.match(/^!\[(.*?)\]\((.+?)\)$/);
      if (m) {
        blocks.push({ type: "image", src: m[2], alt: m[1] });
      }
      i++;
      continue;
    }

    // Callout: > [!tip] or > [!warning] etc.
    if (/^>\s*\[!(tip|warning|note|success)\]/.test(trimmed)) {
      const variant = (trimmed.match(/\[!(tip|warning|note|success)\]/)?.[1] || "note") as "tip" | "warning" | "note" | "success";
      i++;
      const calloutLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith(">") && !lines[i].trim().startsWith("> [!")) {
        calloutLines.push(lines[i].trim().replace(/^>\s*/, ""));
        i++;
      }
      blocks.push({ type: "callout", variant, text: calloutLines.join(" ") });
      continue;
    }

    // Bullet list
    if (trimmed.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        items.push(lines[i].trim().slice(2).trim());
        i++;
      }
      blocks.push({ type: "ul", items });
      continue;
    }

    // Numbered list
    if (/^\d+\.\s/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s/, ""));
        i++;
      }
      blocks.push({ type: "ol", items });
      continue;
    }

    // Blockquote (regular, non-callout)
    if (trimmed.startsWith("> ") && !trimmed.startsWith("> [!")) {
      const text = trimmed.slice(2).trim();
      blocks.push({ type: "blockquote", text });
      i++;
      continue;
    }

    // H4
    if (trimmed.startsWith("#### ")) {
      blocks.push({ type: "h4", text: trimmed.slice(5).trim() });
      i++;
      continue;
    }

    // Regular paragraph
    const pLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].trim().startsWith("## ") &&
      !lines[i].trim().startsWith("#### ") &&
      !lines[i].trim().startsWith("- ") &&
      !/^\d+\.\s/.test(lines[i].trim()) &&
      !lines[i].trim().startsWith("> ") &&
      !/^\*\*(?!\s*$)(.+?)\*\*$/.test(lines[i].trim()) &&
      !lines[i].trim().startsWith("```") &&
      !lines[i].trim().startsWith("|") &&
      !/^!\[.*?\]\(.+?\)$/.test(lines[i].trim())
    ) {
      pLines.push(lines[i].trim());
      i++;
    }
    if (pLines.length > 0) {
      blocks.push({ type: "p", text: pLines.join(" ") });
    }
  }

  return blocks;
}

const CALLOUT_STYLES: Record<string, string> = {
  tip: "blog-callout blog-callout-tip",
  warning: "blog-callout blog-callout-warning",
  note: "blog-callout blog-callout-note",
  success: "blog-callout blog-callout-success",
};

const CALLOUT_LABELS: Record<string, string> = {
  tip: "Tip",
  warning: "Warning",
  note: "Note",
  success: "Success",
};

export function ContentProse({ content }: ContentProseSection) {
  const blocks = parseContent(content);

  return (
    <div className="blog-prose">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2 key={i} id={block.id} className="blog-h2">
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="blog-h3">
                {renderInline(block.text)}
              </h3>
            );
          case "h4":
            return (
              <h4 key={i} className="blog-h4">
                {renderInline(block.text)}
              </h4>
            );
          case "p":
            return (
              <p key={i} className="blog-p">
                {renderInline(block.text)}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="blog-list">
                {block.items.map((item, j) => (
                  <li key={j}>{renderInline(item)}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="blog-list blog-list-ordered">
                {block.items.map((item, j) => (
                  <li key={j}>{renderInline(item)}</li>
                ))}
              </ol>
            );
          case "blockquote":
            return (
              <blockquote key={i} className="blog-blockquote">
                <p>{renderInline(block.text)}</p>
              </blockquote>
            );
          case "code":
            return (
              <div key={i} className="blog-code-block">
                <div className="blog-code-lang">{block.lang}</div>
                <pre><code>{block.code}</code></pre>
              </div>
            );
          case "table":
            return (
              <div key={i} className="blog-table-wrapper">
                <table className="blog-table">
                  <thead>
                    <tr>
                      {block.headers.map((h, j) => (
                        <th key={j}>{renderInline(h)}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, ri) => (
                      <tr key={ri}>
                        {row.map((cell, ci) => (
                          <td key={ci}>{renderInline(cell)}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "image":
            return (
              <figure key={i} className="blog-figure">
                <OptimizedImage src={block.src} alt={block.alt} className="blog-image" width={800} height={450} />
                {block.caption && (
                  <figcaption className="blog-caption">{block.caption}</figcaption>
                )}
              </figure>
            );
          case "callout":
            return (
              <div key={i} className={CALLOUT_STYLES[block.variant]}>
                <span className="blog-callout-label">{CALLOUT_LABELS[block.variant]}</span>
                <p>{renderInline(block.text)}</p>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
