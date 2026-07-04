# Abrar Ragib — SQA Engineer Portfolio

> **Live site → [abrarragib.github.io](https://abrarragib.github.io)**

A world-class, single-file portfolio for a Software Quality Assurance Engineer — built to impress technical reviewers. Zero frameworks, zero build steps, pure HTML + CSS + vanilla JS. Every project links to the real, live product it was built for.

---

## Repository structure

```
AbrarRagib.github.io/
│
├── index.html                      ← live portfolio (single-file HTML + CSS + JS, ~102 KB)
├── README.md                       ← this file
├── sitemap.xml                     ← search-engine sitemap (homepage + profile image)
├── robots.txt                      ← allows all crawlers, points to the sitemap
├── google019718aa3f6fb912.html     ← Google Search Console verification
│
├── Content/                        ← assets referenced by the site
│   ├── ars.png                     ← profile photo used in the hero frame
│   ├── AbrarRagib.jpg              ← original full-res headshot (not used by the live site)
│   └── Abrar_Ragib_SQA_CV.pdf      ← downloadable CV
│
├── SEO/                            ← backup copy of the verification file
│   └── google019718aa3f6fb912.html
│
└── archive/                        ← previous iterations, kept for reference
    ├── v1/                         ← original multi-file site (index.html · style.css · script.js)
    └── v2/                         ← earlier single-file version (index.html)
```

> GitHub Pages serves `index.html` from the repo root automatically — no configuration needed. The `Content/` folder must ship alongside it so the photo and CV resolve.

---

## Features

### Design & UX
- **Dark theme** — deep `#060608` base with a disciplined purple `#6c63ff` + teal `#00e5c0` accent palette
- **Syne** display font · **JetBrains Mono** for code/data · **DM Sans** body
- Ambient glow orbs, fine grid background, subtle noise overlay
- Light / dark mode toggle via one-click CSS variable swap
- Fully responsive — desktop (1400px+), laptop, tablet, mobile (320px+), with zero horizontal overflow at every breakpoint

### Custom cursor (magnifying glass)
The entire cursor is a magnifying glass — thematic for a QA engineer who *inspects* things. Driven by a single `requestAnimationFrame` loop; automatically disabled on touch devices.

| State | Trigger | Behaviour |
|---|---|---|
| Default | Moving | Spring-physics lag, teal lens, handle rotates toward velocity |
| Inspect | Hover text | Dashed scan ring expands, crosshairs glow |
| Interactive | Hover card | Lens turns purple |
| Zoom | Hover button | Zoom canvas magnifies the button label with a rotating tick ring |
| Click | Any click | Double ripple ring + occasional `🐛 bug found` Easter egg |
| Idle | Still ~2s | Lens breathes with a slow glow pulse |

### Sections
1. **Hero** — typewriter role cycling, an animated terminal showing a live pytest run, and counter stats (98% / 35% / 40%)
2. **Skills marquee** — infinite scroll, pause on hover; leads with Selenium, Playwright, and AI-assisted automation
3. **Projects** — 7 client & government project cards (each linking to its live URL) plus a dedicated **Personal Projects** grid of 6 open-source repos
4. **Experience** — tab-switcher timeline (Apurba Technologies · Dream71 · Data-Path · AIUB)
5. **Blog** — 3 articles on Selenium automation, JMeter load testing, and WCAG accessibility
6. **About** — animated skill proficiency bars, certifications, and a "learning next" set
7. **Contact** — clickable cards (`mailto:`, `tel:`, LinkedIn, GitHub)

### Profile-photo frame
A refined "inspection instrument" treatment: a two-tone purple→teal conic sweep ring, a single slow dashed orbit, soft corner brackets, an ambient glow, a diagnostic scan line, and a status badge.

---

## Projects

### Client & government work
Each card on the site links to the live product.

| Project | Focus | Link |
|---|---|---|
| Bangla OCR System | National OCR portal · Selenium, JMeter, cross-platform | [ocr.bangla.gov.bd](https://ocr.bangla.gov.bd) |
| Kagoj.ai — AI OCR | AI text-extraction validation · functional, edge-case | [kagoj.ai](https://kagoj.ai) |
| Screen Reader ALO | Accessibility app · WCAG, Windows & Android | [github.com/AbrarRagib](https://github.com/AbrarRagib) |
| Font Conversion Engine | ASCII→Unicode Bangla · compatibility testing | [fontengine.bangla.gov.bd](https://fontengine.bangla.gov.bd) |
| Apurba HRM | Leave/attendance/payroll · **Playwright** API testing, Jira | [hrm.apurbatech.io](https://hrm.apurbatech.io) |
| Apurba Fin Doc | Financial-document OCR · Postman API, automation | [findoc.apurbatech.io](https://findoc.apurbatech.io) |
| BSCIC Online Market | National e-commerce · JMeter, 10,000+ concurrent users | [bscicemarket.gov.bd](https://bscicemarket.gov.bd) |

### Personal projects (GitHub)
- **Amazon UI Automation** — Selenium · Python · Page Object Model
- **Daraz UI Automation** — Selenium · Python · E-commerce flows
- **API Test Automation** — Postman · Python · REST API
- **Spotify API Integration** — Python · REST API · OAuth
- **JMeter Load Testing (Restful-Booker)** — Apache JMeter · Performance
- **Security Testing** — Web Security · OWASP

All personal projects link to **[github.com/AbrarRagib](https://github.com/AbrarRagib)**.

---

## Tech stack

```
HTML5 · CSS3 · Vanilla JavaScript
No frameworks · No build tools · No dependencies
```

**Fonts** load from Google Fonts (Syne, JetBrains Mono, DM Sans) — the only external requests the live site makes; icons are inline SVG/emoji. Everything else is self-contained in `index.html`. (The archived `v1` uses a Font Awesome CDN, but the live site does not.)

**Testing tooling represented across the site:** Selenium (Python) · Playwright · Apache JMeter · Postman · AI-assisted automation · Jira · CI/CD · WCAG accessibility.

---

## SEO & discoverability

- Descriptive `<title>`, meta description, keywords, canonical URL, and theme color
- **Open Graph** and **Twitter Card** tags for rich link previews when the site is shared
- **JSON-LD `Person` schema** so search engines can parse role, skills, employer, and social profiles
- **`sitemap.xml`** at the site root — lists the homepage and profile image; submit it in Search Console
- **`robots.txt`** at the site root — allows all crawlers and points them to the sitemap
- **Google Search Console** ownership verified via `google019718aa3f6fb912.html` in the repo root (a backup copy lives in `SEO/`)

---

## Performance

| Metric | Value |
|---|---|
| Live HTML size | ~102 KB (single file) |
| External requests | 1 (Google Fonts) |
| Dependencies | 0 |
| Build step required | None |
| Frameworks | None |

---

## Deploy to GitHub Pages

```bash
# 1. Clone your repo
git clone https://github.com/AbrarRagib/AbrarRagib.github.io
cd AbrarRagib.github.io

# 2. Make sure the site and its assets are in place
#    index.html at the repo root
#    Content/ars.png  and  Content/Abrar_Ragib_SQA_CV.pdf

# 3. Commit and push
git add .
git commit -m "chore: update portfolio"
git push origin main

# 4. Live at → https://abrarragib.github.io
```

---

## Profile

**Abrar Ragib**
Software Quality Assurance Engineer · Dhaka, Bangladesh

- 📧 arsragib@gmail.com
- 📱 +880 1746-995446
- 💼 [linkedin.com/in/abrar-ragib](https://linkedin.com/in/abrar-ragib)
- 🐙 [github.com/AbrarRagib](https://github.com/AbrarRagib)
- 🌐 [abrarragib.github.io](https://abrarragib.github.io)

**Key stats**
- 98% defect reproduction accuracy across all release cycles
- 35% reduction in manual regression via Selenium & Playwright automation
- 40% improvement in API test coverage through a custom Python framework
- 10,000+ concurrent users load-tested on a national government platform

---

## License

This portfolio is personal work. Feel free to use it as inspiration — please don't copy it wholesale and present it as your own.

---

*Built with precision. Tested thoroughly.*
