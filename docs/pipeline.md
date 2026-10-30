# Production pipeline v2 (written after Between Summits)

## Why this exists
Between Summits had strong structure (story, timing, captions, sound) and weak individual assets (mountains, posts, water). Cause: each asset was a ~20-line procedural sketch, reviewed only against my own previous frame, with one revision pass. Structure is a verbal/reasoning task, which I do well blind. Surface quality is a perceptual feedback loop, which needs real references, many iterations and a separate critic.

## Principles
1. Direction before pixels. Art bible and shot list come first.
2. Every hero asset is its own task with its own references and its own quality bar.
3. Compare against REAL references side by side, never against the previous attempt. "Better than before" is not the bar.
4. The author does not grade their own work. A separate critic, told to be harsh, scores against the rubric.
5. Prefer real material over invented math: CC0 photos/HDRIs/textures, proven libraries (three.js Water/Sky, etc.).
6. Choose the style deliberately. Cheap-tool realism reads as "MS Paint". Deliberate stylisation (paper-cut, painterly, risograph, flat vector) can look expensive with procedural code. Ask the owner which.
7. Minimum 4 iterations per hero asset. Stop only when the rubric passes, not when it is "good for a first pass".

## Stages
0. ART BIBLE (docs in the work folder): 3-6 named real-world references per scene (film stills, photographers, paintings), palette extracted from them, 5 rules ("never X"), the one hero image per scene. FETCH and LOOK at reference images.
1. SHOT LIST: per scene purpose, camera move, light direction, 3 must-have details, duration, text/sound cues.
2. BLOCKOUT: cheap whole-film pass to lock timing/story (this is what v1 of every film is).
3. ASSET PASSES: one task per asset (sub-agents in parallel when the owner agrees). Each gets: references, spec, rubric, iteration budget, output as a drop-in function/file.
4. INTEGRATION: shared grade/tone-map, atmospheric haze, grain, camera drift, parallax, transitions.
5. CRITIQUE: fresh critic compares contact sheet to references, scores, lists 5 concrete diffs. Fix. Repeat.
6. QA: frame strips every 1s, frame-diff to confirm motion, loudness curve for audio, phone + desktop, then ship + public link.

## Rubric (score 1-5, pass = all >= 4)
silhouette & shape language | value structure (3-4 clear planes) | colour harmony / limited palette | atmospheric perspective | light direction consistent + rim/specular | texture scale variation (no uniform noise) | edges (intentional hard/soft, no aliasing) | motion (easing, parallax, secondary motion) | cross-scene cohesion | "MS Paint test": would a stranger assume a skilled person made this?

## Asset sources (reachable from the session, checked 2026-10-30)
- Poly Haven https://polyhaven.com (CC0 HDRIs, textures, models; API https://api.polyhaven.com/assets?t=hdris|textures|models)
- ambientCG https://ambientcg.com (CC0 PBR textures)
- Unsplash images (free licence), Freesound (licence per sound, check), three.js examples (water normals, sky shader), jsDelivr/cdnjs libraries
- NOT reachable: NASA images (403). Wikimedia redirects (301), may need -L.
- Record every asset in works/<slug>/CREDITS.md with source URL + licence. Prefer CC0.
- Artifact (claude.ai) CSP blocks external images: embed as data: URI or publish as files. GitHub Pages serves repo files fine. Compress (webp/jpg, <= ~1.5 MB each).

## Steering the model (for the owner)
Taste activates on specific cues. Name references ("lit like a Deakins dusk", "Ghibli background painting", "Alto's Odyssey layers"), paste images you love, ask for critique BEFORE building, and say "compare to the reference, not to last time".
