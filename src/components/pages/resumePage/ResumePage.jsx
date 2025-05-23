import { CSSTransition } from 'react-transition-group';
import { useState, useEffect } from 'react';
import ResumeItems from './resumeItems/ResumeItems';
import resumeData, { translations } from './resumeItems/ResumeData';
import mainPhoto from '../../../assets/img/photo/main-photo.jpg';

const ResumePage = ({ isAnimated, activeLanguage }) => {
    const [currentIndex, setCurrentIndex] = useState(-1);

    const duration = 500;
    const totalDuration = resumeData.length * (duration / 1000);

    useEffect(() => {
        if (isAnimated) {
            setCurrentIndex(-1);
        }
    }, [isAnimated]);

    useEffect(() => {
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
    }, [isAnimated]);

    return (
        <CSSTransition in={isAnimated} classNames="animated" timeout={duration}>
            <section className="resume" id="resume">
                <div className="resume__head">
                    <h2 className="resume__head-title fade-in-down">
                        {translations.resumeTitle[activeLanguage]}
                    </h2>
                    <div className="resume__head-subtitle fade-in-right">
                        {translations.resumeSubtitle[activeLanguage]}
                    </div>
                    <div className="resume__head-divider divider fade-in-up"></div>
                </div>

                    <div className="resume__wrapper">
                        <CSSTransition in={isAnimated} classNames="animated">
                            <div className="resume__wrapper-photo fade-in-right">
                                <img src={mainPhoto} alt="mainPhoto" />
                            </div>
                        </CSSTransition>

                    <div className="resume__wrapper-column">
                        <h3 className="column-title fade-in-left">
                            {translations.experienceTitle[activeLanguage]}
                        </h3>
                        <ul style={{ '--totalDuration': `${totalDuration}s` }} className='list'>
                            {resumeData.map(({ id, src, alt, company, role, description }, index) => (
                                <CSSTransition
                                    key={id}
                                    in={index <= currentIndex}
                                    timeout={duration}
                                    className={`list__item ${index <= currentIndex ? 'animated' : ''}`}>
                                    <li style={{ '--duration': `${duration/1000}s` }}>
                                        <ResumeItems
                                            src={src}
                                            alt={alt}
                                            company={company[activeLanguage]}
                                            role={role[activeLanguage]}
                                            description={description[activeLanguage]}
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
