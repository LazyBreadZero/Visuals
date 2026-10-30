# Playbook

## Prompt anatomy that works
```
Make a single self-contained HTML file: <what it is>.
Mood/style: <3 specific adjectives + a reference: e.g. "1970s Swiss poster", "bioluminescent deep sea">
Palette: <3-5 hex values, or "choose one bold palette and tell me why">
Motion/interaction: <what moves, what the mouse/touch does>
Tech: <Canvas | Three.js 0.160 | p5 1.9.4 | pure SVG | GLSL>, no frameworks.
Constraints: 60fps, responsive, seeded with ?seed=N, expose 4-6 tunable constants at the top.
Then render it, look at it, and critique and fix before showing me.
```
Vague prompts get the model's average taste. Specificity is taste you supply.

## Iterating
- Say what you *see* ("the centre is muddy, the motion feels floaty"), not what to code.
- One change per turn. Ask for 3 variations (`?seed=`) before polishing one.
- When stuck: "give me 3 radically different directions in 2 lines each", pick, then build.
- Ask Claude to critique first: "what would a professional creative coder change?"

## Ladder: try these in order
1. **2D generative art**: flow field or Truchet tiles, seeded, with sliders (Canvas/p5).
2. **Animated SVG** poster with CSS motion.
3. **Interactive toy**: particles that react to the cursor; add sound-free "juice" (easing, trails).
4. **Fragment shader** piece (GLSL on a full-screen quad): raymarched blobs, domain-warped noise.
5. **Three.js scene** with real lighting, fog, post-processing.
6. **Data art**: a real dataset as something beautiful (D3).
7. **Simulation**: boids, reaction-diffusion, n-body, cloth.
8. **Mini game or app** in one file.

## Model bake-off (find out for yourself)
Use one prompt on several models/tiers, same viewport, screenshot each, rank blind. Save under `works/bakeoff-<topic>/<model>/`. Willison's method: a fixed prompt, scripted screenshots, and a judge model, but your own eyes matter most. Rotate the prompt periodically; fixed public prompts get trained on.

## Pitfalls checklist
Pin versions · test narrow viewport · test after 60s (memory leaks, drift) · cap DPR · no console errors · seeded randomness · don't trust it until you've looked at a render.
