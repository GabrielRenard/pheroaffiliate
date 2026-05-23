import { defineType, defineField } from 'sanity';
import { seoFields } from './objects/seoFields';

export const comparison = defineType({
  name: 'comparison',
  title: 'Comparison',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g. "Pherazone vs. Alpha Dream: Which Is Worth It?"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'intro',
      title: 'Intro',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'products',
      title: 'Products to Compare',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
      validation: (Rule) => Rule.required().min(2).max(4),
    }),
    defineField({
      name: 'verdict',
      title: 'Verdict',
      type: 'object',
      fields: [
        {
          name: 'winner',
          title: 'Overall Winner',
          type: 'reference',
          to: [{ type: 'product' }],
        },
        {
          name: 'bestValue',
          title: 'Best Value Pick',
          type: 'reference',
          to: [{ type: 'product' }],
        },
        {
          name: 'summary',
          title: 'Verdict Summary',
          type: 'text',
          rows: 3,
        },
      ],
    }),
    defineField({
      name: 'body',
      title: 'Full Comparison Content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'faq' }] }],
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'updatedAt',
      title: 'Updated At',
      type: 'datetime',
    }),
    ...seoFields,
  ],
  preview: {
    select: { title: 'title' },
  },
});
