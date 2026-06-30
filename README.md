<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets-readme/hero-banner-dark.svg">
  <img alt="Nota Parfum landing page" src="assets-readme/hero-banner.svg" width="100%">
</picture>

<br><br>

[![Astro](https://img.shields.io/badge/ASTRO-5.x-1A1A1A?style=for-the-badge&labelColor=1A1A1A&color=CCFF00)](https://astro.build)
[![Tailwind v4](https://img.shields.io/badge/TAILWIND-V4-1A1A1A?style=for-the-badge&labelColor=1A1A1A&color=CCFF00)](https://tailwindcss.com)
[![Bun](https://img.shields.io/badge/BUN-1.3-1A1A1A?style=for-the-badge&labelColor=1A1A1A&color=CCFF00)](https://bun.sh)
[![Vitest](https://img.shields.io/badge/VITEST-23%2F23-1A1A1A?style=for-the-badge&labelColor=1A1A1A&color=CCFF00)](https://vitest.dev)
[![GitHub Pages](https://img.shields.io/badge/LIVE-GH%20PAGES-1A1A1A?style=for-the-badge&labelColor=1A1A1A&color=CCFF00)](https://hatimhtm.github.io/nota-parfum-landing/)
[![License: MIT](https://img.shields.io/badge/LICENSE-MIT-1A1A1A?style=for-the-badge&labelColor=1A1A1A&color=CCFF00)](LICENSE)

<br>

_A pitch landing page for **<strong>Nota Parfum</strong>** — a **<strong>Fès-based perfume house</strong>** in Morocco that bottles **<strong>24 fragrances inspired by the great names</strong>** and delivers nationwide at **<strong>75&nbsp;MAD per flacon</strong>**. Built as an unsolicited proposal, with their actual product line, prices, reviews and brand voice baked in._

</div>

---

### `/// THE BRIEF`

```
┌────────────────────────────────────────────────────────────────────┐
│  Client     →  Nota Parfum   (@notaperfumes.official)              │
│  Location   →  Fès, Maroc                                          │
│  Catalogue  →  24 fragrances inspired-by (12 femmes · 12 hommes)   │
│  Pricing    →  75 MAD / unit · 149 MAD / 2-pack · 139 MAD / trio   │
│  Channel    →  Instagram-first, WhatsApp ordering, COD nationwide  │
│  Status     →  Pre-launch on web. No site exists.                  │
│  Goal       →  Win the gig back. Outdo the freelancer they hired.  │
└────────────────────────────────────────────────────────────────────┘
```

### `/// SECTIONS`

```
┌─ 1. HERO          → tagline · stats · hero flacon
├─ 2. MANIFESTE     → three pillars: inspiration, atelier, accessibility
├─ 3. LE RITUEL     → emerald section · 139 dh pack · 3-step process
├─ 4. LA COLLECTION → tabbed grid · Les Femmes / Les Hommes · 24 cards
├─ 5. L'ATELIER     → Fès heritage · raw materials · craft facts
├─ 6. LES AVIS      → verbatim FR + Darija reviews from IG
└─ 7. CONTACT       → WhatsApp · IG · COD · nationwide delivery
```

### `/// HIGHLIGHTS`

| Decision | Why |
|---|---|
| Tagline `L'essence de votre signature` above the fold | It's **their own** tagline, lifted verbatim from their IG menu — instant recognition. |
| French primary, Darija reviews kept verbatim | Their actual voice. *Bsahtk hbiba*, *ana ga3 mswitoni* — untranslated where the texture matters. |
| Inspired-by line on every card | Honest positioning. Beats pretending to be Maison Francis Kurkdjian. |
| Emerald "Le Rituel" section | Pulled directly from their existing teal/podium product-shot palette. |
| WhatsApp CTA in nav, hero, ritual, footer | Mirrors the real ordering path Moroccan customers use. |
| Quiet hero (no carousel, no countdown) | The Tier-1 tell. Carousels and "FLASH SALE" timers signal commodity. |
| 22 Vitest tests on data + built HTML | Catalogue integrity + brand-marker grep in CI. |

### `/// STACK`

```
Astro 5         →  static-first islands, zero JS by default
Tailwind v4     →  via @tailwindcss/vite, design tokens in @theme block
Bun 1.3         →  dev + CI runtime
Vitest 2        →  data integrity + built-HTML sanity
GitHub Actions  →  ci.yml (test) + deploy-pages.yml (publish)
GitHub Pages    →  static deploy at hatimhtm.github.io/nota-parfum-landing
```

Astro's `site` and `base` read `SITE` / `BASE_PATH` from env, so the same
build artefact retargets to Vercel or a custom domain without source edits.

### `/// PROJECT LAYOUT`

```
.
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── vitest.config.ts
├── LICENSE
├── README.md
├── assets-readme/
│   ├── hero-banner.svg
│   └── hero-banner-dark.svg
├── public/
│   ├── favicon.svg
│   └── brand/                  ← cropped from their IG screenshots
│       ├── logo.png
│       ├── bottle-burberry-pair.jpg
│       ├── bottle-trio-orchard.jpg
│       ├── bottle-miss-dior-prada.jpg
│       └── bottle-pack-emerald.jpg
├── src/
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── Manifesto.astro
│   │   ├── Ritual.astro
│   │   ├── Collection.astro
│   │   ├── FragranceCard.astro
│   │   ├── Heritage.astro
│   │   ├── Reviews.astro
│   │   └── Footer.astro
│   ├── data/
│   │   ├── fragrances.ts       ← the 24 SKUs, typed
│   │   └── reviews.ts          ← verbatim IG reviews + translations
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── globals.css         ← tokens, fonts, btn/nav/reveal/tab primitives
├── tests/
│   ├── fragrances.test.ts      ← catalogue integrity (12 fr · 12 hm · 24 total)
│   └── build.test.ts           ← dist/index.html brand-marker assertions
└── .github/
    ├── FUNDING.yml
    └── workflows/
        └── ci.yml
```

### `/// LOCAL DEV`

```bash
bun install            # ~40s cold install
bun run dev            # http://localhost:4321
bun run check          # astro check (TS + a11y diagnostics)
bun run build          # static build → dist/
bun run preview        # serve dist/ locally
bun run test           # vitest run (data + built HTML)
```

CI runs the same commands (`bun install → check → build → grep markers → vitest`) on every push to `main` and on every PR.

### `/// STATUS`

🟢 **Production-ready.** Live at **[hatimhtm.github.io/nota-parfum-landing](https://hatimhtm.github.io/nota-parfum-landing/)**.
Every push to `main` runs the full CI suite and re-publishes the site automatically.

---

<div align="center">

_Crafted by_ **[Hatim El Hassak](https://github.com/hatimhtm)** _in May 2026._
_Unsolicited. Honest. From one Moroccan to another._

</div>

---

<p align="center">
  <a href="https://hatimelhassak.is-a.dev"><img src="https://img.shields.io/badge/PORTFOLIO-1A1A1A?style=for-the-badge&logo=vercel&logoColor=CCFF00" alt="Portfolio" /></a>
  <a href="https://cal.com/hatimelhassak/engineering-discovery"><img src="https://img.shields.io/badge/BOOK_A_CALL-CCFF00?style=for-the-badge&logo=googlecalendar&logoColor=1A1A1A" alt="Book a call" /></a>
  <a href="https://www.linkedin.com/in/hatim-elhassak/"><img src="https://img.shields.io/badge/LINKEDIN-1A1A1A?style=for-the-badge&logo=linkedin&logoColor=CCFF00" alt="LinkedIn" /></a>
  <a href="mailto:hatimelhassak.official@gmail.com"><img src="https://img.shields.io/badge/EMAIL-1A1A1A?style=for-the-badge&logo=gmail&logoColor=CCFF00" alt="Email" /></a>
</p>

<p align="center">
  <code>///&nbsp;&nbsp;OPEN FOR NEW WORK&nbsp;&nbsp;///&nbsp;&nbsp;CONTRACT &amp; FREELANCE&nbsp;&nbsp;///&nbsp;&nbsp;REMOTE WORLDWIDE&nbsp;&nbsp;///</code>
</p>
