import { CSSTransition } from 'react-transition-group';
import React, { forwardRef, useEffect, useRef } from 'react';

const translations = {
    EN: { readMore: "Read more", back: "Back" },
    UA: { readMore: "Детальніше", back: "Назад" },
    RU: { readMore: "Подробнее", back: "Назад" }
};

const CardsItems = forwardRef(
    ({ src, alt, title, description, progress, handleFlip, className, onMouseMove, isAnimated, activeLanguage }, ref) => {
        const progressCircleRef = useRef(null);
        const progressTextRef = useRef(null);

        const updateProgress = (value) => {
            const maxProgress = 100;
            const circumference = 2 * Math.PI * 60;
            const offset = circumference - (value / maxProgress) * circumference;
            if (progressCircleRef.current) {
                progressCircleRef.current.style.strokeDashoffset = offset;
            }
            if (progressTextRef.current) {
                progressTextRef.current.innerHTML = `${value}<sup>%</sup>`;
            }
        };

        useEffect(() => {
            let progressValue = 0;
            let animationFrameId;
        
            const update = () => {
                if (progressValue < progress) {
                    progressValue += 1;
                    updateProgress(progressValue);
                    animationFrameId = requestAnimationFrame(update);
                }
            };
        
            animationFrameId = requestAnimationFrame(update);
        
            return () => cancelAnimationFrame(animationFrameId);
        }, [progress]);
        

        return (
            <div className={className} ref={ref} onMouseMove={onMouseMove}>
                <CSSTransition in={isAnimated} timeout={1000} mountOnEnter unmountOnExit>
                    <div className="skills__card-front">
                        <div className="skills__card-front-icon">
                            {/* <h3> */}
                                <ion-icon name={src} alt={alt}></ion-icon>
                                <svg className="progress-ring">
                                    <circle className="progress-ring__background" cx="75" cy="75" r="60" />
                                    <circle ref={progressCircleRef} className="progress-ring__circle" cx="75" cy="75" r="60" />
                                </svg>
                                <div ref={progressTextRef} className="progress-text"><sup>0%</sup></div>
                            {/* </h3> */}
                                {/* <svg className="progress-ring">
                                    <circle className="progress-ring__background" cx="75" cy="75" r="60" />
                                    <circle ref={progressCircleRef} className="progress-ring__circle" cx="75" cy="75" r="60" />
                                </svg> */}
                        </div>
                        <button type="button" className="skills__card-front--button" onClick={handleFlip}>
                            {translations[activeLanguage]?.readMore || translations.EN.readMore}
                        </button>
                    </div>
                </CSSTransition>

                <div className="skills__card-back">
                    <h3 className="skills__card-back-title">{title}</h3>
                    <p className="skills__card-back-description">{description}</p>
                    <button type="button" className="skills__card-back--button" onClick={handleFlip}>
                        {translations[activeLanguage]?.back || translations.EN.back}
                    </button>
                </div>
            </div>
        );
    }
);

export default CardsItems;
