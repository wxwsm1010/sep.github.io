const HOME_MEDIA = {
  heroSlides: [
    "./home_media/hero-overview-triptych.png",
    "./home_media/hero-semi.png",
    "./home_media/hero-automatic.png",
    "./home_media/hero-vertical.png",
    "./home_media/hero-smart.png",
  ],
  solutions: [
    "./scene_media/central-kitchen.svg",
    "./scene_media/meat-processing.svg",
    "./scene_media/fresh-cut-factory.svg",
    "./scene_media/prepared-food.svg",
  ],
};

const DESIRED_HERO_ORDER = [
  "./products.html",
  "./products.html?category=semi-automatic",
  "./products.html?category=automatic",
  "./products.html?category=vertical",
  "./products.html?category=smart",
];

const defaultSiteContent = {
  brand: {
    name: "天地人切片机",
    sub: "TIANDIREN SLICER",
    logo: "./scene_media/brand-default.svg",
  },
  header: {
    contact: {
      label: { zh: "联系我们", en: "Contact Us" },
      href: "#contact",
    },
  },
  nav: [
    { label: { zh: "首页", en: "Home" }, href: "#top" },
    { label: { zh: "产品中心", en: "Products" }, href: "./products.html" },
    { label: { zh: "解决方案", en: "Solutions" }, href: "#solutions" },
    { label: { zh: "新闻资讯", en: "News" }, href: "#news" },
    { label: { zh: "关于我们", en: "About" }, href: "#about" },
    { label: { zh: "售后保障", en: "After-sales" }, href: "./page.html?slug=after-sales-support" },
  ],
  productMenu: [
    { label: { zh: "全自动切片机", en: "Automatic Slicer" }, href: "./products.html?category=automatic" },
    { label: { zh: "半自动切片机", en: "Semi-automatic Slicer" }, href: "./products.html?category=semi-automatic" },
    { label: { zh: "立式切片机", en: "Vertical Slicer" }, href: "./products.html?category=vertical" },
    { label: { zh: "智能切片机", en: "Smart Slicer" }, href: "./products.html?category=smart" },
  ],
  pages: [
    {
      slug: "automatic-slicer",
      name: { zh: "全自动切片机", en: "Automatic Slicer" },
      eyebrow: { zh: "产品分支页", en: "Product Page" },
      title: { zh: "全自动切片机", en: "Automatic Slicer Series" },
      summary: {
        zh: "面向大批量食品加工场景，提供连续作业、高精度切片与稳定节拍输出能力。",
        en: "Designed for high-volume food processing with precise slicing and stable continuous output.",
      },
      body1: {
        zh: "全自动切片机适用于中央厨房、肉制品深加工、净菜工厂等高节拍生产环境。设备通过连续输送、自动压料与厚度参数控制，实现高效稳定的标准化切片作业。",
        en: "Automatic slicers are ideal for central kitchens, meat processing, and fresh-cut plants. Continuous conveying, auto pressing, and thickness control deliver standardized slicing at scale.",
      },
      body2: {
        zh: "页面中可继续扩展型号参数、产能范围、适配物料、刀组方案和客户案例，帮助客户快速完成选型。",
        en: "This page can be expanded with model specs, capacity ranges, material compatibility, blade options, and customer cases.",
      },
      ctaLabel: { zh: "咨询全自动机型", en: "Ask About Automatic Models" },
      ctaHref: "#contact",
      image: "",
    },
    {
      slug: "semi-automatic-slicer",
      name: { zh: "半自动切片机", en: "Semi-automatic Slicer" },
      eyebrow: { zh: "产品分支页", en: "Product Page" },
      title: { zh: "半自动切片机", en: "Semi-automatic Slicer Series" },
      summary: {
        zh: "适合中小型加工场景，兼顾切片稳定性、操作灵活性与维护便利性。",
        en: "Built for small and mid-sized production with flexible operation and stable slicing quality.",
      },
      body1: {
        zh: "半自动切片机适用于多品类、小批量和柔性加工需求较强的工厂与门店。设备结构紧凑、上手简单，可根据不同食材快速切换工艺。",
        en: "Semi-automatic slicers fit flexible production needs, multi-category processing, and small-batch operations. Compact construction and quick setup support varied ingredients.",
      },
      body2: {
        zh: "适合展示设备结构、操作流程、清洗维护方式与典型应用案例，帮助客户判断投入产出比。",
        en: "Ideal for presenting operating workflow, cleaning procedures, and application examples to support cost-performance evaluation.",
      },
      ctaLabel: { zh: "咨询半自动机型", en: "Ask About Semi-automatic Models" },
      ctaHref: "#contact",
      image: "",
    },
    {
      slug: "vertical-slicer",
      name: { zh: "立式切片机", en: "Vertical Slicer" },
      eyebrow: { zh: "产品分支页", en: "Product Page" },
      title: { zh: "立式切片机", en: "Vertical Slicer Series" },
      summary: {
        zh: "紧凑布局、节省空间，适配特殊物料与工位密集型生产环境。",
        en: "Compact and space-saving for special materials and dense workstation layouts.",
      },
      body1: {
        zh: "立式切片机在工位空间有限、物料形态特殊或需要更集中操作的场景下更具优势。通过立式结构实现稳固切割和更高的空间利用率。",
        en: "Vertical slicers provide better space utilization and stable cutting in constrained layouts or when processing specialty materials.",
      },
      body2: {
        zh: "页面可重点展示占地尺寸、切片精度、典型安装方式和对比优势，让客户快速识别适用工况。",
        en: "This page can emphasize footprint, slice precision, installation options, and scenario fit for fast qualification.",
      },
      ctaLabel: { zh: "咨询立式机型", en: "Ask About Vertical Models" },
      ctaHref: "#contact",
      image: "",
    },
    {
      slug: "smart-slicer",
      name: { zh: "智能切片机", en: "Smart Slicer" },
      eyebrow: { zh: "产品分支页", en: "Product Page" },
      title: { zh: "智能切片机", en: "Smart Slicer Series" },
      summary: {
        zh: "结合智能参数控制、数据监测与工艺联动，服务更先进的数字化食品加工产线。",
        en: "Smart slicing systems with intelligent parameter control and data monitoring for digital food production lines.",
      },
      body1: {
        zh: "智能切片机面向对自动化、追溯和产线联动要求更高的客户，可结合触控配方、状态监控和设备联机管理提升整体效率。",
        en: "Smart slicers support recipe-based control, status monitoring, and connected operations for customers seeking higher automation and traceability.",
      },
      body2: {
        zh: "适合扩展显示屏界面、数据管理能力、联网功能和智能维保能力，突出设备升级价值。",
        en: "This page can highlight HMI interfaces, connectivity, data management, and predictive maintenance capabilities.",
      },
      ctaLabel: { zh: "咨询智能机型", en: "Ask About Smart Models" },
      ctaHref: "#contact",
      image: "",
    },
    {
      slug: "product-center",
      name: { zh: "产品中心", en: "Product Center" },
      eyebrow: { zh: "二级页面", en: "Secondary Page" },
      title: { zh: "天地人切片机产品中心", en: "Tiandiren Slicer Product Center" },
      summary: {
        zh: "汇总展示全自动、半自动、立式及定制化切片设备，便于客户进行机型筛选与方案咨询。",
        en: "A complete product overview covering automatic, semi-automatic, vertical, and custom slicing systems.",
      },
      body1: {
        zh: "天地人切片机围绕不同产能规模与物料特点，构建了覆盖标准机型与定制产线的完整产品体系。通过统一的结构设计、品质控制与维保支持，帮助客户实现设备长期稳定运行。",
        en: "Tiandiren builds a full equipment system across standard models and customized production lines, helping customers achieve stable long-term operation with unified engineering and service support.",
      },
      body2: {
        zh: "在产品中心页面中，可进一步展示型号参数、应用工况、选型建议、交付案例与配件服务内容，支持销售与客户快速沟通。",
        en: "This page can further present model parameters, application scenarios, selection guidance, delivery cases, and parts service for faster commercial communication.",
      },
      ctaLabel: { zh: "咨询产品方案", en: "Request Product Plan" },
      ctaHref: "#contact",
      image: "",
    },
    {
      slug: "solutions-center",
      name: { zh: "解决方案", en: "Solutions" },
      eyebrow: { zh: "二级页面", en: "Secondary Page" },
      title: { zh: "食品加工切片解决方案中心", en: "Food Processing Slicing Solutions" },
      summary: {
        zh: "面向中央厨房、肉制品、净菜与预制菜工厂，提供按场景配置的切片设备与工艺方案。",
        en: "Scenario-based slicing solutions for central kitchens, meat processing, fresh-cut vegetables, and prepared food factories.",
      },
      body1: {
        zh: "解决方案页面适合集中展示不同场景对应的切片节拍、设备配置、工艺要点与交付经验，帮助客户更快理解设备价值。",
        en: "The solutions page is ideal for presenting process rhythm, equipment setup, and delivery know-how across real production scenarios.",
      },
      body2: {
        zh: "也可以扩展客户案例、工厂布局建议、清洗维护流程和售后保障体系，形成更完整的成交资料页。",
        en: "It can also be extended with customer cases, factory layout advice, cleaning procedures, and service guarantees.",
      },
      ctaLabel: { zh: "获取场景方案", en: "Get Solution" },
      ctaHref: "#contact",
      image: "",
    },
    {
      slug: "after-sales-support",
      name: { zh: "售后保障", en: "After-sales Support" },
      eyebrow: { zh: "服务支持", en: "Service Support" },
      title: { zh: "天地人售后保障服务", en: "Tiandiren After-sales Support" },
      summary: {
        zh: "围绕安装调试、操作培训、巡检维保、备件供应与故障响应，建立覆盖设备全生命周期的服务保障体系。",
        en: "From commissioning and operator training to inspections, parts supply, and rapid response, our support system covers the full machine lifecycle.",
      },
      body1: {
        zh: "天地人售后团队提供交付后的安装调试、操作培训和标准化验收支持，帮助客户尽快完成投产切换。针对不同机型和生产节拍，我们会同步给出清洗、保养和易损件更换建议，降低日常使用中的停机风险。",
        en: "Our after-sales team supports installation, commissioning, training, and standardized acceptance so customers can ramp up faster. We also provide cleaning, maintenance, and consumable replacement advice for each production setup.",
      },
      body2: {
        zh: "在维保环节，可根据客户产线密度和设备数量提供定期巡检、远程协助与备件补给服务。页面还可继续扩展服务流程、响应时效、网点覆盖和常见故障处理说明，方便客户快速了解售后保障能力。",
        en: "For long-term maintenance, customers can rely on scheduled inspections, remote assistance, and spare-parts replenishment based on machine count and plant density. The page can be expanded with service workflows, response SLAs, coverage, and troubleshooting guidance.",
      },
      ctaLabel: { zh: "联系售后团队", en: "Contact Support" },
      ctaHref: "#contact",
      image: "./scene_media/after-sales-support.svg",
    },
    {
      slug: "central-kitchen-solution",
      name: { zh: "中央厨房产线", en: "Central Kitchen Line" },
      eyebrow: { zh: "解决方案主题页", en: "Solution Page" },
      title: { zh: "中央厨房切片产线解决方案", en: "Central Kitchen Slicing Line Solution" },
      summary: {
        zh: "围绕中央厨房的标准化出品、连续投料与卫生管理需求，构建稳定高效的切片工艺流程。",
        en: "A scenario-focused slicing solution for central kitchens that need standardized output, continuous feeding, and easy sanitation control.",
      },
      body1: {
        zh: "中央厨房场景更强调节拍稳定、厚度一致和快速清洗。页面可用于展示从原料进入、切片、分拣到周转的连续工艺路径，帮助客户理解标准化出品和批量交付的价值。",
        en: "Central kitchen workflows demand stable rhythm, consistent thickness, and quick cleaning. This page presents a continuous process from material intake to slicing and staging for standardized production.",
      },
      body2: {
        zh: "推荐在页面中突出不锈钢操作环境、标准化物料周转、工位协同和卫生规范，营造更符合团餐、连锁餐饮和预加工中心的整体氛围。",
        en: "The page should emphasize stainless work areas, standardized trays, coordinated stations, and hygiene discipline for chain dining and pre-processing centers.",
      },
      ctaLabel: { zh: "咨询中央厨房方案", en: "Request Central Kitchen Plan" },
      ctaHref: "#contact",
      image: "./scene_media/central-kitchen.svg",
    },
    {
      slug: "meat-processing-solution",
      name: { zh: "肉制品深加工", en: "Deep Meat Processing" },
      eyebrow: { zh: "解决方案主题页", en: "Solution Page" },
      title: { zh: "肉制品深加工切片解决方案", en: "Deep Meat Processing Slicing Solution" },
      summary: {
        zh: "适配鲜肉、冻品与分割肉等多种工况，兼顾切面整齐、组织稳定和产线协同。",
        en: "Designed for chilled meat, frozen materials, and portioned cuts with clean slicing surfaces and stable structure control.",
      },
      body1: {
        zh: "肉制品深加工场景需要兼顾组织完整度、切片效率和后续包装一致性。页面可重点呈现冷链作业环境、托盘分区、分切节拍和工艺衔接方式，增强客户对产线适配性的理解。",
        en: "Deep meat processing requires balancing tissue integrity, slicing efficiency, and downstream packaging consistency. This page highlights cold-chain handling, tray organization, and takt-driven process flow.",
      },
      body2: {
        zh: "建议突出鲜肉与冻品共线、批量分装、工位连续协同等场景，传达设备在肉制品加工厂中的稳定性与扩展能力。",
        en: "It should communicate the ability to support both chilled and frozen materials, batch packing, and coordinated station flow in meat production environments.",
      },
      ctaLabel: { zh: "咨询肉制品方案", en: "Request Meat Processing Plan" },
      ctaHref: "#contact",
      image: "./scene_media/meat-processing.svg",
    },
    {
      slug: "fresh-cut-factory-solution",
      name: { zh: "净菜切配单元", en: "Fresh-cut Unit" },
      eyebrow: { zh: "解决方案主题页", en: "Solution Page" },
      title: { zh: "净菜工厂切配解决方案", en: "Fresh-cut Factory Portioning Solution" },
      summary: {
        zh: "面向蔬菜分拣、清洗、切配与多品类组合出品，提供紧凑高效的工位配置思路。",
        en: "A compact solution for sorting, washing, and portioning vegetables across mixed fresh-cut production scenarios.",
      },
      body1: {
        zh: "净菜工厂更关注工位密集、品类切换频繁和场地利用率。页面适合展示蔬菜筐周转、切配单元排布、上料节奏与清洁维护路径，突出结构紧凑与流程顺畅的特点。",
        en: "Fresh-cut factories prioritize dense station layouts, rapid category changes, and space efficiency. This page highlights crate flow, workcell arrangement, and maintenance pathways.",
      },
      body2: {
        zh: "建议强调多品类切配、绿色食材处理和标准化分装节奏，营造出干净、明亮、适合净菜加工的工业场景氛围。",
        en: "The visual narrative should focus on multi-product vegetable handling, bright sanitary environments, and rhythm-based packing processes for modern fresh-cut facilities.",
      },
      ctaLabel: { zh: "咨询净菜方案", en: "Request Fresh-cut Plan" },
      ctaHref: "#contact",
      image: "./scene_media/fresh-cut-factory.svg",
    },
    {
      slug: "prepared-food-solution",
      name: { zh: "预制菜标准切型", en: "Prepared Food Cut Profiles" },
      eyebrow: { zh: "解决方案主题页", en: "Solution Page" },
      title: { zh: "预制菜标准切型解决方案", en: "Prepared Food Standardized Cut Solution" },
      summary: {
        zh: "围绕预制菜前处理、分装与后段包装需求，构建厚度稳定、节拍统一的标准切型流程。",
        en: "A standardized slicing workflow for prepared food production with stable thickness and synchronized downstream packing rhythm.",
      },
      body1: {
        zh: "预制菜场景更看重前后段协同和切型一致性。页面可重点展示餐盒、托盘、分装单元和标准化节拍，以体现切片结果对腌制、调理和包装工序的支撑作用。",
        en: "Prepared food factories need upstream and downstream coordination plus consistent cut profiles. This page presents trays, boxes, and pacing across packing-oriented workflows.",
      },
      body2: {
        zh: "建议营造更贴近标准化分装与包装前处理的画面氛围，让客户一眼理解该方案如何服务预制菜工厂的稳定出品与规模复制。",
        en: "It should feel closely aligned with standardized tray packing and pre-pack processing, helping buyers quickly understand the solution's value in prepared food factories.",
      },
      ctaLabel: { zh: "咨询预制菜方案", en: "Request Prepared Food Plan" },
      ctaHref: "#contact",
      image: "./scene_media/prepared-food.svg",
    },
  ],
  hero: {
    eyebrow: { zh: "天地人智能切片装备", en: "TIANDIREN SMART SLICING EQUIPMENT" },
    title: {
      zh: "天地人切片机 · 高效精准切割解决方案",
      en: "Tiandiren Slicer · Efficient and Precise Cutting Solutions",
    },
    desc: {
      zh: "全自动、半自动、立式全系列覆盖，聚焦食品加工场景，兼顾切割效率、稳定性与长期运维可靠性。",
      en: "A full portfolio of automatic, semi-automatic, and vertical slicers for food processing operations that demand precision, throughput, and stability.",
    },
    primaryLabel: { zh: "立即咨询", en: "Contact Sales" },
    primaryHref: "#contact",
    secondaryLabel: { zh: "查看产品", en: "View Products" },
    secondaryHref: "#products",
  },
  slides: [
    {
      badge: { zh: "官方推荐", en: "Recommended" },
      title: {
        zh: "天地人切片机 · 高效精准切割解决方案",
        en: "Tiandiren Slicer · Efficient and Precise Cutting Solutions",
      },
      desc: {
        zh: "全自动/半自动/立式全系列覆盖，满足食品加工全场景需求。",
        en: "Complete coverage across automatic, semi-automatic, and vertical slicer lines for diverse food processing needs.",
      },
      image: HOME_MEDIA.heroSlides[0],
      ctaLabel: { zh: "进入产品中心", en: "Open Product Center" },
      ctaHref: "./products.html",
      secondaryLabel: { zh: "查看解决方案", en: "View Solutions" },
      secondaryHref: "#solutions",
      video: "",
      notes: [
        { zh: "全自动 / 半自动 / 立式组合展示", en: "Automatic / Semi / Vertical lineup" },
        { zh: "覆盖食品加工多场景需求", en: "Built for diverse food production scenarios" },
        { zh: "支持整线选型与方案匹配", en: "Supports complete line selection" },
      ],
    },
    {
      badge: { zh: "灵活产线", en: "Flexible" },
      title: { zh: "半自动切片机系列", en: "Semi-automatic Slicer Series" },
      desc: {
        zh: "灵活便捷，适合中小型加工场景，上手快、维护简单。",
        en: "Easy to operate and maintain, ideal for small and mid-sized processing lines.",
      },
      image: HOME_MEDIA.heroSlides[1],
      ctaLabel: { zh: "进入半自动切片机", en: "Open Semi-automatic Slicer" },
      ctaHref: "./products.html?category=semi-automatic",
      secondaryLabel: { zh: "查看产品矩阵", en: "View Product Matrix" },
      secondaryHref: "#products",
      video: "",
      notes: [
        { zh: "操作灵活便捷", en: "Flexible and easy to operate" },
        { zh: "适合中小型加工", en: "Ideal for small and mid-sized production" },
        { zh: "维护上手更简单", en: "Easy maintenance and setup" },
      ],
    },
    {
      badge: { zh: "主力机型", en: "Flagship" },
      title: { zh: "全自动切片机系列", en: "Automatic Slicer Series" },
      desc: {
        zh: "高效稳定，适配大批量生产，支持长时间连续作业。",
        en: "Stable, efficient, and designed for long-duration production at scale.",
      },
      image: HOME_MEDIA.heroSlides[2],
      ctaLabel: { zh: "进入全自动切片机", en: "Open Automatic Slicer" },
      ctaHref: "./products.html?category=automatic",
      secondaryLabel: { zh: "查看产品矩阵", en: "View Product Matrix" },
      secondaryHref: "#products",
      video: "",
      notes: [
        { zh: "适配大批量连续生产", en: "For high-volume continuous output" },
        { zh: "稳定切片节拍", en: "Stable slicing rhythm" },
        { zh: "支持长时间作业", en: "Built for long shifts" },
      ],
    },
    {
      badge: { zh: "紧凑新品", en: "New" },
      title: { zh: "立式切片机系列", en: "Vertical Slicer Series" },
      desc: {
        zh: "节省空间，精准切割，适配特殊物料与紧凑型生产工位。",
        en: "Compact footprint with precise cutting for special materials and tight workstations.",
      },
      image: HOME_MEDIA.heroSlides[3],
      ctaLabel: { zh: "进入立式切片机", en: "Open Vertical Slicer" },
      ctaHref: "./products.html?category=vertical",
      secondaryLabel: { zh: "查看产品矩阵", en: "View Product Matrix" },
      secondaryHref: "#products",
      video: "",
      notes: [
        { zh: "节省工位空间", en: "Space-saving layout" },
        { zh: "适配特殊物料", en: "Fits specialty materials" },
        { zh: "切割稳定精准", en: "Stable and precise cutting" },
      ],
    },
    {
      badge: { zh: "智能机型", en: "Smart Line" },
      title: { zh: "智能切片机系列", en: "Smart Slicer Series" },
      desc: {
        zh: "支持智能参数管理、生产监测与联机控制，适合升级型食品产线。",
        en: "Built for advanced production with smart controls, monitoring, and connected workflows.",
      },
      image: HOME_MEDIA.heroSlides[4],
      ctaLabel: { zh: "进入智能切片机", en: "Open Smart Slicer" },
      ctaHref: "./products.html?category=smart",
      secondaryLabel: { zh: "查看产品矩阵", en: "View Product Matrix" },
      secondaryHref: "#products",
      video: "",
    },
  ],
  products: {
    heading: {
      eyebrow: { zh: "产品中心", en: "Products" },
      title: { zh: "天地人切片机产品矩阵", en: "Tiandiren Slicer Product Matrix" },
      desc: {
        zh: "覆盖全自动、半自动、立式、智能四大系列，助力食品加工高效生产。",
        en: "Four core series covering automatic, semi-automatic, vertical, and smart slicing equipment for efficient food production.",
      },
    },
    cards: [
      {
        tag: { zh: "核心产品", en: "Core Product" },
        title: { zh: "全自动切片机", en: "Automatic Slicer" },
        desc: { zh: "高产能、高精度，支持连续作业。", en: "High output and precision for continuous operation." },
        image: "",
        href: "./products.html?category=automatic",
      },
      {
        tag: { zh: "高性价比", en: "Cost Effective" },
        title: { zh: "半自动切片机", en: "Semi-automatic Slicer" },
        desc: { zh: "操作简单，灵活适配小批量生产。", en: "Simple to run and ideal for flexible low-volume production." },
        image: "",
        href: "./products.html?category=semi-automatic",
      },
      {
        tag: { zh: "新品", en: "New" },
        title: { zh: "立式切片机", en: "Vertical Slicer" },
        desc: { zh: "占地小、切割稳定，适合特殊物料加工。", en: "Compact and stable cutting for specialized materials." },
        image: "",
        href: "./products.html?category=vertical",
      },
      {
        tag: { zh: "智能升级", en: "Smart Upgrade" },
        title: { zh: "智能切片机", en: "Smart Slicer" },
        desc: {
          zh: "支持配方管理、参数监控与产线联动，适合数字化升级工厂。",
          en: "Recipe control, parameter monitoring, and line integration for digital production upgrades.",
        },
        image: "",
        href: "./products.html?category=smart",
      },
      {
        tag: { zh: "热销", en: "Popular" },
        title: { zh: "冻肉切片机", en: "Frozen Meat Slicer" },
        desc: {
          zh: "适配低温冻品切片，切面整齐，适合肉类加工企业。",
          en: "Designed for frozen material slicing with clean surfaces for meat processing plants.",
        },
        image: "",
        href: "./products.html",
      },
      {
        tag: { zh: "定制化", en: "Custom" },
        title: { zh: "多工位切片线", en: "Multi-station Slicing Line" },
        desc: {
          zh: "支持联线输送与多工位协作，满足复杂节拍与定制切型需求。",
          en: "Integrated conveying and multi-station workflows for custom cut profiles and takt requirements.",
        },
        image: "",
        href: "#solutions",
      },
      {
        tag: { zh: "配套服务", en: "Service" },
        title: { zh: "刀组与配件服务", en: "Blade and Parts Service" },
        desc: {
          zh: "提供刀组、易损件和维保支持，保障设备稳定运行。",
          en: "Blade sets, wear parts, and maintenance support to keep production running smoothly.",
        },
        image: "",
        href: "#contact",
      },
    ],
  },
  solutions: {
    heading: {
      eyebrow: { zh: "解决方案", en: "Solutions" },
      title: { zh: "按场景匹配切片工艺", en: "Slicing Processes for Real Production Scenarios" },
      desc: {
        zh: "围绕中央厨房、肉制品加工、生鲜净菜和预制菜工厂，提供更稳定的切片产线配置。",
        en: "Optimized equipment setups for central kitchens, meat processing, fresh-cut vegetables, and prepared food factories.",
      },
    },
    cards: [
      {
        chip: { zh: "中央厨房", en: "Central Kitchen" },
        title: { zh: "中央厨房产线", en: "Central Kitchen Line" },
        desc: {
          zh: "连续投料、厚度一致、便于清洗，满足标准化规模加工。",
          en: "Consistent thickness and easy cleaning for standardized volume production.",
        },
        image: HOME_MEDIA.solutions[0],
        href: "./page.html?slug=central-kitchen-solution",
      },
      {
        chip: { zh: "肉制品加工", en: "Meat Processing" },
        title: { zh: "肉制品深加工", en: "Deep Meat Processing" },
        desc: {
          zh: "兼顾切面整齐与组织稳定，适配鲜肉、冻品等多种工况。",
          en: "Clean cutting surfaces with stable structure handling for chilled and frozen materials.",
        },
        image: HOME_MEDIA.solutions[1],
        href: "./page.html?slug=meat-processing-solution",
      },
      {
        chip: { zh: "净菜工厂", en: "Fresh-cut Factory" },
        title: { zh: "净菜切配单元", en: "Fresh-cut Unit" },
        desc: {
          zh: "结构紧凑、占地小，适用于工位密集与多品类切配场景。",
          en: "Compact layout for dense workstations and mixed product categories.",
        },
        image: HOME_MEDIA.solutions[2],
        href: "./page.html?slug=fresh-cut-factory-solution",
      },
      {
        chip: { zh: "预制菜工厂", en: "Prepared Food" },
        title: { zh: "预制菜标准切型", en: "Standardized Cut Profiles" },
        desc: {
          zh: "通过稳定的厚度与节拍控制，提升后段腌制与包装一致性。",
          en: "Stable thickness and rhythm to support seasoning, packaging, and downstream consistency.",
        },
        image: HOME_MEDIA.solutions[3],
        href: "./page.html?slug=prepared-food-solution",
      },
    ],
  },
  about: {
    eyebrow: { zh: "关于天地人切片机", en: "About Tiandiren Slicer" },
    title: {
      zh: "专注切片设备研发与制造，为食品加工行业提供可靠解决方案",
      en: "Focused on slicer R&D and manufacturing for dependable food processing solutions",
    },
    p1: {
      zh: "天地人切片机深耕食品加工设备领域，围绕切片精度、设备耐用性和售后服务效率持续打磨产品。我们以工程化研发体系、严格品质管控和全国服务网络，为不同规模的食品加工企业提供可长期运行的切割装备。",
      en: "Tiandiren Slicer specializes in food processing equipment and continuously improves slice precision, machine durability, and service responsiveness. With engineering-driven development, strict quality control, and a nationwide support network, we deliver cutting systems built for long-term operation.",
    },
    p2: {
      zh: "从方案设计、设备选型到安装调试、售后维保，团队坚持“让每一刀都更稳定”，帮助客户提升生产效率、降低损耗并实现标准化交付。",
      en: "From solution planning and machine selection to commissioning and after-sales maintenance, we help customers improve efficiency, reduce waste, and standardize production delivery.",
    },
    missionTitle: { zh: "愿景 / 使命", en: "Vision / Mission" },
    missionDesc: {
      zh: "以匠心造好每一台切片机，让生产更高效，让设备更值得信赖。",
      en: "Craft every slicer with care so production runs faster, cleaner, and with greater confidence.",
    },
  },
  stats: [
    { value: "1,200+", label: { zh: "服务客户数", en: "Customers Served" } },
    { value: "3,800+", label: { zh: "设备装机量", en: "Installed Units" } },
    { value: "26", label: { zh: "覆盖省份 / 城市", en: "Cities / Provinces Covered" } },
    { value: "180+", label: { zh: "合作品牌数", en: "Partner Brands" } },
  ],
  news: {
    heading: {
      eyebrow: { zh: "新闻资讯", en: "News" },
      title: { zh: "关注设备升级与行业动态", en: "Product Updates and Industry Insights" },
      desc: {
        zh: "聚焦产品发布、案例交付和食品加工行业趋势，帮助客户更快完成设备决策。",
        en: "Follow launches, project case studies, and market trends that support faster equipment decisions.",
      },
    },
    cards: [
      {
        tag: { zh: "新品发布", en: "Launch" },
        title: { zh: "立式切片机系列正式上线，适配紧凑产线布局", en: "Vertical slicer series launched for compact production layouts" },
        desc: {
          zh: "针对工位密集和特殊物料切割需求，推出更省空间的立式方案。",
          en: "A new compact model line designed for dense workstations and specialty cutting needs.",
        },
        image: "",
      },
      {
        tag: { zh: "案例分享", en: "Case Study" },
        title: { zh: "全自动切片机助力中央厨房提升 35% 出品效率", en: "Automatic slicer boosts central kitchen output by 35%" },
        desc: {
          zh: "通过连续输送与参数标准化，帮助客户降低人工依赖和切片误差。",
          en: "Continuous feeding and standardized parameters reduce labor dependency and slicing errors.",
        },
        image: "",
      },
      {
        tag: { zh: "服务体系", en: "Service" },
        title: { zh: "天地人启动全国售后响应升级计划", en: "Tiandiren expands nationwide service response program" },
        desc: {
          zh: "覆盖安装调试、日常巡检和备件支持，进一步缩短服务到场周期。",
          en: "Installation, inspection, and spare parts support now reach customers faster across more regions.",
        },
        image: "",
      },
    ],
  },
  footer: {
    brandName: { zh: "天地人切片机", en: "Tiandiren Slicer" },
    brandSub: { zh: "Industrial Slicing Systems", en: "Industrial Slicing Systems" },
    qr: [
      { label: { zh: "公众号", en: "Official Account" }, image: "" },
      { label: { zh: "官网小程序", en: "Mini Program" }, image: "" },
      { label: { zh: "客服微信", en: "Service WeChat" }, image: "" },
    ],
    contact: [
      { zh: "电话：400-800-2026", en: "Tel: 400-800-2026" },
      { zh: "邮箱：info@tdr-slicer.com", en: "Email: info@tdr-slicer.com" },
      { zh: "地址：山东省济南市智能装备产业园 18 号", en: "Address: No. 18 Smart Equipment Park, Jinan, Shandong" },
    ],
    cols: [
      {
        title: { zh: "产品中心", en: "Products" },
        links: [
          { label: { zh: "全自动切片机", en: "Automatic Slicer" }, href: "./products.html?category=automatic" },
          { label: { zh: "半自动切片机", en: "Semi-automatic Slicer" }, href: "./products.html?category=semi-automatic" },
          { label: { zh: "立式切片机", en: "Vertical Slicer" }, href: "./products.html?category=vertical" },
          { label: { zh: "智能切片机", en: "Smart Slicer" }, href: "./products.html?category=smart" },
          { label: { zh: "配件服务", en: "Parts & Service" }, href: "#contact" },
        ],
      },
      {
        title: { zh: "关于我们", en: "About" },
        links: [
          { label: { zh: "公司简介", en: "Company" }, href: "#about" },
          { label: { zh: "发展历程", en: "Milestones" }, href: "#about" },
          { label: { zh: "企业文化", en: "Culture" }, href: "#about" },
          { label: { zh: "加入我们", en: "Careers" }, href: "#contact" },
        ],
      },
      {
        title: { zh: "帮助中心", en: "Help Center" },
        links: [
          { label: { zh: "购买指南", en: "Buying Guide" }, href: "#contact" },
          { label: { zh: "安装调试", en: "Installation" }, href: "#contact" },
          { label: { zh: "售后保障", en: "After-sales" }, href: "./page.html?slug=after-sales-support" },
          { label: { zh: "常见问题", en: "FAQ" }, href: "#contact" },
        ],
      },
    ],
    copyright: { zh: "© 天地人切片机 2026 版权所有", en: "© Tiandiren Slicer 2026 All rights reserved" },
    privacy: { zh: "隐私政策", en: "Privacy Policy" },
    terms: { zh: "用户协议", en: "Terms of Use" },
    icp: { zh: "备案号：鲁ICP备2026003282号", en: "ICP Filing: Lu ICP 2026003282" },
  },
};

