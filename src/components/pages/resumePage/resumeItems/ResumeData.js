import university from '../../../../assets/icons/experience/university.svg';
import courses from '../../../../assets/icons/experience/courses.svg';
import developer from '../../../../assets/icons/experience/developer.svg';

export const translations = {
    resumeTitle: {
        EN: "Resume",
        UA: "Резюме",
        RU: "Резюме"
    },
    resumeSubtitle: {
        EN: "Here's how I'll be helpful for you",
        UA: "Ось як я можу бути корисним для вас",
        RU: "Вот как я могу быть полезен для вас"
    },
    experienceTitle: {
        EN: "Experience",
        UA: "Досвід",
        RU: "Опыт"
    }
};

const resumeData = [
    {
        id: 1,
        company: {
            EN: "Udemy",
            UA: "Udemy",
            RU: "Udemy"
        },
        src: university,
        alt: 'university',
        role: {
            EN: "Web development | JavaScript + React | WordPress - 'courses'",
            UA: "Веб-розробка | JavaScript + React | WordPress - 'курси'",
            RU: "Веб-разработка | JavaScript + React | WordPress - 'курсы'"
        },
        description: {
            EN: "I completed courses in web development where I studied HTML, CSS, JavaScript programming language, as well as the basics of WordPress development and the React framework.",
            UA: "Я пройшов курси з веб-розробки, де вивчав HTML, CSS, мову програмування JavaScript, а також основи WordPress та React.",
            RU: "Я прошел курсы по веб-разработке, где изучал HTML, CSS, язык программирования JavaScript, а также основы WordPress и React."
        }
    },
    {
        id: 2,
        company: {
            EN: "Master's Academy",
            UA: "Master's Academy",
            RU: "Master's Academy"
        },
        src: courses,
        alt: 'courses',
        role: {
            EN: "Front-End for beginners | Intro to React - 'courses'",
            UA: "Front-End для початківців | Вступ до React - 'курси'",
            RU: "Front-End для начинающих | Введение в React - 'курсы'"
        },
        description: {
            EN: "The Masters Academy, a subsidiary of IT company Master of Code, operates in the Canadian market to educate the younger generation.",
            UA: "Masters Academy, дочірня компанія IT-компанії Master of Code, працює на канадському ринку, навчаючи молоде покоління.",
            RU: "Masters Academy, дочерняя компания IT-компании Master of Code, работает на канадском рынке, обучая молодое поколение."
        }
    },
    {
        id: 3,
        company: {
            EN: "Freelancing",
            UA: "Фриланс",
            RU: "Фриланс"
        },
        src: developer,
        alt: 'developer',
        role: {
            EN: "Front-End | WordPress layout - 'development'",
            UA: "Front-End | Верстка WordPress - 'розробка'",
            RU: "Front-End | Верстка WordPress - 'разработка'"
        },
        description: {
            EN: "Developing landing pages and e-commerce websites. I specialize in creating bespoke websites and handling WordPress layout development.",
            UA: "Розробка лендінгів та інтернет-магазинів. Я спеціалізуюся на створенні унікальних сайтів та верстці для WordPress.",
            RU: "Разработка лендингов и интернет-магазинов. Я специализируюсь на создании уникальных сайтов и верстке для WordPress."
        }
    }
];

export default resumeData;
