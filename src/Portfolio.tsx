import React, { useState } from 'react';
import { X, ArrowRight, Mail, Linkedin, ChevronDown, Plus, ArrowLeft } from 'lucide-react';

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
  projects: [string, string, string, string][];
  process: [string, string, string][];
  articles: Article[];
};

const renderRichContent = (content: RichContent) => (
  <div className="space-y-10 text-stone-700">
    {content.intro?.map((paragraph, index) => (
      <p key={`intro-${index}`} className="text-lg leading-8 font-light">
        {paragraph}
      </p>
    ))}

    {content.sections.map((section, index) => (
      <section key={`${section.title}-${index}`} className="space-y-4">
        <h4 className="text-xl md:text-2xl font-medium tracking-tight text-stone-900">{section.title}</h4>
        {section.paragraphs?.map((paragraph, paragraphIndex) => (
          <p key={`paragraph-${paragraphIndex}`} className="text-base md:text-lg leading-8 font-light">
            {paragraph}
          </p>
        ))}
        {section.bullets && (
          <ul className="space-y-3 pl-0">
            {section.bullets.map((bullet, bulletIndex) => (
              <li key={`bullet-${bulletIndex}`} className="flex items-start gap-3 text-base md:text-lg leading-8 font-light">
                <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-stone-400" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </section>
    ))}

    {content.outro?.map((paragraph, index) => (
      <p key={`outro-${index}`} className="text-lg leading-8 font-light italic text-stone-600">
        {paragraph}
      </p>
    ))}
  </div>
);

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
              paragraphs: ['Based in Amsterdam, Netherlands', 'Contact: your.email@example.com']
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
            'To exercise your rights or ask privacy-related questions, contact your.email@example.com. Requests are answered within 30 days where required.'
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
          outro: ['If you have questions about cookies, contact your.email@example.com.']
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
          outro: ['Questions about these terms can be sent to your.email@example.com.']
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
      ['AI Chatbot for Customer Support', 'AI & Automation', 'Telegram bot for automating 70% of support requests', '70% automation, 24/7 availability'],
      ['Wellness Platform Design', 'UI/UX', 'Reimagining user experience for health service', 'Minimalist interface, wellness focus'],
      ['Creative Campaign for Coffee Shop', 'Marketing & Creative', '3D visualization and content strategy for local business', 'Brand awareness growth'],
      ['Business Meetings Platform', 'UI/UX & Product', 'MVP design for organizing meetings with activities system', 'Full cycle: concept to prototype']
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
              paragraphs: ['Базируется в Амстердаме, Нидерланды', 'Контакт: your.email@example.com']
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
          outro: ['По вопросам конфиденциальности или для реализации ваших прав напишите на your.email@example.com. Ответ предоставляется в течение 30 дней, если это требуется законом.']
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
          outro: ['Если у вас есть вопросы по cookies, напишите на your.email@example.com.']
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
          outro: ['Вопросы по этим условиям можно направить на your.email@example.com.']
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
      ['Чат-бот на основе ИИ для поддержки клиентов', 'ИИ и автоматизация', 'Бот в Telegram для автоматизации 70% запросов в службу поддержки', '70% автоматизации, круглосуточная доступность'],
      ['Дизайн платформы для здоровья и благополучия', 'UI/UX', 'Переосмысление пользовательского опыта для медицинских услуг', 'Минималистичный интерфейс, акцент на здоровье и благополучие'],
      ['Креативная кампания для кофейни', 'Маркетинг и креатив', '3D-визуализация и контент-стратегия для местного бизнеса', 'Повышение узнаваемости бренда'],
      ['Платформа для деловых встреч', 'UI/UX и продукт', 'Дизайн MVP для организации встреч с системой активностей', 'Полный цикл: от концепции до прототипа']
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
              paragraphs: ['Gevestigd in Amsterdam, Nederland', 'Contact: your.email@example.com']
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
          outro: ['Voor privacyvragen of het uitoefenen van je rechten kun je mailen naar your.email@example.com. Verzoeken worden waar nodig binnen 30 dagen beantwoord.']
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
          outro: ['Vragen over cookies kun je sturen naar your.email@example.com.']
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
          outro: ['Vragen over deze voorwaarden kun je sturen naar your.email@example.com.']
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
      ['AI-chatbot voor klantenservice', 'AI & Automatisering', 'Telegram-bot die 70% van supportverzoeken automatiseert', '70% automatisering, 24/7 beschikbaarheid'],
      ['Design voor wellnessplatform', 'UI/UX', 'Herontwerp van de gebruikerservaring voor een gezondheidsdienst', 'Minimalistische interface, focus op welzijn'],
      ['Creatieve campagne voor koffiebar', 'Marketing & Creatief', '3D-visualisatie en contentstrategie voor een lokaal bedrijf', 'Grotere merkbekendheid'],
      ['Platform voor zakelijke afspraken', 'UI/UX & Product', 'MVP-ontwerp voor het organiseren van afspraken met een activiteitensysteem', 'Volledige cyclus: van concept tot prototype']
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
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [activeArticle, setActiveArticle] = useState<number | null>(null);
  const [showLegalModal, setShowLegalModal] = useState<'privacy' | 'cookies' | 'terms' | null>(null);
  const [language, setLanguage] = useState<'en' | 'ru' | 'nl'>('en');

  const scroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
  };

  const t = data[language];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-stone-900 selection:text-stone-50">
      {showLegalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-sm" onClick={() => setShowLegalModal(null)}>
          <div className="bg-stone-50 w-full max-w-3xl max-h-[88vh] overflow-y-auto p-6 md:p-12 relative shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between gap-4 mb-8">
              <button onClick={() => setShowLegalModal(null)} className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-stone-500 hover:text-stone-900 transition-colors">
                <ArrowLeft size={16} />
                {t.ui.back}
              </button>
              <button onClick={() => setShowLegalModal(null)} className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-stone-500 hover:text-stone-900 transition-colors">
                {t.ui.close}
                <X size={18} />
              </button>
            </div>
            <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-tight">{t.legal[showLegalModal].title}</h2>
            <div className="w-12 h-px bg-stone-900 mb-10" />
            {renderRichContent(t.legal[showLegalModal].content)}
          </div>
        </div>
      )}

      <header className="fixed top-0 w-full z-40 bg-stone-50/80 backdrop-blur-md border-b border-stone-200">
        <nav className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center gap-6">
          <div className="text-xl font-medium tracking-tight">It healthy coder.</div>
          <div className="hidden md:flex items-center gap-12">
            {t.nav.map((item, i) => (
              <a key={i} href={`#${['services', 'projects', 'process', 'articles', 'contact'][i]}`} onClick={(e) => scroll(e, ['services', 'projects', 'process', 'articles', 'contact'][i])} className="text-sm font-medium hover:text-stone-400 transition lowercase tracking-wider">
                {item}
              </a>
            ))}
          </div>
          <div className="flex bg-stone-100 p-1 rounded-full">
            <button onClick={() => setLanguage('en')} className={`px-3 py-1 rounded-full text-sm transition-all ${language === 'en' ? 'bg-stone-900 text-white shadow-lg' : 'hover:text-stone-500'}`}>EN</button>
            <button onClick={() => setLanguage('ru')} className={`px-3 py-1 rounded-full text-sm transition-all ${language === 'ru' ? 'bg-stone-900 text-white shadow-lg' : 'hover:text-stone-500'}`}>RU</button>
            <button onClick={() => setLanguage('nl')} className={`px-3 py-1 rounded-full text-sm transition-all ${language === 'nl' ? 'bg-stone-900 text-white shadow-lg' : 'hover:text-stone-500'}`}>NL</button>
          </div>
        </nav>
      </header>

      <main>
        <section className="pt-48 pb-32 px-6 max-w-6xl mx-auto min-h-screen flex flex-col justify-center">
          <h1 className="text-6xl md:text-8xl font-light tracking-tighter leading-[0.9] mb-12 whitespace-pre-wrap">{t.hero[0]}</h1>
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <p className="text-xl md:text-2xl text-stone-500 font-light leading-relaxed max-w-lg">{t.hero[1]}</p>
            <div className="flex justify-start md:justify-end">
              <a href="#contact" onClick={(e) => scroll(e, 'contact')} className="inline-flex items-center gap-2 bg-stone-900 text-stone-50 px-12 py-5 text-lg hover:bg-stone-50 hover:text-stone-900 border-2 border-stone-900 transition-all duration-300 group shadow-xl">
                {t.hero[2]} <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="py-32 px-6 max-w-6xl mx-auto border-t border-stone-200">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] mb-16 text-stone-400">{t.ui.services}</h2>
          <div className="grid border-t border-stone-200">
            {t.services.map((service, index) => (
              <div key={index} className="border-b border-stone-200 group">
                <button onClick={() => setExpandedService(expandedService === index ? null : index)} className="w-full py-12 flex flex-col md:flex-row justify-between items-start md:items-center text-left hover:px-4 transition-all duration-500">
                  <div className="max-w-md mb-4 md:mb-0">
                    <h3 className="text-3xl font-light mb-2">{service[0]}</h3>
                    <p className="text-stone-500 font-light leading-relaxed">{service[1]}</p>
                  </div>
                  <div className={`transition-transform duration-500 ${expandedService === index ? 'rotate-180' : ''}`}>
                    <ChevronDown size={32} strokeWidth={1} />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-700 ease-in-out ${expandedService === index ? 'max-h-[520px] pb-12 px-4' : 'max-h-0'}`}>
                  <div className="grid md:grid-cols-2 gap-6">
                    {service[2].map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center gap-4 text-stone-600 font-light italic">
                        <div className="w-1.5 h-1.5 bg-stone-300 rounded-full" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="py-32 px-6 bg-stone-900 text-stone-50 selection:bg-stone-50 selection:text-stone-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] mb-16 text-stone-500">{t.ui.projects}</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {t.projects.map((project, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="aspect-[16/10] bg-stone-800 mb-8 overflow-hidden relative shadow-2xl">
                    <div className="absolute inset-0 flex items-center justify-center text-stone-700 font-black text-6xl opacity-20 group-hover:scale-110 transition-transform duration-700 uppercase">
                      {t.ui.projectWord}
                    </div>
                    <div className="absolute top-6 right-6 text-xs font-bold uppercase tracking-widest bg-stone-50 text-stone-900 px-3 py-1">{project[1]}</div>
                  </div>
                  <h3 className="text-3xl font-light mb-4">{project[0]}</h3>
                  <p className="text-stone-400 font-light leading-relaxed mb-6">{project[2]}</p>
                  <div className="text-stone-500 italic font-light">{project[3]}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="py-32 px-6 max-w-6xl mx-auto border-t border-stone-200">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] mb-16 text-stone-400">{t.ui.process}</h2>
          <div className="grid md:grid-cols-4 gap-12">
            {t.process.map((step, index) => (
              <div key={index} className="relative pt-10 pl-2 pr-4">
                <div className="text-5xl font-light text-stone-100 absolute -top-4 -left-2 z-0">{step[0]}</div>
                <div className="relative z-10 space-y-4">
                  <h3 className="text-xl font-medium leading-snug">{step[1]}</h3>
                  <p className="text-stone-500 font-light leading-relaxed">{step[2]}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="articles" className="py-32 px-6 max-w-6xl mx-auto border-t border-stone-200">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] mb-16 text-stone-400">{t.ui.articles}</h2>

          {activeArticle === null ? (
            <div className="grid gap-8">
              {t.articles.map((article, index) => (
                <button key={index} className="border border-stone-200 px-6 py-8 md:px-12 md:py-12 hover:bg-stone-100 transition-colors group cursor-pointer text-left" onClick={() => setActiveArticle(index)}>
                  <div className="flex flex-col gap-6 md:gap-7">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
                      <span className="text-xs font-bold uppercase tracking-widest bg-stone-900 text-stone-50 px-3 py-1">{article.category}</span>
                      <span className="text-sm text-stone-400 font-medium tracking-wider">{article.date} — {article.readTime}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-light leading-tight group-hover:translate-x-2 transition-transform duration-500">{article.title}</h3>
                    <p className="text-stone-500 font-light max-w-2xl leading-relaxed">{article.excerpt}</p>
                    <div className="flex items-center gap-2 font-medium text-sm group-hover:text-stone-400 transition-colors uppercase tracking-widest">
                      {t.ui.readArticle}
                      <Plus size={16} className="transition-transform duration-500 group-hover:rotate-90" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <article className="border border-stone-200 bg-white px-6 py-8 md:px-12 md:py-12 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
                <button onClick={() => setActiveArticle(null)} className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-stone-500 hover:text-stone-900 transition-colors">
                  <ArrowLeft size={16} />
                  {t.ui.back}
                </button>
                <button onClick={() => setActiveArticle(null)} className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-stone-500 hover:text-stone-900 transition-colors">
                  {t.ui.close}
                  <X size={18} />
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-3 mb-6">
                <span className="text-xs font-bold uppercase tracking-widest bg-stone-900 text-stone-50 px-3 py-1">{t.articles[activeArticle].category}</span>
                <span className="text-sm text-stone-400 font-medium tracking-wider">{t.articles[activeArticle].date} — {t.articles[activeArticle].readTime}</span>
              </div>

              <h3 className="text-4xl md:text-5xl font-light leading-tight tracking-tight mb-6">{t.articles[activeArticle].title}</h3>
              <p className="text-xl text-stone-500 font-light leading-relaxed max-w-3xl mb-12">{t.articles[activeArticle].excerpt}</p>
              <div className="w-12 h-px bg-stone-900 mb-10" />
              {renderRichContent(t.articles[activeArticle].content)}
            </article>
          )}
        </section>

        <section id="contact" className="py-48 px-6 bg-stone-900 text-stone-50 text-center selection:bg-stone-50 selection:text-stone-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] mb-12 text-stone-500">{t.ui.ready}</h2>
            <p className="text-4xl md:text-6xl font-light tracking-tight leading-tight mb-16">{t.ui.contactLead}</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
              <a href="mailto:your.email@example.com" className="group">
                <div className="flex items-center gap-4 text-2xl font-light hover:text-stone-400 transition-colors">
                  <Mail size={32} strokeWidth={1} />
                  your.email@example.com
                </div>
                <div className="h-px bg-stone-700 mt-2 group-hover:scale-x-110 transition-transform origin-center" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group">
                <div className="flex items-center gap-4 text-2xl font-light hover:text-stone-400 transition-colors">
                  <Linkedin size={32} strokeWidth={1} />
                  LinkedIn
                </div>
                <div className="h-px bg-stone-700 mt-2 group-hover:scale-x-110 transition-transform origin-center" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-24 px-6 border-t border-stone-200 bg-stone-900 text-stone-500">
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
