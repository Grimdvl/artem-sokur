
import SkillsCards from './skillsCards/SkillsCards';
import SkillsRatings from './skillsRatings/SkillsRatings';

import { CSSTransition } from 'react-transition-group';

const SkillsPage = ({isAnimated, isDarkMode}) => {
    return (
        <div id="skills" className="section-placeholder">
            <CSSTransition
                in={isAnimated}
                timeout={1000}
                classNames="animated">
                <section className="skills">
                    <div className="skills-head">
                        <h2 className="skills-title fade-in-down">Skills</h2>
                        <div className="skills-subtitle fade-in-right">The tools that I use</div>
                        <div className="skills-divider divider fade-in-up"></div>
                    </div>

                    <SkillsCards
                        key={isDarkMode ? "dark-mode-skills" : "light-mode-skills"}
                        isAnimated={isAnimated}
                        isDarkMode={isDarkMode}/>

                    <SkillsRatings
                        key={isDarkMode ? "dark-mode-ratings" : "light-mode-ratings"}
                        isAnimated={isAnimated}
                        isDarkMode={isDarkMode}/>
                </section>
            </CSSTransition>
        </div>
    );
}

export default SkillsPage;