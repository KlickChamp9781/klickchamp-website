import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  maxWidth?: "default" | "3xl" | "4xl";
  className?: string;
}

export function Container({ children, maxWidth = "default", className = "" }: ContainerProps) {
  const maxClass = maxWidth === "3xl" ? "max-w-3xl" : maxWidth === "4xl" ? "max-w-4xl" : "";
  return (
    <div className={`container-main ${maxClass} ${className}`.trim()}>
      {children}
    </div>
  );
}
