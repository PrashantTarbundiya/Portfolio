/**
 * ==========================================================================
 * PRASHANT TARBUNDIYA — PORTFOLIO APPLICATION ENGINE (js/app.js)
 * Full-Stack Client Orchestrator
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Icons
  initLucideIcons();

  // 2. Set Current Dynamic Year in Footer
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 3. Navigation & Header Glass Scroll State
  initNavigation();

  // 4. Interactive Stat Counters on Viewport Scroll
  initStatCounters();

  // 5. Segmented Project Category Filtering
  initProjectFilters();

  // 6. Modal Systems (AuraPass Architecture & Project Specs)
  initModals();

  // 7. One-Click Copy Email & Glass Toast System
  initCopyEmail();

  // 8. Contact Form Validation & Mailto Fallback
  initContactForm();
});

/**
 * Initialize Lucide Icons safely
 */
function initLucideIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

/* ==========================================================================
   NAVIGATION & HEADER SCROLL SPY
   ========================================================================== */
function initNavigation() {
  const header = document.getElementById('site-header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const iconMenu = document.getElementById('toggle-icon-menu');
  const iconClose = document.getElementById('toggle-icon-close');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Header scroll appearance
  const onScroll = () => {
    if (window.scrollY > 25) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
    updateActiveNav();
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu drawer toggle
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = mobileDrawer.classList.contains('active');
      if (isActive) {
        closeMobileDrawer();
      } else {
        openMobileDrawer();
      }
    });

    // Close mobile drawer when a link is clicked
    mobileNavLinks.forEach((link) => {
      link.addEventListener('click', () => {
        closeMobileDrawer();
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (mobileDrawer.classList.contains('active') && !mobileDrawer.contains(e.target) && !mobileToggle.contains(e.target)) {
        closeMobileDrawer();
      }
    });
  }

  function openMobileDrawer() {
    mobileDrawer.classList.add('active');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    if (iconMenu) iconMenu.style.display = 'none';
    if (iconClose) iconClose.style.display = 'block';
  }

  function closeMobileDrawer() {
    mobileDrawer.classList.remove('active');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    if (iconMenu) iconMenu.style.display = 'block';
    if (iconClose) iconClose.style.display = 'none';
  }

  // Active section indicator (Scroll Spy)
  function updateActiveNav() {
    const sections = ['hero', 'stats', 'about', 'skills', 'projects', 'experience', 'achievements', 'contact'];
    const scrollPos = window.scrollY + 160;

    for (const id of sections) {
      const section = document.getElementById(id);
      if (!section) continue;

      const top = section.offsetTop;
      const height = section.offsetHeight;

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
        break;
      }
    }
  }
}

/* ==========================================================================
   INTERACTIVE STAT COUNTER ANIMATION
   ========================================================================== */
function initStatCounters() {
  const statsSection = document.getElementById('stats');
  const counterElements = document.querySelectorAll('.stat-counter');
  let animated = false;

  if (!statsSection || counterElements.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !animated) {
        animated = true;
        startCounters();
      }
    },
    { threshold: 0.2 }
  );

  observer.observe(statsSection);

  function startCounters() {
    counterElements.forEach((el) => {
      const target = parseFloat(el.getAttribute('data-target') || '0');
      const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
      const duration = 1800; // ms
      const startTime = performance.now();

      function step(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Exponential ease out
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const current = ease * target;

        if (decimals > 0) {
          el.textContent = current.toFixed(decimals);
        } else {
          const rounded = Math.floor(current);
          el.textContent = rounded >= 1000 ? rounded.toLocaleString() : rounded;
        }

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          if (decimals > 0) {
            el.textContent = target.toFixed(decimals);
          } else {
            el.textContent = target >= 1000 ? target.toLocaleString() : target;
          }
        }
      }

      requestAnimationFrame(step);
    });
  }
}

