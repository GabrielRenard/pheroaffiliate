// Reusable GROQ query fragments
const seoFragment = `
  seoTitle,
  seoDescription,
  "ogImageUrl": ogImage.asset->url,
  canonicalUrl,
  noindex
`;

const authorFragment = `
  author->{
    name,
    credentials,
    "photoUrl": photo.asset->url,
    "slug": slug.current
  }
`;

const productCardFragment = `
  _id,
  name,
  brand,
  productType,
  intendedAudience,
  reviewScore,
  price,
  priceRange,
  summary,
  affiliateUrl,
  "slug": slug.current,
  "featuredImageUrl": featuredImage.asset->url,
  "featuredImageAlt": featuredImage.alt,
  "categories": categories[]->{name, "slug": slug.current}
`;

// ─── Home page ───────────────────────────────────────────────────────────────

export const homePageQuery = `{
  "featuredProducts": *[_type == "product" && defined(reviewScore)] | order(reviewScore desc)[0...6] {
    ${productCardFragment}
  },
  "latestGuides": *[_type == "guide"] | order(publishedAt desc)[0...3] {
    _id,
    title,
    excerpt,
    "slug": slug.current,
    "coverImageUrl": coverImage.asset->url,
    "coverImageAlt": coverImage.alt
  },
  "bestLists": *[_type == "bestList"] | order(publishedAt desc)[0...4] {
    _id,
    title,
    headline,
    "slug": slug.current,
    "coverImageUrl": coverImage.asset->url
  },
  "categories": *[_type == "category"] | order(name asc) {
    _id,
    name,
    description,
    "slug": slug.current,
    "heroImageUrl": heroImage.asset->url
  },
  "settings": *[_type == "siteSettings"][0] {
    siteName,
    siteTagline,
    affiliateDisclosureShort
  }
}`;

// ─── Category hub ────────────────────────────────────────────────────────────

export const categoryQuery = `*[_type == "category" && slug.current == $slug][0] {
  name,
  description,
  "slug": slug.current,
  "heroImageUrl": heroImage.asset->url,
  "heroImageAlt": heroImage.alt,
  intro,
  publishedAt,
  updatedAt,
  ${seoFragment}
}`;

export const productsByCategoryQuery = `*[_type == "product" && references(*[_type == "category" && slug.current == $slug]._id)] | order(reviewScore desc) {
  ${productCardFragment}
}`;

export const allCategorySlugsQuery = `*[_type == "category"]{"slug": slug.current}`;

// ─── Best-of list ─────────────────────────────────────────────────────────────

export const bestListQuery = `*[_type == "bestList" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  headline,
  "coverImageUrl": coverImage.asset->url,
  "coverImageAlt": coverImage.alt,
  body,
  picks[]{
    award,
    rank,
    pickSummary,
    "product": product->{${productCardFragment}}
  },
  "faqs": faqs[]->{question, answer},
  ${authorFragment},
  publishedAt,
  updatedAt,
  ${seoFragment}
}`;

export const allBestListSlugsQuery = `*[_type == "bestList"]{"slug": slug.current}`;

// ─── Product review ───────────────────────────────────────────────────────────

export const productQuery = `*[_type == "product" && slug.current == $slug][0] {
  name,
  brand,
  "slug": slug.current,
  productType,
  intendedAudience,
  scentProfile,
  longevity,
  projection,
  ingredientNotes,
  price,
  priceRange,
  affiliateUrl,
  affiliateDisclaimer,
  pros,
  cons,
  summary,
  body,
  editorialVerdict,
  reviewScore,
  "featuredImageUrl": featuredImage.asset->url,
  "featuredImageAlt": featuredImage.alt,
  "gallery": gallery[]{
    "url": asset->url,
    alt
  },
  "categories": categories[]->{name, "slug": slug.current},
  "relatedProducts": relatedProducts[]->{${productCardFragment}},
  "faqs": faqs[]->{question, answer},
  ${authorFragment},
  lastReviewedAt,
  publishedAt,
  ${seoFragment}
}`;

export const allProductSlugsQuery = `*[_type == "product"]{"slug": slug.current}`;

// ─── Comparison ───────────────────────────────────────────────────────────────

export const comparisonQuery = `*[_type == "comparison" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  intro,
  "products": products[]->{${productCardFragment}},
  "verdict": {
    "winner": verdict.winner->{${productCardFragment}},
    "bestValue": verdict.bestValue->{${productCardFragment}},
    "summary": verdict.summary
  },
  body,
  "faqs": faqs[]->{question, answer},
  ${authorFragment},
  publishedAt,
  updatedAt,
  ${seoFragment}
}`;

export const allComparisonSlugsQuery = `*[_type == "comparison"]{"slug": slug.current}`;

// ─── Guides ───────────────────────────────────────────────────────────────────

export const guideQuery = `*[_type == "guide" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  excerpt,
  "coverImageUrl": coverImage.asset->url,
  "coverImageAlt": coverImage.alt,
  body,
  "relatedProducts": relatedProducts[]->{${productCardFragment}},
  "faqs": faqs[]->{question, answer},
  ${authorFragment},
  publishedAt,
  updatedAt,
  ${seoFragment}
}`;

export const allGuideQuery = `*[_type == "guide"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  "coverImageUrl": coverImage.asset->url,
  publishedAt
}`;

export const allGuideSlugsQuery = `*[_type == "guide"]{"slug": slug.current}`;

// ─── Policy pages ─────────────────────────────────────────────────────────────

export const policyPageQuery = `*[_type == "policyPage" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  body,
  updatedAt,
  ${seoFragment}
}`;

// ─── Site settings ────────────────────────────────────────────────────────────

export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  siteName,
  siteTagline,
  siteDescription,
  "logoUrl": logo.asset->url,
  affiliateDisclosureShort,
  socialLinks,
  navLinks
}`;
