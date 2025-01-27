import { CSSTransition } from 'react-transition-group';
import { useState, useEffect } from 'react';
import ResumeItems from './resumeItems/ResumeItems';
import resumeData from './resumeItems/ResumeData';
import mainPhoto from '../../../assets/img/photo/main-photo.jpg';

const ResumePage = ({isAnimated}) => {
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
        <div id="resume" className="section-placeholder">
            <CSSTransition
                in={isAnimated}
                classNames="animated"
                timeout={duration}>
                <section className="resume">
                    <div className="resume__head">
                        <h2 className="resume__head-title fade-in-down">Resume</h2>
                        <div className="resume__head-subtitle fade-in-right">Here's how I'll be helpful for you</div>
                        <div className="resume__head-divider divider fade-in-up"></div>
                    </div>

                    <div className="resume__wrapper">
                        <div className="resume__wrapper-photo fade-in">
                            <img src={mainPhoto} alt="mainPhoto" />
                        </div>

                        <div className="resume__wrapper-column">
                            <h3 className="column-title fade-in-left">Experience</h3>
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
        </div>
    );
};

export default ResumePage;
