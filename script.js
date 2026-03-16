const store = window.SiteContentStore;
let siteContent = store.load();
let currentLang = "zh";

const t = (value) => {
  if (value == null) return "";
  if (typeof value === "object" && "zh" in value && "en" in value) {
    return value[currentLang] || value.zh || value.en || "";
  }
  return value;
};

const bindText = (selector, value) => {
  document.querySelectorAll(selector).forEach((node) => {
    node.textContent = t(value);
  });
};

const bindImage = (path) => {
  const value = store.getByPath(siteContent, path) || "";
  document.querySelectorAll(`[data-image-field="${path}"]`).forEach((node) => {
    node.src = value || "";
    node.classList.toggle("has-image", Boolean(value));
    if (path === "brand.logo") {
      node.closest(".brand-mark")?.classList.toggle("has-image", Boolean(value));
    }
  });
};

const renderHeader = () => {
  bindText('[data-field="brand.name"]', siteContent.brand.name);
  bindText('[data-field="brand.sub"]', siteContent.brand.sub);
  bindImage("brand.logo");
  bindText('[data-field="header.contact.label"]', siteContent.header.contact.label);
  document.querySelectorAll('[data-field="header.contact.label"]').forEach((node) => {
    node.setAttribute("href", siteContent.header.contact.href);
  });

  document.querySelectorAll("[data-menu-index]").forEach((node) => {
    const item = siteContent.nav[Number(node.dataset.menuIndex)];
    if (!item) return;
    node.textContent = t(item.label);
    node.setAttribute("href", item.href);
  });

  document.querySelectorAll("[data-product-menu-index]").forEach((node) => {
    const item = siteContent.productMenu?.[Number(node.dataset.productMenuIndex)];
    if (!item) return;
    node.textContent = t(item.label);
    node.setAttribute("href", item.href);
  });
};

