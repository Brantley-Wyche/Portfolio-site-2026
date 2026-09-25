import assert from 'node:assert/strict';
import { after, before, test } from 'node:test';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createServer } from 'vite';

let server;
let Projects;
let Hero;
let projects;
let stats;
let siteMetadata;
let Contact;
let site;

before(async () => {
  server = await createServer({ server: { middlewareMode: true, hmr: false }, appType: 'custom' });
  ({ Contact } = await server.ssrLoadModule('/src/sections/Contact.tsx'));
  ({ site } = await server.ssrLoadModule('/src/data/site.ts'));
  ({ Projects } = await server.ssrLoadModule('/src/sections/projects/Projects.tsx'));
  ({ Hero } = await server.ssrLoadModule('/src/sections/Hero.tsx'));
  ({ projects } = await server.ssrLoadModule('/src/data/projects.ts'));
  ({ stats } = await server.ssrLoadModule('/src/data/stats.ts'));
  ({ siteMetadata } = await server.ssrLoadModule('/build/site-metadata.ts'));
});

after(async () => { await server?.close(); });

test('production metadata uses the configured origin for sharing and canonical links', () => {
  const tags = siteMetadata('https://portfolio.example');
  assert.equal(tags.find((tag) => tag.attrs?.rel === 'canonical')?.attrs.href, 'https://portfolio.example/');
  assert.equal(tags.find((tag) => tag.attrs?.property === 'og:image')?.attrs.content, 'https://portfolio.example/og-image.png');
  const person = JSON.parse(tags.find((tag) => tag.attrs?.type === 'application/ld+json').children);
  assert.equal(person.url, 'https://portfolio.example/');
});

test('local metadata does not invent a public origin or emit a relative sharing image', () => {
  const tags = siteMetadata();
  assert.equal(tags.some((tag) => tag.attrs?.rel === 'canonical' || tag.attrs?.property === 'og:image'), false);
  assert.equal(tags.find((tag) => tag.attrs?.name === 'twitter:card')?.attrs.content, 'summary');
});

test('invalid deployment origins fail with actionable configuration errors', () => {
  for (const url of ['portfolio.example', 'javascript:alert(1)', 'https://example.com/subpath', 'https://user:pass@example.com', 'https://example.com/?q=test']) {
    assert.throws(() => siteMetadata(url), /VITE_SITE_URL must be/);
  }
});

function withItems(collection, items, run) {
  const original = [...collection];
  collection.splice(0, collection.length, ...items);
  try { run(); } finally { collection.splice(0, collection.length, ...original); }
}

test('an empty project collection cannot crash the portfolio', () => {
  withItems(projects, [], () => {
    const html = renderToStaticMarkup(createElement(Projects));
    assert.match(html, /id="projects"/);
    assert.match(html, /Case studies/);
  });
});

test('reordered statistics keep the years value paired with the years label', () => {
  withItems(stats, [stats[1], stats[0], stats[2]], () => {
    const html = renderToStaticMarkup(createElement(Hero));
    assert.match(html, /<dt[^>]*>5\+<\/dt>\s*<dd[^>]*>Years building production frontends<\/dd>/);
    assert.doesNotMatch(html, /5\+ teams/);
  });
});

test('a single project without a featured flag remains visible', () => {
  withItems(projects, [{ id: 'solo', title: 'Solo project', visualKind: 'interface' }], () => {
    const html = renderToStaticMarkup(createElement(Projects));
    assert.match(html, /<h3[^>]*>Solo project<\/h3>/);
  });
});

test('an empty optional tag list does not display a stray zero', () => {
  withItems(projects, [{ id: 'no-tags', title: 'No tags', visualKind: 'interface', tags: [] }], () => {
    const html = renderToStaticMarkup(createElement(Projects));
    assert.doesNotMatch(html, />\s*0\s*</);
  });
});

test('a completed project exposes its supplied details and safe external links', () => {
  withItems(projects, [{ id: 'finished', title: 'A & B', visualKind: 'workflow', description: 'A real description.', role: 'Engineer', tags: ['TypeScript'], repoUrl: 'https://example.com/source', liveUrl: 'https://example.com/demo' }], () => {
    const html = renderToStaticMarkup(createElement(Projects));
    assert.match(html, /A &amp; B/);
    assert.match(html, /A real description\./);
    assert.match(html, /Engineer/);
    assert.match(html, /TypeScript/);
    assert.match(html, /href="https:\/\/example.com\/source"/);
    assert.match(html, /href="https:\/\/example.com\/demo"/);
    assert.match(html, /aria-label="Visit A &amp; B/);
    assert.equal((html.match(/rel="noreferrer noopener"/g) ?? []).length, 2);
  });
});

test('the email entry has a named copy button, an announcer, and a hint hidden from assistive technology', () => {
  const html = renderToStaticMarkup(createElement(Contact));
  assert.ok(html.includes(`href="mailto:${site.email}"`));
  assert.match(html, /<button[^>]*aria-label="Copy email address"[^>]*>/);
  assert.match(html, /role="status"/);
  assert.match(html, /<span aria-hidden="true" class="margin-note contact-hint">best way to reach me/);
  assert.doesNotMatch(html, /Send an email/);
});

test('a placeholder-only project section is marked so print can leave it out', () => {
  assert.match(renderToStaticMarkup(createElement(Projects)), /class="section-shell projects--placeholder"/);
  withItems(projects, [{ id: 'finished', title: 'Finished', visualKind: 'interface', description: 'Real work.' }], () => {
    assert.doesNotMatch(renderToStaticMarkup(createElement(Projects)), /projects--placeholder/);
  });
});
