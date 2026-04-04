# Poker OCR Website

Professional landing page for Custom Poker OCR & Strategy Automation Solutions.

## Run with Vite (recommended)

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)

### Install and run

```powershell
cd PokerVision
npm install
npm run dev
```

Then open **http://localhost:5173** in your browser. Vite will open it automatically if `open: true` is set.

### Other Vite commands

| Command | Description |
|--------|-------------|
| `npm run dev` | Start dev server (hot reload) |
| `npm run build` | Build for production → output in `dist/` |
| `npm run preview` | Serve the `dist/` build locally (test before deploy) |

### Deploy the built site

1. Run `npm run build`.
2. Upload the contents of the **`dist/`** folder to your hosting (Netlify, Vercel, GitHub Pages, any static host).
3. No server-side config needed; it’s static HTML, CSS, and assets.

**Ask a question** on the site posts through [FormSubmit](https://formsubmit.co/) to **azbvision.zain@gmail.com**. The first time someone submits, check that inbox and **confirm the FormSubmit activation link** so later submissions are delivered.

**SEO:** Add your live site URL (**`https://azbvision.github.io/PokerVision/`** or custom domain) in your **Fiverr gig description**, **FAQ**, and **profile** so Google can connect your ranking gig to this site. The site already links to the gig in nav, topics, contact, and FAQ.

### GitHub Pages (Git-based deploy)

**Repository:** [github.com/azbvision/PokerVision](https://github.com/azbvision/PokerVision)  
**Default site URL (no custom domain):** `https://azbvision.github.io/PokerVision/`

1. Clone or push this project to the repo above (`main` branch). Remote example:
   ```powershell
   git remote add origin https://github.com/azbvision/PokerVision.git
   ```
   If you **renamed** the repo on GitHub, update your local remote:
   ```powershell
   git remote set-url origin https://github.com/azbvision/PokerVision.git
   git remote -v
   ```
2. In the repo: **Settings → Pages → Build and deployment → Source:** choose **GitHub Actions**.
3. Push to `main` (or merge a PR). The workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) runs `npm ci`, `npm run build`, and publishes **`dist/`**. The build sets Vite’s `base` to **`/PokerVision/`** automatically for that URL.
4. After the first successful run, open **`https://azbvision.github.io/PokerVision/`** (unless the repo is **`azbvision.github.io`**, then the site is **`https://azbvision.github.io/`**).

**Custom domain (e.g. azbvision.com)** on this project repo: GitHub serves the site from the domain root, so set a repository variable **`VITE_BASE_PATH`** to **`/`** ( **Settings → Secrets and variables → Actions → Variables** ). Otherwise asset URLs keep the `/PokerVision/` prefix and can break on the custom domain.

**Canonical / SEO URLs** in `index.html`, `public/sitemap.xml`, and `public/robots.txt` use **`https://azbvision.github.io/PokerVision/`** until custom DNS is live. After pointing **azbvision.com** at GitHub Pages, switch those back to `https://azbvision.com/` (and set **`VITE_BASE_PATH`** to **`/`** per above).

---

## Run without Vite (alternatives)

### Open in browser (quick)

Double-click `index.html` or run:

```powershell
start index.html
```

Demos and some assets may not work when opened as `file://`.

### Python HTTP server

```powershell
cd PokerVision
python -m http.server 8080
```

Then open **http://localhost:8080**. For demos and `/videos/…` URLs to resolve, prefer **`npm run dev`** or serve the **`dist/`** output after **`npm run build`** (see VIDEO-GUIDE.md). Serving only the repo root without a build does not expose `public/videos/` at `/videos/`.

### npx serve

```powershell
cd PokerVision
npx --yes serve
```

Stop any server with `Ctrl+C`.
