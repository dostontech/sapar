export const languages = [
  { value: "en", label: "English" },
  { value: "uz", label: "O‘zbek" },
  { value: "ru", label: "Русский" },
] as const;

export type Language = (typeof languages)[number]["value"];

export const content = {
  en: {
    label: "English",
    eyebrow: "AI-native · cloud-first business operating system",
    title: "The operating system for companies that need to move with clarity and control.",
    intro:
      "One platform for sales, finance, HR, and inventory, designed for the way Central Asian companies actually operate.",
    primaryCta: "Book a demo",
    secondaryCta: "Explore modules",
    stats: ["Built for Uzbekistan", "9 core modules", "AI-native workflow"],
    nav: [
      { id: "why-sapar", label: "Why Sapar" },
      { id: "modules", label: "Modules" },
      { id: "compliance", label: "Compliance" },
      { id: "contact", label: "Contact" },
    ],
    whyTitle: "Why Sapar",
    whyIntro:
      "Sapar gives Central Asian businesses one AI-native, cloud-first platform to run the entire operation without disconnected tools or local workarounds.",
    whyItems: [
      {
        title: "One source of truth",
        body: "Bring teams, branches, and departments into one shared operating view.",
      },
      {
        title: "Faster decisions",
        body: "Use real-time data and AI assistance to act with confidence.",
      },
      {
        title: "Less manual work",
        body: "Automate documents, approvals, reconciliation, and everyday admin.",
      },
    ],
    modulesTitle: "Core modules",
    modulesIntro: "One platform, nine core modules, zero context switching.",
    modules: [
      "CRM",
      "HRM",
      "Accounting & Finance",
      "Inventory Management",
      "Sales",
      "Purchases",
      "POS",
      "Project Management",
      "Customer Support",
    ],
    complianceTitle: "Built for Uzbekistan",
    complianceIntro:
      "Compliance is not a plug-in. It is built into how Sapar works, from day one.",
    complianceItems: [
      "Payroll & tax automation",
      "E-IMZO digital signature",
      "Banking integrations",
      "Government API connections",
      "Ready tax filing",
    ],
    industriesTitle: "Who we help",
    industriesIntro:
      "Sapar is designed for companies that need to scale across teams, locations, and processes without losing control.",
    industries: [
      "Retail & multi-branch stores",
      "Wholesale & distribution",
      "Manufacturing & light production",
      "Service businesses",
      "Construction & contractors",
      "Hospitality",
      "E-commerce & omnichannel sellers",
    ],
    useCasesTitle: "Common use cases",
    useCases: [
      {
        title: "From lead to cash",
        body: "Capture a lead → close a deal → generate invoice → receive payment → reconcile automatically.",
      },
      {
        title: "Monthly close without chaos",
        body: "Keep sales, purchases, and inventory synced so finance closes faster with fewer errors.",
      },
      {
        title: "Inventory you can trust",
        body: "Track real-time movements, stock levels, and reorder suggestions across branches.",
      },
      {
        title: "Payroll & tax made simple",
        body: "Calculate payroll and withholding automatically and prepare filings inside the system.",
      },
      {
        title: "Paperwork without the paperwork",
        body: "Sign and approve documents with E-IMZO and track everything in one place.",
      },
    ],
    teamTitle: "Built by people who have shipped this before",
    teamBody:
      "Sapar is shaped by practical experience in complex operations, local compliance, and fast-growing businesses.",
  },
  uz: {
    label: "O‘zbekcha",
    eyebrow: "Sun’iy intellektga asoslangan · bulutga yo‘naltirilgan biznes operatsion tizimi",
    title: "Klarlik va nazorat bilan harakat qilishni talab qiladigan bizneslar uchun operatsion tizim.",
    intro:
      "Savdo, moliya, HR va inventarizatsiya uchun bitta platforma — Markaziy Osiyo kompaniyalari amalda ishlatadigan tarzga moslashtirilgan.",
    primaryCta: "Demo buyurtma bering",
    secondaryCta: "Modullarni ko‘rish",
    stats: ["O‘zbekiston uchun moslashtirilgan", "9 ta asosiy modul", "AI-native ishlash"],
    nav: [
      { id: "why-sapar", label: "Nima uchun Sapar" },
      { id: "modules", label: "Modullar" },
      { id: "compliance", label: "Muvofiqlik" },
      { id: "contact", label: "Aloqa" },
    ],
    whyTitle: "Nima uchun Sapar",
    whyIntro:
      "Sapar Markaziy Osiyo bizneslariga ajratilgan vositalar, on-premise serverlar yoki boshqa mamlakatlar uchun yaratilgan muvofiqlik jarayonlarisiz butun operatsiyani boshqarish uchun birinchi bo‘lib AI-native va bulutga yo‘naltirilgan platformani taqdim etadi.",
    whyItems: [
      {
        title: "Bir xil ma’lumot manbai",
        body: "Jamoalar, filiallar va bo‘limlarni bitta umumiy operatsion ko‘rinishda birlashtiring.",
      },
      {
        title: "Tezroq qarorlar",
        body: "Real vaqt ma’lumotlari va AI yordami bilan ishonchli qaror qabul qiling.",
      },
      {
        title: "Kamroq qo‘lda ishlash",
        body: "Hujjatlar, tasdiqlash, hisob-kitob va kundalik ma’muriy ishlarni avtomatlashtiring.",
      },
    ],
    modulesTitle: "Asosiy modullar",
    modulesIntro: "Bitta platforma, to‘qqiz asosiy modul, hech qanday kontekst almashinuvi yo‘q.",
    modules: [
      "CRM",
      "HRM",
      "Buxgalteriya va moliya",
      "Inventar boshqaruvi",
      "Savdo",
      "Xaridlar",
      "POS",
      "Loyiha boshqaruvi",
      "Mijozlarga xizmat ko‘rsatish",
    ],
    complianceTitle: "O‘zbekiston uchun yaratilgan",
    complianceIntro:
      "Muvofiqlik plagin emas. U Sapar ishlash uslubiga birinchi kundan boshlab o‘rnatilgan.",
    complianceItems: [
      "Ish haqi va soliq avtomatizatsiyasi",
      "E-IMZO raqamli imzo",
      "Bank integratsiyalari",
      "Davlat API ulanishlari",
      "Tayyor soliq taqdimotlari",
    ],
    industriesTitle: "Biz kimlarga yordam beramiz",
    industriesIntro:
      "Sapar jamoalar, joylar va jarayonlar bo‘yicha o‘sishni talab qiladigan, lekin nazoratni yo‘qotmaslikni istagan kompaniyalar uchun mo‘ljallangan.",
    industries: [
      "Chakana va ko‘p filialli do‘konlar",
      "Ulgurji savdo va tarqatish",
      "Ishlab chiqarish va engil ishlab chiqarish",
      "Xizmat ko‘rsatish bizneslari",
      "Qurilish va pudratchilar",
      "Mehmonxona va restoranlar",
      "Elektron tijorat va ko‘p kanalli sotuvchilar",
    ],
    useCasesTitle: "Umumiy foydalanish holatlari",
    useCases: [
      {
        title: "Lid dan naqd pulgacha",
        body: "Lidni qo‘lga kiritish → bitimni yopish → hisob-faktura yaratish → to‘lovni qabul qilish → avtomatik muvofiqlashtirish.",
      },
      {
        title: "Tartibsiz oylik yopilish",
        body: "Savdo, xaridlar va inventarizatsiyani sinxron holda ushlab turing, shunda moliya tezroq va kam xatolar bilan yopiladi.",
      },
      {
        title: "Ishonchli inventar",
        body: "Filiallar bo‘ylab real vaqt harakatlari, qoldiqlar va qayta buyurtma takliflarini kuzatib boring.",
      },
      {
        title: "Ish haqi va soliqni osonlashtirish",
        body: "Ish haqi va ushrani avtomatik hisoblab, soliq hisobotlarini tizim ichida tayyorlang.",
      },
      {
        title: "Qog‘ozsiz hujjatlar",
        body: "E-IMZO bilan hujjatlarni imzolash va tasdiqlash, hamma narsani bitta joyda kuzatib borish.",
      },
    ],
    teamTitle: "Buni ilgari ham amalga oshirgan odamlar tomonidan yaratilgan",
    teamBody:
      "Sapar murakkab operatsiyalar, mahalliy muvofiqlik va tez o‘sayotgan bizneslar tajribasi asosida shakllantirilgan.",
  },
  ru: {
    label: "Русский",
    eyebrow: "AI-native · облачная операционная система для бизнеса",
    title: "Операционная система для компаний, которым важны ясность и контроль.",
    intro:
      "Одна платформа для продаж, финансов, HR и инвентаря, созданная под реальные процессы компаний Центральной Азии.",
    primaryCta: "Запланировать демонстрацию",
    secondaryCta: "Изучить модули",
    stats: ["Подходит под Узбекистан", "9 ключевых модулей", "AI-native рабочий процесс"],
    nav: [
      { id: "why-sapar", label: "Почему Sapar" },
      { id: "modules", label: "Модули" },
      { id: "compliance", label: "Соответствие" },
      { id: "contact", label: "Контакты" },
    ],
    whyTitle: "Почему Sapar",
    whyIntro:
      "Sapar дает компаниям Центральной Азии единый AI-native и cloud-first продукт для управления всей операцией без разрозненных инструментов и локальных обходных решений.",
    whyItems: [
      {
        title: "Единый источник правды",
        body: "Объедините команды, филиалы и подразделения в одном общем рабочем пространстве.",
      },
      {
        title: "Более быстрые решения",
        body: "Действуйте увереннее на основе данных в реальном времени и ИИ.",
      },
      {
        title: "Меньше ручной работы",
        body: "Автоматизируйте документы, согласования, сверку и повседневную административную нагрузку.",
      },
    ],
    modulesTitle: "Ключевые модули",
    modulesIntro: "Одна платформа, девять основных модулей, без переключения контекста.",
    modules: [
      "CRM",
      "HRM",
      "Бухгалтерия и финансы",
      "Управление запасами",
      "Продажи",
      "Закупки",
      "POS",
      "Управление проектами",
      "Поддержка клиентов",
    ],
    complianceTitle: "Создано для Узбекистана",
    complianceIntro:
      "Соответствие — это не плагин. Оно встроено в работу Sapar с первого дня.",
    complianceItems: [
      "Автоматизация зарплаты и налогов",
      "Цифровая подпись E-IMZO",
      "Интеграции с банками",
      "Подключения к государственным API",
      "Готовая подача налоговой отчетности",
    ],
    industriesTitle: "Кому мы помогаем",
    industriesIntro:
      "Sapar создан для компаний, которым нужно расти по командам, локациям и процессам, не теряя контроля.",
    industries: [
      "Розничные и мультибренчевые сети",
      "Оптовая торговля и дистрибуция",
      "Производство и легкая промышленность",
      "Сервисные бизнесы",
      "Строительство и подрядчики",
      "Гостеприимство",
      "E-commerce и омниканальные продавцы",
    ],
    useCasesTitle: "Типовые сценарии",
    useCases: [
      {
        title: "От лида до денег",
        body: "Зафиксировать лид → закрыть сделку → создать счет → получить оплату → автоматически сверить.",
      },
      {
        title: "Месячное закрытие без хаоса",
        body: "Синхронно держите продажи, закупки и запасы, чтобы финансы закрывались быстрее и с меньшим числом ошибок.",
      },
      {
        title: "Надежные остатки и запасы",
        body: "Отслеживайте движения в реальном времени, уровни запасов и рекомендации по повторным заказам по филиалам.",
      },
      {
        title: "Зарплата и налоги без лишней рутины",
        body: "Автоматически рассчитывайте зарплату и удержания и готовьте отчеты прямо в системе.",
      },
      {
        title: "Документы без бумажной волокиты",
        body: "Подписывайте и подтверждайте документы через E-IMZO и ведите всё в одном месте.",
      },
    ],
    teamTitle: "Создано людьми, которые уже делали это раньше",
    teamBody:
      "Sapar формируется на основе практического опыта в сложных операциях, локальной compliance и быстрорастущих компаниях.",
  },
} as const;
