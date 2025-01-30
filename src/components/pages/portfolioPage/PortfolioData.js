const portfolioData = [
    {
        id: 0,
        src: require("../../../assets/img/projects/Katherine.jpg"),
        alt: "Katherine-project",
        title: {
            en: "Katherine Chafer",
            ru: "Кэтрин Чейфер",
            uk: "Кетрін Чейфер"
        },
        description: {
            en: "The girl dreams of becoming a cosmetologist, and I gave her the opportunity to present herself in all her glory to her future employer through a resume website.",
            ru: "Девушка мечтает стать косметологом, и я дал ей возможность представить себя в лучшем свете для будущего работодателя через сайт резюме.",
            uk: "Дівчина мріє стати косметологом, і я дав їй можливість представити себе у всій красі для майбутнього роботодавця через сайт резюме."
        },
        linkGit: "https://github.com/Grimdvl/Katherine",
        link: "https://grimdvl.github.io/Katherine/"
    },
    {
        id: 1,
        src: require("../../../assets/img/projects/uber.jpg"),
        alt: "uber-project",
        title: {
            en: "Uber",
            ru: "Убер",
            uk: "Убер"
        },
        description: {
            en: "One of the largest transportation and delivery companies in the world. On this project, I honed my skills working with the Bootstrap grid and also learned about various preprocessors like Less and Sass.",
            ru: "Одна из крупнейших транспортных и доставочных компаний в мире. В этом проекте я оттачивал навыки работы с сеткой Bootstrap и также изучал различные препроцессоры, такие как Less и Sass.",
            uk: "Одна з найбільших транспортних і доставкових компаній у світі. У цьому проекті я вдосконалював навички роботи з сіткою Bootstrap і також вивчав різні препроцесори, такі як Less і Sass."
        },
        linkGit: "https://github.com/Grimdvl/uber",
        link: "https://grimdvl.github.io/uber/src/"
    },
    {
        id: 2,
        src: require("../../../assets/img/projects/pulse.jpg"),
        alt: "pulse-project",
        title: {
            en: "Pulse",
            ru: "Пульс",
            uk: "Пульс"
        },
        description: {
            en: "This project is related to the sale of smart sports bracelets measuring heart rate. It's my first project where I started incorporating the JavaScript programming language. I also learned how to integrate third-party libraries into the code, such as jQuery and Animate.css.",
            ru: "Этот проект связан с продажей умных спортивных браслетов для измерения пульса. Это мой первый проект, в котором я начал использовать язык программирования JavaScript. Я также научился интегрировать сторонние библиотеки в код, такие как jQuery и Animate.css.",
            uk: "Цей проект пов'язаний з продажем розумних спортивних браслетів для вимірювання пульсу. Це мій перший проект, у якому я почав використовувати мову програмування JavaScript. Я також навчився інтегрувати сторонні бібліотеки в код, такі як jQuery та Animate.css."
        },
        linkGit: "https://github.com/Grimdvl/pulse",
        link: "https://grimdvl.github.io/pulse/dist/"
    },
    {
        id: 3,
        src: require("../../../assets/img/projects/food.jpg"),
        alt: "food-project",
        title: {
            en: "Food",
            ru: "Еда",
            uk: "Їжа"
        },
        description: {
            en: "This project is related to healthy eating. This was my first advanced JavaScript project, which gave me a good start in further exploring this programming language.",
            ru: "Этот проект связан с здоровым питанием. Это был мой первый продвинутый проект на JavaScript, который дал мне хороший старт для дальнейшего изучения этого языка программирования.",
            uk: "Цей проект пов'язаний зі здоровим харчуванням. Це був мій перший просунутий проект на JavaScript, який дав мені хороший старт для подальшого вивчення цієї мови програмування."
        },
        linkGit: "https://github.com/Grimdvl/food",
        link: "https://grimdvl.github.io/food/"
    },
    {
        id: 4,
        src: require("../../../assets/img/projects/wordpress.jpg"),
        alt: "WordPress-project",
        title: {
            en: "WordPress",
            ru: "WordPress",
            uk: "WordPress"
        },
        description: {
            en: "The largest CMS in the world, used on more than 80% of websites. This is my first project related to learning web development, specifically HTML markup language and CSS styling language.",
            ru: "Самая крупная CMS в мире, используемая более чем на 80% сайтов. Это мой первый проект, связанный с обучением веб-разработке, в частности с языками разметки HTML и стилизации CSS.",
            uk: "Найбільша CMS у світі, що використовується на більш ніж 80% вебсайтів. Це мій перший проект, пов'язаний з вивченням веб-розробки, зокрема з мовами розмітки HTML і стилізації CSS."
        },
        linkGit: "https://github.com/Grimdvl/wordpress",
        link: "https://grimdvl.github.io/wordpress/"
    },
    {
        id: 5,
        src: require("../../../assets/img/projects/balcony.jpg"),
        alt: "balcony-project",
        title: {
            en: "Balcony",
            ru: "Балкон",
            uk: "Балкон"
        },
        description: {
            en: "This is a project for measuring and selling balconies and windows. It's already my first serious project where working on it involved applying all the knowledge I had gained up to that point.",
            ru: "Это проект по измерению и продаже балконов и окон. Это уже мой первый серьезный проект, в котором я применил все знания, полученные к тому моменту.",
            uk: "Це проект для вимірювання та продажу балконів і вікон. Це вже мій перший серйозний проект, в якому я застосував усі знання, отримані до того часу."
        },
        linkGit: "https://github.com/Grimdvl/balcony",
        link: "https://grimdvl.github.io/balcony/dist/"
    },
    {
        id: 6,
        src: require("../../../assets/img/projects/art.jpg"),
        alt: "art-project",
        title: {
            en: "Art",
            ru: "Искусство",
            uk: "Мистецтво"
        },
        description: {
            en: "A website for drawing and selling paintings. I reinforced my JavaScript skills and utilized technologies such as Webpack, Gulp task runner, worked with the SCSS preprocessor, as well as a local JSON database.",
            ru: "Сайт для рисования и продажи картин. Я укрепил свои навыки JavaScript и использовал такие технологии, как Webpack, Gulp, работал с препроцессором SCSS, а также с локальной базой данных JSON.",
            uk: "Сайт для малювання та продажу картин. Я зміцнив свої навички JavaScript і використовував такі технології, як Webpack, Gulp, працював з препроцесором SCSS, а також з локальною базою даних JSON."
        },
        linkGit: "https://github.com/Grimdvl/art",
        link: "https://grimdvl.github.io/art/dist/"
    },
    {
        id: 7,
        src: require("../../../assets/img/projects/loan.jpg"),
        alt: "loan-project",
        title: {
            en: "Loan",
            ru: "Кредит",
            uk: "Кредит"
        },
        description: {
            en: "A website for legal consultations. I learned to use third-party APIs such as YouTube and also mastered the construction of a modular code structure.",
            ru: "Сайт для юридических консультаций. Я научился использовать сторонние API, такие как YouTube, а также освоил построение модульной структуры кода.",
            uk: "Сайт для юридичних консультацій. Я навчився використовувати сторонні API, такі як YouTube, а також освоїв побудову модульної структури коду."
        },
        linkGit: "https://github.com/Grimdvl/loan",
        link: "https://grimdvl.github.io/loan/dist/"
    },
    {
        id: 8,
        src: require("../../../assets/img/projects/pokemons.png"),
        alt: "pokemons-project",
        title: {
            en: "Pokemons",
            ru: "Покемоны",
            uk: "Покемони"
        },
        description: {
            en: "A foundational frontend course from Master's Academy, a major Canadian IT company. In this course, I gained insights from product company developers who had 3-5 years of experience in development.",
            ru: "Основной курс по фронтенду от Master's Academy, крупной канадской IT-компании. В этом курсе я получил ценные знания от разработчиков продуктовых компаний с опытом работы от 3 до 5 лет.",
            uk: "Основний курс з фронтенду від Master's Academy, великої канадської ІТ-компанії. На цьому курсі я отримав цінні знання від розробників продуктових компаній з досвідом роботи від 3 до 5 років."
        },
        linkGit: "https://github.com/Grimdvl/MA",
        link: "https://grimdvl.github.io/MA/homeworks/artem.sokur_Grimdvl/PokemonProject/index.html"
    },
    {
        id: 9,
        src: require("../../../assets/img/projects/ma.png"),
        alt: "ma-project",
        title: {
            en: "MA",
            ru: "MA",
            uk: "MA"
        },
        description: {
            en: "Masters Academy...",
            ru: "Masters Academy...",
            uk: "Masters Academy..."
        },
        linkGit: "https://github.com/Grimdvl/fe-react-2024",
        link: "https://grimdvl.github.io/fe-react-2024/"
    },
    {
        id: 10,
        src: require("../../../assets/img/projects/marvel.png"),
        alt: "marvel-project",
        title: {
            en: "Marvel",
            ru: "Марвел",
            uk: "Марвел"
        },
        description: {
            en: "Marvel...",
            ru: "Марвел...",
            uk: "Марвел..."
        },
        linkGit: "https://github.com/Grimdvl/marvel-hooks",
        link: "https://grimdvl.github.io/marvel-hooks/"
    },
    {
        id: 11,
        src: require("../../../assets/img/projects/coffee.jpg"),
        alt: "coffee-project",
        title: {
            en: "Coffee",
            ru: "Кофе",
            uk: "Кава"
        },
        description: {
            en: "Coffee...",
            ru: "Кофе...",
            uk: "Кава..."
        },
        linkGit: "https://github.com/Grimdvl/coffee",
        link: "https://grimdvl.github.io/coffee/"
    },
    {
        id: 12,
        // src: require("../../../assets/img/projects/childhood.jpg"),
        alt: "childhood-project",
        title: {
            en: "Childhood",
            ru: "Детство",
            uk: "Дитинство"
        },
        description: {
            en: "Soon...",
            ru: "Скоро...",
            uk: "Скоро..."
        },
        linkGit: "https://github.com/Grimdvl/childhood",
        link: "https://grimdvl.github.io/childhood/"
    },
    {
        id: 13,
        // src: require("../../../assets/img/projects/ts.jpg"),
        alt: "ts-project",
        title: {
            en: "TS",
            ru: "TS",
            uk: "TS"
        },
        description: {
            en: "Type Script...",
            ru: "Type Script...",
            uk: "Type Script..."
        },
        linkGit: "https://github.com/Grimdvl/TS",
        link: "https://grimdvl.github.io/TS/"
    },

];

export default portfolioData;
