import React, { useEffect, useState } from 'react';
import { X, ArrowRight, Mail, Linkedin, ChevronDown, Plus, ArrowLeft, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import adhdImage0 from '../adhd.jpg';
import adhdImage1 from '../adhd1.jpg';
import adhdImage2 from '../adhd2.jpg';
import adhdImage3 from '../adhd3.jpg';
import dogImage0 from '../dog.jpg';
import dogImage1 from '../dog1.jpg';
import dutchImage0 from '../dutch1.jpg';
import dutchImage1 from '../dutch2.jpg';
import dutchImage2 from '../dutch3.jpg';
import massageImage0 from '../massage1.jpg';
import massageImage1 from '../massage2.jpg';
import massageImage2 from '../massage3.jpg';
import dailyPracticesImage0 from '../Daily Practices1.jpg';
import dailyPracticesImage1 from '../Daily Practices2.jpg';
import dailyPracticesImage2 from '../Daily Practices3.jpg';
import dailyPracticesImage3 from '../Daily Practices4.jpg';
import achievematerImage0 from '../achive mate.jpg';
import achievematerImage1 from '../achive mate2.jpg';
import achievematerImage2 from '../achive mate3.jpg';
import achievematerImage3 from '../achive mate4.jpg';
import stretchingImage0 from '../STRETCHING1.jpg';
import stretchingImage1 from '../STRETCHING2.jpg';
import qaImage0 from '../qa.jpg';
import qaImage1 from '../qa1.jpg';
import qaImage2 from '../qa2.jpg';

type RichSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type RichContent = {
  intro?: string[];
  sections: RichSection[];
  outro?: string[];
};

type Article = {
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  content: RichContent;
};

type LegalEntry = {
  title: string;
  content: RichContent;
};

type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  summary: string;
  images: string[];
  url?: string;
};

type ProjectCase = {
  goal: string;
  role: string;
  did: string;
  outcome: string;
};

type PrimaryServiceGroup = {
  slug: string;
  title: string;
  positioning: string;
  subserviceIndices: number[];
  supporting: string[];
  relatedProjects: string[];
  relatedArticle: (typeof ARTICLE_SLUGS)[number];
  pagePath: string;
};

type VisualizationBlock = {
  title: string;
  intro: string;
  labels: {
    before: string;
    after: string;
    placeholder: string;
    input: string;
    process: string;
    output: string;
    value: string;
  };
  before: string;
  after: string;
  details: [string, string][];
};

type LocaleData = {
  nav: string[];
  hero: [string, string, string];
  ui: {
    services: string;
    projects: string;
    process: string;
    articles: string;
    ready: string;
    contactLead: string;
    readArticle: string;
    close: string;
    back: string;
    projectWord: string;
    footerCopy: string;
    footerLocation: string;
  };
  footer: {
    privacy: string;
    cookies: string;
    terms: string;
  };
  legal: {
    privacy: LegalEntry;
    cookies: LegalEntry;
    terms: LegalEntry;
  };
  services: [string, string, string[]][];
  projects: Project[];
  process: [string, string, string][];
  articles: Article[];
};

