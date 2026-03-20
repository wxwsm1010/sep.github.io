const catalogAsset = (path) => encodeURI(path);
const toWebAssetPath = (path) =>
  path
    .replace(/\.png$/i, ".jpg")
    .replace(/\.jpeg$/i, ".jpg")
    .replace(/\.jpg$/i, "-web.jpg");

const categoryMeta = {
  automatic: {
    slug: "automatic",
    name: { zh: "全自动切片机", en: "Automatic Slicer" },
    eyebrow: { zh: "产品分类页", en: "Product Catalog" },
    title: { zh: "全自动切片机系列", en: "Automatic Slicer Series" },
    description: {
      zh: "面向连续化、大批量加工场景，兼顾切片效率、节拍稳定性与标准化交付能力。",
      en: "Built for continuous, high-volume processing with stable slicing rhythm and standardized output.",
    },
    intro: {
      zh: "全自动系列适合中央厨房、肉制品深加工和规模化食品产线。页面将各型号按产品卡片集中展示，便于快速选型。",
      en: "The automatic line fits central kitchens, meat processing, and scaled food production. Models are grouped for quick evaluation.",
    },
    highlight: { zh: "连续作业", en: "Continuous Output" },
    fallbackImage: "./切片机总目录/全自动切片机/SS-A300/SS-A300-1.jpg",
    series: [
      { key: "belt-auto", name: { zh: "皮带传动切片机", en: "Belt-driven Slicer" } },
      { key: "mechanical-auto", name: { zh: "机械传动切片机", en: "Mechanical-drive Slicer" } },
      { key: "smart-auto", name: { zh: "智能全自动切片机", en: "Smart Automatic Slicer" } },
    ],
    scenes: [
      { zh: "中央厨房", en: "Central Kitchen" },
      { zh: "肉制品加工", en: "Meat Processing" },
      { zh: "规模化产线", en: "Scaled Production" },
    ],
    featureSet: [
      {
        zh: "连续进料与稳定节拍输出，适合高频次切片任务。",
        en: "Continuous feeding and stable rhythm for frequent slicing tasks.",
      },
      {
        zh: "适合标准化交付场景，便于工厂统一操作与维护。",
        en: "Suitable for standardized delivery and unified factory operation.",
      },
      {
        zh: "机身结构完整，适合官网展示设备外观与工艺细节。",
        en: "Complete machine structure works well for presenting design and process details.",
      },
    ],
  },
  "semi-automatic": {
    slug: "semi-automatic",
    name: { zh: "半自动切片机", en: "Semi-automatic Slicer" },
    eyebrow: { zh: "产品分类页", en: "Product Catalog" },
    title: { zh: "半自动切片机系列", en: "Semi-automatic Slicer Series" },
    description: {
      zh: "强调操作灵活性与投入产出比，适合门店、小型加工场与多品类切片工况。",
      en: "Focused on flexible operation and cost-performance for shops, workshops, and mixed slicing scenarios.",
    },
    intro: {
      zh: "半自动系列适合多规格、多批次和中小型加工环境。页面按型号组合展示，方便客户对比不同配置。",
      en: "The semi-automatic line supports multi-spec and small-batch processing, making model comparison straightforward.",
    },
    highlight: { zh: "灵活易用", en: "Flexible Use" },
    fallbackImage: "./切片机总目录/半自动切片机/SS-350B/SS-350B-1.jpg",
    series: [
      { key: "luxury-semi", name: { zh: "豪华半自动切片机", en: "Luxury Semi-automatic" } },
      { key: "professional-semi", name: { zh: "专业型半自动系列", en: "Professional Semi-automatic" } },
      { key: "c-standard-semi", name: { zh: "C 型标准型半自动系列", en: "C-type Standard Semi-automatic" } },
      { key: "e-standard-semi", name: { zh: "E 型标准型半自动系列", en: "E-type Standard Semi-automatic" } },
      { key: "h-standard-semi", name: { zh: "H 型标准型半自动系列", en: "H-type Standard Semi-automatic" } },
    ],
    scenes: [
      { zh: "门店后厨", en: "Back Kitchen" },
      { zh: "小型工厂", en: "Small Factory" },
      { zh: "多品类切片", en: "Multi-product Slicing" },
    ],
    featureSet: [
      {
        zh: "上手门槛低，适合人工配合型切片工位。",
        en: "Easy to operate and ideal for manual-assisted slicing stations.",
      },
      {
        zh: "适合多品类、小批量生产场景，切换更灵活。",
        en: "Fits mixed products and small-batch production with flexible switching.",
      },
      {
        zh: "设备结构简洁，适合突出成本效率与维护便利性。",
        en: "A clean structure that highlights cost efficiency and easy maintenance.",
      },
    ],
  },
  vertical: {
    slug: "vertical",
    name: { zh: "立式切片机", en: "Vertical Slicer" },
    eyebrow: { zh: "产品分类页", en: "Product Catalog" },
    title: { zh: "立式切片机系列", en: "Vertical Slicer Series" },
    description: {
      zh: "采用更紧凑的立式结构，强调占地控制、特殊物料适配与设备稳定性。",
      en: "Compact vertical construction built for space efficiency, specialty materials, and stable operation.",
    },
    intro: {
      zh: "立式系列适合空间受限或需要更集中操作路径的生产环境。页面集中展示不同立式机型的结构差异与细节图。",
      en: "The vertical line suits tight layouts and operations requiring a focused handling path, with strong visual differentiation across models.",
    },
    highlight: { zh: "紧凑布局", en: "Compact Layout" },
    fallbackImage: "./切片机总目录/立式切片机/SS-F350C1/SS-F350C1-1.jpg",
    series: [{ key: "vertical-main", name: { zh: "立式切片机系列", en: "Vertical Slicer Series" } }],
    scenes: [
      { zh: "紧凑工位", en: "Compact Stations" },
      { zh: "特殊物料", en: "Special Materials" },
      { zh: "空间优化", en: "Space Optimization" },
    ],
    featureSet: [
      {
        zh: "立式结构更利于在有限空间内完成切片部署。",
        en: "Vertical construction is ideal for slicing deployment in limited spaces.",
      },
      {
        zh: "适合突出机身结构、刀组区域与导料路径细节。",
        en: "Well suited to show frame design, blade area, and guide path details.",
      },
      {
        zh: "可作为紧凑产线和特殊工况的重点推荐型号。",
        en: "Useful as a recommended line for compact layouts and specialty workflows.",
      },
    ],
  },
  smart: {
    slug: "smart",
    name: { zh: "智能机", en: "Smart Slicer" },
    eyebrow: { zh: "产品分类页", en: "Product Catalog" },
    title: { zh: "智能切片机系列", en: "Smart Slicer Series" },
    description: {
      zh: "围绕智能控制、配方管理与联网监测能力，服务数字化升级产线。",
      en: "Designed around intelligent control, recipe management, and connected monitoring for digital upgrades.",
    },
    intro: {
      zh: "智能机系列适合需要联机管理、参数配方和更高自动化管理能力的客户。页面重点展示更高级的产品定位与机身实拍。",
      en: "The smart line targets customers seeking connected management, recipe control, and higher automation capability.",
    },
    highlight: { zh: "智能控制", en: "Smart Control" },
    fallbackImage: "./切片机总目录/智能机/SS-F350H/SS-F350H-1.jpg",
    series: [{ key: "smart-main", name: { zh: "智能切片机系列", en: "Smart Slicer Series" } }],
    scenes: [
      { zh: "数字化工厂", en: "Digital Factory" },
      { zh: "联网管理", en: "Connected Management" },
      { zh: "升级产线", en: "Upgraded Lines" },
    ],
    featureSet: [
      {
        zh: "强调智能化、状态监测与联机应用场景。",
        en: "Focused on intelligence, status monitoring, and connected use cases.",
      },
      {
        zh: "更适合展示升级型设备的定位与品牌技术形象。",
        en: "Ideal for presenting premium positioning and technical brand image.",
      },
      {
        zh: "适用于对自动化体验要求更高的食品加工客户。",
        en: "Suitable for food processors seeking a higher level of automation experience.",
      },
    ],
  },
  "fresh-meat": {
    slug: "fresh-meat",
    name: { zh: "鲜肉切片机", en: "Fresh Meat Slicer" },
    eyebrow: { zh: "产品分类页", en: "Product Catalog" },
    title: { zh: "鲜肉切片机系列", en: "Fresh Meat Slicer Series" },
    description: {
      zh: "针对鲜肉加工场景，强调切片效率、出片完整度与连续作业稳定性。",
      en: "Designed for fresh meat processing with strong slicing efficiency, consistency, and throughput.",
    },
    intro: {
      zh: "鲜肉切片机用于肉类门店和加工产线，便于快速完成标准化切片作业。",
      en: "Fresh meat slicers serve butcher shops and processing lines for standardized slicing operations.",
    },
    highlight: { zh: "鲜肉加工", en: "Fresh Meat Processing" },
    fallbackImage: "./切片机总目录/全自动切片机/SS-A300/SS-A300-1.jpg",
    series: [{ key: "fresh-main", name: { zh: "鲜肉切片机系列", en: "Fresh Meat Slicer Series" } }],
    scenes: [
      { zh: "鲜肉切片", en: "Fresh Meat Slicing" },
      { zh: "门店后厨", en: "Back Kitchen" },
      { zh: "冷鲜加工", en: "Cold Fresh Processing" },
    ],
    featureSet: [
      {
        zh: "适配鲜肉工况，强调连续切片效率与切面整齐度。",
        en: "Optimized for fresh meat workflows with consistent slicing and clean surfaces.",
      },
      {
        zh: "适合门店和工厂鲜肉切片环节的标准化部署。",
        en: "Suitable for standardized deployment across retail and factory workflows.",
      },
      {
        zh: "兼顾出片稳定性和操作便捷性。",
        en: "Balances slice consistency with simple operation.",
      },
    ],
  },
};

