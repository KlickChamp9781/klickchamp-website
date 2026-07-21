import { Clock, Calendar, User, Tag, RefreshCw } from "lucide-react";
import type { MetaBarSection } from "@/lib/content/types";

const iconMap = {
  calendar: Calendar,
  clock: Clock,
  user: User,
  tag: Tag,
  refresh: RefreshCw,
};

export function MetaBar({ items }: MetaBarSection) {
  return (
    <div className="blog-meta-bar">
      {items.map((item, i) => {
        const Icon = item.icon ? iconMap[item.icon] : null;
        return (
          <div key={i} className="blog-meta-item">
            {Icon && <Icon className="h-4 w-4" />}
            <span>{item.text}</span>
          </div>
        );
      })}
    </div>
  );
}
