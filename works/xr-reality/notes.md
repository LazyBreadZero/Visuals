# The Reality Dial (XR state of the field, Oct 2026)

Single self-contained HTML (no libraries, no images): hand-built SVG charts, inline logo paths, Google Fonts only.

## Concept
- Theme device: a "reality dial" that tracks the story from real (paper) up to virtual (night) and back to real. The ending line ("The destination isn't escape. It's more reality.") resolves the device.
- Two readers, one page: **Street / Boardroom** switch. Street = plain language + diagrams. Boardroom adds the numbers, IDC detail, strategy table and implications. Same page, different depth.
- Colour is semantic: vermilion = glasses/AR, cobalt = headsets/VR.
- Spine: "The headset era is ending. The glasses era has begun." backed by IDC data.

## Research method (pipeline v2, stage 0)
- 8 web searches + 4 page fetches (IDC tracker page, MIXED, The Register, Ghost Howls). Every number on the page is traceable to a source in the footer.
- IMPORTANT: IDC has TWO trackers. Wearables + AR/VR (includes camera/audio glasses): glasses 84.6% of XR in Q2 2026. AR/VR headsets (headsets + display glasses only): XR glasses 46.0%, MR headsets 49.3%, VR 2.8%. The page labels which is which and never mixes them.
- Dropped a "13.6M -> 27.3M smart-glasses" forecast that came from a search summary but was NOT on IDC's page. Only forecast figures actually on the IDC page are used (CAGR 2026-30, shares, +9.5% 2026, +78.6% 2027).
- Items from blogs/aggregators are marked "reported" (Android XR glasses timing, Apple glasses, Steam Frame availability).

## Design notes
- Charts are custom SVG: hero stacked bars, dumbbell (category share), stacked vendor share over 5 quarters, weight-vs-price scatter (log), price ladder, CAGR bars, 2026/2030 share bars, hype curve (labelled illustrative), convergence map.
- Logos: Simple Icons vector paths (CC0 files, trademarks belong to owners). Brands with no mark available (Anduril, EssilorLuxottica, Warby Parker/Gentle Monster, XREAL/RayNeo/Viture/Rokid) are typographic wordmarks.
- Duplicate-ID bug (#walls on both the section and the grid) wiped a whole section; fixed. Lesson: unique IDs.
- Phone: map swaps to a tappable list under 700px because SVG labels became illegible.

## Known weaknesses
- No product photography; device silhouettes would add instant recognition.
- Hype curve is a sketch, not data (labelled).
- Boardroom stance table is judgement, not IDC.
- Weights: Ray-Ban Meta ~50 g and Vision Pro ~600-650 g are approximate and say so.
- Some regional/analyst numbers differ (Counterpoint vs IDC); flagged on the page.
- Verified visually via screenshots, not on real devices.
