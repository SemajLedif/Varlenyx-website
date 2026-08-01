# VARLENYX / NOVELA — Web Asset Library

Assets separated from the 5 composite style-guide sheets, organized for direct use in website development.

## Folder structure

- **brand/** — Core VARLENYX brand assets
  - `varlenyx-logo-official.jpg` — official full logo (swirl mark + wordmark + tagline) on navy background
  - `varlenyx-logo-transparent.png` — same logo with background removed for use on any color background
  - `hero-images/` — 5 widescreen (16:9) hero images: home, about, novela, technology, governance
  - `section-illustrations/` — 6 section header illustrations: partnerships, careers, resources, contact, future-vision, our-purpose
  - `backgrounds/` — 8 reusable background textures (particle fields, mesh gradient, glass overlay, contour lines, scientific grid, network field, soft aurora)
  - `photography/` — sample lifestyle/office photography tiles
  - `motion-concepts/` — 6 static reference frames for animated background loops (nodes connecting, data flow, pulse, growth, pathway, particle drift)
  - `reference/` — non-cropped style-guide reference panels (color palette, typography, UI elements, file formats, icon sample, brand intro panel) — kept whole since they're documentation, not standalone assets

- **novela-page/** — Assets for the NOVELA product page (hero illustration, capabilities diagram, future-vision graphic, 3 feature photos, 6-image photo gallery)

- **technology-page/** — Assets for the Technology page (3 hero illustrations, 5 supporting photos, 6 "material language" texture swatches, 5 Africa-context photos)

- **about-page/** — Assets for the About page (hero, timeline/tree illustration, philosophy diagram, 4 African-context photos, 4 team photos, 4 "philosophy in action" photos)

- **icon-system/** — Icon reference sheets (full sheet + cropped groups: core category icons, interface/function icons, system-state icons, data-visualization icons, design principles, logo lockup)

## Notes

- These images were AI-generated composite mood boards; crops are as clean as the source composites allow. Some tiles retain small baked-in captions where text was part of the illustration itself rather than a separate label.
- File names describe content for easy reference in code (e.g. `<img src="novela-page/n01-hero-catalyst.png">`).
- The `reference/` and `icon-system/*-icons.png` files are multi-icon/multi-swatch sheets kept intact rather than split into dozens of tiny files — best used as style documentation rather than direct web assets.
