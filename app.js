const BASEMAPS = {
  liberty: {
    style: "https://tiles.openfreemap.org/styles/liberty",
  },
  dark: {
    style: "https://tiles.openfreemap.org/styles/fiord",
  },
  satellite: {
    style: {
      version: 8,
      glyphs: "https://fonts.openmaptiles.org/{fontstack}/{range}.pbf",
      sources: {
        "esri-world-imagery": {
          type: "raster",
          tiles: [
            "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
          ],
          tileSize: 256,
          attribution:
            "Sources: Esri, Maxar, Earthstar Geographics, and the GIS User Community",
        },
      },
      layers: [
        {
          id: "esri-world-imagery",
          type: "raster",
          source: "esri-world-imagery",
        },
      ],
    },
  },
};

const PROJECT_SOURCE_ID = "geocart-projects";
const CLUSTER_LAYER_ID = "project-clusters";
const CLUSTER_COUNT_LAYER_ID = "project-cluster-count";
const PROJECT_LAYER_ID = "project-points";
const PROJECT_LABEL_LAYER_ID = "project-point-labels";

const I18N = {
  ru: {
    pageTitle: "Geocart - Геоинформационные решения",
    metaDescription:
      "Geocart - геоинформационные системы, градостроительство, аэрофотосъемка и геоинформационная аналитика.",
    navAbout: "О компании",
    navServices: "Услуги",
    navGeography: "География",
    navTools: "Сервисы",
    navContacts: "Контакты",
    themeLight: "Светлая",
    themeDark: "Темная",
    heroTitle: "Цифровое градостроительное проектирование и ГИС-решения для управления городом",
    heroLead:
      "Широкий спектр услуг в сфере ГИС, градостроительства, аэрофотосъемки с БПЛА и геоинформационной аналитики.",
    heroMap: "Смотреть географию",
    heroServices: "Наши услуги",
    metricYears: "лет опыта",
    metricProjects: "проектов",
    metricData: "фокус на данных",
    aboutEyebrow: "О компании",
    aboutTitle: "Проектирование территорий с применением ГИС",
    aboutP1:
      "Geocart специализируется на градостроительном проектировании с использованием геоинформационных систем (ГИС). Мы разрабатываем проекты территорий — от концепции до рабочей документации — с опорой на точные пространственные данные и цифровые модели.",
    aboutP2:
      "Мы не просто анализируем данные — мы проектируем территорию, объединяя градостроительные решения, инженерную инфраструктуру и пространственный анализ в единую цифровую среду.",
    aboutP3:
      "Наша команда разрабатывает проекты с нуля, но также может подключиться на любом этапе — для доработки, оптимизации и сопровождения проекта при прохождении государственной экспертизы.",
    capDataTitle: "Проектирование в ГИС",
    capDataText:
      "Разработка генеральных планов, ПДП и схем с использованием цифровых моделей территории, расчет ТЭП, плотности застройки, обеспеченности объектами и инженерной инфраструктуры.",
    capAnalyticsTitle: "Аналитика и обоснования",
    capAnalyticsText:
      "Градостроительные расчеты, демографический прогноз, транспортные модели, функциональное зонирование, подготовка обоснований и материалов для согласования.",
    capIntegrationTitle: "Сопровождение и интеграция",
    capIntegrationText:
      "Подготовка цифровых данных и проектов для интеграции с градостроительным кадастром, сопровождение при прохождении государственной экспертизы, доработка документации на любой стадии.",
    servicesEyebrow: "Продукты и услуги",
    servicesTitle: "От съемки до готовой геоинформационной системы",
    mapEyebrow: "География проектов",
    mapTitle: "Интерактивная карта работ Geocart",
    mapLead: "Карта подготовлена для загрузки координат проектов, описаний и категорий.",
    filterAll: "Все",
    filterUrban: "Градостроительство",
    filterGis: "ГИС",
    filterPdp: "ПДП",
    filterVector: "Векторные карты",
    filterCadastre: "Кадастр",
    filterAnalytics: "Аналитика",
    yearFilterLabel: "Год проектов",
    yearProjectsCount: "проектов на карте",
    projectsEmpty: "Для выбранного года и категории проектов пока нет.",
    basemapMap: "Карта",
    basemapSatellite: "Космос",
    basemapDark: "Темная",
    toolsEyebrow: "Сервисы",
    toolsTitle: "Цифровые сервисы для градостроительных задач",
    toolCalcTitle: "Градостроительный калькулятор технико-экономических показателей",
    toolCalcText: "Расчет ключевых ТЭП по заданным параметрам территории, застройки и функциональных зон.",
    toolTopoTitle: "Автоматическая проверка топологии",
    toolTopoText: "Поиск пересечений, разрывов, дублей, некорректных границ и ошибок в векторных данных.",
    contactsEyebrow: "Контакты",
    contactsTitle: "Обсудим задачу и данные проекта",
    contactsLead: "Расскажите о территории, типе работ и формате результата, который нужен вашей команде.",
    contactAddressLabel: "Адрес",
    contactAddress: "Деловой дом Алматы, 6 этаж, 611 с",
    contactPhoneLabel: "Телефон",
    telegramButton: "Написать в Telegram",
    footerSubtitle: "Геоинформационные системы и градостроительство",
    footerRights: "© 2026 ТОО Geocart. Все права защищены.",
    categories: {
      urban: "Градостроительство",
      gis: "ГИС",
      pdp: "ПДП",
      vector: "Векторные карты",
      cadastre: "Кадастр",
      analytics: "Аналитика",
    },
  },
  kk: {
    pageTitle: "Geocart - Геоақпараттық шешімдер",
    metaDescription:
      "Geocart - геоақпараттық жүйелер, қала құрылысы, ҰҰА арқылы аэрофототүсірілім және геоаналитика.",
    navAbout: "Компания",
    navServices: "Қызметтер",
    navGeography: "География",
    navTools: "Сервистер",
    navContacts: "Байланыс",
    themeLight: "Жарық",
    themeDark: "Қараңғы",
    heroTitle: "Қаланы басқаруға арналған цифрлық қала құрылыстық жобалау және ГАЖ-шешімдері",
    heroLead:
      "ГАЖ, қала құрылысы, ҰҰА арқылы аэрофототүсірілім және геоақпараттық аналитика саласындағы кең қызметтер.",
    heroMap: "Географияны көру",
    heroServices: "Қызметтер",
    metricYears: "жыл тәжірибе",
    metricProjects: "жоба",
    metricData: "деректерге фокус",
    aboutEyebrow: "Компания туралы",
    aboutTitle: "ГАЖ қолдану арқылы аумақтарды жобалау",
    aboutP1:
      "Geocart геоақпараттық жүйелерді (ГАЖ) пайдалана отырып, қала құрылыстық жобалауға маманданған. Біз аумақ жобаларын тұжырымдамадан жұмыс құжаттамасына дейін нақты кеңістіктік деректер мен цифрлық модельдер негізінде әзірлейміз.",
    aboutP2:
      "Біз деректерді жай ғана талдап қоймаймыз — қала құрылысы шешімдерін, инженерлік инфрақұрылымды және кеңістіктік талдауды бірыңғай цифрлық ортада біріктіре отырып, аумақты жобалаймыз.",
    aboutP3:
      "Команда жобаларды нөлден әзірлейді, сондай-ақ кез келген кезеңде қосылып, жобаны пысықтау, оңтайландыру және мемлекеттік сараптамадан өткізу кезінде сүйемелдеу жұмыстарын атқара алады.",
    capDataTitle: "ГАЖ-де жобалау",
    capDataText:
      "Цифрлық аумақ модельдерін қолдана отырып бас жоспарлар, ЕЖЖ және схемалар әзірлеу, ТЭК, құрылыс тығыздығы, объектілермен және инженерлік инфрақұрылыммен қамтамасыз етілуін есептеу.",
    capAnalyticsTitle: "Аналитика және негіздемелер",
    capAnalyticsText:
      "Қала құрылыстық есептер, демографиялық болжам, көлік модельдері, функционалдық аймақтарға бөлу, келісуге арналған негіздемелер мен материалдарды дайындау.",
    capIntegrationTitle: "Сүйемелдеу және интеграция",
    capIntegrationText:
      "Қала құрылысы кадастрымен интеграциялау үшін цифрлық деректер мен жобаларды дайындау, мемлекеттік сараптамадан өту кезінде сүйемелдеу, құжаттаманы кез келген кезеңде пысықтау.",
    servicesEyebrow: "Өнімдер мен қызметтер",
    servicesTitle: "Түсірілімнен дайын геоақпараттық жүйеге дейін",
    mapEyebrow: "Жобалар географиясы",
    mapTitle: "Geocart жұмыстарының интерактивті картасы",
    mapLead: "Карта жобалардың координаттарын, сипаттамаларын және санаттарын жүктеуге дайындалған.",
    filterAll: "Барлығы",
    filterUrban: "Қала құрылысы",
    filterGis: "ГАЖ",
    filterPdp: "ЕЖЖ",
    filterVector: "Векторлық карталар",
    filterCadastre: "Кадастр",
    filterAnalytics: "Аналитика",
    yearFilterLabel: "Жобалар жылы",
    yearProjectsCount: "жоба картада",
    projectsEmpty: "Таңдалған жыл мен санат бойынша жоба жоқ.",
    basemapMap: "Карта",
    basemapSatellite: "Ғарыш",
    basemapDark: "Қараңғы",
    toolsEyebrow: "Сервистер",
    toolsTitle: "Қала құрылысы міндеттеріне арналған цифрлық сервистер",
    toolCalcTitle: "Техникалық-экономикалық көрсеткіштердің қала құрылысы калькуляторы",
    toolCalcText: "Аумақ, құрылыс және функционалдық аймақ параметрлері бойынша негізгі ТЭК есептеу.",
    toolTopoTitle: "Топологияны автоматты тексеру",
    toolTopoText: "Қиылысуларды, үзілімдерді, қайталануларды және векторлық деректердегі қателерді табу.",
    contactsEyebrow: "Байланыс",
    contactsTitle: "Жоба міндеті мен деректерін талқылайық",
    contactsLead: "Аумақ, жұмыс түрі және командаңызға қажет нәтиже форматы туралы айтыңыз.",
    contactAddressLabel: "Мекенжай",
    contactAddress: "Алматы іскерлік үйі, 6-қабат, 611 с",
    contactPhoneLabel: "Телефон",
    telegramButton: "Telegram-ға жазу",
    footerSubtitle: "Геоақпараттық жүйелер және қала құрылысы",
    footerRights: "© 2026 Geocart ЖШС. Барлық құқықтар қорғалған.",
    categories: {
      urban: "Қала құрылысы",
      gis: "ГАЖ",
      pdp: "ЕЖЖ",
      vector: "Векторлық карталар",
      cadastre: "Кадастр",
      analytics: "Аналитика",
    },
  },
  en: {
    pageTitle: "Geocart - Geoinformation Solutions",
    metaDescription:
      "Geocart provides GIS, urban planning, UAV aerial survey and geospatial analytics services.",
    navAbout: "Company",
    navServices: "Services",
    navGeography: "Geography",
    navTools: "Tools",
    navContacts: "Contacts",
    themeLight: "Light",
    themeDark: "Dark",
    heroTitle: "Digital urban planning and GIS solutions for city management",
    heroLead:
      "A wide range of GIS, urban planning, UAV aerial survey and geospatial analytics services.",
    heroMap: "View geography",
    heroServices: "Our services",
    metricYears: "years of experience",
    metricProjects: "projects",
    metricData: "data-focused",
    aboutEyebrow: "Company",
    aboutTitle: "Territory planning with GIS",
    aboutP1:
      "Geocart specializes in urban planning design using geographic information systems (GIS). We develop territorial projects from concept to working documentation, relying on accurate spatial data and digital models.",
    aboutP2:
      "We do more than analyze data: we design territories by bringing urban planning decisions, engineering infrastructure and spatial analysis into one digital environment.",
    aboutP3:
      "Our team develops projects from scratch and can also join at any stage to refine, optimize and support a project through state expertise.",
    capDataTitle: "GIS-based design",
    capDataText:
      "Development of master plans, detailed planning projects and schemes using digital territory models, with calculations of technical and economic indicators, development density, public facility provision and engineering infrastructure.",
    capAnalyticsTitle: "Analytics and justification",
    capAnalyticsText:
      "Urban planning calculations, demographic forecasting, transport models, functional zoning, and preparation of justification and approval materials.",
    capIntegrationTitle: "Support and integration",
    capIntegrationText:
      "Preparation of digital data and projects for integration with the urban planning cadastre, support during state expertise, and documentation refinement at any stage.",
    servicesEyebrow: "Products and services",
    servicesTitle: "From survey to a complete geoinformation system",
    mapEyebrow: "Project geography",
    mapTitle: "Interactive map of Geocart projects",
    mapLead: "The map is ready for project coordinates, descriptions and categories.",
    filterAll: "All",
    filterUrban: "Urban planning",
    filterGis: "GIS",
    filterPdp: "Detailed plans",
    filterVector: "Vector maps",
    filterCadastre: "Cadastre",
    filterAnalytics: "Analytics",
    yearFilterLabel: "Project year",
    yearProjectsCount: "projects on map",
    projectsEmpty: "No projects for the selected year and category yet.",
    basemapMap: "Map",
    basemapSatellite: "Satellite",
    basemapDark: "Dark",
    toolsEyebrow: "Tools",
    toolsTitle: "Digital tools for urban planning tasks",
    toolCalcTitle: "Urban planning calculator for technical and economic indicators",
    toolCalcText: "Calculation of key indicators by territory, development and functional zone parameters.",
    toolTopoTitle: "Automatic topology validation",
    toolTopoText: "Detection of overlaps, gaps, duplicates, invalid boundaries and vector data errors.",
    contactsEyebrow: "Contacts",
    contactsTitle: "Let’s discuss your project data and task",
    contactsLead: "Tell us about the territory, work type and output format your team needs.",
    contactAddressLabel: "Address",
    contactAddress: "Almaty Business House, 6th floor, 611 c",
    contactPhoneLabel: "Phone",
    telegramButton: "Message on Telegram",
    footerSubtitle: "Geoinformation systems and urban planning",
    footerRights: "© 2026 Geocart LLP. All rights reserved.",
    categories: {
      urban: "Urban planning",
      gis: "GIS",
      pdp: "Detailed plans",
      vector: "Vector maps",
      cadastre: "Cadastre",
      analytics: "Analytics",
    },
  },
};

