import { CSSTransition } from 'react-transition-group';
import { useState, useEffect } from 'react';
import ResumeItems from './resumeItem/ResumeItems';
import resumeData from './resumeItem/ResumeData';
import mainPhoto from '../../../assets/img/main-photo.jpg';

const ResumePage = () => {
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
            <section className="resume" id="resume">
                <div className="resume-head">
                    <h2 className="resume-title title">Resume</h2>
                    <div className="resume-subtitle subtitle">Here's how I'll be helpful for you</div>
                    <div className="resume-divider divider"></div>
                </div>

                <div className="resume__wrapper">
                    <div className="resume__photo">
                        <img src={mainPhoto} alt="mainPhoto"/>
                    </div>

                    <div className="resume__column">
                        <h3 className="resume__column-title">Experience</h3>
                        <ul>
                            {resumeData.map(({id, imgSrc, icon, company, role, description}) => (
                                <li key={id}>
                                    <ResumeItems 
                                        imgSrc={imgSrc}
                                        icon={icon}
                                        company={company}
                                        role={role}
                                        description={description}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </CSSTransition>
    );
};

export default ResumePage;
