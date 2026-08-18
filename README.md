# Kessler Syndrome — AP Capstone Site

## Structure
```
index.html       — page shell, all sections
css/styles.css    — design tokens + layout
js/main.js        — scroll reveal + simulation mount stub
assets/           — images, video, etc. go here
```

## Deploying free on GitHub Pages
1. Create a free GitHub account if you don't have one.
2. Create a new repository (e.g. `kessler-syndrome`).
3. Upload this folder's contents to the repo (via github.com's "Add file → Upload files," or `git push` if you're comfortable with git).
4. In the repo, go to **Settings → Pages**.
5. Under "Build and deployment," set Source to **Deploy from a branch**, branch `main`, folder `/ (root)`.
6. Save. Your site will be live at `https://<your-username>.github.io/kessler-syndrome/` within a minute or two.
7. Every time you upload new changes, the live site updates automatically.

## Next steps (in order)
- Swap placeholder copy for final content per the outline doc
- Replace `.readout-diagram` placeholder with a real cascade illustration
- Embed the documentary in `.video-frame` once it's edited
- Build the three.js simulation into `#sim-canvas-mount` (see comment in main.js)
