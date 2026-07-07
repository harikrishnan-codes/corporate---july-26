document.addEventListener('DOMContentLoaded', () => {
  const headerElement = document.querySelector('.site-header');
  const hamburgerButton = document.querySelector('.hamburger-toggle');
  const navLinks = document.querySelectorAll('.nav-link');

  // 1. Core Mobile Menu Toggle Functionality
  if (hamburgerButton) {
    hamburgerButton.addEventListener('click', () => {
      document.body.classList.toggle('menu-open');
    });
  }

  // 2. Active Link State Tracking Engine
  navLinks.forEach(clickedLink => {
    clickedLink.addEventListener('click', (event) => {
      // Clear active indicator styles from all menu links
      navLinks.forEach(link => {
        link.classList.remove('active');
        link.classList.add('passive');
      });

      // Apply active highlight to the selection target
      clickedLink.classList.remove('passive');
      clickedLink.classList.add('active');

      // Auto-collapse mobile drawer overlay when navigating away
      if (document.body.classList.contains('menu-open')) {
        document.body.classList.remove('menu-open');
      }
    });
  });

  // 3. Header Compression / Glow Adjustment on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      headerElement.classList.add('scrolled');
    } else {
      headerElement.classList.remove('scrolled');
    }
  });
});









// hero js

// Append this initialization handler smoothly inside your DOMContentLoaded block in script.js:
const bgSlides = document.querySelectorAll('.hero-bg-slider .slide-img');
const textSlides = document.querySelectorAll('.headline-frame-wrapper .slide-headline');
const currentStepText = document.getElementById('current-step');

let currentSlideIndex = 0;
const totalSlidesCount = bgSlides.length;
const rotationDurationInterval = 5000; // Change every 5 seconds seamlessly

function advancePremiumHeroTimeline() {
  // 1. Terminate current active presentation tracking flag configurations
  bgSlides[currentSlideIndex].classList.remove('active');
  textSlides[currentSlideIndex].classList.remove('active');

  // 2. Increment cycle safely matching array lengths loops
  currentSlideIndex = (currentSlideIndex + 1) % totalSlidesCount;

  // 3. Flag next upcoming visual segment references as active targets
  bgSlides[currentSlideIndex].classList.add('active');
  textSlides[currentSlideIndex].classList.add('active');

  // 4. Transform fractional step indicator tracking elements gracefully
  if (currentStepText) {
    currentStepText.textContent = String(currentSlideIndex + 1).padStart(2, '0');
  }
}

// Fire automated loop timer cycle if components are detected present on render canvas
if (bgSlides.length > 0 && textSlides.length > 0) {
  setInterval(advancePremiumHeroTimeline, rotationDurationInterval);
}










// about js 

// Initialize automated image slide rotation tracking engine loops
const aboutSlides = document.querySelectorAll('.about-image-slider .about-slide');
let currentAboutSlideIndex = 0;
const aboutRotationInterval = 4500; // Rotates beautifully every 4.5 seconds

function rotateAboutVisualTimeline() {
  if (aboutSlides.length === 0) return;

  // 1. Flush previous style layers
  aboutSlides[currentAboutSlideIndex].classList.remove('active');

  // 2. Increment pointer matrix index addresses
  currentAboutSlideIndex = (currentAboutSlideIndex + 1) % aboutSlides.length;

  // 3. Inject active assignment flag attributes on target elements
  aboutSlides[currentAboutSlideIndex].classList.add('active');
}

// Fire automated interval tracker if instances load securely on target canvas
if (aboutSlides.length > 0) {
  setInterval(rotateAboutVisualTimeline, aboutRotationInterval);
}









// testimonial js 

// Initialize automated testimonial slide carousel loops
const reviewSlides = document.querySelectorAll('.testimonial-carousel-wrapper .testimonial-slide');
const indicatorPips = document.querySelectorAll('.testimonial-pip-navigation .nav-pip');
let currentReviewIndex = 0;
const reviewRotationInterval = 6000; // Rotates smoothly every 6 seconds

function advancePremiumTestimonialTimeline() {
  if (reviewSlides.length === 0) return;

  // 1. Flush previous active element styling configurations
  reviewSlides[currentReviewIndex].classList.remove('active');
  if (indicatorPips.length > 0) {
    indicatorPips[currentReviewIndex].classList.remove('active');
  }

  // 2. Increment cycle safely matching array targets
  currentReviewIndex = (currentReviewIndex + 1) % reviewSlides.length;

  // 3. Inject new active flags onto current components
  reviewSlides[currentReviewIndex].classList.add('active');
  if (indicatorPips.length > 0) {
    indicatorPips[currentReviewIndex].classList.add('active');
  }
}