/* ==========================================================================
   SEGMENTED PROJECT CATEGORY FILTERING
   ========================================================================== */
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const selectedFilter = btn.getAttribute('data-filter') || 'all';

      // Update active tab states
      filterButtons.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Filter project cards with smooth fade
      projectCards.forEach((card) => {
        const categories = (card.getAttribute('data-category') || '').split(',');
        const isMatch = selectedFilter === 'all' || categories.includes(selectedFilter);

        if (isMatch) {
          card.style.display = '';
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.transition = 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 30);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   MODAL SYSTEMS (AURAPASS & PROJECT ARCHITECTURE DETAILS)
   ========================================================================== */
const PROJECT_DETAILS_DATA = {
  makechat: {
    badge: 'MERN Stack • Google Gemini • OpenRouter • RAG',
    title: 'MakeChat - Multi-Model AI Chat Platform',
    desc: 'A unified artificial intelligence platform orchestrating queries dynamically across multiple LLM providers with context-grounded document knowledge.',
    modules: [
      {
        title: 'Dynamic Multi-Model Routing',
        desc: 'Routes queries through a unified interface across Google Gemini, OpenRouter, Groq (Llama 3), and HuggingFace models depending on task requirements.',
      },
      {
        title: 'Retrieval-Augmented Generation (RAG)',
        desc: 'Parses PDF and DOCX document uploads, handles chunking and vector storage, allowing the AI to answer context-rich domain questions.',
      },
      {
        title: 'Authentication & Persistent Memory',
        desc: 'Secured with JWT and Google OAuth 2.0. Persists chat sessions, memory threads, and token analytics in MongoDB.',
      },
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'RAG Pipeline', 'Gemini API', 'Groq', 'JWT', 'Google OAuth 2.0'],
    github: 'https://github.com/prashanttarbundiya',
  },
  playback: {
    badge: 'MERN Stack • Cloudinary • Gemini API • OAuth 2.0',
    title: 'PlayBack - AI-Enabled Video Streaming Platform',
    desc: 'Production-grade video streaming platform engineered with modular REST APIs, multi-provider OAuth, Cloudinary optimization, and AI video summaries.',
    modules: [
      {
        title: 'Modular Streaming REST APIs',
        desc: 'Engineered REST endpoints for video ingestion, dynamic playlists, channel subscriptions, and nested commenting hierarchies.',
      },
      {
        title: 'Gemini Contextual Video Summarization',
        desc: 'Utilizes Gemini API to generate instant bullet summaries, detect key highlights, and power time-stamped contextual Q&A for viewers.',
      },
      {
        title: 'Multi-Provider OAuth 2.0',
        desc: 'Robust identity layer supporting single-sign-on through Google, Facebook, and GitHub with secure token management.',
      },
    ],
    tech: ['MERN Stack', 'Cloudinary CDN', 'Google Gemini AI', 'OAuth 2.0', 'REST APIs', 'JWT'],
    github: 'https://github.com/prashanttarbundiya',
  },
  scatch: {
    badge: 'MERN Stack • Security Microservice • Resend API',
    title: 'Scatch - E-Commerce Authentication Platform',
    desc: 'A high-security authentication microservice designed for e-commerce platforms, offering multi-factor email verification and bulletproof credential isolation.',
    modules: [
      {
        title: 'Modular MVC & Middleware Guards',
        desc: 'Structured with clean controller-middleware separation, protecting sensitive routes through JWT token inspection and brute-force rate-limiting.',
      },
      {
        title: 'Transactional OTP Verification',
        desc: 'Integrates Resend API for reliable, sub-second one-time passcode delivery to verify user emails on signup and password recovery.',
      },
      {
        title: 'MongoDB Atlas Aggregation',
        desc: 'Optimized schema design with TTL indexing for temporary tokens and instant cart hydration on authenticated sessions.',
      },
    ],
    tech: ['Node.js', 'Express.js', 'MongoDB Atlas', 'JWT', 'Resend API', 'MVC Architecture'],
    github: 'https://github.com/prashanttarbundiya',
  },
};

function initModals() {
  const auraModal = document.getElementById('aurapass-modal');
  const detailModal = document.getElementById('project-detail-modal');
  const detailHeader = document.getElementById('detail-modal-header');
  const detailContent = document.getElementById('dynamic-modal-content');

  // AuraPass Open Triggers
  const openAuraBtns = [
    document.getElementById('open-aurapass-modal'),
    ...document.querySelectorAll('.open-aurapass-btn'),
  ];

  openAuraBtns.forEach((btn) => {
    btn?.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(auraModal);
    });
  });

  // Generic Project Open Triggers
  const projectDetailBtns = document.querySelectorAll('.project-details-btn');
  projectDetailBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const key = btn.getAttribute('data-project');
      const data = PROJECT_DETAILS_DATA[key];

      if (data && detailHeader && detailContent) {
        populateProjectModal(data, detailHeader, detailContent);
        openModal(detailModal);
      }
    });
  });

  // Close triggers on both modals
  document.querySelectorAll('.modal-close').forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
      closeAllModals();
    });
  });

  // Backdrop click closes modal
  [auraModal, detailModal].forEach((modal) => {
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeAllModals();
      }
    });
  });

  // Keyboard Escape listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('active');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    initLucideIcons();
  }

  function closeAllModals() {
    [auraModal, detailModal].forEach((m) => {
      if (m) {
        m.classList.remove('active');
        m.classList.remove('open');
      }
    });
    document.body.style.overflow = '';
  }

  function populateProjectModal(data, headerEl, contentEl) {
    headerEl.innerHTML = `
      <span class="pill badge-lime" style="font-size: 11px;">SPECIFICATION</span>
      <h3 class="modal-title" style="font-size: 1.25rem;">${data.title}</h3>
    `;

    const modulesHtml = data.modules
      .map(
        (m, idx) => `
        <div class="arch-node" style="align-items: flex-start; text-align: left; padding: 16px; margin-bottom: 10px;">
          <span class="arch-node-title">PILLAR 0${idx + 1}</span>
          <h5 style="font-size: 13.5px; font-weight: 700; color: #fff; margin: 4px 0 6px 0;">${m.title}</h5>
          <p style="font-size: 12.5px; color: var(--text-sub); line-height: 1.5;">${m.desc}</p>
        </div>`
      )
      .join('');

    const tagsHtml = data.tech
      .map((t) => `<span class="tech-tag highlight">${t}</span>`)
      .join('');

    contentEl.innerHTML = `
      <p style="font-size: 14px; color: var(--text-sub); line-height: 1.6; margin-bottom: 16px;">
        ${data.desc}
      </p>

      <div style="margin-bottom: 20px;">
        <h4 style="font-family: var(--font-mono); font-size: 11.5px; color: var(--accent); text-transform: uppercase; margin-bottom: 12px;">
          Architectural Highlights
        </h4>
        ${modulesHtml}
      </div>

      <div style="margin-bottom: 20px;">
        <h4 style="font-family: var(--font-mono); font-size: 11.5px; color: var(--text-muted); text-transform: uppercase; margin-bottom: 10px;">
          Technology Stack
        </h4>
        <div class="tech-tags">${tagsHtml}</div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 14px; border-top: 1px solid var(--border);">
        <a href="${data.github}" target="_blank" class="btn btn-secondary btn-sm">
          <i data-lucide="github" style="width: 14px; height: 14px;"></i>
          <span>View Source Code</span>
        </a>
        <button class="btn btn-primary btn-sm modal-close">
          Done
        </button>
      </div>
    `;

    // Bind newly generated close button
    contentEl.querySelector('.modal-close')?.addEventListener('click', closeAllModals);
    initLucideIcons();
  }
}

