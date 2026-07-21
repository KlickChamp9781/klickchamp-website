import { ScrollReveal } from "@/components/animations/ScrollReveal";

interface HeadingProps {
  children: string;
  gold?: string;
}

/**
 * Reusable section heading. Renders the first part as normal text,
 * and `gold` as a gold gradient span.
 *
 * If gold is not provided, children is rendered as-is.
 */
export function Heading({ children, gold }: HeadingProps) {
  if (!gold) {
    return (
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-12">
          {children}
        </h2>
      </ScrollReveal>
    );
  }

  return (
    <ScrollReveal>
      <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-12">
        {children}{" "}
        <span className="text-gradient-gold">{gold}</span>
      </h2>
    </ScrollReveal>
  );
}
