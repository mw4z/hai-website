<div align="center">

# حي · Hai: Website

**The landing site for Hai, the neighbourhood social app.**

[![Live](https://img.shields.io/badge/live-hai--website.vercel.app-15803d)](https://hai-website.vercel.app)
![Next.js](https://img.shields.io/badge/Next.js-14-000000?logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)

[**Visit the site →**](https://hai-website.vercel.app)

</div>

---

## About

This is the public website for **Hai (حي)**. It introduces the app, links to the App Store and Google Play, and hosts the legal and support pages the stores require. It is an Arabic-first (RTL) static site built with Next.js and exported as plain HTML, with no server or database.

## ✨ Features

- **Landing page**: hero section, feature overview (neighbourhood alerts, local market, trusted services, events, rides, reputation), a three-step "how it works", app screenshots in phone mockups, an FAQ and download buttons for the App Store and Google Play.
- **Legal pages**: privacy policy (`/privacy`) and terms of service (`/terms`).
- **Account deletion** (`/delete-account`): explains how to delete an account in the app or by email request, and what happens to the data.
- **Contact** (`/contact`): support email, in-app support, common topics and expected response time.
- **Light and dark themes** with a toggle, and screenshots for each theme.
- **Scroll-reveal animations** and a responsive layout.

## 🧱 Tech stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router), static export (`output: 'export'`) |
| Language | TypeScript, React 18 |
| Styling | Tailwind CSS 4 (via `@tailwindcss/postcss`) |
| Hosting | Vercel |

## 🚀 Getting started

### Prerequisites

- Node.js 18 or newer

### Install & run

```bash
git clone https://github.com/mw4z/hai-website.git
cd hai-website
npm install
npm run dev
```

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the dev server |
| `npm run build` | Build and export the static site to `out/` |
| `npm start` | `next start`, which does not apply to a static export. To preview the build, serve `out/` with any static file server. |

### Environment variables

None. The site has no runtime configuration.

## 📁 Project structure

| Path | Contents |
|------|----------|
| `src/app/page.tsx` | Landing page |
| `src/app/privacy/`, `src/app/terms/` | Legal pages |
| `src/app/delete-account/` | Account-deletion instructions |
| `src/app/contact/` | Contact & support page |
| `src/app/layout.tsx` | Root layout, metadata, RTL setup |
| `src/components/` | Header, Footer, PageShell, PhoneMockup, ScrollReveal, ThemeToggle |
| `public/screenshots/` | App screenshots (light and dark) |
| `public/badges/`, `public/favicon.svg` | Store badge and favicon |
| `vercel.json` | Short cache headers for icon and favicon files |

## ☁️ Deployment

The site is deployed on **Vercel** at **https://hai-website.vercel.app**. Because `next.config.js` uses `output: 'export'`, `npm run build` writes a fully static site to `out/`, so it can also be served from any static host.

---

<div align="center"><sub>© Hai. All rights reserved.</sub></div>