const SERVICES = [
  {
    icon: "GIS",
    title: {
      ru: "Геоинформационные услуги",
      kk: "Геоақпараттық қызметтер",
      en: "Geoinformation services",
    },
    items: {
      ru: ["Составление цифровых и растровых карт", "Оцифровка топографических карт и генеральных планов", "Создание и анализ цифровых моделей рельефа"],
      kk: ["Цифрлық және растрлық карталар жасау", "Топографиялық карталар мен бас жоспарларды цифрлау", "Жер бедерінің цифрлық модельдерін жасау және талдау"],
      en: ["Digital and raster map production", "Digitizing topographic maps and master plans", "Digital terrain model creation and analysis"],
    },
  },
  {
    icon: "URB",
    title: {
      ru: "Городское и территориальное планирование",
      kk: "Қалалық және аумақтық жоспарлау",
      en: "Urban and territorial planning",
    },
    items: {
      ru: ["Разработка генеральных планов", "Разработка планов детальной планировки", "Комплексная оценка территории"],
      kk: ["Бас жоспарларды әзірлеу", "Егжей-тегжейлі жоспарлау жобаларын әзірлеу", "Аумақты кешенді бағалау"],
      en: ["Master plan development", "Detailed planning projects", "Comprehensive territory assessment"],
    },
  },
  {
    icon: "UAV",
    title: {
      ru: "Аэрофотосъемка и ортофотопланы",
      kk: "Аэрофототүсірілім және ортофотопландар",
      en: "Aerial survey and orthophotos",
    },
    items: {
      ru: ["Съемка с БПЛА", "Подготовка ортофотопланов", "Контроль и актуализация данных"],
      kk: ["ҰҰА арқылы түсірілім", "Ортофотопландар дайындау", "Деректерді бақылау және жаңарту"],
      en: ["UAV survey", "Orthophoto production", "Data control and updating"],
    },
  },
  {
    icon: "AGR",
    title: {
      ru: "Сельское хозяйство и природопользование",
      kk: "Ауыл шаруашылығы және табиғатты пайдалану",
      en: "Agriculture and nature management",
    },
    items: {
      ru: ["Карты вегетационных индексов", "Определение границ посевных площадей", "ГИС-базы данных природных территорий"],
      kk: ["Вегетациялық индекстер карталары", "Егістік алқаптарының шекарасын анықтау", "Табиғи аумақтардың ГАЖ деректер базасы"],
      en: ["Vegetation index maps", "Crop area boundary detection", "GIS databases for natural territories"],
    },
  },
  {
    icon: "EDU",
    title: {
      ru: "Обучение и внедрение ГИС",
      kk: "ГАЖ оқыту және енгізу",
      en: "GIS training and implementation",
    },
    items: {
      ru: ["Проводим обучающие курсы", "Внедряем ГИС-технологии в любой отрасли", "Сопровождаем команды после запуска"],
      kk: ["Оқыту курстарын өткіземіз", "ГАЖ технологияларын кез келген салаға енгіземіз", "Іске қосқаннан кейін командаларды сүйемелдейміз"],
      en: ["Practical training courses", "GIS implementation across industries", "Team support after launch"],
    },
  },
];

