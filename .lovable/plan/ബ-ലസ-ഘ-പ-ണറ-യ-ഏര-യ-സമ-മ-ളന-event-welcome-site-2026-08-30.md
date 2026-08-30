# ബാലസംഘം പിണറായി ഏരിയ സമ്മേളനം — Event Welcome Site

A single-page, fully Malayalam, festival-bright welcome site for the conference on 2026 സെപ്റ്റംബർ 6 at കോട്ടയം അങ്ങാടി. Visual identity taken from the two uploaded posters (golden yellow base, red/purple/blue/orange accents, bold Malayalam display type, bunting, confetti, dove-and-children peace imagery) — recreated as a modern interactive site, not a poster background.

## Sections (in order)

1. **Navigation** — minimal sticky bar, Malayalam links, hamburger sheet on mobile.
2. **Hero** — full-screen golden field, bunting + floating shapes, three-line display headline, date + place, welcome line, primary CTA "സമ്മേളനത്തിലേക്ക് സ്വാഗതം" and secondary "പരിപാടികൾ കാണാം". Generated illustration of joyful children celebrating.
3. **Countdown** — "സമ്മേളനത്തിന് ഇനി", live ticking days/hours/minutes/seconds with Malayalam labels; compact 2x2 grid on mobile.
4. **Welcome intro** — "സ്നേഹപൂർവ്വം സ്വാഗതം", short paragraphs + colorful illustration.
5. **Core message** — oversized type "കുട്ടികളുടെ സ്വപ്നങ്ങൾക്ക് ചിറകേകാം" with small supporting pillars (സൗഹൃദം, സമത്വം, സമാധാനം, സർഗാത്മകത, പഠനം, സ്വപ്നങ്ങൾ).
6. **Event details** — three colorful cards: date, venue, organiser.
7. **Programs** — "സമ്മേളന വിശേഷങ്ങൾ", 5 playful cards with hover animation, no invented schedules.
8. **Peace & unity** — dove, olive branch, two children, skyline silhouette; "സമാധാനത്തിനും സൗഹൃദത്തിനും ഒരുമിച്ച്".
9. **Gallery** — "ഓർമ്മകളിലേക്ക്", masonry layout, lazy-loaded images, hover zoom, easily swappable image array.
10. **Location** — "കോട്ടയം അങ്ങാടി" card, map placeholder panel, details, "വഴികാട്ടി" button (opens Google Maps search for the place name, no invented address).
11. **Final CTA** — bright yellow/orange band, "നമ്മൾ ഒരുമിച്ച് ആഘോഷിക്കാം!", button "സമ്മേളനത്തിൽ കാണാം", confetti decor.
12. **Footer** — event name, date · venue. No social links (none provided).

## Visuals to generate

- Hero: illustrated group of joyful children, raised hands, colorful clothing, warm poster style.
- Intro: festive children illustration in the second poster's style.
- Peace: white dove with olive branch above two child silhouettes, blue sky circle, ruined-skyline silhouette.
- Gallery: 5–6 placeholder festive event illustrations.

Confetti, bunting, stars and paper-cut shapes are drawn in CSS/SVG so they animate cheaply.

## Technical notes

- New components under `src/components/event/*`; `src/routes/index.tsx` becomes the page (placeholder removed).
- Design tokens (festival yellow, red, purple, blue, orange, cream, green) added to `src/styles.css` `:root` + `@theme inline` in oklch — no hardcoded color utilities in components.
- Malayalam fonts loaded via `<link>` in `src/routes/__root.tsx` head: Anek Malayalam (display) + Noto Sans Malayalam (body), registered as `--font-display` / `--font-body`.
- `lang="ml"` on `<html>` in the root shell; route `head()` sets the Malayalam title, description, og/twitter tags, canonical, and Event JSON-LD.
- Countdown uses one `setInterval` in a small hook, cleaned up on unmount, hydration-safe (starts after mount).
- Animations: CSS keyframes + IntersectionObserver scroll reveal with `prefers-reduced-motion` respected; no animation library added.
- Semantic landmarks, single H1, keyboard-focusable nav/buttons, alt text on every image, `loading="lazy"` on gallery.
