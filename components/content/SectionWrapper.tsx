import type { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  /** Background theme */
  theme?: "default" | "secondary" | "card";
  /** Whether to add top border */
  bordered?: boolean;
  /** Additional className */
  className?: string;
  /** Use section-padding or py-12 */
  padding?: "section" | "compact" | "none";
}

const bgMap = {
  default: "",
  secondary: "bg-secondary text-secondary-foreground",
  card: "bg-card",
};

export function SectionWrapper({
  children,
  theme = "default",
  bordered = false,
  className = "",
  padding = "section",
}: SectionWrapperProps) {
  const paddingClass = padding === "section" ? "py-20 lg:py-30" : padding === "compact" ? "py-12" : "";
  const borderClass = bordered ? "border-t border-border" : "";
  const bgClass = bgMap[theme];

  return (
    <section className={`${paddingClass} ${borderClass} ${bgClass} ${className}`.trim()}>
      {children}
    </section>
  );
}
