/**
 * Minimalist Bilingual Personal Homepage Runtime
 * Zero dependencies · Works via file:// or GitHub Pages
 */
(function () {
  "use strict";

  const data = window.SITE_DATA;
  if (!data) return;

  const ICONS = {
    location:
      '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    briefcase:
      '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
    education:
      '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3zm0 13.72L5.5 13.2v4.3c0 2.02 2.91 3.5 6.5 3.5s6.5-1.48 6.5-3.5v-4.3L12 16.72z"/></svg>',
    email:
      '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/></svg>',
    link:
      '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>'
  };

  const state = {
    lang: (data.meta && data.meta.defaultLang) || "zh",
    projectFilter: "all",
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

  function renderSectionHeading(title, sub) {
    const subHtml = sub
      ? `<span class="section-heading__sub" aria-hidden="true">${escapeHtml(sub)}</span>`
      : "";
    return `
      <h1 class="section-heading">
        <span class="section-heading__main">${escapeHtml(title)}</span>
        ${subHtml}
      </h1>`;
  }

  /* ------------------------------------------------------------------------
     1. Masthead & Language Switcher
     ------------------------------------------------------------------------ */
  function renderMasthead() {
    document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
    document.title = t(data.meta.title);

    const brandEl = document.getElementById("site-brand");
    if (brandEl) brandEl.textContent = t(data.meta.brand);

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
     2. Sticky Left Profile Sidebar
     ------------------------------------------------------------------------ */
  function renderSidebar() {
    const sidebar = document.getElementById("profile-sidebar");
    if (!sidebar) return;

    const linksHtml = (data.profile.links || [])
      .map((link) => {
        const iconSvg = ICONS[link.icon] || ICONS.link;
        const label = escapeHtml(t(link.label));
        if (!link.url) {
          return `
            <li class="author__url-item">
              <span class="author__url-icon">${iconSvg}</span>
              <span>${label}</span>
            </li>`;
        }
        const isExternal = /^https?:\/\//i.test(link.url);
        const targetAttrs = isExternal ? ' target="_blank" rel="noopener"' : "";
        return `
          <li class="author__url-item">
            <a class="author__url-link" href="${escapeHtml(link.url)}"${targetAttrs}>
              <span class="author__url-icon">${iconSvg}</span>
              <span>${label}</span>
            </a>
          </li>`;
      })
      .join("");

    const subnameHtml = t(data.profile.subname)
      ? `<p class="author__subname">${escapeHtml(t(data.profile.subname))}</p>`
      : "";

    const sigHtml = data.profile.signature
      ? `<div class="author__signature"><img src="${escapeHtml(data.profile.signature)}" alt="${escapeHtml(t(data.profile.name))}" /></div>`
      : "";

    sidebar.innerHTML = `
      <div class="author__avatar-wrap">
        <img class="author__avatar" src="${escapeHtml(data.profile.avatar)}" alt="${escapeHtml(t(data.profile.avatarAlt))}" />
      </div>
      <div class="author__identity">
        <h2 class="author__name">${escapeHtml(t(data.profile.name))}</h2>
        ${subnameHtml}
        <p class="author__bio">${escapeHtml(t(data.profile.bio))}</p>
        <ul class="author__urls">${linksHtml}</ul>
        ${sigHtml}
      </div>
    `;
  }

  /* ------------------------------------------------------------------------
     3. About Me + Metrics + Core Strengths
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

    const strengthsHtml = (data.about.strengths || [])
      .map(
        (s) => `
        <article class="strength-card">
          <div class="strength-card__head">
            <span class="strength-card__index">${escapeHtml(s.index)}</span>
            <h3 class="strength-card__title">${escapeHtml(t(s.title))}</h3>
          </div>
          <p class="strength-card__desc">${escapeHtml(t(s.desc))}</p>
        </article>`
      )
      .join("");

    el.innerHTML = `
      ${renderSectionHeading(t(data.about.heading), t(data.about.sub))}
      <div class="section-prose">${paragraphs}</div>
      <div class="metrics-grid">${metricsHtml}</div>
      <h2 class="subsection-title">${escapeHtml(t(data.about.strengthsTitle))}</h2>
      <div class="strengths-grid">${strengthsHtml}</div>
    `;
  }

  /* ------------------------------------------------------------------------
     4. Selected Projects / Case Studies
     ------------------------------------------------------------------------ */
  function renderProjects() {
    const el = document.getElementById("projects");
    if (!el) return;

    const filtersHtml = (data.projects.filters || [])
      .map((f) => {
        const active = state.projectFilter === f.id;
        return `<button type="button" class="filter-pill" data-filter="${escapeHtml(f.id)}" aria-pressed="${active}">${escapeHtml(t(f.label))}</button>`;
      })
      .join("");

    const items = (data.projects.items || []).filter(
      (item) => state.projectFilter === "all" || item.category === state.projectFilter
    );

    const cardsHtml = items
      .map((proj) => {
        const kpis = listOf(proj.kpis)
          .map((k) => `<span class="kpi-pill">${escapeHtml(k)}</span>`)
          .join("");

        return `
          <article class="case-card">
            <div class="case-card__top">
              <div class="case-card__title-group">
                <span class="case-badge">${escapeHtml(t(proj.badge))}</span>
                <h2 class="case-title">${escapeHtml(t(proj.title))}</h2>
              </div>
              <span class="case-role">${escapeHtml(t(proj.role))}</span>
            </div>
            <p class="case-summary">${escapeHtml(t(proj.summary))}</p>
            <div class="case-kpis">${kpis}</div>
          </article>
        `;
      })
      .join("");

    el.innerHTML = `
      ${renderSectionHeading(t(data.projects.heading), t(data.projects.sub))}
      <div class="filter-bar" role="group" aria-label="${escapeHtml(t(data.projects.heading))}">
        ${filtersHtml}
      </div>
      <div class="case-list">${cardsHtml}</div>
    `;

    el.querySelectorAll(".filter-pill").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.projectFilter = btn.dataset.filter;
        renderProjects();
      });
    });
  }

  /* ------------------------------------------------------------------------
     5. Experience & Education 3-Column Timeline
     ------------------------------------------------------------------------ */
  function renderExperience() {
    const el = document.getElementById("experience");
    if (!el) return;

    const groupsHtml = (data.experience.groups || [])
      .map((group) => {
        const rowsHtml = (group.items || [])
          .map((item) => {
            const dotModifier = item.active ? " timeline-dot--active" : "";
            const logoCellHtml = item.logo
              ? `<img class="timeline-logo${item.logoClass ? ` timeline-logo--${escapeHtml(item.logoClass)}` : ""}" src="${escapeHtml(item.logo)}" alt="${escapeHtml(t(item.org))} logo" />`
              : `<span class="timeline-monogram" style="background:${escapeHtml(item.monogramBg || "#f4f6f9")};color:${escapeHtml(item.monogramColor || "#234572")}" aria-hidden="true">${escapeHtml(item.monogram || "")}</span>`;

            const orgTagHtml = t(item.orgTag)
              ? `<span class="timeline-org-tag">${escapeHtml(t(item.orgTag))}</span>`
              : "";

            const bullets = listOf(item.bullets);
            const bulletsHtml = bullets.length
              ? `<ul class="timeline-bullets">${bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}</ul>`
              : "";

            return `
              <li class="timeline-item">
                <div class="timeline-logo-cell">${logoCellHtml}</div>
                <div class="timeline-rail" aria-hidden="true">
                  <span class="timeline-dot${dotModifier}"></span>
                </div>
                <div class="timeline-body">
                  <div class="timeline-header">
                    <div class="timeline-org-wrap">
                      <h3 class="timeline-org">${escapeHtml(t(item.org))}</h3>
                      ${orgTagHtml}
                    </div>
                    <time class="timeline-time">${escapeHtml(t(item.period))}</time>
                  </div>
                  <p class="timeline-role">${escapeHtml(t(item.role))}</p>
                  ${bulletsHtml}
                </div>
              </li>
            `;
          })
          .join("");

        return `
          <div class="timeline-group" id="${escapeHtml(group.id || "")}">
            <h2 class="timeline-group__title">${escapeHtml(t(group.title))}</h2>
            <ol class="experience-timeline">${rowsHtml}</ol>
          </div>
        `;
      })
      .join("");

    el.innerHTML = `
      ${renderSectionHeading(t(data.experience.heading), t(data.experience.sub))}
      ${groupsHtml}
    `;
  }

  /* ------------------------------------------------------------------------
     6. Core Capabilities
     ------------------------------------------------------------------------ */
  function renderCapabilities() {
    const el = document.getElementById("capabilities");
    if (!el) return;

    const groupsHtml = (data.capabilities.groups || [])
      .map((g) => {
        const tagsHtml = listOf(g.tags)
          .map((tag) => `<span class="cap-tag">${escapeHtml(tag)}</span>`)
          .join("");
        return `
          <div class="cap-group">
            <h2 class="cap-group__title">${escapeHtml(t(g.title))}</h2>
            <div class="cap-tags">${tagsHtml}</div>
          </div>
        `;
      })
      .join("");

    el.innerHTML = `
      ${renderSectionHeading(t(data.capabilities.heading), t(data.capabilities.sub))}
      <div class="cap-groups">${groupsHtml}</div>
    `;
  }

  /* ------------------------------------------------------------------------
     7. Contact Section (Anti-scraper Email Reveal + Copy + Formspree Form)
     ------------------------------------------------------------------------ */
  function renderContact() {
    const el = document.getElementById("contact");
    if (!el) return;

    const ui = data.contact.ui;
    const emailAddress = `${data.contact.emailUser}@${data.contact.emailDomain}`;

    el.innerHTML = `
      ${renderSectionHeading(t(data.contact.heading), t(data.contact.sub))}
      <p class="contact-intro">${escapeHtml(t(data.contact.intro))}</p>
      <div class="contact-actions">
        <button
          type="button"
          class="btn-outline"
          id="toggle-email-btn"
          aria-expanded="${state.emailVisible}"
          aria-controls="email-reveal-box"
        >${escapeHtml(state.emailVisible ? t(ui.hideEmail) : t(ui.showEmail))}</button>
        <button
          type="button"
          class="btn-outline"
          id="toggle-message-btn"
          aria-expanded="${state.messageOpen}"
          aria-controls="message-form-panel"
        >${escapeHtml(state.messageOpen ? t(ui.closeMessage) : t(ui.leaveMessage))}</button>
      </div>

      <div id="email-reveal-box" class="email-reveal" ${state.emailVisible ? "" : "hidden"}>
        <a class="email-reveal__address" id="revealed-email-link" href="${state.emailVisible ? `mailto:${escapeHtml(emailAddress)}` : "#"}">
          ${state.emailVisible ? escapeHtml(emailAddress) : ""}
        </a>
        <button type="button" class="btn-outline btn-outline--small" id="copy-email-btn">
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
            <button type="submit" class="btn-outline" id="msg-submit-btn">${escapeHtml(t(ui.sendButton))}</button>
            <p class="form-status" id="msg-status" aria-live="polite"></p>
          </div>
        </form>
      </div>
    `;

    const toggleEmailBtn = document.getElementById("toggle-email-btn");
    toggleEmailBtn.addEventListener("click", () => {
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

    const toggleMsgBtn = document.getElementById("toggle-message-btn");
    toggleMsgBtn.addEventListener("click", () => {
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

  function renderFooter() {
    const el = document.getElementById("site-footer");
    if (!el) return;
    const sigHtml = data.profile.signature
      ? `<img class="site-footer__sig" src="${escapeHtml(data.profile.signature)}" alt="" aria-hidden="true" />`
      : "";
    el.innerHTML = `
      <span>${escapeHtml(t(data.footer))}</span>
      ${sigHtml}
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

  /* ------------------------------------------------------------------------
     Scroll-Spy for Active Nav Link
     ------------------------------------------------------------------------ */
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

  /* ------------------------------------------------------------------------
     Language Switcher Binding & Initial Render
     ------------------------------------------------------------------------ */
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

  function renderAll() {
    renderMasthead();
    renderSidebar();
    renderAbout();
    renderProjects();
    renderExperience();
    renderCapabilities();
    renderContact();
    renderFooter();
  }

  bindLanguageSwitch();
  renderAll();
  setupScrollSpy();
})();
