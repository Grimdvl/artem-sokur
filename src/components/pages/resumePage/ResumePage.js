import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { useState, useEffect } from 'react';
import ResumeItems from './resumeItems/ResumeItems';
import resumeData from './resumeItems/ResumeData';
import mainPhoto from '../../../assets/img/main-photo.jpg';

const ResumePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        setShowContent(true);
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                if (prevIndex < resumeData.length - 1) {
                    return prevIndex + 1;
                } else {
                    clearInterval(timer);
                    return prevIndex;
                }
            });
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <CSSTransition
            in={showContent}
            classNames="animated"
            timeout={500 * resumeData.length}
            mountOnEnter
            unmountOnExit
        >
            <section className="resume" id="resume">
                <div className="resume__head">
                    <h2 className="resume__head-title title">Resume</h2>
                    <div className="resume__head-subtitle subtitle">Here's how I'll be helpful for you</div>
                    <div className="resume__head-divider divider"></div>
                </div>

                <div className="resume__wrapper">
                    <div className="resume__wrapper-photo">
                        <img src={mainPhoto} alt="mainPhoto"/>
                    </div>

                    <div className="resume__wrapper-column">
                        <h3 className="column-title">Experience</h3>
                        <CSSTransition in={showContent} timeout={500 * resumeData.length} classNames="ul-animation">
                            <ul>
                                <SwitchTransition mode="out-in">
                                    <CSSTransition
                                        key={currentIndex}
                                        timeout={500}
                                        classNames="li-animation"
                                    >
                                        <li key={resumeData[currentIndex].id}>
                                            <ResumeItems 
                                                imgSrc={resumeData[currentIndex].imgSrc}
                                                icon={resumeData[currentIndex].icon}
                                                company={resumeData[currentIndex].company}
                                                role={resumeData[currentIndex].role}
                                                description={resumeData[currentIndex].description}
                                            />
                                        </li>
                                    </CSSTransition>
                                </SwitchTransition>
                            </ul>
                        </CSSTransition>
                    </div>
                </div>
            </section>
        </CSSTransition>
    );
};

export default ResumePage;
