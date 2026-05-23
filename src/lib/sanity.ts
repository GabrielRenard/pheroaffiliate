import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION ?? '2024-01-01',
  useCdn: import.meta.env.PROD ?? false,
});

const builder = imageUrlBuilder(sanityClient);

export function urlForImage(source: SanityImageSource) {
  return builder.image(source);
}

/** Typed GROQ fetch */
export async function sanityFetch<T = unknown>(
  query: string,
  params: Record<string, unknown> = {},
): Promise<T> {
  return sanityClient.fetch<T>(query, params);
}
