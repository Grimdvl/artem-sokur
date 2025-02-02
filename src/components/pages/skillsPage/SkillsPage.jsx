import SkillsCards from './skillsCards/SkillsCards';
import SkillsRatings from './skillsRatings/SkillsRatings';
import { CSSTransition } from 'react-transition-group';

const translations = {
    EN: {
        title: "Skills",
        subtitle: "The tools that I use"
    },
    UA: {
        title: "Навички",
        subtitle: "Інструменти, які я використовую"
    },
    RU: {
        title: "Навыки",
        subtitle: "Инструменты, которые я использую"
    }
};

const SkillsPage = ({ isAnimated, isDarkMode, activeLanguage }) => {
    return (
        <CSSTransition in={isAnimated} timeout={1000} classNames="animated">
            <section className="skills" id="skills">
                <div className="skills-head">
                    <h2 className="skills-title fade-in-down">
                        {translations[activeLanguage]?.title || translations.EN.title}
                    </h2>
                    <div className="skills-subtitle fade-in-right">
                        {translations[activeLanguage]?.subtitle || translations.EN.subtitle}
                    </div>
                    <div className="skills-divider divider fade-in-up"></div>
                </div>

                <SkillsCards
                    key={isDarkMode ? "dark-mode-skills" : "light-mode-skills"}
                    isAnimated={isAnimated}
                    isDarkMode={isDarkMode}
                    activeLanguage={activeLanguage}
                />

                <SkillsRatings
                    key={isDarkMode ? "dark-mode-ratings" : "light-mode-ratings"}
                    isAnimated={isAnimated}
                    isDarkMode={isDarkMode}
                    activeLanguage={activeLanguage}
                />
            </section>
        </CSSTransition>
    );
};

export default SkillsPage;
