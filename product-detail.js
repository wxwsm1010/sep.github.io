const store = window.SiteContentStore;
let siteContent = store.load();
const catalog = window.ProductCatalog;
let currentLang = "zh";
const lightbox = document.querySelector("#image-lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxClose = document.querySelector("#lightbox-close");
const lightboxFrame = document.querySelector(".lightbox-frame");
let lastActiveElement = null;
let lightboxScale = 1;

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
    node.setAttribute("href", item.href.startsWith("#") ? `./index.html${item.href}` : item.href);
  });

  document.querySelectorAll("[data-product-menu-index]").forEach((node) => {
    const item = siteContent.productMenu?.[Number(node.dataset.productMenuIndex)];
    if (!item) return;
    node.textContent = t(item.label);
    node.setAttribute("href", item.href);
  });
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
    if (!item) return;
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

const params = new URLSearchParams(window.location.search);
const slug = params.get("slug") || catalog.products[0]?.slug;

const toFullResBrochureSrc = (src) => {
  if (!src) return src;
  return src.replace("./brochure_pages/", "./pdf_pages/").replace(/\.jpg$/i, ".png");
};

const setLightboxScale = (nextScale) => {
  if (!lightboxImage) return;
  lightboxScale = Math.min(4, Math.max(1, Number(nextScale.toFixed(2))));
  lightboxImage.style.transform = `scale(${lightboxScale})`;
  lightboxImage.style.cursor = lightboxScale > 1 ? "zoom-out" : "zoom-in";
};

const renderDetail = () => {
  const product = catalog.getProduct(slug) || catalog.products[0];
  if (!product) return;

  const category = catalog.getCategory(product.category);
  if (!category) return;

  document.title = `${t(product.name)} | 天地人切片机`;

  const detailFields = {
    categoryName: category.name,
    model: product.model,
    name: product.name,
    summary: product.summary,
    description: product.description,
    ctaLabel: product.ctaLabel,
  };

  document.querySelectorAll("[data-detail-field]").forEach((node) => {
    const value = detailFields[node.dataset.detailField];
    if (value != null) node.textContent = t(value);
  });

  document.querySelector("[data-detail-field='ctaLabel']")?.setAttribute("href", product.ctaHref);
  const heroImage = document.querySelector("[data-detail-image='hero']");
  const heroWrap = heroImage?.closest(".detail-hero-image");
  if (heroImage) {
    heroImage.setAttribute("src", product.heroImage);
    heroImage.setAttribute("alt", t(product.name));
  }
  if (heroWrap) {
    heroWrap.classList.add("is-zoomable");
    heroWrap.setAttribute("data-lightbox-src", product.heroImage);
    heroWrap.setAttribute("data-lightbox-alt", t(product.name));
    heroWrap.setAttribute("tabindex", "0");
    heroWrap.setAttribute("role", "button");
    heroWrap.setAttribute(
      "aria-label",
      t({ zh: "点击放大查看产品图", en: "Open product image preview" }),
    );
  }

  const scenes = document.querySelector("#detail-scenes");
  if (scenes) {
    scenes.innerHTML = category.scenes.map((scene) => `<li>${t(scene)}</li>`).join("");
  }

  const features = document.querySelector("#detail-features");
  if (features) {
    features.innerHTML = product.featureSet.map((item) => `<li>${t(item)}</li>`).join("");
  }

  const article = document.querySelector("#detail-article-sections");
  if (article) {
    article.innerHTML = product.article
      .map(
        (block) => `
          <div class="article-block">
            <h3>${t(block.title)}</h3>
            <p>${t(block.body)}</p>
          </div>
        `,
      )
      .join("");
  }

  const specs = document.querySelector("#detail-specs");
  if (specs) {
    specs.innerHTML = product.specs?.length
      ? product.specs
          .map(
            (item) => `
              <div class="spec-item">
                <span>${t(item.label)}</span>
                <strong>${item.value}</strong>
              </div>
            `,
          )
          .join("")
      : `<div class="spec-item"><span>${t({ zh: "参数说明", en: "Specification Note" })}</span><strong>${t({
          zh: "当前型号参数以宣传册页图为准。",
          en: "Please refer to the brochure page image for this model specification.",
        })}</strong></div>`;
  }

  const gallery = document.querySelector("#detail-gallery");
  if (gallery) {
    gallery.innerHTML = product.gallery
      .map(
        (image, index) => `
          <figure class="is-zoomable" data-lightbox-src="${image}" data-lightbox-alt="${t(product.name)} ${index + 1}" tabindex="0" role="button" aria-label="${t({ zh: "点击放大查看产品图", en: "Open product image preview" })}">
            <img src="${image}" alt="${t(product.name)} ${index + 1}" />
          </figure>
        `,
      )
      .join("");
  }

  const brochureGallery = document.querySelector("#brochure-gallery");
  if (brochureGallery) {
    brochureGallery.innerHTML = (product.brochureImages || [])
      .map(
        (image, index) => `
          <figure class="is-zoomable" data-lightbox-src="${toFullResBrochureSrc(image)}" data-lightbox-alt="${t(product.name)} ${t({ zh: "宣传册参数页", en: "Brochure Page" })} ${index + 1}" tabindex="0" role="button" aria-label="${t({ zh: "点击放大查看宣传册参数页", en: "Open brochure page preview" })}">
            <img src="${image}" alt="${t(product.name)} ${t({ zh: "宣传册参数页", en: "Brochure Page" })} ${index + 1}" />
          </figure>
        `,
      )
      .join("");
  }
};

const openLightbox = (src, alt) => {
  if (!lightbox || !lightboxImage || !src) return;
  lastActiveElement = document.activeElement;
  setLightboxScale(1);
  lightboxImage.src = src;
  lightboxImage.alt = alt || "";
  lightbox.hidden = false;
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  lightboxClose?.focus();
};

const closeLightbox = () => {
  if (!lightbox || !lightboxImage) return;
  lightbox.hidden = true;
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  lightboxImage.alt = "";
  setLightboxScale(1);
  document.body.style.overflow = "";
  lastActiveElement?.focus?.();
};

const render = () => {
  renderHeader();
  renderFooter();
  renderDetail();
  document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-lang-option]").forEach((node) => {
    node.classList.toggle("is-active", node.dataset.langOption === currentLang);
  });
};

document.querySelector(".lang-switch")?.addEventListener("click", (event) => {
  const target = event.target.closest("[data-lang-option]");
  currentLang = target ? target.dataset.langOption : currentLang === "zh" ? "en" : "zh";
  render();
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

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-lightbox-src]");
  if (trigger) {
    openLightbox(trigger.dataset.lightboxSrc, trigger.dataset.lightboxAlt);
    return;
  }

  if (
    event.target.closest(".lightbox-backdrop") ||
    event.target.closest("#lightbox-close")
  ) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  const trigger = event.target.closest?.("[data-lightbox-src]");
  if (trigger && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    openLightbox(trigger.dataset.lightboxSrc, trigger.dataset.lightboxAlt);
    return;
  }

  if (event.key === "Escape" && lightbox && !lightbox.hidden) {
    closeLightbox();
  }
});

lightboxFrame?.addEventListener(
  "wheel",
  (event) => {
    if (!lightbox || lightbox.hidden) return;
    event.preventDefault();
    const delta = event.deltaY < 0 ? 0.18 : -0.18;
    setLightboxScale(lightboxScale + delta);
  },
  { passive: false },
);

lightboxFrame?.addEventListener("dblclick", () => {
  if (!lightbox || lightbox.hidden) return;
  closeLightbox();
});

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
  render();
});

render();
