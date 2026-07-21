import type { KeywordConfig, SearchIntent } from "./types";

/**
 * Build a keyword-aware title tag.
 * Pattern: "{primary keyword} | {brand}" or custom template.
 */
export function buildKeywordTitle(
  primaryKeyword: string,
  brand: string = "KlickChamp"
): string {
  return `${primaryKeyword} | ${brand}`;
}

/**
 * Build a meta description incorporating primary + secondary keywords.
 * Truncates to 160 chars max.
 */
export function buildKeywordDescription(
  primaryKeyword: string,
  secondaryKeywords: string[],
  template: string = ""
): string {
  let desc = template;
  if (!desc) {
    desc = `${primaryKeyword} services by KlickChamp. ${secondaryKeywords.slice(0, 3).join(", ")} and more.`;
  }
  return desc.length > 160 ? desc.slice(0, 157) + "..." : desc;
}

/**
 * Generate semantic keyword suggestions based on primary keyword and intent.
 */
export function expandSemanticKeywords(
  primaryKeyword: string,
  intent: SearchIntent
): string[] {
  const intentModifiers: Record<SearchIntent, string[]> = {
    informational: ["guide", "what is", "how to", "learn about", "explained"],
    navigational: ["near me", "in kolkata", "contact", "official"],
    commercial: ["best", "top", "reviews", "comparison", "vs", "pricing"],
    transactional: ["hire", "buy", "get", "affordable", "cheap", "instant"],
  };
  return (intentModifiers[intent] || []).map((mod) => `${mod} ${primaryKeyword}`);
}

/**
 * Merge keyword configs, deduplicating.
 */
export function mergeKeywords(...configs: (KeywordConfig | undefined)[]): KeywordConfig {
  const primary = configs.find((c) => c?.primary)?.primary || "";
  const secondary = [...new Set(configs.flatMap((c) => c?.secondary || []))];
  const semantic = [...new Set(configs.flatMap((c) => c?.semantic || []))];
  return { primary, secondary, semantic };
}
