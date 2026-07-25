# NorthPeak Digital — Agency Landing Page

A premium, accessible, performance-first one-page landing site for the fictional digital agency **NorthPeak Digital**.

> Benchmarked against Linear, Framer, Stripe, and Vercel in visual quality and code standards.

---

## 🚀 Live Demo

<!-- Replace with your deployed URL -->
**Live URL:** _Deploy to Netlify / Vercel and paste URL here_

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS v3 (no Bootstrap, no Material UI) |
| Fonts | Sora + Manrope via `<link rel="preload">` (non-blocking) |
| Animations | Native CSS transitions + `IntersectionObserver` (no animation libraries) |
| Icons | Inline SVGs (no icon font imports) |
| Validation | Custom vanilla JS (no library) |

---

## 📦 Features

### Sections
1. **Sticky Navbar** — Transparent over hero, glassmorphic on scroll. Accessible mobile drawer with focus trap, Esc key, `aria-expanded`.
2. **Hero** — Confident single `<h1>`, dual CTAs, abstract floating UI visual (CSS + inline SVG only).
3. **Services Grid** — 6 cards with custom inline SVG icons, gradient border on hover, scroll reveal.
4. **Stats** — 4 animated counters via `IntersectionObserver`, no external library.
5. **Testimonials** — 3 glassmorphic cards with initials avatars, 5-star ratings, metric badges.
6. **Pricing** — 3 tiers (Starter / **Professional** "Most Popular" / Enterprise), hover lift.
7. **Contact Form** — Full client-side validation (email pattern, phone regex), `aria-describedby` error linking, mock async submit with success screen.
8. **Footer** — Dark Navy→Black gradient, quick links, services, social icons, copyright.

### Accessibility
- Correct semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Single `<h1>`, logical `h2`/`h3` hierarchy throughout
- All inputs have associated `<label for="">`, `required`, `aria-required`, `aria-invalid`, `aria-describedby`
- Keyboard navigable — visible focus states on every interactive element
- Mobile menu: focus-trapped, closes on Escape or link click, `aria-modal="true"`
- `prefers-reduced-motion` respected globally

### Responsive Breakpoints
| Viewport | Layout |
|----------|--------|
| 360px | Single column, hamburger nav, stacked CTAs, stacked pricing |
| 768px | 2-col services grid, tablet pricing layout |
| 1440px | 3-col services grid, 3-col pricing, full hero split |

---

## 🏃 Running Locally

```bash
# Clone
git clone https://github.com/YOUR_USERNAME/northpeak-digital.git
cd northpeak-digital

# Install
npm install

# Dev server (http://localhost:5173)
npm run dev

# Production build
npm run build
npm run preview
```

---

## 🚢 Deploying

### Netlify (recommended)
1. Push repo to GitHub
2. Connect repo in Netlify → New site from Git
3. Build command: `npm run build`
4. Publish directory: `dist`

### Vercel
```bash
npm i -g vercel
vercel --prod
```

### GitHub Pages
```bash
npm run build
# Push the dist/ folder contents to gh-pages branch
```

---

## 📁 Project Structure

```
northpeak-digital/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky nav, mobile menu with focus trap
│   │   ├── Hero.jsx            # Hero with h1, CTAs, SVG visual
│   │   ├── Services.jsx        # 6 service cards, inline SVG icons
│   │   ├── Stats.jsx           # 4 animated counters
│   │   ├── Testimonials.jsx    # 3 glassmorphic cards
│   │   ├── Pricing.jsx         # 3 pricing tiers
│   │   ├── ContactForm.jsx     # Validated form with success state
│   │   └── Footer.jsx          # Dark footer with verification link
│   ├── hooks/
│   │   └── useAnimations.js    # useCountUp + useScrollReveal hooks
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css               # Brand tokens, global styles, Tailwind layers
├── index.html                  # SEO meta, OG tags, font preloads
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

---

## ✅ Submission Verification

> Built for Digital Heroes Training Task — [https://digitalheroesco.com](https://digitalheroesco.com)

---

## 📄 License

MIT
