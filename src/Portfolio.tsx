// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Mail, Linkedin, ChevronDown, Plus, Minus } from 'lucide-react';

export default function Portfolio() {
  const [expandedService, setExpandedService] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [expandedArticle, setExpandedArticle] = useState(null);
  const [showLegalModal, setShowLegalModal] = useState(null);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    if (expandedArticle !== null) {
      setTimeout(() => {
        const el = document.getElementById('article-' + expandedArticle);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [expandedArticle]);

  const scroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
  };

  const data = {
    en: {
      nav: ['Services', 'Projects', 'Process', 'Articles', 'Contact'],
      hero: ['Creating\ndigital solutions\nwith intelligence', 'Combining creativity with data-driven approach to build products that deliver measurable results.', 'Start Project'],
      labels: ['Services', 'Projects', 'Work Steps', 'FAQ', 'Ready to Start?', 'Get in touch to discuss your project', 'Expert Articles', 'Read article', 'Close', '© 2026 Anna K. All rights reserved.', 'Based in Amsterdam - Working remotely worldwide'],
      footer: {
        privacy: 'Privacy Policy',
        cookies: 'Cookie Policy',
        terms: 'Terms of Use'
      },
      legal: {
        privacy: {
          title: 'Privacy Policy',
          content: 'This Privacy Policy describes how we collect, use, and protect your personal information when you use our services.\n\nInformation We Collect:\n- Contact information (name, email, phone)\n- Usage data and analytics\n- Cookies and tracking technologies\n\nHow We Use Your Information:\n- To provide and improve our services\n- To communicate with you about projects\n- To analyze and optimize our website\n\nData Protection:\nWe implement appropriate security measures to protect your personal information. Your data is never sold to third parties.\n\nYour Rights:\nYou have the right to access, correct, or delete your personal information at any time.\n\nContact us at your.email@example.com for any privacy-related questions.'
        },
        cookies: {
          title: 'Cookie Policy',
          content: 'We use cookies to enhance your browsing experience and analyze website traffic.\n\nWhat Are Cookies:\nCookies are small text files stored on your device when you visit our website.\n\nTypes of Cookies We Use:\n- Essential cookies: Required for website functionality\n- Analytics cookies: Help us understand how visitors use our site\n- Preference cookies: Remember your settings and preferences\n\nManaging Cookies:\nYou can control cookies through your browser settings. Note that disabling certain cookies may affect website functionality.\n\nThird-Party Cookies:\nWe may use third-party services like Google Analytics that set their own cookies.\n\nBy continuing to use our website, you consent to our use of cookies as described in this policy.'
        },
        terms: {
          title: 'Terms of Use',
          content: 'Please read these Terms of Use carefully before using our services.\n\nAcceptance of Terms:\nBy accessing and using this website, you accept and agree to be bound by these terms.\n\nServices:\nWe provide UI/UX design, AI solutions, marketing, and consulting services. Specific terms are defined in individual project agreements.\n\nIntellectual Property:\nAll content, designs, and materials created by us remain our intellectual property until full payment is received.\n\nLimitation of Liability:\nWe are not liable for any indirect, incidental, or consequential damages arising from the use of our services.\n\nTermination:\nWe reserve the right to terminate or suspend access to our services at our discretion.\n\nGoverning Law:\nThese terms are governed by the laws of the Netherlands.\n\nContact:\nFor questions about these terms, contact us at your.email@example.com'
        }
      },
      services: [
        ['UI/UX Design', 'Interface design focused on user experience and conversion', ['Target audience and behavioral pattern analysis', 'Prototyping and mockup creation', 'Design systems for product scalability', 'A/B testing and data-driven improvements']],
        ['AI Solutions & Automation', 'AI implementation for business process optimization', ['Chatbots to reduce business workload', 'Marketing process automation through AI', 'Custom solutions for specific business tasks']],
        ['Testing & Analytics', 'Comprehensive product analysis for quality improvement', ['Functional and regression testing', 'UX audit with specific recommendations', 'Metrics setup and analysis (Google Analytics)', 'A/B testing for conversion growth']],
        ['Strategic Marketing', 'Data-driven approach to promotion with ROI focus', ['Data-driven marketing strategy', 'SEO optimization and content strategy', 'Campaign analytics and CPA reduction', 'Creating content that converts']],
        ['Project Management', 'Agile approach from concept to scaling', ['Scrum/Kanban methodologies', 'Strategic planning and roadmap']],
        ['Enterprise Solutions (B2B)', 'Digital transformation and scalable solutions', ['Digital transformation strategy and roadmap', 'Enterprise platforms and system integrations', 'Business process automation', 'AI implementation for operations optimization']]
      ],
      projects: [
        ['AI Chatbot for Customer Support', 'AI & Automation', 'Telegram bot for automating 70% of support requests', '70% automation, 24/7 availability'],
        ['Wellness Platform Design', 'UI/UX', 'Reimagining user experience for health service', 'Minimalist interface, wellness focus'],
        ['Creative Campaign for Coffee Shop', 'Marketing & Creative', '3D visualization and content strategy for local business', 'Brand awareness growth'],
        ['Business Meetings Platform', 'UI/UX & Product', 'MVP design for organizing meetings with activities system', 'Full cycle: concept to prototype']
      ],
      process: [
        ['01', 'Immersion', 'Business, audience, and competitor analysis'],
        ['02', 'Prototyping', 'Rapid MVP creation for hypothesis testing'],
        ['03', 'Development', 'Iterative implementation with regular demos'],
        ['04', 'Optimization', 'Metrics analysis, A/B tests, scaling']
      ],
      faq: [
        ['What problems do you solve?', 'I specialize in creating digital products with measurable results: conversion growth, automation, UX improvement.'],
        ['How do you adapt solutions?', 'Each project starts with audience, competitor analysis. I create custom strategies aligned with your KPIs.'],
        ['Do you have work examples?', 'Yes, portfolio with cases: from redesign with 45% conversion growth to AI bots automating 70% of requests.'],
        ['How is pricing determined?', 'Depends on complexity. Fixed price or hourly. Projects: 2 weeks - 3 months.'],
        ['Post-launch support?', 'Yes, I offer metrics monitoring, adjustments, technical support and long-term scaling support.'],
        ['What tools do you use?', 'Figma, Adobe, Python, ChatGPT API, Google Analytics, Notion, Jira. Chosen per project.'],
        ['How to start?', 'Email me with task description. We will have a call. First consultation is free.'],
        ['Do you work with B2B?', 'Yes, experience in enterprise projects: digital transformation, process automation, integration.']
      ],
      services: [
        ['UI/UX Design', 'Interface design focused on user experience and conversion', ['Target audience and behavioral pattern analysis', 'Prototyping and mockup creation', 'Design systems for product scalability', 'A/B testing and data-driven improvements']],
        ['AI Solutions & Automation', 'AI implementation for business process optimization', ['Chatbots to reduce business workload', 'Marketing process automation through AI', 'Custom solutions for specific business tasks']],
        ['Testing & Analytics', 'Comprehensive product analysis for quality improvement', ['Functional and regression testing', 'UX audit with specific recommendations', 'Metrics setup and analysis (Google Analytics)', 'A/B testing for conversion growth']],
        ['Strategic Marketing', 'Data-driven approach to promotion with ROI focus', ['Data-driven marketing strategy', 'SEO optimization and content strategy', 'Campaign analytics and CPA reduction', 'Creating content that converts']],
        ['Project Management', 'Agile approach from concept to scaling', ['Scrum/Kanban methodologies', 'Strategic planning and roadmap']],
        ['Enterprise Solutions (B2B)', 'Digital transformation and scalable solutions', ['Digital transformation strategy and roadmap', 'Enterprise platforms and system integrations', 'Business process automation', 'AI implementation for operations optimization']]
      ],
      projects: [
        ['AI Chatbot for Customer Support', 'AI & Automation', 'Telegram bot for automating 70% of support requests', '70% automation, 24/7 availability'],
        ['Wellness Platform Design', 'UI/UX', 'Reimagining user experience for health service', 'Minimalist interface, wellness focus'],
        ['Creative Campaign for Coffee Shop', 'Marketing & Creative', '3D visualization and content strategy for local business', 'Brand awareness growth'],
        ['Business Meetings Platform', 'UI/UX & Product', 'MVP design for organizing meetings with activities system', 'Full cycle: concept to prototype']
      ],
      process: [
        ['01', 'Immersion', 'Business, audience, and competitor analysis'],
        ['02', 'Prototyping', 'Rapid MVP creation for hypothesis testing'],
        ['03', 'Development', 'Iterative implementation with regular demos'],
        ['04', 'Optimization', 'Metrics analysis, A/B tests, scaling']
      ],
      faq: [
        ['What problems do you solve?', 'I specialize in creating digital products with measurable results: conversion growth, automation, UX improvement.'],
        ['How do you adapt solutions?', 'Each project starts with audience, competitor analysis. I create custom strategies aligned with your KPIs.'],
        ['Do you have work examples?', 'Yes, portfolio with cases: from redesign with 45% conversion growth to AI bots automating 70% of requests.'],
        ['How is pricing determined?', 'Depends on complexity. Fixed price or hourly. Projects: 2 weeks - 3 months.'],
        ['Post-launch support?', 'Yes, I offer metrics monitoring, adjustments, technical support and long-term scaling support.'],
        ['What tools do you use?', 'Figma, Adobe, Python, ChatGPT API, Google Analytics, Notion, Jira. Chosen per project.'],
        ['How to start?', 'Email me with task description. We will have a call. First consultation is free.'],
        ['Do you work with B2B?', 'Yes, experience in enterprise projects: digital transformation, process automation, integration.']
      ],
      articles: [
        ['Building Natural Link Profile in 2026', 'Dec 29, 2025', '5 min', 'SEO', 'Modern link building approaches', 'In 2026, the approach to building a link profile has changed dramatically. Search engines have become much smarter at recognizing artificial links.\n\nKey principles of natural link building:\n\n1. Quality Content as Foundation\nCreate materials worth sharing. Research, infographics, case studies with real numbers - this is what attracts organic links.\n\n2. Digital PR Instead of Buying Links\nWork with journalists, participate in expert comments, publish guest articles on authoritative resources in your niche.\n\n3. Source Diversity\nDo not focus on one type of platform. Combine: industry media, niche blogs, social platforms, educational resources.\n\n4. Natural Anchor List\nAvoid over-optimization. Use branded anchors (company name), naked URLs, generic phrases like read more, and only a small percentage of commercial anchors.\n\n5. Gradual Growth\nA sudden spike in links looks suspicious. Aim for smooth, steady growth.\n\nMonitoring Tools:\n- Ahrefs for competitor analysis\n- Majestic for link quality assessment\n- Google Search Console for tracking incoming links\n\nRemember: one quality backlink from an authoritative resource is worth more than hundreds of links from questionable sites.'],
        ['UX Trends 2026', 'Dec 15, 2025', '9 min', 'UI/UX', 'How minimalism is changing digital products', 'UX design is undergoing a philosophical shift. In 2026, the industry is moving from a race for features to creating meaningful user experiences.\n\nKey trends:\n\n1. Minimalism with Emotional Intelligence\nInterfaces are becoming simpler, but not colder. Micro-animations, subtle transitions, and thoughtful typography create an emotional connection without visual noise.\n\n2. Ethical Design\nAbandoning dark patterns, transparency in data usage, respecting user time. Companies are realizing that long-term loyalty is more important than short-term engagement metrics.\n\n3. Personalization Without Intrusiveness\nAI allows adapting the interface to each user, but it is important not to cross the line. Users should feel in control.\n\n4. Accessibility as Standard\nWCAG 2.2 is becoming the norm, not the exception. Design for everyone is not just social responsibility, but also audience expansion.\n\n5. Voice and Multimodal Interfaces\nCombination of voice, gestures, and traditional controls creates more natural interaction.\n\n6. Sustainable Design\nOptimization for low power consumption, support for older devices, fast loading - caring for the environment through design.\n\nPractical recommendations:\n- Conduct usability tests not only for functionality, but also for emotional response\n- Include an ethical design specialist on your team\n- Optimize not just for Desktop First or Mobile First, but for Context First\n\nThe future of UX is a balance between technological capabilities and humanity.'],
        ['SEO for Small Business', 'Dec 04, 2025', '8 min', 'SEO', 'Practical SEO guide', 'SEO in 2026 is no longer about keyword density, but about understanding user intent and creating expert content.\n\nSEO promotion stages:\n\n1. Keyword Analysis and Selection\n- Use Google Keyword Planner, Ahrefs, SEMrush\n- Focus on long-tail queries (3-5 words)\n- Analyze SERP: what does Google show for your queries?\n- Consider search intent: informational, navigational, transactional\n\n2. Technical Optimization\n- Loading speed (use PageSpeed Insights)\n- Mobile-first indexing - mobile version must be perfect\n- URL structure: short, clear, with keywords\n- Fix all 404 errors and set up proper redirects\n\n3. On-page Optimization\n- Title (50-60 characters) with keyword at the beginning\n- Meta description (150-160 characters) with call to action\n- H1-H6 headings in logical hierarchy\n- Alt tags for all images\n- Internal linking (3-5 relevant links per page)\n\n4. Content Strategy\n- Create content clusters: main article + supporting materials\n- Update old content with current information\n- Use various formats: articles, videos, infographics\n- Answer user questions (People Also Ask)\n\nRemember: SEO is a marathon, not a sprint. First results will appear in 3-6 months of regular work.']
      ],
      labels: ['Services', 'Projects', 'Work Steps', 'FAQ', 'Ready to Start?', 'Get in touch to discuss your project', 'Expert Articles', 'Read article', 'Close', '© 2026 Anna K. All rights reserved.', 'Based in Amsterdam - Working remotely worldwide']
    },
    ru: {
      nav: ['Услуги', 'Проекты', 'Процесс', 'Статьи', 'Контакт'],
      hero: ['Создаю\nцифровые решения\nс умом', 'Объединяю креативность с data-driven подходом для создания продуктов, которые приносят измеримые результаты.', 'Начать проект'],
      services: [
        ['UI/UX Дизайн', 'Проектирование интерфейсов с фокусом на конверсию', ['Анализ целевой аудитории и паттернов', 'Прототипирование и создание макетов', 'Дизайн-системы для масштабируемости', 'A/B тестирование на основе данных']],
        ['AI-решения и автоматизация', 'Внедрение AI для оптимизации процессов', ['Чат-боты для снятия нагрузки', 'Автоматизация маркетинга через AI', 'Кастомные решения под задачи']],
        ['Тестирование и аналитика', 'Анализ продукта для повышения качества', ['Функциональное тестирование', 'UX-аудит с рекомендациями', 'Настройка метрик (Google Analytics)', 'A/B тестирование для роста конверсий']],
        ['Стратегический маркетинг', 'Data-driven подход с фокусом на ROI', ['Маркетинговая стратегия на данных', 'SEO-оптимизация и контент', 'Аналитика и снижение CPA', 'Контент который конвертирует']],
        ['Управление проектами', 'Agile-подход от концепции до масштабирования', ['Scrum/Kanban методологии', 'Стратегическое планирование']],
        ['Корпоративные решения (B2B)', 'Цифровая трансформация для бизнеса', ['Стратегия цифровой трансформации', 'Корпоративные платформы', 'Автоматизация бизнес-процессов', 'Внедрение AI для оптимизации']]
      ],
      projects: [
        ['AI Чат-бот для поддержки', 'AI & Автоматизация', 'Телеграм бот для автоматизации 70% запросов', '70% автоматизации, 24/7'],
        ['Дизайн wellness-платформы', 'UI/UX', 'Переосмысление UX сервиса для здоровья', 'Минималистичный интерфейс'],
        ['Кампания для кофейни', 'Маркетинг', '3D-визуализация и контент-стратегия', 'Рост узнаваемости'],
        ['Платформа для встреч', 'UI/UX & Продукт', 'MVP для организации встреч', 'От концепции до прототипа']
      ],
      process: [
        ['01', 'Погружение', 'Анализ бизнеса, аудитории, конкурентов'],
        ['02', 'Прототипирование', 'Создание MVP для тестирования'],
        ['03', 'Разработка', 'Итеративная реализация'],
        ['04', 'Оптимизация', 'Анализ метрик, масштабирование']
      ],
      faq: [
        ['Какие задачи решаете?', 'Создание цифровых продуктов с результатами: рост конверсии, автоматизация, UX.'],
        ['Как адаптируете решения?', 'Анализ аудитории, конкурентов. Кастомные стратегии под ваши KPI.'],
        ['Есть примеры работ?', 'Да, кейсы: от редизайна +45% конверсии до AI-ботов 70% автоматизации.'],
        ['Как формируется цена?', 'От сложности. Фикс или почасово. 2 недели - 3 месяца.'],
        ['Поддержка после запуска?', 'Да, мониторинг метрик, корректировки, техподдержка.'],
        ['Какие инструменты?', 'Figma, Adobe, Python, ChatGPT API, Analytics, Notion, Jira.'],
        ['Как начать?', 'Email с описанием. Звонок. Первая консультация бесплатна.'],
        ['Работаете с B2B?', 'Да, опыт в корпоративных проектах: трансформация, автоматизация.']
      ],
      articles: [
        ['Естественный профиль сайта 2026', '29.12.2025', '5 мин', 'SEO', 'Линкбилдинг без санкций', 'В 2026 году подход к построению ссылочного профиля кардинально изменился. Поисковые системы стали намного умнее в распознавании искусственных ссылок.\n\nОсновные принципы естественного линкбилдинга:\n\n1. Качественный контент как основа\nСоздавайте материалы, которыми хочется делиться. Исследования, инфографика, кейсы с реальными цифрами — это то, что привлекает органические ссылки.\n\n2. Цифровой PR вместо покупки ссылок\nРаботайте с журналистами, участвуйте в экспертных комментариях, публикуйте гостевые статьи на авторитетных ресурсах вашей ниши.\n\n3. Разнообразие источников\nНе концентрируйтесь на одном типе площадок. Комбинируйте: отраслевые СМИ, профильные блоги, социальные платформы, образовательные ресурсы.\n\n4. Естественный анкор-лист\nИзбегайте переоптимизации. Используйте брендовые анкоры (название компании), naked URL, общие фразы типа читать далее, и лишь небольшой процент коммерческих анкоров.\n\n5. Постепенный рост\nРезкий скачок количества ссылок выглядит подозрительно. Стремитесь к плавному, стабильному росту.\n\nИнструменты для мониторинга:\n- Ahrefs для анализа конкурентов\n- Majestic для оценки качества ссылок\n- Google Search Console для отслеживания входящих ссылок\n\nПомните: один качественный бэклинк с авторитетного ресурса ценнее сотен ссылок с сомнительных площадок.'],
        ['Тренды UX 2026', '15.12.2025', '9 мин', 'UI/UX', 'Минимализм в цифровых продуктах', 'UX-дизайн переживает философский сдвиг. В 2026 году индустрия движется от гонки за функциями к созданию осмысленного пользовательского опыта.\n\nКлючевые тренды:\n\n1. Минимализм с эмоциональным интеллектом\nИнтерфейсы становятся проще, но не холоднее. Микроанимации, тонкие переходы и продуманная типографика создают эмоциональную связь без визуального шума.\n\n2. Этичный дизайн (Ethical Design)\nОтказ от dark patterns, прозрачность в использовании данных, уважение времени пользователя. Компании начинают осознавать, что долгосрочная лояльность важнее краткосрочных метрик вовлечённости.\n\n3. Персонализация без навязчивости\nAI позволяет адаптировать интерфейс под каждого пользователя, но важно не переходить грань. Пользователь должен чувствовать контроль.\n\n4. Доступность как стандарт\nWCAG 2.2 становится нормой, а не исключением. Дизайн для всех — это не только социальная ответственность, но и расширение аудитории.\n\n5. Голосовые и мультимодальные интерфейсы\nКомбинация голоса, жестов и традиционных элементов управления создаёт более естественное взаимодействие.\n\n6. Устойчивый дизайн\nОптимизация под низкое энергопотребление, поддержка старых устройств, быстрая загрузка — забота об экологии через дизайн.\n\nПрактические рекомендации:\n- Проводите юзабилити-тесты не только на функциональность, но и на эмоциональный отклик\n- Включайте в команду специалиста по этичному дизайну\n- Оптимизируйте не только под Desktop First или Mobile First, а под Context First\n\nБудущее UX — это баланс между технологическими возможностями и человечностью.'],
        ['SEO для малого бизнеса', '04.12.2025', '8 мин', 'SEO', 'Практическое руководство', 'SEO в 2026 году — это уже не о плотности ключевых слов, а о понимании намерений пользователей и создании экспертного контента.\n\nЭтапы SEO-продвижения:\n\n1. Анализ и выбор ключевых слов\n- Используйте Google Keyword Planner, Ahrefs, SEMrush\n- Фокусируйтесь на long-tail запросах (3-5 слов)\n- Анализируйте SERP: что показывает Google по вашим запросам?\n- Учитывайте поисковую интенцию: информационная, навигационная, транзакционная\n\n2. Техническая оптимизация\n- Скорость загрузки (используйте PageSpeed Insights)\n- Mobile-first индексация — мобильная версия должна быть идеальной\n- Структура URL: короткие, понятные, с ключевыми словами\n- Исправьте все 404 ошибки и настройте правильные редиректы\n\n3. On-page оптимизация\n- Title (50-60 символов) с ключевым словом в начале\n- Meta description (150-160 символов) с призывом к действию\n- Заголовки H1-H6 в логической иерархии\n- Alt-теги для всех изображений\n- Внутренняя перелинковка (3-5 релевантных ссылок на странице)\n\n4. Контент-стратегия\n- Создавайте контент-кластеры: основная статья + поддерживающие материалы\n- Обновляйте старый контент актуальной информацией\n- Используйте различные форматы: статьи, видео, инфографика\n- Отвечайте на вопросы пользователей (People Also Ask)\n\nПомните: SEO — это марафон, а не спринт. Первые результаты появятся через 3-6 месяцев регулярной работы.']
      ]
    }
  };

  const t = data[language];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      {showLegalModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowLegalModal(null)}>
          <div className="bg-white max-w-4xl w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b p-8 flex justify-between items-start">
              <h2 className="text-3xl font-light">{t.legal[showLegalModal].title}</h2>
              <button onClick={() => setShowLegalModal(null)} className="hover:bg-stone-100 p-2 transition"><X size={24} /></button>
            </div>
            <div className="p-8">
              <p className="text-stone-600 whitespace-pre-line leading-relaxed">{t.legal[showLegalModal].content}</p>
            </div>
          </div>
        </div>
      )}

      <nav className="fixed w-full bg-stone-50/95 backdrop-blur-sm z-40 border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-light">Anna K.</div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-8 text-sm">
              <a href="#services" onClick={(e) => scroll(e, 'services')}>{t.nav[0]}</a>
              <a href="#projects" onClick={(e) => scroll(e, 'projects')}>{t.nav[1]}</a>
              <a href="#process" onClick={(e) => scroll(e, 'process')}>{t.nav[2]}</a>
              <a href="#articles" onClick={(e) => scroll(e, 'articles')}>{t.nav[3]}</a>
              <a href="#contact" onClick={(e) => scroll(e, 'contact')}>{t.nav[4]}</a>
            </div>
            <div className="flex border border-stone-300 rounded-full p-1">
              <button onClick={() => setLanguage('en')} className={`px-3 py-1 rounded-full text-sm ${language === 'en' ? 'bg-stone-900 text-white' : ''}`}>EN</button>
              <button onClick={() => setLanguage('ru')} className={`px-3 py-1 rounded-full text-sm ${language === 'ru' ? 'bg-stone-900 text-white' : ''}`}>RU</button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-6xl md:text-8xl font-light leading-tight whitespace-pre-line">{t.hero[0]}</h1>
          <p className="text-2xl md:text-3xl text-stone-600 font-light">{t.hero[1]}</p>
          <a href="#contact" onClick={(e) => scroll(e, 'contact')} className="inline-flex items-center gap-2 bg-stone-900 text-stone-50 px-12 py-5 text-lg hover:bg-stone-50 hover:text-stone-900 border-2 border-stone-900 transition group">
            {t.hero[2]} <ArrowRight size={24} className="group-hover:translate-x-1 transition" />
          </a>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-16">{t.labels[0]}</h2>
          <div className="space-y-4">
            {t.services.map((s, i) => (
              <div key={i} className="border-2 border-stone-200 hover:border-stone-900 hover:bg-stone-900 hover:text-stone-50 transition group">
                <button onClick={() => setExpandedService(expandedService === i ? null : i)} className="w-full p-8 flex justify-between items-start text-left">
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl font-light mb-2">{s[0]}</h3>
                    <p className="text-stone-600 group-hover:text-stone-200 transition">{s[1]}</p>
                  </div>
                  <ChevronDown size={28} className={`transition ml-4 flex-shrink-0 ${expandedService === i ? 'rotate-180' : ''}`} />
                </button>
                {expandedService === i && (
                  <div className="px-8 pb-8 border-t-2 border-stone-200 group-hover:border-stone-700">
                    <ul className="space-y-3 pt-6">
                      {s[2].map((d, j) => <li key={j} className="flex gap-3 text-lg"><span>—</span><span>{d}</span></li>)}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-16">{t.labels[1]}</h2>
          {t.projects.map((p, i) => (
            <div key={i} className="border-t-2 pt-8 mb-12 hover:bg-stone-900 hover:text-stone-50 p-8 -m-8 transition group cursor-pointer">
              <div className="text-sm text-stone-500 group-hover:text-stone-300 mb-2">{p[1]}</div>
              <h3 className="text-4xl font-light mb-3">{p[0]}</h3>
              <p className="text-stone-600 group-hover:text-stone-200 mb-4 text-lg">{p[2]}</p>
              <div className="text-base font-medium">{p[3]}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="process" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-16">{t.labels[2]}</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {t.process.map((s, i) => (
              <div key={i} className="hover:bg-stone-900 hover:text-stone-50 p-8 -m-8 transition group cursor-pointer">
                <div className="text-7xl font-light text-stone-200 group-hover:text-stone-700 mb-4">{s[0]}</div>
                <h3 className="text-2xl font-light mb-3">{s[1]}</h3>
                <p className="text-stone-600 group-hover:text-stone-200">{s[2]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-stone-900 text-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-light mb-8">{t.labels[4]}</h2>
          <p className="text-2xl text-stone-400 mb-12">{t.labels[5]}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="mailto:your.email@example.com" className="flex items-center justify-center gap-3 border-2 border-stone-700 px-10 py-5 text-lg hover:bg-stone-50 hover:text-stone-900 transition group">
              <Mail size={24} className="group-hover:scale-110 transition" />
              <span>your.email@example.com</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 border-2 border-stone-700 px-10 py-5 text-lg hover:bg-stone-50 hover:text-stone-900 transition group">
              <Linkedin size={24} className="group-hover:scale-110 transition" />
              <span>LinkedIn</span>
            </a>
          </div>
          <p className="text-sm text-stone-500">{t.labels[10]}</p>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-stone-900 text-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-light mb-8">{t.labels[4]}</h2>
          <p className="text-2xl text-stone-400 mb-12">{t.labels[5]}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="mailto:your.email@example.com" className="flex items-center justify-center gap-3 border-2 border-stone-700 px-10 py-5 text-lg hover:bg-stone-50 hover:text-stone-900 transition group">
              <Mail size={24} className="group-hover:scale-110 transition" />
              <span>your.email@example.com</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 border-2 border-stone-700 px-10 py-5 text-lg hover:bg-stone-50 hover:text-stone-900 transition group">
              <Linkedin size={24} className="group-hover:scale-110 transition" />
              <span>LinkedIn</span>
            </a>
          </div>
          <p className="text-sm text-stone-500">{t.labels[10]}</p>
        </div>
      </section>

      <section id="articles" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-16">{t.labels[6]}</h2>
          <div className="space-y-4">
            {t.articles && t.articles.map((a, i) => (
              <div key={i} id={'article-' + i} className="border-2 border-stone-200">
                <div className={`hover:border-stone-900 hover:bg-stone-900 hover:text-stone-50 transition group ${expandedArticle === i ? 'border-stone-900 bg-stone-900 text-stone-50' : ''}`}>
                  <button onClick={() => setExpandedArticle(expandedArticle === i ? null : i)} className="w-full p-8 text-left">
                    <div className="flex justify-between items-start mb-4">
                      <div className={`inline-block px-3 py-1 text-xs ${expandedArticle === i ? 'bg-stone-700' : 'bg-stone-100 group-hover:bg-stone-700'}`}>{a[3]}</div>
                      <div className={`text-sm ${expandedArticle === i ? 'text-stone-300' : 'text-stone-500 group-hover:text-stone-300'}`}>{a[1]} - {a[2]}</div>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-light mb-3">{a[0]}</h3>
                    <p className={`text-lg mb-4 ${expandedArticle === i ? 'text-stone-200' : 'text-stone-600 group-hover:text-stone-200'}`}>{a[4]}</p>
                    <div className="flex items-center gap-2 text-sm font-medium">
                      {expandedArticle === i ? <><X size={16} /> {t.labels[8]}</> : <><ArrowRight size={16} className="group-hover:translate-x-1 transition" /> {t.labels[7]}</>}
                    </div>
                  </button>
                  {expandedArticle === i && (
                    <div className="px-8 pb-8 border-t-2 border-stone-700">
                      <div className="pt-8 prose prose-lg prose-invert max-w-none">
                        <div className="whitespace-pre-line text-stone-100 leading-relaxed">{a[5]}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-stone-900 text-stone-400">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-stone-500">{t.labels[9]}</p>
          <div className="flex gap-6 text-sm">
            <button onClick={() => setShowLegalModal('privacy')} className="hover:text-stone-300 transition">{t.footer.privacy}</button>
            <button onClick={() => setShowLegalModal('cookies')} className="hover:text-stone-300 transition">{t.footer.cookies}</button>
            <button onClick={() => setShowLegalModal('terms')} className="hover:text-stone-300 transition">{t.footer.terms}</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
