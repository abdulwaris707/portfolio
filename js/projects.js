/**
 * Rebuilt Dynamic Projects Case Studies & Preview Engine
 * Abdul Waris — Selected Work Module
 */

const projectsData = [
  {
    num: "01",
    id: "nexora",
    title: "NEXORA",
    subtitle: "SaaS Analytics Dashboard",
    category: "dashboard",
    desc: "A commercial-grade SaaS Analytics Dashboard web application designed with modern enterprise design guidelines. Features interactive monthly area and donut charts, client-side hash routing, dynamic range filters, and a global command search palette.",
    tags: ["HTML5", "CSS3", "JavaScript", "Chart.js", "LocalStorage"],
    liveUrl: "https://nexora-wariz777.vercel.app/",
    layout: "layout-left",
    role: "Front-End Developer & UI/UX Designer",
    features: [
      "Interactive Chart.js visualizations (Monthly Area curve, category Revenue Donut, and acquisition sparklines).",
      "SPA Client-Side Hash Router ensuring seamless view changes without full page refreshes.",
      "Global Command Palette (Ctrl + K) overlay with keyboard navigation capabilities.",
      "Product Catalog Management (CRUD + LocalStorage) modal forms validation.",
      "Dynamic date range presets (Today, Last 7 days, Last 30 days) adjusting live data.",
      "Obsidian dark mode toggle with theme memory retention."
    ],
    mockClass: "nexora-mock",
    mockHtml: `
      <div class="load-preview-overlay">
        <span class="overlay-img-placeholder">📊</span>
        <span class="overlay-tagline">Nexora SaaS Dashboard</span>
        <button class="btn btn-primary load-iframe-btn" data-url="https://nexora-wariz777.vercel.app/">Load Live Preview</button>
      </div>
    `
  },
  {
    num: "02",
    id: "velora",
    title: "VELORA",
    subtitle: "Personal Finance Manager",
    category: "dashboard",
    desc: "A comprehensive personal finance application designed for real-time transactions logging, budget tracking, credit card utilization meters, and currency configurations without database dependencies.",
    tags: ["HTML5", "CSS3", "JavaScript", "Chart.js", "LocalStorage"],
    liveUrl: "https://velora-wariz777.vercel.app/",
    layout: "layout-right",
    role: "Front-End Developer & UI/UX Designer",
    features: [
      "Financial overview panel containing cash-flow graphs, savings rates, and expense distribution indices.",
      "Complete transaction logs with live filters, date sorting, and database entry creations.",
      "Interactive budget category controls with warning notifications at 80% and limit caps at 100%.",
      "Savings target multi-goal tracker with quick contribute balance adjustment controls.",
      "Credit limit utilization wheels calculating net worth formulas.",
      "Multi-currency support (PKR, USD, GBP, EUR, AED) adapting system parameters."
    ],
    mockClass: "velora-mock",
    mockHtml: `
      <div class="load-preview-overlay">
        <span class="overlay-img-placeholder">💳</span>
        <span class="overlay-tagline">Velora Personal Finance</span>
        <button class="btn btn-primary load-iframe-btn" data-url="https://velora-wariz777.vercel.app/">Load Live Preview</button>
      </div>
    `
  },
  {
    num: "03",
    id: "lumora",
    title: "LUMORA",
    subtitle: "Premium Luxury E-Commerce",
    category: "e-commerce",
    desc: "A luxury essentials e-commerce landing page and catalog platform. Focuses on premium quiet luxury design, clean typography scales, catalog search capabilities, and wishlist overlays.",
    tags: ["HTML5", "CSS3", "JavaScript", "Lucide Icons", "Flexbox"],
    liveUrl: "https://lumora-tau-flax.vercel.app/",
    layout: "layout-left",
    role: "Front-End Developer & UI/UX Designer",
    features: [
      "Clean quiet luxury e-commerce catalog landing pages featuring cashmere and leather collections.",
      "Custom catalog filters adjusting displays across Men, Women, Shoes, Bags, and Accessories.",
      "Shopping bag drawer toggles with quantity and checkout overlays.",
      "Wishlist overlays allowing users to save and view favorited articles.",
      "Theme toggle integrations and flexible grids with fast load benchmarks."
    ],
    mockClass: "lumora-mock",
    mockHtml: `
      <div class="load-preview-overlay">
        <span class="overlay-img-placeholder">👜</span>
        <span class="overlay-tagline">Lumora Luxury E-Commerce</span>
        <button class="btn btn-primary load-iframe-btn" data-url="https://lumora-tau-flax.vercel.app/">Load Live Preview</button>
      </div>
    `
  },
  {
    num: "04",
    id: "haven",
    title: "HAVEN",
    subtitle: "Architecture & Property Marketplace",
    category: "real-estate",
    desc: "A luxury real estate property marketplace focused on Pakistan's premier locations. Implements search capabilities, agent/advisor portfolios, and an elegant editorial editorial publication layout.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    liveUrl: "https://haven-blush.vercel.app/",
    layout: "layout-center",
    role: "Front-End Developer & UI/UX Designer",
    features: [
      "Curated real estate listings catalog detailing location specifications and property properties.",
      "Dynamic filtering search indexes matching buyers with locations.",
      "Architectural journals and articles collection.",
      "Advisors and agent matching dashboards.",
      "Sell With Haven interactive process structures."
    ],
    mockClass: "haven-mock",
    mockHtml: `
      <div class="load-preview-overlay">
        <span class="overlay-img-placeholder">🏡</span>
        <span class="overlay-tagline">Haven Property Marketplace</span>
        <button class="btn btn-primary load-iframe-btn" data-url="https://haven-blush.vercel.app/">Load Live Preview</button>
      </div>
    `
  },
  {
    num: "05",
    id: "diyar",
    title: "DIYAR",
    subtitle: "Solid Timber Showroom",
    category: "showroom",
    desc: "A premium solid timber furniture showroom website displaying minimal workspace and living showrooms. Showcases visual gallery compositions, responsive grids, and design tokens.",
    tags: ["HTML5", "CSS3", "JavaScript", "React Core"],
    liveUrl: "https://diyar-q4xh.vercel.app/",
    layout: "layout-right",
    role: "Front-End Developer & UI/UX Designer",
    features: [
      "High-end timber showroom showroom layout displaying furniture collections.",
      "Space classifications sorting items by Living, Dining, and Workspace layouts.",
      "Material specifications cards calling out wood grain details and finishes.",
      "Flexible asymmetrical grid alignments."
    ],
    mockClass: "diyar-mock",
    mockHtml: `
      <div class="load-preview-overlay">
        <span class="overlay-img-placeholder">🪵</span>
        <span class="overlay-tagline">Diyar Solid Timber Showroom</span>
        <button class="btn btn-primary load-iframe-btn" data-url="https://diyar-q4xh.vercel.app/">Load Live Preview</button>
      </div>
    `
  }
];

