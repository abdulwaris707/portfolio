/**
 * Premium Web Developer Showcase & Gallery Lightbox Engine
 * Abdul Waris — Selected Projects Module
 */

const projectsData = [
  {
    number: "01 / 05",
    id: "nexora",
    name: "Nexora",
    tagline: "SaaS Analytics Dashboard",
    category: "dashboard",
    description: "A commercial-grade SaaS Analytics Dashboard web application designed with modern enterprise guidelines. Features interactive monthly area and donut charts, client-side SPA routing, dynamic range filters, and a global command search palette.",
    technologies: ["HTML", "CSS", "JavaScript", "Chart.js", "LocalStorage"],
    url: "https://nexora-wariz777.vercel.app/",
    layout: "layout-left",
    bgClass: "nexora-bg",
    screenshot: "projects/nexora/hero.png",
    caption: "Nexora SaaS Dashboard — Desktop Overview"
  },
  {
    number: "02 / 05",
    id: "velora",
    name: "Velora",
    tagline: "Personal Finance Manager",
    category: "dashboard",
    description: "A comprehensive personal finance application designed for real-time transactions logging, budget tracking, credit card utilization meters, and currency configurations.",
    technologies: ["HTML", "CSS", "JavaScript", "Chart.js", "LocalStorage"],
    url: "https://velora-wariz777.vercel.app/",
    layout: "layout-right",
    bgClass: "velora-bg",
    screenshot: "projects/velora/hero.png",
    caption: "Velora Personal Finance — Desktop Dashboard"
  },
  {
    number: "03 / 05",
    id: "lumora",
    name: "Lumora",
    tagline: "Premium Luxury E-Commerce",
    category: "e-commerce",
    description: "A refined luxury essentials e-commerce landing page and catalog platform built around quiet luxury branding, product discovery filters, and checkout cart drawers.",
    technologies: ["HTML", "CSS", "JavaScript", "Lucide Icons"],
    url: "https://lumora-tau-flax.vercel.app/",
    layout: "layout-left",
    bgClass: "lumora-bg",
    screenshot: "projects/lumora/hero.png",
    caption: "Lumora E-Commerce — Desktop Editorial Homepage"
  },
  {
    number: "04 / 05",
    id: "haven",
    name: "Haven",
    tagline: "Architecture & Property Marketplace",
    category: "real-estate",
    description: "A luxury real-estate property search marketplace and architectural catalog connecting buyer inquiries with advisors, location exploration guides, and seller profiles.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    url: "https://haven-blush.vercel.app/",
    layout: "layout-center",
    bgClass: "haven-bg",
    screenshot: "projects/haven/hero.png",
    caption: "Haven Real Estate — Desktop Property Discover Grid"
  },
  {
    number: "05 / 05",
    id: "diyar",
    name: "Diyar",
    tagline: "Solid Timber Showroom",
    category: "web",
    description: "A premium solid timber furniture atelier showroom website presenting workspace and furniture collections, material finishes, and workspace showrooms.",
    technologies: ["HTML", "CSS", "JavaScript", "React Core"],
    url: "https://diyar-q4xh.vercel.app/",
    layout: "layout-right",
    bgClass: "diyar-bg",
    screenshot: "projects/diyar/hero.png",
    caption: "Diyar Furniture Showroom — Desktop Atelier Collection"
  }
];

let activeIndex = 0;

function renderProjects(filterVal = 'all') {
  const container = document.getElementById('projects-list');
  if (!container) return;

  const filtered = filterVal === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filterVal);

  container.innerHTML = filtered.map((proj, idx) => `
    <div class="project-wrapper ${proj.bgClass} reveal" id="project-${proj.id}">
      <div class="project-fold ${proj.layout}">
        
        <!-- Large Mockup Screenshot Visual -->
        <div class="project-visual-wrapper" data-proj-id="${proj.id}" data-global-idx="${projectsData.indexOf(proj)}">
          <div class="browser-mockup">
            <div class="browser-header">
              <span class="dot red"></span>
              <span class="dot yellow"></span>
              <span class="dot green"></span>
              <div class="browser-address">localhost:3000/${proj.id}</div>
            </div>
            <img src="${proj.screenshot}" alt="${proj.caption}" class="browser-screenshot" loading="lazy">
          </div>
          <div class="hover-overlay-hint">
            <span class="overlay-badge">
              <i data-lucide="zoom-in" style="width: 14px; height: 14px;"></i> View Screenshot ↗
            </span>
          </div>
        </div>

        <!-- Project Info -->
        <div class="project-info">
          <span class="project-num">${proj.number}</span>
          <span class="project-tagline">${proj.tagline}</span>
          <h3 class="project-title">${proj.name}</h3>
          <p class="project-desc">${proj.description}</p>
          
          <div class="project-tech-tags">
            ${proj.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>

          <div class="project-links">
            <a href="${proj.url}" target="_blank" rel="noopener noreferrer" class="visit-link link-underline">
              View Live <span class="arrow">↗</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  `).join('');

  // Re-run Lucide icons mapping inside the newly added DOM elements
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Hydrate scroll trigger observers
  setTimeout(() => {
    const revealElements = container.querySelectorAll('.reveal');
    if (window.revealObserver) {
      revealElements.forEach(el => window.revealObserver.observe(el));
    } else {
      revealElements.forEach(el => el.classList.add('active'));
    }
  }, 50);

  bindLightboxEvents();
}

function bindLightboxEvents() {
  const visualWrappers = document.querySelectorAll('.project-visual-wrapper');
  visualWrappers.forEach(wrapper => {
    wrapper.addEventListener('click', () => {
      activeIndex = parseInt(wrapper.getAttribute('data-global-idx')) || 0;
      openLightbox();
    });
  });
}

function openLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  updateLightboxContent();
  lightbox.classList.add('active');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden'; // Scroll lock
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  lightbox.classList.remove('active');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = ''; // Release lock
}

function updateLightboxContent() {
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  
  if (!lightboxImg || !lightboxCaption) return;

  const currentItem = projectsData[activeIndex];
  lightboxImg.src = currentItem.screenshot;
  lightboxImg.alt = currentItem.caption;
  lightboxCaption.textContent = `${currentItem.name} — ${currentItem.tagline}`;
}

function navigateLightbox(direction) {
  if (direction === 'next') {
    activeIndex = (activeIndex + 1) % projectsData.length;
  } else {
    activeIndex = (activeIndex - 1 + projectsData.length) % projectsData.length;
  }
  updateLightboxContent();
}

// Initialization and triggers
document.addEventListener('DOMContentLoaded', () => {
  renderProjects('all');

  // Filter handlers
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderProjects(filter);
    });
  });

  // Lightbox Close/Prev/Next buttons
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  const lightbox = document.getElementById('lightbox');

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', () => navigateLightbox('prev'));
  if (nextBtn) nextBtn.addEventListener('click', () => navigateLightbox('next'));
  
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowRight') {
      navigateLightbox('next');
    } else if (e.key === 'ArrowLeft') {
      navigateLightbox('prev');
    }
  });
});