// Координаты новых проектов поставлены ориентировочно по населенным пунктам.
const LEGACY_PROJECTS = [
  {
    id: "shchuchinsk-general-plan-2025",
    category: "urban",
    year: "2025",
    lat: 52.9365,
    lng: 70.1884,
    title: {
      ru: "Оцифровка генерального плана города Щучинск",
      kk: "Щучинск қаласының бас жоспарын цифрлау",
      en: "Digitizing the Shchuchinsk master plan",
    },
    place: {
      ru: "Щучинск, Акмолинская область",
      kk: "Щучинск, Ақмола облысы",
      en: "Shchuchinsk, Akmola Region",
    },
    summary: {
      ru: "Оцифровка материалов генерального плана города Щучинск.",
      kk: "Щучинск қаласының бас жоспары материалдарын цифрлау.",
      en: "Digitization of Shchuchinsk master plan materials.",
    },
  },
  {
    id: "zhitikara-general-plan-2025",
    category: "urban",
    year: "2025",
    lat: 52.1907,
    lng: 61.2006,
    title: {
      ru: "Оцифровка генерального плана города Житикара",
      kk: "Жітіқара қаласының бас жоспарын цифрлау",
      en: "Digitizing the Zhitikara master plan",
    },
    place: {
      ru: "Житикара, Костанайская область",
      kk: "Жітіқара, Қостанай облысы",
      en: "Zhitikara, Kostanay Region",
    },
    summary: {
      ru: "Оцифровка материалов генерального плана города Житикара.",
      kk: "Жітіқара қаласының бас жоспары материалдарын цифрлау.",
      en: "Digitization of Zhitikara master plan materials.",
    },
  },
  {
    id: "kokshetau-general-plan-2025",
    category: "urban",
    year: "2025",
    lat: 53.2833,
    lng: 69.3969,
    title: {
      ru: "Оцифровка генерального плана города Кокшетау",
      kk: "Көкшетау қаласының бас жоспарын цифрлау",
      en: "Digitizing the Kokshetau master plan",
    },
    place: {
      ru: "Кокшетау, Акмолинская область",
      kk: "Көкшетау, Ақмола облысы",
      en: "Kokshetau, Akmola Region",
    },
    summary: {
      ru: "Оцифровка материалов генерального плана города Кокшетау.",
      kk: "Көкшетау қаласының бас жоспары материалдарын цифрлау.",
      en: "Digitization of Kokshetau master plan materials.",
    },
  },
  {
    id: "ereymentau-general-plan-2025",
    category: "urban",
    year: "2025",
    lat: 51.6211,
    lng: 73.1046,
    title: {
      ru: "Оцифровка генерального плана города Ерейментау",
      kk: "Ерейментау қаласының бас жоспарын цифрлау",
      en: "Digitizing the Ereymentau master plan",
    },
    place: {
      ru: "Ерейментау, Акмолинская область",
      kk: "Ерейментау, Ақмола облысы",
      en: "Ereymentau, Akmola Region",
    },
    summary: {
      ru: "Оцифровка материалов генерального плана города Ерейментау.",
      kk: "Ерейментау қаласының бас жоспары материалдарын цифрлау.",
      en: "Digitization of Ereymentau master plan materials.",
    },
  },
  {
    id: "burabay-resort-general-plans-2025",
    category: "urban",
    year: "2025",
    lat: 53.0804,
    lng: 70.3236,
    title: {
      ru: "Оцифровка генеральных планов курортной зоны",
      kk: "Курорттық аймақтың бас жоспарларын цифрлау",
      en: "Digitizing resort area master plans",
    },
    place: {
      ru: "Катарколь, Сарыбулак, Зеленый бор",
      kk: "Қатаркөл, Сарыбұлақ, Зеленый бор",
      en: "Katarkol, Sarybulak, Zeleny Bor",
    },
    summary: {
      ru: "Оцифровка генеральных планов населенных пунктов курортной зоны.",
      kk: "Курорттық аймақтағы елді мекендердің бас жоспарларын цифрлау.",
      en: "Digitization of master plans for resort area settlements.",
    },
  },
  {
    id: "kokshetau-pdp-2025",
    category: "pdp",
    year: "2025",
    lat: 53.292,
    lng: 69.405,
    title: {
      ru: "Оцифровка 23 ПДП города Кокшетау",
      kk: "Көкшетау қаласының 23 ЕЖЖ жобасын цифрлау",
      en: "Digitizing 23 detailed plans in Kokshetau",
    },
    place: {
      ru: "Кокшетау, Акмолинская область",
      kk: "Көкшетау, Ақмола облысы",
      en: "Kokshetau, Akmola Region",
    },
    summary: {
      ru: "Оцифровка 23 проектов детальной планировки города Кокшетау.",
      kk: "Көкшетау қаласының 23 егжей-тегжейлі жоспарлау жобасын цифрлау.",
      en: "Digitization of 23 detailed planning projects in Kokshetau.",
    },
  },
  {
    id: "astana-pdp-2025",
    category: "pdp",
    year: "2025",
    lat: 51.18,
    lng: 71.43,
    title: {
      ru: "Оцифровка 3 ПДП города Астана",
      kk: "Астана қаласының 3 ЕЖЖ жобасын цифрлау",
      en: "Digitizing 3 detailed plans in Astana",
    },
    place: {
      ru: "Астана",
      kk: "Астана",
      en: "Astana",
    },
    summary: {
      ru: "Оцифровка 3 проектов детальной планировки города Астана.",
      kk: "Астана қаласының 3 егжей-тегжейлі жоспарлау жобасын цифрлау.",
      en: "Digitization of 3 detailed planning projects in Astana.",
    },
  },
  {
    id: "temirtau-pdp-2025",
    category: "pdp",
    year: "2025",
    lat: 50.0609,
    lng: 72.945,
    title: {
      ru: "Оцифровка 1 ПДП города Темиртау",
      kk: "Теміртау қаласының 1 ЕЖЖ жобасын цифрлау",
      en: "Digitizing 1 detailed plan in Temirtau",
    },
    place: {
      ru: "Темиртау, Карагандинская область",
      kk: "Теміртау, Қарағанды облысы",
      en: "Temirtau, Karaganda Region",
    },
    summary: {
      ru: "Оцифровка 1 проекта детальной планировки города Темиртау.",
      kk: "Теміртау қаласының 1 егжей-тегжейлі жоспарлау жобасын цифрлау.",
      en: "Digitization of 1 detailed planning project in Temirtau.",
    },
  },
  {
    id: "talshyk-vector-map-2025",
    category: "vector",
    year: "2025",
    lat: 53.6377,
    lng: 71.8742,
    title: {
      ru: "Векторная карта села Талшык",
      kk: "Талшық ауылының векторлық картасы",
      en: "Vector map of Talshyk village",
    },
    place: {
      ru: "Талшык, Северо-Казахстанская область",
      kk: "Талшық, Солтүстік Қазақстан облысы",
      en: "Talshyk, North Kazakhstan Region",
    },
    summary: {
      ru: "Подготовка векторной карты села Талшык.",
      kk: "Талшық ауылының векторлық картасын дайындау.",
      en: "Preparation of a vector map for Talshyk village.",
    },
  },
  {
    id: "novoishimka-vector-map-2025",
    category: "vector",
    year: "2025",
    lat: 53.1982,
    lng: 66.7696,
    title: {
      ru: "Векторная карта села Новоишимка",
      kk: "Новоишимка ауылының векторлық картасы",
      en: "Vector map of Novoishimka village",
    },
    place: {
      ru: "Новоишимка, Северо-Казахстанская область",
      kk: "Новоишимка, Солтүстік Қазақстан облысы",
      en: "Novoishimka, North Kazakhstan Region",
    },
    summary: {
      ru: "Подготовка векторной карты села Новоишимка.",
      kk: "Новоишимка ауылының векторлық картасын дайындау.",
      en: "Preparation of a vector map for Novoishimka village.",
    },
  },
  {
    id: "temirtau-plan",
    category: "urban",
    year: "2024",
    lat: 50.0549,
    lng: 72.9646,
    title: {
      ru: "Дежурный план города Темиртау",
      kk: "Теміртау қаласының кезекші жоспары",
      en: "Temirtau duty plan",
    },
    place: {
      ru: "Темиртау, Карагандинская область",
      kk: "Теміртау, Қарағанды облысы",
      en: "Temirtau, Karaganda Region",
    },
    summary: {
      ru: "Техническое сопровождение дежурного плана и актуализация градостроительных данных.",
      kk: "Кезекші жоспарды техникалық сүйемелдеу және қала құрылысы деректерін жаңарту.",
      en: "Technical support for the duty plan and updating urban planning data.",
    },
  },
  {
    id: "sergeevka-map",
    category: "gis",
    year: "2024",
    lat: 53.8813,
    lng: 67.4158,
    title: {
      ru: "Цифровая векторная карта Сергеевки",
      kk: "Сергеевка қаласының цифрлық векторлық картасы",
      en: "Digital vector map of Sergeevka",
    },
    place: {
      ru: "Сергеевка, Северо-Казахстанская область",
      kk: "Сергеевка, Солтүстік Қазақстан облысы",
      en: "Sergeevka, North Kazakhstan Region",
    },
    summary: {
      ru: "Подготовка цифровой векторной карты населенного пункта.",
      kk: "Елді мекеннің цифрлық векторлық картасын дайындау.",
      en: "Preparation of a digital vector map of the settlement.",
    },
  },
  {
    id: "kosshy-zones",
    category: "analytics",
    year: "2022",
    lat: 51.2331,
    lng: 71.3974,
    title: {
      ru: "Схемы оценочных зон",
      kk: "Бағалау аймақтарының схемалары",
      en: "Valuation zone schemes",
    },
    place: {
      ru: "Косшы, Акмолинская область",
      kk: "Қосшы, Ақмола облысы",
      en: "Kosshy, Akmola Region",
    },
    summary: {
      ru: "Разработка схем оценочных зон для территориального планирования.",
      kk: "Аумақтық жоспарлау үшін бағалау аймақтарының схемаларын әзірлеу.",
      en: "Development of valuation zone schemes for territorial planning.",
    },
  },
  {
    id: "katon-navigation",
    category: "gis",
    year: "2023",
    lat: 49.1778,
    lng: 85.6152,
    title: {
      ru: "Оффлайн-навигация для лесничества",
      kk: "Орман шаруашылығына арналған оффлайн-навигация",
      en: "Offline navigation for forestry",
    },
    place: {
      ru: "Катон-Карагайский район, ВКО",
      kk: "Катонқарағай ауданы, ШҚО",
      en: "Katon-Karagay District, East Kazakhstan",
    },
    summary: {
      ru: "Создание приложения оффлайн-навигации для природной территории.",
      kk: "Табиғи аумақ үшін оффлайн-навигация қосымшасын жасау.",
      en: "Creation of an offline navigation app for a natural territory.",
    },
  },
  {
    id: "astana-tax-zoning",
    category: "analytics",
    year: "2022",
    lat: 51.1694,
    lng: 71.4491,
    title: {
      ru: "Коэффициент зонирования",
      kk: "Аймақтау коэффициенті",
      en: "Zoning coefficient",
    },
    place: {
      ru: "Астана",
      kk: "Астана",
      en: "Astana",
    },
    summary: {
      ru: "Расчет коэффициента зонирования для объектов налогообложения.",
      kk: "Салық салу объектілері үшін аймақтау коэффициентін есептеу.",
      en: "Calculation of the zoning coefficient for taxation objects.",
    },
  },
];

