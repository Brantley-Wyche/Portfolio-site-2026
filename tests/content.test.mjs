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

before(async () => {
  server = await createServer({ server: { middlewareMode: true, hmr: false }, appType: 'custom' });
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