const deepClone = (value) => JSON.parse(JSON.stringify(value));

const REQUIRED_PAGE_SLUGS = [
  "automatic-slicer",
  "semi-automatic-slicer",
  "vertical-slicer",
  "smart-slicer",
  "product-center",
  "solutions-center",
  "after-sales-support",
  "central-kitchen-solution",
  "meat-processing-solution",
  "fresh-cut-factory-solution",
  "prepared-food-solution",
];
const REQUIRED_NAV_HREFS = ["#top", "./products.html", "#solutions", "#news", "#about", "./page.html?slug=after-sales-support"];
const REQUIRED_PRODUCT_MENU_HREFS = [
  "./products.html?category=automatic",
  "./products.html?category=semi-automatic",
  "./products.html?category=vertical",
  "./products.html?category=smart",
];

const deepMerge = (defaults, current) => {
  if (Array.isArray(defaults)) {
    if (!Array.isArray(current) || current.length === 0) {
      return deepClone(defaults);
    }

    return current.map((item, index) => {
      const template = defaults[Math.min(index, defaults.length - 1)];
      return deepMerge(template, item);
    });
  }

  if (defaults && typeof defaults === "object") {
    const result = {};
    const source = current && typeof current === "object" ? current : {};

    Object.keys(defaults).forEach((key) => {
      result[key] = key in source ? deepMerge(defaults[key], source[key]) : deepClone(defaults[key]);
    });

    Object.keys(source).forEach((key) => {
      if (!(key in result)) result[key] = source[key];
    });

    return result;
  }

  return current === undefined ? defaults : current;
};

