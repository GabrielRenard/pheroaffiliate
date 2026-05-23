// ─── Shared types ─────────────────────────────────────────────────────────────

export interface SeoMeta {
  seoTitle?: string;
  seoDescription?: string;
  ogImageUrl?: string;
  canonicalUrl?: string;
  noindex?: boolean;
}

export interface Author {
  name: string;
  credentials?: string;
  photoUrl?: string;
  slug?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProductCard {
  _id: string;
  name: string;
  brand: string;
  productType?: string;
  intendedAudience?: string;
  reviewScore?: number;
  price?: number;
  priceRange?: string;
  summary?: string;
  affiliateUrl: string;
  slug: string;
  featuredImageUrl?: string;
  featuredImageAlt?: string;
  categories?: Array<{ name: string; slug: string }>;
}

export interface Product extends ProductCard, SeoMeta {
  scentProfile?: string;
  longevity?: number;
  projection?: string;
  ingredientNotes?: string;
  affiliateDisclaimer?: boolean;
  pros?: string[];
  cons?: string[];
  body?: unknown[];
  editorialVerdict?: string;
  gallery?: Array<{ url: string; alt?: string }>;
  relatedProducts?: ProductCard[];
  faqs?: FaqItem[];
  author?: Author;
  lastReviewedAt?: string;
  publishedAt?: string;
}

export interface Category extends SeoMeta {
  name: string;
  slug: string;
  description?: string;
  heroImageUrl?: string;
  heroImageAlt?: string;
  intro?: unknown[];
  publishedAt?: string;
  updatedAt?: string;
}

export interface BestListPick {
  award?: string;
  rank?: number;
  pickSummary?: string;
  product: ProductCard;
}

export interface BestList extends SeoMeta {
  title: string;
  slug: string;
  headline?: string;
  coverImageUrl?: string;
  coverImageAlt?: string;
  body?: unknown[];
  picks: BestListPick[];
  faqs?: FaqItem[];
  author?: Author;
  publishedAt?: string;
  updatedAt?: string;
}

export interface Comparison extends SeoMeta {
  title: string;
  slug: string;
  intro?: string;
  products: ProductCard[];
  verdict?: {
    winner?: ProductCard;
    bestValue?: ProductCard;
    summary?: string;
  };
  body?: unknown[];
  faqs?: FaqItem[];
  author?: Author;
  publishedAt?: string;
  updatedAt?: string;
}

export interface Guide extends SeoMeta {
  title: string;
  slug: string;
  excerpt?: string;
  coverImageUrl?: string;
  coverImageAlt?: string;
  body?: unknown[];
  relatedProducts?: ProductCard[];
  faqs?: FaqItem[];
  author?: Author;
  publishedAt?: string;
  updatedAt?: string;
}

export interface PolicyPage extends SeoMeta {
  title: string;
  slug: string;
  body?: unknown[];
  updatedAt?: string;
}

export interface SiteSettings {
  siteName: string;
  siteTagline?: string;
  siteDescription?: string;
  logoUrl?: string;
  affiliateDisclosureShort?: string;
  socialLinks?: {
    twitter?: string;
    instagram?: string;
    youtube?: string;
    pinterest?: string;
  };
  navLinks?: Array<{ label: string; href: string }>;
}
