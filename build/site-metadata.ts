import type { HtmlTagDescriptor } from 'vite';
import { site } from '../src/data/site.ts';

export function siteMetadata(publicSiteUrl = ''): HtmlTagDescriptor[] {
  let canonical: string | undefined;
  if (publicSiteUrl.trim()) {
    let url: URL;
    try { url = new URL(publicSiteUrl.trim()); }
    catch { throw new Error('VITE_SITE_URL must be a full site origin, such as https://example.com.'); }
    if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password || url.pathname !== '/' || url.search || url.hash) {
      throw new Error('VITE_SITE_URL must be an HTTP(S) origin without a path, credentials, query, or hash.');
    }
    canonical = url.href;
  }

  const title = `${site.name} — ${site.role}`;
  const text = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    jobTitle: site.role,
    email: `mailto:${site.email}`,
    ...(canonical ? { url: canonical } : {}),
    address: { '@type': 'PostalAddress', addressLocality: site.locality, addressRegion: site.region },
  };

  const tags: HtmlTagDescriptor[] = [
    { tag: 'title', children: text(title) },
    { tag: 'meta', attrs: { name: 'description', content: site.description } },
    { tag: 'meta', attrs: { name: 'author', content: site.name } },
    { tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
    { tag: 'meta', attrs: { property: 'og:title', content: title } },
    { tag: 'meta', attrs: { property: 'og:description', content: site.description } },
    { tag: 'meta', attrs: { name: 'twitter:card', content: canonical ? 'summary_large_image' : 'summary' } },
    { tag: 'script', attrs: { type: 'application/ld+json' }, children: JSON.stringify(person).replace(/</g, '\\u003c') },
  ];
  if (canonical) {
    tags.push(
      { tag: 'link', attrs: { rel: 'canonical', href: canonical } },
      { tag: 'meta', attrs: { property: 'og:url', content: canonical } },
      { tag: 'meta', attrs: { property: 'og:image', content: new URL('og-image.png', canonical).href } },
      { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
      { tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
      { tag: 'meta', attrs: { property: 'og:image:alt', content: `${site.name}, ${site.role} — notebook portfolio` } },
    );
  }
  return tags.map((tag) => ({ ...tag, injectTo: 'head' }));
}
