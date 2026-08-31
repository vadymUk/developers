export type Locale = "uk" | "ru" | "pl";

export const locales: Locale[] = ["uk", "ru", "pl"];

export const localeLabels: Record<Locale, string> = {
  uk: "UA",
  ru: "RU",
  pl: "PL",
};

export const localeNames: Record<Locale, string> = {
  uk: "Українська",
  ru: "Русский",
  pl: "Polski",
};

type Offer = { title: string; description: string; features: string[] };
type Step = { title: string; description: string };
type Advantage = { title: string; description: string; indicator: string };
type PortfolioItem = { title: string; category: string; description: string };
type TestimonialItem = { name: string; role: string; text: string };
type FaqItem = { question: string; answer: string };
type ContactChannel = { name: string; description: string; fallback: string };

export type Translations = {
  nav: {
    home: string;
    services: string;
    portfolio: string;
    process: string;
    faq: string;
    contact: string;
  };
  header: {
    ariaHome: string;
    orderSite: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    badge: string;
    title: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    tags: string[];
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    discussCta: string;
    offers: Offer[];
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    stepLabel: string;
    steps: Step[];
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    advantages: Advantage[];
  };
  portfolio: {
    eyebrow: string;
    title: string;
    description: string;
    viewSite: string;
    viewSiteAria: string;
    items: PortfolioItem[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    description: string;
    ratingAria: string;
    items: TestimonialItem[];
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: FaqItem[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    channels: ContactChannel[];
    copyLabel: string;
    copiedLabel: string;
    formTitle: string;
    formDescription: string;
    successMessage: string;
    fields: {
      name: string;
      namePlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      requestType: string;
      requestTypeSite: string;
      requestTypeConsultation: string;
      message: string;
      messagePlaceholder: string;
    };
    submit: string;
    submitting: string;
    genericError: string;
    errors: {
      nameMin: string;
      nameMax: string;
      nameRegex: string;
      phoneMin: string;
      phoneMax: string;
      phoneRegex: string;
      phoneMinDigits: string;
      phoneMaxDigits: string;
      requestType: string;
      messageMax: string;
      website: string;
    };
  };
  cta: {
    eyebrow: string;
    title: string;
    cta: string;
  };
  footer: {
    description: string;
    navHeading: string;
    contactsHeading: string;
    copyright: string;
    tagline: string;
  };
  languageSwitcher: {
    label: string;
  };
};

export const translations: Record<Locale, Translations> = {
  uk: {
    nav: {
      home: "Головна",
      services: "Послуги",
      portfolio: "Мої роботи",
      process: "Як це працює",
      faq: "FAQ",
      contact: "Контакти",
    },
    header: {
      ariaHome: "Головна",
      orderSite: "Замовити сайт",
      openMenu: "Відкрити меню",
      closeMenu: "Закрити меню",
    },
    hero: {
      badge: "Розробка сайтів під ключ",
      title:
        "Сучасні сайти, які допомагають вашому бізнесу виглядати професійно та отримувати більше клієнтів.",
      description:
        "Я створюю Landing Page, інтернет-магазини та невеликі бізнес-сайти під ключ — від ідеї до готового сайту в інтернеті.",
      ctaPrimary: "Замовити сайт",
      ctaSecondary: "Отримати консультацію",
      tags: ["Сучасний дизайн", "Адаптивність", "SEO-структура"],
    },
    services: {
      eyebrow: "Послуги",
      title: "Створюю сайти під ваші задачі",
      description:
        "Рішення для бізнесу, який хоче виглядати професійно, отримувати більше клієнтів і працювати без хаосу.",
      discussCta: "Обговорити формат",
      offers: [
        {
          title: "Landing Page",
          description:
            "Односторінковий сайт для реклами послуги, продукту або бізнесу.",
          features: ["Швидкий старт", "Продаючий акцент", "SEO-структура"],
        },
        {
          title: "Інтернет-магазин",
          description:
            "Невеликий сучасний онлайн-магазин із каталогом товарів та необхідним функціоналом.",
          features: ["Каталог товарів", "Уніфікований UX", "Просте оформлення"],
        },
        {
          title: "Бізнес-сайт",
          description:
            "Професійний сайт компанії, майстра або приватного підприємця.",
          features: ["Візуальна довіра", "Чітка структура", "Під ключ"],
        },
      ],
    },
    process: {
      eyebrow: "Процес",
      title: "Як ми створюємо ваш сайт",
      description:
        "Прозорий процес від першої розмови до готового сайту без зайвої складності.",
      stepLabel: "Крок",
      steps: [
        {
          title: "Розповідаєте про вашу ідею",
          description:
            "Клієнт зв'язується зі мною та розповідає, який сайт йому потрібен.",
        },
        {
          title: "Обговорюємо дизайн і функціонал",
          description:
            "Разом визначаємо структуру, зовнішній вигляд та необхідні функції.",
        },
        {
          title: "Я створюю сайт",
          description: "Розробляю сайт під ваші вимоги.",
        },
        {
          title: "Ви перевіряєте результат",
          description:
            "Готовий сайт розміщується на хостингу, після чого ви отримуєте посилання та перевіряєте результат.",
        },
        {
          title: "Отримуєте готовий сайт",
          description:
            "Якщо все подобається — проводиться розрахунок і ви отримуєте готовий сайт. Якщо потрібні зміни — виконується доопрацювання.",
        },
      ],
    },
    about: {
      eyebrow: "Переваги",
      title: "Чому варто замовити сайт у мене",
      description:
        "Зосереджуюсь на якості, зрозумілому процесі та рішенні, яке відповідає саме вашим задачам.",
      advantages: [
        {
          title: "Сайт під ключ",
          description:
            "Від структури та дизайну до розробки, запуску й базових налаштувань.",
          indicator: "Повний цикл",
        },
        {
          title: "Адаптивний дизайн",
          description:
            "Сайт зручно виглядає та працює на смартфонах, планшетах і десктопах.",
          indicator: "Mobile-first",
        },
        {
          title: "Сучасний технологічний стек",
          description:
            "Актуальні інструменти для швидкої, масштабованої та зручної підтримки.",
          indicator: "Built to grow",
        },
        {
          title: "SEO-friendly структура",
          description:
            "Логічна структура сторінок і контенту, підготовлена для подальшого просування.",
          indicator: "Ready for SEO",
        },
        {
          title: "Підтримка та доопрацювання",
          description:
            "Після запуску можна розвивати сайт далі та додавати потрібні зміни.",
          indicator: "After launch",
        },
      ],
    },
    portfolio: {
      eyebrow: "Портфоліо",
      title: "Мої роботи",
      description: "Приклади сайтів, які я створив для клієнтів.",
      viewSite: "Переглянути сайт",
      viewSiteAria: "Переглянути сайт",
      items: [
        {
          title: "Project 1 Landing Page",
          category: "Landing Page",
          description: "Продаюча односторінкова сторінка для малого бізнесу.",
        },
        {
          title: "Project 2 Online Small Store",
          category: "Інтернет-магазин",
          description:
            "Модульний онлайн-магазин із чіткою навігацією та продажем.",
        },
        {
          title: "Project 3 Business Website",
          category: "Бізнес-сайт",
          description:
            "Професійний корпоративний сайт для підвищення довіри клієнтів.",
        },
      ],
    },
    testimonials: {
      eyebrow: "Відгуки",
      title: "Що кажуть клієнти",
      description:
        "Нижче наведені демонстраційні відгуки, які згодом можна замінити на реальні відгуки ваших клієнтів.",
      ratingAria: "Оцінка",
      items: [
        {
          name: "Андрій",
          role: "Власник бізнесу",
          text: "Дякую за професійний підхід та швидке виконання. Сайт вийшов саме таким, як я хотів. Мені потрібний був простий, але ефективний сайт для мого бізнесу, і я отримав саме це. Рекомендую!",
        },
        {
          name: "Олена",
          role: "Підприємець",
          text: "Мені потрібен був невеликий сайт для реклами моїх послуг. Результат перевершив очікування. Сайт виглядає сучасно, працює швидко і привертає увагу клієнтів. Дуже задоволена співпрацею!",
        },
        {
          name: "Максим",
          role: "Працівник компанії",
          text: "Поза основною працею, займаюся сезонною продажею електросамокатів. Потрібен був сайт для продажу та реклами. Результат вийшов чудовим. Сайт простий у використанні, має приємний дизайн і допомагає залучати нових клієнтів. Дякую за роботу!",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Часті питання",
      description:
        "Відповіді на найпоширеніші запитання про замовлення та виготовлення сайтів.",
      items: [
        {
          question: "Скільки коштує сайт?",
          answer:
            "Ціна залежить від типу сайту, дизайну та необхідного функціоналу. Після обговорення ваших задач я називаю приблизну вартість проєкту. Якщо брати в середньому за базовий Landing Page, ціна стартує від 300$ і може змінюватися залежно від складності та обсягу роботи. За базовий Business Website ціна стартує від 500$, а за базовий Online Store — від 800$. Після обговорення деталей я можу надати точну оцінку вартості.",
        },
        {
          question: "Скільки часу займає створення сайту?",
          answer:
            "Термін залежить від складності сайту, кількості сторінок, функціоналу та загального обсягу роботи. Точніший термін можна визначити після обговорення задач. У середньому, базовий Landing Page може бути готовий за 1-2 дні, Business Website — за 2-5 дні, а Online Small Store — за 1-2 тижнів. Усі терміни залежать від швидкості надання матеріалів та зворотного зв'язку.",
        },
        {
          question: "Як відбувається замовлення сайту?",
          answer:
            "Клієнт зв'язується зі мною, розповідає про свою ідею та необхідний функціонал. Після цього ми обговорюємо майбутній сайт, його структуру, дизайн і наступні кроки.",
        },
        {
          question: "Чи створюєте сайти під ключ?",
          answer:
            "Так. Ви описуєте, що хочете бачити, ми обговорюємо сайт, я називаю приблизну ціну, створюю сайт і розміщую його на хостингу. Ви отримуєте посилання та перевіряєте результат. Якщо все добре, проводиться розрахунок. Якщо потрібні зміни, виконується доопрацювання.",
        },
        {
          question: "Чи буде сайт працювати на телефоні?",
          answer:
            "Так. Сайт адаптується під смартфони, планшети та комп'ютери, щоб ним було зручно користуватися на різних екранах.",
        },
        {
          question: "Чи допомагаєте з розміщенням сайту?",
          answer:
            "Так. Сайт може бути розміщений на хостингу та підключений до домену. Я допоможу підготувати сайт до публікації.",
        },
        {
          question: "Чи можна після створення внести зміни?",
          answer:
            "Так, після створення та запуску можливі доопрацювання: можна змінити контент, додати нові блоки або реалізувати додатковий функціонал.",
        },
        {
          question: "Чи можна замовити тільки консультацію?",
          answer:
            "Так. Можна замовити окрему консультацію щодо структури, дизайну, технологій, функціоналу або подальшого розвитку сайту.",
        },
      ],
    },
    contact: {
      eyebrow: "Контакти",
      title: "Є ідея сайту? Давайте обговоримо.",
      description:
        "Оберіть зручний спосіб зв'язку або залиште заявку через форму.",
      channels: [
        {
          name: "Viber",
          description: "Написати у Viber",
          fallback:
            "На desktop Viber може бути недоступний. Скопіюйте номер і відкрийте його у застосунку.",
        },
        {
          name: "WhatsApp",
          description: "Відкрити WhatsApp chat",
          fallback: "Відкриває чат WhatsApp у новій вкладці.",
        },
        {
          name: "Телефон",
          description: "Зателефонувати",
          fallback:
            "На desktop номер відкриється у доступному телефонному застосунку.",
        },
      ],
      copyLabel: "Скопіювати номер",
      copiedLabel: "Номер скопійовано",
      formTitle: "Залишити заявку",
      formDescription:
        "Розкажіть про задачу, і я зв'яжуся з вами найближчим часом.",
      successMessage:
        "Дякую! Ваше повідомлення успішно відправлено. Я зв'яжуся з вами найближчим часом.",
      fields: {
        name: "Ім'я",
        namePlaceholder: "Ваше ім'я",
        phone: "Номер телефону",
        phonePlaceholder: "+38 (000) 000-00-00",
        requestType: "Тип звернення",
        requestTypeSite: "Хочу замовити сайт",
        requestTypeConsultation: "Хочу отримати консультацію",
        message: "Ваше питання або побажання",
        messagePlaceholder: "Опишіть вашу задачу",
      },
      submit: "Надіслати заявку",
      submitting: "Відправлення...",
      genericError: "Не вдалося відправити заявку. Спробуйте ще раз.",
      errors: {
        nameMin: "Введіть ім'я довжиною щонайменше 2 символи.",
        nameMax: "Ім'я не може бути довшим за 80 символів.",
        nameRegex: "Ім'я може містити лише літери, пробіли та дефіси.",
        phoneMin: "Введіть номер телефону.",
        phoneMax: "Номер телефону занадто довгий.",
        phoneRegex: "Введіть коректний номер телефону.",
        phoneMinDigits: "Номер телефону має містити щонайменше 7 цифр.",
        phoneMaxDigits: "Номер телефону не може містити більше 15 цифр.",
        requestType: "Оберіть тип звернення.",
        messageMax: "Питання не може бути довшим за 2000 символів.",
        website: "Некоректне поле.",
      },
    },
    cta: {
      eyebrow: "Спробуйте",
      title: "Готові запускати сайт, який принесе результат?",
      cta: "Обговорити проєкт",
    },
    footer: {
      description: "Розробка сучасних сайтів та Landing Page під ключ.",
      navHeading: "Навігація",
      contactsHeading: "Контакти",
      copyright: "© 2026 Web Studio. Усі права захищені.",
      tagline: "Створюю сайти, які працюють на результат.",
    },
    languageSwitcher: {
      label: "Мова",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      services: "Услуги",
      portfolio: "Мои работы",
      process: "Как это работает",
      faq: "FAQ",
      contact: "Контакты",
    },
    header: {
      ariaHome: "Главная",
      orderSite: "Заказать сайт",
      openMenu: "Открыть меню",
      closeMenu: "Закрыть меню",
    },
    hero: {
      badge: "Разработка сайтов под ключ",
      title:
        "Современные сайты, которые помогают вашему бизнесу выглядеть профессионально и получать больше клиентов.",
      description:
        "Я создаю Landing Page, интернет-магазины и небольшие бизнес-сайты под ключ — от идеи до готового сайта в интернете.",
      ctaPrimary: "Заказать сайт",
      ctaSecondary: "Получить консультацию",
      tags: ["Современный дизайн", "Адаптивность", "SEO-структура"],
    },
    services: {
      eyebrow: "Услуги",
      title: "Создаю сайты под ваши задачи",
      description:
        "Решения для бизнеса, который хочет выглядеть профессионально, получать больше клиентов и работать без хаоса.",
      discussCta: "Обсудить формат",
      offers: [
        {
          title: "Landing Page",
          description:
            "Одностраничный сайт для рекламы услуги, продукта или бизнеса.",
          features: ["Быстрый старт", "Продающий акцент", "SEO-структура"],
        },
        {
          title: "Интернет-магазин",
          description:
            "Небольшой современный онлайн-магазин с каталогом товаров и необходимым функционалом.",
          features: ["Каталог товаров", "Единый UX", "Простое оформление"],
        },
        {
          title: "Бизнес-сайт",
          description:
            "Профессиональный сайт компании, мастера или частного предпринимателя.",
          features: ["Визуальное доверие", "Чёткая структура", "Под ключ"],
        },
      ],
    },
    process: {
      eyebrow: "Процесс",
      title: "Как мы создаём ваш сайт",
      description:
        "Прозрачный процесс от первого разговора до готового сайта без лишней сложности.",
      stepLabel: "Шаг",
      steps: [
        {
          title: "Рассказываете о вашей идее",
          description:
            "Клиент связывается со мной и рассказывает, какой сайт ему нужен.",
        },
        {
          title: "Обсуждаем дизайн и функционал",
          description:
            "Вместе определяем структуру, внешний вид и необходимые функции.",
        },
        {
          title: "Я создаю сайт",
          description: "Разрабатываю сайт под ваши требования.",
        },
        {
          title: "Вы проверяете результат",
          description:
            "Готовый сайт размещается на хостинге, после чего вы получаете ссылку и проверяете результат.",
        },
        {
          title: "Получаете готовый сайт",
          description:
            "Если всё нравится — производится расчёт и вы получаете готовый сайт. Если нужны изменения — выполняется доработка.",
        },
      ],
    },
    about: {
      eyebrow: "Преимущества",
      title: "Почему стоит заказать сайт у меня",
      description:
        "Сосредотачиваюсь на качестве, понятном процессе и решении, которое отвечает именно вашим задачам.",
      advantages: [
        {
          title: "Сайт под ключ",
          description:
            "От структуры и дизайна до разработки, запуска и базовых настроек.",
          indicator: "Полный цикл",
        },
        {
          title: "Адаптивный дизайн",
          description:
            "Сайт удобно выглядит и работает на смартфонах, планшетах и десктопах.",
          indicator: "Mobile-first",
        },
        {
          title: "Современный технологический стек",
          description:
            "Актуальные инструменты для быстрой, масштабируемой и удобной поддержки.",
          indicator: "Built to grow",
        },
        {
          title: "SEO-friendly структура",
          description:
            "Логичная структура страниц и контента, подготовленная для дальнейшего продвижения.",
          indicator: "Ready for SEO",
        },
        {
          title: "Поддержка и доработка",
          description:
            "После запуска можно развивать сайт дальше и добавлять нужные изменения.",
          indicator: "After launch",
        },
      ],
    },
    portfolio: {
      eyebrow: "Портфолио",
      title: "Мои работы",
      description: "Примеры сайтов, которые я создал для клиентов.",
      viewSite: "Посмотреть сайт",
      viewSiteAria: "Посмотреть сайт",
      items: [
        {
          title: "Project 1 Landing Page",
          category: "Landing Page",
          description: "Продающая одностраничная страница для малого бизнеса.",
        },
        {
          title: "Project 2 Online Small Store",
          category: "Интернет-магазин",
          description:
            "Модульный онлайн-магазин с чёткой навигацией и продажами.",
        },
        {
          title: "Project 3 Business Website",
          category: "Бизнес-сайт",
          description:
            "Профессиональный корпоративный сайт для повышения доверия клиентов.",
        },
      ],
    },
    testimonials: {
      eyebrow: "Отзывы",
      title: "Что говорят клиенты",
      description:
        "Ниже приведены демонстрационные отзывы, которые впоследствии можно заменить на реальные отзывы ваших клиентов.",
      ratingAria: "Оценка",
      items: [
        {
          name: "Андрей",
          role: "Владелец бизнеса",
          text: "Спасибо за профессиональный подход и быстрое выполнение. Сайт получился именно таким, как я хотел. Мне нужен был простой, но эффективный сайт для моего бизнеса, и я получил именно это. Рекомендую!",
        },
        {
          name: "Елена",
          role: "Предприниматель",
          text: "Мне нужен был небольшой сайт для рекламы моих услуг. Результат превзошёл ожидания. Сайт выглядит современно, работает быстро и привлекает внимание клиентов. Очень довольна сотрудничеством!",
        },
        {
          name: "Максим",
          role: "Сотрудник компании",
          text: "Помимо основной работы, занимаюсь сезонной продажей электросамокатов. Нужен был сайт для продажи и рекламы. Результат получился отличным. Сайт прост в использовании, имеет приятный дизайн и помогает привлекать новых клиентов. Спасибо за работу!",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Частые вопросы",
      description:
        "Ответы на самые распространённые вопросы о заказе и создании сайтов.",
      items: [
        {
          question: "Сколько стоит сайт?",
          answer:
            "Цена зависит от типа сайта, дизайна и необходимого функционала. После обсуждения ваших задач я называю примерную стоимость проекта. Если брать в среднем за базовый Landing Page, цена стартует от 300$ и может меняться в зависимости от сложности и объёма работы. За базовый Business Website цена стартует от 500$, а за базовый Online Store — от 800$. После обсуждения деталей я могу дать точную оценку стоимости.",
        },
        {
          question: "Сколько времени занимает создание сайта?",
          answer:
            "Срок зависит от сложности сайта, количества страниц, функционала и общего объёма работы. Более точный срок можно определить после обсуждения задач. В среднем базовый Landing Page может быть готов за 1-2 дня, Business Website — за 2-5 дней, а Online Small Store — за 1-2 недели. Все сроки зависят от скорости предоставления материалов и обратной связи.",
        },
        {
          question: "Как происходит заказ сайта?",
          answer:
            "Клиент связывается со мной, рассказывает о своей идее и необходимом функционале. После этого мы обсуждаем будущий сайт, его структуру, дизайн и следующие шаги.",
        },
        {
          question: "Создаёте ли сайты под ключ?",
          answer:
            "Да. Вы описываете, что хотите видеть, мы обсуждаем сайт, я называю примерную цену, создаю сайт и размещаю его на хостинге. Вы получаете ссылку и проверяете результат. Если всё хорошо, производится расчёт. Если нужны изменения, выполняется доработка.",
        },
        {
          question: "Будет ли сайт работать на телефоне?",
          answer:
            "Да. Сайт адаптируется под смартфоны, планшеты и компьютеры, чтобы им было удобно пользоваться на разных экранах.",
        },
        {
          question: "Помогаете ли с размещением сайта?",
          answer:
            "Да. Сайт может быть размещён на хостинге и подключён к домену. Я помогу подготовить сайт к публикации.",
        },
        {
          question: "Можно ли после создания внести изменения?",
          answer:
            "Да, после создания и запуска возможны доработки: можно изменить контент, добавить новые блоки или реализовать дополнительный функционал.",
        },
        {
          question: "Можно ли заказать только консультацию?",
          answer:
            "Да. Можно заказать отдельную консультацию по структуре, дизайну, технологиям, функционалу или дальнейшему развитию сайта.",
        },
      ],
    },
    contact: {
      eyebrow: "Контакты",
      title: "Есть идея сайта? Давайте обсудим.",
      description:
        "Выберите удобный способ связи или оставьте заявку через форму.",
      channels: [
        {
          name: "Viber",
          description: "Написать в Viber",
          fallback:
            "На desktop Viber может быть недоступен. Скопируйте номер и откройте его в приложении.",
        },
        {
          name: "WhatsApp",
          description: "Открыть WhatsApp chat",
          fallback: "Открывает чат WhatsApp в новой вкладке.",
        },
        {
          name: "Телефон",
          description: "Позвонить",
          fallback:
            "На desktop номер откроется в доступном телефонном приложении.",
        },
      ],
      copyLabel: "Скопировать номер",
      copiedLabel: "Номер скопирован",
      formTitle: "Оставить заявку",
      formDescription:
        "Расскажите о задаче, и я свяжусь с вами в ближайшее время.",
      successMessage:
        "Спасибо! Ваше сообщение успешно отправлено. Я свяжусь с вами в ближайшее время.",
      fields: {
        name: "Имя",
        namePlaceholder: "Ваше имя",
        phone: "Номер телефона",
        phonePlaceholder: "+38 (000) 000-00-00",
        requestType: "Тип обращения",
        requestTypeSite: "Хочу заказать сайт",
        requestTypeConsultation: "Хочу получить консультацию",
        message: "Ваш вопрос или пожелание",
        messagePlaceholder: "Опишите вашу задачу",
      },
      submit: "Отправить заявку",
      submitting: "Отправка...",
      genericError: "Не удалось отправить заявку. Попробуйте ещё раз.",
      errors: {
        nameMin: "Введите имя длиной не менее 2 символов.",
        nameMax: "Имя не может быть длиннее 80 символов.",
        nameRegex: "Имя может содержать только буквы, пробелы и дефисы.",
        phoneMin: "Введите номер телефона.",
        phoneMax: "Номер телефона слишком длинный.",
        phoneRegex: "Введите корректный номер телефона.",
        phoneMinDigits: "Номер телефона должен содержать не менее 7 цифр.",
        phoneMaxDigits: "Номер телефона не может содержать более 15 цифр.",
        requestType: "Выберите тип обращения.",
        messageMax: "Вопрос не может быть длиннее 2000 символов.",
        website: "Некорректное поле.",
      },
    },
    cta: {
      eyebrow: "Попробуйте",
      title: "Готовы запускать сайт, который принесёт результат?",
      cta: "Обсудить проект",
    },
    footer: {
      description: "Разработка современных сайтов и Landing Page под ключ.",
      navHeading: "Навигация",
      contactsHeading: "Контакты",
      copyright: "© 2026 Web Studio. Все права защищены.",
      tagline: "Создаю сайты, которые работают на результат.",
    },
    languageSwitcher: {
      label: "Язык",
    },
  },
  pl: {
    nav: {
      home: "Strona główna",
      services: "Usługi",
      portfolio: "Moje prace",
      process: "Jak to działa",
      faq: "FAQ",
      contact: "Kontakt",
    },
    header: {
      ariaHome: "Strona główna",
      orderSite: "Zamów stronę",
      openMenu: "Otwórz menu",
      closeMenu: "Zamknij menu",
    },
    hero: {
      badge: "Tworzenie stron internetowych pod klucz",
      title:
        "Nowoczesne strony internetowe, które pomagają Twojej firmie wyglądać profesjonalnie i zdobywać więcej klientów.",
      description:
        "Tworzę strony typu Landing Page, sklepy internetowe oraz niewielkie strony firmowe pod klucz — od pomysłu do gotowej strony w internecie.",
      ctaPrimary: "Zamów stronę",
      ctaSecondary: "Umów konsultację",
      tags: ["Nowoczesny design", "Responsywność", "Struktura SEO"],
    },
    services: {
      eyebrow: "Usługi",
      title: "Tworzę strony dopasowane do Twoich potrzeb",
      description:
        "Rozwiązania dla firm, które chcą wyglądać profesjonalnie, zdobywać więcej klientów i działać bez chaosu.",
      discussCta: "Omówić format",
      offers: [
        {
          title: "Landing Page",
          description:
            "Jednostronicowa strona reklamująca usługę, produkt lub firmę.",
          features: ["Szybki start", "Nacisk na sprzedaż", "Struktura SEO"],
        },
        {
          title: "Sklep internetowy",
          description:
            "Niewielki, nowoczesny sklep internetowy z katalogiem produktów i niezbędnymi funkcjami.",
          features: ["Katalog produktów", "Spójny UX", "Proste zamawianie"],
        },
        {
          title: "Strona firmowa",
          description:
            "Profesjonalna strona firmy, rzemieślnika lub przedsiębiorcy.",
          features: [
            "Wizerunek zaufania",
            "Przejrzysta struktura",
            "Pod klucz",
          ],
        },
      ],
    },
    process: {
      eyebrow: "Proces",
      title: "Jak tworzymy Twoją stronę",
      description:
        "Przejrzysty proces od pierwszej rozmowy do gotowej strony, bez zbędnych komplikacji.",
      stepLabel: "Krok",
      steps: [
        {
          title: "Opowiadasz o swoim pomyśle",
          description:
            "Klient kontaktuje się ze mną i opowiada, jakiej strony potrzebuje.",
        },
        {
          title: "Omawiamy design i funkcje",
          description:
            "Wspólnie ustalamy strukturę, wygląd i niezbędne funkcje.",
        },
        {
          title: "Tworzę stronę",
          description: "Tworzę stronę zgodnie z Twoimi wymaganiami.",
        },
        {
          title: "Sprawdzasz rezultat",
          description:
            "Gotowa strona jest publikowana na hostingu, po czym otrzymujesz link i sprawdzasz efekt.",
        },
        {
          title: "Otrzymujesz gotową stronę",
          description:
            "Jeśli wszystko się podoba — następuje rozliczenie i otrzymujesz gotową stronę. Jeśli potrzebne są zmiany — wprowadzam poprawki.",
        },
      ],
    },
    about: {
      eyebrow: "Zalety",
      title: "Dlaczego warto zamówić stronę u mnie",
      description:
        "Skupiam się na jakości, przejrzystym procesie i rozwiązaniu dopasowanym właśnie do Twoich potrzeb.",
      advantages: [
        {
          title: "Strona pod klucz",
          description:
            "Od struktury i designu po programowanie, wdrożenie i podstawowe ustawienia.",
          indicator: "Pełny cykl",
        },
        {
          title: "Responsywny design",
          description:
            "Strona wygodnie wygląda i działa na smartfonach, tabletach i komputerach.",
          indicator: "Mobile-first",
        },
        {
          title: "Nowoczesny stos technologiczny",
          description:
            "Aktualne narzędzia zapewniające szybkie, skalowalne i wygodne wsparcie.",
          indicator: "Built to grow",
        },
        {
          title: "Struktura przyjazna SEO",
          description:
            "Logiczna struktura stron i treści, przygotowana do dalszego pozycjonowania.",
          indicator: "Ready for SEO",
        },
        {
          title: "Wsparcie i rozwój",
          description:
            "Po uruchomieniu można dalej rozwijać stronę i wprowadzać potrzebne zmiany.",
          indicator: "After launch",
        },
      ],
    },
    portfolio: {
      eyebrow: "Portfolio",
      title: "Moje prace",
      description: "Przykłady stron, które stworzyłem dla klientów.",
      viewSite: "Zobacz stronę",
      viewSiteAria: "Zobacz stronę",
      items: [
        {
          title: "Project 1 Landing Page",
          category: "Landing Page",
          description: "Sprzedażowa strona jednostronicowa dla małej firmy.",
        },
        {
          title: "Project 2 Online Small Store",
          category: "Sklep internetowy",
          description:
            "Modułowy sklep internetowy z przejrzystą nawigacją i sprzedażą.",
        },
        {
          title: "Project 3 Business Website",
          category: "Strona firmowa",
          description:
            "Profesjonalna strona korporacyjna zwiększająca zaufanie klientów.",
        },
      ],
    },
    testimonials: {
      eyebrow: "Opinie",
      title: "Co mówią klienci",
      description:
        "Poniżej znajdują się przykładowe opinie, które później można zastąpić prawdziwymi opiniami Twoich klientów.",
      ratingAria: "Ocena",
      items: [
        {
          name: "Andrzej",
          role: "Właściciel firmy",
          text: "Dziękuję za profesjonalne podejście i szybką realizację. Strona wyszła dokładnie taka, jakiej chciałem. Potrzebowałem prostej, ale skutecznej strony dla mojego biznesu i dokładnie to otrzymałem. Polecam!",
        },
        {
          name: "Helena",
          role: "Przedsiębiorca",
          text: "Potrzebowałam niewielkiej strony do promocji moich usług. Rezultat przerósł oczekiwania. Strona wygląda nowocześnie, działa szybko i przyciąga uwagę klientów. Jestem bardzo zadowolona ze współpracy!",
        },
        {
          name: "Maksym",
          role: "Pracownik firmy",
          text: "Poza główną pracą zajmuję się sezonową sprzedażą hulajnóg elektrycznych. Potrzebowałem strony do sprzedaży i reklamy. Efekt wyszedł świetnie. Strona jest prosta w obsłudze, ma przyjemny design i pomaga pozyskiwać nowych klientów. Dziękuję za pracę!",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Najczęstsze pytania",
      description:
        "Odpowiedzi na najczęstsze pytania dotyczące zamawiania i tworzenia stron.",
      items: [
        {
          question: "Ile kosztuje strona?",
          answer:
            "Cena zależy od typu strony, designu i potrzebnych funkcji. Po omówieniu Twoich potrzeb podaję przybliżony koszt projektu. Średnio podstawowy Landing Page zaczyna się od 300$ i może się zmieniać w zależności od złożoności i zakresu prac. Podstawowa Business Website zaczyna się od 500$, a podstawowy Online Store — od 800$. Po omówieniu szczegółów mogę podać dokładną wycenę.",
        },
        {
          question: "Ile czasu zajmuje stworzenie strony?",
          answer:
            "Czas zależy od złożoności strony, liczby podstron, funkcjonalności i ogólnego zakresu prac. Dokładniejszy termin można ustalić po omówieniu zadań. Średnio podstawowy Landing Page może być gotowy w 1-2 dni, Business Website — w 2-5 dni, a Online Small Store — w 1-2 tygodnie. Wszystkie terminy zależą od szybkości dostarczenia materiałów i informacji zwrotnej.",
        },
        {
          question: "Jak wygląda proces zamawiania strony?",
          answer:
            "Klient kontaktuje się ze mną i opowiada o swoim pomyśle oraz potrzebnych funkcjach. Następnie omawiamy przyszłą stronę, jej strukturę, design i kolejne kroki.",
        },
        {
          question: "Czy tworzysz strony pod klucz?",
          answer:
            "Tak. Opisujesz, co chcesz zobaczyć, omawiamy stronę, podaję przybliżoną cenę, tworzę stronę i publikuję ją na hostingu. Otrzymujesz link i sprawdzasz efekt. Jeśli wszystko jest w porządku, następuje rozliczenie. Jeśli potrzebne są zmiany, wprowadzam poprawki.",
        },
        {
          question: "Czy strona będzie działać na telefonie?",
          answer:
            "Tak. Strona dostosowuje się do smartfonów, tabletów i komputerów, aby wygodnie korzystać z niej na różnych ekranach.",
        },
        {
          question: "Czy pomagasz z hostingiem strony?",
          answer:
            "Tak. Strona może zostać opublikowana na hostingu i podłączona do domeny. Pomogę przygotować stronę do publikacji.",
        },
        {
          question: "Czy po utworzeniu można wprowadzać zmiany?",
          answer:
            "Tak, po utworzeniu i uruchomieniu możliwe są poprawki: można zmienić treść, dodać nowe sekcje lub wprowadzić dodatkowe funkcje.",
        },
        {
          question: "Czy można zamówić samą konsultację?",
          answer:
            "Tak. Można zamówić osobną konsultację dotyczącą struktury, designu, technologii, funkcjonalności lub dalszego rozwoju strony.",
        },
      ],
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Masz pomysł na stronę? Porozmawiajmy.",
      description:
        "Wybierz wygodny sposób kontaktu lub zostaw zgłoszenie przez formularz.",
      channels: [
        {
          name: "Viber",
          description: "Napisz na Viberze",
          fallback:
            "Na komputerze Viber może być niedostępny. Skopiuj numer i otwórz go w aplikacji.",
        },
        {
          name: "WhatsApp",
          description: "Otwórz czat WhatsApp",
          fallback: "Otwiera czat WhatsApp w nowej karcie.",
        },
        {
          name: "Telefon",
          description: "Zadzwoń",
          fallback:
            "Na komputerze numer otworzy się w dostępnej aplikacji telefonicznej.",
        },
      ],
      copyLabel: "Skopiuj numer",
      copiedLabel: "Numer skopiowany",
      formTitle: "Zostaw zgłoszenie",
      formDescription:
        "Opowiedz o swoim zadaniu, a ja skontaktuję się z Tobą najszybciej jak to możliwe.",
      successMessage:
        "Dziękuję! Twoja wiadomość została wysłana. Skontaktuję się z Tobą najszybciej jak to możliwe.",
      fields: {
        name: "Imię",
        namePlaceholder: "Twoje imię",
        phone: "Numer telefonu",
        phonePlaceholder: "+48 000 000 000",
        requestType: "Rodzaj zgłoszenia",
        requestTypeSite: "Chcę zamówić stronę",
        requestTypeConsultation: "Chcę uzyskać konsultację",
        message: "Twoje pytanie lub uwagi",
        messagePlaceholder: "Opisz swoje zadanie",
      },
      submit: "Wyślij zgłoszenie",
      submitting: "Wysyłanie...",
      genericError: "Nie udało się wysłać zgłoszenia. Spróbuj ponownie.",
      errors: {
        nameMin: "Wpisz imię o długości co najmniej 2 znaków.",
        nameMax: "Imię nie może być dłuższe niż 80 znaków.",
        nameRegex: "Imię może zawierać tylko litery, spacje i myślniki.",
        phoneMin: "Podaj numer telefonu.",
        phoneMax: "Numer telefonu jest za długi.",
        phoneRegex: "Podaj poprawny numer telefonu.",
        phoneMinDigits: "Numer telefonu musi zawierać co najmniej 7 cyfr.",
        phoneMaxDigits: "Numer telefonu nie może zawierać więcej niż 15 cyfr.",
        requestType: "Wybierz rodzaj zgłoszenia.",
        messageMax: "Pytanie nie może być dłuższe niż 2000 znaków.",
        website: "Nieprawidłowe pole.",
      },
    },
    cta: {
      eyebrow: "Wypróbuj",
      title: "Gotowy uruchomić stronę, która przyniesie efekty?",
      cta: "Omów projekt",
    },
    footer: {
      description: "Tworzenie nowoczesnych stron i Landing Page pod klucz.",
      navHeading: "Nawigacja",
      contactsHeading: "Kontakt",
      copyright: "© 2026 Web Studio. Wszelkie prawa zastrzeżone.",
      tagline: "Tworzę strony, które przynoszą efekty.",
    },
    languageSwitcher: {
      label: "Język",
    },
  },
};