// Enable interactive link jumping directly via pip clicks
indicatorPips.forEach((pip, clickedIndex) => {
  pip.addEventListener('click', () => {
    reviewSlides[currentReviewIndex].classList.remove('active');
    indicatorPips[currentReviewIndex].classList.remove('active');
    
    currentReviewIndex = clickedIndex;
    
    reviewSlides[currentReviewIndex].classList.add('active');
    indicatorPips[currentReviewIndex].classList.add('active');
  });
});

// Run automated interval cycles if elements successfully initialize on canvas
if (reviewSlides.length > 0) {
  setInterval(advancePremiumTestimonialTimeline, reviewRotationInterval);
}








// faq js 

// Initialize interactive FAQ item accordions inside global script loops
const accordionTriggers = document.querySelectorAll('.accordion-trigger');

accordionTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const parentItemNode = trigger.parentElement;
    const contentPanelWrapper = parentItemNode.querySelector('.accordion-panel-wrapper');
    const isCurrentlyActive = parentItemNode.classList.contains('active-item');

    // Optional: Collapse all alternative open accordion items first (Single Open Mode)
    document.querySelectorAll('.faq-accordion-item').forEach(item => {
      item.classList.remove('active-item');
      item.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
      item.querySelector('.accordion-panel-wrapper').style.maxHeight = null;
    });

    // If the clicked item wasn't open, cycle it to expand active metrics state
    if (!isCurrentlyActive) {
      parentItemNode.classList.add('active-item');
      trigger.setAttribute('aria-expanded', 'true');
      // Read the scrollHeight of content nodes dynamically for accurate transition calculations
      contentPanelWrapper.style.maxHeight = contentPanelWrapper.scrollHeight + "px";
    }
  });
});









// footer js 

document.addEventListener('DOMContentLoaded', () => {
  const headerElement = document.querySelector('.site-header');
  const hamburgerButton = document.querySelector('.hamburger-toggle');
  const navLinks = document.querySelectorAll('.nav-link');

  // ==========================================================================
  // 1. DYNAMIC URL STATE ROUTING ENGINE (FIXES THE FOOTER HIGHLIGHT ISSUE)
  // ==========================================================================
  // Get the current path filename from the browser location bar (e.g., "about.html")
  let currentPath = window.location.pathname.split('/').pop();
  
  // Default routing fallback state for standard index paths
  if (currentPath === "" || currentPath === "index.html") {
    currentPath = "index.html";
  }

  // Evaluate and dynamically flag tracking selectors cross-component
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    
    if (linkPath === currentPath) {
      link.classList.add('active');
      link.classList.remove('passive');
    } else {
      link.classList.add('passive');
      link.classList.remove('active');
    }
  });

  // ==========================================================================
  // 2. MOBILE MENU DRAWER OVERLAY TOGGLE
  // ==========================================================================
  if (hamburgerButton) {
    hamburgerButton.addEventListener('click', () => {
      document.body.classList.toggle('menu-open');
    });
  }

  // Auto-collapse responsive panels when a user clicks any tracking link route node
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (document.body.classList.contains('menu-open')) {
        document.body.classList.remove('menu-open');
      }
    });
  });

  // ==========================================================================
  // 3. DESKTOP SCROLL COMPRESSION ACTIONS
  // ==========================================================================
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      headerElement.classList.add('scrolled');
    } else {
      headerElement.classList.remove('scrolled');
    }
  });
});











// aos js 

document.addEventListener('DOMContentLoaded', () => {
  const headerElement = document.querySelector('.site-header');
  const hamburgerButton = document.querySelector('.hamburger-toggle');
  const navLinks = document.querySelectorAll('.nav-link');

  // 1. Mobile Menu Toggle Selector Mechanics
  if (hamburgerButton) {
    hamburgerButton.addEventListener('click', () => {
      document.body.classList.toggle('menu-open');
    });
  }

  // 2. Multi-Sync Active Link State Track System
  navLinks.forEach(clickedLink => {
    clickedLink.addEventListener('click', () => {
      const targetText = clickedLink.textContent.trim();

      // Flush out state highlight markers across both Header and Footer
      navLinks.forEach(link => {
        link.classList.remove('active');
        link.classList.add('passive');
      });

      // Synchronize matching navigation nodes internally
      navLinks.forEach(link => {
        if (link.textContent.trim() === targetText) {
          link.classList.remove('passive');
          link.classList.add('active');
        }
      });

      // Auto-collapse single layout mobile view drawer on link click
      if (document.body.classList.contains('menu-open')) {
        document.body.classList.remove('menu-open');
      }
    });
  });

  // 3. Desktop Header Structural Compression Scroller Hook
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      headerElement.classList.add('scrolled');
    } else {
      headerElement.classList.remove('scrolled');
    }
  });
});