const PROJECT_ROWS = [
  ["2025", "Векторная карта", "Разработка", "Новоишимка", 53.198, 66.769, "vector"],
  ["2025", "Оцифровка ГП", "Генплан", "Байконур", 45.616, 63.316, "urban"],
  ["2025", "Оцифровка ГП", "Генплан", "Торетам", 45.63, 63.33, "urban"],
  ["2025", "Дежурный топоплан", "Обслуживание", "Темиртау", 50.054, 72.964, "gis"],
  ["2025", "Оцифровка ГП", "Генплан", "Ерейментау", 51.619, 73.103, "urban"],
  ["2025", "Векторная карта", "Разработка", "Явленка", 54.338, 68.457, "vector"],
  ["2025", "Векторная карта", "Разработка", "Пресновка", 54.758, 69.159, "vector"],
  ["2025", "Векторная карта", "Разработка", "Тимирязево", 53.748, 66.495, "vector"],
  ["2025", "Оцифровка ГП", "Генплан", "Щучинск", 52.935, 70.188, "urban"],
  ["2025", "Оцифровка ГП", "Генплан", "Кокшетау", 53.283, 69.383, "urban"],
  ["2025", "Оцифровка ГП", "Генплан", "Ерейментау", 51.619, 73.103, "urban"],
  ["2025", "Оцифровка ГП", "Курортная зона", "Бурабай", 53.083, 70.3, "urban"],
  ["2025", "Векторная карта", "Разработка", "Талшик", 53.637, 66.86, "vector"],
  ["2025", "ГИС ПДП (3 шт)", "ГИС-разработка", "Астана", 51.169, 71.449, "pdp"],
  ["2025", "ГИС ПДП", "ГИС-разработка", "Темиртау", 50.054, 72.964, "pdp"],
  ["2025", "ГИС ГП", "Генплан", "Алтынсарино", 52.45, 63.8, "urban"],
  ["2024", "Дежурный топоплан", "Обслуживание", "Темиртау", 50.054, 72.964, "gis"],
  ["2024", "Векторная карта", "Разработка", "Мортык", 52.9, 67.2, "vector"],
  ["2024", "Векторная карта", "Разработка", "Коктерек", 52.85, 67.5, "vector"],
  ["2024", "Земкадастр", "Кадастр", "Осакаровка", 50.565, 72.569, "cadastre"],
  ["2024", "Инвентаризация земель", "Кадастр", "Осакаровка", 50.565, 72.569, "cadastre"],
  ["2024", "Внедрение ГИС", "ГИС", "Маркаколь", 48.75, 85.75, "gis"],
  ["2024", "Векторная карта", "Разработка", "Кобенсай", 52.7, 67.3, "vector"],
  ["2023", "Дежурный топоплан", "Обслуживание", "Темиртау", 50.054, 72.964, "gis"],
  ["2023", "Оценочные зоны", "Аналитика", "Косшы", 51.13, 71.3, "analytics"],
  ["2023", "Векторная карта", "Разработка", "Актуесай", 52.6, 67.0, "vector"],
  ["2023", "Векторная карта", "Разработка", "Бидайык", 52.65, 67.1, "vector"],
  ["2023", "Векторная карта", "Разработка", "Акбулак", 52.7, 67.2, "vector"],
  ["2022", "Коэффициенты зонирования", "Аналитика", "Астана", 51.169, 71.449, "analytics"],
  ["2021", "Коэффициенты зонирования", "Аналитика", "Абайский район", 49.5, 80.0, "analytics"],
];

