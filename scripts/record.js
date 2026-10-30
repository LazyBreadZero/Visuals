#!/usr/bin/env node
// Record an animated HTML file to MP4 + GIF (via Playwright video + ffmpeg).
// Usage: node scripts/record.js <file.html> [--secs 6] [--w 960] [--h 600] [--out works/slug/preview]
const { chromium } = require('playwright');
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const args = process.argv.slice(2);
const file = args.find((a) => !a.startsWith('--') && !/^\d+$/.test(a));
const opt = (n, d) => { const i = args.indexOf('--' + n); return i >= 0 ? args[i + 1] : d; };
if (!file) { console.error('usage: node scripts/record.js <file.html> [--secs N] [--w N] [--h N] [--out base]'); process.exit(1); }
const secs = +opt('secs', 6), w = +opt('w', 960), h = +opt('h', 600);
const base = opt('out', path.join(path.dirname(file), 'preview'));
const tmp = path.join(path.dirname(base), '.rec');

(async () => {
  fs.rmSync(tmp, { recursive: true, force: true });
  const browser = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, recordVideo: { dir: tmp, size: { width: w, height: h } } });
  const page = await ctx.newPage();
  await page.goto('file://' + path.resolve(file));
  await page.waitForTimeout(secs * 1000);
  await ctx.close(); await browser.close();
  const webm = fs.readdirSync(tmp).find((f) => f.endsWith('.webm'));
  const src = path.join(tmp, webm);
  execSync(`ffmpeg -y -loglevel error -i "${src}" -c:v libx264 -pix_fmt yuv420p "${base}.mp4"`);
  execSync(`ffmpeg -y -loglevel error -i "${src}" -vf "fps=15,scale=${Math.min(w, 720)}:-1:flags=lanczos" "${base}.gif"`);
  fs.rmSync(tmp, { recursive: true, force: true });
  console.log(`wrote ${base}.mp4 and ${base}.gif`);
})();
