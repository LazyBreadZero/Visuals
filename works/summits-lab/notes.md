# Summits Lab (pilot of pipeline v2)

Two scenes of Between Summits rebuilt: Stillness (lake) and Summit (peaks above cloud). Silent, ~60s, WebGL2.

## What changed vs the film
- REAL sky photography (Poly Haven CC0 HDRI tonemapped JPG plates, 4096px): kloppenheim_06 (summit), belfast_sunset (lake). Sun position measured from the image (warm-colour blob near the horizon; brightest-pixel detection failed because sunlit clouds outrank the sun).
- Linear-light pipeline: sRGB sky -> linear, ACES filmic, gamma. (The film had no tonemapping and blew highlights blue.)
- Image-based lighting: the terrain is lit by blurred mips of the real sky plate + a hard warm sun with soft shadows.
- Summit: raymarched ridged-noise terrain with 6-step bisection refine (kills terracing), bump detail, slope-driven snow vs rock, surface ice glints, 3 stacked parallax cloud layers with terrain shadows cast on them and soft contact with the mountain base. Sun starts off-frame right for raking light and drifts toward frame.
- Lake: water is a sum of 7-10 directional sine waves with analytic slopes (smooth, physical). Value-noise water produced topographic contour loops. Fresnel mirror, sun glitter from high-exponent specular on detail normals, 3 hazed mountain ranges.
- Bloom pass (4 small blur passes on a bright-pass) for glow/shimmer.

## Process notes (what worked)
- Independent critic agent (cold start, harsh rubric, real references) found what I had grown blind to. Its biggest hit: sun BEHIND the peaks so the visible faces were only sky-lit and looked flat. Moving the sun to the side fixed the whole mountain.
- Five passes, each judged against real photography, not the previous frame.
- Before/after contact sheet (scripts/sheet.py) makes progress honest.

## Known weaknesses (be honest)
- Cloud sea is the weakest element: reads as soft satin/folded cloth rather than cumulus tops. Next: real volumetric raymarch (few steps, powder term) or sample photographic cumulus as billow textures.
- Terrain is a 6-cone ridged heightfield: good rock/snow breakup but no glaciers, no cornices, no couloir detail.
- Lake sun pillar is slightly bar-like.
- Surface ice glints are subtle at 1080p; a star-flare post effect would sell "sparkle" harder.
- Performance unmeasured on a real GPU (headless software GL only). Adaptive resolution lowers render scale if frames exceed 30 ms. Heavy: march 120 steps + 3 cloud layers.
- Silent. Film audio not ported.

## Art references to explore (owner asked for places to browse)
Alto's Odyssey, Sky: Children of the Light, Journey, Ori, Genshin Impact vistas, Studio Ghibli backgrounds (Howl's Moving Castle skies), Firewatch, Monument Valley; ArtStation (search "environment concept art sunset"), Behance, Pinterest, Poly Haven (photographic skies), Unsplash (mountain inversions), Shadertoy (shader art).
