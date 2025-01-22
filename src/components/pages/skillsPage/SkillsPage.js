
import SkillsCards from './skillsCards/SkillsCards';
import SkillsRatings from './skillsRatings/SkillsRatings';

import { CSSTransition } from 'react-transition-group';

const SkillsPage = ({isAnimated}) => {
    return (
        <div id="skills" className="section-placeholder">
            <CSSTransition
                in={isAnimated}
                timeout={1000}
                classNames="animated"
                mountOnEnter
                unmountOnExit>
                <section className="skills">
                    <div className="skills-head">
                        <h2 className="skills-title fade-in-down">Skills</h2>
                        <div className="skills-subtitle fade-in-right">The tools that I use</div>
                        <div className="skills-divider divider fade-in-up"></div>
                    </div>
                    <SkillsCards isAnimated={isAnimated}/>
                    <SkillsRatings isAnimated={isAnimated}/>
                </section>
            </CSSTransition>
        </div>
    );
}

export default SkillsPage;