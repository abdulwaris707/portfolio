# Premium Developer & UI/UX Product Portfolio

A production-ready, highly interactive personal portfolio website showcasing multi-disciplinary engineering and visual design standards: **Software Engineering, Web Development, UI/UX Design, and Android Development**.

The application is structured as a static Single Page Application (SPA) designed in **Obsidian Dark Theme** and includes custom interactive visual sandboxes (Playground Widgets) representing each area of expertise.

---

## 🚀 Technology Stack

- **Framework**: React 19 + TypeScript 6
- **Build Tool**: Vite 8 (optimized client-side compilation)
- **Styling**: Tailwind CSS v4 (PostCSS config adapters)
- **Animations**: Framer Motion 13 (Restrained, hardware-accelerated transitions)
- **Icons**: Lucide React 0.415.0

---

## 🛠️ Environment Variables Configuration

This project is a client-side frontend SPA. To keep your information clean and modular, configure target email addresses or analytics identifiers through environment variables. 

Create a `.env` file in the root workspace folder based on [`.env.example`](file:///.env.example):

```bash
# Destination email address for the client-side mailto fallback launcher
VITE_CONTACT_EMAIL=contact@example.com

# Optional backend endpoint base URL (if a proxy server or form receiver API is deployed)
VITE_API_BASE_URL=https://api.yourdomain.com

# Optional web analytics tracking ID (for public distribution traffic counts)
VITE_ANALYTICS_ID=G-MOCKTRACKINGID
```

*Note: Environment variables in Vite must be prefixed with `VITE_` to be loaded into client-side code.*

---

## 💻 Local Development

### Prerequisites
- Node.js (version 18+ recommended)
- npm or yarn

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the interactive widgets and animations.

### 3. Linting Code Quality
Verify type interfaces, dependency trees, and syntax compliance using Oxlint:
```bash
npm run lint
```

---

## 📦 Production Compiling

Compile and minify assets into the static distribution bundle `dist/`:
```bash
npm run build
```

This commands compiles and bundles resources:
- JavaScript chunks are compiled, minified, and split.
- CSS is optimized via PostCSS.
- Visual vector items are bundled inline.
- Output builds are served from the `dist/` directory.

To test the compiled production build locally:
```bash
npm run preview
```

---

## 🌐 Deployment Guidelines

This project compiles down to static HTML, CSS, and JS files, making it deployable on any modern static web host.

### Option A: Vercel (Recommended)
This repository is pre-configured for Vercel deployment.
1. Install Vercel CLI or link your repository to the Vercel Dashboard.
2. Ensure the framework preset is set to **Vite**.
3. Set the build command to `npm run build` and output directory to `dist`.
4. Configure environment variables (like `VITE_CONTACT_EMAIL`) in the Vercel Project settings.
5. Deployment will pick up configuration details inside [`vercel.json`](file:///vercel.json).

### Option B: Netlify
1. Connect your repository to Netlify.
2. Build Settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Add Environment Variables inside the Netlify UI.
4. Netlify will use [`public/_redirects`](file:///public/_redirects) to correctly route all SPA routes.

### Option C: GitHub Pages
1. Configure your repository for deployment via GitHub Actions.
2. Create a workflow configuration using static upload steps pointing to the `dist` folder.
3. If hosting on a subpath (e.g. `yourname.github.io/portfolio`), set the `base` configuration inside [`vite.config.ts`](file:///vite.config.ts) to `/portfolio/`.

---

## 📋 Pre-Flight Production Checklist

Before launching the project live, verify the following steps:

1. **Environment Variables**:
   - Check that `VITE_CONTACT_EMAIL` points to your actual business inbox.
2. **Form Validation & Routing**:
   - Fill out the Contact Form. Verify it triggers your native email client with pre-filled content.
   - Enter `error@example.com` in the email input to confirm that the simulated database rollback error handles gracefully.
3. **Responsive Breakpoints**:
   - Audit the layout on mobile (320px, 375px, 430px) to verify that the Android phone emulator shrinks and the case-study buttons wrap nicely.
4. **Touch & Accessibility Target Limits**:
   - Check that active buttons and navigation items are easy to press on mobile devices.
   - Confirm screen reader aids (`aria-labels`) are operational.
5. **Production Bundle Verification**:
   - Run `npm run build` to confirm compilation is clean and generates no TypeScript warnings or unused imports.
