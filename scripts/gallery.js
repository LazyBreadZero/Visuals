#!/usr/bin/env node
// Build index.html: a gallery of everything in works/. Each work is a folder with index.html,
// optional preview.png/.gif, and optional meta.json {title, tags, prompt, model}.
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const dir = path.join(root, 'works');
const esc = (s = '') => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const works = fs.readdirSync(dir).filter((d) => fs.existsSync(path.join(dir, d, 'index.html'))).map((slug) => {
  const mp = path.join(dir, slug, 'meta.json');
  const meta = fs.existsSync(mp) ? JSON.parse(fs.readFileSync(mp, 'utf8')) : {};
  const prev = ['preview.gif', 'preview.png'].find((f) => fs.existsSync(path.join(dir, slug, f)));
  return { slug, title: meta.title || slug, tags: meta.tags || [], model: meta.model || '', prev };
});
const cards = works.map((w) => `
  <a class="card" href="works/${w.slug}/index.html">
    ${w.prev ? `<img loading="lazy" src="works/${w.slug}/${w.prev}" alt="">` : '<div class="ph"></div>'}
    <h2>${esc(w.title)}</h2>
    <p>${esc(w.tags.join(' · '))}${w.model ? ` — ${esc(w.model)}` : ''}</p>
  </a>`).join('');
fs.writeFileSync(path.join(root, 'index.html'), `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1"><title>Visuals</title>
<style>
:root{--bg:#0e0f12;--fg:#e9e7e2;--mut:#8a8d94;--card:#16181d}
@media(prefers-color-scheme:light){:root{--bg:#f4f2ee;--fg:#1a1b1e;--mut:#6b6e75;--card:#fff}}
body{margin:0;background:var(--bg);color:var(--fg);font:16px/1.5 system-ui,sans-serif;padding:32px 16px}
h1{font-weight:600;letter-spacing:-.02em;max-width:1100px;margin:0 auto 24px}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px;max-width:1100px;margin:auto}
.card{background:var(--card);border-radius:12px;overflow:hidden;color:inherit;text-decoration:none;padding-bottom:12px}
.card img,.ph{width:100%;aspect-ratio:16/10;object-fit:cover;display:block;background:#222}
.card h2{font-size:16px;margin:12px 14px 2px}.card p{margin:0 14px;color:var(--mut);font-size:13px}
</style></head><body><h1>Visuals</h1><div class="grid">${cards || '<p>No works yet.</p>'}</div></body></html>`);
console.log(`gallery: ${works.length} work(s) -> index.html`);