const renderRichContent = (content: RichContent) => (
  <div className="space-y-10 text-[#40506f]">
    {content.intro?.map((paragraph, index) => (
      <p key={`intro-${index}`} className="text-lg leading-8 font-light">
        {paragraph}
      </p>
    ))}

    {content.sections.map((section, index) => (
      <section key={`${section.title}-${index}`} className="space-y-4">
        <h4 className="text-xl md:text-2xl font-medium tracking-tight text-[#081a3a]">{section.title}</h4>
        {section.paragraphs?.map((paragraph, paragraphIndex) => (
          <p key={`paragraph-${paragraphIndex}`} className="text-base md:text-lg leading-8 font-light">
            {paragraph}
          </p>
        ))}
        {section.bullets && (
          <ul className="space-y-3 pl-0">
            {section.bullets.map((bullet, bulletIndex) => (
              <li key={`bullet-${bulletIndex}`} className="flex items-start gap-3 text-base md:text-lg leading-8 font-light">
                <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-[#7c8ba8]" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </section>
    ))}

    {content.outro?.map((paragraph, index) => (
      <p key={`outro-${index}`} className="text-lg leading-8 font-light italic text-[#556480]">
        {paragraph}
      </p>
    ))}
  </div>
);

const projectImages = {
  dutch: [dutchImage0, dutchImage1, dutchImage2],
  dog: [dogImage0, dogImage1],
  massage: [massageImage0, massageImage1, massageImage2],
  adhd: [adhdImage0, adhdImage1, adhdImage2, adhdImage3],
  dailyPractices: [dailyPracticesImage0, dailyPracticesImage1, dailyPracticesImage2, dailyPracticesImage3],
  achievemater: [achievematerImage0, achievematerImage1, achievematerImage2, achievematerImage3],
  stretching: [stretchingImage0, stretchingImage1],
  qa: [qaImage0, qaImage1, qaImage2]
};

const SITE_URL = 'https://margaritasi.github.io/portfolio';

const SERVICE_SLUGS = [
  'ux-website-design',
  'digital-product-automation',
  'content-seo-optimization'
] as const;

const ARTICLE_SLUGS = [
  'natural-link-profile-2026',
  'ux-trends-2026',
  'seo-for-small-business'
] as const;

const ARTICLE_RELATIONS = [
  { serviceSlug: 'content-seo-optimization', projectSlugs: ['qa-testing-blog'] },
  { serviceSlug: 'ux-website-design', projectSlugs: ['netherlands-harmony-guide', 'walk-the-dog'] },
  { serviceSlug: 'content-seo-optimization', projectSlugs: ['qa-testing-blog'] }
] as const;

const SECTION_TEXT = {
  en: {
    primaryDirections: 'Primary Directions',
    supportingCapabilities: 'Supporting capabilities',
    servicePage: 'Open service page',
    whatIHelpWith: 'What I help with',
    relatedProjects: 'Related Projects',
    relatedArticle: 'Related Article',
    relatedService: 'Related Service',
    descriptiveCases: 'Descriptive Cases',
    more: 'More...',
    discussDirection: 'Discuss this direction',
    nextStep: 'Next Step',
    articleCta: 'If this topic matches your project, use the related service above or jump straight into a contact conversation.',
    articleStart: 'Start a project conversation',
    goal: 'Goal',
    role: 'My role',
    did: 'What I did',
    outcome: 'Outcome',
    visualWork: '3D & Spatial Visuals',
    projectPlaceholder: 'Structured case prepared for later visuals'
  },
  ru: {
    primaryDirections: 'Основные направления',
    supportingCapabilities: 'Поддерживающие компетенции',
    servicePage: 'Открыть service page',
    whatIHelpWith: 'Чем я могу помочь',
    relatedProjects: 'Связанные проекты',
    relatedArticle: 'Связанная статья',
    relatedService: 'Связанная услуга',
    descriptiveCases: 'Описательные кейсы',
    more: 'Подробнее...',
    discussDirection: 'Обсудить это направление',
    nextStep: 'Следующий шаг',
    articleCta: 'Если эта тема близка вашему проекту, перейдите к связанной услуге выше или сразу напишите мне.',
    articleStart: 'Начать обсуждение проекта',
    goal: 'Цель',
    role: 'Моя роль',
    did: 'Что я сделала',
    outcome: 'Результат',
    visualWork: '3D и визуализация пространства',
    projectPlaceholder: 'Кейс подготовлен для будущих визуалов'
  },
  nl: {
    primaryDirections: 'Primaire richtingen',
    supportingCapabilities: 'Ondersteunende capabilities',
    servicePage: 'Servicepagina openen',
    whatIHelpWith: 'Waar ik mee help',
    relatedProjects: 'Gerelateerde projecten',
    relatedArticle: 'Gerelateerd artikel',
    relatedService: 'Gerelateerde service',
    descriptiveCases: 'Beschrijvende cases',
    more: 'Meer...',
    discussDirection: 'Deze richting bespreken',
    nextStep: 'Volgende stap',
    articleCta: 'Als dit onderwerp bij je project past, gebruik dan de gerelateerde service hierboven of neem direct contact op.',
    articleStart: 'Start een projectgesprek',
    goal: 'Doel',
    role: 'Mijn rol',
    did: 'Wat ik deed',
    outcome: 'Uitkomst',
    visualWork: '3D & ruimtelijke visuals',
    projectPlaceholder: 'Case voorbereid voor latere visuals'
  }
} as const;

const PRIMARY_SERVICE_GROUPS: Record<'en' | 'ru' | 'nl', PrimaryServiceGroup[]> = {
  en: [
    {
      slug: 'ux-website-design',
      title: 'UX & Website Design',
      positioning: 'Websites, landing pages, and interface systems shaped for clarity, credibility, and easier decision-making.',
      subserviceIndices: [0],
      supporting: ['Audience and competitor research', 'Information architecture', 'Wireframes and MVP structure', 'Design systems and scanning clarity'],
      relatedProjects: ['netherlands-harmony-guide', 'walk-the-dog', 'stretching-workout'],
      relatedArticle: 'ux-trends-2026',
      pagePath: './services/ux-website-design.html'
    },
    {
      slug: 'digital-product-automation',
      title: 'Digital Product & Automation',
      positioning: 'Structured product flows, conversational systems, and lightweight automation for services that need less friction and clearer support.',
      subserviceIndices: [1, 4, 5],
      supporting: ['Product thinking and flow mapping', 'Workflow support and structured logic', 'Research-led discovery', 'Complex workflow and digital solution support'],
      relatedProjects: ['smart-massage', 'focus-meetings-platform', 'daily-practices', 'achievemater'],
      relatedArticle: 'ux-trends-2026',
      pagePath: './services/digital-product-automation.html'
    },
    {
      slug: 'content-seo-optimization',
      title: 'Content, SEO & Optimization',
      positioning: 'Content structure, QA thinking, SEO observations, and practical optimization recommendations that make digital work easier to scan and improve.',
      subserviceIndices: [2, 3],
      supporting: ['QA and content review', 'SEO observations and prioritization', 'Optimization recommendations', 'Testing and measurement support'],
      relatedProjects: ['qa-testing-blog'],
      relatedArticle: 'seo-for-small-business',
      pagePath: './services/content-seo-optimization.html'
    }
  ],
  ru: [
    {
      slug: 'ux-website-design',
      title: 'UX & Website Design',
      positioning: 'Сайты, лендинги и интерфейсы, собранные так, чтобы предложение было понятнее, спокойнее и легче для принятия решения.',
      subserviceIndices: [0],
      supporting: ['Исследование аудитории и конкурентов', 'Информационная архитектура', 'Wireframes и MVP-структура', 'Дизайн-системы и ясность сканирования'],
      relatedProjects: ['netherlands-harmony-guide', 'walk-the-dog', 'stretching-workout'],
      relatedArticle: 'ux-trends-2026',
      pagePath: './services/ux-website-design.html'
    },
    {
      slug: 'digital-product-automation',
      title: 'Digital Product & Automation',
      positioning: 'Структурированные продуктовые сценарии, conversational systems и лёгкая автоматизация для сервисов, которым нужен более понятный пользовательский путь.',
      subserviceIndices: [1, 4, 5],
      supporting: ['Product thinking и flow mapping', 'Workflow support и логика сценариев', 'Research-driven discovery', 'Поддержка сложных цифровых процессов'],
      relatedProjects: ['smart-massage', 'focus-meetings-platform', 'daily-practices', 'achievemater'],
      relatedArticle: 'ux-trends-2026',
      pagePath: './services/digital-product-automation.html'
    },
    {
      slug: 'content-seo-optimization',
      title: 'Content, SEO & Optimization',
      positioning: 'Контентная структура, QA-подход, SEO-наблюдения и практические рекомендации по улучшению, которые делают сайт яснее и полезнее.',
      subserviceIndices: [2, 3],
      supporting: ['QA и контент-ревью', 'SEO-наблюдения и приоритизация', 'Рекомендации по оптимизации', 'Поддержка тестирования и метрик'],
      relatedProjects: ['qa-testing-blog'],
      relatedArticle: 'seo-for-small-business',
      pagePath: './services/content-seo-optimization.html'
    }
  ],
  nl: [
    {
      slug: 'ux-website-design',
      title: 'UX & Website Design',
      positioning: 'Websites, landingspagina’s en interfaces die zijn opgebouwd voor duidelijkheid, geloofwaardigheid en een rustiger beslissingsproces.',
      subserviceIndices: [0],
      supporting: ['Doelgroep- en concurrentieonderzoek', 'Informatiearchitectuur', 'Wireframes en MVP-structuur', 'Design systems en scanbare inhoud'],
      relatedProjects: ['netherlands-harmony-guide', 'walk-the-dog', 'stretching-workout'],
      relatedArticle: 'ux-trends-2026',
      pagePath: './services/ux-website-design.html'
    },
    {
      slug: 'digital-product-automation',
      title: 'Digital Product & Automation',
      positioning: 'Gestructureerde productflows, conversationele systemen en lichte automatisering voor diensten die minder frictie en duidelijkere support nodig hebben.',
      subserviceIndices: [1, 4, 5],
      supporting: ['Product thinking en flow mapping', 'Workflow support en gestructureerde logica', 'Research-led discovery', 'Ondersteuning voor complexere digitale workflows'],
      relatedProjects: ['smart-massage', 'focus-meetings-platform', 'daily-practices', 'achievemater'],
      relatedArticle: 'ux-trends-2026',
      pagePath: './services/digital-product-automation.html'
    },
    {
      slug: 'content-seo-optimization',
      title: 'Content, SEO & Optimization',
      positioning: 'Contentstructuur, QA-denken, SEO-observaties en praktische optimalisatievoorstellen die digitale inhoud duidelijker en bruikbaarder maken.',
      subserviceIndices: [2, 3],
      supporting: ['QA en content review', 'SEO-observaties en prioritering', 'Optimalisatievoorstellen', 'Ondersteuning voor testen en metingen'],
      relatedProjects: ['qa-testing-blog'],
      relatedArticle: 'seo-for-small-business',
      pagePath: './services/content-seo-optimization.html'
    }
  ]
};

const EXTRA_PROJECTS: Record<'en' | 'ru' | 'nl', Project[]> = {
  en: [
    {
      slug: 'restaurant-support-automation',
      title: 'Restaurant Support Automation',
      category: 'Digital Product & Automation',
      description: 'Conversational reservation inquiry and guest support system for restaurants.',
      summary: 'Clearer inquiry flow and lighter communication load',
      images: []
    },
    {
      slug: 'seo-optimization-proposal',
      title: 'SEO Analysis & Optimization Proposal',
      category: 'Content, SEO & Optimization',
      description: 'Audit-style review of structure, content clarity, and practical optimization priorities.',
      summary: 'Clearer improvement priorities without inflated ranking claims',
      images: []
    }
  ],
  ru: [
    {
      slug: 'restaurant-support-automation',
      title: 'Restaurant Support Automation',
      category: 'Digital Product & Automation',
      description: 'Conversational system для запросов на бронирование и поддержки гостей ресторана.',
      summary: 'Более понятный путь запроса и меньше повторяющейся коммуникации',
      images: []
    },
    {
      slug: 'seo-optimization-proposal',
      title: 'SEO Analysis & Optimization Proposal',
      category: 'Content, SEO & Optimization',
      description: 'Аудит сайта с обзором структуры, ясности контента и приоритетов улучшений.',
      summary: 'Понятные рекомендации по улучшению без завышенных обещаний',
      images: []
    }
  ],
  nl: [
    {
      slug: 'restaurant-support-automation',
      title: 'Restaurant Support Automation',
      category: 'Digital Product & Automation',
      description: 'Conversationeel systeem voor reserveringsaanvragen en veelgestelde gastvragen in restaurants.',
      summary: 'Duidelijker aanvraagpad en minder repetitieve communicatie',
      images: []
    },
    {
      slug: 'seo-optimization-proposal',
      title: 'SEO Analysis & Optimization Proposal',
      category: 'Content, SEO & Optimization',
      description: 'Auditgerichte review van sitestructuur, contentduidelijkheid en geprioriteerde optimalisaties.',
      summary: 'Praktische verbeterprioriteiten zonder overdreven rankingclaims',
      images: []
    }
  ]
};

const DESCRIPTIVE_CASES_BY_GROUP = {
  'digital-product-automation': ['restaurant-support-automation'],
  'content-seo-optimization': ['seo-optimization-proposal']
} as const;

const VISUALIZATION_PROJECT: Record<'en' | 'ru' | 'nl', Project> = {
  en: {
    slug: 'visualization-work',
    title: 'Visualization Work',
    category: '3D & Spatial Visuals',
    description: 'A lightweight browser-based visualization case focused on making a rough interior concept easier to discuss through a clearer before / after presentation.',
    summary: 'Prepared as a standard project block for before / after carousel assets',
    images: []
  },
  ru: {
    slug: 'visualization-work',
    title: 'Visualization Work',
    category: '3D и визуализация пространства',
    description: 'Кейс лёгкой browser-based визуализации, где грубая пространственная схема была превращена в более понятную before / after подачу.',
    summary: 'Подготовлен как обычный проектный блок для будущих before / after изображений',
    images: []
  },
  nl: {
    slug: 'visualization-work',
    title: 'Visualization Work',
    category: '3D & ruimtelijke visuals',
    description: 'Een lichte browser-based visualisatiecase waarbij een ruwe ruimtelijke opzet werd omgezet in een duidelijkere before / after presentatie.',
    summary: 'Voorbereid als regulier projectblok voor toekomstige before / after carousel-assets',
    images: []
  }
};

const PROJECT_CASES: Record<'en' | 'ru' | 'nl', Record<string, ProjectCase>> = {
  en: {
    'netherlands-harmony-guide': {
      goal: 'Create a calmer, easier-to-scan guide format for location-based content about the Netherlands.',
      role: 'UX and website design, structure planning, content organization.',
      did: 'Organized pages around clearer hierarchy, readable sections, and a softer editorial rhythm for browsing.',
      outcome: 'Improved content organization and made the guide easier to explore.'
    },
    'walk-the-dog': {
      goal: 'Clarify a local dog walking service offer and make the site easier to scan before contact.',
      role: 'UX and website design, service communication, structure refinement.',
      did: 'Simplified the service offer, grouped trust signals, and made the booking path easier to understand.',
      outcome: 'Made service communication easier to scan and improved booking flow clarity.'
    },
    'restaurant-support-automation': {
      goal: 'Create a conversational system to support restaurant reservation requests and common customer questions.',
      role: 'Product structure, conversation logic, UX flow, content organization.',
      did: 'Mapped user flows for booking requests, FAQ handling, and menu guidance; structured key conversation branches; shaped a simpler support journey.',
      outcome: 'Created a clearer reservation inquiry flow and reduced repetitive communication patterns.'
    },
    'smart-massage': {
      goal: 'Create a clearer client support flow for appointment requests, service overview, and pre-contact questions.',
      role: 'Product structure, service UX, automation logic, content organization.',
      did: 'Structured appointment request steps, common question handling, and treatment information into a calmer support path.',
      outcome: 'Made service information easier to understand before contact and clarified communication flow.'
    },
    'focus-meetings-platform': {
      goal: 'Create an MVP structure for validation around organizing meetings and activities with more supportive planning flows.',
      role: 'Product UX, interaction structure, MVP definition.',
      did: 'Mapped planning scenarios, clarified feature hierarchy, and shaped a simpler structure for early product testing.',
      outcome: 'Created MVP structure for validation and clarified the planning experience.'
    },
    'daily-practices': {
      goal: 'Build a structured concept for daily wellbeing practices and supportive self-reflection.',
      role: 'Product UX, flow design, content structure.',
      did: 'Defined a calmer routine framework, organized practice paths, and shaped a more coherent self-guided experience.',
      outcome: 'Created a more supportive structure for daily use and emotional balance.'
    },
    achievemater: {
      goal: 'Shape a group work environment where people can stay focused on different goals with shared momentum.',
      role: 'Product structure, UX flow, collaboration framing.',
      did: 'Clarified the session structure, grouped user goals, and made the collaborative work model easier to understand.',
      outcome: 'Made the group productivity concept easier to explain and easier to validate.'
    },
    'stretching-workout': {
      goal: 'Present stretching and workout coaching in a cleaner, easier-to-follow service structure.',
      role: 'Website UX, service framing, content clarity.',
      did: 'Reworked service hierarchy, simplified training communication, and shaped a more readable path to contact.',
      outcome: 'Clarified service communication and made the offer easier to scan.'
    },
    'qa-testing-blog': {
      goal: 'Organize useful QA materials into a more structured and approachable knowledge space.',
      role: 'Content structure, QA perspective, information design.',
      did: 'Grouped useful materials, shaped more readable entry points, and clarified how content supports day-to-day learning.',
      outcome: 'Improved content organization and made useful materials easier to find.'
    },
    'seo-optimization-proposal': {
      goal: 'Review site structure, content clarity, and SEO basics to identify practical optimization priorities.',
      role: 'SEO analysis, content review, prioritization.',
      did: 'Reviewed structure, page communication, SEO observations, and grouped improvements into clearer next steps.',
      outcome: 'Created a practical optimization proposal with clearer priorities for improvement.'
    }
  },
  ru: {
    'netherlands-harmony-guide': {
      goal: 'Собрать более спокойный и легче сканируемый формат сайта-гида о Нидерландах.',
      role: 'UX и website design, структурирование контента, архитектура страниц.',
      did: 'Выстроила более понятную иерархию, редакционный ритм и структуру разделов для спокойного просмотра.',
      outcome: 'Улучшила организацию контента и сделала гид проще для изучения.'
    },
    'walk-the-dog': {
      goal: 'Сделать локальную услугу по выгулу собак понятнее и удобнее для просмотра до обращения.',
      role: 'UX и website design, сервисная коммуникация, структурирование.',
      did: 'Упростила оффер, сгруппировала trust-сигналы и сделала путь к заявке понятнее.',
      outcome: 'Сделала предложение легче для сканирования и улучшила ясность booking flow.'
    },
    'restaurant-support-automation': {
      goal: 'Создать conversational system для запросов на бронирование и частых вопросов гостей ресторана.',
      role: 'Product structure, conversation logic, UX flow, content organization.',
      did: 'Разобрала user flows для reservation requests, FAQ и menu guidance, выстроила ключевые ветки диалога и упростила support journey.',
      outcome: 'Сформировала более понятный inquiry flow и снизила повторяющиеся паттерны коммуникации.'
    },
    'smart-massage': {
      goal: 'Сделать более понятный support flow для записи, обзора услуг и частых клиентских вопросов.',
      role: 'Product structure, service UX, automation logic, content organization.',
      did: 'Выстроила шаги appointment requests, блок common questions и treatment information в более спокойный путь для клиента.',
      outcome: 'Сделала service information понятнее до контакта и улучшила ясность коммуникации.'
    },
    'focus-meetings-platform': {
      goal: 'Собрать MVP-структуру для проверки идеи организации встреч и активностей с более поддерживающими planning flows.',
      role: 'Product UX, interaction structure, MVP definition.',
      did: 'Разложила planning scenarios, уточнила иерархию функций и собрала более ясную структуру для ранней валидации.',
      outcome: 'Создала MVP structure for validation и сделала planning experience понятнее.'
    },
    'daily-practices': {
      goal: 'Построить структурированный концепт для ежедневных wellbeing-практик и поддерживающей рефлексии.',
      role: 'Product UX, flow design, content structure.',
      did: 'Определила более спокойный каркас рутин, организовала practice paths и собрала более цельный self-guided experience.',
      outcome: 'Создала более поддерживающую структуру для ежедневного использования и эмоционального баланса.'
    },
    achievemater: {
      goal: 'Сформировать групповое рабочее пространство, где люди могут двигаться к разным целям в общем ритме.',
      role: 'Product structure, UX flow, collaboration framing.',
      did: 'Уточнила структуру сессий, сгруппировала сценарии целей и сделала модель совместной работы понятнее.',
      outcome: 'Сделала концепт групповой продуктивности понятнее и удобнее для валидации.'
    },
    'stretching-workout': {
      goal: 'Представить стретчинг и тренировки в более чистой и понятной структуре услуг.',
      role: 'Website UX, service framing, content clarity.',
      did: 'Пересобрала иерархию услуг, упростила коммуникацию о тренировках и сделала путь к контакту понятнее.',
      outcome: 'Уточнила сервисную коммуникацию и сделала оффер проще для сканирования.'
    },
    'qa-testing-blog': {
      goal: 'Организовать полезные QA-материалы в более понятное и удобное knowledge space.',
      role: 'Content structure, QA perspective, information design.',
      did: 'Сгруппировала материалы, сделала точки входа читабельнее и уточнила, как контент помогает в повседневном обучении.',
      outcome: 'Улучшила организацию контента и сделала материалы проще для поиска.'
    },
    'seo-optimization-proposal': {
      goal: 'Проверить структуру сайта, ясность контента и SEO-базу, чтобы определить практические приоритеты улучшений.',
      role: 'SEO analysis, content review, prioritization.',
      did: 'Провела обзор структуры, коммуникации страниц и SEO-наблюдений, затем сгруппировала улучшения по приоритету.',
      outcome: 'Собрала практическое optimization proposal с более ясными приоритетами.'
    }
  },
  nl: {
    'netherlands-harmony-guide': {
      goal: 'Een rustiger en beter scanbaar gidsformat maken voor locatiegerichte content over Nederland.',
      role: 'UX en website design, structuurplanning, contentorganisatie.',
      did: 'Een duidelijkere hiërarchie, leesbare secties en een kalmere editorial flow voor browsegedrag opgezet.',
      outcome: 'De contentorganisatie verbeterd en de gids makkelijker gemaakt om te verkennen.'
    },
    'walk-the-dog': {
      goal: 'Een lokale hondenuitlaatservice duidelijker maken en makkelijker scanbaar vóór contact.',
      role: 'UX en website design, servicecommunicatie, structuurverbetering.',
      did: 'Het aanbod vereenvoudigd, trust-signals gegroepeerd en het boekingspad duidelijker gemaakt.',
      outcome: 'De servicecommunicatie verduidelijkt en de booking flow beter scanbaar gemaakt.'
    },
    'restaurant-support-automation': {
      goal: 'Een conversationeel systeem opzetten voor reserveringsaanvragen en veelgestelde restaurantvragen.',
      role: 'Productstructuur, conversation logic, UX flow, contentorganisatie.',
      did: 'User flows voor booking requests, FAQ-afhandeling en menubegeleiding uitgewerkt; belangrijke gesprekstakken gestructureerd; een eenvoudiger support journey gevormd.',
      outcome: 'Een duidelijker reserveringsaanvraag-pad gecreëerd en repetitieve communicatie verminderd.'
    },
    'smart-massage': {
      goal: 'Een duidelijker support flow maken voor afspraakverzoeken, service-overzicht en veelgestelde cliëntvragen.',
      role: 'Productstructuur, service UX, automation logic, contentorganisatie.',
      did: 'Afspraakverzoeken, vraagafhandeling en treatment information in een rustiger supportpad gestructureerd.',
      outcome: 'Service-informatie vóór contact verduidelijkt en de communicatiestroom beter gestructureerd.'
    },
    'focus-meetings-platform': {
      goal: 'Een MVP-structuur maken om een afspraken- en activiteitenconcept met ondersteunende planning flows te valideren.',
      role: 'Product UX, interactiestructuur, MVP-definitie.',
      did: 'Planningsscenario’s uitgewerkt, feature-hiërarchie verduidelijkt en een eenvoudiger structuur voor vroege validatie gevormd.',
      outcome: 'Een MVP-structuur voor validatie gecreëerd en de planningservaring verduidelijkt.'
    },
    'daily-practices': {
      goal: 'Een gestructureerd concept bouwen voor dagelijkse wellbeing-praktijken en ondersteunende reflectie.',
      role: 'Product UX, flow design, contentstructuur.',
      did: 'Een rustiger routinekader uitgewerkt, practice paths georganiseerd en een coherenter self-guided experience opgebouwd.',
      outcome: 'Een ondersteunendere structuur gemaakt voor dagelijks gebruik en emotionele balans.'
    },
    achievemater: {
      goal: 'Een groepswerkruimte vormgeven waar mensen aan verschillende doelen kunnen werken met gedeeld momentum.',
      role: 'Productstructuur, UX flow, collaboration framing.',
      did: 'De sessiestructuur verduidelijkt, doeltypes gegroepeerd en het samenwerkingsmodel begrijpelijker gemaakt.',
      outcome: 'Het groepsproductiviteitsconcept duidelijker en beter valideerbaar gemaakt.'
    },
    'stretching-workout': {
      goal: 'Stretching- en workoutcoaching in een schonere en beter scanbare servicestructuur presenteren.',
      role: 'Website UX, service framing, contentduidelijkheid.',
      did: 'De dienstenhiërarchie herwerkt, trainingscommunicatie vereenvoudigd en het pad naar contact helderder gemaakt.',
      outcome: 'De servicecommunicatie verduidelijkt en het aanbod makkelijker scanbaar gemaakt.'
    },
    'qa-testing-blog': {
      goal: 'Nuttige QA-materialen ordenen in een toegankelijkere en overzichtelijkere kennisruimte.',
      role: 'Contentstructuur, QA-perspectief, informatieontwerp.',
      did: 'Materialen gegroepeerd, duidelijkere instappunten gemaakt en verduidelijkt hoe de content dagelijks leren ondersteunt.',
      outcome: 'De contentorganisatie verbeterd en nuttige materialen makkelijker vindbaar gemaakt.'
    },
    'seo-optimization-proposal': {
      goal: 'Sitestructuur, contentduidelijkheid en SEO-basis reviewen om praktische verbeterprioriteiten te bepalen.',
      role: 'SEO-analyse, contentreview, prioritering.',
      did: 'Structuur, paginahelderheid en SEO-observaties bekeken en verbeterpunten in duidelijke stappen gegroepeerd.',
      outcome: 'Een praktisch optimalisatievoorstel met duidelijkere verbeterprioriteiten gemaakt.'
    }
  }
};

const VISUALIZATION_WORK: Record<'en' | 'ru' | 'nl', VisualizationBlock> = {
  en: {
    title: 'Visualization Work',
    intro: 'A lightweight browser-based visualization case focused on making a rough interior concept easier to discuss through a clearer before / after presentation.',
    labels: {
      before: 'Before',
      after: 'After',
      placeholder: 'Prepared for before / after visuals',
      input: 'Input',
      process: 'Process',
      output: 'Output',
      value: 'Value'
    },
    before: 'Simple furniture arrangement and rough spatial setup with limited visual hierarchy.',
    after: 'A cleaner, more appealing visualization that communicates the space more clearly without heavy specialist software.',
    details: [
      ['Input', 'A basic room layout or primitive interior setup used as a quick starting point.'],
      ['Process', 'Refined the composition, presentation rhythm, and visual emphasis inside a lightweight visualizer.'],
      ['Output', 'Created a clearer and more presentable before / after comparison for discussion.'],
      ['Value', 'Helped communicate an interior or spatial concept faster and with less ambiguity.']
    ]
  },
  ru: {
    title: 'Visualization Work',
    intro: 'Кейс лёгкой browser-based визуализации, где грубая пространственная схема была превращена в более понятную before / after подачу.',
    labels: {
      before: 'До',
      after: 'После',
      placeholder: 'Блок подготовлен для before / after визуалов',
      input: 'Исходные данные',
      process: 'Процесс',
      output: 'Результат',
      value: 'Ценность'
    },
    before: 'Простая расстановка мебели и грубая пространственная схема с минимальной визуальной иерархией.',
    after: 'Более чистая и выразительная визуализация, которая понятнее передаёт идею пространства без тяжёлого специализированного софта.',
    details: [
      ['Исходные данные', 'Базовая схема комнаты или примитивный spatial setup как быстрый старт.'],
      ['Процесс', 'Уточнила композицию, ритм подачи и визуальные акценты в лёгком визуализаторе.'],
      ['Результат', 'Собрала более понятную и презентабельную before / after подачу для обсуждения.'],
      ['Ценность', 'Помогла быстрее и яснее коммуницировать интерьерную или пространственную идею.']
    ]
  },
  nl: {
    title: 'Visualization Work',
    intro: 'Een lichte browser-based visualisatiecase waarbij een ruwe ruimtelijke opzet werd omgezet in een duidelijkere before / after presentatie.',
    labels: {
      before: 'Voor',
      after: 'Na',
      placeholder: 'Voorbereid voor before / after visuals',
      input: 'Input',
      process: 'Proces',
      output: 'Output',
      value: 'Waarde'
    },
    before: 'Een eenvoudige meubelopstelling en ruwe ruimtelijke setup met beperkte visuele hiërarchie.',
    after: 'Een schonere en aantrekkelijkere visualisatie die het ruimteconcept duidelijker laat zien zonder zware specialistische software.',
    details: [
      ['Input', 'Een basale kamerindeling of primitieve ruimtelijke setup als snelle startbasis.'],
      ['Proces', 'Compositie, presentatieritme en visuele nadruk verfijnd in een lichte visualizer.'],
      ['Output', 'Een duidelijkere en beter presenteerbare before / after vergelijking gemaakt.'],
      ['Waarde', 'Maakte het sneller en duidelijker om een interieur- of ruimteconcept te communiceren.']
    ]
  }
};

const ensureMetaTag = (selector: string, attributes: Record<string, string>) => {
  if (typeof document === 'undefined') return;

  let element = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element!.setAttribute(key, value);
  });
};

const ensureLinkTag = (selector: string, attributes: Record<string, string>) => {
  if (typeof document === 'undefined') return;

  let element = document.head.querySelector(selector) as HTMLLinkElement | null;
  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element!.setAttribute(key, value);
  });
};

const data: Record<string, LocaleData> = {
  en: {
    nav: ['Services', 'Projects', 'Process', 'Articles', 'Contact'],
    hero: [
      `Creating
digital solutions
with intelligence`,
      'Combining creativity with a data-driven approach to build products that deliver measurable results.',
      'Start Project'
    ],
    ui: {
      services: 'Services',
      projects: 'Projects',
      process: 'Work Steps',
      articles: 'Expert Articles',
      ready: 'Ready to Start?',
      contactLead: 'Get in touch to discuss your project',
      readArticle: 'Read article',
      close: 'Close',
      back: 'Back',
      projectWord: 'Project',
      footerCopy: '© 2026 It healthy coder. All rights reserved.',
      footerLocation: 'Based in Amsterdam - Working remotely worldwide'
    },
    footer: {
      privacy: 'Privacy Policy',
      cookies: 'Cookie Policy',
      terms: 'Terms of Use'
    },
    legal: {
      privacy: {
        title: 'Privacy Policy',
        content: {
          intro: [
            'Last updated: April 9, 2026',
            'This Privacy Policy explains how personal data is collected, used, and protected in accordance with the EU General Data Protection Regulation (GDPR) and the Dutch GDPR Implementation Act (AVG).'
          ],
          sections: [
            {
              title: 'Data Controller',
              paragraphs: ['Based in Amsterdam, Netherlands', 'Contact: itmadge@gmail.com']
            },
            {
              title: 'Information We Collect',
              bullets: [
                'Contact information such as name, email address, and phone number',
                'Usage data and website analytics',
                'Communication records related to projects and consultations',
                'Information voluntarily submitted through forms or email'
              ]
            },
            {
              title: 'Legal Basis for Processing',
              bullets: [
                'Consent under Article 6(1)(a) GDPR',
                'Performance of a contract under Article 6(1)(b) GDPR',
                'Legitimate interests under Article 6(1)(f) GDPR for business communication and website improvement'
              ]
            },
            {
              title: 'How Information Is Used',
              bullets: [
                'To provide and improve freelance services',
                'To communicate about projects, proposals, and consultations',
                'To analyze website performance using anonymized data where possible',
                'To comply with legal and tax obligations'
              ]
            },
            {
              title: 'Data Retention',
              bullets: [
                'Client data: contract duration plus 7 years in line with Dutch tax requirements',
                'Contact inquiries: up to 2 years',
                'Analytics data: up to 14 months in anonymized form where applicable'
              ]
            },
            {
              title: 'Data Protection',
              paragraphs: [
                'Appropriate technical and organizational measures are used, including access controls, secure storage, and routine security reviews. Personal data is never sold to third parties.'
              ]
            },
            {
              title: 'Your Rights Under GDPR',
              bullets: [
                'Right of access',
                'Right to rectification',
                'Right to erasure',
                'Right to restrict processing',
                'Right to data portability',
                'Right to object to processing',
                'Right to withdraw consent at any time'
              ]
            },
            {
              title: 'Data Transfers and Complaints',
              paragraphs: [
                'Operations are based within the EU/EEA. If data is transferred outside the EU/EEA, appropriate GDPR safeguards are applied.',
                'You may lodge a complaint with the Dutch Data Protection Authority (Autoriteit Persoonsgegevens) via autoriteitpersoonsgegevens.nl.'
              ]
            }
          ],
          outro: [
            'To exercise your rights or ask privacy-related questions, contact itmadge@gmail.com. Requests are answered within 30 days where required.'
          ]
        }
      },
      cookies: {
        title: 'Cookie Policy',
        content: {
          intro: [
            'Last updated: April 9, 2026',
            'This Cookie Policy explains how cookies are used in compliance with the Dutch Telecommunicatiewet and GDPR.'
          ],
          sections: [
            {
              title: 'What Cookies Are',
              paragraphs: [
                'Cookies are small text files stored on your device when you visit a website. They help the site function properly and improve user experience.'
              ]
            },
            {
              title: 'Essential Cookies',
              bullets: [
                'Required for core website functionality',
                'Used for session management and basic security',
                'Processed on the basis of legitimate interest'
              ]
            },
            {
              title: 'Analytics Cookies',
              bullets: [
                'Used only with consent',
                'Limited to first-party analytics where possible',
                'IP addresses are anonymized',
                'No cross-site tracking or advertising profiling is used'
              ]
            },
            {
              title: 'Preference Cookies',
              bullets: [
                'Remember language selection',
                'Store cookie preferences when applicable'
              ]
            },
            {
              title: 'Cookies We Do Not Use',
              bullets: [
                'Advertising cookies',
                'Third-party marketing cookies',
                'Social media tracking pixels',
                'Cookie walls'
              ]
            },
            {
              title: 'Managing Cookies',
              bullets: [
                'Use the cookie banner when available',
                'Adjust browser settings',
                'Withdraw consent at any time as easily as it was given'
              ]
            },
            {
              title: 'Retention and Third Parties',
              bullets: [
                'Essential cookies: session duration only',
                'Analytics cookies: up to 14 months',
                'Preference cookies: up to 12 months',
                'Any third-party tools used must meet GDPR transparency requirements'
              ]
            }
          ],
          outro: ['If you have questions about cookies, contact itmadge@gmail.com.']
        }
      },
      terms: {
        title: 'Terms of Use',
        content: {
          intro: [
            'Last updated: April 9, 2026',
            'These Terms of Use apply to the website and freelance services offered through it.'
          ],
          sections: [
            {
              title: 'Acceptance of Terms',
              paragraphs: [
                'By using the website or engaging the services, you agree to these terms. If you do not agree, please do not use the services.'
              ]
            },
            {
              title: 'Services',
              bullets: [
                'UI/UX design and prototyping',
                'AI solutions and automation',
                'Testing and analytics',
                'Strategic marketing and SEO',
                'Project management',
                'B2B enterprise solutions'
              ]
            },
            {
              title: 'Project Agreements',
              paragraphs: [
                'Specific deliverables, timelines, fees, and revision scopes are defined in individual project agreements governed by Dutch law.'
              ]
            },
            {
              title: 'Freelance Relationship',
              paragraphs: [
                'This is an independent contractor relationship. Services are provided as a freelancer / ZZP in the Netherlands and do not create an employment relationship.'
              ]
            },
            {
              title: 'Intellectual Property',
              bullets: [
                'Deliverables remain the creator’s intellectual property until full payment is received',
                'Rights transfer to the client according to the signed project agreement after full payment',
                'Pre-existing tools, methods, and materials remain the property of the creator',
                'Portfolio use may occur with client approval'
              ]
            },
            {
              title: 'Payment and Client Responsibilities',
              bullets: [
                'Invoices are payable within 30 days unless agreed otherwise',
                'Late payments may incur interest where permitted by Dutch law',
                'Clients must provide materials, approvals, and feedback on time',
                'Clients are responsible for ensuring provided content does not infringe third-party rights'
              ]
            },
            {
              title: 'Liability and Termination',
              bullets: [
                'No liability for indirect, incidental, or consequential damages',
                'Liability is limited to the amount paid for the relevant project',
                'Either party may terminate according to the project agreement',
                'Payment remains due for work completed up to termination'
              ]
            },
            {
              title: 'Governing Law',
              paragraphs: ['These terms are governed by the laws of the Netherlands. Disputes are subject to Dutch jurisdiction.']
            }
          ],
          outro: ['Questions about these terms can be sent to itmadge@gmail.com.']
        }
      }
    },
    services: [
      ['UI/UX Design', 'Interface design focused on user experience and conversion', ['Target audience and behavioral pattern analysis', 'Prototyping and mockup creation', 'Design systems for product scalability', 'A/B testing and data-driven improvements']],
      ['AI Solutions & Automation', 'AI implementation for business process optimization', ['Chatbots to reduce business workload', 'Marketing process automation through AI', 'Custom solutions for specific business tasks']],
      ['Testing & Analytics', 'Comprehensive product analysis for quality improvement', ['Functional and regression testing', 'UX audit with specific recommendations', 'Metrics setup and analysis', 'A/B testing for conversion growth']],
      ['Strategic Marketing', 'Data-driven approach to promotion with ROI focus', ['Data-driven marketing strategy', 'SEO optimization and content strategy', 'Campaign analytics and CPA reduction', 'Creating content that converts']],
      ['Project Management', 'Agile approach from concept to scaling', ['Scrum and Kanban methodologies', 'Strategic planning and roadmap']],
      ['Enterprise Solutions (B2B)', 'Digital transformation and scalable solutions', ['Digital transformation strategy and roadmap', 'Enterprise platforms and system integrations', 'Business process automation', 'AI implementation for operations optimization']]
    ],
    projects: [
      {
        slug: 'netherlands-harmony-guide',
        title: 'Netherlands Harmony Guide',
        category: 'UI/UX & Content',
        description: 'A visual guide website about the Netherlands with a calm editorial structure, clear navigation, and immersive location storytelling.',
        summary: 'Travel guide concept with atmospheric content presentation',
        images: projectImages.dutch
      },
      {
        slug: 'walk-the-dog',
        title: 'Walk the Dog',
        category: 'Pet Care & Local Service',
        description: 'A compact service website for dog walking with clear offer blocks, trust-focused messaging, and a friendly local brand feel.',
        summary: 'Service landing page focused on clarity and bookings',
        images: projectImages.dog,
        url: 'https://wukkishim.wixsite.com/walkthedog'
      },
      {
        slug: 'smart-massage',
        title: 'Smart Massage',
        category: 'Wellness & Booking',
        description: 'A massage studio website with gentle visual rhythm, service highlights, and a stronger path from discovery to appointment booking.',
        summary: 'Wellness website designed for calm browsing and conversion',
        images: projectImages.massage,
        url: 'https://wukkishim.wixstudio.com/smartmassage'
      },
      {
        slug: 'focus-meetings-platform',
        title: 'Focus Meetings Platform',
        category: 'UI/UX & Product',
        description: 'MVP design for organizing meetings with activities system for users who benefit from more focused and supportive planning flows.',
        summary: 'Product concept with structured meeting planning experience',
        images: projectImages.adhd,
        url: 'https://adhd-harmony-guide.lovable.app'
      },
      {
        slug: 'daily-practices',
        title: 'Daily Practices',
        category: 'Mental Health & Habit Support',
        description: 'A mental health product concept centered on gentle daily rituals, structured reflection, and supportive self-regulation flows.',
        summary: 'Wellbeing experience built around calm routines and emotional balance',
        images: projectImages.dailyPractices,
        url: 'https://body-mind-harmony-guide.lovable.app'
      },
      {
        slug: 'achievemater',
        title: 'Achievemater',
        category: 'Community & Productivity',
        description: 'A collaborative group workspace where people can work side by side toward different goals with structure, accountability, and shared momentum.',
        summary: 'Group productivity concept for focus, support, and progress',
        images: projectImages.achievemater,
        url: 'https://wukkishim.wixstudio.com/achievemater'
      },
      {
        slug: 'stretching-workout',
        title: 'Stretching & Workout',
        category: 'Fitness & Coaching',
        description: 'A training website for stretching and workout coaching with a clear service structure, approachable guidance, and a stronger conversion path.',
        summary: 'Coach website focused on movement practice and sign-ups',
        images: projectImages.stretching,
        url: 'https://wukkishim.wixstudio.com/ithealthyback'
      },
      {
        slug: 'qa-testing-blog',
        title: 'QA Testing Blog',
        category: 'Content & Knowledge',
        description: 'A QA blog with curated testing materials, practical notes, and resources that feel genuinely useful for learning and day-to-day work.',
        summary: 'Editorial knowledge hub for testing insights and resources',
        images: projectImages.qa
      }
    ],
    process: [
      ['01', 'Immersion', 'Business, audience, and competitor analysis'],
      ['02', 'Prototyping', 'Creating an MVP for testing'],
      ['03', 'Development', 'Iterative implementation'],
      ['04', 'Optimization', 'Metric analysis and scaling']
    ],
    articles: [
      {
        title: 'Building a Natural Link Profile in 2026',
        date: 'Dec 29, 2025',
        readTime: '5 min',
        category: 'SEO',
        excerpt: 'Modern link building approaches',
        content: {
          intro: [
            'Search engines in 2026 are much better at identifying artificial link patterns. Sustainable SEO now depends on trust, relevance, and consistency rather than volume alone.'
          ],
          sections: [
            {
              title: 'Why Link Building Changed',
              paragraphs: [
                'A natural link profile grows around useful content and genuine mentions. Shortcuts such as bulk placements or repetitive anchors create long-term risk.'
              ]
            },
            {
              title: 'Core Principles',
              bullets: [
                'Create original content worth citing: research, expert opinions, case studies, and visual assets',
                'Use digital PR instead of buying links wherever possible',
                'Diversify sources across media, niche blogs, communities, and educational references',
                'Keep anchor text natural with a healthy mix of branded, URL, and neutral anchors',
                'Aim for gradual and consistent growth over time'
              ]
            },
            {
              title: 'Useful Monitoring Tools',
              bullets: [
                'Ahrefs for competitor gap analysis',
                'Majestic for trust and topical link quality',
                'Google Search Console for incoming link visibility'
              ]
            }
          ],
          outro: ['One relevant backlink from a trusted source can be more valuable than hundreds of weak links.']
        }
      },
      {
        title: 'UX Trends 2026',
        date: 'Dec 15, 2025',
        readTime: '9 min',
        category: 'UI/UX',
        excerpt: 'How minimalism is changing digital products',
        content: {
          intro: [
            'UX is moving away from feature overload toward more intentional, calm, and human-centered experiences.'
          ],
          sections: [
            {
              title: 'Minimalism With Emotional Intelligence',
              paragraphs: [
                'Interfaces are becoming simpler without becoming cold. Motion, typography, and hierarchy now do more of the emotional work.'
              ]
            },
            {
              title: 'What Defines the Shift',
              bullets: [
                'Ethical design and the rejection of dark patterns',
                'Personalization that still keeps the user in control',
                'Accessibility as a baseline rather than a nice-to-have',
                'Multimodal interaction through touch, voice, and contextual input',
                'Sustainable design focused on speed, efficiency, and broader device support'
              ]
            },
            {
              title: 'Practical Recommendations',
              bullets: [
                'Test not only usability but also emotional response',
                'Audit friction points in onboarding and repetitive tasks',
                'Design for context first instead of desktop first or mobile first only'
              ]
            }
          ],
          outro: ['The strongest UX in 2026 balances technological capability with humanity.']
        }
      },
      {
        title: 'SEO for Small Business',
        date: 'Dec 04, 2025',
        readTime: '8 min',
        category: 'SEO',
        excerpt: 'Practical SEO guide',
        content: {
          intro: [
            'SEO is no longer about keyword density. It is about understanding intent, building topical authority, and keeping the site technically healthy.'
          ],
          sections: [
            {
              title: '1. Keyword Analysis and Selection',
              bullets: [
                'Use tools such as Google Keyword Planner, Ahrefs, and Semrush',
                'Prioritize long-tail keywords with clearer intent',
                'Review search results to understand what Google already rewards',
                'Separate informational, navigational, and transactional intent'
              ]
            },
            {
              title: '2. Technical Optimization',
              bullets: [
                'Improve loading speed and core web vitals',
                'Make the mobile version the default quality benchmark',
                'Keep URL structure short and understandable',
                'Fix 404s and apply redirects deliberately'
              ]
            },
            {
              title: '3. On-Page Optimization',
              bullets: [
                'Write focused titles and meta descriptions',
                'Use headings in a clear hierarchy',
                'Add descriptive alt text to images',
                'Strengthen internal linking between related pages'
              ]
            },
            {
              title: '4. Content Strategy',
              bullets: [
                'Build content clusters around important themes',
                'Refresh older content with current data and examples',
                'Mix formats such as articles, visuals, and explainers',
                'Answer real customer questions directly'
              ]
            }
          ],
          outro: ['SEO is a marathon. Consistent work over several months produces the most reliable results.']
        }
      }
    ]
  },
  ru: {
    nav: ['Услуги', 'Проекты', 'Процесс', 'Статьи', 'Контакт'],
    hero: [
      `Создание
цифровых решений
с использованием интеллекта`,
      'Сочетание креативности и подхода, основанного на данных, для создания продуктов, обеспечивающих измеримые результаты.',
      'Начало проекта'
    ],
    ui: {
      services: 'Услуги',
      projects: 'Проекты',
      process: 'Этапы работы',
      articles: 'Экспертные статьи',
      ready: 'Готовы начать?',
      contactLead: 'Свяжитесь для обсуждения проекта',
      readArticle: 'Читать статью',
      close: 'Закрыть',
      back: 'Назад',
      projectWord: 'Проект',
      footerCopy: '© 2026 It healthy coder. Все права защищены.',
      footerLocation: 'Базируюсь в Амстердаме - Работаю удалённо по всему миру'
    },
    footer: {
      privacy: 'Политика конфиденциальности',
      cookies: 'Политика использования cookies',
      terms: 'Условия использования'
    },
    legal: {
      privacy: {
        title: 'Политика конфиденциальности',
        content: {
          intro: [
            'Обновлено: 9 апреля 2026',
            'Эта Политика конфиденциальности описывает, как собираются, используются и защищаются персональные данные в соответствии с GDPR и голландским законом AVG.'
          ],
          sections: [
            {
              title: 'Контроллер данных',
              paragraphs: ['Базируется в Амстердаме, Нидерланды', 'Контакт: itmadge@gmail.com']
            },
            {
              title: 'Какие данные собираются',
              bullets: [
                'Контактная информация: имя, email, номер телефона',
                'Данные об использовании сайта и аналитика',
                'История коммуникации по проектам и консультациям',
                'Информация, добровольно отправленная через формы или email'
              ]
            },
            {
              title: 'Правовые основания обработки',
              bullets: [
                'Согласие по статье 6(1)(a) GDPR',
                'Исполнение договора по статье 6(1)(b) GDPR',
                'Законный интерес по статье 6(1)(f) GDPR для деловой коммуникации и улучшения сайта'
              ]
            },
            {
              title: 'Как используется информация',
              bullets: [
                'Для предоставления и улучшения фриланс-услуг',
                'Для общения по проектам, предложениям и консультациям',
                'Для анализа производительности сайта с анонимизацией данных, где это возможно',
                'Для соблюдения юридических и налоговых обязательств'
              ]
            },
            {
              title: 'Сроки хранения',
              bullets: [
                'Данные клиентов: срок договора плюс 7 лет по требованиям налогового законодательства Нидерландов',
                'Обращения: до 2 лет',
                'Аналитические данные: до 14 месяцев в анонимизированном виде'
              ]
            },
            {
              title: 'Защита данных',
              paragraphs: [
                'Используются технические и организационные меры безопасности: разграничение доступа, защищённое хранение и регулярные проверки. Персональные данные не продаются третьим лицам.'
              ]
            },
            {
              title: 'Ваши права по GDPR',
              bullets: [
                'Право на доступ',
                'Право на исправление',
                'Право на удаление',
                'Право на ограничение обработки',
                'Право на переносимость данных',
                'Право на возражение',
                'Право отозвать согласие в любое время'
              ]
            },
            {
              title: 'Передача данных и жалобы',
              paragraphs: [
                'Работа ведётся в пределах ЕС/ЕЭЗ. При передаче данных за пределы региона применяются соответствующие гарантии GDPR.',
                'Вы можете подать жалобу в голландский орган по защите данных Autoriteit Persoonsgegevens через autoriteitpersoonsgegevens.nl.'
              ]
            }
          ],
          outro: ['По вопросам конфиденциальности или для реализации ваших прав напишите на itmadge@gmail.com. Ответ предоставляется в течение 30 дней, если это требуется законом.']
        }
      },
      cookies: {
        title: 'Политика использования cookies',
        content: {
          intro: [
            'Обновлено: 9 апреля 2026',
            'Эта политика объясняет, как используются cookies в соответствии с Telecommunicatiewet и GDPR.'
          ],
          sections: [
            {
              title: 'Что такое cookies',
              paragraphs: [
                'Cookies — это небольшие текстовые файлы, которые сохраняются на устройстве при посещении сайта. Они помогают сайту работать корректно и улучшают пользовательский опыт.'
              ]
            },
            {
              title: 'Обязательные cookies',
              bullets: [
                'Нужны для базовой работы сайта',
                'Используются для управления сессией и базовой безопасности',
                'Обрабатываются на основании законного интереса'
              ]
            },
            {
              title: 'Аналитические cookies',
              bullets: [
                'Используются только с согласия',
                'По возможности ограничиваются аналитикой первой стороны',
                'IP-адреса анонимизируются',
                'Межсайтовое отслеживание и рекламное профилирование не используются'
              ]
            },
            {
              title: 'Cookies предпочтений',
              bullets: [
                'Запоминают выбор языка',
                'Сохраняют настройки cookies, если это применимо'
              ]
            },
            {
              title: 'Что не используется',
              bullets: [
                'Рекламные cookies',
                'Сторонние маркетинговые cookies',
                'Пиксели отслеживания соцсетей',
                'Cookie walls'
              ]
            },
            {
              title: 'Управление cookies',
              bullets: [
                'Через cookie-баннер, если он используется',
                'Через настройки браузера',
                'Через отзыв согласия в любой момент'
              ]
            },
            {
              title: 'Сроки хранения и сторонние сервисы',
              bullets: [
                'Обязательные cookies: только на время сессии',
                'Аналитические cookies: до 14 месяцев',
                'Cookies предпочтений: до 12 месяцев',
                'Любые сторонние инструменты должны соответствовать требованиям прозрачности GDPR'
              ]
            }
          ],
          outro: ['Если у вас есть вопросы по cookies, напишите на itmadge@gmail.com.']
        }
      },
      terms: {
        title: 'Условия использования',
        content: {
          intro: [
            'Обновлено: 9 апреля 2026',
            'Эти Условия использования применяются к сайту и фриланс-услугам, которые через него предлагаются.'
          ],
          sections: [
            {
              title: 'Принятие условий',
              paragraphs: [
                'Используя сайт или заказывая услуги, вы соглашаетесь с этими условиями. Если вы не согласны, пожалуйста, не используйте услуги.'
              ]
            },
            {
              title: 'Услуги',
              bullets: [
                'UI/UX дизайн и прототипирование',
                'AI-решения и автоматизация',
                'Тестирование и аналитика',
                'Стратегический маркетинг и SEO',
                'Управление проектами',
                'B2B enterprise-решения'
              ]
            },
            {
              title: 'Проектные соглашения',
              paragraphs: [
                'Конкретные результаты, сроки, стоимость и объём правок определяются отдельными договорами и регулируются законодательством Нидерландов.'
              ]
            },
            {
              title: 'Фриланс-отношения',
              paragraphs: [
                'Это отношения с независимым подрядчиком. Услуги оказываются как freelancer / ZZP в Нидерландах и не создают трудовых отношений.'
              ]
            },
            {
              title: 'Интеллектуальная собственность',
              bullets: [
                'Результаты работ остаются интеллектуальной собственностью исполнителя до полной оплаты',
                'После полной оплаты права переходят клиенту в соответствии с подписанным договором',
                'Предварительно существующие инструменты, методы и материалы остаются собственностью исполнителя',
                'Использование проекта в портфолио возможно с согласия клиента'
              ]
            },
            {
              title: 'Оплата и обязанности клиента',
              bullets: [
                'Счета оплачиваются в течение 30 дней, если не согласовано иное',
                'Просрочка платежа может повлечь начисление процентов в рамках закона Нидерландов',
                'Клиент обязан вовремя предоставлять материалы, согласования и обратную связь',
                'Клиент отвечает за законность предоставленного контента и отсутствие нарушения прав третьих лиц'
              ]
            },
            {
              title: 'Ответственность и прекращение',
              bullets: [
                'Не предоставляется ответственность за косвенные, случайные и последующие убытки',
                'Размер ответственности ограничен суммой оплаты по соответствующему проекту',
                'Любая сторона может прекратить сотрудничество в соответствии с договором',
                'Работа, выполненная до прекращения, подлежит оплате'
              ]
            },
            {
              title: 'Применимое право',
              paragraphs: ['Эти условия регулируются законодательством Нидерландов. Споры рассматриваются в голландской юрисдикции.']
            }
          ],
          outro: ['Вопросы по этим условиям можно направить на itmadge@gmail.com.']
        }
      }
    },
    services: [
      ['UI/UX дизайн', 'Дизайн интерфейса с упором на пользовательский опыт и конверсию', ['Анализ целевой аудитории и поведенческих паттернов', 'Прототипирование и создание макетов', 'Дизайн-системы для масштабируемости продукта', 'A/B тестирование и улучшения на основе данных']],
      ['Решения на основе ИИ и автоматизация', 'Внедрение ИИ для оптимизации бизнес-процессов', ['Чат-боты для снижения нагрузки на бизнес', 'Автоматизация маркетинговых процессов с помощью ИИ', 'Кастомные решения под конкретные бизнес-задачи']],
      ['Тестирование и аналитика', 'Комплексный анализ продукта для повышения качества', ['Функциональное и регрессионное тестирование', 'UX-аудит с конкретными рекомендациями', 'Настройка и анализ метрик', 'A/B тестирование для роста конверсии']],
      ['Стратегический маркетинг', 'Подход к продвижению, основанный на данных, с акцентом на ROI', ['Маркетинговая стратегия на основе данных', 'SEO-оптимизация и контент-стратегия', 'Аналитика кампаний и снижение CPA', 'Создание контента, который конвертирует']],
      ['Управление проектами', 'Гибкий подход от концепции до масштабирования', ['Методологии Scrum и Kanban', 'Стратегическое планирование и roadmap']],
      ['Корпоративные решения (B2B)', 'Цифровая трансформация и масштабируемые решения', ['Стратегия цифровой трансформации и roadmap', 'Корпоративные платформы и системные интеграции', 'Автоматизация бизнес-процессов', 'Внедрение ИИ для оптимизации операций']]
    ],
    projects: [
      {
        slug: 'netherlands-harmony-guide',
        title: 'Гид по Нидерландам',
        category: 'UI/UX и контент',
        description: 'Визуальный сайт-гид о Нидерландах со спокойной редакционной структурой, понятной навигацией и атмосферной подачей локаций.',
        summary: 'Концепт travel-guide с выразительной подачей контента',
        images: projectImages.dutch
      },
      {
        slug: 'walk-the-dog',
        title: 'Walk the Dog',
        category: 'Pet Care и локальный сервис',
        description: 'Компактный сайт услуги по выгулу собак с понятными блоками предложения, сообщениями про доверие и дружелюбным локальным характером.',
        summary: 'Лендинг сервиса с фокусом на ясность и заявки',
        images: projectImages.dog,
        url: 'https://wukkishim.wixsite.com/walkthedog'
      },
      {
        slug: 'smart-massage',
        title: 'Smart Massage',
        category: 'Wellness и запись',
        description: 'Сайт массажной студии с мягким визуальным ритмом, акцентом на услугах и более понятным переходом от знакомства к записи.',
        summary: 'Wellness-сайт для спокойного просмотра и конверсии',
        images: projectImages.massage,
        url: 'https://wukkishim.wixstudio.com/smartmassage'
      },
      {
        slug: 'focus-meetings-platform',
        title: 'Focus Meetings Platform',
        category: 'UI/UX и продукт',
        description: 'MVP-дизайн платформы для организации встреч с системой активностей для пользователей, которым важны более сфокусированные и поддерживающие сценарии планирования.',
        summary: 'Продуктовый концепт со структурированным опытом планирования встреч',
        images: projectImages.adhd,
        url: 'https://adhd-harmony-guide.lovable.app'
      },
      {
        slug: 'daily-practices',
        title: 'Daily Practices',
        category: 'Mental Health и привычки',
        description: 'Концепт ментал-хелс продукта, построенный вокруг мягких ежедневных практик, структурированной рефлексии и поддерживающих сценариев саморегуляции.',
        summary: 'Wellbeing-опыт вокруг спокойных рутин и эмоционального баланса',
        images: projectImages.dailyPractices,
        url: 'https://body-mind-harmony-guide.lovable.app'
      },
      {
        slug: 'achievemater',
        title: 'Achievemater',
        category: 'Комьюнити и продуктивность',
        description: 'Совместное групповое пространство, где люди могут работать рядом над разными целями с опорой на структуру, accountability и общий ритм.',
        summary: 'Концепт групповой продуктивности для фокуса, поддержки и прогресса',
        images: projectImages.achievemater,
        url: 'https://wukkishim.wixstudio.com/achievemater'
      },
      {
        slug: 'stretching-workout',
        title: 'Stretching & Workout',
        category: 'Фитнес и коучинг',
        description: 'Сайт для тренировок по стретчингу и воркауту с понятной структурой услуг, дружелюбной подачей и более ясным путём к записи.',
        summary: 'Сайт тренера с фокусом на практику движения и заявки',
        images: projectImages.stretching,
        url: 'https://wukkishim.wixstudio.com/ithealthyback'
      },
      {
        slug: 'qa-testing-blog',
        title: 'QA Testing Blog',
        category: 'Контент и знания',
        description: 'QA-блог с полезными и интересными материалами по тестированию, практическими заметками и подборками ресурсов для работы и обучения.',
        summary: 'Редакционный хаб со знаниями и материалами по тестированию',
        images: projectImages.qa
      }
    ],
    process: [
      ['01', 'Погружение', 'Анализ бизнеса, аудитории, конкурентов'],
      ['02', 'Прототипирование', 'Создание MVP для тестирования'],
      ['03', 'Разработка', 'Итеративная реализация'],
      ['04', 'Оптимизация', 'Анализ метрик и масштабирование']
    ],
    articles: [
      {
        title: 'Создание естественного ссылочного профиля в 2026 году',
        date: '29 декабря 2025',
        readTime: '5 мин',
        category: 'SEO',
        excerpt: 'Современные подходы к линкбилдингу',
        content: {
          intro: [
            'Поисковые системы в 2026 году гораздо лучше распознают искусственные паттерны ссылок. Устойчивое SEO строится на доверии, релевантности и последовательности, а не на количестве.'
          ],
          sections: [
            {
              title: 'Почему линкбилдинг изменился',
              paragraphs: [
                'Естественный ссылочный профиль растёт вокруг полезного контента и реальных упоминаний. Массовые размещения и однотипные анкоры создают долгосрочные риски.'
              ]
            },
            {
              title: 'Ключевые принципы',
              bullets: [
                'Создавайте оригинальный контент, на который действительно хочется ссылаться: исследования, экспертные материалы, кейсы и визуальные активы',
                'По возможности выбирайте digital PR вместо покупки ссылок',
                'Диверсифицируйте источники: медиа, нишевые блоги, сообщества и образовательные площадки',
                'Делайте анкор-лист естественным: брендовые, URL и нейтральные формулировки',
                'Ставьте на плавный и последовательный рост'
              ]
            },
            {
              title: 'Инструменты мониторинга',
              bullets: [
                'Ahrefs для анализа конкурентов и разрывов',
                'Majestic для оценки качества и тематики ссылок',
                'Google Search Console для контроля входящих ссылок'
              ]
            }
          ],
          outro: ['Одна релевантная ссылка с сильного источника часто ценнее сотен слабых ссылок.']
        }
      },
      {
        title: 'UX-тренды 2026',
        date: '15 декабря 2025',
        readTime: '9 мин',
        category: 'UI/UX',
        excerpt: 'Как минимализм меняет цифровые продукты',
        content: {
          intro: [
            'UX уходит от перегруженности функциями к более спокойным, осмысленным и человечным продуктовым сценариям.'
          ],
          sections: [
            {
              title: 'Минимализм с эмоциональным интеллектом',
              paragraphs: [
                'Интерфейсы становятся проще, но не холоднее. Движение, типографика и иерархия всё чаще берут на себя эмоциональную роль.'
              ]
            },
            {
              title: 'Что определяет этот сдвиг',
              bullets: [
                'Этичный дизайн и отказ от dark patterns',
                'Персонализация без потери контроля со стороны пользователя',
                'Доступность как обязательная база, а не приятное дополнение',
                'Мультимодальное взаимодействие: касание, голос и контекстный ввод',
                'Устойчивый дизайн с акцентом на скорость, эффективность и поддержку более широкого круга устройств'
              ]
            },
            {
              title: 'Практические рекомендации',
              bullets: [
                'Тестируйте не только удобство, но и эмоциональный отклик',
                'Проводите аудит точек трения в онбординге и повторяющихся действиях',
                'Проектируйте от контекста использования, а не только от desktop-first или mobile-first'
              ]
            }
          ],
          outro: ['Сильный UX в 2026 году строится на балансе между технологическими возможностями и человечностью.']
        }
      },
      {
        title: 'SEO для малого бизнеса',
        date: '04 декабря 2025',
        readTime: '8 мин',
        category: 'SEO',
        excerpt: 'Практическое руководство по SEO',
        content: {
          intro: [
            'SEO больше не зависит от плотности ключевых слов. Сейчас важнее понимать поисковое намерение, развивать тематическую экспертизу и поддерживать сайт технически здоровым.'
          ],
          sections: [
            {
              title: '1. Анализ и выбор ключевых слов',
              bullets: [
                'Используйте Google Keyword Planner, Ahrefs и Semrush',
                'Приоритизируйте long-tail запросы с более понятным намерением',
                'Изучайте выдачу, чтобы понимать, какой формат уже поощряет Google',
                'Разделяйте информационные, навигационные и транзакционные запросы'
              ]
            },
            {
              title: '2. Техническая оптимизация',
              bullets: [
                'Улучшайте скорость загрузки и core web vitals',
                'Сделайте мобильную версию главным стандартом качества',
                'Поддерживайте короткую и понятную структуру URL',
                'Исправляйте ошибки 404 и осознанно настраивайте редиректы'
              ]
            },
            {
              title: '3. On-page оптимизация',
              bullets: [
                'Пишите точные title и meta description',
                'Используйте заголовки в понятной иерархии',
                'Добавляйте содержательные alt-тексты к изображениям',
                'Укрепляйте внутреннюю перелинковку между связанными страницами'
              ]
            },
            {
              title: '4. Контент-стратегия',
              bullets: [
                'Стройте контент-кластеры вокруг ключевых тем',
                'Обновляйте старые материалы актуальными данными и примерами',
                'Смешивайте форматы: статьи, визуалы и объясняющие материалы',
                'Напрямую отвечайте на реальные вопросы аудитории'
              ]
            }
          ],
          outro: ['SEO — это марафон. Самые надёжные результаты даёт последовательная работа на протяжении нескольких месяцев.']
        }
      }
    ]
  },
  nl: {
    nav: ['Diensten', 'Projecten', 'Proces', 'Artikelen', 'Contact'],
    hero: [
      `Digitale
oplossingen maken
met intelligentie`,
      'Een combinatie van creativiteit en een data-gedreven aanpak om producten te bouwen die meetbare resultaten opleveren.',
      'Project starten'
    ],
    ui: {
      services: 'Diensten',
      projects: 'Projecten',
      process: 'Werkproces',
      articles: 'Expertartikelen',
      ready: 'Klaar om te starten?',
      contactLead: 'Neem contact op om je project te bespreken',
      readArticle: 'Artikel lezen',
      close: 'Sluiten',
      back: 'Terug',
      projectWord: 'Project',
      footerCopy: '© 2026 It healthy coder. Alle rechten voorbehouden.',
      footerLocation: 'Gevestigd in Amsterdam - Werkt wereldwijd op afstand'
    },
    footer: {
      privacy: 'Privacybeleid',
      cookies: 'Cookiebeleid',
      terms: 'Gebruiksvoorwaarden'
    },
    legal: {
      privacy: {
        title: 'Privacybeleid',
        content: {
          intro: [
            'Laatst bijgewerkt: 9 april 2026',
            'Dit Privacybeleid legt uit hoe persoonsgegevens worden verzameld, gebruikt en beschermd in overeenstemming met de AVG en de Nederlandse Uitvoeringswet AVG.'
          ],
          sections: [
            {
              title: 'Verwerkingsverantwoordelijke',
              paragraphs: ['Gevestigd in Amsterdam, Nederland', 'Contact: itmadge@gmail.com']
            },
            {
              title: 'Welke gegevens worden verzameld',
              bullets: [
                'Contactgegevens zoals naam, e-mailadres en telefoonnummer',
                'Gebruiksgegevens en website-analyses',
                'Communicatiegeschiedenis over projecten en consultaties',
                'Informatie die vrijwillig via formulieren of e-mail wordt verstrekt'
              ]
            },
            {
              title: 'Rechtsgrond voor verwerking',
              bullets: [
                'Toestemming op grond van artikel 6(1)(a) AVG',
                'Uitvoering van een overeenkomst op grond van artikel 6(1)(b) AVG',
                'Gerechtvaardigd belang op grond van artikel 6(1)(f) AVG voor zakelijke communicatie en websiteverbetering'
              ]
            },
            {
              title: 'Hoe informatie wordt gebruikt',
              bullets: [
                'Om freelance diensten te leveren en te verbeteren',
                'Om te communiceren over projecten, voorstellen en consultaties',
                'Om websiteprestaties te analyseren met waar mogelijk geanonimiseerde gegevens',
                'Om te voldoen aan wettelijke en fiscale verplichtingen'
              ]
            },
            {
              title: 'Bewaartermijnen',
              bullets: [
                'Klantgegevens: looptijd van de overeenkomst plus 7 jaar volgens Nederlandse fiscale regels',
                'Contactaanvragen: tot 2 jaar',
                'Analytische gegevens: tot 14 maanden in geanonimiseerde vorm'
              ]
            },
            {
              title: 'Bescherming van gegevens',
              paragraphs: [
                'Er worden passende technische en organisatorische maatregelen genomen, waaronder toegangsbeheer, beveiligde opslag en periodieke beveiligingscontroles. Persoonsgegevens worden nooit verkocht aan derden.'
              ]
            },
            {
              title: 'Jouw rechten onder de AVG',
              bullets: [
                'Recht op inzage',
                'Recht op rectificatie',
                'Recht op gegevenswissing',
                'Recht op beperking van verwerking',
                'Recht op gegevensoverdraagbaarheid',
                'Recht van bezwaar',
                'Recht om toestemming op elk moment in te trekken'
              ]
            },
            {
              title: 'Doorgifte en klachten',
              paragraphs: [
                'De werkzaamheden vinden plaats binnen de EU/EER. Als gegevens buiten de EU/EER worden verwerkt, worden passende AVG-waarborgen toegepast.',
                'Je kunt een klacht indienen bij de Autoriteit Persoonsgegevens via autoriteitpersoonsgegevens.nl.'
              ]
            }
          ],
          outro: ['Voor privacyvragen of het uitoefenen van je rechten kun je mailen naar itmadge@gmail.com. Verzoeken worden waar nodig binnen 30 dagen beantwoord.']
        }
      },
      cookies: {
        title: 'Cookiebeleid',
        content: {
          intro: [
            'Laatst bijgewerkt: 9 april 2026',
            'Dit Cookiebeleid legt uit hoe cookies worden gebruikt in overeenstemming met de Telecommunicatiewet en de AVG.'
          ],
          sections: [
            {
              title: 'Wat cookies zijn',
              paragraphs: [
                'Cookies zijn kleine tekstbestanden die op je apparaat worden opgeslagen wanneer je een website bezoekt. Ze helpen de site goed te functioneren en verbeteren de gebruikservaring.'
              ]
            },
            {
              title: 'Essentiële cookies',
              bullets: [
                'Nodig voor basisfunctionaliteit van de website',
                'Gebruikt voor sessiebeheer en basisbeveiliging',
                'Verwerkt op basis van gerechtvaardigd belang'
              ]
            },
            {
              title: 'Analytische cookies',
              bullets: [
                'Alleen gebruikt met toestemming',
                'Waar mogelijk beperkt tot first-party analytics',
                'IP-adressen worden geanonimiseerd',
                'Er wordt geen cross-site tracking of advertentieprofilering toegepast'
              ]
            },
            {
              title: 'Voorkeurscookies',
              bullets: [
                'Onthouden de taalkeuze',
                'Slaan cookievoorkeuren op wanneer dat van toepassing is'
              ]
            },
            {
              title: 'Cookies die niet worden gebruikt',
              bullets: [
                'Advertentiecookies',
                'Marketingcookies van derden',
                'Social media tracking pixels',
                'Cookiewalls'
              ]
            },
            {
              title: 'Cookies beheren',
              bullets: [
                'Via de cookiebanner wanneer die aanwezig is',
                'Via de browserinstellingen',
                'Door toestemming op elk moment in te trekken'
              ]
            },
            {
              title: 'Bewaartermijnen en derden',
              bullets: [
                'Essentiële cookies: alleen sessieduur',
                'Analytische cookies: tot 14 maanden',
                'Voorkeurscookies: tot 12 maanden',
                'Eventuele tools van derden moeten voldoen aan de transparantie-eisen van de AVG'
              ]
            }
          ],
          outro: ['Vragen over cookies kun je sturen naar itmadge@gmail.com.']
        }
      },
      terms: {
        title: 'Gebruiksvoorwaarden',
        content: {
          intro: [
            'Laatst bijgewerkt: 9 april 2026',
            'Deze Gebruiksvoorwaarden zijn van toepassing op de website en de freelance diensten die via de website worden aangeboden.'
          ],
          sections: [
            {
              title: 'Aanvaarding van de voorwaarden',
              paragraphs: [
                'Door de website te gebruiken of diensten af te nemen, ga je akkoord met deze voorwaarden. Als je niet akkoord gaat, gebruik de diensten dan niet.'
              ]
            },
            {
              title: 'Diensten',
              bullets: [
                'UI/UX design en prototyping',
                'AI-oplossingen en automatisering',
                'Testing en analytics',
                'Strategische marketing en SEO',
                'Projectmanagement',
                'B2B enterprise-oplossingen'
              ]
            },
            {
              title: 'Projectafspraken',
              paragraphs: [
                'Concrete deliverables, planning, tarieven en revisierondes worden vastgelegd in afzonderlijke projectovereenkomsten onder Nederlands recht.'
              ]
            },
            {
              title: 'Freelance relatie',
              paragraphs: [
                'Dit is een zelfstandige opdrachtnemersrelatie. Diensten worden geleverd als freelancer / ZZP in Nederland en vormen geen arbeidsovereenkomst.'
              ]
            },
            {
              title: 'Intellectueel eigendom',
              bullets: [
                'Opgeleverde werken blijven intellectueel eigendom van de maker totdat volledige betaling is ontvangen',
                'Na volledige betaling gaan rechten over zoals bepaald in de projectovereenkomst',
                'Bestaande tools, methoden en materialen blijven eigendom van de maker',
                'Gebruik van projectwerk in het portfolio gebeurt alleen met toestemming van de klant'
              ]
            },
            {
              title: 'Betaling en verantwoordelijkheden van de klant',
              bullets: [
                'Facturen zijn betaalbaar binnen 30 dagen tenzij anders overeengekomen',
                'Te late betaling kan rente opleveren voor zover Nederlands recht dat toestaat',
                'De klant levert materialen, goedkeuringen en feedback tijdig aan',
                'De klant is verantwoordelijk voor de rechtmatigheid van aangeleverde content en het niet schenden van rechten van derden'
              ]
            },
            {
              title: 'Aansprakelijkheid en beëindiging',
              bullets: [
                'Geen aansprakelijkheid voor indirecte, incidentele of gevolgschade',
                'Aansprakelijkheid is beperkt tot het bedrag dat voor het relevante project is betaald',
                'Beide partijen kunnen beëindigen volgens de projectovereenkomst',
                'Werk dat is uitgevoerd tot het moment van beëindiging blijft verschuldigd'
              ]
            },
            {
              title: 'Toepasselijk recht',
              paragraphs: ['Op deze voorwaarden is Nederlands recht van toepassing. Geschillen vallen onder Nederlandse jurisdictie.']
            }
          ],
          outro: ['Vragen over deze voorwaarden kun je sturen naar itmadge@gmail.com.']
        }
      }
    },
    services: [
      ['UI/UX design', 'Interfaceontwerp met focus op gebruikservaring en conversie', ['Analyse van doelgroep en gedragspatronen', 'Prototyping en wireframes', 'Design systems voor schaalbaarheid', 'A/B-tests en verbeteringen op basis van data']],
      ['AI-oplossingen en automatisering', 'Implementatie van AI voor optimalisatie van bedrijfsprocessen', ['Chatbots om werkdruk te verlagen', 'Automatisering van marketingprocessen met AI', 'Maatwerkoplossingen voor specifieke businesscases']],
      ['Testing en analytics', 'Grondige productanalyse om kwaliteit te verbeteren', ['Functioneel en regressietesten', 'UX-audit met concrete aanbevelingen', 'Instellen en analyseren van metrics', 'A/B-tests voor conversiegroei']],
      ['Strategische marketing', 'Data-gedreven groeiaanpak met focus op ROI', ['Marketingstrategie op basis van data', 'SEO-optimalisatie en contentstrategie', 'Campagne-analyse en verlaging van CPA', 'Content maken die converteert']],
      ['Projectmanagement', 'Flexibele aanpak van concept tot schaalvergroting', ['Scrum- en Kanban-methodologieën', 'Strategische planning en roadmap']],
      ['Enterprise-oplossingen (B2B)', 'Digitale transformatie en schaalbare oplossingen', ['Strategie voor digitale transformatie en roadmap', 'Enterprise-platformen en systeemintegraties', 'Automatisering van bedrijfsprocessen', 'AI-implementatie voor operationele optimalisatie']]
    ],
    projects: [
      {
        slug: 'netherlands-harmony-guide',
        title: 'Nederland Gids',
        category: 'UI/UX & Content',
        description: 'Een visuele gidswebsite over Nederland met een rustige editorial structuur, heldere navigatie en sfeervolle presentatie van locaties.',
        summary: 'Travel-guide concept met atmosferische contentpresentatie',
        images: projectImages.dutch
      },
      {
        slug: 'walk-the-dog',
        title: 'Walk the Dog',
        category: 'Pet Care & Lokale service',
        description: 'Een compacte website voor hondenuitlaatservice met heldere aanbodblokken, vertrouwenwekkende copy en een vriendelijke lokale uitstraling.',
        summary: 'Service landing page met focus op duidelijkheid en boekingen',
        images: projectImages.dog,
        url: 'https://wukkishim.wixsite.com/walkthedog'
      },
      {
        slug: 'smart-massage',
        title: 'Smart Massage',
        category: 'Wellness & Boekingen',
        description: 'Een website voor een massagestudio met een zachte visuele cadans, sterke serviceblokken en een duidelijker pad naar een afspraak.',
        summary: 'Wellness-website ontworpen voor rust en conversie',
        images: projectImages.massage,
        url: 'https://wukkishim.wixstudio.com/smartmassage'
      },
      {
        slug: 'focus-meetings-platform',
        title: 'Focus Meetings Platform',
        category: 'UI/UX & Product',
        description: 'MVP-ontwerp voor het organiseren van afspraken met een activiteitensysteem voor gebruikers die baat hebben bij meer focus en ondersteunende planningsflows.',
        summary: 'Productconcept met gestructureerde meeting planning',
        images: projectImages.adhd,
        url: 'https://adhd-harmony-guide.lovable.app'
      },
      {
        slug: 'daily-practices',
        title: 'Daily Practices',
        category: 'Mental Health & Gewoontevorming',
        description: 'Een mental-health productconcept rond zachte dagelijkse rituelen, gestructureerde reflectie en ondersteunende flows voor zelfregulatie.',
        summary: 'Wellbeing-ervaring gebouwd rond rustige routines en emotionele balans',
        images: projectImages.dailyPractices,
        url: 'https://body-mind-harmony-guide.lovable.app'
      },
      {
        slug: 'achievemater',
        title: 'Achievemater',
        category: 'Community & Productiviteit',
        description: 'Een gezamenlijke groepsruimte waar mensen naast elkaar aan verschillende doelen kunnen werken met structuur, accountability en gedeelde energie.',
        summary: 'Groepsproductiviteitsconcept voor focus, steun en voortgang',
        images: projectImages.achievemater,
        url: 'https://wukkishim.wixstudio.com/achievemater'
      },
      {
        slug: 'stretching-workout',
        title: 'Stretching & Workout',
        category: 'Fitness & Coaching',
        description: 'Een trainingswebsite voor stretching- en workoutcoaching met een heldere dienstenstructuur, toegankelijke begeleiding en een sterker pad naar aanmelding.',
        summary: 'Coachwebsite gericht op bewegingstraining en conversie',
        images: projectImages.stretching,
        url: 'https://wukkishim.wixstudio.com/ithealthyback'
      },
      {
        slug: 'qa-testing-blog',
        title: 'QA Testing Blog',
        category: 'Content & Kennis',
        description: 'Een QA-blog met nuttige testmaterialen, praktische notities en bronnen die echt bruikbaar zijn voor leren en dagelijks werk.',
        summary: 'Redactionele kennisplek voor testinginzichten en resources',
        images: projectImages.qa
      }
    ],
    process: [
      ['01', 'Verdieping', 'Analyse van business, doelgroep en concurrenten'],
      ['02', 'Prototyping', 'Een MVP maken om te testen'],
      ['03', 'Ontwikkeling', 'Iteratieve implementatie'],
      ['04', 'Optimalisatie', 'Analyse van metrics en opschaling']
    ],
    articles: [
      {
        title: 'Een natuurlijk linkprofiel opbouwen in 2026',
        date: '29 dec 2025',
        readTime: '5 min',
        category: 'SEO',
        excerpt: 'Moderne benaderingen van linkbuilding',
        content: {
          intro: [
            'Zoekmachines herkennen in 2026 kunstmatige linkpatronen veel beter. Duurzame SEO draait nu om vertrouwen, relevantie en consistentie in plaats van alleen volume.'
          ],
          sections: [
            {
              title: 'Waarom linkbuilding is veranderd',
              paragraphs: [
                'Een natuurlijk linkprofiel groeit rondom waardevolle content en echte vermeldingen. Massa-plaatsingen en herhaalde anchor-teksten brengen op termijn risico’s met zich mee.'
              ]
            },
            {
              title: 'Belangrijkste principes',
              bullets: [
                'Maak originele content waar mensen echt naar willen verwijzen: onderzoek, expertinzichten, cases en visuele assets',
                'Kies waar mogelijk voor digital PR in plaats van links inkopen',
                'Spreid bronnen over media, nicheblogs, communities en educatieve platforms',
                'Houd anchor-teksten natuurlijk met branded, URL- en neutrale varianten',
                'Zorg voor geleidelijke en consistente groei'
              ]
            },
            {
              title: 'Handige monitoringtools',
              bullets: [
                'Ahrefs voor concurrentieanalyse en gaps',
                'Majestic voor kwaliteit en topical trust',
                'Google Search Console voor zicht op inkomende links'
              ]
            }
          ],
          outro: ['Eén relevante backlink van een sterke bron kan meer waard zijn dan honderden zwakke links.']
        }
      },
      {
        title: 'UX-trends 2026',
        date: '15 dec 2025',
        readTime: '9 min',
        category: 'UI/UX',
        excerpt: 'Hoe minimalisme digitale producten verandert',
        content: {
          intro: [
            'UX beweegt weg van feature overload en gaat richting bewustere, rustigere en menselijkere digitale ervaringen.'
          ],
          sections: [
            {
              title: 'Minimalisme met emotionele intelligentie',
              paragraphs: [
                'Interfaces worden eenvoudiger zonder kil te worden. Beweging, typografie en hiërarchie dragen steeds vaker de emotionele laag van het product.'
              ]
            },
            {
              title: 'Wat deze verschuiving kenmerkt',
              bullets: [
                'Ethisch ontwerp en het vermijden van dark patterns',
                'Personalisatie waarbij de gebruiker de controle houdt',
                'Toegankelijkheid als basis in plaats van extraatje',
                'Multimodale interactie via touch, stem en contextuele input',
                'Duurzaam ontwerp met focus op snelheid, efficiëntie en brede device-ondersteuning'
              ]
            },
            {
              title: 'Praktische aanbevelingen',
              bullets: [
                'Test niet alleen usability maar ook emotionele respons',
                'Analyseer frictiepunten in onboarding en terugkerende taken',
                'Ontwerp vanuit context first in plaats van alleen desktop first of mobile first'
              ]
            }
          ],
          outro: ['Sterke UX in 2026 ontstaat uit de balans tussen technologische mogelijkheden en menselijkheid.']
        }
      },
      {
        title: 'SEO voor kleine bedrijven',
        date: '04 dec 2025',
        readTime: '8 min',
        category: 'SEO',
        excerpt: 'Praktische SEO-handleiding',
        content: {
          intro: [
            'SEO draait niet langer om keyword density. Het gaat om zoekintentie begrijpen, thematische autoriteit opbouwen en de site technisch gezond houden.'
          ],
          sections: [
            {
              title: '1. Zoekwoordanalyse en selectie',
              bullets: [
                'Gebruik tools zoals Google Keyword Planner, Ahrefs en Semrush',
                'Geef prioriteit aan long-tail zoekwoorden met duidelijkere intentie',
                'Bestudeer de zoekresultaten om te begrijpen welk format Google beloont',
                'Scheid informatieve, navigerende en transactionele intentie'
              ]
            },
            {
              title: '2. Technische optimalisatie',
              bullets: [
                'Verbeter laadsnelheid en core web vitals',
                'Maak de mobiele versie de standaard voor kwaliteit',
                'Houd URL-structuren kort en begrijpelijk',
                'Los 404-fouten op en gebruik redirects bewust'
              ]
            },
            {
              title: '3. On-page optimalisatie',
              bullets: [
                'Schrijf scherpe titles en meta descriptions',
                'Gebruik headings in een duidelijke hiërarchie',
                'Voeg beschrijvende alt-teksten toe aan afbeeldingen',
                'Versterk interne links tussen gerelateerde pagina’s'
              ]
            },
            {
              title: '4. Contentstrategie',
              bullets: [
                'Bouw contentclusters rond belangrijke thema’s',
                'Werk oudere content bij met actuele data en voorbeelden',
                'Combineer formats zoals artikelen, visuals en explainers',
                'Beantwoord echte vragen van klanten direct'
              ]
            }
          ],
          outro: ['SEO is een marathon. De meest betrouwbare resultaten komen uit consequent werk over meerdere maanden.']
        }
      }
    ]
  }
};

export default function Portfolio() {
  const [expandedService, setExpandedService] = useState<number | null>(() => {
    if (typeof window === 'undefined') return null;

    const slug = new URLSearchParams(window.location.search).get('service');
    const index = slug ? SERVICE_SLUGS.indexOf(slug as (typeof SERVICE_SLUGS)[number]) : -1;
    return index >= 0 ? index : null;
  });
  const [activeArticle, setActiveArticle] = useState<number | null>(() => {
    if (typeof window === 'undefined') return null;

    const slug = new URLSearchParams(window.location.search).get('article');
    const index = slug ? ARTICLE_SLUGS.indexOf(slug as (typeof ARTICLE_SLUGS)[number]) : -1;
    return index >= 0 ? index : null;
  });
  const [showLegalModal, setShowLegalModal] = useState<'privacy' | 'cookies' | 'terms' | null>(null);
  const [language, setLanguage] = useState<'en' | 'ru' | 'nl'>('en');
  const [projectSlides, setProjectSlides] = useState<Record<number, number>>({});
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string } | null>(null);

  const scroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
  };

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
  };

  const pushRoute = (params: { article?: string | null; service?: string | null; hash?: string }) => {
    const nextParams = new URLSearchParams(window.location.search);

    if (params.article) {
      nextParams.set('article', params.article);
      nextParams.delete('service');
    } else if (params.service) {
      nextParams.set('service', params.service);
      nextParams.delete('article');
    } else {
      nextParams.delete('article');
      nextParams.delete('service');
    }

    const query = nextParams.toString();
    const nextUrl = `${window.location.pathname}${query ? `?${query}` : ''}${params.hash ?? window.location.hash}`;
    window.history.pushState({}, '', nextUrl);
  };

  const setProjectSlide = (projectIndex: number, nextIndex: number) => {
    setProjectSlides((current) => ({ ...current, [projectIndex]: nextIndex }));
  };

  const t = data[language];
  const labels = SECTION_TEXT[language];
  const serviceGroups = PRIMARY_SERVICE_GROUPS[language];
  const displayedProjects = [...t.projects, VISUALIZATION_PROJECT[language]];
  const descriptiveCases = EXTRA_PROJECTS[language];
  const defaultOgImage = `${SITE_URL}/og-cover.jpg`;

  useEffect(() => {
    const readRouteState = () => {
      const params = new URLSearchParams(window.location.search);
      const articleSlug = params.get('article');
      const serviceSlug = params.get('service');
      const articleIndex = articleSlug ? ARTICLE_SLUGS.indexOf(articleSlug as (typeof ARTICLE_SLUGS)[number]) : -1;
      const serviceIndex = serviceSlug ? SERVICE_SLUGS.indexOf(serviceSlug as (typeof SERVICE_SLUGS)[number]) : -1;

      setActiveArticle(articleIndex >= 0 ? articleIndex : null);
      setExpandedService(serviceIndex >= 0 ? serviceIndex : null);
    };

    readRouteState();
    window.addEventListener('popstate', readRouteState);

    return () => window.removeEventListener('popstate', readRouteState);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.lang = language;
  }, [language]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const articleSlug = activeArticle !== null ? ARTICLE_SLUGS[activeArticle] : null;
    const serviceSlug = activeArticle === null && expandedService !== null ? SERVICE_SLUGS[expandedService] : null;

    if (articleSlug) {
      params.set('article', articleSlug);
      params.delete('service');
    } else if (serviceSlug) {
      params.set('service', serviceSlug);
      params.delete('article');
    } else {
      params.delete('article');
      params.delete('service');
    }

    const query = params.toString();
    const nextUrl = `${window.location.pathname}${query ? `?${query}` : ''}${window.location.hash}`;
    window.history.replaceState({}, '', nextUrl);
  }, [activeArticle, expandedService]);

  useEffect(() => {
    const article = activeArticle !== null ? t.articles[activeArticle] : null;
    const service = activeArticle === null && expandedService !== null ? serviceGroups[expandedService] : null;
    const query = article
      ? `?article=${ARTICLE_SLUGS[activeArticle]}`
      : service
        ? `?service=${SERVICE_SLUGS[expandedService]}`
        : '';

    const canonicalUrl = `${SITE_URL}/${query}`;
    const title = article
      ? `${article.title} | Expert Article | It healthy coder`
      : service
        ? `${service.title} | Service | It healthy coder`
        : 'UX Design, Digital Product Automation & SEO | It healthy coder';
    const description = article
      ? article.excerpt
      : service
        ? service.positioning
        : 'Portfolio focused on UX and website design, digital product and automation support, and content, SEO, and optimization work.';

    document.title = title;

    ensureMetaTag('meta[name="description"]', { name: 'description', content: description });
    ensureLinkTag('link[rel="canonical"]', { rel: 'canonical', href: canonicalUrl });
    ensureMetaTag('meta[property="og:title"]', { property: 'og:title', content: title });
    ensureMetaTag('meta[property="og:description"]', { property: 'og:description', content: description });
    ensureMetaTag('meta[property="og:type"]', { property: 'og:type', content: article ? 'article' : 'website' });
    ensureMetaTag('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    ensureMetaTag('meta[property="og:image"]', { property: 'og:image', content: defaultOgImage });
    ensureMetaTag('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    ensureMetaTag('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
    ensureMetaTag('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
    ensureMetaTag('meta[name="twitter:image"]', { name: 'twitter:image', content: defaultOgImage });
  }, [activeArticle, expandedService, language]);

  const openArticle = (index: number) => {
    pushRoute({ article: ARTICLE_SLUGS[index], hash: '#articles' });
    setExpandedService(null);
    setActiveArticle(index);
    requestAnimationFrame(() => scrollToId('articles'));
  };

  const closeArticle = () => {
    pushRoute({ hash: '#articles' });
    setActiveArticle(null);
    requestAnimationFrame(() => scrollToId('articles'));
  };

  const openService = (index: number) => {
    const nextExpanded = expandedService === index ? null : index;
    pushRoute({ service: nextExpanded !== null ? SERVICE_SLUGS[nextExpanded] : null, hash: '#services' });
    setActiveArticle(null);
    setExpandedService(nextExpanded);
    requestAnimationFrame(() => scrollToId('services'));
  };

  const jumpToService = (index: number) => {
    pushRoute({ service: SERVICE_SLUGS[index], hash: '#services' });
    setActiveArticle(null);
    setExpandedService(index);
    requestAnimationFrame(() => scrollToId('services'));
  };

  const getProjectImageAlt = (project: Project, imageIndex: number) =>
    `${project.title} screenshot ${imageIndex + 1}, showing ${project.summary.toLowerCase()}.`;

  return (
    <div className="min-h-screen bg-stone-50 text-[#081a3a] font-sans selection:bg-[#081a3a] selection:text-stone-50">
      {showLegalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[rgba(6,20,47,0.4)] backdrop-blur-sm" onClick={() => setShowLegalModal(null)}>
          <div className="bg-stone-50 w-full max-w-3xl max-h-[88vh] overflow-y-auto p-6 md:p-12 relative shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between gap-4 mb-8">
              <button onClick={() => setShowLegalModal(null)} className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[#64748f] hover:text-[#081a3a] transition-colors">
                <ArrowLeft size={16} />
                {t.ui.back}
              </button>
              <button onClick={() => setShowLegalModal(null)} className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[#64748f] hover:text-[#081a3a] transition-colors">
                {t.ui.close}
                <X size={18} />
              </button>
            </div>
            <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-tight">{t.legal[showLegalModal].title}</h2>
            <div className="w-12 h-px bg-[#081a3a] mb-10" />
            {renderRichContent(t.legal[showLegalModal].content)}
          </div>
        </div>
      )}

      {lightboxImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(6,20,47,0.9)] p-4" onClick={() => setLightboxImage(null)}>
          <button onClick={() => setLightboxImage(null)} className="absolute top-6 right-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[#b8c4d8] hover:text-white transition-colors">
            {t.ui.close}
            <X size={18} />
          </button>
          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImage.src} alt={lightboxImage.title} className="w-full max-h-[82vh] object-contain shadow-2xl" />
          </div>
        </div>
      )}

      <header className="fixed top-0 w-full z-40 bg-[rgba(245,245,244,0.82)] backdrop-blur-md border-b border-[#d8e1ee]">
        <nav className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center gap-6">
          <div className="text-xl font-medium tracking-tight">It healthy coder.</div>
          <div className="hidden md:flex items-center gap-12">
            {t.nav.map((item, i) => (
              <a key={i} href={`#${['services', 'projects', 'process', 'articles', 'contact'][i]}`} onClick={(e) => scroll(e, ['services', 'projects', 'process', 'articles', 'contact'][i])} className="text-sm font-medium hover:text-[#7686a4] transition lowercase tracking-wider">
                {item}
              </a>
            ))}
          </div>
          <div className="flex bg-[#eef3f9] p-1 rounded-full">
            <button onClick={() => setLanguage('en')} className={`px-3 py-1 rounded-full text-sm transition-all ${language === 'en' ? 'bg-[#081a3a] text-white shadow-lg' : 'text-[#5f6f8c] hover:text-[#081a3a]'}`}>EN</button>
            <button onClick={() => setLanguage('ru')} className={`px-3 py-1 rounded-full text-sm transition-all ${language === 'ru' ? 'bg-[#081a3a] text-white shadow-lg' : 'text-[#5f6f8c] hover:text-[#081a3a]'}`}>RU</button>
            <button onClick={() => setLanguage('nl')} className={`px-3 py-1 rounded-full text-sm transition-all ${language === 'nl' ? 'bg-[#081a3a] text-white shadow-lg' : 'text-[#5f6f8c] hover:text-[#081a3a]'}`}>NL</button>
          </div>
        </nav>
      </header>

      <main>
        <section className="pt-48 pb-32 px-6 max-w-6xl mx-auto min-h-screen flex flex-col justify-center">
          <h1 className="text-6xl md:text-8xl font-light tracking-tighter leading-[0.9] mb-12 whitespace-pre-wrap">{t.hero[0]}</h1>
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <p className="text-xl md:text-2xl text-[#546581] font-light leading-relaxed max-w-lg">{t.hero[1]}</p>
            <div className="flex justify-start md:justify-end">
              <a href="#contact" onClick={(e) => scroll(e, 'contact')} className="inline-flex items-center gap-2 bg-[#081a3a] text-stone-50 px-12 py-5 text-lg hover:bg-stone-50 hover:text-[#081a3a] border-2 border-[#081a3a] transition-all duration-300 group shadow-xl">
                {t.hero[2]} <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="py-32 px-6 max-w-6xl mx-auto border-t border-[#d8e1ee]">
          <h2 className="text-lg md:text-xl font-bold uppercase tracking-[0.22em] mb-16 text-[#7384a2]">{t.ui.services}</h2>
          <div className="grid border-t border-[#d8e1ee]">
            {serviceGroups.map((group, index) => (
              <div key={index} className="border-b border-[#d8e1ee] group">
                <button onClick={() => openService(index)} className="w-full py-12 flex flex-col md:flex-row justify-between items-start md:items-center text-left hover:px-4 transition-all duration-500">
                  <div className="max-w-md mb-4 md:mb-0">
                    <h3 className="text-3xl font-light mb-2">{group.title}</h3>
                    <p className="text-[#546581] font-light leading-relaxed">{group.positioning}</p>
                  </div>
                  <div className={`transition-transform duration-500 ${expandedService === index ? 'rotate-180' : ''}`}>
                    <ChevronDown size={32} strokeWidth={1} />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-700 ease-in-out ${expandedService === index ? 'max-h-[1100px] pb-12 px-4' : 'max-h-0'}`}>
                  <div className="grid md:grid-cols-2 gap-10">
                    {group.subserviceIndices.map((serviceIndex) => (
                      <div key={t.services[serviceIndex][0]} className="space-y-4">
                        <div>
                          <h4 className="text-xl font-medium text-[#081a3a] mb-2">{t.services[serviceIndex][0]}</h4>
                          <p className="text-[#546581] font-light leading-relaxed">{t.services[serviceIndex][1]}</p>
                        </div>
                        <div className="space-y-3">
                          {t.services[serviceIndex][2].map((detail) => (
                            <div key={detail} className="flex items-start gap-3 text-[#5d6d88] font-light leading-relaxed">
                              <div className="w-1.5 h-1.5 bg-[#8b99b2] rounded-full mt-2.5" />
                              {detail}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  {DESCRIPTIVE_CASES_BY_GROUP[group.slug as keyof typeof DESCRIPTIVE_CASES_BY_GROUP] && (
                    <div className="mt-8 border-t border-[#d8e1ee] pt-8">
                      <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#7384a2] mb-4">{labels.descriptiveCases}</div>
                      <div className="grid md:grid-cols-2 gap-6">
                        {DESCRIPTIVE_CASES_BY_GROUP[group.slug as keyof typeof DESCRIPTIVE_CASES_BY_GROUP].map((caseSlug) => {
                          const descriptiveCase = descriptiveCases.find((item) => item.slug === caseSlug);
                          if (!descriptiveCase) return null;

                          return (
                            <article key={descriptiveCase.slug} className="border border-[#d8e1ee] bg-[#f3f7fc] p-6 space-y-3">
                              <div className="text-xs font-bold uppercase tracking-[0.3em] text-[#7384a2]">{descriptiveCase.category}</div>
                              <h4 className="text-xl font-medium text-[#081a3a]">{descriptiveCase.title}</h4>
                              <p className="text-[#546581] font-light leading-relaxed">{descriptiveCase.description}</p>
                              <p className="text-sm text-[#6b7c99] font-light leading-relaxed">{descriptiveCase.summary}</p>
                            </article>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  <div className="mt-8 grid md:grid-cols-2 gap-6 border-t border-[#d8e1ee] pt-8">
                    <div className="space-y-3">
                      <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#7384a2]">{labels.relatedProjects}</div>
                      {group.relatedProjects.map((projectSlug) => {
                        const project = displayedProjects.find((item) => item.slug === projectSlug);
                        if (!project) return null;

                        return (
                          <a
                            key={project.slug}
                            href={`#project-${project.slug}`}
                            onClick={(e) => {
                              e.preventDefault();
                              scrollToId(`project-${project.slug}`);
                            }}
                            className="block text-[#42516f] hover:text-[#081a3a] transition-colors"
                          >
                            {project.title}
                          </a>
                        );
                      })}
                    </div>
                    <div className="space-y-3">
                      <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#7384a2]">{labels.relatedArticle}</div>
                      <a
                        href={`?article=${group.relatedArticle}#articles`}
                        onClick={(e) => {
                          e.preventDefault();
                          openArticle(ARTICLE_SLUGS.indexOf(group.relatedArticle));
                        }}
                        className="block text-[#42516f] hover:text-[#081a3a] transition-colors"
                      >
                        {t.articles[ARTICLE_SLUGS.indexOf(group.relatedArticle)].title}
                      </a>
                      <a href={group.pagePath} className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[#64748f] hover:text-[#081a3a] transition-colors">
                        {labels.more}
                        <ExternalLink size={16} />
                      </a>
                      <a href="#contact" onClick={(e) => scroll(e, 'contact')} className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[#64748f] hover:text-[#081a3a] transition-colors">
                        {labels.discussDirection}
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="py-32 px-6 bg-[#081a3a] text-stone-50 selection:bg-stone-50 selection:text-[#081a3a]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-lg md:text-xl font-bold uppercase tracking-[0.22em] mb-16 text-[#9fb0ca]">{t.ui.projects}</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {displayedProjects.map((project, index) => {
                return (
                <div key={index} id={`project-${project.slug}`} className="group scroll-mt-28">
                  <div className="aspect-[16/10] bg-[#10244b] mb-8 overflow-hidden relative shadow-2xl">
                    {project.images.length > 0 ? (
                      <>
                        <button
                          type="button"
                          className="absolute inset-0"
                          onClick={() => setLightboxImage({ src: project.images[projectSlides[index] ?? 0], title: project.title })}
                          aria-label={project.title}
                        >
                          <img
                            src={project.images[projectSlides[index] ?? 0]}
                            alt={getProjectImageAlt(project, projectSlides[index] ?? 0)}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                          />
                        </button>
                        {project.images.length > 1 && (
                          <>
                            <button
                              type="button"
                              className="absolute left-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full border border-white/25 bg-[rgba(8,26,58,0.6)] text-white backdrop-blur hover:bg-stone-50 hover:text-[#081a3a] transition-colors"
                              onClick={() => setProjectSlide(index, ((projectSlides[index] ?? 0) - 1 + project.images.length) % project.images.length)}
                              aria-label="Previous image"
                            >
                              <ChevronLeft className="mx-auto" size={18} />
                            </button>
                            <button
                              type="button"
                              className="absolute right-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full border border-white/25 bg-[rgba(8,26,58,0.6)] text-white backdrop-blur hover:bg-stone-50 hover:text-[#081a3a] transition-colors"
                              onClick={() => setProjectSlide(index, ((projectSlides[index] ?? 0) + 1) % project.images.length)}
                              aria-label="Next image"
                            >
                              <ChevronRight className="mx-auto" size={18} />
                            </button>
                            <div className="absolute left-6 bottom-5 flex items-center gap-2">
                              {project.images.map((_, imageIndex) => (
                                <button
                                  key={imageIndex}
                                  type="button"
                                  onClick={() => setProjectSlide(index, imageIndex)}
                                  className={`h-2 rounded-full transition-all ${imageIndex === (projectSlides[index] ?? 0) ? 'w-8 bg-white' : 'w-2 bg-white/45 hover:bg-white/70'}`}
                                  aria-label={`Go to image ${imageIndex + 1}`}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-[#122a56] via-[#10244b] to-[#081a3a]" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center">
                          <div className="text-xs font-bold uppercase tracking-[0.3em] text-[#9fb0ca] mb-4">{project.category}</div>
                          <div className="text-3xl font-light mb-4">{project.title}</div>
                          <div className="text-[#c3cee0] max-w-md">{labels.projectPlaceholder}</div>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="space-y-4">
                    {project.url ? (
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-3xl font-light hover:text-[#c3cee0] transition-colors">
                        {project.title}
                        <ExternalLink size={18} />
                      </a>
                    ) : (
                      <h3 className="text-3xl font-light">{project.title}</h3>
                    )}
                    <div className="text-xs font-bold uppercase tracking-[0.3em] text-[#93a5c1]">{project.category}</div>
                    <div className="space-y-3 text-[#d4dcec] font-light leading-relaxed">
                      <p>{project.description}</p>
                      <p className="text-[#9fb0ca]">{project.summary}</p>
                    </div>
                  </div>
                </div>
              )})}
            </div>
          </div>
        </section>

        <section id="process" className="py-32 px-6 max-w-6xl mx-auto border-t border-[#d8e1ee]">
          <h2 className="text-lg md:text-xl font-bold uppercase tracking-[0.22em] mb-16 text-[#7384a2]">{t.ui.process}</h2>
          <div className="grid md:grid-cols-4 gap-12">
            {t.process.map((step, index) => (
              <div key={index} className="relative pt-10 pl-2 pr-4">
                <div className="text-5xl font-medium text-[#7d8eac] absolute -top-4 -left-2 z-0">{step[0]}</div>
                <div className="relative z-10 space-y-4">
                  <h3 className="text-xl font-medium leading-snug">{step[1]}</h3>
                  <p className="text-[#546581] font-light leading-relaxed">{step[2]}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="articles" className="py-32 px-6 max-w-6xl mx-auto border-t border-[#d8e1ee]">
          <h2 className="text-lg md:text-xl font-bold uppercase tracking-[0.22em] mb-16 text-[#7384a2]">{t.ui.articles}</h2>

          {activeArticle === null ? (
            <div className="grid gap-8">
              {t.articles.map((article, index) => (
                <a
                  key={index}
                  href={`?article=${ARTICLE_SLUGS[index]}#articles`}
                  className="border border-[#d8e1ee] px-6 py-8 md:px-12 md:py-12 hover:bg-[#f3f7fc] transition-colors group cursor-pointer text-left block"
                  onClick={(e) => {
                    e.preventDefault();
                    openArticle(index);
                  }}
                >
                  <div className="flex flex-col gap-6 md:gap-7">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
                      <span className="text-xs font-bold uppercase tracking-widest bg-[#081a3a] text-stone-50 px-3 py-1">{article.category}</span>
                      <span className="text-sm text-[#7384a2] font-medium tracking-wider">{article.date} — {article.readTime}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-light leading-tight group-hover:translate-x-2 transition-transform duration-500">{article.title}</h3>
                    <p className="text-[#546581] font-light max-w-2xl leading-relaxed">{article.excerpt}</p>
                    <div className="flex items-center gap-2 font-medium text-sm group-hover:text-[#7384a2] transition-colors uppercase tracking-widest">
                      {t.ui.readArticle}
                      <Plus size={16} className="transition-transform duration-500 group-hover:rotate-90" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <article className="border border-[#d8e1ee] bg-white px-6 py-8 md:px-12 md:py-12 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
                <button onClick={closeArticle} className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[#64748f] hover:text-[#081a3a] transition-colors">
                  <ArrowLeft size={16} />
                  {t.ui.back}
                </button>
                <button onClick={closeArticle} className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[#64748f] hover:text-[#081a3a] transition-colors">
                  {t.ui.close}
                  <X size={18} />
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-3 mb-6">
                <span className="text-xs font-bold uppercase tracking-widest bg-[#081a3a] text-stone-50 px-3 py-1">{t.articles[activeArticle].category}</span>
                <span className="text-sm text-[#7384a2] font-medium tracking-wider">{t.articles[activeArticle].date} — {t.articles[activeArticle].readTime}</span>
              </div>

              <h3 className="text-4xl md:text-5xl font-light leading-tight tracking-tight mb-6">{t.articles[activeArticle].title}</h3>
              <p className="text-xl text-[#546581] font-light leading-relaxed max-w-3xl mb-12">{t.articles[activeArticle].excerpt}</p>
              <div className="w-12 h-px bg-[#081a3a] mb-10" />
              {renderRichContent(t.articles[activeArticle].content)}
              <div className="mt-12 pt-8 border-t border-[#d8e1ee] grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#7384a2]">{labels.relatedService}</div>
                  <a
                    href={serviceGroups[SERVICE_SLUGS.indexOf(ARTICLE_RELATIONS[activeArticle].serviceSlug)].pagePath}
                    className="block text-[#081a3a] hover:text-[#556480] transition-colors"
                  >
                    {serviceGroups[SERVICE_SLUGS.indexOf(ARTICLE_RELATIONS[activeArticle].serviceSlug)].title}
                  </a>
                  {ARTICLE_RELATIONS[activeArticle].projectSlugs.map((projectSlug) => {
                    const project = displayedProjects.find((item) => item.slug === projectSlug);
                    if (!project) return null;

                    return (
                      <a
                        key={project.slug}
                        href={`#project-${project.slug}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveArticle(null);
                          requestAnimationFrame(() => scrollToId(`project-${project.slug}`));
                        }}
                        className="block text-[#5d6d88] hover:text-[#081a3a] transition-colors"
                      >
                        {project.title}
                      </a>
                    );
                  })}
                </div>
                <div className="space-y-3">
                  <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#7384a2]">{labels.nextStep}</div>
                  <p className="text-[#5d6d88] font-light leading-relaxed">
                    {labels.articleCta}
                  </p>
                  <a href="#contact" onClick={(e) => scroll(e, 'contact')} className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[#64748f] hover:text-[#081a3a] transition-colors">
                    {labels.articleStart}
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </article>
          )}
        </section>

        <section id="contact" className="py-48 px-6 bg-[#081a3a] text-stone-50 text-center selection:bg-stone-50 selection:text-[#081a3a]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg md:text-xl font-bold uppercase tracking-[0.22em] mb-12 text-[#9fb0ca]">{t.ui.ready}</h2>
            <p className="text-4xl md:text-6xl font-light tracking-tight leading-tight mb-16">{t.ui.contactLead}</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
              <a href="mailto:itmadge@gmail.com" className="group">
                <div className="flex items-center gap-4 text-2xl font-light hover:text-[#c3cee0] transition-colors">
                  <Mail size={32} strokeWidth={1} />
                  itmadge@gmail.com
                </div>
                <div className="h-px bg-[#60718e] mt-2 group-hover:scale-x-110 transition-transform origin-center" />
              </a>
              <a href="https://www.linkedin.com/in/margarita-smy/" target="_blank" rel="noopener noreferrer" className="group">
                <div className="flex items-center gap-4 text-2xl font-light hover:text-[#c3cee0] transition-colors">
                  <Linkedin size={32} strokeWidth={1} />
                  LinkedIn
                </div>
                <div className="h-px bg-[#60718e] mt-2 group-hover:scale-x-110 transition-transform origin-center" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-24 px-6 border-t border-[#20345a] bg-[#081a3a] text-[#8fa1be]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-sm font-medium tracking-widest">{t.ui.footerCopy}</div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-sm font-medium tracking-widest uppercase">
            <button onClick={() => setShowLegalModal('privacy')} className="hover:text-stone-50 transition-colors cursor-pointer">{t.footer.privacy}</button>
            <button onClick={() => setShowLegalModal('cookies')} className="hover:text-stone-50 transition-colors cursor-pointer">{t.footer.cookies}</button>
            <button onClick={() => setShowLegalModal('terms')} className="hover:text-stone-50 transition-colors cursor-pointer">{t.footer.terms}</button>
          </div>
          <div className="text-xs italic font-light tracking-widest">{t.ui.footerLocation}</div>
        </div>
      </footer>
    </div>
  );
}