const PROJECTS = PROJECT_ROWS.map(([year, project, workType, place, lat, lng, category], index) => ({
  id: `project-${year}-${index + 1}`,
  category,
  year,
  lat,
  lng,
  title: {
    ru: `${project} - ${place}`,
  },
  place: {
    ru: place,
  },
  summary: {
    ru: `Тип работ: ${workType}. Проект ${year} года.`,
  },
}));

const PROJECT_YEARS = [...new Set(PROJECTS.map((project) => Number(project.year)))].sort((a, b) => a - b);
const MIN_PROJECT_YEAR = PROJECT_YEARS[0];
const MAX_PROJECT_YEAR = PROJECT_YEARS[PROJECT_YEARS.length - 1];

const KAZAKHSTAN_BOUNDS = {
  north: 56.6,
  south: 40.1,
  west: 46.4,
  east: 87.4,
};

const KAZAKHSTAN_MAP_BOUNDS = [
  [KAZAKHSTAN_BOUNDS.west, KAZAKHSTAN_BOUNDS.south],
  [KAZAKHSTAN_BOUNDS.east, KAZAKHSTAN_BOUNDS.north],
];

let activeBasemap = "liberty";
let activeFilter = "all";
let activeProjectId = PROJECTS[0].id;
let activeYear = MAX_PROJECT_YEAR;
let currentLanguage = localStorage.getItem("geocart-language") || "ru";
let currentTheme = localStorage.getItem("geocart-color-theme") || "light";
let maplibreMap;
let activePopup;
let mapEventsBound = false;

