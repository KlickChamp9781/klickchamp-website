// SEO Engine — centralised exports
export type {
  PageType,
  SearchIntent,
  KeywordConfig,
  PageSEOInput,
  ContentMetadata,
  BreadcrumbItem,
  SchemaType,
  InternalLinkSet,
  LinkItem,
  ImageSEOConfig,
  SEOResult,
  ValidationIssue,
} from "./types";

export {
  buildKeywordTitle,
  buildKeywordDescription,
  expandSemanticKeywords,
  mergeKeywords,
} from "./keywords";

export {
  getServiceLinks,
  getSubServiceLinks,
  getIndustryLinks,
  getLocationLinks,
  getBlogLinks,
  getCaseStudyLinks,
} from "./internal-links";

export {
  buildImageAlt,
  getImageProps,
  imageJsonLd,
} from "./image-seo";

export {
  generatePageSEO,
  servicePageSEO,
  subServicePageSEO,
  industryPageSEO,
  locationPageSEO,
  blogPageSEO,
  caseStudyPageSEO,
  staticPageSEO,
} from "./engine";

export {
  validateSEO,
  validatePageInput,
  validateEntireSite,
  formatValidationReport,
  validationSummary,
} from "./validation";

export {
  organizationJsonLd,
  serviceJsonLd,
  localBusinessJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
  articleJsonLd,
  videoObjectJsonLd,
  webPageJsonLd,
  personJsonLd,
} from "./jsonld";
