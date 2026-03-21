const store = window.SiteContentStore;
let siteContent = store.load();
const catalog = window.ProductCatalog;
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

  const qrGrid = document.querySelector("#footer-qr-grid");
  if (qrGrid) {
    const items = Array.isArray(siteContent.footer.qr) ? siteContent.footer.qr : [];
    qrGrid.innerHTML = items
      .map((item) => {
        const image = item?.image || "";
        return `
          <div class="qr-card">
            <div class="qr-code ${image ? "has-image" : "no-image"}" ${image ? `style="background-image:url(${image})"` : ""}></div>
            <span>${t(item?.label || { zh: "未命名二维码", en: "Untitled QR" })}</span>
          </div>
        `;
      })
      .join("");
  }

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
const categorySlug = params.get("category");

const selectedCategory = catalog.getCategory(categorySlug);
const visibleCategories = selectedCategory ? [selectedCategory] : catalog.categories;

const renderCatalogHero = () => {
  const title = selectedCategory
    ? selectedCategory.title
    : { zh: "天地人切片机产品分类", en: "Tiandiren Slicer Product Catalog" };
  const description = selectedCategory
    ? selectedCategory.description
    : {
        zh: "覆盖全自动、半自动、立式、智能与鲜肉切片机五大类别，按系列与型号快速进入详情页。",
        en: "Browse five product categories and open model detail pages by series and model.",
      };
  const eyebrow = selectedCategory ? selectedCategory.eyebrow : { zh: "产品分类页", en: "Product Catalog" };
  const cover = selectedCategory?.coverImage || catalog.categories[0]?.coverImage || "";

  bindText("[data-catalog-field='eyebrow']", eyebrow);
  bindText("[data-catalog-field='title']", title);
  bindText("[data-catalog-field='description']", description);
  bindText("[data-catalog-field='primaryCta']", { zh: "查看全部型号", en: "Browse Models" });

  const coverNode = document.querySelector("[data-catalog-image='cover']");
  if (coverNode) coverNode.src = cover;

  document.title = `${t(title)} | 天地人切片机`;
};

const renderFilter = () => {
  const filter = document.querySelector("#category-filter");
  if (!filter) return;

  filter.innerHTML = [
    `
      <a href="./products.html" class="${selectedCategory ? "" : "is-active"}">
        <strong>${t({ zh: "全部产品", en: "All Products" })}</strong>
        <small>${t({ zh: "查看五大类与全部型号", en: "Browse all categories and models" })}</small>
      </a>
    `,
    ...catalog.categories.map(
      (category) => `
        <a href="./products.html?category=${category.slug}" class="${selectedCategory?.slug === category.slug ? "is-active" : ""}">
          <strong>${t(category.name)}</strong>
          <small>${category.modelCount} ${t({ zh: "个型号", en: "models" })}</small>
        </a>
      `,
    ),
  ].join("");

  document.querySelector("#total-categories").textContent = String(catalog.categories.length);
  document.querySelector("#total-models").textContent = String(catalog.products.length);
  document.querySelector("#total-images").textContent = String(
    catalog.products.reduce((sum, product) => sum + product.gallery.length, 0),
  );
};

const renderCatalogSections = () => {
  const root = document.querySelector("#catalog-grid");
  if (!root) return;

  const renderModelCard = (category, model) => {
    const media = model.heroImage
      ? `<a class="model-card-media" href="./product-detail.html?slug=${model.slug}" aria-label="${t(model.name)}">
            <img src="${model.heroImage}" alt="${t(model.name)}" loading="lazy" decoding="async" />
          </a>`
      : `<a class="model-card-media no-image" href="./product-detail.html?slug=${model.slug}" aria-label="${t(model.name)}">
            <span>${model.model}</span>
          </a>`;

    return `
      <article class="model-card">
        ${media}
        <div class="model-card-copy">
          <span class="eyebrow compact">${t(category.name)}</span>
          <h3>${model.model}</h3>
          <p>${t(model.summary)}</p>
          <div class="model-card-chips">
            ${category.scenes.map((scene) => `<span>${t(scene)}</span>`).join("")}
          </div>
          <div class="model-card-actions">
            <a class="primary-btn" href="./product-detail.html?slug=${model.slug}">${t({
              zh: "查看详情页",
              en: "Open Detail Page",
            })}</a>
            <a class="ghost-btn dark" href="#contact">${t({ zh: "立即咨询", en: "Contact Us" })}</a>
          </div>
        </div>
      </article>
    `;
  };

  const renderSeriesGroup = (category, series) => `
    <section class="series-group">
      <div class="series-group-head">
        <h3>${t(series.name)}</h3>
        <span>${series.models.length} ${t({ zh: "个型号", en: "models" })}</span>
      </div>
      <div class="model-grid">
        ${series.models.map((model) => renderModelCard(category, model)).join("")}
      </div>
    </section>
  `;

  root.innerHTML = visibleCategories
    .map(
      (category) => `
        <section class="catalog-category" id="${category.slug}">
          <div class="catalog-category-header">
            <div>
              <span class="eyebrow compact">${t(category.highlight)}</span>
              <h2>${t(category.title)}</h2>
              <p>${t(category.intro)}</p>
            </div>
            <div class="category-meta">
              <span>${category.modelCount} ${t({ zh: "个型号", en: "models" })}</span>
              <span>${category.imageCount} ${t({ zh: "张实拍图", en: "photo assets" })}</span>
            </div>
          </div>
          <div class="series-grid">
            ${
              category.seriesGroups?.length
                ? category.seriesGroups.map((series) => renderSeriesGroup(category, series)).join("")
                : `<div class="model-grid">${category.models.map((model) => renderModelCard(category, model)).join("")}</div>`
            }
          </div>
        </section>
      `,
    )
    .join("");
};

const render = () => {
  renderHeader();
  renderFooter();
  renderCatalogHero();
  renderFilter();
  renderCatalogSections();
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