const renderHero = () => {
  bindText('[data-field="hero.eyebrow"]', siteContent.hero.eyebrow);
  bindText('[data-field="hero.title"]', siteContent.hero.title);
  bindText('[data-field="hero.desc"]', siteContent.hero.desc);
  bindText('[data-field="hero.primaryLabel"]', siteContent.hero.primaryLabel);
  bindText('[data-field="hero.secondaryLabel"]', siteContent.hero.secondaryLabel);

  document.querySelectorAll('[data-field="hero.primaryLabel"]').forEach((node) => {
    node.setAttribute("href", siteContent.hero.primaryHref);
  });
  document.querySelectorAll('[data-field="hero.secondaryLabel"]').forEach((node) => {
    node.setAttribute("href", siteContent.hero.secondaryHref);
  });
  const heroTrack = document.querySelector("#hero-track");
  const heroIndicators = document.querySelector("#hero-indicators");
  if (!heroTrack || !heroIndicators) return;

  const themes = ["theme-overview", "theme-auto", "theme-semi", "theme-vertical"];
  const cardStyles = ["", "highlight", "warm", "steel"];
  const machineKinds = ["wide", "auto", "semi", "vertical"];

  const machineMarkup = (kind) => {
    if (kind === "vertical") {
      return `
        <div class="machine machine-vertical">
          <span class="machine-tower"></span>
          <span class="machine-body"></span>
          <span class="machine-panel"></span>
          <span class="machine-blade"></span>
        </div>
      `;
    }

    if (kind === "semi") {
      return `
        <div class="machine machine-semi">
          <span class="machine-top"></span>
          <span class="machine-body"></span>
          <span class="machine-panel"></span>
          <span class="machine-arm"></span>
          <span class="machine-blade"></span>
        </div>
      `;
    }

    if (kind === "auto") {
      return `
        <div class="machine machine-auto">
          <span class="machine-top"></span>
          <span class="machine-body"></span>
          <span class="machine-panel"></span>
          <span class="machine-wheel"></span>
          <span class="machine-track"></span>
        </div>
      `;
    }

    return `
      <div class="machine machine-wide">
        <span class="machine-top"></span>
        <span class="machine-body"></span>
        <span class="machine-panel"></span>
        <span class="machine-blade"></span>
        <span class="machine-track"></span>
      </div>
    `;
  };

  heroTrack.innerHTML = siteContent.slides
    .map((slide, index) => {
      const image = slide.image || "";
      const video = slide.video || "";
      const notes = Array.isArray(slide.notes) ? slide.notes : [];
      const hasUploadedMedia = Boolean(image || video);
      return `
        <article class="hero-slide ${themes[index % themes.length]} ${index === 0 ? "is-active" : ""}">
          <div class="hero-slide-copy">
            <span class="slide-badge">${t(slide.badge)}</span>
            <h2>${t(slide.title)}</h2>
            <p>${t(slide.desc)}</p>
            <div class="slide-actions">
              <a class="primary-btn" href="${slide.ctaHref || siteContent.hero.primaryHref}">${t(slide.ctaLabel || siteContent.hero.primaryLabel)}</a>
              <a class="ghost-btn light" href="${slide.secondaryHref || siteContent.hero.secondaryHref}">${t(slide.secondaryLabel || siteContent.hero.secondaryLabel)}</a>
            </div>
          </div>
          <div class="hero-machine">
            <a class="hero-media-link" href="${slide.ctaHref || siteContent.hero.primaryHref}" aria-label="${t(slide.title)}">
              <div class="machine-card ${cardStyles[index % cardStyles.length]} ${hasUploadedMedia ? "has-uploaded-media" : ""}">
              ${
                video
                  ? `<video class="visual-upload hero-video has-image" src="${video}" autoplay muted loop playsinline preload="metadata"></video>`
                  : ""
              }
              <img class="visual-upload hero-visual ${image ? "has-image" : ""}" src="${image}" alt="" />
              ${hasUploadedMedia ? "" : machineMarkup(machineKinds[index % machineKinds.length])}
              ${
                notes.length && !hasUploadedMedia
                  ? `<ul class="machine-notes">${notes.map((note) => `<li>${t(note)}</li>`).join("")}</ul>`
                  : ""
              }
              </div>
            </a>
          </div>
        </article>
      `;
    })
    .join("");

  heroIndicators.innerHTML = siteContent.slides
    .map(
      (_, index) =>
        `<button class="${index === 0 ? "is-active" : ""}" type="button" data-slide="${index}" data-target="hero"><span></span></button>`,
    )
    .join("");

  sliderState.hero.index = 0;
  sliderState.hero.total = siteContent.slides.length;
};

const renderSectionHeading = (basePath) => {
  ["eyebrow", "title", "desc"].forEach((key) => {
    bindText(`[data-field="${basePath}.${key}"]`, store.getByPath(siteContent, `${basePath}.${key}`));
  });
};

const renderProducts = () => {
  renderSectionHeading("products.heading");
  const rail = document.querySelector("#products-rail");
  if (!rail) return;

  const accents = ["accent-blue", "accent-silver", "accent-steel", "accent-blue", "accent-silver", "accent-steel"];
  const machineTypes = ["machine-auto", "machine-semi", "machine-vertical", "machine-auto", "machine-semi", "machine-vertical"];

  rail.innerHTML = siteContent.products.cards
    .map((card, index) => {
      const accent = accents[index % accents.length];
      const machineType = machineTypes[index % machineTypes.length];
      const image = card.image || "";
      const machineMarkup =
        machineType === "machine-vertical"
          ? `
            <div class="product-art machine ${machineType} card-machine">
              <span class="machine-tower"></span>
              <span class="machine-body"></span>
              <span class="machine-panel"></span>
              <span class="machine-blade"></span>
            </div>
          `
          : machineType === "machine-semi"
            ? `
              <div class="product-art machine ${machineType} card-machine">
                <span class="machine-top"></span>
                <span class="machine-body"></span>
                <span class="machine-panel"></span>
                <span class="machine-arm"></span>
                <span class="machine-blade"></span>
              </div>
            `
            : `
              <div class="product-art machine ${machineType} card-machine">
                <span class="machine-top"></span>
                <span class="machine-body"></span>
                <span class="machine-panel"></span>
                <span class="machine-wheel"></span>
                <span class="machine-track"></span>
              </div>
            `;

      return `
        <article class="product-card ${accent}">
          <span class="tag">${t(card.tag)}</span>
          <img class="visual-upload product-visual ${image ? "has-image" : ""}" src="${image}" alt="" />
          ${machineMarkup}
          <div class="product-content">
            <h3>${t(card.title)}</h3>
            <p>${t(card.desc)}</p>
          </div>
          <a class="card-link" href="${card.href || "#products"}" aria-label="${t(card.title)}"><span></span></a>
        </article>
      `;
    })
    .join("");
};

