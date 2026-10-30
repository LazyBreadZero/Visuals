# Visuals: code-made visual artifacts

This repo is a studio for visuals made *with code*: HTML/CSS/JS, Canvas, SVG, WebGL/Three.js, GLSL shaders, p5.js, D3, Python (matplotlib, etc.). Not AI image generators. The owner is new to this and wants to learn what is possible, so explain choices briefly and say what to try next.

## Layout
- `works/<slug>/index.html`: one finished piece per folder. Self-contained single file. Optional `meta.json` {title, tags, model, prompt}, `preview.png|gif|mp4`, `notes.md` (what worked and what didn't).
- `templates/`: verified starters (canvas2d, threejs, p5). Copy one into `works/<slug>/`.
- `scripts/shot.js`: screenshot a page and print console errors. `scripts/record.js`: MP4+GIF. `scripts/gallery.js`: rebuild root `index.html`.
- `docs/research.md` (what we know, with confidence levels), `docs/playbook.md` (prompting and workflow).
- `.scratch/` is gitignored; use it for throwaway renders.

## The loop (do this every time, no exceptions)
1. Before coding, write 2-3 lines: subject, mood, palette (specific hex values), motion idea, interaction. Make one bold choice instead of hedging.
2. Write one self-contained `index.html`. Pin library versions on CDNs (e.g. `three@0.160.0`, `p5@1.9.4`).
3. **Render and look.** Run `node scripts/shot.js works/<slug>/index.html --frames 3` and Read the PNGs. Fix console errors. For animation, compare frames to confirm things actually move.
4. Critique your own output honestly against the brief (composition, contrast, scale, polish, what looks "AI default"), then revise. Do at least one revision pass before presenting. Never present a render you have not looked at.
5. Check a narrow viewport too (`--w 390 --h 800`).
6. Save `preview.png` (or run `record.js` for animation), update `meta.json`, run `node scripts/gallery.js`.

## Quality rules
- Avoid generic AI-default aesthetics: purple-to-blue gradients on dark, Inter/Roboto/Arial, evenly weighted timid palettes, centred-everything layouts. Choose a deliberate palette via CSS variables, characterful type, atmosphere (texture, grain, gradient depth, lighting), and purposeful motion.
- Seed all randomness (`?seed=N`) so pieces are reproducible. Expose tunable parameters where it helps (constants at top, or simple sliders).
- Respect `prefers-reduced-motion`; cap `devicePixelRatio` at 2; handle resize; keep 60fps on a laptop.
- WebGL/Three.js: stick to documented APIs for the pinned version. Headless rendering uses software GL, so slow frames in screenshots do not mean slow on a real GPU.
- No external images or fonts that can break offline, unless it is a Google Fonts stylesheet or a pinned CDN library.
- Iterate one feature at a time. Do not batch large changes.

## Skills available in this environment (use when relevant)
`algorithmic-art` (p5.js, seeded, parameter UI), `canvas-design` (static PNG/PDF art), `frontend-design`/`artifact-design` (anti-generic UI), `artifact-diagramming`, `dataviz`. The Artifact tool can publish a page to a private claude.ai link for easy sharing.

## Git (owner has delegated ALL of this; never ask them to do git steps)
- The owner is not technical with GitHub and wants zero friction. Claude handles branches, commits, pushes, PRs and merging without asking.
- Per finished piece or meaningful change: branch `work/<slug>`, commit, push, open PR, then **squash-merge it to `main` yourself** (`gh api -X PUT repos/LazyBreadZero/Visuals/pulls/<n>/merge -f merge_method=squash`; GraphQL is blocked, use REST). Keep `main` always working.
- Start of every session: `git pull origin main`, then read `docs/log.md` and the relevant `works/*/notes.md`. End of every session: append a short entry to `docs/log.md`.
- Never commit secrets. Keep `.scratch/` out of git.
- Tell the owner in plain language what you did, not git jargon.

## Showing work to the owner
**Every iteration must end with a working PUBLIC link the owner can open and share** (they asked for this explicitly). After merging to `main`, verify the link returns 200 before giving it. Preferred: GitHub Pages `https://lazybreadzero.github.io/Visuals/works/<slug>/` (check `curl -sI` for 200; the Pages API is blocked from sessions so the owner must enable it once). Fallback: `https://htmlpreview.github.io/?https://github.com/LazyBreadZero/Visuals/blob/main/works/<slug>/index.html`. Also publish the private Artifact for convenience. Give links as plain URLs on their own lines.

After finishing a piece, publish it with the Artifact tool (strip the `<!doctype>/<html>/<head>/<body>` wrapper tags from a copy; keep `<title>`, fonts link, `<style>`, content, scripts) so they get a link they can open and share. Keep the repo file as the source of truth.
