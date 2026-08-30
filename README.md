# Abdul Waris — Professional Developer Portfolio

A premium, modern, and minimal developer portfolio website built using **pure HTML5, CSS3, and Vanilla ES6+ JavaScript**. It features an elegant editorial design, subtle motion reveals, and custom CSS-based visual previews of real deployed projects.

---

## 🎨 Design System

- **Typography**: Editorial display serif (*Cormorant Garamond*) paired with a modern UI sans-serif (*Plus Jakarta Sans*).
- **Color Palettes**:
  - **Light Mode**: Sand background (`#F5F5F2`), charcoal text (`#161616`), and forest accent (`#4D6254`).
  - **Dark Mode**: Obsidian olive background (`#151614`), warm cream text (`#F1F0EA`), and sage accent (`#91A394`).
- **Icons**: Minimal vector iconography via Lucide Icons.

---

## 📂 Project Architecture

```text
portfolio/
├── index.html
├── css/
│   ├── style.css
│   ├── responsive.css
│   └── animations.css
├── js/
│   ├── main.js
│   ├── projects.js
│   └── contact.js
├── assets/
│   ├── images/
│   └── icons/
└── README.md
```

---

## 🚀 Live Projects Highlighted

The portfolio showcases **five real deployed products** built by Abdul Waris:

1. **Nexora** ([https://nexora-wariz777.vercel.app/](https://nexora-wariz777.vercel.app/)): A SaaS Analytics Dashboard with interactive Chart.js graphs, dynamic filtering, CRUD controls, and a search command palette.
2. **Velora** ([https://velora-wariz777.vercel.app/](https://velora-wariz777.vercel.app/)): A Personal Finance Manager tracking budgets, credit card utilization, transactions, and net worth calculations.
3. **Lumora** ([https://lumora-tau-flax.vercel.app/](https://lumora-tau-flax.vercel.app/)): A premium quiet luxury fashion e-commerce shopping client.
4. **Haven** ([https://haven-blush.vercel.app/](https://haven-blush.vercel.app/)): An architecture and property marketplace showcasing Pakistan's luxury residences.
5. **Diyar** ([https://diyar-q4xh.vercel.app/](https://diyar-q4xh.vercel.app/)): An architectural timber showroom website presenting workspace and furniture collections.

---

## 💻 Running the Project Locally

No frameworks, compilation steps, or heavy loaders are required.

### Option 1: Direct File Access
Simply double-click the `index.html` file at the root of the folder to open and run it directly in any modern web browser.

### Option 2: Local Node Web Server (Vite)
If you have Node.js installed, you can launch a hot-reloading development preview server:
```bash
# 1. Install Vite helper (if node_modules isn't already set up)
npm install

# 2. Start the local server
npm run dev
```
Navigate to the local address output (typically `http://localhost:5173`).

### Option 3: Python Web Server
Alternatively, you can spin up a lightweight Python web server:
```bash
python -m http.server 8000
```
Navigate to `http://localhost:8000` in your web browser.

---

## 🌐 Production Deployment

Since this portfolio is built with pure static files, it can be deployed on any modern hosting platform (such as **Vercel**, **Netlify**, or **GitHub Pages**) by uploading the root directory directly.

### Deployment to Vercel (CLI)
Ensure you are in the root directory:
```bash
vercel
```
Vercel will detect it as a **Static Project** and deploy it instantly.

---

## 📋 Pre-Flight Production Checklist

Before publishing, verify the following steps:
1. **Real Project Links**: Click each `Visit Live ↗` button to confirm they open the correct deployed URLs in new tabs.
2. **Form Redirection**: Submit the contact form to confirm that input values are validated and launch a prefilled email client.
3. **WhatsApp Link**: Click `WhatsApp Me ↗` to confirm it opens a conversation with international number `+923263104503` and a prefilled message.
4. **Theme Caching**: Confirm that toggling dark/light theme persists across page refreshes using `LocalStorage`.
5. **Reduced Motion**: Verify that animations do not run when `prefers-reduced-motion` is enabled in system accessibility properties.