const brochureAsset = (pageNumber) => `./brochure_pages/page-${String(pageNumber).padStart(2, "0")}.jpg`;

const brochureDataBySlug = {
  "automatic-ss-a250": {
    brochureImages: [brochureAsset(12)],
    specs: [
      { label: { zh: "型号", en: "Model" }, value: "SS-A250" },
      { label: { zh: "刀片直径", en: "Blade Diameter" }, value: "250 mm" },
      { label: { zh: "刀片马达", en: "Blade Motor" }, value: "180 W" },
      { label: { zh: "切片马达", en: "Slicing Motor" }, value: "80 W" },
      { label: { zh: "切割厚度", en: "Slice Thickness" }, value: "0-12 mm" },
      { label: { zh: "切割尺寸", en: "Cut Size" }, value: "130 × 130 mm" },
      { label: { zh: "净重", en: "Net Weight" }, value: "45.5 kg" },
      { label: { zh: "包装尺寸", en: "Package Size" }, value: "670 × 630 × 820 mm" },
    ],
  },
  "automatic-ss-a300": {
    brochureImages: [brochureAsset(13)],
    specs: [
      { label: { zh: "型号", en: "Model" }, value: "SS-A300" },
      { label: { zh: "刀片直径", en: "Blade Diameter" }, value: "300 mm" },
      { label: { zh: "刀片马达", en: "Blade Motor" }, value: "250 W" },
      { label: { zh: "切片马达", en: "Slicing Motor" }, value: "150 W" },
      { label: { zh: "切割厚度", en: "Slice Thickness" }, value: "0-13 mm" },
      { label: { zh: "净重", en: "Net Weight" }, value: "61.5 kg" },
      { label: { zh: "包装尺寸", en: "Package Size" }, value: "750 × 640 × 845 mm" },
    ],
  },
  "automatic-ss-a300b": {
    brochureImages: [brochureAsset(15)],
    specs: [
      { label: { zh: "型号", en: "Model" }, value: "SS-A300B" },
      { label: { zh: "刀片直径", en: "Blade Diameter" }, value: "300 mm" },
      { label: { zh: "切片马达", en: "Slicing Motor" }, value: "370 W" },
      { label: { zh: "切割厚度", en: "Slice Thickness" }, value: "0-13 mm" },
      { label: { zh: "切割尺寸", en: "Cut Size" }, value: "140 × 200 mm" },
      { label: { zh: "包装尺寸", en: "Package Size" }, value: "750 × 640 × 900 mm" },
    ],
  },
  "automatic-ss-a300c": {
    brochureImages: [brochureAsset(14)],
    specs: [
      { label: { zh: "型号", en: "Model" }, value: "SS-A300C" },
      { label: { zh: "刀片直径", en: "Blade Diameter" }, value: "300 mm" },
      { label: { zh: "刀片马达", en: "Blade Motor" }, value: "180 W" },
      { label: { zh: "切片马达", en: "Slicing Motor" }, value: "80 W" },
      { label: { zh: "切割厚度", en: "Slice Thickness" }, value: "0-13 mm" },
      { label: { zh: "切割尺寸", en: "Cut Size" }, value: "140 × 165 mm" },
      { label: { zh: "净重", en: "Net Weight" }, value: "51.5 kg" },
      { label: { zh: "包装尺寸", en: "Package Size" }, value: "670 × 630 × 820 mm" },
    ],
  },
  "automatic-ss-a350": {
    brochureImages: [brochureAsset(16)],
    specs: [
      { label: { zh: "型号", en: "Model" }, value: "SS-A350" },
      { label: { zh: "刀片直径", en: "Blade Diameter" }, value: "350 mm" },
      { label: { zh: "刀片马达", en: "Blade Motor" }, value: "370 W" },
      { label: { zh: "切片马达", en: "Slicing Motor" }, value: "150 W" },
      { label: { zh: "切割厚度", en: "Slice Thickness" }, value: "0-13 mm" },
      { label: { zh: "切割尺寸", en: "Cut Size" }, value: "140 × 220 mm" },
      { label: { zh: "净重", en: "Net Weight" }, value: "74.5 kg" },
      { label: { zh: "包装尺寸", en: "Package Size" }, value: "820 × 705 × 885 mm" },
    ],
  },
  "automatic-ss-a350b": {
    brochureImages: [brochureAsset(17)],
    specs: [
      { label: { zh: "型号", en: "Model" }, value: "SS-A350B" },
      { label: { zh: "刀片直径", en: "Blade Diameter" }, value: "350 mm" },
      { label: { zh: "刀片马达", en: "Blade Motor" }, value: "370 W" },
      { label: { zh: "切片马达", en: "Slicing Motor" }, value: "370 W" },
      { label: { zh: "切割厚度", en: "Slice Thickness" }, value: "0-13 mm" },
      { label: { zh: "切割尺寸", en: "Cut Size" }, value: "160 × 230 mm" },
      { label: { zh: "包装尺寸", en: "Package Size" }, value: "820 × 705 × 945 mm" },
    ],
  },
  "semi-automatic-ss-250-ss-300": {
    brochureImages: [brochureAsset(9)],
    specs: [
      { label: { zh: "型号", en: "Model" }, value: "SS-250 / SS-300" },
      { label: { zh: "刀片直径", en: "Blade Diameter" }, value: "250 / 300 mm" },
      { label: { zh: "切割厚度", en: "Slice Thickness" }, value: "0-13 mm" },
      { label: { zh: "包装尺寸", en: "Package Size" }, value: "610 × 495 × 460 / 690 × 570 × 535 mm" },
      { label: { zh: "参数来源", en: "Source" }, value: "2025 产品宣传册第 16 页" },
    ],
  },
  "semi-automatic-ss-250b-ss-300b": {
    brochureImages: [brochureAsset(7)],
    specs: [
      { label: { zh: "型号", en: "Model" }, value: "SS-250B / SS-300B" },
      { label: { zh: "刀片直径", en: "Blade Diameter" }, value: "250 / 300 mm" },
      { label: { zh: "切割厚度", en: "Slice Thickness" }, value: "0-13 mm" },
      { label: { zh: "产品特点", en: "Highlight" }, value: "单手压料，自动送料" },
      { label: { zh: "参数来源", en: "Source" }, value: "2025 产品宣传册第 12 页" },
    ],
  },
  "semi-automatic-ss-250c-ss-300c": {
    brochureImages: [brochureAsset(5)],
    specs: [
      { label: { zh: "型号", en: "Model" }, value: "SS-250C / SS-300C" },
      { label: { zh: "刀片直径", en: "Blade Diameter" }, value: "250 / 300 mm" },
      { label: { zh: "切割厚度", en: "Slice Thickness" }, value: "0-17 mm" },
      { label: { zh: "包装尺寸", en: "Package Size" }, value: "530 × 455 × 440 mm" },
      { label: { zh: "参数来源", en: "Source" }, value: "2025 产品宣传册第 8 页" },
    ],
  },
  "semi-automatic-ss-250e-ss-300e-ss-350e": {
    brochureImages: [brochureAsset(6)],
    specs: [
      { label: { zh: "型号", en: "Model" }, value: "SS-250E / SS-300E / SS-350E" },
      { label: { zh: "刀片直径", en: "Blade Diameter" }, value: "250 / 300 / 350 mm" },
      { label: { zh: "刀片马达", en: "Blade Motor" }, value: "180 / 250 / 425 W" },
      { label: { zh: "切割厚度", en: "Slice Thickness" }, value: "0-13 mm" },
      { label: { zh: "切割尺寸", en: "Cut Size" }, value: "160 × 200 / 190 × 210 / 200 × 270 mm" },
      { label: { zh: "参数来源", en: "Source" }, value: "2025 产品宣传册第 10 页" },
    ],
  },
  "semi-automatic-ss-350b": {
    brochureImages: [brochureAsset(8)],
    specs: [
      { label: { zh: "型号", en: "Model" }, value: "SS-350B" },
      { label: { zh: "刀片直径", en: "Blade Diameter" }, value: "350 mm" },
      { label: { zh: "刀片马达", en: "Blade Motor" }, value: "370 W" },
      { label: { zh: "切割厚度", en: "Slice Thickness" }, value: "0-13 mm" },
      { label: { zh: "切割尺寸", en: "Cut Size" }, value: "170 × 250 mm" },
      { label: { zh: "净重", en: "Net Weight" }, value: "47.5 kg" },
      { label: { zh: "包装尺寸", en: "Package Size" }, value: "820 × 680 × 750 mm" },
    ],
  },
  "vertical-ss-f350c": {
    brochureImages: [brochureAsset(20)],
    specs: [
      { label: { zh: "型号", en: "Model" }, value: "SS-F350C" },
      { label: { zh: "刀片直径", en: "Blade Diameter" }, value: "350 mm" },
      { label: { zh: "刀片马达", en: "Blade Motor" }, value: "750 W" },
      { label: { zh: "切割厚度", en: "Slice Thickness" }, value: "0-20 mm" },
      { label: { zh: "切割尺寸", en: "Cut Size" }, value: "180 × 320 mm" },
      { label: { zh: "净重", en: "Net Weight" }, value: "243 kg" },
      { label: { zh: "包装尺寸", en: "Package Size" }, value: "1120 × 860 × 1630 mm" },
    ],
  },
  "vertical-ss-f350c1": {
    brochureImages: [brochureAsset(20)],
    specs: [
      { label: { zh: "型号", en: "Model" }, value: "SS-F350C1" },
      { label: { zh: "刀片直径", en: "Blade Diameter" }, value: "350 mm" },
      { label: { zh: "刀片马达", en: "Blade Motor" }, value: "750 W" },
      { label: { zh: "切割厚度", en: "Slice Thickness" }, value: "0-20 mm" },
      { label: { zh: "切割尺寸", en: "Cut Size" }, value: "180 × 320 mm" },
      { label: { zh: "净重", en: "Net Weight" }, value: "229 kg" },
      { label: { zh: "包装尺寸", en: "Package Size" }, value: "1120 × 860 × 1630 mm" },
    ],
  },
  "vertical-ss-f350c5": {
    brochureImages: [brochureAsset(21)],
    specs: [
      { label: { zh: "型号", en: "Model" }, value: "SS-F350C5" },
      { label: { zh: "刀片直径", en: "Blade Diameter" }, value: "350 mm" },
      { label: { zh: "刀片马达", en: "Blade Motor" }, value: "750 W" },
      { label: { zh: "切片马达", en: "Slicing Motor" }, value: "750 W" },
      { label: { zh: "切割厚度", en: "Slice Thickness" }, value: "0-20 mm" },
      { label: { zh: "切割尺寸", en: "Cut Size" }, value: "180 × 320 mm" },
      { label: { zh: "净重", en: "Net Weight" }, value: "197 kg" },
      { label: { zh: "包装尺寸", en: "Package Size" }, value: "1125 × 760 × 1585 mm" },
    ],
  },
  "vertical-ss-f350h": {
    brochureImages: [brochureAsset(22)],
    specs: [
      { label: { zh: "型号", en: "Model" }, value: "SS-F350H" },
      { label: { zh: "刀片直径", en: "Blade Diameter" }, value: "350 mm" },
      { label: { zh: "刀片马达", en: "Blade Motor" }, value: "750 W" },
      { label: { zh: "切片马达", en: "Slicing Motor" }, value: "750 W" },
      { label: { zh: "切割厚度", en: "Slice Thickness" }, value: "0-20 mm" },
      { label: { zh: "切割尺寸", en: "Cut Size" }, value: "180 × 320 mm" },
      { label: { zh: "净重", en: "Net Weight" }, value: "169 kg" },
      { label: { zh: "包装尺寸", en: "Package Size" }, value: "1125 × 760 × 1585 mm" },
    ],
  },
  "smart-ss-f350h": {
    brochureImages: [brochureAsset(22)],
    specs: [
      { label: { zh: "型号", en: "Model" }, value: "SS-F350H" },
      { label: { zh: "刀片直径", en: "Blade Diameter" }, value: "350 mm" },
      { label: { zh: "刀片马达", en: "Blade Motor" }, value: "750 W" },
      { label: { zh: "切片马达", en: "Slicing Motor" }, value: "750 W" },
      { label: { zh: "切割厚度", en: "Slice Thickness" }, value: "0-20 mm" },
      { label: { zh: "切割尺寸", en: "Cut Size" }, value: "180 × 320 mm" },
      { label: { zh: "净重", en: "Net Weight" }, value: "169 kg" },
      { label: { zh: "包装尺寸", en: "Package Size" }, value: "1125 × 760 × 1585 mm" },
    ],
  },
};

