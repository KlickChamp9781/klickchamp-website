import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <div className="pt-24 pb-0 bg-background">
      <div className="container-main">
        <nav className="flex items-center gap-2 text-xs text-muted-foreground py-4">
          {items.map((bc, i) => (
            <span key={bc.href} className="flex items-center gap-2">
              {i > 0 && <span>/</span>}
              {i < items.length - 1 ? (
                <Link href={bc.href} className="hover:text-primary transition-colors">
                  {bc.label}
                </Link>
              ) : (
                <span className="text-foreground">{bc.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}
