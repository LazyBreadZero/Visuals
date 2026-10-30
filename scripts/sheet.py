#!/usr/bin/env python3
"""Build a labelled contact sheet from images, for side-by-side review (pipeline stage 5).
usage: python3 scripts/sheet.py out.png [--cols 2] [--w 640] img1.png[:label] img2.png[:label] ...
Letterbox bars are cropped automatically."""
import sys
from PIL import Image, ImageDraw
args = sys.argv[1:]
out = args.pop(0); cols = 2; w = 640
while args and args[0].startswith('--'):
    k = args.pop(0)
    if k == '--cols': cols = int(args.pop(0))
    if k == '--w': w = int(args.pop(0))
items = []
for a in args:
    p, _, label = a.partition(':'); items.append((p, label or p.rsplit('/', 1)[-1]))
tiles = []
for p, label in items:
    im = Image.open(p).convert('RGB'); W, H = im.size
    px = im.load(); top = 0
    while top < H // 3 and sum(px[W // 2, top][:3]) < 12: top += 1
    im = im.crop((0, top, W, H - top)); h = int(w * im.size[1] / im.size[0]); im = im.resize((w, h), Image.LANCZOS)
    d = ImageDraw.Draw(im); d.rectangle([0, 0, 8 * len(label) + 10, 16], fill=(0, 0, 0)); d.text((4, 2), label, fill=(255, 255, 255)); tiles.append(im)
rows = (len(tiles) + cols - 1) // cols; th = max(t.size[1] for t in tiles)
sheet = Image.new('RGB', (cols * w + (cols - 1) * 6, rows * th + (rows - 1) * 6), (5, 5, 7))
for i, t in enumerate(tiles): sheet.paste(t, ((i % cols) * (w + 6), (i // cols) * (th + 6)))
sheet.save(out, optimize=True); print('wrote', out, sheet.size)
