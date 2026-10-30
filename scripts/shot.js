#!/usr/bin/env node
// Render a local HTML file in headless Chromium and save screenshots.
// Usage: node scripts/shot.js <file.html> [--out dir] [--w 1280] [--h 800] [--wait 1500] [--frames 1] [--interval 1000]
// Multiple frames let you check that animations actually move. Console errors are printed.
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const args = process.argv.slice(2);
const file = args.find((a) => !a.startsWith('--') && !/^\d+$/.test(a));
const opt = (name, def) => {
  const i = args.indexOf('--' + name);
  return i >= 0 ? args[i + 1] : def;
};
if (!file) {
  console.error('usage: node scripts/shot.js <file.html> [--out dir] [--w N] [--h N] [--wait ms] [--frames N] [--interval ms]');
  process.exit(1);
}
const out = opt('out', path.join(path.dirname(file), '.shots'));
const w = +opt('w', 1280), h = +opt('h', 800);
const wait = +opt('wait', 1500), frames = +opt('frames', 1), interval = +opt('interval', 1000);

(async () => {
  fs.mkdirSync(out, { recursive: true });
  // --use-gl=swiftshader lets WebGL work in headless containers without a GPU
  const browser = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await browser.newPage({ viewport: { width: w, height: h } });
  const problems = [];
  page.on('console', (m) => ['error', 'warning'].includes(m.type()) && problems.push(`[${m.type()}] ${m.text()}`));
  page.on('pageerror', (e) => problems.push(`[pageerror] ${e.message}`));
  page.on('requestfailed', (r) => problems.push(`[requestfailed] ${r.url()}`));
  await page.goto('file://' + path.resolve(file));
  await page.waitForTimeout(wait);
  for (let i = 0; i < frames; i++) {
    const p = path.join(out, `frame-${String(i).padStart(2, '0')}.png`);
    await page.screenshot({ path: p });
    console.log('saved', p);
    if (i < frames - 1) await page.waitForTimeout(interval);
  }
  console.log(problems.length ? 'PROBLEMS:\n' + problems.join('\n') : 'no console errors');
  await browser.close();
})();
