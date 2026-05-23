import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import schemas from './sanity/schemas/index';

export default defineConfig({
  name: 'pheroguide',
  title: 'PheroGuide CMS',

  projectId: process.env.PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.PUBLIC_SANITY_DATASET || 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.divider(),
            S.listItem().title('Products').child(S.documentTypeList('product')),
            S.listItem().title('Categories').child(S.documentTypeList('category')),
            S.listItem().title('Best-Of Lists').child(S.documentTypeList('bestList')),
            S.listItem().title('Comparisons').child(S.documentTypeList('comparison')),
            S.listItem().title('Guides').child(S.documentTypeList('guide')),
            S.divider(),
            S.listItem().title('Authors').child(S.documentTypeList('author')),
            S.listItem().title('FAQs').child(S.documentTypeList('faq')),
            S.listItem().title('User Reviews').child(S.documentTypeList('review')),
            S.listItem().title('Policy Pages').child(S.documentTypeList('policyPage')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemas,
  },
});
