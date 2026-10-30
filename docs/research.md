# Research notes (as of 2026-10-30)

Honest summary: the public evidence is mostly practitioner blogs, skill repos and one well-known benchmark. Much is vendor-flavoured. Confidence is marked. Treat "which model is best" as a question to answer yourself with a bake-off (see playbook), not something to take from this page.

## What the field actually is
Claude (and peers) cannot output raster images. It writes code that renders visuals in a browser or Python: SVG, HTML/CSS, Canvas, p5.js, Three.js/WebGL, GLSL, D3, Remotion (video). That is why results are crisp, interactive, editable and reproducible. **Confidence: high.**

## What practitioners report works
- **One self-contained HTML file** with inline CSS/JS: trivially saved, shared, opened. Medium-high.
- **Concrete briefs**: subject, camera, lighting, mood, interaction, viewport size, plus constraints (pinned library version, "no frameworks", "no CDN"). Medium-high.
- **One feature per iteration**; batching many asks degrades all of them. Medium.
- **Paste console errors verbatim.** Medium.
- **Tunable parameters + seeded randomness** so you can explore variations deliberately. Anthropic's example `algorithmic-art` skill is built on this: write an aesthetic philosophy first, then a seeded p5.js sketch with sliders and PNG export. Medium-high (documented skill).
- **Close the loop with a screenshot.** Let the model render its own output, look, and fix. Skills for p5 mention capture quirks (disable friendly errors; use deterministic frame capture for video). I found *no authoritative source* documenting this loop, but it is the single biggest lever in my experience and it is built into this repo. Treat as my recommendation, not established consensus.
- **Steer away from "on-distribution" defaults.** Anthropic's frontend-aesthetics cookbook and frontend-design skill target the generic look (overused fonts, purple gradients, predictable layouts) by demanding distinctive typography, committed palettes, motion and atmospheric backgrounds. Source existence confirmed; the exact prompt wording I did not verify from the primary notebook.

## What goes wrong
- Three.js code that looks plausible but doesn't render (WebGL setup rules, version drift, API guessed from memory). Mitigations: pin version, screenshot-verify, community Three.js skill files (reported to help; unverified by me).
- Works on desktop, black rectangle on phone. Test a narrow viewport and cap pixel ratio.
- Unpinned CDNs breaking later.
- Generic look when the prompt is generic.

## Models
- Simon Willison's "pelican riding a bicycle" SVG test is the best-known public probe. Between late 2024 and mid-2025 results went from unrecognisable shapes to genuinely good; in his mid-2025 Elo ranking Gemini 2.5 Pro led, with o3 and Claude 4 Sonnet close behind. Later he reported Gemini 3 Deep Think producing his best yet and published newer comparisons. **Confidence: medium, and dated.**
- His own caveats matter: the benchmark's correlation with overall model quality has weakened, and a public benchmark gets trained on. Don't pick a model from it.
- I excluded several search hits making specific claims (e.g. unreleased-sounding model names) that I couldn't verify.
- **Takeaway:** the strongest current models from several labs are all capable. Differences show up in taste, 3D/shader correctness and instruction-following. Run your own comparison.

## Sources
- Willison: [Pelicans on a bicycle](https://simonwillison.net/2024/Oct/25/pelicans-on-a-bicycle/), [Six months in LLMs](https://simonwillison.net/2025/Jun/6/six-months-in-llms/), [simonw/pelican-bicycle](https://github.com/simonw/pelican-bicycle)
- [Vibe coding Three.js: models, prompts & workflow](https://threejsresources.com/ai/vibe-coding)
- [Claude HTML/CSS visuals vs Claude Design](https://bigguyonstuff.com/claude-html-css-visuals/)
- [Anthropic frontend-design skill](https://skills.sh/anthropics/skills/frontend-design)
- [Anthropic cookbook: prompting for frontend aesthetics](https://github.com/anthropics/claude-cookbooks/blob/main/coding/prompting_for_frontend_aesthetics.ipynb)
- Community generative-art skills: [generative-art-pack](https://github.com/skinnye/generative-art-pack), [genart-skill](https://github.com/camilleroux/genart-skill)
