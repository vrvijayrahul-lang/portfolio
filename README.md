# S Rahul — Premium Developer & Digital Creator Portfolio

A high-performance, dark-themed personal portfolio website for **S Rahul** (Digital Creator | Web Developer | Digital Marketer). Engineered with agency-grade visual design, haptic micro-interactions, fluid motion dynamics, and accessible component architecture.

---

## ⚡ Tech Stack & Architecture

- **Core:** React 18, Vite 6, JavaScript (ES6+)
- **Styling:** Tailwind CSS 3.4 with custom theme tokens (electric violet `#8B5CF6`, lavender `#C4B5FD`, deep OLED `#050507`)
- **Motion & Interactions:** Framer Motion (spring physics, staggered reveals, morphing navigation)
- **Icons:** Lucide React (configured with ultra-light precise strokes)
- **Typography:** Space Grotesk (Headings) & DM Sans / Plus Jakarta Sans (Body)
- **SEO & Social:** OpenGraph, Twitter Cards, JSON-LD `Person` schema, custom SVG favicon, `sitemap.xml`, and `robots.txt`

---

## 📂 Project Structure

```
VR Rahul/
├── public/
│   ├── favicon.svg             # Custom S.R monogram vector icon
│   ├── robots.txt              # Search crawler directives
│   └── sitemap.xml             # Search engine index sitemap
├── src/
│   ├── assets/                 # Static brand assets
│   ├── components/
│   │   ├── About.jsx           # Bento-grid narrative & multidisciplinary edge
│   │   ├── BackgroundAtmosphere.jsx # Performant fixed ambient gradients & noise
│   │   ├── Contact.jsx         # Validated inquiry form with mailto fallback
│   │   ├── Footer.jsx          # Auto-updating copyright & brand links
│   │   ├── Hero.jsx            # 3D orbital emblem, live status badge & CTAs
│   │   ├── Navbar.jsx          # Floating glass pill navbar & mobile menu
│   │   ├── ProjectCard.jsx     # Double-bezel project card with status tags
│   │   ├── ProjectModal.jsx    # Deep-dive interactive case study modal
│   │   ├── Projects.jsx        # Category-filtered portfolio gallery
│   │   └── Skills.jsx          # Grouped honest toolkit cards
│   ├── data/
│   │   ├── profile.js          # Central config: name, email, socials & status
│   │   ├── projects.js         # 6 portfolio projects (Production vs Concepts)
│   │   ├── services.js         # 6 core service definitions & deliverables
│   │   └── skills.js           # Categorized development, creative & AI skills
│   ├── App.jsx                 # Main layout and composition
│   ├── index.css               # Tailwind directives & hardware bezel styles
│   └── main.jsx                # React DOM mount point
├── index.html                  # SEO metadata, Google Fonts, JSON-LD schema
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Local Development

### 1. Prerequisites
Ensure you have Node.js (v18+) and npm installed.

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open `http://localhost:3000` (or the port displayed in your terminal) in your browser.

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 5. Preview Production Build Locally
```bash
npm run preview
```

---

## 🛠️ Personalization & Configuration Checklist

All personal information, links, and content are centralized so you can customize them in seconds:

1. **Personal Information & Social Links:**
   - Open [`src/data/profile.js`](src/data/profile.js)
   - Update `email`, `phone`, `whatsapp`, `socials.github`, and `socials.linkedin`.

2. **Domain & SEO Canonical URL:**
   - When you connect your custom domain (e.g. `https://srahul.com`), update:
     - [`index.html`](index.html): `<link rel="canonical" href="..." />` and OpenGraph tags
     - [`public/robots.txt`](public/robots.txt): Sitemap URL
     - [`public/sitemap.xml`](public/sitemap.xml): `<loc>` tags
     - [`src/data/profile.js`](src/data/profile.js): `domain` property

3. **Projects & Case Studies:**
   - Open [`src/data/projects.js`](src/data/projects.js)
   - Add your own live URLs, GitHub repository links, or new client deliverables.
   - You can mark any project as completed (`isCompleted: true`) or concept (`isCompleted: false`).

---

## 🌐 Deploying to Vercel

### Option A: Via GitHub (Recommended)

1. **Initialize Git & Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit for S Rahul portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/s-rahul-portfolio.git
   git push -u origin main
   ```

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com) and log in.
   - Click **"Add New..."** → **"Project"**.
   - Select your GitHub repository (`s-rahul-portfolio`).
   - Vercel will automatically detect **Vite**:
     - **Build Command:** `npm run build`
     - **Output Directory:** `dist`
     - **Install Command:** `npm install`
   - Click **"Deploy"**.

3. **Connect a Custom Domain:**
   - In your Vercel Project Dashboard, navigate to **Settings** → **Domains**.
   - Enter your domain (e.g., `srahul.dev` or `srahul.com`).
   - Add the DNS records (`CNAME` or `A` record) provided by Vercel into your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.).

---

## 🎨 Design System Principles (High-End Agency Tier)

- **The Double-Bezel (Doppelrand):** Cards feature concentric nested radiuses simulating physical milled hardware (`p-1.5` outer shell with hairline highlight, nested with inner dark core).
- **Button-in-Button:** Interactive CTAs feature nested circular icon wrappers that dynamically translate on hover.
- **Atmospheric Lighting:** Deepest OLED `#050507` backdrop illuminated with subtle diffuse violet/lavender mesh radiance and tactile film grain.
- **Zero Generic AI Aesthetics:** Strict avoidance of generic fonts (Inter/Roboto), raw gray borders, and harsh drop shadows.
