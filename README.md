# Visuals

A studio for visuals made with **code**, not image generators: animations, interactive pieces, generative art, 3D, shaders, data art. Built to be worked on with Claude Code.

```bash
node scripts/shot.js templates/threejs/index.html --frames 2   # render + console errors
node scripts/record.js works/my-piece/index.html --secs 6      # MP4 + GIF preview
node scripts/gallery.js                                        # rebuild index.html gallery
python3 -m http.server 8000                                    # browse locally
```

Start with [docs/playbook.md](docs/playbook.md) (how to prompt, what to try first) and [docs/research.md](docs/research.md) (what's known about what works).
