// ---------- 1. THEME SWITCHER (day / night) ----------
const themeBtn = document.getElementById('theme-btn');

function applyTheme() {
  // the <html> tag holds data-theme, CSS reads it
  const root = document.documentElement;
  if (root.dataset.theme === 'dark') {
    root.dataset.theme = 'light';
  } else {
    root.dataset.theme = 'dark';
  }
}
// when the button is clicked, run applyTheme
themeBtn.addEventListener('click', applyTheme);

// ---------- 2. TRANSLATIONS (English / Arabic) ----------
const translations = {
  en: {
    nav_about: 'About',
    nav_skills: 'Skills',
    nav_projects: 'Projects',
    nav_hobbies: 'Hobbies',
    nav_volunteer: 'Volunteering',
    nav_contact: 'Contact',
    btn_theme: 'Theme',
    hero_hi: "Hi, I'm",
    hero_name: 'Orjoan Aldabaibah',
    fact1: 'Full-stack web developer',
    fact2: 'Data analytics intern at Dimensions',
    fact3: 'Linux Society and IEEE volunteer',
    hero_role: 'Junior Web Developer and Data Analyst',
    about_text: "I'm a developer who loves turning ideas into working products. I build full-stack web apps, turn data into clear dashboards, and care about clean, reliable code. I learn fast, solve problems calmly, and enjoy working in a team.",
    skills_title: 'Skills',
    sk_data: 'Data and BI',
    sk_web: 'Web development',
    sk_tools: 'Tools',
    sk_lang: 'Languages',
    sk_lang_list: 'Arabic, English, Japanese',
    projects_title: 'Projects',
    view: 'View project',
    p0_desc: 'Subscription management app, my graduation project.',
    p1_title: 'Lost and Found System',
    p1_desc: 'A web system for reporting lost and found items.',
    p2_title: 'Solartec Store',
    p2_desc: 'A website for sustainable energy devices.',
    p3_title: 'Codescape (IEEE)',
    p3_desc: 'Event website for an IEEE competition.',
    edu_title: 'Education',
    edu1_degree: "Bachelor's degree in Business Information Technology",
    edu1_school: 'University of Jordan',
    edu2_track: 'Cyber and Web Essentials track',
    edu2_school: '42 Amman',
    vol_title: 'Volunteering',
    v1_date: 'Oct 2023 – Oct 2024',
    v1_role: 'PR Team Member',
    v1_org: 'Linux Society',
    v2_date: 'Jan 2024 – Jan 2025',
    v2_role: 'Geeks Team Member',
    v2_org: 'IEEE Computer Society',
    v3_date: 'Oct 2024 – Oct 2025',
    v3_role: 'PR Events Supervisor',
    v3_org: 'Linux Society',
    v4_date: 'Feb 2025 – Oct 2025',
    v4_role: 'Geeks Sub-Secretary',
    v4_org: 'IEEE Computer Society',
    v5_role: 'Organizer',
    v5_org: 'Hult Prize, University of Jordan',
    v6_role: 'Organizer',
    v6_org: 'Beside.jo',
    hobbies_title: 'Hobbies',
    h1: 'Gaming',
    h2: 'Doing puzzles',
    contact_title: 'Contact',
    label_name: 'Name',
    label_email: 'Email',
    label_msg: 'Message',
    send: 'Send message',
    footer: 'Made by Orjoan Aldabaibah',
    langBtn: 'عربي'
  },
  ar: {
    nav_about: 'نبذة عني',
    nav_skills: 'المهارات',
    nav_projects: 'المشاريع',
    nav_hobbies: 'الهوايات',
    nav_volunteer: 'التطوع',
    nav_contact: 'تواصل معي',
    btn_theme: 'تغيير المظهر',
    hero_hi: 'مرحبًا، أنا',
    hero_name: 'أرجوان علي الدبايبة',
    fact1: 'مطورة ويب متكاملة',
    fact2: 'متدربة تحليل بيانات في Dimensions',
    fact3: 'متطوعة في نادي لينكس وIEEE',
    hero_role: 'مطورة ويب ومحللة بيانات مبتدئة',
    about_text: 'أنا مطورة أحب تحويل الأفكار إلى منتجات تعمل بشكل حقيقي. أبني تطبيقات ويب متكاملة، وأحوّل البيانات إلى لوحات واضحة، وأهتم بكتابة كود نظيف وموثوق. أتعلم بسرعة، وأحل المشكلات بهدوء، وأستمتع بالعمل ضمن فريق.',
    skills_title: 'المهارات',
    sk_data: 'البيانات وذكاء الأعمال',
    sk_web: 'تطوير الويب',
    sk_tools: 'الأدوات',
    sk_lang: 'اللغات',
    sk_lang_list: 'العربية، الإنجليزية، اليابانية',
    projects_title: 'المشاريع',
    view: 'عرض المشروع',
    p0_desc: 'تطبيق لإدارة الاشتراكات، وهو مشروع تخرجي.',
    p1_title: 'نظام المفقودات',
    p1_desc: 'نظام ويب للإبلاغ عن الأغراض المفقودة والموجودة.',
    p2_title: 'متجر سولارتك',
    p2_desc: 'موقع لأجهزة الطاقة المستدامة.',
    p3_title: 'كودسكيب (IEEE)',
    p3_desc: 'موقع فعالية لمسابقة IEEE.',
    edu_title: 'التعليم',
    edu1_degree: 'بكالوريوس في تكنولوجيا المعلومات التجارية',
    edu1_school: 'الجامعة الأردنية',
    edu2_track: 'مسار أساسيات الأمن السيبراني والويب',
    edu2_school: '42 عمّان',
    vol_title: 'التطوع',
    v1_date: 'أكتوبر 2023 – أكتوبر 2024',
    v1_role: 'عضو فريق العلاقات العامة',
    v1_org: 'نادي لينكس',
    v2_date: 'يناير 2024 – يناير 2025',
    v2_role: 'عضو فريق Geeks',
    v2_org: 'IEEE Computer Society',
    v3_date: 'أكتوبر 2024 – أكتوبر 2025',
    v3_role: 'مشرفة فعاليات العلاقات العامة',
    v3_org: 'نادي لينكس',
    v4_date: 'فبراير 2025 – أكتوبر 2025',
    v4_role: 'أمينة سر مساعدة في فريق Geeks',
    v4_org: 'IEEE Computer Society',
    v5_role: 'منظمة',
    v5_org: 'Hult Prize، الجامعة الأردنية',
    v6_role: 'منظمة',
    v6_org: 'Beside.jo',
    hobbies_title: 'الهوايات',
    h1: 'الألعاب', h2: 'حل الألغاز',
    contact_title: 'تواصل معي',
    label_name: 'الاسم',
    label_email: 'البريد الإلكتروني',
    label_msg: 'الرسالة',
    send: 'إرسال الرسالة',
    footer: 'من تصميم أرجوان علي الدبايبة',
    langBtn: 'English'
  }
};

let lang = 'en';

function applyLanguage() {
  // t = the dictionary of the current language
  const t = translations[lang];

  // find every element that has data-translate
  const elements = document.querySelectorAll('[data-translate]');
  for (const el of elements) {
    // read the key from the element, for example "nav_about"
    const key = el.dataset.translate;
    // replace the text with the translation
    el.textContent = t[key];
  }

  // tell the browser the language and the reading direction
  document.documentElement.lang = lang;
  if (lang === 'ar') {
    document.documentElement.dir = 'rtl';
  } else {
    document.documentElement.dir = 'ltr';
  }

  // change the language button text
  document.getElementById('lang-btn').textContent = t.langBtn;
}

function toggleLanguage() {
  if (lang === 'en') {
    lang = 'ar';
  } else {
    lang = 'en';
  }
  applyLanguage();
}
// when the button is clicked, run toggleLanguage
document.getElementById('lang-btn').addEventListener('click', toggleLanguage);