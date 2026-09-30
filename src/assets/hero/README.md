Drop the hero banner background images in this folder.

They are picked up automatically by `src/pages/Home.jsx` (via `import.meta.glob`)
in filename order — one per carousel slide, so name them `01-…`, `02-…`, etc.
Supported: `.webp`, `.avif`, `.jpg`, `.jpeg`, `.png`.

Any slide without a matching image falls back to the navy gradient, so the
carousel keeps working while this folder is empty.

Recommended: ~2000×1000, focal point on the right half (the left third sits
under the navy scrim behind the headline).
