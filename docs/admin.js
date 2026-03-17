const store = window.SiteContentStore;
let draft = store.load();

const root = document.querySelector("#admin-root");
const status = document.querySelector("#status");

const escapeHtml = (value) =>
  String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const get = (path) => store.getByPath(draft, path);

const bilingualField = (path, label, type = "text") => `
  <div class="field">
    <label>${label}</label>
    <div class="lang-row">
      ${["zh", "en"]
        .map(
          (lang) =>
            type === "textarea"
              ? `<textarea data-path="${path}.${lang}" placeholder="${lang.toUpperCase()}">${escapeHtml(get(`${path}.${lang}`) || "")}</textarea>`
              : `<input type="${type}" data-path="${path}.${lang}" value="${escapeHtml(get(`${path}.${lang}`) || "")}" placeholder="${lang.toUpperCase()}" />`,
        )
        .join("")}
    </div>
  </div>
`;

const singleField = (path, label, type = "text") => `
  <div class="field">
    <label>${label}</label>
    ${type === "textarea"
      ? `<textarea data-path="${path}">${escapeHtml(get(path) || "")}</textarea>`
      : `<input type="${type}" data-path="${path}" value="${escapeHtml(get(path) || "")}" />`}
  </div>
`;

const uploadField = (path, label, spec, hint = "支持 JPG、PNG、WEBP、SVG。", compact = false) => `
  <div class="upload ${compact ? "compact" : ""}">
    <div class="upload-meta">
      <label>${label}</label>
      <span class="upload-spec">推荐尺寸：${spec}</span>
      <span class="hint">${hint}</span>
    </div>
    <img class="upload-preview" src="${escapeHtml(get(path) || "")}" alt="" />
    <input type="file" accept="image/*" data-upload-path="${path}" />
  </div>
`;

const mediaUploadField = (
  path,
  label,
  spec,
  hint,
  accept,
  kind = "image",
  compact = false,
) => `
  <div class="upload ${compact ? "compact" : ""}">
    <div class="upload-meta">
      <label>${label}</label>
      <span class="upload-spec">推荐尺寸：${spec}</span>
      <span class="hint">${hint}</span>
    </div>
    ${
      kind === "video"
        ? `<video class="upload-preview" ${get(path) ? "controls muted playsinline" : ""} src="${escapeHtml(get(path) || "")}"></video>`
        : `<img class="upload-preview" src="${escapeHtml(get(path) || "")}" alt="" />`
    }
    <input type="file" accept="${accept}" data-upload-path="${path}" data-upload-kind="${kind}" />
  </div>
`;

const productCardGroup = (_, index) => `
  <div class="group">
    <div class="group-head">
      <h3>产品卡片 ${index + 1}</h3>
      <button type="button" class="mini-btn danger" data-remove-product="${index}">删除</button>
    </div>
    ${bilingualField(`products.cards.${index}.tag`, "标签")}
    ${bilingualField(`products.cards.${index}.title`, "标题")}
    ${bilingualField(`products.cards.${index}.desc`, "描述", "textarea")}
    ${singleField(`products.cards.${index}.href`, "产品入口链接")}
    <div class="link-preview">可填写分类页如 ./products.html?category=automatic，详情页如 ./product-detail.html?slug=automatic-ss-a250，或联系锚点如 #contact。</div>
    ${uploadField(`products.cards.${index}.image`, "产品图片", "1200 x 900 px", "建议使用设备实拍图或渲染图，主体居中。", true)}
  </div>
`;

const pageGroup = (_, index) => `
  <div class="group">
    <div class="group-head">
      <h3>二级页面 ${index + 1}</h3>
      <button type="button" class="mini-btn danger" data-remove-page="${index}">删除</button>
    </div>
    ${singleField(`pages.${index}.slug`, "页面标识 Slug")}
    <div class="link-preview">页面链接：./page.html?slug=${escapeHtml(get(`pages.${index}.slug`) || "")}</div>
    ${bilingualField(`pages.${index}.name`, "页面名称")}
    ${bilingualField(`pages.${index}.eyebrow`, "页面眉标题")}
    ${bilingualField(`pages.${index}.title`, "页面主标题", "textarea")}
    ${bilingualField(`pages.${index}.summary`, "页面摘要", "textarea")}
    ${bilingualField(`pages.${index}.body1`, "正文段落 1", "textarea")}
    ${bilingualField(`pages.${index}.body2`, "正文段落 2", "textarea")}
    ${bilingualField(`pages.${index}.ctaLabel`, "按钮文案")}
    ${singleField(`pages.${index}.ctaHref`, "按钮链接")}
    ${uploadField(`pages.${index}.image`, "页面头图", "1600 x 900 px", "建议上传横版头图，作为二级页首屏视觉。")}
  </div>
`;

