import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import schemas from './sanity/schemas/index';

// When embedded in Astro, env vars are exposed via import.meta.env.
// The studio config runs in both Node (build) and browser (runtime) contexts,
// so we fall back to a hardcoded placeholder that you replace here if needed.
const projectId = (import.meta as any)?.env?.PUBLIC_SANITY_PROJECT_ID
  ?? process.env.PUBLIC_SANITY_PROJECT_ID
  ?? 'REPLACE_WITH_YOUR_PROJECT_ID';

const dataset = (import.meta as any)?.env?.PUBLIC_SANITY_DATASET
  ?? process.env.PUBLIC_SANITY_DATASET
  ?? 'production';

export default defineConfig({
  name: 'pheroguide',
  title: 'PheroGuide CMS',

  projectId,
  dataset,

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