const productEntries = [
  {
    category: "automatic",
    slug: "automatic-ss-a250",
    model: "SS-A250",
    series: "belt-auto",
    folder: "./切片机总目录/全自动切片机/SS-A250",
    images: ["SS-A250-1.png", "SS-A250-2.png"],
  },
  {
    category: "automatic",
    slug: "automatic-ss-a300",
    model: "SS-A300",
    series: "belt-auto",
    folder: "./切片机总目录/全自动切片机/SS-A300",
    images: ["SS-A300-1.png", "SS-A300-2.png"],
  },
  {
    category: "automatic",
    slug: "automatic-ss-a300b",
    model: "SS-A300B",
    series: "mechanical-auto",
    folder: "./切片机总目录/全自动切片机/SS-A300B",
    images: ["SS-A300B-1.png", "SS-A300B-2.png"],
  },
  {
    category: "automatic",
    slug: "automatic-ss-a300c",
    model: "SS-A300C",
    series: "belt-auto",
    folder: "./切片机总目录/全自动切片机/SS-A300C",
    images: ["SS-A300C-1.png", "SS-A300C-2.png"],
  },
  {
    category: "automatic",
    slug: "automatic-ss-a350",
    model: "SS-A350",
    series: "belt-auto",
    folder: "./切片机总目录/全自动切片机/SS-A350",
    images: ["SS-A350-1.png", "SS-A350-2.png"],
  },
  {
    category: "automatic",
    slug: "automatic-ss-a350b",
    model: "SS-A350B",
    series: "mechanical-auto",
    folder: "./切片机总目录/全自动切片机/SS-A350B",
    images: ["SS-A350B-1.png", "SS-A350B-2.png"],
  },
  {
    category: "semi-automatic",
    slug: "semi-automatic-ss-250-ss-300",
    model: "SS-250 / SS-300",
    series: "luxury-semi",
    folder: "./切片机总目录/半自动切片机/SS-250 SS-300",
    images: ["SS-250 SS-300-1.png", "SS-250 SS-300-2.png"],
  },
  {
    category: "semi-automatic",
    slug: "semi-automatic-ss-250b-ss-300b",
    model: "SS-250B / SS-300B",
    series: "professional-semi",
    folder: "./切片机总目录/半自动切片机/SS-250B SS-300B",
    images: ["SS-250B SS-300B-1.png", "SS-250B SS-300B-2.png"],
  },
  {
    category: "semi-automatic",
    slug: "semi-automatic-ss-250c-ss-300c",
    model: "SS-250C / SS-300C",
    series: "c-standard-semi",
    folder: "./切片机总目录/半自动切片机/SS-250C SS-300C",
    images: ["SS-250C SS-300C-1.png", "SS-250C SS-300C-2.png"],
  },
  {
    category: "semi-automatic",
    slug: "semi-automatic-ss-250e-ss-300e-ss-350e",
    model: "SS-250E / SS-300E / SS-350E",
    series: "e-standard-semi",
    folder: "./切片机总目录/半自动切片机/SS-250E SS-300E SS-350E",
    images: ["SS-250E SS-300E SS-350E-1.png", "SS-250E SS-300E SS-350E-2.png"],
  },
  {
    category: "semi-automatic",
    slug: "semi-automatic-ss-350b",
    model: "SS-350B",
    series: "professional-semi",
    folder: "./切片机总目录/半自动切片机/SS-350B",
    images: ["SS-350B-1.png", "SS-350B-2.png"],
  },
  {
    category: "semi-automatic",
    slug: "semi-automatic-ss-220c",
    model: "SS-220C",
    series: "c-standard-semi",
    folder: "",
    images: [],
  },
  {
    category: "semi-automatic",
    slug: "semi-automatic-ss-275e",
    model: "SS-275E",
    series: "e-standard-semi",
    folder: "",
    images: [],
  },
  {
    category: "semi-automatic",
    slug: "semi-automatic-ss-330e",
    model: "SS-330E",
    series: "e-standard-semi",
    folder: "",
    images: [],
  },
  {
    category: "semi-automatic",
    slug: "semi-automatic-ss-300h",
    model: "SS-300H",
    series: "h-standard-semi",
    folder: "",
    images: [],
  },
  {
    category: "vertical",
    slug: "vertical-ss-f350c",
    model: "SS-F350C",
    series: "vertical-main",
    folder: "./切片机总目录/立式切片机/SS-F350C",
    images: ["SS-F350C-1.png", "SS-F350C-2.png", "SS-F350C-3.png"],
  },
  {
    category: "vertical",
    slug: "vertical-ss-f350c1",
    model: "SS-F350C1",
    series: "vertical-main",
    folder: "./切片机总目录/立式切片机/SS-F350C1",
    images: ["SS-F350C1-1.png", "SS-F350C1-2.png", "SS-F350C1-3.png"],
  },
  {
    category: "vertical",
    slug: "vertical-ss-f350c5",
    model: "SS-F350C5",
    series: "vertical-main",
    folder: "./切片机总目录/立式切片机/SS-F350C5",
    images: ["SS-F350C5-1.png", "SS-F350C5-2.png", "SS-F350C5-3.png"],
  },
  {
    category: "smart",
    slug: "smart-ss-f350h",
    model: "SS-F350H",
    series: "smart-main",
    folder: "./切片机总目录/智能机/SS-F350H",
    images: ["SS-F350H-1.png", "SS-F350H-2.png", "SS-F350H-3.png"],
  },
  {
    category: "automatic",
    slug: "automatic-ss-a330h",
    model: "SS-A330H",
    series: "smart-auto",
    folder: "",
    images: [],
  },
  {
    category: "automatic",
    slug: "automatic-ss-a350h",
    model: "SS-A350H",
    series: "smart-auto",
    folder: "",
    images: [],
  },
  {
    category: "smart",
    slug: "smart-ss-a330h",
    model: "SS-A330H",
    series: "smart-main",
    folder: "",
    images: [],
  },
  {
    category: "smart",
    slug: "smart-ss-a350h",
    model: "SS-A350H",
    series: "smart-main",
    folder: "",
    images: [],
  },
  {
    category: "fresh-meat",
    slug: "fresh-meat-ss-300v5",
    model: "SS-300V5",
    series: "fresh-main",
    folder: "",
    images: [],
  },
];