// Render Selected Projects list
export function renderShowcase(filterVal = 'all') {
  const container = document.getElementById('projects-showcase');
  if (!container) return;

  const filtered = filterVal === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filterVal || p.tags.map(t=>t.toLowerCase()).includes(filterVal));

  container.innerHTML = filtered.map(proj => `
    <div class="showcase-item ${proj.layout} reveal" id="project-${proj.id}" data-category="${proj.category}">
      
      <!-- Visual Demonstration Mockup -->
      <div class="showcase-visual-wrapper">
        <div class="preview-controls-bar">
          <span class="control-label"><i data-lucide="monitor"></i> Live Preview</span>
          <div class="dimension-selector-buttons">
            <button class="dim-btn active" data-target="frame-${proj.id}" data-dim="desktop">Desktop</button>
            <button class="dim-btn" data-target="frame-${proj.id}" data-dim="tablet">Tablet</button>
            <button class="dim-btn" data-target="frame-${proj.id}" data-dim="mobile">Mobile</button>
          </div>
          <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="open-site-btn">
            Open Full Site <i data-lucide="external-link"></i>
          </a>
        </div>

        <div class="preview-frame-container" id="frame-${proj.id}">
          <div class="frame-browser-header">
            <div class="browser-dot"></div>
            <div class="browser-dot"></div>
            <div class="browser-dot"></div>
            <div class="frame-address-bar">${proj.liveUrl.replace('https://', '')}</div>
          </div>
          <div class="frame-content-viewport" id="viewport-${proj.id}">
            ${proj.mockHtml}
          </div>
        </div>
      </div>

      <!-- Info Column Details -->
      <div class="showcase-info">
        <span class="showcase-num">${proj.num} /</span>
        <h3 class="showcase-title">${proj.title}</h3>
        <span class="showcase-tagline">${proj.subtitle}</span>
        <p class="showcase-desc">${proj.desc}</p>
        
        <div class="showcase-tags-container">
          ${proj.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>

        <div class="showcase-actions-group">
          <button class="action-link link-underline open-case-btn" data-id="${proj.id}">
            Open Case Study <span class="arrow">&rarr;</span>
          </button>
          <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="action-link link-underline">
            Visit Live <span class="arrow">↗</span>
          </a>
        </div>
      </div>

    </div>
  `).join('');

  // Re-hydrate Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Bind Actions (Iframe loads, drawer toggles, sizes adjustments)
  bindProjectActionEvents();
}