/* ==========================================================================
   ONE-CLICK COPY EMAIL & TOAST NOTIFICATION ENGINE
   ========================================================================== */
function initCopyEmail() {
  const EMAIL = 'prashanttarbundiya2@gmail.com';
  const copyBtns = document.querySelectorAll('.copy-email-btn');

  copyBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard
          .writeText(EMAIL)
          .then(() => triggerCopyFeedback(btn))
          .catch(() => fallbackCopy(EMAIL, btn));
      } else {
        fallbackCopy(EMAIL, btn);
      }
    });
  });

  function fallbackCopy(text, btn) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try {
      document.execCommand('copy');
      triggerCopyFeedback(btn);
    } catch (err) {
      showToast('Notice', 'Unable to copy automatically.', 'error');
    }
    document.body.removeChild(ta);
  }

  function triggerCopyFeedback(btn) {
    const label = btn.querySelector('.copy-text');
    const prev = label ? label.textContent : null;

    if (label) label.textContent = 'Copied!';
    showToast('Copied to Clipboard!', EMAIL, 'success');

    setTimeout(() => {
      if (label && prev) label.textContent = prev;
    }, 2500);
  }
}

/**
 * Toast Notification using style.css .toast-container and .toast.show classes
 */
function showToast(title, message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast snack show';

  const iconName = type === 'success' ? 'check-circle' : 'alert-circle';
  toast.innerHTML = `
    <span class="toast-icon">
      <i data-lucide="${iconName}" style="width: 18px; height: 18px;"></i>
    </span>
    <div>
      <span style="font-weight: 700; color: #fff; margin-right: 4px;">${title}</span>
      <span style="color: var(--text-sub);">${message}</span>
    </div>
  `;

  container.appendChild(toast);
  initLucideIcons();

  // Auto remove after 3.2s
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentElement) {
        toast.parentElement.removeChild(toast);
      }
    }, 350);
  }, 3200);
}

