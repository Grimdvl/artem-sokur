
import SkillsCards from './skillsCards/SkillsCards';
import SkillsRatings from './skillsRatings/SkillsRatings';

import { CSSTransition } from 'react-transition-group';
import { useState, useEffect } from 'react';

const SkillsPage = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        setShowContent(true);
    }, []);

    return (
        <CSSTransition
            in={showContent}
            timeout={1000}
            classNames="animated"
            mountOnEnter
            unmountOnExit
            >
            <section className="skills" id="skills">
                <div className="skills-head">
                    <h2 className="skills-title fade-in-down">Skills</h2>
                    <div className="skills-subtitle fade-in-right">The tools that I use</div>
                    <div className="skills-divider divider fade-in-up"></div>
                </div>
                <SkillsCards/>
                <SkillsRatings/>
            </section>
        </CSSTransition>
    );
}

export default SkillsPage;