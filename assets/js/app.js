/**
 * Nike-Inspired Bilingual Editorial Personal Homepage Runtime
 * Zero dependencies · Works via file:// or GitHub Pages
 */
(function () {
  "use strict";

  const data = window.SITE_DATA;
  if (!data) return;

  const state = {
    lang: (data.meta && data.meta.defaultLang) || "en",
    projectFilter: "all",
    galleryFilter: "featured",
    lightboxIndex: -1,
    emailVisible: false,
    messageOpen: false,
    activeNavId: "about"
  };

  function t(val) {
    if (val == null) return "";
    if (typeof val === "string") return val;
    return val[state.lang] || val.zh || val.en || "";
  }

  function listOf(val) {
    if (Array.isArray(val)) return val;
    if (val && Array.isArray(val[state.lang])) return val[state.lang];
    if (val && Array.isArray(val.zh)) return val.zh;
    return [];
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  /* ------------------------------------------------------------------------
     1. Utility Bar & Sticky Main Header
     ------------------------------------------------------------------------ */
  function renderHeader() {
    document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
    document.title = t(data.meta.title);

    const utilityNote = document.getElementById("utility-note");
    if (utilityNote) utilityNote.textContent = t(data.meta.utilityNote);

    const utilityContact = document.getElementById("utility-contact");
    if (utilityContact) utilityContact.textContent = t(data.meta.headerCta);

    const brandEl = document.getElementById("site-brand");
    if (brandEl) brandEl.textContent = t(data.meta.brand);

    const headerCta = document.getElementById("header-cta");
    if (headerCta) headerCta.textContent = t(data.meta.headerCta);

    const navList = document.getElementById("nav-list");
    if (navList) {
      navList.innerHTML = data.nav
        .map((item) => {
          const activeClass = state.activeNavId === item.id ? " is-active" : "";
          return `<li><a class="nav-link${activeClass}" href="#${escapeHtml(item.id)}" data-section="${escapeHtml(item.id)}">${escapeHtml(t(item.label))}</a></li>`;
        })
        .join("");
    }

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.lang === state.lang));
    });
  }

  /* ------------------------------------------------------------------------
     2. Nike Full-Bleed Dual Photographic Hero
     ------------------------------------------------------------------------ */
  function renderHero() {
    const el = document.getElementById("top");
    if (!el || !data.hero) return;
    const h = data.hero;

    el.innerHTML = `
      <div class="hero-stage">
        <div class="hero-stage__pane">
          <img class="hero-stage__img" src="${escapeHtml(h.primaryImage)}" alt="${escapeHtml(t(h.primaryAlt))}" style="object-position: center 22%;" />
        </div>
        <div class="hero-stage__pane hero-stage__pane--secondary">
          <img class="hero-stage__img" src="${escapeHtml(h.secondaryImage)}" alt="${escapeHtml(t(h.secondaryAlt))}" style="object-position: center 22%;" />
        </div>
        <div class="hero-stage__scrim" aria-hidden="true"></div>
        <div class="hero-overlay">
          <div class="hero-overlay__content">
            <p class="hero-eyebrow">${escapeHtml(t(h.eyebrow))}</p>
            <h1 class="hero-title">${escapeHtml(t(h.headline))}</h1>
            <p class="hero-subtitle">${escapeHtml(t(h.subtitle))}</p>
            <div class="hero-actions">
              <a class="pill-btn pill-btn--light" href="#projects">${escapeHtml(t(h.primaryCta))}</a>
              <a class="pill-btn pill-btn--ghost-light" href="#gallery">${escapeHtml(t(h.secondaryCta))}</a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  /* ------------------------------------------------------------------------
     3. Nike Centered Manifesto + Impact Metrics (#about)
     ------------------------------------------------------------------------ */
  function renderAbout() {
    const el = document.getElementById("about");
    if (!el) return;

    const paragraphs = listOf(data.about.paragraphs)
      .map((p) => `<p>${p}</p>`)
      .join("");

    const metricsHtml = (data.about.metrics || [])
      .map(
        (m) => `
        <div class="metric-card">
          <div class="metric-card__value">${escapeHtml(t(m.value))}</div>
          <div class="metric-card__label">${escapeHtml(t(m.label))}</div>
        </div>`
      )
      .join("");

    const metaTags = (data.profile.links || [])
      .slice(0, 3)
      .map((l) => `<span>${escapeHtml(t(l.label))}</span>`)
      .join("");

    const headline =
      state.lang === "zh"
        ? "把复杂技术转化为可传播、可销售、可沉淀的品牌资产"
        : "Translating Complex Technology Into Compounding Brand Equity";

    el.innerHTML = `
      <div class="container">
        <div class="manifesto">
          <p class="manifesto__eyebrow">${escapeHtml(t(data.about.sub))} · ${escapeHtml(t(data.about.heading))}</p>
          <h2 class="manifesto__headline">${escapeHtml(headline)}</h2>
          <div class="manifesto__body">${paragraphs}</div>
          <div class="manifesto__meta">${metaTags}</div>
        </div>
        <div class="metrics-grid">${metricsHtml}</div>
      </div>
    `;
  }

  /* ------------------------------------------------------------------------
     4. Nike 50/50 Dual Visual Campaign Tiles (#spotlight)
     ------------------------------------------------------------------------ */
  function renderSpotlight() {
    const el = document.getElementById("spotlight");
    if (!el || !data.spotlight) return;

    const tilesHtml = data.spotlight
      .map(
        (tile) => `
        <article class="spotlight-tile">
          <img class="spotlight-tile__img" src="${escapeHtml(tile.image)}" alt="${escapeHtml(t(tile.title))}" style="object-position:${escapeHtml(tile.pos || "center 20%")}" />
          <div class="spotlight-tile__scrim" aria-hidden="true"></div>
          <div class="spotlight-tile__content">
            <p class="spotlight-tile__eyebrow">${escapeHtml(t(tile.eyebrow))}</p>
            <h3 class="spotlight-tile__title">${escapeHtml(t(tile.title))}</h3>
            <button type="button" class="pill-btn pill-btn--light pill-btn--sm spotlight-cta" data-gallery-target="${escapeHtml(tile.galleryFilter)}">
              ${escapeHtml(t(tile.cta))}
            </button>
          </div>
        </article>`
      )
      .join("");

    el.innerHTML = `
      <div class="container">
        <div class="spotlight-grid">${tilesHtml}</div>
      </div>
    `;

    el.querySelectorAll(".spotlight-cta").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.galleryFilter = btn.dataset.galleryTarget || "featured";
        state.lightboxIndex = -1;
        renderGallery();
        renderLightbox();
        const target = document.getElementById("gallery");
        if (target) target.scrollIntoView({ behavior: "smooth" });
      });
    });
  }

  /* ------------------------------------------------------------------------
     5. Personal Image Carousel & Grid (#gallery)
     ------------------------------------------------------------------------ */
  function getFilteredGalleryItems() {
    const items = (data.gallery && data.gallery.items) || [];
    if (state.galleryFilter === "all") return items;
    if (state.galleryFilter === "featured") return items.filter((item) => item.featured);
    return items.filter((item) => item.category === state.galleryFilter);
  }

  function renderGallery() {
    const el = document.getElementById("gallery");
    if (!el || !data.gallery) return;

    const isCarousel = state.galleryFilter === "featured";

    const filtersHtml = (data.gallery.filters || [])
      .map((f) => {
        const active = state.galleryFilter === f.id;
        return `<button type="button" class="filter-pill gallery-filter-pill" data-filter="${escapeHtml(f.id)}" aria-pressed="${active}">${escapeHtml(t(f.label))}</button>`;
      })
      .join("");

    const arrowsHtml = isCarousel
      ? `
        <div class="carousel-arrows">
          <button type="button" class="carousel-btn" id="gal-prev" aria-label="${state.lang === "zh" ? "向左滚动" : "Scroll left"}">&#8249;</button>
          <button type="button" class="carousel-btn" id="gal-next" aria-label="${state.lang === "zh" ? "向右滚动" : "Scroll right"}">&#8250;</button>
        </div>`
      : "";

    const items = getFilteredGalleryItems();
    const cardsHtml = items
      .map((item, idx) => {
        const caption = t(item.caption);
        const pos = item.pos || "center 20%";
        return `
          <button type="button" class="gallery-card" data-gallery-idx="${idx}" aria-label="${escapeHtml(caption)}">
            <span class="gallery-card__frame">
              <img class="gallery-card__img" src="${escapeHtml(item.src)}" alt="${escapeHtml(caption)}" style="object-position:${escapeHtml(pos)}" loading="lazy" />
            </span>
            <span class="gallery-card__caption">${escapeHtml(caption)}</span>
          </button>
        `;
      })
      .join("");

    const containerClass = isCarousel ? "gallery-track" : "gallery-grid";

    el.innerHTML = `
      <div class="container">
        <div class="section-bar">
          <div>
            <p class="section-bar__eyebrow">${escapeHtml(t(data.gallery.sub))}</p>
            <h2 class="section-bar__title">${escapeHtml(t(data.gallery.heading))}</h2>
          </div>
          <div class="section-bar__controls">
            <div class="filter-bar" role="group" aria-label="${escapeHtml(t(data.gallery.heading))}">
              ${filtersHtml}
            </div>
            ${arrowsHtml}
          </div>
        </div>
        <p class="gallery-intro">${escapeHtml(t(data.gallery.intro))}</p>
        <div class="${containerClass}" id="gallery-viewport">${cardsHtml}</div>
      </div>
    `;

    el.querySelectorAll(".gallery-filter-pill").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.galleryFilter = btn.dataset.filter;
        state.lightboxIndex = -1;
        renderGallery();
        renderLightbox();
        animateFilterItems("#gallery .gallery-card");
      });
    });

    el.querySelectorAll(".gallery-card").forEach((card) => {
      card.addEventListener("click", () => {
        state.lightboxIndex = Number(card.dataset.galleryIdx);
        renderLightbox();
      });
    });

    if (isCarousel) {
      const track = document.getElementById("gallery-viewport");
      const prevBtn = document.getElementById("gal-prev");
      const nextBtn = document.getElementById("gal-next");
      if (track && prevBtn && nextBtn) {
        const step = () => Math.max(300, Math.round(track.clientWidth * 0.72));
        prevBtn.addEventListener("click", () => {
          track.scrollBy({ left: -step(), behavior: "smooth" });
        });
        nextBtn.addEventListener("click", () => {
          track.scrollBy({ left: step(), behavior: "smooth" });
        });
      }
    }
  }

  function renderLightbox() {
    const box = document.getElementById("lightbox");
    if (!box) return;

    const items = getFilteredGalleryItems();
    if (state.lightboxIndex < 0 || state.lightboxIndex >= items.length) {
      box.hidden = true;
      box.innerHTML = "";
      document.body.style.overflow = "";
      return;
    }

    const item = items[state.lightboxIndex];
    const caption = t(item.caption);
    const closeLabel = state.lang === "zh" ? "关闭预览" : "Close preview";
    const prevLabel = state.lang === "zh" ? "上一张" : "Previous image";
    const nextLabel = state.lang === "zh" ? "下一张" : "Next image";

    box.hidden = false;
    document.body.style.overflow = "hidden";
    box.innerHTML = `
      <button type="button" class="lightbox__close" id="lb-close" aria-label="${escapeHtml(closeLabel)}">&times;</button>
      <button type="button" class="lightbox__nav lightbox__nav--prev" id="lb-prev" aria-label="${escapeHtml(prevLabel)}">&#8249;</button>
      <div class="lightbox__dialog">
        <img class="lightbox__img" src="${escapeHtml(item.src)}" alt="${escapeHtml(caption)}" />
        <div class="lightbox__bar">
          <span>${escapeHtml(caption)}</span>
          <span class="lightbox__counter">${state.lightboxIndex + 1} / ${items.length}</span>
        </div>
      </div>
      <button type="button" class="lightbox__nav lightbox__nav--next" id="lb-next" aria-label="${escapeHtml(nextLabel)}">&#8250;</button>
    `;

    document.getElementById("lb-close").addEventListener("click", () => {
      state.lightboxIndex = -1;
      renderLightbox();
    });
    document.getElementById("lb-prev").addEventListener("click", () => {
      state.lightboxIndex = (state.lightboxIndex - 1 + items.length) % items.length;
      renderLightbox();
    });
    document.getElementById("lb-next").addEventListener("click", () => {
      state.lightboxIndex = (state.lightboxIndex + 1) % items.length;
      renderLightbox();
    });

    box.onclick = (event) => {
      if (event.target === box) {
        state.lightboxIndex = -1;
        renderLightbox();
      }
    };

    if (window.gsap && !prefersReducedMotion()) {
      window.gsap.from(".lightbox__dialog", {
        scale: 0.95,
        autoAlpha: 0,
        duration: 0.28,
        ease: "power2.out",
        clearProps: "transform,opacity,visibility"
      });
    }
  }

  function bindLightboxKeyboard() {
    document.addEventListener("keydown", (event) => {
      if (state.lightboxIndex < 0) return;
      const items = getFilteredGalleryItems();
      if (!items.length) return;
      if (event.key === "Escape") {
        state.lightboxIndex = -1;
        renderLightbox();
      } else if (event.key === "ArrowLeft") {
        state.lightboxIndex = (state.lightboxIndex - 1 + items.length) % items.length;
        renderLightbox();
      } else if (event.key === "ArrowRight") {
        state.lightboxIndex = (state.lightboxIndex + 1) % items.length;
        renderLightbox();
      }
    });
  }

  /* ------------------------------------------------------------------------
     6. Selected Projects (#projects)
     ------------------------------------------------------------------------ */
  function renderProjects() {
    const el = document.getElementById("projects");
    if (!el) return;

    const filtersHtml = (data.projects.filters || [])
      .map((f) => {
        const active = state.projectFilter === f.id;
        return `<button type="button" class="filter-pill proj-filter-pill" data-filter="${escapeHtml(f.id)}" aria-pressed="${active}">${escapeHtml(t(f.label))}</button>`;
      })
      .join("");

    const items = (data.projects.items || []).filter(
      (item) => state.projectFilter === "all" || item.category === state.projectFilter
    );

    const cardsHtml = items
      .map((proj, idx) => {
        const featuredClass = items.length % 2 === 1 && idx === 0 ? " case-card--featured" : "";
        const kpis = listOf(proj.kpis)
          .map((k) => `<span class="kpi-pill">${escapeHtml(k)}</span>`)
          .join("");

        return `
          <article class="case-card${featuredClass}">
            <div>
              <div class="case-card__meta">
                <span class="case-badge">${escapeHtml(t(proj.badge))}</span>
                <span class="case-role">${escapeHtml(t(proj.role))}</span>
              </div>
              <h3 class="case-title">${escapeHtml(t(proj.title))}</h3>
              <p class="case-summary">${escapeHtml(t(proj.summary))}</p>
            </div>
            <div class="case-kpis">${kpis}</div>
          </article>
        `;
      })
      .join("");

    el.innerHTML = `
      <div class="container">
        <div class="section-bar">
          <div>
            <p class="section-bar__eyebrow">${escapeHtml(t(data.projects.sub))}</p>
            <h2 class="section-bar__title">${escapeHtml(t(data.projects.heading))}</h2>
          </div>
          <div class="filter-bar" role="group" aria-label="${escapeHtml(t(data.projects.heading))}">
            ${filtersHtml}
          </div>
        </div>
        <div class="case-grid">${cardsHtml}</div>
      </div>
    `;

    el.querySelectorAll(".proj-filter-pill").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.projectFilter = btn.dataset.filter;
        renderProjects();
        animateFilterItems("#projects .case-card");
      });
    });
  }

  /* ------------------------------------------------------------------------
     7. Core Strengths & Capabilities (#capabilities)
     ------------------------------------------------------------------------ */
  function renderCapabilities() {
    const el = document.getElementById("capabilities");
    if (!el) return;

    const strengthsHtml = (data.about.strengths || [])
      .map(
        (s) => `
        <article class="strength-card">
          <span class="strength-card__index">${escapeHtml(s.index)}</span>
          <h3 class="strength-card__title">${escapeHtml(t(s.title))}</h3>
          <p class="strength-card__desc">${escapeHtml(t(s.desc))}</p>
        </article>`
      )
      .join("");

    const groupsHtml = (data.capabilities.groups || [])
      .map((g) => {
        const tagsHtml = listOf(g.tags)
          .map((tag) => `<span class="cap-tag">${escapeHtml(tag)}</span>`)
          .join("");
        return `
          <div class="cap-group">
            <h3 class="cap-group__title">${escapeHtml(t(g.title))}</h3>
            <div class="cap-tags">${tagsHtml}</div>
          </div>
        `;
      })
      .join("");

    el.innerHTML = `
      <div class="container">
        <div class="section-bar">
          <div>
            <p class="section-bar__eyebrow">${escapeHtml(t(data.capabilities.sub))}</p>
            <h2 class="section-bar__title">${escapeHtml(t(data.about.strengthsTitle))} &amp; ${escapeHtml(t(data.capabilities.heading))}</h2>
          </div>
        </div>
        <div class="strengths-grid">${strengthsHtml}</div>
        <div class="cap-groups">${groupsHtml}</div>
      </div>
    `;
  }

  /* ------------------------------------------------------------------------
     8. Experience & Education Roster (#experience)
     ------------------------------------------------------------------------ */
  function renderExperience() {
    const el = document.getElementById("experience");
    if (!el) return;

    const groupsHtml = (data.experience.groups || [])
      .map((group) => {
        const rowsHtml = (group.items || [])
          .map((item) => {
            const logoCellHtml = item.logo
              ? `<img class="career-logo${item.logoClass ? ` career-logo--${escapeHtml(item.logoClass)}` : ""}" src="${escapeHtml(item.logo)}" alt="${escapeHtml(t(item.org))} logo" />`
              : `<span class="career-monogram" aria-hidden="true">${escapeHtml(item.monogram || "")}</span>`;

            const orgTagHtml = t(item.orgTag)
              ? `<span class="career-tag${item.active ? " career-tag--active" : ""}">${escapeHtml(t(item.orgTag))}</span>`
              : "";

            const bullets = listOf(item.bullets);
            const bulletsHtml = bullets.length
              ? `<ul class="career-bullets">${bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}</ul>`
              : "";

            return `
              <li class="career-row">
                <div class="career-logo-cell">${logoCellHtml}</div>
                <div class="career-body">
                  <div class="career-header">
                    <div class="career-org-wrap">
                      <h4 class="career-org">${escapeHtml(t(item.org))}</h4>
                      ${orgTagHtml}
                    </div>
                    <time class="career-time">${escapeHtml(t(item.period))}</time>
                  </div>
                  <p class="career-role">${escapeHtml(t(item.role))}</p>
                  ${bulletsHtml}
                </div>
              </li>
            `;
          })
          .join("");

        return `
          <div class="career-group" id="${escapeHtml(group.id || "")}">
            <h3 class="career-group__title">${escapeHtml(t(group.title))}</h3>
            <ol class="career-list">${rowsHtml}</ol>
          </div>
        `;
      })
      .join("");

    el.innerHTML = `
      <div class="container">
        <div class="section-bar">
          <div>
            <p class="section-bar__eyebrow">${escapeHtml(t(data.experience.sub))}</p>
            <h2 class="section-bar__title">${escapeHtml(t(data.experience.heading))}</h2>
          </div>
        </div>
        ${groupsHtml}
      </div>
    `;
  }

  /* ------------------------------------------------------------------------
     9. Contact Band (#contact)
     ------------------------------------------------------------------------ */
  function renderContact() {
    const el = document.getElementById("contact");
    if (!el) return;

    const ui = data.contact.ui;
    const emailAddress = `${data.contact.emailUser}@${data.contact.emailDomain}`;

    el.innerHTML = `
      <div class="container">
        <div class="contact-box">
          <p class="contact-box__eyebrow">${escapeHtml(t(data.contact.sub))}</p>
          <h2 class="contact-box__title">${escapeHtml(t(data.contact.heading))}</h2>
          <p class="contact-intro">${escapeHtml(t(data.contact.intro))}</p>
          <div class="contact-actions">
            <button
              type="button"
              class="pill-btn pill-btn--dark"
              id="toggle-email-btn"
              aria-expanded="${state.emailVisible}"
              aria-controls="email-reveal-box"
            >${escapeHtml(state.emailVisible ? t(ui.hideEmail) : t(ui.showEmail))}</button>
            <button
              type="button"
              class="pill-btn pill-btn--outline"
              id="toggle-message-btn"
              aria-expanded="${state.messageOpen}"
              aria-controls="message-form-panel"
            >${escapeHtml(state.messageOpen ? t(ui.closeMessage) : t(ui.leaveMessage))}</button>
          </div>

          <div id="email-reveal-box" class="email-reveal" ${state.emailVisible ? "" : "hidden"}>
            <a class="email-reveal__address" id="revealed-email-link" href="${state.emailVisible ? `mailto:${escapeHtml(emailAddress)}` : "#"}">
              ${state.emailVisible ? escapeHtml(emailAddress) : ""}
            </a>
            <button type="button" class="pill-btn pill-btn--outline pill-btn--sm" id="copy-email-btn">
              ${escapeHtml(t(ui.copy))}
            </button>
            <span class="copy-feedback" id="copy-feedback" aria-live="polite"></span>
          </div>

          <div id="message-form-panel" class="message-panel" ${state.messageOpen ? "" : "hidden"}>
            <form id="contact-message-form" novalidate>
              <div class="form-field">
                <label class="form-label" for="msg-name">${escapeHtml(t(ui.nameLabel))}</label>
                <input class="form-input" id="msg-name" name="name" type="text" value="${escapeHtml(t(ui.nameDefault))}" />
              </div>
              <div class="form-field">
                <label class="form-label" for="msg-email">${escapeHtml(t(ui.emailLabel))}</label>
                <input class="form-input" id="msg-email" name="email" type="email" placeholder="${escapeHtml(t(ui.emailPlaceholder))}" />
              </div>
              <div class="form-field">
                <label class="form-label" for="msg-body">${escapeHtml(t(ui.messageLabel))}</label>
                <textarea class="form-textarea" id="msg-body" name="message" required placeholder="${escapeHtml(t(ui.messagePlaceholder))}"></textarea>
              </div>
              <div class="form-footer">
                <button type="submit" class="pill-btn pill-btn--dark pill-btn--sm" id="msg-submit-btn">${escapeHtml(t(ui.sendButton))}</button>
                <p class="form-status" id="msg-status" aria-live="polite"></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    `;

    document.getElementById("toggle-email-btn").addEventListener("click", () => {
      state.emailVisible = !state.emailVisible;
      renderContact();
    });

    const copyBtn = document.getElementById("copy-email-btn");
    const copyFeedback = document.getElementById("copy-feedback");
    copyBtn.addEventListener("click", () => {
      copyTextToClipboard(emailAddress).then((ok) => {
        if (!ok) return;
        copyFeedback.textContent = t(ui.copied);
        window.setTimeout(() => {
          if (copyFeedback) copyFeedback.textContent = "";
        }, 2000);
      });
    });

    document.getElementById("toggle-message-btn").addEventListener("click", () => {
      state.messageOpen = !state.messageOpen;
      renderContact();
      if (state.messageOpen) {
        const bodyInput = document.getElementById("msg-body");
        if (bodyInput) bodyInput.focus();
      }
    });

    const form = document.getElementById("contact-message-form");
    const statusEl = document.getElementById("msg-status");
    const submitBtn = document.getElementById("msg-submit-btn");

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const messageVal = (document.getElementById("msg-body").value || "").trim();
      if (!messageVal) {
        statusEl.textContent = t(ui.emptyError);
        statusEl.className = "form-status form-status--error";
        return;
      }

      const endpoint = (data.contact.formspreeEndpoint || "").trim();
      if (!endpoint) {
        statusEl.textContent = t(ui.notConfigured);
        statusEl.className = "form-status";
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = t(ui.sending);
      statusEl.textContent = "";
      statusEl.className = "form-status";

      try {
        const formData = new FormData(form);
        const res = await fetch(endpoint, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" }
        });
        if (res.ok) {
          form.reset();
          document.getElementById("msg-name").value = t(ui.nameDefault);
          statusEl.textContent = t(ui.sentSuccess);
          statusEl.className = "form-status form-status--success";
        } else {
          throw new Error("Non-2xx status");
        }
      } catch (_) {
        statusEl.textContent = t(ui.sentError);
        statusEl.className = "form-status form-status--error";
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = t(ui.sendButton);
      }
    });
  }

  /* ------------------------------------------------------------------------
     10. High-Contrast Dark Footer
     ------------------------------------------------------------------------ */
  function renderFooter() {
    const el = document.getElementById("site-footer");
    if (!el) return;

    const navHtml = data.nav
      .map((item) => `<li><a href="#${escapeHtml(item.id)}">${escapeHtml(t(item.label))}</a></li>`)
      .join("");

    const backToTop = state.lang === "zh" ? "返回顶部 ↑" : "Back to Top ↑";

    el.innerHTML = `
      <div class="footer-inner">
        <div class="footer-top">
          <div>
            <p class="footer-brand">${escapeHtml(t(data.profile.name))}</p>
            <p class="footer-desc">${escapeHtml(t(data.profile.bio))}</p>
          </div>
          <ul class="footer-links">${navHtml}</ul>
        </div>
        <div class="footer-bottom">
          <span>${escapeHtml(t(data.footer))}</span>
          <a href="#top" style="color: var(--text-on-dark-muted);">${escapeHtml(backToTop)}</a>
        </div>
      </div>
    `;
  }

  function copyTextToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(
        () => true,
        () => fallbackCopy(text)
      );
    }
    return Promise.resolve(fallbackCopy(text));
  }

  function fallbackCopy(text) {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch (_) {
      return false;
    }
  }

  function setupScrollSpy() {
    if (typeof IntersectionObserver === "undefined") return;
    const sections = data.nav
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length) {
          state.activeNavId = visible[0].target.id;
          document.querySelectorAll(".nav-link").forEach((link) => {
            link.classList.toggle("is-active", link.dataset.section === state.activeNavId);
          });
        }
      },
      {
        rootMargin: "-18% 0px -65% 0px",
        threshold: 0
      }
    );

    sections.forEach((sec) => observer.observe(sec));
  }

  function bindLanguageSwitch() {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const nextLang = btn.dataset.lang;
        if (!nextLang || nextLang === state.lang) return;
        state.lang = nextLang;
        renderAll();
      });
    });
  }

  let gsapMM = null;
  let initialMotionDone = false;

  function prefersReducedMotion() {
    return (
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function setupGsapMotion() {
    if (!window.gsap) return;
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

    if (gsapMM) {
      gsapMM.revert();
      gsapMM = null;
    }

    gsapMM = gsap.matchMedia();
    gsapMM.add("(prefers-reduced-motion: no-preference)", () => {
      // 1. Reading progress hairline pinned to sticky header
      if (ScrollTrigger) {
        gsap.to("#scroll-progress", {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: document.documentElement,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.15
          }
        });

        // 2. Subtle editorial hero image parallax on scroll
        gsap.to(".hero-stage__img", {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: 0.4
          }
        });
      }

      // Run entrance reveals on initial load only (language switches stay instant & crisp)
      if (!initialMotionDone) {
        initialMotionDone = true;

        const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
        heroTl
          .from(".hero-stage__img", {
            scale: 1.07,
            duration: 1.25,
            clearProps: "scale"
          })
          .from(
            [".hero-eyebrow", ".hero-title", ".hero-subtitle", ".hero-actions"],
            {
              y: 26,
              autoAlpha: 0,
              duration: 0.72,
              stagger: 0.09,
              clearProps: "transform,opacity,visibility"
            },
            0.12
          );

        if (ScrollTrigger) {
          const revealGroup = (triggerSelector, targetsSelector, staggerVal) => {
            const triggerEl = document.querySelector(triggerSelector);
            const targetEls = document.querySelectorAll(targetsSelector);
            if (!triggerEl || !targetEls.length) return;
            gsap.from(targetEls, {
              y: 24,
              autoAlpha: 0,
              duration: 0.62,
              stagger: staggerVal,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
              scrollTrigger: {
                trigger: triggerEl,
                start: "clamp(top 88%)",
                once: true
              }
            });
          };

          revealGroup("#about", "#about .manifesto > *, #about .metric-card", 0.06);
          revealGroup("#spotlight", "#spotlight .spotlight-tile", 0.12);
          revealGroup("#gallery", "#gallery .gallery-card", 0.05);
          revealGroup("#projects", "#projects .case-card", 0.08);
          revealGroup("#capabilities", "#capabilities .strength-card, #capabilities .cap-group", 0.07);
          revealGroup("#experience", "#experience .career-row", 0.07);
          revealGroup("#contact", "#contact .contact-box", 0.08);
        }
      }
    });

    if (ScrollTrigger) ScrollTrigger.refresh();
  }

  function animateFilterItems(selector) {
    if (!window.gsap || prefersReducedMotion()) return;
    window.gsap.fromTo(
      selector,
      { y: 14, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.4,
        stagger: 0.04,
        ease: "power2.out",
        overwrite: "auto",
        clearProps: "transform,opacity,visibility"
      }
    );
  }

  function renderAll() {
    renderHeader();
    renderHero();
    renderAbout();
    renderSpotlight();
    renderGallery();
    renderProjects();
    renderCapabilities();
    renderExperience();
    renderContact();
    renderFooter();
    renderLightbox();
    setupGsapMotion();
  }

  bindLanguageSwitch();
  bindLightboxKeyboard();
  renderAll();
  setupScrollSpy();
})();
