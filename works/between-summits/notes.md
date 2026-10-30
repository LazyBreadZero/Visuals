# Between Summits (2:28, six scenes, WebGL2)

## Why this exists
First film (Concrete Tide) was rejected as shallow: built from a one-paragraph prompt, literal pictograms of hobbies, 10s of cramped motion. This one is built from the owner's own written inner material (pasted from another LLM's profile) and takes its thesis from it:
**meaning shows up in vivid moments (summit, launch, wave) but has to survive the long unglamorous middle.** Fear of the middle = fear of purposelessness. Contradictions used: wants calm / chases the edge; rootless / wants roots.

## Privacy choice
Link is public, so NO names, employer, job search, unemployment fear. Only feelings and images. The owner's own phrase "make the world feel why this matters" is the final caption.

## Scenes (start s)
I NOISE 0 - streaming feed of light that decays to a single horizon line. II STILLNESS 20 - blue-hour lake, moon, ripple. III SUMMIT 44 - sea of cloud, sunrise, peaks. IV THE MIDDLE 66 - grey road, posts, footfall bob. V ROOTS 92 - threads of light drawn to one glow. VI WHY IT MATTERS 114 - the SAME road as IV, now lit by lanterns at dawn (same shader, `warm` and `lamps` params).

## Craft notes
- One fragment shader, scenes crossfaded by uniform weights; only active scenes are evaluated. Adaptive resolution keeps it smooth on weak GPUs.
- Soft highlight shoulder `1-exp(-1.55c)` before contrast. My first contrast curve `c*c*(3-2c)` went NEGATIVE above 1.0 and turned every bright light (sun, lamps, glow) blue. Lesson: always tone-map HDR-ish shader output.
- Mountains looked like pyramids until (a) ridge noise amplitude was raised ~3x, (b) two overlapping masses, (c) lighting by silhouette slope instead of a fixed x split.
- `smoothstep` with reversed edges is undefined in GLSL; own `sm()` is used everywhere. `half` is a reserved word.
- Score is generative WebAudio scheduled up-front on the audio clock; film time follows the audio clock so picture and sound cannot drift. Footstep thumps in IV are at 1.1 Hz, the same as the camera bob.
- `?t=60` jumps to a moment (silent). `film.seek(t)` renders one exact frame (used for QA).

## Not verified (be honest)
- I cannot hear the score. It runs without errors and is structurally sound (consonant chords, long reverb), but taste is unchecked.
- Headless software GL is too slow to watch in real time, so pacing was judged from stills at many timestamps, not from watching it play.

## Ideas next
Stronger scene I (it reads as coloured bars more than "noise"); a human trace (single small figure walking the road); a hand-shot feel (slow camera drift in II and III); timing/caption pass based on owner feedback.
