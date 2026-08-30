/**
 * Rebuilt Editorial Project Showcase & Lightbox Engine
 * Abdul Waris — Selected Work Module
 */

const projectsData = [
  {
    number: "01",
    id: "nexora",
    name: "Nexora",
    tagline: "SaaS Analytics Dashboard",
    category: "dashboard",
    description: "A commercial-grade SaaS Analytics Dashboard web application designed with modern enterprise guidelines. Features interactive monthly area and donut charts, client-side SPA routing, dynamic range filters, and a global command search palette.",
    technologies: ["HTML", "CSS", "JavaScript", "Chart.js", "LocalStorage"],
    url: "https://nexora-wariz777.vercel.app/",
    layout: "layout-left",
    screenshots: [
      { src: "projects/nexora/hero.png", caption: "Nexora SaaS Dashboard — Desktop Overview" },
      { src: "projects/nexora/mobile.png", caption: "Nexora SaaS Dashboard — Mobile Responsive Layout" }
    ]
  },
  {
    number: "02",
    id: "velora",
    name: "Velora",
    tagline: "Personal Finance Manager",
    category: "dashboard",
    description: "A comprehensive personal finance application designed for real-time transactions logging, budget tracking, credit card utilization meters, and currency configurations.",
    technologies: ["HTML", "CSS", "JavaScript", "Chart.js", "LocalStorage"],
    url: "https://velora-wariz777.vercel.app/",
    layout: "layout-right",
    screenshots: [
      { src: "projects/velora/hero.png", caption: "Velora Personal Finance — Desktop Dashboard" },
      { src: "projects/velora/mobile.png", caption: "Velora Personal Finance — Mobile Transaction Logging" }
    ]
  },
  {
    number: "03",
    id: "lumora",
    name: "Lumora",
    tagline: "Premium Luxury E-Commerce",
    category: "e-commerce",
    description: "A refined luxury essentials e-commerce landing page and catalog platform built around quiet luxury branding, product discovery filters, and checkout cart drawers.",
    technologies: ["HTML", "CSS", "JavaScript", "Lucide Icons"],
    url: "https://lumora-tau-flax.vercel.app/",
    layout: "layout-left",
    screenshots: [
      { src: "projects/lumora/hero.png", caption: "Lumora E-Commerce — Desktop Editorial Homepage" },
      { src: "projects/lumora/mobile.png", caption: "Lumora E-Commerce — Mobile Shop Catalog View" }
    ]
  },
  {
    number: "04",
    id: "haven",
    name: "Haven",
    tagline: "Architecture & Property Marketplace",
    category: "real-estate",
    description: "A luxury real-estate property search marketplace and architectural catalog connecting buyer inquiries with advisors, location exploration guides, and seller profiles.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    url: "https://haven-blush.vercel.app/",
    layout: "layout-center",
    screenshots: [
      { src: "projects/haven/hero.png", caption: "Haven Real Estate — Desktop Property Discover Grid" },
      { src: "projects/haven/mobile.png", caption: "Haven Real Estate — Mobile Advisor Portfolios" }
    ]
  },
  {
    number: "05",
    id: "diyar",
    name: "Diyar",
    tagline: "Solid Timber Showroom",
    category: "web",
    description: "A premium solid timber furniture atelier showroom website presenting workspace and furniture collections, material finishes, and workspace showrooms.",
    technologies: ["HTML", "CSS", "JavaScript", "React Core"],
    url: "https://diyar-q4xh.vercel.app/",
    layout: "layout-right",
    screenshots: [
      { src: "projects/diyar/hero.png", caption: "Diyar Furniture Showroom — Desktop Atelier Collection" },
      { src: "projects/diyar/mobile.png", caption: "Diyar Furniture Showroom — Mobile Room Space Showcase" }
    ]
  }
];

// Active state variables for Lightbox
let activeGallery = [];
let activeIndex = 0;

function renderProjects(filterVal = 'all') {
  const container = document.getElementById('projects-list');
  if (!container) return;

  const filtered = filterVal === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filterVal);

  container.innerHTML = filtered.map(proj => `
    <div class="project-fold ${proj.layout} reveal" id="project-${proj.id}">
      
      <!-- Large Screenshot Visual Frame -->
      <div class="project-visual-wrapper" data-proj-id="${proj.id}">
        <span class="hover-zoom-badge">View Gallery ↗</span>
        <div class="screenshot-container">
          <img src="${proj.screenshots[0].src}" alt="${proj.screenshots[0].caption}" class="main-screenshot" data-index="0">
          <div class="mobile-screenshot-overlay">
            <img src="${proj.screenshots[1].src}" alt="${proj.screenshots[1].caption}" class="mobile-screenshot" data-index="1">
          </div>
        </div>
      </div>

      <!-- Project Metadata Column -->
      <div class="project-info">
        <span class="project-num">${proj.number} /</span>
        <h3 class="project-title">${proj.name}</h3>
        <span class="project-tagline">${proj.tagline}</span>
        <p class="project-desc">${proj.description}</p>
        
        <div class="project-tech-tags">
          ${proj.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>

        <div class="project-links">
          <a href="${proj.url}" target="_blank" rel="noopener noreferrer" class="visit-link link-underline">
            Visit Live <span class="arrow">↗</span>
          </a>
        </div>
      </div>

    </div>
  `).join('');

  // Re-hydrate reveal animations
  setTimeout(() => {
    const revealElements = container.querySelectorAll('.reveal');
    if (typeof revealObserver !== 'undefined') {
      revealElements.forEach(el => revealObserver.observe(el));
    } else {
      revealElements.forEach(el => el.classList.add('active'));
    }
  }, 50);

  // Bind Lightbox triggers on screenshot clicks
  bindLightboxEvents();
}

function bindLightboxEvents() {
  const visualWrappers = document.querySelectorAll('.project-visual-wrapper');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');

  visualWrappers.forEach(wrapper => {
    const projId = wrapper.getAttribute('data-proj-id');
    const proj = projectsData.find(p => p.id === projId);
    if (!proj) return;

    // Listen to image clicks inside this visual wrapper
    const images = wrapper.querySelectorAll('img');
    images.forEach(img => {
      img.addEventListener('click', (e) => {
        e.stopPropagation();
        const clickedIndex = parseInt(img.getAttribute('data-index')) || 0;
        
        activeGallery = proj.screenshots;
        activeIndex = clickedIndex;
        
        openLightbox();
      });
    });
  });
}

function openLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  updateLightboxContent();
  lightbox.classList.add('active');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden'; // Lock back scroll
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  lightbox.classList.remove('active');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = ''; // Release scroll lock
}

function updateLightboxContent() {
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  
  if (!lightboxImg || !lightboxCaption || activeGallery.length === 0) return;

  const currentItem = activeGallery[activeIndex];
  lightboxImg.src = currentItem.src;
  lightboxImg.alt = currentItem.caption;
  lightboxCaption.textContent = currentItem.caption;
}

function navigateLightbox(direction) {
  if (activeGallery.length === 0) return;
  
  if (direction === 'next') {
    activeIndex = (activeIndex + 1) % activeGallery.length;
  } else {
    activeIndex = (activeIndex - 1 + activeGallery.length) % activeGallery.length;
  }
  updateLightboxContent();
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
  renderProjects('all');

  // Filter click handlers
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

  // Keyboards controls (Escape, Left/Right arrows)
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
