# Abrar Ragib — SQA Engineer Portfolio

> **Live site → [abrarragib.github.io](https://abrarragib.github.io)**

A world-class, single-file portfolio website built for a Software Quality Assurance Engineer. Designed to impress technical reviewers — zero frameworks, zero build steps, pure HTML + CSS + vanilla JS.

---

## Preview

```
abrarragib.github.io/
  ├── index.html          ← entire site (one file, ~90kb)
  └── ars.png             ← profile photo
```

---

## Features

### Design & UX
- **Dark theme** with deep `#060608` base, purple `#6c63ff` + teal `#00e5c0` accent palette
- **Syne** display font + **JetBrains Mono** for code elements + **DM Sans** body
- Ambient glow orbs, fine grid background, noise texture overlay
- Light / dark mode toggle with one-click CSS variable swap
- Fully responsive — desktop (1400px+), laptop, tablet, mobile (320px+)

### Cursor System (Magnifying Glass)
The entire cursor is a custom magnifying glass — thematic for a QA engineer who *inspects* things.

| State | Trigger | Behaviour |
|---|---|---|
| Default | Moving | Spring-physics lag, teal lens, handle rotates toward velocity |
| Inspect | Hover text | Dashed scan ring expands to 86px, crosshairs glow |
| Interactive | Hover card | Lens turns purple, 66px ring |
| Zoom | Hover button | 100px zoom canvas appears — shows button text at 2.4× with rotating tick ring |
| Click | Any click | Double ripple ring + 18% chance `🐛 bug found` Easter egg |
| Idle | Still 2.2s | Lens breathes with slow glow pulse |

All geometry driven via `transform` in a single `requestAnimationFrame` loop. Zero `left`/`top` style changes. Automatically disabled on touch devices.

### Sections
1. **Hero** — typewriter role cycling, animated terminal showing a real pytest run, counter stats (98% / 35% / 40%)
2. **Skills Marquee** — infinite scroll, pause on hover, 16 skills
3. **Projects** — 6 cards (government OCR, screen reader, load testing, API framework, Selenium suite, font engine)
4. **Experience** — tab-switcher timeline (Apurba Technologies, Dream71, Data-Path, AIUB)
5. **Blog** — 3 articles on Selenium automation, JMeter load testing, WCAG accessibility
6. **About** — animated skill progress bars, certifications
7. **Contact** — all cards are clickable (`mailto:`, `tel:`, external links)

### Animations
- Scroll-triggered fade-up reveals on every section
- Counter animation: numbers count up from 0 on scroll
- Infinite skills marquee with CSS `@keyframes`
- Spinning conic-gradient ring around profile photo
- Two counter-rotating dashed orbit rings with glowing dots
- Scan line sweep across profile photo
- Typewriter hero role: 4 roles cycling with delete/retype

---

## Tech Stack

```
HTML5 · CSS3 · Vanilla JavaScript
No frameworks · No build tools · No dependencies
```

**Fonts** loaded from Google Fonts CDN (Syne, JetBrains Mono, DM Sans).  
Everything else is self-contained in `index.html`.

---

## Performance

| Metric | Value |
|---|---|
| Total file size | ~90 KB (HTML) + ~33 KB (PNG) |
| External requests | 1 (Google Fonts) |
| Dependencies | 0 |
| Build step required | None |
| Frameworks | None |

---

## Deploy to GitHub Pages

```bash
# 1. Clone or create your repo
git clone https://github.com/AbrarRagib/AbrarRagib.github.io
cd AbrarRagib.github.io

# 2. Drop in the two files
cp index.html .
cp ars.png .

# 3. Push
git add .
git commit -m "feat: launch portfolio site"
git push origin main

# 4. Live at → https://abrarragib.github.io
```

> GitHub Pages serves `index.html` from the repo root automatically. No configuration needed.

---

## File Structure

```
AbrarRagib.github.io/
│
├── index.html          ← complete portfolio (HTML + CSS + JS, single file)
├── ars.png             ← profile photo (place in same directory)
└── README.md           ← this file
```

---

## Cursor Architecture (Technical)

For engineers curious about the implementation:

```
ONE rAF loop drives ALL geometry:
  ├── Spring physics  →  pos lags mouse via velocity + damping
  ├── Rotation        →  atan2(vy, vx) → handle faces movement direction  
  ├── Scale           →  speed-based: faster = slightly larger lens
  ├── Trail dots      →  7 dots, each lags previous by cascading factor
  ├── Scan ring       →  size lerped in rAF, color via CSS class switch
  └── Zoom canvas     →  redrawn in rAF only when active (button hover)

CSS transitions → ONLY on opacity & color. NEVER geometry.
All positions via transform (GPU composited, zero layout cost).
```

Constants:
```js
SPRING = 0.10   // stiffness — how fast lens catches up
DAMP   = 0.75   // damping — reduces oscillation
TRAIL  = 7      // number of trail dots
ZOOM   = 2.4    // zoom lens magnification factor
LR     = 50     // lens radius in px
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

**Key Stats**
- 98% defect reproduction accuracy across all release cycles
- 35% reduction in manual regression via Selenium automation
- 40% improvement in API test coverage
- 10,000+ concurrent users load-tested on national government platform

---

## License

This portfolio is personal work. Feel free to use it as inspiration — please don't copy it wholesale and present it as your own.

---

*Built with precision. Tested thoroughly.*