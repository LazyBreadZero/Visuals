# Concrete Tide (10s)

**Brief (from owner, via another LLM):** rigid terminal grid -> fluid organic waves -> merge. Eco-Brutalism meets Terminal Architecture. Procedural only, exactly 10s, concise.

## Design
- Palette: concrete #c9c6bc, ink #11130f, bone #ece8dc, deep sea #0f5a5e/#041417, moss #6f8a4e (scan highlight), safety orange #ff4a1c (the human: diver + rider + progress).
- One idea does the merging: the **waterline is a wave function that splits the screen into two worlds**. Everything is clipped/coloured by which side of the wave it is on, so the grid, glyphs and text literally flip from ink-on-concrete to bone-on-sea as the wave passes. Columns stay rigid, rows bend.
- Story timeline: 0-3s structure + terminal typing; 3.2-5.7s backflip off the cliff (9 ghost frames = chronophotography); 5.7s splash (rings, droplets, radial ripple feeds back into the surface); 6.7-10s prone foil rider rides the swell; tide rises as the grid melts; final terminal line `Merge made. rigid + fluid.`
- Timing: elapsed time from rAF timestamps, stops at exactly 10.000s (measured: 10000 ms, ~60fps), holds last frame, click/space replays.

## What worked
- Cached glyph sprites (drawImage) instead of fillText: ~700 glyphs/frame stays smooth.
- Cliff formwork lines + tie holes sell "brutalism" at almost zero code.
- Deterministic hash instead of Math.random: identical every run.

## Fixed during build
- Foil rider was too small (scaled 1.55x) and collided with the terminal when the tide rose (lowered final tide, lowered lift).
- On phones the terminal covered the phase label (terminal drops below it on narrow screens).

## Ideas next
- Sound-free "rain" of code during the dive; add a second rider; wave amplitude reacts to cursor; export as 1080x1920 for Stories; longer 30s cut with chapters.
