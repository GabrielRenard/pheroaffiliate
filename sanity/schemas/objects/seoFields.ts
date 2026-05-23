import { defineField } from 'sanity';

export const seoFields = [
  defineField({
    name: 'seoTitle',
    title: 'SEO Title',
    type: 'string',
    description: 'Override the page title for search engines (50–60 chars ideal).',
    validation: (Rule) => Rule.max(70),
  }),
  defineField({
    name: 'seoDescription',
    title: 'SEO Description',
    type: 'text',
    rows: 3,
    description: 'Meta description shown in search results (120–160 chars ideal).',
    validation: (Rule) => Rule.max(165),
  }),
  defineField({
    name: 'ogImage',
    title: 'Open Graph Image',
    type: 'image',
    description: 'Social sharing image. Recommended: 1200×630px.',
    options: { hotspot: true },
  }),
  defineField({
    name: 'canonicalUrl',
    title: 'Canonical URL',
    type: 'url',
    description: 'Leave blank to use the default URL for this page.',
  }),
  defineField({
    name: 'noindex',
    title: 'No Index',
    type: 'boolean',
    description: 'Set to true to prevent search engines from indexing this page.',
    initialValue: false,
  }),
];
