import type { Product, BestList, Comparison, Guide, FaqItem } from '../types';

const SITE_URL = import.meta.env.SITE_URL || 'https://pheroguide.com';
const SITE_NAME = 'PheroGuide';

// ─── Breadcrumbs ──────────────────────────────────────────────────────────────

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

// ─── Product ──────────────────────────────────────────────────────────────────

export function buildProductSchema(product: Product) {
  const url = `${SITE_URL}/products/${product.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    brand: {
      '@type': 'Brand',
      name: product.brand,
    },
    description: product.summary,
    image: product.featuredImageUrl,
    url,
    ...(product.reviewScore
      ? {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: product.reviewScore,
            bestRating: 10,
            worstRating: 0,
            reviewCount: 1,
          },
        }
      : {}),
    ...(product.price
      ? {
          offers: {
            '@type': 'Offer',
            url: product.affiliateUrl,
            priceCurrency: 'USD',
            price: product.price,
            availability: 'https://schema.org/InStock',
          },
        }
      : {}),
  };
}

// ─── Review ───────────────────────────────────────────────────────────────────

export function buildReviewSchema(product: Product) {
  if (!product.reviewScore || !product.editorialVerdict) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Product',
      name: product.name,
      brand: { '@type': 'Brand', name: product.brand },
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: product.reviewScore,
      bestRating: 10,
      worstRating: 0,
    },
    author: {
      '@type': 'Person',
      name: product.author?.name || SITE_NAME + ' Editorial Team',
    },
    reviewBody: product.editorialVerdict,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export function buildFaqSchema(faqs: FaqItem[]) {
  if (!faqs || faqs.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// ─── Article ──────────────────────────────────────────────────────────────────

export function buildArticleSchema({
  title,
  excerpt,
  slug,
  imageUrl,
  authorName,
  publishedAt,
  updatedAt,
}: {
  title: string;
  excerpt?: string;
  slug: string;
  imageUrl?: string;
  authorName?: string;
  publishedAt?: string;
  updatedAt?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: excerpt,
    image: imageUrl,
    author: {
      '@type': 'Person',
      name: authorName || `${SITE_NAME} Editorial Team`,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    datePublished: publishedAt,
    dateModified: updatedAt || publishedAt,
  };
}

export function schemaToScript(schema: object | null): string {
  if (!schema) return '';
  return JSON.stringify(schema);
}