const getPathSegments = (path) =>
  path
    .replace(/\[(\d+)\]/g, ".$1")
    .split(".")
    .filter(Boolean)
    .map((segment) => (/^\d+$/.test(segment) ? Number(segment) : segment));

const getByPath = (source, path) =>
  getPathSegments(path).reduce((acc, key) => (acc == null ? undefined : acc[key]), source);

const setByPath = (source, path, value) => {
  const segments = getPathSegments(path);
  const last = segments.pop();
  const target = segments.reduce((acc, key) => acc[key], source);
  target[last] = value;
};

const ensureRequiredContent = (content) => {
  const requiredPages = defaultSiteContent.pages.filter((page) => REQUIRED_PAGE_SLUGS.includes(page.slug));
  const existingPages = Array.isArray(content.pages) ? content.pages : [];
  const existingPageSlugs = new Set(existingPages.map((page) => page?.slug).filter(Boolean));
  requiredPages.forEach((page) => {
    if (!existingPageSlugs.has(page.slug)) {
      existingPages.push(deepClone(page));
    }
  });
  content.pages = [
    ...requiredPages.map((page) => existingPages.find((item) => item.slug === page.slug) || deepClone(page)),
    ...existingPages.filter((page) => !REQUIRED_PAGE_SLUGS.includes(page.slug)),
  ];

  const requiredNav = defaultSiteContent.nav.filter((item) => REQUIRED_NAV_HREFS.includes(item.href));
  const existingNav = Array.isArray(content.nav) ? content.nav : [];
  const existingNavHrefs = new Set(existingNav.map((item) => item?.href).filter(Boolean));
  requiredNav.forEach((item) => {
    if (!existingNavHrefs.has(item.href)) {
      existingNav.push(deepClone(item));
    }
  });
  content.nav = [
    ...requiredNav.map((item) => existingNav.find((navItem) => navItem.href === item.href) || deepClone(item)),
    ...existingNav.filter((item) => !REQUIRED_NAV_HREFS.includes(item.href)),
  ];

  const requiredProductMenu = defaultSiteContent.productMenu.filter((item) => REQUIRED_PRODUCT_MENU_HREFS.includes(item.href));
  const existingProductMenu = Array.isArray(content.productMenu) ? content.productMenu : [];
  const existingProductMenuHrefs = new Set(existingProductMenu.map((item) => item?.href).filter(Boolean));
  requiredProductMenu.forEach((item) => {
    if (!existingProductMenuHrefs.has(item.href)) {
      existingProductMenu.push(deepClone(item));
    }
  });
  content.productMenu = [
    ...requiredProductMenu.map(
      (item) => existingProductMenu.find((menuItem) => menuItem.href === item.href) || deepClone(item),
    ),
    ...existingProductMenu.filter((item) => !REQUIRED_PRODUCT_MENU_HREFS.includes(item.href)),
  ];

  if (Array.isArray(content.slides)) {
    const slideMap = new Map(
      content.slides
        .filter((slide) => slide?.ctaHref)
        .map((slide) => [slide.ctaHref, slide]),
    );

    content.slides = DESIRED_HERO_ORDER.map((href, index) => {
      const fallback = defaultSiteContent.slides.find((slide) => slide.ctaHref === href) || defaultSiteContent.slides[index];
      const existing = slideMap.get(href);
      const merged = existing ? deepMerge(deepClone(fallback), existing) : deepClone(fallback);

      if (
        merged &&
        HOME_MEDIA.heroSlides[index] &&
        (
          !merged.image ||
          merged.image.includes("/切片机总目录/") ||
          merged.image.includes("./切片机总目录/") ||
          merged.image.includes("/home_media/") ||
          merged.image.includes("./home_media/")
        )
      ) {
        merged.image = HOME_MEDIA.heroSlides[index];
      }

      return merged;
    });
  }

  if (Array.isArray(content.solutions?.cards)) {
    content.solutions.cards.forEach((card, index) => {
      if (
        card &&
        HOME_MEDIA.solutions[index] &&
        (!card.image || card.image.includes("/切片机总目录/") || card.image.includes("./切片机总目录/"))
      ) {
        card.image = HOME_MEDIA.solutions[index];
      }
    });
  }

  return content;
};

const STORAGE_KEY = "tdr-site-content-v1";

const SiteContentStore = {
  defaults: deepClone(defaultSiteContent),
  load() {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      return saved
        ? ensureRequiredContent(deepMerge(defaultSiteContent, JSON.parse(saved)))
        : deepClone(defaultSiteContent);
    } catch (error) {
      return deepClone(defaultSiteContent);
    }
  },
  save(content) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  },
  reset() {
    window.localStorage.removeItem(STORAGE_KEY);
    return deepClone(defaultSiteContent);
  },
  deepClone,
  getByPath,
  setByPath,
};

window.SiteContentStore = SiteContentStore;