const renderSolutions = () => {
  renderSectionHeading("solutions.heading");
  document.querySelectorAll("[data-solution-field]").forEach((node) => {
    const card = siteContent.solutions.cards[Number(node.dataset.solutionIndex)];
    if (!card) return;
    node.textContent = t(card[node.dataset.solutionField]);
  });
  siteContent.solutions.cards.forEach((_, index) => bindImage(`solutions.cards.${index}.image`));
  document.querySelectorAll("[data-solution-link]").forEach((node) => {
    const card = siteContent.solutions.cards[Number(node.dataset.solutionIndex)];
    if (!card) return;
    node.setAttribute("href", card.href || "#solutions");
    node.setAttribute("aria-label", t(card.title));
  });
};

const renderAbout = () => {
  ["eyebrow", "title", "p1", "p2", "missionTitle", "missionDesc"].forEach((key) => {
    bindText(`[data-field="about.${key}"]`, siteContent.about[key]);
  });

  document.querySelectorAll("[data-stat-field]").forEach((node) => {
    const stat = siteContent.stats[Number(node.dataset.statIndex)];
    if (!stat) return;
    if (node.dataset.statField === "value") node.textContent = stat.value;
    if (node.dataset.statField === "label") node.textContent = t(stat.label);
  });
};

const renderNews = () => {
  renderSectionHeading("news.heading");
  document.querySelectorAll("[data-news-field]").forEach((node) => {
    const card = siteContent.news.cards[Number(node.dataset.newsIndex)];
    if (!card) return;
    node.textContent = t(card[node.dataset.newsField]);
  });
  siteContent.news.cards.forEach((_, index) => bindImage(`news.cards.${index}.image`));
};

const renderFooter = () => {
  ["brandName", "brandSub", "copyright", "privacy", "terms", "icp"].forEach((key) => {
    bindText(`[data-field="footer.${key}"]`, siteContent.footer[key]);
  });

  document.querySelectorAll("[data-qr-label]").forEach((node) => {
    const item = siteContent.footer.qr[Number(node.dataset.qrLabel)];
    if (!item) return;
    node.textContent = t(item.label);
  });

  document.querySelectorAll("[data-qr-index]").forEach((node) => {
    const item = siteContent.footer.qr[Number(node.dataset.qrIndex)];
    const image = item?.image || "";
    node.style.backgroundImage = image ? `url(${image})` : "";
    node.classList.toggle("has-image", Boolean(image));
  });

  document.querySelectorAll("[data-footer-contact]").forEach((node) => {
    const item = siteContent.footer.contact[Number(node.dataset.footerContact)];
    node.textContent = t(item);
  });

  document.querySelectorAll("[data-footer-col-title]").forEach((node) => {
    const col = siteContent.footer.cols[Number(node.dataset.footerColTitle)];
    if (!col) return;
    node.textContent = t(col.title);
  });

  document.querySelectorAll("[data-footer-link]").forEach((node) => {
    const [colIndex, linkIndex] = node.dataset.footerLink.split(":").map(Number);
    const item = siteContent.footer.cols[colIndex]?.links?.[linkIndex];
    if (!item) return;
    node.textContent = t(item.label);
    node.setAttribute("href", item.href);
  });
};

const renderPage = () => {
  renderHeader();
  renderHero();
  renderProducts();
  renderSolutions();
  renderAbout();
  renderNews();
  renderFooter();
  document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-lang-option]").forEach((node) => {
    node.classList.toggle("is-active", node.dataset.langOption === currentLang);
  });
};

const sliderState = {
  hero: {
    index: 0,
    total: 0,
  },
};

let heroTouchStartX = 0;
let heroTouchDeltaX = 0;

