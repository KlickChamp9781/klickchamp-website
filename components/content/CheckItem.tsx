import { Check } from "lucide-react";

interface CheckItemProps {
  title?: string;
  description?: string;
  text?: string;
  /** "numbered" shows the index number instead of a check icon */
  numbered?: boolean;
  index?: number;
}

export function CheckItem({ title, description, text, numbered, index }: CheckItemProps) {
  if (numbered && index !== undefined) {
    return (
      <div className="flex items-start gap-4">
        <span className="text-4xl font-bold text-[rgb(var(--primary))]/20 shrink-0 w-12 text-right">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div>
          {title && <h3 className="text-lg font-bold mb-2">{title}</h3>}
          {description && (
            <p className="text-muted-foreground leading-relaxed">{description}</p>
          )}
          {text && (
            <p className="text-lg leading-relaxed pt-1">{text}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-3">
      <div className="w-6 h-6 border border-[rgb(var(--primary))]/60 flex items-center justify-center shrink-0 mt-0.5">
        <Check className="h-3 w-3 text-primary" />
      </div>
      <div>
        {title && <h3 className="text-lg font-bold mb-2">{title}</h3>}
        {description && (
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        )}
        {text && (
          <p className="leading-relaxed">{text}</p>
        )}
      </div>
    </div>
  );
}
