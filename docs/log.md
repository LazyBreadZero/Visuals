# Session log (newest first)

Read this first when starting a new chat in this repo. Add an entry at the end of every session.

## 2026-10-30 (night) - Process reset
- Owner loved Between Summits (sound, timing, text) but called individual assets (posts, mountains, water) "MS Paint". Diagnosis in `docs/pipeline.md`: assets were ~20-line procedural sketches, self-reviewed against my own last frame, one revision pass. Fix: art bible, per-asset tasks with real references, separate critic, >=4 iterations, real CC0 assets (Poly Haven/ambientCG reachable), deliberate style choice.
- OPEN DECISION for owner: photoreal composite from real assets vs deliberate stylisation (paper-cut/painterly) vs hybrid.

## 2026-10-30 (evening) - Between Summits (film v2)
- Owner flagged Concrete Tide as shallow/rigid/too fast and asked for a movie: multiple scenes, fancy visuals, no interactivity, length my choice. They flipped on GitHub Pages: public links are now `https://lazybreadzero.github.io/Visuals/works/<slug>/` (verified 200).
- KEY LEARNING: Claude has no memory of the owner's past chats. The first film used only a pasted prompt. Fix = owner pasted an LLM-written profile. Their deep material: attention vs stimulation (calm vs chasing intensity), fear of the unglamorous middle / purposelessness, rootless wanting roots, meaning = "make the world feel why this matters", love of summits/waves/launches. Keep private specifics (partner's name, employer, job search) OUT of public pieces.
- Built `works/between-summits` (2:28, WebGL2, 6 scenes, generative score, captions). Owner has not yet seen/heard it. Ask what moved them least; audio is unverified by me.
- Owner prefers: slow, graceful, layered, cinematic; hates rigid/cluttered/minimalist-fast. Literal pictograms of hobbies read as shallow; use light, space and rhythm.

## 2026-10-30 (later) - Concrete Tide
- Owner brief: 10-second duality animation (cliff diving / pump foiling / backflips vs B2B SaaS / AI terminals), Eco-Brutalism x Terminal Architecture. Built `works/concrete-tide`. Measured exactly 10.000s.
- Owner loved Orbital Wireframe ("huge success").
- **New standing rule from owner: end EVERY iteration with a working public link they can view and share.** GitHub Pages API is blocked by the session proxy, so until the owner flips the one-time Pages switch (Settings > Pages > main / root), use the htmlpreview links in README. Once Pages is on, links are `https://lazybreadzero.github.io/Visuals/works/<slug>/`.
- Owner pastes prompts written by another LLM; treat them as briefs, apply the repo loop, ignore "output only code" format instructions and deliver a built, verified, linked piece.

## 2026-10-30 - Studio setup + first piece
- Built the studio (CLAUDE.md loop, scripts, templates, research, playbook). Merged to `main`.
- **works/satellite-orbit** ("Orbital Wireframe"): retro green wireframe satellite orbiting Earth, Canvas 2D, ~20 controls. Published as a private claude.ai artifact.
- Owner is new to GitHub and delegated ALL git/infra to Claude. Owner only wants to experiment with visuals and prompting via chat.
- Owner's taste so far: retro early-internet, space sci-fi, green phosphor wireframes on black, minimal.
- Open ideas: terminator/day-night, ground track, more satellites, sound, boot sequence, shareable presets. See `works/satellite-orbit/notes.md`.
- The piece has a COPY SETTINGS button: if the owner pastes the JSON, bake it into `DEFAULTS` in the file.
