# Orbital Wireframe

**Tech:** pure Canvas 2D, zero dependencies. Own 3D projection (no Three.js), so it works offline and never breaks from a library update.

## What worked
- Batching lines into `Path2D` buckets by brightness (8 levels) per layer keeps glow (`shadowBlur`) cheap enough for 60fps.
- Depth cue plus dimmed "see-through" back faces gives a convincing vector-monitor look. Anything behind Earth ghosts instead of vanishing.
- Ghosting slider (partial clear each frame) is what sells the phosphor persistence.
- HUD numbers use real orbital physics (v = sqrt(GM/r), Kepler period), so changing altitude changes them truthfully; orbit angular speed also follows r^-1.5.
- Satellite brightness lifted above the Earth mesh, otherwise it disappears into the grid when it crosses the globe.

## What didn't (first pass)
- Satellite was tiny and smudgy at 1.2x; raised to 2.1x.
- Initial "Africa" outline was a blocky hexagon; refined coastline vertices and added islands.
- Initial start position put the satellite behind the globe; now starts on the near side.

## Ideas next
- Day/night terminator, ground-track line painted on the surface, multiple satellites, orbit-trail "re-entry" fireball, sound (blips), boot-up typing animation, ?cfg= URL presets.