/* ==========================================================================
   CONTACT FORM & CLIENT-SIDE VALIDATION
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('contact-submit-btn');
  const submitText = document.getElementById('submit-btn-text');
  const fallbackBtn = document.getElementById('mailto-fallback-btn');

  if (!form) return;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const subjectInput = document.getElementById('contact-subject');
    const messageInput = document.getElementById('contact-message');

    let valid = true;

    // Validate Name
    if (!nameInput.value.trim()) {
      markError(nameInput);
      valid = false;
    } else {
      unmarkError(nameInput);
    }

    // Validate Email
    if (!emailRegex.test(emailInput.value.trim())) {
      markError(emailInput);
      valid = false;
    } else {
      unmarkError(emailInput);
    }

    // Validate Subject
    if (!subjectInput.value.trim()) {
      markError(subjectInput);
      valid = false;
    } else {
      unmarkError(subjectInput);
    }

    // Validate Message
    if (!messageInput.value.trim()) {
      markError(messageInput);
      valid = false;
    } else {
      unmarkError(messageInput);
    }

    if (!valid) return;

    // Loading feedback
    if (submitBtn) submitBtn.disabled = true;
    if (submitText) submitText.textContent = 'Formatting Message...';

    setTimeout(() => {
      if (submitBtn) submitBtn.disabled = false;
      if (submitText) submitText.textContent = 'Send Message';

      showToast('Form Ready', 'Launching mail client...', 'success');

      const mailtoUrl = `mailto:prashanttarbundiya2@gmail.com?subject=${encodeURIComponent(
        subjectInput.value.trim()
      )}&body=${encodeURIComponent(
        `Hi Prashant,\n\nFrom: ${nameInput.value.trim()} (${emailInput.value.trim()})\n\n${messageInput.value.trim()}`
      )}`;

      window.location.href = mailtoUrl;
      form.reset();
    }, 600);
  });

  fallbackBtn?.addEventListener('click', () => {
    const name = document.getElementById('contact-name')?.value.trim() || 'Colleague';
    const subject = document.getElementById('contact-subject')?.value.trim() || 'Software Engineering Opportunity';
    const message = document.getElementById('contact-message')?.value.trim() || 'Hi Prashant,';

    const mailtoUrl = `mailto:prashanttarbundiya2@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`From: ${name}\n\n${message}`)}`;

    window.location.href = mailtoUrl;
  });

  function markError(input) {
    input.classList.add('error');
    const err = input.parentElement?.querySelector('.field-error-msg');
    if (err) err.classList.add('visible');
  }

  function unmarkError(input) {
    input.classList.remove('error');
    const err = input.parentElement?.querySelector('.field-error-msg');
    if (err) err.classList.remove('visible');
  }

  // Clear errors on typing
  form.querySelectorAll('input, textarea').forEach((field) => {
    field.addEventListener('input', () => unmarkError(field));
  });
}
