/**
 * Projects Data & Rendering Module
 * Abdul Waris — Selected Work Centerpiece
 */

const projectsData = [
  {
    num: "01",
    id: "nexora",
    title: "NEXORA",
    subtitle: "SaaS Analytics Dashboard",
    desc: "A commercial-grade SaaS Analytics Dashboard web application designed with modern enterprise design guidelines. Features interactive monthly area and donut charts, client-side hash routing, dynamic range filters, and a global command search palette.",
    tags: ["HTML5", "CSS3", "JavaScript", "Chart.js", "LocalStorage"],
    liveUrl: "https://nexora-wariz777.vercel.app/",
    layout: "variant-left",
    mockClass: "nexora-mock",
    mockHtml: `
      <div class="browser-content nexora-mock">
        <div class="dashboard-top">
          <div class="kpi-card">
            <span class="kpi-lbl">Revenue</span>
            <span class="kpi-val">$124.5k</span>
          </div>
          <div class="kpi-card">
            <span class="kpi-lbl">Net Profit</span>
            <span class="kpi-val">$89.2k</span>
          </div>
          <div class="kpi-card">
            <span class="kpi-lbl">Orders</span>
            <span class="kpi-val">1,432</span>
          </div>
        </div>
        <div class="dashboard-graph">
          <div class="graph-bar" style="height: 35%;"></div>
          <div class="graph-bar" style="height: 50%;"></div>
          <div class="graph-bar" style="height: 45%;"></div>
          <div class="graph-bar" style="height: 70%;"></div>
          <div class="graph-bar" style="height: 65%;"></div>
          <div class="graph-bar" style="height: 90%;"></div>
          <div class="graph-bar" style="height: 80%;"></div>
        </div>
      </div>
    `
  },
  {
    num: "02",
    id: "velora",
    title: "VELORA",
    subtitle: "Personal Finance Manager",
    desc: "A comprehensive personal finance application designed for real-time transactions logging, budget tracking, credit card utilization meters, and currency configurations without database dependencies.",
    tags: ["HTML5", "CSS3", "JavaScript", "Chart.js", "LocalStorage"],
    liveUrl: "https://velora-wariz777.vercel.app/",
    layout: "variant-right",
    mockClass: "velora-mock",
    mockHtml: `
      <div class="browser-content velora-mock">
        <div class="fintech-grid">
          <div class="card-utilization">
            <span class="kpi-lbl">Net Worth</span>
            <span class="kpi-val">Rs. 325,000</span>
            <div class="utilization-ring-wrapper">
              <div class="utilization-ring"></div>
              <span class="kpi-lbl">Limit 65%</span>
            </div>
          </div>
          <div class="transactions-list">
            <div class="tx-row">
              <span>Freelance Contract</span>
              <span class="tx-amount income">+Rs.45K</span>
            </div>
            <div class="tx-row">
              <span>Cloud Server Sub</span>
              <span class="tx-amount expense">-Rs.3.5K</span>
            </div>
            <div class="tx-row">
              <span>Workspace Office</span>
              <span class="tx-amount expense">-Rs.12K</span>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    num: "03",
    id: "lumora",
    title: "LUMORA",
    subtitle: "Premium Luxury E-Commerce",
    desc: "A luxury essentials e-commerce landing page and catalog platform. Focuses on premium quiet luxury design, clean typography scales, catalog search capabilities, and wishlist overlays.",
    tags: ["HTML5", "CSS3", "JavaScript", "Lucide Icons", "Flexbox"],
    liveUrl: "https://lumora-tau-flax.vercel.app/",
    layout: "variant-left",
    mockClass: "lumora-mock",
    mockHtml: `
      <div class="browser-content lumora-mock">
        <div class="ecommerce-nav">
          <span>LUMORA</span>
          <div style="display: flex; gap: 4px;">
            <span>NEW IN</span>
            <span>WOMEN</span>
            <span>MEN</span>
          </div>
        </div>
        <div class="editorial-hero">
          <div class="editorial-text">
            <span class="editorial-title">The Art of Everyday</span>
            <span class="editorial-btn">EXPLORE &rarr;</span>
          </div>
        </div>
      </div>
    `
  },
  {
    num: "04",
    id: "haven",
    title: "HAVEN",
    subtitle: "Architecture & Property Marketplace",
    desc: "A luxury real estate property marketplace focused on Pakistan's premier locations. Implements search capabilities, agent/advisor portfolios, and an elegant editorial editorial publication layout.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    liveUrl: "https://haven-blush.vercel.app/",
    layout: "variant-center",
    mockClass: "haven-mock",
    mockHtml: `
      <div class="browser-content haven-mock">
        <div class="property-hero">
          <div class="property-visual-grid">
            [ ARCHITECTURE GRID ]
          </div>
          <div class="property-info">
            <span class="property-tag">Pakistan</span>
            <span class="property-title">Atelier House</span>
            <span class="property-details">4 Bed • 5 Bath • Gulberg, Lahore</span>
          </div>
        </div>
      </div>
    `
  },
  {
    num: "05",
    id: "diyar",
    title: "DIYAR",
    subtitle: "Solid Timber Showroom",
    desc: "A premium solid timber furniture showroom website displaying minimal workspace and living showrooms. Showcases visual gallery compositions, responsive grids, and design tokens.",
    tags: ["HTML5", "CSS3", "JavaScript", "React Core"],
    liveUrl: "https://diyar-q4xh.vercel.app/",
    layout: "variant-right",
    mockClass: "diyar-mock",
    mockHtml: `
      <div class="browser-content diyar-mock">
        <div class="showroom-container">
          <div class="showroom-item">
            <div class="item-visual-box">🪑</div>
            <span class="item-name">Atelier Chair</span>
            <span class="item-price">Solid Oak</span>
          </div>
          <div class="showroom-item">
            <div class="item-visual-box">🪵</div>
            <span class="item-name">Oak Desk</span>
            <span class="item-price">Handcrafted</span>
          </div>
          <div class="showroom-item">
            <div class="item-visual-box">💡</div>
            <span class="item-name">Studio Light</span>
            <span class="item-price">Architectural</span>
          </div>
        </div>
      </div>
    `
  }
];

function renderProjects() {
  const container = document.getElementById('projects-list');
  if (!container) return;

  container.innerHTML = projectsData.map(proj => `
    <div class="project-card ${proj.layout} reveal" id="project-${proj.id}">
      
      <!-- Visual Browser Mockup (Large visual) -->
      <div class="project-visual-wrapper">
        <div class="mock-browser-window ${proj.mockClass}">
          <div class="browser-header">
            <div class="browser-dot"></div>
            <div class="browser-dot"></div>
            <div class="browser-dot"></div>
            <div class="browser-address-bar">${proj.liveUrl.replace('https://', '')}</div>
          </div>
          ${proj.mockHtml}
        </div>
      </div>

      <!-- Project Metadata & Descriptions -->
      <div class="project-details">
        <span class="project-number">${proj.num} /</span>
        <h3 class="project-title">${proj.title}</h3>
        <span class="section-tag" style="margin-bottom: 0.5rem; color: var(--text-secondary); font-size: 0.65rem;">
          ${proj.subtitle}
        </span>
        <p class="project-description">${proj.desc}</p>
        
        <div class="project-tags">
          ${proj.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>

        <div class="project-actions">
          <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-action-link link-underline">
            Visit Live <span class="arrow">↗</span>
          </a>
        </div>
      </div>

    </div>
  `).join('');
}

// Execute render on DOM content ready
document.addEventListener('DOMContentLoaded', renderProjects);