const makeProduct = (entry) => {
  const meta = categoryMeta[entry.category];
  const brochure = brochureDataBySlug[entry.slug] || { brochureImages: [], specs: [] };
  const gallery = entry.folder ? entry.images.map((image) => catalogAsset(`${entry.folder}/${toWebAssetPath(image)}`)) : [];
  const heroImage = gallery[0] || (meta.fallbackImage ? catalogAsset(toWebAssetPath(meta.fallbackImage)) : "");
  return {
    ...entry,
    name: {
      zh: `${entry.model} ${meta.name.zh}`,
      en: `${entry.model} ${meta.name.en}`,
    },
    shortName: entry.model,
    summary: {
      zh: `${entry.model} 属于${meta.name.zh}系列，页面使用你提供的实拍图集进行展示，可直接用于官网分类页与型号详情页呈现。`,
      en: `${entry.model} belongs to the ${meta.name.en} line and uses your supplied photo set for catalog and detail presentation.`,
    },
    description: {
      zh: `${entry.model} 面向${meta.name.zh}场景展示，适合在官网中作为独立型号页进行陈列，并与同系列机型形成清晰对比。`,
      en: `${entry.model} is presented as a dedicated ${meta.name.en} model page and supports clear comparison within the line.`,
    },
    featureSet: meta.featureSet,
    scenes: meta.scenes,
    gallery,
    heroImage,
    brochureImages: brochure.brochureImages,
    specs: brochure.specs,
    ctaLabel: { zh: "立即咨询该型号", en: "Contact for This Model" },
    ctaHref: "#contact",
    article: [
      {
        title: { zh: "产品定位", en: "Positioning" },
        body: {
          zh: `${entry.model} 适合作为${meta.name.zh}中的独立展示型号。页面采用更接近产品发布页的编排方式，以大图、摘要说明和分段内容突出型号辨识度。`,
          en: `${entry.model} is positioned as a standalone model within the ${meta.name.en} family, using a launch-style layout with hero imagery and editorial sections.`,
        },
      },
      {
        title: { zh: "展示重点", en: "What to Highlight" },
        body: {
          zh: `这台设备的详情页重点展示机身结构、切片区域与实拍细节。后续如果补充参数表、适用物料和产能信息，也可以直接接入当前版式。`,
          en: `The page focuses on machine structure, slicing area, and real product photography. Additional specs, material fit, and capacity data can be added later.`,
        },
      },
      {
        title: { zh: "官网使用方式", en: "How It Fits the Site" },
        body: {
          zh: `当前详情页适合作为销售咨询入口、产品资料页和分类页延伸阅读页。用户可从产品分类页进入，再跳转到具体型号获取更多视觉信息。`,
          en: `This detail page works as a sales inquiry entry, product data page, and extension of the catalog. Visitors can move from the catalog into each model for deeper review.`,
        },
      },
    ],
  };
};

const products = productEntries.map(makeProduct);

const categories = Object.values(categoryMeta).map((meta) => {
  const models = products.filter((product) => product.category === meta.slug);
  const seriesGroups = (meta.series || [])
    .map((series) => ({
      ...series,
      models: models.filter((model) => model.series === series.key),
    }))
    .filter((series) => series.models.length > 0);
  return {
    ...meta,
    modelCount: models.length,
    imageCount: models.reduce((sum, model) => sum + model.gallery.length, 0),
    coverImage: models[0]?.heroImage || "",
    models,
    seriesGroups,
  };
});

const getCategory = (slug) => categories.find((category) => category.slug === slug) || null;
const getProduct = (slug) => products.find((product) => product.slug === slug) || null;

window.ProductCatalog = {
  categories,
  products,
  getCategory,
  getProduct,
};