if (!I18N[currentLanguage]) {
  currentLanguage = "ru";
}

if (!["dark", "light"].includes(currentTheme)) {
  currentTheme = "light";
}

const serviceGrid = document.querySelector("#service-grid");
const projectList = document.querySelector("#project-list");
const projectMap = document.querySelector("#project-map");
const basemapButtons = document.querySelectorAll("[data-basemap]");
const langButtons = document.querySelectorAll("[data-lang]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const yearSlider = document.querySelector("#project-year-slider");
const yearLabel = document.querySelector("[data-year-label]");
const yearCount = document.querySelector("[data-year-count]");
const yearTicks = document.querySelector("#year-ticks");

function t(key) {
  return I18N[currentLanguage][key] || I18N.ru[key] || key;
}

function localized(object) {
  if (!object) {
    return "";
  }

  return object[currentLanguage] || object.ru || "";
}

function getCategoryLabel(category) {
  return I18N[currentLanguage].categories[category] || I18N.ru.categories[category] || category;
}

function getBasemapStyle(key) {
  const style = BASEMAPS[key]?.style || BASEMAPS.liberty.style;
  return typeof style === "string" ? style : JSON.parse(JSON.stringify(style));
}

function applyI18n() {
  document.documentElement.lang = currentLanguage === "kk" ? "kk" : currentLanguage;
  document.title = t("pageTitle");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split(";").forEach((pair) => {
      const [attribute, key] = pair.split(":");
      if (attribute && key) {
        element.setAttribute(attribute, t(key));
      }
    });
  });

  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === currentLanguage);
  });

  updateThemeButton();
  updateYearControl();
  renderServices();
  renderProjectList();

  if (maplibreMap) {
    updateProjectSource();
    updateActiveProjectPaint();
  }

  if (activePopup) {
    const project = getActiveProject();
    activePopup.remove();
    activePopup = null;
    if (project) {
      openProjectPopup(project);
    }
  }
}

function setLanguage(language) {
  if (!I18N[language]) {
    return;
  }

  currentLanguage = language;
  localStorage.setItem("geocart-language", language);
  applyI18n();
}

function setTheme(theme) {
  if (!["dark", "light"].includes(theme)) {
    return;
  }

  currentTheme = theme;
  document.body.dataset.theme = theme;
  localStorage.setItem("geocart-color-theme", theme);
  updateThemeButton();
}

function updateThemeButton() {
  if (!themeToggle) {
    return;
  }

  const nextThemeLabel = currentTheme === "dark" ? t("themeLight") : t("themeDark");
  themeToggle.dataset.themeState = currentTheme;
  themeToggle.setAttribute("aria-label", nextThemeLabel);
  themeToggle.setAttribute("title", nextThemeLabel);
}

function setupYearControl() {
  if (!yearSlider) {
    return;
  }

  yearSlider.min = MIN_PROJECT_YEAR;
  yearSlider.max = MAX_PROJECT_YEAR;
  yearSlider.value = activeYear;

  if (yearTicks) {
    yearTicks.innerHTML = PROJECT_YEARS.map((year) => `<span>${year}</span>`).join("");
  }

  updateYearControl();
}

function updateYearControl() {
  if (!yearSlider) {
    return;
  }

  yearSlider.value = activeYear;
  yearSlider.setAttribute("aria-label", t("yearFilterLabel"));

  if (yearLabel) {
    yearLabel.textContent = activeYear;
  }

  if (yearCount) {
    yearCount.textContent = `${getVisibleProjects().length} ${t("yearProjectsCount")}`;
  }
}

function renderServices() {
  serviceGrid.innerHTML = SERVICES.map(
    (service) => `
      <article class="service-card">
        <span class="service-icon">${service.icon}</span>
        <h3>${localized(service.title)}</h3>
        <ul>
          ${service.items[currentLanguage].map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </article>
    `,
  ).join("");
}

