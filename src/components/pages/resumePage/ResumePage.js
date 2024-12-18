import { CSSTransition } from 'react-transition-group';
import { useState, useEffect } from 'react';
import ResumeItems from './resumeItems/ResumeItems';
import resumeData from './resumeItems/ResumeData';
import mainPhoto from '../../../assets/img/main-photo.jpg';

const ResumePage = () => {
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [showContent, setShowContent] = useState(false);

    const duration = 1000;
    const totalDuration = resumeData.length * (duration / 1000);

    useEffect(() => {
        setShowContent(true);

        const itemTimer = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                if (prevIndex < resumeData.length - 1) {
                    return prevIndex + 1;
                } else {
                    clearInterval(itemTimer);
                    return prevIndex;
                }
            });
        }, duration);

        return () => clearInterval(itemTimer);
    }, []);

    return (
        <CSSTransition
            in={showContent}
            classNames="animated"
            timeout={duration}
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
                        <img src={mainPhoto} alt="mainPhoto" />
                    </div>

                    <div className="resume__wrapper-column">
                        <h3 className="column-title description">Experience</h3>
                        <ul 
                            style={{ '--totalDuration': `${totalDuration}s` }}
                            className='list'
                            >
                            {resumeData.map(({id, src, alt, company, role, description}, index) => (
                                <CSSTransition
                                    key={id}
                                    in={index <= currentIndex}
                                    timeout={duration}
                                    className={`list__item ${
                                        index <= currentIndex ? 'animated' : ''
                                    }`}
                                    >
                                    <li>
                                        <ResumeItems
                                            src={src}
                                            alt={alt}
                                            company={company}
                                            role={role}
                                            description={description}
                                        />
                                    </li>
                                </CSSTransition>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </CSSTransition>
    );
};

export default ResumePage;
