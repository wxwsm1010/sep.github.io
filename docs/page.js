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

const params = new URLSearchParams(window.location.search);
const slug = params.get("slug") || siteContent.pages?.[0]?.slug;

const renderHeader = () => {
  document.querySelectorAll("[data-menu-index]").forEach((node) => {
    const item = siteContent.nav[Number(node.dataset.menuIndex)];
    if (!item) return;
    node.textContent = t(item.label);
    node.href = item.href.startsWith("#") ? `./index.html${item.href}` : item.href;
  });

  document.querySelectorAll("[data-product-menu-index]").forEach((node) => {
    const item = siteContent.productMenu?.[Number(node.dataset.productMenuIndex)];
    if (!item) return;
    node.textContent = t(item.label);
    node.href = item.href;
  });

  document.querySelectorAll("[data-field='brand.name']").forEach((node) => (node.textContent = siteContent.brand.name));
  document.querySelectorAll("[data-field='brand.sub']").forEach((node) => (node.textContent = siteContent.brand.sub));
  document.querySelectorAll("[data-image-field='brand.logo']").forEach((node) => {
    node.src = siteContent.brand.logo || "";
    node.classList.toggle("has-image", Boolean(siteContent.brand.logo));
    node.closest(".brand-mark")?.classList.toggle("has-image", Boolean(siteContent.brand.logo));
  });
};

const renderPage = () => {
  const page = siteContent.pages.find((item) => item.slug === slug) || siteContent.pages[0];
  if (!page) return;

  document.querySelector(".page-wrap")?.classList.toggle("is-map-page", page.slug === "after-sales-support");

  document.title = `${t(page.name)} | 天地人切片机`;

  document.querySelectorAll("[data-page-field]").forEach((node) => {
    const key = node.dataset.pageField;
    node.textContent = t(page[key]);
  });

  const cta = document.querySelector("[data-page-field='ctaLabel']");
  if (cta) cta.href = page.ctaHref;

  document.querySelectorAll("[data-page-link='ctaHref']").forEach((node) => {
    node.setAttribute("href", page.ctaHref || "#contact");
    node.setAttribute("aria-label", t(page.title));
  });

  const image = document.querySelector("[data-page-image='image']");
  if (image) image.src = page.image || "";

  document.querySelectorAll("[data-field='footer.brandName']").forEach((node) => (node.textContent = t(siteContent.footer.brandName)));
  document.querySelectorAll("[data-field='footer.brandSub']").forEach((node) => (node.textContent = t(siteContent.footer.brandSub)));
  document.querySelectorAll("[data-footer-contact]").forEach((node) => {
    const item = siteContent.footer.contact[Number(node.dataset.footerContact)];
    node.textContent = t(item);
  });

  document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-lang-option]").forEach((node) => {
    node.classList.toggle("is-active", node.dataset.langOption === currentLang);
  });
};

document.querySelector(".lang-switch")?.addEventListener("click", (event) => {
  const target = event.target.closest("[data-lang-option]");
  currentLang = target ? target.dataset.langOption : currentLang === "zh" ? "en" : "zh";
  renderHeader();
  renderPage();
});

window.addEventListener("storage", (event) => {
  if (event.key !== "tdr-site-content-v1") return;
  siteContent = store.load();
  renderHeader();
  renderPage();
});

renderHeader();
renderPage();
