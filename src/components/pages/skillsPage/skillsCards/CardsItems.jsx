import { CSSTransition } from 'react-transition-group';
import React, { forwardRef, useEffect, useRef, useState } from 'react';

const translations = {
    EN: { readMore: "Read more", back: "Back" },
    UA: { readMore: "Детальніше", back: "Назад" },
    RU: { readMore: "Подробнее", back: "Назад" }
};

const CardsItems = forwardRef(
    ({ src, alt, title, description, progress, handleFlip, className, onMouseMove, isAnimated, activeLanguage }, ref) => {
        const progressCircleRef = useRef(null);
        const progressTextRef = useRef(null);
        const [progressValue, setProgressValue] = useState(0);

        useEffect(() => {
            if (!isAnimated) {
                // setProgressValue(0);
                return;
            }

            setProgressValue(0);

            const interval = setInterval(() => {
                setProgressValue((prev) => {
                    const newValue = prev + 1;
                    if (newValue >= progress) {
                        clearInterval(interval);
                        return progress;
                    }
                    return newValue;
                });
            }, 15);

            return () => clearInterval(interval);
        }, [isAnimated, progress]);

        useEffect(() => {
            const maxProgress = 100;
            const circumference = 2 * Math.PI * 60;
            const offset = circumference - (progressValue / maxProgress) * circumference;

            if (progressCircleRef.current) {
                progressCircleRef.current.style.strokeDashoffset = offset;
            }
            if (progressTextRef.current) {
                progressTextRef.current.innerHTML = `${progressValue}<sup>%</sup>`;
            }
        }, [progressValue]);

        return (
            <div className={className} ref={ref} onMouseMove={onMouseMove}>
                <CSSTransition in={isAnimated} timeout={1000} mountOnEnter unmountOnExit>
                    <div className="skills__card-front">
                        <div className="skills__card-front-icon">
                            <ion-icon name={src} alt={alt}></ion-icon>
                            <svg className="progress-ring">
                                <circle className="progress-ring__background" cx="75" cy="75" r="60" />
                                <circle ref={progressCircleRef} className="progress-ring__circle" cx="75" cy="75" r="60" />
                            </svg>
                            <div ref={progressTextRef} className="progress-text"><sup>0%</sup></div>
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
