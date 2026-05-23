import type { SeoMeta } from '../types';

const SITE_NAME = 'PheroGuide';
const SITE_URL = import.meta.env.SITE_URL || 'https://pheroguide.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.jpg`;

export interface MetadataInput extends SeoMeta {
  title: string;
  description?: string;
  path: string;
  type?: 'website' | 'article';
  publishedAt?: string;
  updatedAt?: string;
}

export interface ResolvedMetadata {
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogType: string;
  twitterCard: string;
  noindex: boolean;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
}

export function buildMetadata(input: MetadataInput): ResolvedMetadata {
  const title = input.seoTitle || input.title;
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const description =
    input.seoDescription || input.description || 'Expert pheromone product reviews, comparisons, and buying guides.';
  const canonical = input.canonicalUrl || `${SITE_URL}${input.path}`;
  const ogImage = input.ogImageUrl || DEFAULT_OG_IMAGE;

  return {
    title: fullTitle,
    description,
    canonical,
    ogTitle: fullTitle,
    ogDescription: description,
    ogImage,
    ogType: input.type || 'website',
    twitterCard: 'summary_large_image',
    noindex: input.noindex ?? false,
    ...(input.publishedAt ? { articlePublishedTime: input.publishedAt } : {}),
    ...(input.updatedAt ? { articleModifiedTime: input.updatedAt } : {}),
  };
}
