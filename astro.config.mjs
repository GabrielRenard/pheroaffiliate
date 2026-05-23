import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://pheroguide.com',
  output: 'static',
  integrations: [
    sanity({
      projectId: process.env.PUBLIC_SANITY_PROJECT_ID || 'placeholder',
      dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
      useCdn: true,
      apiVersion: process.env.PUBLIC_SANITY_API_VERSION || '2024-01-01',
      // Embedded Sanity Studio at /studio
      studioBasePath: '/studio',
    }),
    sitemap({
      // Exclude the embedded studio from the sitemap
      filter: (page) => !page.includes('/studio'),
    }),
  ],
});
