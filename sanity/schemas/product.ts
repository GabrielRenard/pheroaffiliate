import { defineType, defineField } from 'sanity';
import { seoFields } from './objects/seoFields';

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'productType',
      title: 'Product Type',
      type: 'string',
      options: {
        list: [
          { title: 'Eau de Parfum', value: 'edp' },
          { title: 'Eau de Toilette', value: 'edt' },
          { title: 'Oil / Concentrate', value: 'oil' },
          { title: 'Spray (Unscented)', value: 'spray_unscented' },
          { title: 'Spray (Scented)', value: 'spray_scented' },
          { title: 'Cologne', value: 'cologne' },
          { title: 'Body Lotion', value: 'body_lotion' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'intendedAudience',
      title: 'Intended Audience',
      type: 'string',
      options: {
        list: [
          { title: 'Men', value: 'men' },
          { title: 'Women', value: 'women' },
          { title: 'Unisex', value: 'unisex' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'scentProfile',
      title: 'Scent Profile',
      type: 'string',
      description: 'e.g. "Fresh, Woody, Citrus" or "Unscented"',
    }),
    defineField({
      name: 'longevity',
      title: 'Longevity (hours)',
      type: 'number',
      description: 'Average wear time in hours.',
      validation: (Rule) => Rule.min(0).max(24),
    }),
    defineField({
      name: 'projection',
      title: 'Projection',
      type: 'string',
      options: {
        list: [
          { title: 'Soft / Skin-close', value: 'soft' },
          { title: 'Moderate', value: 'moderate' },
          { title: 'Strong', value: 'strong' },
          { title: 'Beast Mode', value: 'beast' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'ingredientNotes',
      title: 'Ingredient Notes',
      type: 'text',
      rows: 3,
      description: 'Notable ingredients, top/middle/base notes.',
    }),
    defineField({
      name: 'price',
      title: 'Price (USD)',
      type: 'number',
      description: 'Approximate retail price.',
    }),
    defineField({
      name: 'priceRange',
      title: 'Price Range',
      type: 'string',
      options: {
        list: [
          { title: 'Budget (< $30)', value: 'budget' },
          { title: 'Mid-range ($30–$80)', value: 'mid' },
          { title: 'Premium ($80–$150)', value: 'premium' },
          { title: 'Luxury ($150+)', value: 'luxury' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'affiliateUrl',
      title: 'Affiliate / Buy Link',
      type: 'url',
      description: 'Primary CTA link. Use your affiliate tracking URL.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'affiliateDisclaimer',
      title: 'Show Affiliate Disclaimer',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'pros',
      title: 'Pros',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List the key advantages.',
    }),
    defineField({
      name: 'cons',
      title: 'Cons',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List the honest drawbacks.',
    }),
    defineField({
      name: 'summary',
      title: 'Review Summary',
      type: 'text',
      rows: 4,
      description: 'Short editorial summary shown in cards and preview snippets.',
    }),
    defineField({
      name: 'body',
      title: 'Full Review Body',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', type: 'string', title: 'Alt text' }],
        },
      ],
    }),
    defineField({
      name: 'editorialVerdict',
      title: 'Editorial Verdict',
      type: 'text',
      rows: 2,
      description: 'One or two sentences that summarise our recommendation.',
    }),
    defineField({
      name: 'reviewScore',
      title: 'Review Score (out of 10)',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(10).precision(1),
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Alt text', validation: (Rule: any) => Rule.required() }],
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', type: 'string', title: 'Alt text' }],
        },
      ],
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
    }),
    defineField({
      name: 'relatedProducts',
      title: 'Related Products',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
      validation: (Rule) => Rule.max(4),
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'faq' }] }],
    }),
    defineField({
      name: 'author',
      title: 'Reviewed By',
      type: 'reference',
      to: [{ type: 'author' }],
    }),
    defineField({
      name: 'lastReviewedAt',
      title: 'Last Reviewed At',
      type: 'datetime',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    // SEO
    ...seoFields,
  ],
  orderings: [
    {
      title: 'Review Score (High to Low)',
      name: 'reviewScoreDesc',
      by: [{ field: 'reviewScore', direction: 'desc' }],
    },
    {
      title: 'Newest First',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'brand',
      media: 'featuredImage',
    },
  },
});