function getVisibleProjects() {
  return PROJECTS.filter(
    (project) => Number(project.year) === activeYear && (activeFilter === "all" || project.category === activeFilter),
  );
}

function getActiveProject() {
  const visibleProjects = getVisibleProjects();
  return visibleProjects.find((project) => project.id === activeProjectId) || visibleProjects[0] || null;
}

function getProjectById(projectId) {
  return PROJECTS.find((project) => project.id === projectId);
}

function createProjectCollection(projects = getVisibleProjects()) {
  return {
    type: "FeatureCollection",
    features: projects.map((project) => ({
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [project.lng, project.lat],
      },
      properties: {
        id: project.id,
        title: localized(project.title),
        place: localized(project.place),
        year: project.year,
        category: getCategoryLabel(project.category),
        summary: localized(project.summary),
      },
    })),
  };
}

function renderProjectList() {
  const visibleProjects = getVisibleProjects();

  updateYearControl();

  if (!visibleProjects.length) {
    activeProjectId = null;
    projectList.innerHTML = `<div class="project-empty">${t("projectsEmpty")}</div>`;
    return;
  }

  if (!visibleProjects.some((project) => project.id === activeProjectId)) {
    activeProjectId = visibleProjects[0].id;
  }

  projectList.innerHTML = visibleProjects
    .map(
      (project) => `
        <button class="project-item ${project.id === activeProjectId ? "is-active" : ""}" type="button" data-project-id="${project.id}">
          <span>${getCategoryLabel(project.category)} · ${project.year}</span>
          <strong>${localized(project.title)}</strong>
          <p>${localized(project.place)}</p>
        </button>
      `,
    )
    .join("");

  projectList.querySelectorAll("[data-project-id]").forEach((button) => {
    button.addEventListener("click", () => selectProject(button.dataset.projectId));
  });
}

function selectProject(projectId) {
  activeProjectId = projectId;
  const project = getActiveProject();

  renderProjectList();

  if (maplibreMap) {
    focusMapLibreProject(project);
    updateActiveProjectPaint();
    return;
  }

  renderFallbackMap();
}

function setActiveFilter(filter) {
  activeFilter = filter;

  document.querySelectorAll(".filter-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filter === filter);
  });

  renderProjectList();

  if (maplibreMap) {
    updateProjectSource();
    updateActiveProjectPaint();
    const project = getActiveProject();
    if (!project && activePopup) {
      activePopup.remove();
      activePopup = null;
    }
    focusMapLibreProject(project);
  } else {
    renderFallbackMap();
  }
}

function setActiveYear(year) {
  activeYear = Math.min(MAX_PROJECT_YEAR, Math.max(MIN_PROJECT_YEAR, Number(year)));
  renderProjectList();

  if (activePopup) {
    activePopup.remove();
    activePopup = null;
  }

  if (maplibreMap) {
    updateProjectSource();
    updateActiveProjectPaint();
    fitKazakhstanExtent();
    return;
  }

  renderFallbackMap();
}

function getFallbackPosition(project) {
  const x =
    ((project.lng - KAZAKHSTAN_BOUNDS.west) / (KAZAKHSTAN_BOUNDS.east - KAZAKHSTAN_BOUNDS.west)) *
    100;
  const y =
    ((KAZAKHSTAN_BOUNDS.north - project.lat) /
      (KAZAKHSTAN_BOUNDS.north - KAZAKHSTAN_BOUNDS.south)) *
    100;

  return {
    left: Math.min(92, Math.max(8, x)),
    top: Math.min(86, Math.max(14, y)),
  };
}

function renderFallbackMap() {
  const visibleProjects = getVisibleProjects();

  projectMap.innerHTML = '<div class="fallback-map"></div>';
  const fallbackMap = projectMap.querySelector(".fallback-map");

  visibleProjects.forEach((project) => {
    const position = getFallbackPosition(project);
    const pin = document.createElement("button");
    pin.type = "button";
    pin.className = `map-pin ${project.id === activeProjectId ? "is-active" : ""}`;
    pin.style.left = `${position.left}%`;
    pin.style.top = `${position.top}%`;
    pin.setAttribute("aria-label", localized(project.title));
    pin.addEventListener("click", () => selectProject(project.id));
    fallbackMap.append(pin);
  });
}

function initProjectMap() {
  if (!window.maplibregl) {
    renderFallbackMap();
    return;
  }

  maplibreMap = new maplibregl.Map({
    container: projectMap,
    style: getBasemapStyle(activeBasemap),
    center: [67.2, 48.3],
    zoom: 4,
    maxBounds: [
      [40, 38],
      [92, 58],
    ],
    attributionControl: false,
  });

  maplibreMap.addControl(new maplibregl.NavigationControl({ visualizePitch: true }), "top-right");
  maplibreMap.addControl(
    new maplibregl.AttributionControl({
      compact: true,
      customAttribution:
        '<a href="https://openfreemap.org/" target="_blank" rel="noreferrer">OpenFreeMap</a>',
    }),
    "bottom-right",
  );

  maplibreMap.on("style.load", () => {
    addProjectLayers();
    updateActiveProjectPaint();
  });

  maplibreMap.on("load", () => {
    bindProjectMapEvents();
    fitKazakhstanExtent(0);
  });
}

function fitKazakhstanExtent(duration = 500) {
  if (!maplibreMap) {
    return;
  }

  maplibreMap.fitBounds(KAZAKHSTAN_MAP_BOUNDS, {
    padding: { top: 70, right: 70, bottom: 50, left: 70 },
    duration,
    essential: true,
  });
}

