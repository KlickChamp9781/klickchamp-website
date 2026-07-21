"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ImageSource } from "@/lib/data/types";

interface OptimizedImageProps {
  /** Image source from the centralized data layer (ImageSource or URL string) */
  source?: ImageSource | string;
  /** Direct image URL (alternative to source) */
  src?: string;
  /** Alt text (fallback when source lacks alt) or primary alt when using src directly */
  alt?: string;
  /** Width override (defaults to ImageSource.width) */
  width?: number;
  /** Height override (defaults to ImageSource.height) */
  height?: number;
  /** Priority loading for above-the-fold images */
  priority?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Wrapper className */
  wrapperClassName?: string;
  /** Fills the parent container */
  fill?: boolean;
  /** Responsive sizes attribute */
  sizes?: string;
  /** Object fit for fill mode */
  objectFit?: "cover" | "contain" | "fill";
}

const BLUR_PLACEHOLDER =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMTExMTExIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmaWxsPSIjNTU1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+TG9hZGluZy4uLjwvdGV4dD48L3N2Zz4=";

export function OptimizedImage({
  source,
  src: directSrc,
  alt,
  width,
  height,
  priority = false,
  className,
  wrapperClassName,
  fill = false,
  sizes,
  objectFit = "cover",
}: OptimizedImageProps) {
  const [error, setError] = useState(false);

  const resolved: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    blurDataURL?: string;
    caption?: string;
  } = !source
    ? directSrc
      ? { src: directSrc, alt: alt || "" }
      : { src: "", alt: alt || "" }
    : typeof source === "string"
      ? { src: source, alt: alt || "" }
      : {
          src: source.src,
          alt: source.alt || alt || "",
          width: source.width,
          height: source.height,
          blurDataURL: source.blurDataURL,
          caption: source.caption,
        };

  if (!resolved.src || error) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-muted text-muted-foreground",
          fill ? "absolute inset-0" : "",
          wrapperClassName,
          className
        )}
        style={!fill ? { width: width || resolved.width || 400, height: height || resolved.height || 300 } : undefined}
        role="img"
        aria-label={resolved.alt || "Image placeholder"}
      >
        <svg className="w-8 h-8 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    );
  }

  const imgWidth = width || resolved.width;
  const imgHeight = height || resolved.height;

  if (fill) {
    return (
      <div className={cn("relative overflow-hidden h-full w-full", wrapperClassName)}>
        <Image
          src={resolved.src}
          alt={resolved.alt}
          fill
          priority={priority}
          loading={priority ? undefined : "lazy"}
          sizes={sizes || "100vw"}
          className={cn(
            "transition-opacity duration-300",
            objectFit === "cover" && "object-cover",
            objectFit === "contain" && "object-contain",
            objectFit === "fill" && "object-fill",
            className
          )}
          onError={() => setError(true)}
          blurDataURL={resolved.blurDataURL || BLUR_PLACEHOLDER}
          placeholder={resolved.blurDataURL ? "blur" : undefined}
          unoptimized
        />
        {resolved.caption && (
          <span className="absolute bottom-2 left-2 text-[10px] text-white/60 bg-black/50 px-1.5 py-0.5">
            {resolved.caption}
          </span>
        )}
      </div>
    );
  }

  if (!imgWidth || !imgHeight) {
    return (
      <div className={cn("relative", wrapperClassName)} style={{ aspectRatio: "16/9" }}>
        <Image
          src={resolved.src}
          alt={resolved.alt}
          fill
          priority={priority}
          loading={priority ? undefined : "lazy"}
          sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
          className={cn("object-cover", className)}
          onError={() => setError(true)}
          blurDataURL={resolved.blurDataURL || BLUR_PLACEHOLDER}
          placeholder={resolved.blurDataURL ? "blur" : undefined}
          unoptimized
        />
      </div>
    );
  }

  return (
    <div className={cn("relative", wrapperClassName)}>
      <Image
        src={resolved.src}
        alt={resolved.alt}
        width={imgWidth}
        height={imgHeight}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className={cn(
          "transition-opacity duration-300",
          error ? "opacity-0" : "opacity-100",
          className
        )}
        onError={() => setError(true)}
        blurDataURL={resolved.blurDataURL || BLUR_PLACEHOLDER}
        placeholder={resolved.blurDataURL ? "blur" : undefined}
        sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
        unoptimized
      />
      {resolved.caption && (
        <span className="block text-xs text-muted-foreground mt-1.5 text-center">
          {resolved.caption}
        </span>
      )}
    </div>
  );
}

/**
 * @deprecated Use resolveImage from "@/lib/data/image-utils" instead
 */
export { resolveImage } from "@/lib/data/image-utils";
