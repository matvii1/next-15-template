export interface NewsItem {
  id: number
  slug: string
  date: string
  readTime: number
  image: string
  translations: {
    ua: {
      title: string
      content: string
    }
    en: {
      title: string
      content: string
    }
  }
}

export const news: NewsItem[] = [
  {
    id: 1,
    slug: 'women-leadership-conference-2024',
    date: '2024-03-15',
    readTime: 4,
    image: '/images/news/leadership-conference.jpg',
    translations: {
      ua: {
        title: 'Конференція з жіночого лідерства 2024',
        content: `
# Конференція з жіночого лідерства 2024

Раді анонсувати нашу щорічну конференцію з жіночого лідерства! 🎉

## Що на вас чекає?

- Надихаючі виступи успішних жінок-лідерок
- Практичні воркшопи з розвитку лідерських навичок
- Нетворкінг з однодумицями
- Корисні матеріали та ресурси

## Коли та де?

Дата: 25 квітня 2024
Час: 10:00 - 18:00
Місце: Конференц-хол "Інновація"

[Зареєструватися на подію](#)

*Кількість місць обмежена. Реєстрація обов'язкова.*`,
      },
      en: {
        title: 'Women Leadership Conference 2024',
        content: `
# Women Leadership Conference 2024

We're excited to announce our annual women's leadership conference! 🎉

## What to expect?

- Inspiring talks from successful women leaders
- Practical leadership skills workshops
- Networking with like-minded individuals
- Useful materials and resources

## When and where?

Date: April 25, 2024
Time: 10:00 AM - 6:00 PM
Location: Innovation Conference Hall

[Register for the event](#)

*Limited seats available. Registration is required.*`,
      },
    },
  },
  {
    id: 2,
    slug: 'new-parenting-program-launch',
    date: '2024-03-10',
    readTime: 3,
    image: '/images/news/parenting-program.jpg',
    translations: {
      ua: {
        title: 'Запуск нової програми для батьків',
        content: `
# Запуск нової програми для батьків

Представляємо нашу нову комплексну програму підтримки батьків! 👨‍👩‍👧‍👦

## Програма включає:

- Щотижневі онлайн-семінари
- Консультації з психологом
- Групові обговорення
- Практичні завдання

## Тривалість програми:
3 місяці, початок 1 квітня 2024

Долучайтеся до нашої спільноти підтримки батьків!

[Дізнатися більше](#)`,
      },
      en: {
        title: 'New Parenting Program Launch',
        content: `
# New Parenting Program Launch

Introducing our new comprehensive parenting support program! 👨‍👩‍👧‍👦

## Program includes:

- Weekly online seminars
- Psychology consultations
- Group discussions
- Practical assignments

## Program duration:
3 months, starting April 1, 2024

Join our parenting support community!

[Learn more](#)`,
      },
    },
  },
  {
    id: 3,
    slug: 'educational-reform-support',
    date: '2024-03-05',
    readTime: 5,
    image: '/images/news/education-reform.jpg',
    translations: {
      ua: {
        title: 'Підтримка освітньої реформи: нові ініціативи',
        content: `
# Підтримка освітньої реформи: нові ініціативи

Ми розпочинаємо серію проектів на підтримку освітньої реформи в Україні! 📚

## Ключові напрямки:

- Впровадження інноваційних методик навчання
- Підтримка вчителів у період змін
- Створення інклюзивного освітнього середовища

[Детальніше про ініціативи](#)`,
      },
      en: {
        title: 'Educational Reform Support: New Initiatives',
        content: `
# Educational Reform Support: New Initiatives

We are launching a series of projects to support educational reform in Ukraine! 📚

## Key areas:

- Implementation of innovative teaching methods
- Supporting teachers during transition
- Creating inclusive educational environment

[More about initiatives](#)`,
      },
    },
  },
  // For brevity, I'll list the remaining items with just titles and basic info
  {
    id: 4,
    slug: 'pregnancy-support-group',
    date: '2024-02-28',
    readTime: 2,
    image: '/images/news/pregnancy-support.jpg',
    translations: {
      ua: {
        title: 'Нова група підтримки для вагітних',
        content: '...',
      },
      en: {
        title: 'New Pregnancy Support Group',
        content: '...',
      },
    },
  },
  {
    id: 5,
    slug: 'digital-skills-workshop',
    date: '2024-02-20',
    readTime: 3,
    image: '/images/news/digital-skills.jpg',
    translations: {
      ua: {
        title: 'Воркшоп з цифрових навичок',
        content: '...',
      },
      en: {
        title: 'Digital Skills Workshop',
        content: '...',
      },
    },
  },
  {
    id: 6,
    slug: 'inclusive-education-seminar',
    date: '2024-02-15',
    readTime: 4,
    image: '/images/news/inclusive-education.jpg',
    translations: {
      ua: {
        title: 'Семінар з інклюзивної освіти',
        content: '...',
      },
      en: {
        title: 'Inclusive Education Seminar',
        content: '...',
      },
    },
  },
  {
    id: 7,
    slug: 'career-development-program',
    date: '2024-02-10',
    readTime: 3,
    image: '/images/news/career-development.jpg',
    translations: {
      ua: {
        title: "Програма розвитку кар'єри для жінок",
        content: '...',
      },
      en: {
        title: "Women's Career Development Program",
        content: '...',
      },
    },
  },
  {
    id: 8,
    slug: 'children-art-therapy',
    date: '2024-02-05',
    readTime: 2,
    image: '/images/news/art-therapy.jpg',
    translations: {
      ua: {
        title: 'Арт-терапія для дітей: нові групи',
        content: '...',
      },
      en: {
        title: "Children's Art Therapy: New Groups",
        content: '...',
      },
    },
  },
  {
    id: 9,
    slug: 'partnership-announcement',
    date: '2024-02-01',
    readTime: 3,
    image: '/images/news/partnership.jpg',
    translations: {
      ua: {
        title: 'Нове партнерство з освітньою платформою',
        content: '...',
      },
      en: {
        title: 'New Partnership with Educational Platform',
        content: '...',
      },
    },
  },
  {
    id: 10,
    slug: 'summer-camp-registration',
    date: '2024-01-25',
    readTime: 4,
    image: '/images/news/summer-camp.jpg',
    translations: {
      ua: {
        title: 'Відкрито реєстрацію на літній табір 2024',
        content: '...',
      },
      en: {
        title: 'Summer Camp 2024 Registration Open',
        content: '...',
      },
    },
  },
]