const slideGroup = (slide, index) => `
  <div class="group">
    <div class="group-head">
      <h3>${
        [
          "海报 01 · 全自动切片机",
          "海报 02 · 半自动切片机",
          "海报 03 · 立式切片机",
          "海报 04 · 综合解决方案",
          "海报 05 · 智能切片机",
        ][index] || `轮播 ${index + 1}`
      }</h3>
      <button type="button" class="mini-btn danger" data-remove-slide="${index}">删除</button>
    </div>
    ${bilingualField(`slides.${index}.badge`, "角标")}
    ${bilingualField(`slides.${index}.title`, "标题", "textarea")}
    ${bilingualField(`slides.${index}.desc`, "描述", "textarea")}
    ${bilingualField(`slides.${index}.ctaLabel`, "主按钮文案")}
    ${singleField(`slides.${index}.ctaHref`, "主按钮链接")}
    ${bilingualField(`slides.${index}.secondaryLabel`, "次按钮文案")}
    ${singleField(`slides.${index}.secondaryHref`, "次按钮链接")}
    ${slide.notes
      ? slide.notes.map((_, noteIndex) => bilingualField(`slides.${index}.notes.${noteIndex}`, `说明 ${noteIndex + 1}`)).join("")
      : ""}
    <div class="link-preview">上传海报图片或视频后，首页会优先显示上传内容，不再叠加默认示意插画。</div>
    ${mediaUploadField(`slides.${index}.image`, "海报图片", "1600 x 900 px", "建议横版高清海报，适配首页大轮播。", "image/*")}
    ${mediaUploadField(`slides.${index}.video`, "海报视频", "1920 x 1080 px", "支持 MP4 / WebM，前台优先播放视频。", "video/mp4,video/webm,video/ogg", "video")}
  </div>
`;