const updateHero = (nextIndex) => {
  const slides = [...document.querySelectorAll(".hero-slide")];
  const dots = [...document.querySelectorAll(".hero-indicators button")];
  const total = slides.length;
  sliderState.hero.index = (nextIndex + total) % total;

  slides.forEach((slide, index) => {
    slide.classList.toggle("is-active", index === sliderState.hero.index);
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle("is-active", index === sliderState.hero.index);
  });
};

const scrollRail = (target, direction) => {
  const rail = document.querySelector(`[data-slider="${target}"]`);
  if (!rail) return;
  rail.scrollBy({ left: direction * rail.clientWidth * 0.88, behavior: "smooth" });
};

document.querySelector(".hero-slider")?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-target='hero']");
  if (!button) return;

  if (button.dataset.slide) {
    updateHero(Number(button.dataset.slide));
    return;
  }

  updateHero(sliderState.hero.index + (button.classList.contains("prev") ? -1 : 1));
});

const heroTrack = document.querySelector("#hero-track");

if (heroTrack) {
  heroTrack.addEventListener(
    "touchstart",
    (event) => {
      heroTouchStartX = event.changedTouches[0].clientX;
      heroTouchDeltaX = 0;
    },
    { passive: true },
  );

  heroTrack.addEventListener(
    "touchmove",
    (event) => {
      heroTouchDeltaX = event.changedTouches[0].clientX - heroTouchStartX;
    },
    { passive: true },
  );

  heroTrack.addEventListener(
    "touchend",
    () => {
      if (Math.abs(heroTouchDeltaX) < 40 || sliderState.hero.total <= 1) return;
      updateHero(sliderState.hero.index + (heroTouchDeltaX < 0 ? 1 : -1));
    },
    { passive: true },
  );
}

document.querySelectorAll(".slider-arrow[data-target='products'], .slider-arrow[data-target='solutions']").forEach((button) => {
  button.addEventListener("click", () => {
    scrollRail(button.dataset.target, button.classList.contains("prev") ? -1 : 1);
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const siteHeader = document.querySelector(".site-header");
const navLinks = document.querySelectorAll(".main-nav a");
const mobileNavBackdrop = document.querySelector(".mobile-nav-backdrop");
let lastScrollY = window.scrollY;

if (menuToggle && siteHeader) {
  menuToggle.addEventListener("click", () => {
    const open = siteHeader.classList.toggle("nav-open");
    menuToggle.setAttribute("aria-expanded", String(open));
    if (mobileNavBackdrop) mobileNavBackdrop.hidden = !open;
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      siteHeader.classList.remove("nav-open");
      menuToggle.setAttribute("aria-expanded", "false");
      if (mobileNavBackdrop) mobileNavBackdrop.hidden = true;
    });
  });
}

mobileNavBackdrop?.addEventListener("click", () => {
  if (!siteHeader || !menuToggle) return;
  siteHeader.classList.remove("nav-open");
  menuToggle.setAttribute("aria-expanded", "false");
  mobileNavBackdrop.hidden = true;
});

const langSwitch = document.querySelector(".lang-switch");
if (langSwitch) {
  langSwitch.addEventListener("click", (event) => {
    const target = event.target.closest("[data-lang-option]");
    currentLang = target ? target.dataset.langOption : currentLang === "zh" ? "en" : "zh";
    renderPage();
  });
}

window.addEventListener(
  "scroll",
  () => {
    if (!siteHeader) return;
    const currentScrollY = window.scrollY;

    if (siteHeader.classList.contains("nav-open")) {
      lastScrollY = currentScrollY;
      return;
    }

    if (currentScrollY <= 24) {
      siteHeader.classList.remove("is-hidden");
    } else {
      siteHeader.classList.add("is-hidden");
    }

    lastScrollY = currentScrollY;
  },
  { passive: true },
);

window.addEventListener("storage", (event) => {
  if (event.key !== "tdr-site-content-v1") return;
  siteContent = store.load();
  renderPage();
});

renderPage();
setInterval(() => {
  if (sliderState.hero.total > 1) {
    updateHero(sliderState.hero.index + 1);
  }
}, 5200);
