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
                progressTextRef.current.textContent = `${value}%`;
            }
        };

        useEffect(() => {
            let progressValue = 0;
            const interval = setInterval(() => {
                if (progressValue >= progress) {
                    clearInterval(interval);
                } else {
                    progressValue += 1;
                    updateProgress(progressValue);
                }
            }, 30);

            return () => clearInterval(interval);
        }, [progress]);

        return (
            <div className={className} ref={ref} onMouseMove={onMouseMove}>
                <CSSTransition in={isAnimated} timeout={1000} mountOnEnter unmountOnExit>
                    <div className="skills__card-front">
                        <div className="skills__card-front-icon">
                            <h3>
                                <ion-icon name={src} alt={alt}></ion-icon>
                                <div className="progress-container">
                                    <svg className="progress-ring" width="150" height="150">
                                        <circle className="progress-ring__background" cx="75" cy="75" r="60" />
                                        <circle ref={progressCircleRef} className="progress-ring__circle" cx="75" cy="75" r="60" />
                                    </svg>
                                    <div ref={progressTextRef} className="progress-text"><sup>%</sup></div>
                                </div>
                                {/* <div className="counter">{progress}<sup>%</sup></div> */}
                            </h3>
                            {/* {blocks.map((block, index) => (
                                <div
                                    key={index}
                                    className={`block${block.isActive ? ' active' : ''}`}
                                    style={{
                                        transform: `rotate(${block.rotation}deg)`,
                                        animationDelay: `${block.delay}s`,
                                    }}
                                ></div>
                            ))} */}
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