const render = () => {
  root.innerHTML = `
    <section class="panel" id="section-brand">
      <div class="panel-head">
        <h2>品牌与导航</h2>
        <p>管理左上角品牌 Logo、品牌名称、副标题和顶部菜单。</p>
      </div>
      <div class="grid">
        ${singleField("brand.name", "品牌名称")}
        ${singleField("brand.sub", "品牌副标题")}
      </div>
      <div class="grid">
        ${uploadField("brand.logo", "品牌 Logo", "240 x 80 px", "建议上传透明底 PNG 或 SVG，用于头部与页脚同步展示。")}
        <div class="group">
          <h3>说明</h3>
          <p class="hint">上传后会同步替换首页左上角 Logo 和页脚品牌 Logo。建议使用透明背景 PNG 或 SVG。</p>
        </div>
      </div>
      <div class="grid">
        ${bilingualField("header.contact.label", "头部联系按钮")}
        ${singleField("header.contact.href", "头部联系按钮链接")}
      </div>
      <div class="grid">
        ${draft.nav
          .map(
            (item, index) => `
          <div class="group">
            <h3>菜单 ${index + 1}</h3>
            ${bilingualField(`nav.${index}.label`, "菜单名称")}
            ${singleField(`nav.${index}.href`, "跳转链接")}
            <div class="link-preview">可填写锚点如 #products，分类页如 ./products.html，详情页如 ./product-detail.html?slug=automatic-ss-a250，或完整外链地址。</div>
          </div>
        `,
          )
          .join("")}
      </div>
      <div class="panel-head inline-head">
        <h3>产品中心下拉菜单</h3>
        <p>靠近“产品中心”时显示的四个产品入口，可单独设置名称和链接。</p>
      </div>
      <div class="grid">
        ${draft.productMenu
          .map(
            (_, index) => `
          <div class="group">
            <h3>下拉项 ${index + 1}</h3>
            ${bilingualField(`productMenu.${index}.label`, "下拉名称")}
            ${singleField(`productMenu.${index}.href`, "跳转链接")}
          </div>
        `,
          )
          .join("")}
      </div>
    </section>

    <section class="panel" id="section-pages">
      <div class="panel-head">
        <h2>二级页面</h2>
        <p>创建和维护菜单跳转的二级页面。菜单链接可直接填写为 <code>./page.html?slug=页面标识</code>。</p>
      </div>
      <div class="admin-actions">
        <button type="button" class="mini-btn" id="add-page-btn">新增二级页面</button>
      </div>
      <div class="grid">
        ${draft.pages.map(pageGroup).join("")}
      </div>
    </section>

    <section class="panel" id="section-hero">
      <div class="panel-head">
        <h2>首页海报</h2>
        <p>管理首页首屏主标题、按钮文案以及轮播海报内容，支持新增和删除。</p>
      </div>
      <div class="admin-actions">
        <button type="button" class="mini-btn" id="add-slide-btn">新增海报</button>
      </div>
      <div class="grid">
        ${bilingualField("hero.eyebrow", "首屏眉标题")}
        ${bilingualField("hero.title", "首屏主标题", "textarea")}
      </div>
      <div class="grid">
        ${bilingualField("hero.desc", "首屏描述", "textarea")}
        <div class="group">
          <h3>按钮</h3>
          ${bilingualField("hero.primaryLabel", "主按钮文案")}
          ${singleField("hero.primaryHref", "主按钮链接")}
          ${bilingualField("hero.secondaryLabel", "次按钮文案")}
          ${singleField("hero.secondaryHref", "次按钮链接")}
        </div>
      </div>
      <div class="grid">
        ${draft.slides.map(slideGroup).join("")}
      </div>
    </section>

    <section class="panel" id="section-products">
      <div class="panel-head">
        <h2>产品矩阵</h2>
        <p>管理首页产品矩阵卡片，支持新增、删除产品卡片和上传产品展示图。</p>
      </div>
      <div class="admin-actions">
        <button type="button" class="mini-btn" id="add-product-btn">新增产品卡片</button>
      </div>
      <div class="grid">
        ${bilingualField("products.heading.eyebrow", "板块眉标题")}
        ${bilingualField("products.heading.title", "板块标题", "textarea")}
      </div>
      ${bilingualField("products.heading.desc", "板块描述", "textarea")}
      <div class="grid three">
        ${draft.products.cards.map(productCardGroup).join("")}
      </div>
    </section>

    <section class="panel" id="section-solutions">
      <div class="panel-head">
        <h2>解决方案</h2>
        <p>管理不同应用场景卡片，包括标签、说明文案与场景图片。</p>
      </div>
      <div class="grid">
        ${bilingualField("solutions.heading.eyebrow", "板块眉标题")}
        ${bilingualField("solutions.heading.title", "板块标题", "textarea")}
      </div>
      ${bilingualField("solutions.heading.desc", "板块描述", "textarea")}
      <div class="grid">
        ${draft.solutions.cards
          .map(
            (_, index) => `
          <div class="group">
            <h3>方案卡片 ${index + 1}</h3>
            ${bilingualField(`solutions.cards.${index}.chip`, "上方标签")}
            ${bilingualField(`solutions.cards.${index}.title`, "标题")}
            ${bilingualField(`solutions.cards.${index}.desc`, "描述", "textarea")}
            ${singleField(`solutions.cards.${index}.href`, "方案页链接")}
            <div class="link-preview">可填写独立场景页链接，如 ./page.html?slug=central-kitchen-solution。</div>
            ${uploadField(`solutions.cards.${index}.image`, "方案图片", "1200 x 900 px", "建议上传场景图、工厂图或应用图。", true)}
          </div>
        `,
          )
          .join("")}
      </div>
    </section>

    <section class="panel" id="section-about">
      <div class="panel-head">
        <h2>关于我们</h2>
        <p>管理企业介绍、愿景使命以及右侧企业数据展示。</p>
      </div>
      <div class="grid">
        ${bilingualField("about.eyebrow", "眉标题")}
        ${bilingualField("about.title", "标题", "textarea")}
      </div>
      ${bilingualField("about.p1", "介绍段落 1", "textarea")}
      ${bilingualField("about.p2", "介绍段落 2", "textarea")}
      <div class="grid">
        ${bilingualField("about.missionTitle", "愿景标题")}
        ${bilingualField("about.missionDesc", "愿景描述", "textarea")}
      </div>
      <div class="grid">
        ${draft.stats
          .map(
            (_, index) => `
          <div class="group">
            <h3>数据 ${index + 1}</h3>
            ${singleField(`stats.${index}.value`, "数值")}
            ${bilingualField(`stats.${index}.label`, "标签")}
          </div>
        `,
          )
          .join("")}
      </div>
    </section>

    <section class="panel" id="section-news">
      <div class="panel-head">
        <h2>新闻资讯</h2>
        <p>管理首页新闻卡片标题、简介和配图。</p>
      </div>
      <div class="grid">
        ${bilingualField("news.heading.eyebrow", "板块眉标题")}
        ${bilingualField("news.heading.title", "板块标题", "textarea")}
      </div>
      ${bilingualField("news.heading.desc", "板块描述", "textarea")}
      <div class="grid">
        ${draft.news.cards
          .map(
            (_, index) => `
          <div class="group">
            <h3>新闻 ${index + 1}</h3>
            ${bilingualField(`news.cards.${index}.tag`, "标签")}
            ${bilingualField(`news.cards.${index}.title`, "标题", "textarea")}
            ${bilingualField(`news.cards.${index}.desc`, "描述", "textarea")}
            ${uploadField(`news.cards.${index}.image`, "新闻配图", "1200 x 720 px", "建议上传新闻封面图或设备案例图。", true)}
          </div>
        `,
          )
          .join("")}
      </div>
    </section>

    <section class="panel" id="section-footer">
      <div class="panel-head">
        <h2>页脚与二维码</h2>
        <p>管理页脚品牌信息、二维码、联系方式和底部栏目链接。</p>
      </div>
      <div class="grid">
        ${bilingualField("footer.brandName", "页脚品牌名称")}
        ${bilingualField("footer.brandSub", "页脚副标题")}
      </div>
      <div class="grid three">
        ${draft.footer.qr
          .map(
            (_, index) => `
          <div class="group compact">
            <h3>二维码 ${index + 1}</h3>
            ${bilingualField(`footer.qr.${index}.label`, "名称")}
            ${uploadField(`footer.qr.${index}.image`, "上传二维码", "430 x 430 px", "建议使用正方形二维码，四周保留安静区。", true)}
          </div>
        `,
          )
          .join("")}
      </div>
      <div class="grid">
        ${draft.footer.contact.map((_, index) => bilingualField(`footer.contact.${index}`, `联系方式 ${index + 1}`)).join("")}
      </div>
      <div class="grid">
        ${draft.footer.cols
          .map(
            (_, colIndex) => `
          <div class="group">
            <h3>页脚栏目 ${colIndex + 1}</h3>
            ${bilingualField(`footer.cols.${colIndex}.title`, "栏目标题")}
            ${draft.footer.cols[colIndex].links
              .map(
                (_, linkIndex) => `
              ${bilingualField(`footer.cols.${colIndex}.links.${linkIndex}.label`, `链接 ${linkIndex + 1} 名称`)}
              ${singleField(`footer.cols.${colIndex}.links.${linkIndex}.href`, `链接 ${linkIndex + 1} 地址`)}
            `,
              )
              .join("")}
          </div>
        `,
          )
          .join("")}
      </div>
      <div class="grid">
        ${bilingualField("footer.copyright", "版权")}
        ${bilingualField("footer.icp", "备案号")}
      </div>
      <div class="grid">
        ${bilingualField("footer.privacy", "隐私政策")}
        ${bilingualField("footer.terms", "用户协议")}
      </div>
    </section>
  `;

  root.querySelectorAll("input[data-path], textarea[data-path]").forEach((field) => {
    const value = get(field.dataset.path);
    if (field.tagName === "TEXTAREA") {
      field.value = value || "";
    } else if (field.type !== "file") {
      field.value = value || "";
    }
  });
};

