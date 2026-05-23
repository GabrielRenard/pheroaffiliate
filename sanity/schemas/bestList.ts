import { defineType, defineField } from 'sanity';
import { seoFields } from './objects/seoFields';

export const bestList = defineType({
  name: 'bestList',
  title: 'Best-Of List',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g. "Best Pheromone Colognes for Men in 2024"',
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
      name: 'headline',
      title: 'Headline / Intro',
      type: 'text',
      rows: 3,
      description: 'Short intro paragraph shown below the title.',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Alt text' }],
    }),
    defineField({
      name: 'picks',
      title: 'Picks',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'product',
              title: 'Product',
              type: 'reference',
              to: [{ type: 'product' }],
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'award',
              title: 'Award / Label',
              type: 'string',
              description: 'e.g. "Editor\'s Choice", "Best Value", "Runner-Up"',
            },
            {
              name: 'pickSummary',
              title: 'Why We Picked It',
              type: 'text',
              rows: 2,
            },
            {
              name: 'rank',
              title: 'Rank',
              type: 'number',
            },
          ],
          preview: {
            select: { title: 'product.name', subtitle: 'award' },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(3),
    }),
    defineField({
      name: 'body',
      title: 'Full Content',
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
    select: { title: 'title', media: 'coverImage' },
  },
});
