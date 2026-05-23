# PheroGuide — Pheromone Affiliate Site

A production-ready affiliate marketing site for pheromone-infused fragrance products.
Built with **Astro 4**, **Sanity v3** (headless CMS), and **TypeScript**.

## Architecture Overview

```
Sanity Studio (CMS)  ──→  Sanity API (GROQ)  ──→  Astro (Static Site)
     /studio                                         pheroguide.com
```

- **Astro** handles all public-facing pages (static output by default, SSR-ready)
- **Sanity** is the single source of truth for all editorial content
- **Embedded Studio** accessible at `/studio` during development (via `@sanity/astro`)

---

## Quick Start

### 1. Clone & Install

```bash
git clone <repo-url>
cd pheroaffiliate
npm install
```

### 2. Create a Sanity Project

1. Go to [sanity.io/manage](https://sanity.io/manage) and create a new project
2. Choose the **production** dataset (created automatically)
3. Note your **Project ID** from the project settings

### 3. Configure Environment Variables

```bash
cp .env.example .env
```

Edit `.env` with your values:

```env
PUBLIC_SANITY_PROJECT_ID=your_project_id_here
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_VERSION=2024-01-01

# For draft preview (optional)
SANITY_API_READ_TOKEN=your_token_here

# Your production domain
SITE_URL=https://pheroguide.com
```

### 4. Deploy Sanity Schemas

The schemas are embedded in the Astro project. To push them to Sanity:

```bash
# Start the dev server — this also starts the embedded Studio
npm run dev
```

Navigate to `http://localhost:4321/studio` to open Sanity Studio and start adding content.

### 5. Start the Dev Server

```bash
npm run dev
# → http://localhost:4321
# → http://localhost:4321/studio (Sanity Studio)
```

---

## Content Model

| Schema | Route | Purpose |
|--------|-------|---------|
| `product` | `/products/[slug]/` | Full product review page |
| `category` | `/category/[slug]/` | Category hub page |
| `bestList` | `/best/[slug]/` | "Best of" roundup |
| `comparison` | `/compare/[slug]/` | Side-by-side comparison |
| `guide` | `/guides/[slug]/` | Educational/informational guide |
| `author` | — | Author profiles linked to content |
| `faq` | — | Reusable FAQ entries |
| `review` | — | User/community reviews |
| `siteSettings` | — | Global site config |
| `policyPage` | — | Flexible policy pages |

### Sample Content to Seed

Add this content through the Sanity Studio at `/studio`:

#### Authors (create first)
- Name: "Alex Morgan" · Credentials: "Fragrance Researcher, 8+ years"
- Name: "Jordan Lee" · Credentials: "Scent & Wellness Consultant"

#### Categories
1. **Pheromone Perfumes for Women** · slug: `pheromone-perfumes` · description: "Scented pheromone EDP and EDT formulations."
2. **Pheromone Colognes for Men** · slug: `pheromones-for-men` · description: "From subtle to strong — pheromone colognes ranked."
3. **Unscented Pheromone Oils** · slug: `pheromone-oils` · description: "Concentrated oil blends for layering."

#### Products (5 sample products)

**Product 1**
- Name: Pherazone Ultra · Brand: Pherazone
- Slug: `pherazone-ultra`
- Type: Eau de Parfum · Audience: Men
- Score: 8.5 · Price: $99
- Scent Profile: Fresh, Woody, Amber
- Longevity: 8 · Projection: Strong
- Pros: Long-lasting, strong projection, pleasant scent
- Cons: Premium price point, can be overpowering in warm weather
- Affiliate URL: https://example.com/pherazone-ultra

**Product 2**
- Name: Alpha Dream Ascend · Brand: Alpha Dream
- Slug: `alpha-dream-ascend`
- Type: Eau de Toilette · Audience: Men
- Score: 7.8 · Price: $75
- Scent Profile: Clean, Citrus, Musk
- Longevity: 6 · Projection: Moderate
- Pros: Versatile, office-friendly, moderate price
- Cons: Shorter longevity than premium options
- Affiliate URL: https://example.com/alpha-dream-ascend

**Product 3**
- Name: Pure Instinct Unisex · Brand: Pure Instinct
- Slug: `pure-instinct-unisex`
- Type: Oil / Concentrate · Audience: Unisex
- Score: 7.2 · Price: $35
- Scent Profile: Vanilla, Amber, Musk
- Longevity: 5 · Projection: Soft
- Pros: Budget-friendly, versatile, pleasant
- Cons: Subtle — works better layered
- Affiliate URL: https://example.com/pure-instinct

**Product 4**
- Name: Chikara for Men · Brand: Love Scent
- Slug: `chikara-pheromone-cologne`
- Type: Cologne · Audience: Men
- Score: 7.5 · Price: $49
- Scent Profile: Fresh, Clean, Aquatic
- Longevity: 6 · Projection: Moderate
- Pros: Well-regarded blend, accessible price
- Cons: Mild scent may not appeal to everyone
- Affiliate URL: https://example.com/chikara

**Product 5**
- Name: Primal Women Oil · Brand: Primal Instinct
- Slug: `primal-women-pheromone-oil`
- Type: Oil / Concentrate · Audience: Women
- Score: 7.9 · Price: $59
- Scent Profile: Unscented (meant to layer)
- Longevity: 7 · Projection: Moderate
- Pros: Unscented so pairs with any fragrance, concentrated formula
- Cons: Learning curve on application amount
- Affiliate URL: https://example.com/primal-women

#### Best Lists (2 examples)

**Best List 1**
- Title: "Best Pheromone Colognes for Men (2024 Tested)"
- Slug: `best-pheromone-colognes-for-men`
- Picks: Pherazone Ultra (#1), Chikara (#2), Alpha Dream Ascend (#3)

**Best List 2**
- Title: "Best Pheromone Perfumes for Women"
- Slug: `best-pheromone-perfumes-for-women`
- Picks: Primal Women Oil (#1), Pure Instinct (#2)

#### Comparisons (2 examples)

**Comparison 1**
- Title: "Pherazone vs. Alpha Dream: Which Is Worth the Money?"
- Slug: `pherazone-vs-alpha-dream`
- Products: Pherazone Ultra, Alpha Dream Ascend

**Comparison 2**
- Title: "Pherazone vs. Chikara: Premium vs. Mid-Range"
- Slug: `pherazone-vs-chikara`
- Products: Pherazone Ultra, Chikara

#### Guides (3 examples)

1. **How Pheromones Work: The Science Behind the Claims** · slug: `how-pheromones-work`
2. **Pheromone Fragrance Buyer's Guide: What to Look For** · slug: `pheromone-buying-guide`
3. **How to Apply Pheromone Products for Best Results** · slug: `how-to-apply-pheromones`

#### FAQs (Reusable)

1. Q: "Do pheromone perfumes actually work?" · A: "The evidence is mixed. Some users report noticing social effects; peer-reviewed studies on human pheromones show inconsistent results. We recommend treating these products primarily as fragrances with a possible additional benefit — not as guaranteed attraction aids."

2. Q: "How long do pheromone products last?" · A: "Longevity varies widely. Most sprays last 4–8 hours. Oil-based formulas tend to last longer (6–10 hours) as they bind to skin differently."

3. Q: "Can I layer pheromone products with my existing cologne?" · A: "Yes — many users apply unscented pheromone oils underneath their regular cologne. Avoid over-application; 2–4 pulse points is usually sufficient."

---

## Site Structure

```
src/
├── components/
│   ├── AuthorBox.astro          # Author attribution block
│   ├── Breadcrumbs.astro        # Accessible breadcrumb nav
│   ├── ComparisonTable.astro    # Side-by-side product table
│   ├── CTAButton.astro          # Affiliate CTA with disclaimer
│   ├── DisclosureBanner.astro   # Top-of-page affiliate banner
│   ├── FAQAccordion.astro       # Accessible details/summary FAQ
│   ├── Footer.astro
│   ├── Hero.astro               # Flexible hero section
│   ├── Navigation.astro         # Responsive sticky nav
│   ├── PortableTextRenderer.astro
│   ├── ProductCard.astro        # Reusable product card
│   ├── ProsCons.astro           # Green/orange pros & cons block
│   ├── RelatedContent.astro     # "You might also like" section
│   └── StarRating.astro         # 0–10 scale → 0–5 star display
├── layouts/
│   └── BaseLayout.astro         # HTML head + meta + global CSS
├── lib/
│   ├── portableText.ts          # Portable Text → HTML serializer
│   ├── queries.ts               # All GROQ queries
│   └── sanity.ts                # Sanity client + image builder
├── pages/
│   ├── index.astro              # Home
│   ├── about.astro
│   ├── contact.astro
│   ├── editorial-policy.astro
│   ├── affiliate-disclosure.astro
│   ├── privacy-policy.astro
│   ├── category/[slug].astro    # Category hub pages
│   ├── best/[slug].astro        # Best-of roundups
│   ├── products/[slug].astro    # Product review pages
│   ├── compare/[slug].astro     # Comparison pages
│   └── guides/
│       ├── index.astro          # All guides listing
│       └── [slug].astro         # Individual guide
├── types/
│   └── index.ts                 # Shared TypeScript types
└── utils/
    ├── metadata.ts              # Open Graph + meta tag builder
    └── structuredData.ts        # JSON-LD schema helpers

sanity/
└── schemas/
    ├── index.ts                 # Schema registry
    ├── objects/
    │   ├── portableTextBlock.ts
    │   └── seoFields.ts
    ├── author.ts
    ├── bestList.ts
    ├── category.ts
    ├── comparison.ts
    ├── faq.ts
    ├── guide.ts
    ├── policyPage.ts
    ├── product.ts
    ├── review.ts
    └── siteSettings.ts
```

---

## SEO Features

- **Per-page meta titles & descriptions** pulled from Sanity, with automatic fallbacks
- **Open Graph + Twitter Card** tags on every page
- **Canonical URLs** to prevent duplicate content issues
- **Noindex flag** per content item for thin/draft pages
- **JSON-LD structured data** on product, review, FAQ, article, and breadcrumb pages
- **Breadcrumbs** on every content page (both visual + Schema.org markup)
- **Sitemap** generated automatically by `@astrojs/sitemap` (excludes `/studio`)
- **robots.txt** blocking studio crawling

### Structured Data Types Used
| Page Type | Schema Types |
|-----------|-------------|
| Product Review | `Product`, `Review`, `BreadcrumbList`, `FAQPage` |
| Best-Of List | `Article`, `BreadcrumbList`, `FAQPage` |
| Comparison | `Article`, `BreadcrumbList`, `FAQPage` |
| Guide | `Article`, `BreadcrumbList`, `FAQPage` |
| Category | `BreadcrumbList` |

---

## Deployment

### Static Build (Recommended)

```bash
npm run build
# Output: ./dist/
```

Deploy `./dist` to any static host: Netlify, Vercel, Cloudflare Pages, etc.

### Environment Variables for Production

Set these in your hosting provider's dashboard:

```
PUBLIC_SANITY_PROJECT_ID=xxxxx
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_VERSION=2024-01-01
SITE_URL=https://pheroguide.com
```

### Sanity Studio Deployment (Optional Separate Deploy)

If you prefer to deploy the Studio separately:

1. Create a new directory for a standalone Studio app
2. Use `npm create sanity@latest` with your existing project ID
3. Import schemas from `./sanity/schemas/`
4. Deploy to `sanity.io` via `npx sanity deploy`

---

## Extending the Site

### Adding a New Product
1. Open `/studio` in dev mode (or your deployed Studio)
2. Create a `product` document
3. Fill in all required fields (name, slug, affiliateUrl, reviewScore)
4. Publish — the page at `/products/[slug]/` builds automatically

### Adding a New Comparison
1. Create 2+ product documents first
2. Create a `comparison` document
3. Set the products array, verdict, and body
4. Publish — page auto-generates at `/compare/[slug]/`

### Adding a New Category
1. Create a `category` document with a unique slug
2. Assign products to this category in their `categories` field
3. The hub page at `/category/[slug]/` appears automatically

---

## Affiliate Link Best Practices

- All affiliate links use `rel="nofollow noopener noreferrer"` and `target="_blank"` by default (set in `CTAButton.astro` and `ProductCard.astro`)
- The disclosure banner appears on every page
- Per-product disclaimers appear near CTAs
- Affiliate links are clearly distinguished from editorial links

---

## License

MIT — see `LICENSE` for details.