const flash = (message) => {
  status.textContent = message;
};

const readFileAsDataUrl = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

root.addEventListener("input", (event) => {
  const field = event.target.closest("[data-path]");
  if (!field) return;
  store.setByPath(draft, field.dataset.path, field.value);
});

root.addEventListener("change", async (event) => {
  const input = event.target.closest("[data-upload-path]");
  if (!input || !input.files?.[0]) return;
  const dataUrl = await readFileAsDataUrl(input.files[0]);
  store.setByPath(draft, input.dataset.uploadPath, dataUrl);
  const preview = input.parentElement.querySelector(".upload-preview");
  if (preview) {
    preview.src = dataUrl;
    if (input.dataset.uploadKind === "video") {
      preview.setAttribute("controls", "");
      preview.setAttribute("muted", "");
      preview.setAttribute("playsinline", "");
    }
  }
  flash(input.dataset.uploadKind === "video" ? "视频已载入，记得点击“保存发布”。" : "图片已载入，记得点击“保存发布”。");
});

root.addEventListener("click", (event) => {
  const addSlide = event.target.closest("#add-slide-btn");
  if (addSlide) {
    draft.slides.push({
      badge: { zh: "新增海报", en: "New Slide" },
      title: { zh: "请输入海报标题", en: "Enter slide title" },
      desc: { zh: "请输入海报描述。", en: "Enter slide description." },
      ctaLabel: { zh: "查看产品", en: "View Product" },
      ctaHref: "./products.html",
      secondaryLabel: { zh: "了解更多", en: "Learn More" },
      secondaryHref: "#products",
      notes: [
        { zh: "卖点说明 1", en: "Feature note 1" },
        { zh: "卖点说明 2", en: "Feature note 2" },
        { zh: "卖点说明 3", en: "Feature note 3" },
      ],
      image: "",
      video: "",
    });
    render();
    flash("已新增首页海报。");
    return;
  }

  const removeSlide = event.target.closest("[data-remove-slide]");
  if (removeSlide) {
    if (draft.slides.length <= 1) {
      flash("首页海报至少保留 1 张。");
      return;
    }
    draft.slides.splice(Number(removeSlide.dataset.removeSlide), 1);
    render();
    flash("已删除首页海报。");
    return;
  }

  const addPage = event.target.closest("#add-page-btn");
  if (addPage) {
    draft.pages.push({
      slug: `new-page-${draft.pages.length + 1}`,
      name: { zh: "新页面", en: "New Page" },
      eyebrow: { zh: "二级页面", en: "Secondary Page" },
      title: { zh: "请输入页面标题", en: "Enter page title" },
      summary: { zh: "请输入页面摘要。", en: "Enter page summary." },
      body1: { zh: "请输入正文内容。", en: "Enter body content." },
      body2: { zh: "请输入更多内容。", en: "Enter more content." },
      ctaLabel: { zh: "立即咨询", en: "Contact Us" },
      ctaHref: "#contact",
      image: "",
    });
    render();
    flash("已新增二级页面。");
    return;
  }

  const removePage = event.target.closest("[data-remove-page]");
  if (removePage) {
    if (draft.pages.length <= 1) {
      flash("二级页面至少保留 1 个。");
      return;
    }
    draft.pages.splice(Number(removePage.dataset.removePage), 1);
    render();
    flash("已删除二级页面。");
    return;
  }

  const addProduct = event.target.closest("#add-product-btn");
  if (addProduct) {
    draft.products.cards.push({
      tag: { zh: "新增标签", en: "New Tag" },
      title: { zh: "新增产品", en: "New Product" },
      desc: { zh: "请填写产品描述。", en: "Please enter the product description." },
      image: "",
      href: "./products.html",
    });
    render();
    flash("已新增产品卡片。");
    return;
  }

  const removeProduct = event.target.closest("[data-remove-product]");
  if (removeProduct) {
    if (draft.products.cards.length <= 1) {
      flash("至少保留 1 张产品卡片。");
      return;
    }
    draft.products.cards.splice(Number(removeProduct.dataset.removeProduct), 1);
    render();
    flash("已删除产品卡片。");
  }
});

document.querySelector("#save-btn").addEventListener("click", () => {
  store.save(draft);
  flash("内容已保存，首页会读取最新配置。");
});

document.querySelector("#reset-btn").addEventListener("click", () => {
  draft = store.reset();
  render();
  flash("已恢复默认内容。");
});

document.querySelector("#export-btn").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(draft, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "tdr-site-content.json";
  link.click();
  URL.revokeObjectURL(link.href);
});

document.querySelector("#import-input").addEventListener("change", async (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const text = await file.text();
    draft = JSON.parse(text);
    render();
    flash("配置已导入，确认无误后点击“保存发布”。");
  } catch (error) {
    flash("导入失败：文件不是有效的 JSON 配置。");
  }
});

render();