function addProjectLayers() {
  if (!maplibreMap || maplibreMap.getSource(PROJECT_SOURCE_ID)) {
    updateProjectSource();
    return;
  }

  maplibreMap.addSource(PROJECT_SOURCE_ID, {
    type: "geojson",
    data: createProjectCollection(),
    cluster: true,
    clusterMaxZoom: 12,
    clusterRadius: 50,
  });

  maplibreMap.addLayer({
    id: CLUSTER_LAYER_ID,
    type: "circle",
    source: PROJECT_SOURCE_ID,
    filter: ["has", "point_count"],
    paint: {
      "circle-color": ["step", ["get", "point_count"], "#1c8b62", 5, "#376ca8", 12, "#e6a23c"],
      "circle-radius": ["step", ["get", "point_count"], 18, 5, 24, 12, 30],
      "circle-stroke-color": "#ffffff",
      "circle-stroke-width": 3,
    },
  });

  maplibreMap.addLayer({
    id: CLUSTER_COUNT_LAYER_ID,
    type: "symbol",
    source: PROJECT_SOURCE_ID,
    filter: ["has", "point_count"],
    layout: {
      "text-field": ["get", "point_count_abbreviated"],
      "text-font": ["Open Sans Bold"],
      "text-size": 12,
      "text-allow-overlap": true,
      "text-ignore-placement": true,
    },
    paint: {
      "text-color": "#ffffff",
    },
  });

  maplibreMap.addLayer({
    id: PROJECT_LAYER_ID,
    type: "circle",
    source: PROJECT_SOURCE_ID,
    filter: ["!", ["has", "point_count"]],
    paint: getProjectPointPaint(),
  });

  maplibreMap.addLayer({
    id: PROJECT_LABEL_LAYER_ID,
    type: "symbol",
    source: PROJECT_SOURCE_ID,
    filter: ["!", ["has", "point_count"]],
    layout: {
      "text-field": "G",
      "text-font": ["Open Sans Bold"],
      "text-size": 10,
      "text-allow-overlap": true,
      "text-ignore-placement": true,
    },
    paint: {
      "text-color": "#ffffff",
    },
  });
}

function getProjectPointPaint() {
  return {
    "circle-radius": ["case", ["==", ["get", "id"], activeProjectId], 14, 11],
    "circle-color": ["case", ["==", ["get", "id"], activeProjectId], "#e6a23c", "#1c8b62"],
    "circle-stroke-color": "#ffffff",
    "circle-stroke-width": 3,
  };
}

function updateProjectSource() {
  const source = maplibreMap?.getSource(PROJECT_SOURCE_ID);
  if (!source) {
    return;
  }

  source.setData(createProjectCollection());
}

function updateActiveProjectPaint() {
  if (!maplibreMap?.getLayer(PROJECT_LAYER_ID)) {
    return;
  }

  const paint = getProjectPointPaint();
  Object.entries(paint).forEach(([property, value]) => {
    maplibreMap.setPaintProperty(PROJECT_LAYER_ID, property, value);
  });
}

function bindProjectMapEvents() {
  if (mapEventsBound) {
    return;
  }

  mapEventsBound = true;

  maplibreMap.on("click", (event) => {
    const interactiveLayers = [CLUSTER_LAYER_ID, PROJECT_LAYER_ID, PROJECT_LABEL_LAYER_ID].filter((layerId) =>
      maplibreMap.getLayer(layerId),
    );

    if (!interactiveLayers.length) {
      return;
    }

    const features = maplibreMap.queryRenderedFeatures(event.point, {
      layers: interactiveLayers,
    });

    if (!features.length) {
      return;
    }

    const feature = features[0];

    if (feature.properties.cluster) {
      expandCluster(feature);
      return;
    }

    const project = getProjectById(feature.properties.id);
    if (!project) {
      return;
    }

    activeProjectId = project.id;
    renderProjectList();
    updateActiveProjectPaint();
    openProjectPopup(project);
  });

  maplibreMap.on("mousemove", (event) => {
    const interactiveLayers = [CLUSTER_LAYER_ID, PROJECT_LAYER_ID, PROJECT_LABEL_LAYER_ID].filter((layerId) =>
      maplibreMap.getLayer(layerId),
    );

    if (!interactiveLayers.length) {
      projectMap.style.cursor = "";
      return;
    }

    const features = maplibreMap.queryRenderedFeatures(event.point, {
      layers: interactiveLayers,
    });
    projectMap.style.cursor = features.length ? "pointer" : "";
  });
}

function expandCluster(feature) {
  const source = maplibreMap.getSource(PROJECT_SOURCE_ID);
  const clusterId = feature.properties.cluster_id;
  const coordinates = feature.geometry.coordinates.slice();
  const zoomToCluster = (zoom) => {
    maplibreMap.easeTo({
      center: coordinates,
      zoom,
      duration: 700,
    });
  };

  const zoomResult = source.getClusterExpansionZoom(clusterId, (error, zoom) => {
    if (!error) {
      zoomToCluster(zoom);
    }
  });

  if (zoomResult && typeof zoomResult.then === "function") {
    zoomResult.then(zoomToCluster);
  }
}

function focusMapLibreProject(project, openPopup = true) {
  if (!project) {
    return;
  }

  maplibreMap.flyTo({
    center: [project.lng, project.lat],
    zoom: Math.max(maplibreMap.getZoom(), 7),
    duration: 800,
    essential: true,
  });

  updateActiveProjectPaint();

  if (openPopup) {
    openProjectPopup(project);
  }
}

function openProjectPopup(project) {
  if (activePopup) {
    activePopup.remove();
  }

  activePopup = new maplibregl.Popup({
    closeButton: true,
    closeOnClick: false,
    offset: 18,
    maxWidth: "300px",
  })
    .setLngLat([project.lng, project.lat])
    .setHTML(
      `
        <div class="map-popup">
          <strong>${localized(project.title)}</strong>
          <p>${localized(project.summary)}</p>
          <small>${localized(project.place)} · ${project.year}</small>
        </div>
      `,
    )
    .addTo(maplibreMap);
}

function setBasemap(basemapKey) {
  if (!BASEMAPS[basemapKey] || basemapKey === activeBasemap || !maplibreMap) {
    return;
  }

  activeBasemap = basemapKey;
  updateBasemapButtons();

  if (activePopup) {
    activePopup.remove();
    activePopup = null;
  }

  maplibreMap.setStyle(getBasemapStyle(activeBasemap));
}

function updateBasemapButtons() {
  basemapButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.basemap === activeBasemap);
  });
}

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => setActiveFilter(button.dataset.filter));
});

basemapButtons.forEach((button) => {
  button.addEventListener("click", () => setBasemap(button.dataset.basemap));
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

if (yearSlider) {
  yearSlider.addEventListener("input", () => setActiveYear(yearSlider.value));
}

themeToggle.addEventListener("click", () => {
  setTheme(currentTheme === "dark" ? "light" : "dark");
});

setupYearControl();
document.body.dataset.theme = currentTheme;
applyI18n();
updateBasemapButtons();
initProjectMap();