function bindProjectActionEvents() {
  // 1. Click to Load Iframe Preview
  const loadButtons = document.querySelectorAll('.load-iframe-btn');
  loadButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const url = btn.getAttribute('data-url');
      const viewport = btn.parentElement.parentElement;
      const projId = viewport.id.replace('viewport-', '');
      
      // Inject Iframe
      viewport.innerHTML = `
        <iframe src="${url}" class="live-iframe" loading="lazy" title="Live preview for project"></iframe>
      `;
      
      // Verification handler - if iframe gets blocked or crashes
      const iframe = viewport.querySelector('iframe');
      iframe.onerror = () => {
        viewport.innerHTML = `
          <div class="iframe-fallback-card">
            <span class="fallback-txt">Iframe display is restricted by security parameters on the deployment.</span>
            <a href="${url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Open Live Site ↗</a>
          </div>
        `;
      };
    });
  });

  // 2. Iframe Dimension Toggles (Desktop, Tablet, Mobile)
  const dimButtons = document.querySelectorAll('.dim-btn');
  dimButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const dim = btn.getAttribute('data-dim');
      const frame = document.getElementById(targetId);
      if (!frame) return;

      // Update button highlights
      const row = btn.parentElement;
      row.querySelectorAll('.dim-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Adjust widths
      frame.classList.remove('tablet-width', 'mobile-width');
      if (dim === 'tablet') {
        frame.classList.add('tablet-width');
      } else if (dim === 'mobile') {
        frame.classList.add('mobile-width');
      }
    });
  });

  // 3. Open Slide Case Study Drawer
  const openCaseButtons = document.querySelectorAll('.open-case-btn');
  const drawer = document.getElementById('project-drawer');
  const drawerTitle = document.getElementById('drawer-title');
  const drawerNum = document.getElementById('drawer-num');
  const drawerContent = document.getElementById('drawer-content-box');

  openCaseButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const proj = projectsData.find(p => p.id === id);
      if (!proj || !drawer || !drawerContent) return;

      // Populate drawer content
      drawerNum.textContent = `${proj.num} /`;
      drawerTitle.textContent = proj.title;
      
      drawerContent.innerHTML = `
        <div class="drawer-case-study">
          <p class="case-summary">${proj.desc}</p>
          
          <div class="case-grid">
            <div class="case-meta-cell">
              <span class="cell-lbl">Role</span>
              <span class="cell-val">${proj.role}</span>
            </div>
            <div class="case-meta-cell">
              <span class="cell-lbl">Deliverable</span>
              <span class="cell-val">${proj.subtitle}</span>
            </div>
          </div>

          <div class="case-features-wrapper">
            <h4 class="case-sec-title">Key System Features</h4>
            <ul class="case-bullets">
              ${proj.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
          </div>

          <div class="case-features-wrapper">
            <h4 class="case-sec-title">Technology Stack</h4>
            <div class="showcase-tags-container" style="margin-top: 0.5rem;">
              ${proj.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
          </div>

          <div class="case-actions">
            <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
              Visit Live Website <span class="arrow">↗</span>
            </a>
          </div>
        </div>
      `;

      // Show drawer
      drawer.classList.add('active');
      drawer.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden'; // Lock background scrolling
    });
  });
}

// Bind close events to drawer elements
document.addEventListener('DOMContentLoaded', () => {
  const drawer = document.getElementById('project-drawer');
  const closeBtn = document.querySelector('.drawer-close-btn');

  if (drawer && closeBtn) {
    const closeDrawer = () => {
      drawer.classList.remove('active');
      drawer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = ''; // Release scroll lock
    };

    closeBtn.addEventListener('click', closeDrawer);
    
    // Close on clicking outside body box (clicking the drawer background overlay)
    drawer.addEventListener('click', (e) => {
      if (e.target === drawer) {
        closeDrawer();
      }
    });

    // Close on Escape key press
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('active')) {
        closeDrawer();
      }
    });
  }

  // Initial showcase render
  renderShowcase('all');

  // Filter Buttons actions
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderShowcase(filter);
    });
  });
});
