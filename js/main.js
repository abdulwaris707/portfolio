/**
 * Rebuilt Header, Menu & Scroll Intersection Observers
 * Abdul Waris — UI/UX Coordinator
 */

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // 2. Compact Header Scroll Class Toggle
  const header = document.querySelector('.header');
  const scrollTracker = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', scrollTracker);
  scrollTracker(); // Initial run

  // 3. Full-Screen Drawer Menu Panel for Mobile
  const navToggle = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const menuLinks = document.querySelectorAll('.nav-menu a'); // Selects all link anchors including the CTA

  if (navToggle && navMenu) {
    const toggleMenu = (open) => {
      const isOpen = open !== undefined ? open : !navMenu.classList.contains('active');
      navMenu.classList.toggle('active', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      
      // Lock background scrolling when menu drawer is active
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    // Dismiss panel on clicking links or CTA button
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        toggleMenu(false);
      });
    });

    // Dismiss panel on clicking outside the drawer region
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        toggleMenu(false);
      }
    });

    // Dismiss panel on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        toggleMenu(false);
      }
    });
  }

  // 4. Active Navigation Highlighting on Scroll (Intersection Observer)
  const sections = document.querySelectorAll('section[id]');
  const activeNavObserver = () => {
    if (sections.length === 0) return;

    const observerOptions = {
      root: null,
      threshold: 0.25, // Active when at least 25% is visible
      rootMargin: '-80px 0px -20% 0px' // Offset header height
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('id');
          const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
          
          if (correspondingLink) {
            navLinks.forEach(l => l.classList.remove('active'));
            correspondingLink.classList.add('active');
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(s => observer.observe(s));
  };
  
  activeNavObserver();

  // 5. Scroll Reveals Intersection Observer
  const revealElements = document.querySelectorAll('.reveal');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (revealElements.length > 0 && !prefersReduced) {
    const revealObserverOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -80px 0px'
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Trigger only once
        }
      });
    }, revealObserverOptions);

    revealElements.forEach(el => revealObserver.observe(el));
    
    // Make reveal observer globally accessible for dynamically rendered elements
    window.revealObserver = revealObserver;
  } else if (prefersReduced) {
    // Instantly activate reveals if user prefers reduced motion
    revealElements.forEach(el => el.classList.add('active'));
  }
});
