import { toHTML } from '@portabletext/to-html';
import { urlForImage } from './sanity';

type PortableTextBlock = {
  _type: string;
  _key?: string;
  style?: string;
  children?: Array<{ _type: string; text?: string; marks?: string[] }>;
  markDefs?: Array<{ _key: string; _type: string; href?: string; blank?: boolean; nofollow?: boolean }>;
  asset?: { _ref: string };
  alt?: string;
  caption?: string;
};

export function portableTextToHtml(blocks: PortableTextBlock[]): string {
  if (!blocks || blocks.length === 0) return '';

  return toHTML(blocks, {
    components: {
      types: {
        image: ({ value }) => {
          if (!value?.asset) return '';
          const imgUrl = urlForImage(value).width(1200).auto('format').url();
          const alt = value.alt || '';
          const caption = value.caption || '';
          return `<figure class="pt-image">
            <img src="${imgUrl}" alt="${alt}" loading="lazy" decoding="async" />
            ${caption ? `<figcaption>${caption}</figcaption>` : ''}
          </figure>`;
        },
      },
      marks: {
        link: ({ children, value }) => {
          const rel = value?.nofollow ? 'nofollow noopener noreferrer' : 'noopener noreferrer';
          const target = value?.blank ? ' target="_blank"' : '';
          return `<a href="${value?.href || '#'}" rel="${rel}"${target}>${children}</a>`;
        },
      },
    },
  });
}
