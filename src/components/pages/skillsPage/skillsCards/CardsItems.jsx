import { forwardRef, useRef } from "react";
import { CSSTransition } from "react-transition-group";

const translations = {
    EN: { readMore: "Read more", back: "Back" },
    UA: { readMore: "Детальніше", back: "Назад" },
    RU: { readMore: "Подробнее", back: "Назад" }
};

const CardsItems = forwardRef(({
    src,
    alt,
    title,
    description,
    progress,
    handleFlip,
    onMouseMove,
    className,
    activeAttribute,
    isAnimated,
    activeLanguage
}, ref) => {
    const nodeRef = useRef(null);
    return (
        <CSSTransition
            // in={activeAttribute}
            in={isAnimated}
            timeout={1000}
            classNames="animated"
            nodeRef={nodeRef}
        >
            <div 
                data-skills-wrapper-card
                className={`skills__wrapper-card fade-in-up`}
                ref={nodeRef}
            >
                <div className={className} ref={ref} onMouseMove={onMouseMove}>
                    <div className="skills__card-front">
                        <div className="skills__card-front-icon">
                            <ion-icon name={src} alt={alt}></ion-icon>
                            <svg className="progress-ring">
                                <circle className="progress-ring__background" cx="75" cy="75" r="60" />
                                <circle
                                    className="progress-ring__circle"
                                    cx="75"
                                    cy="75"
                                    r="60"
                                    style={{ strokeDashoffset: progress.strokeDashoffset }}
                                />
                            </svg>
                            <div className="progress-text">
                                {progress.value}<sup>%</sup>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="skills__card-front--button"
                            onClick={handleFlip}
                        >
                            {translations[activeLanguage]?.readMore || translations.EN.readMore}
                        </button>
                    </div>

                    <div className="skills__card-back">
                        <h3 className="skills__card-back-title">{title}</h3>
                        <p className="skills__card-back-description">{description}</p>
                        <button
                            type="button"
                            className="skills__card-back--button"
                            onClick={handleFlip}
                        >
                            {translations[activeLanguage]?.back || translations.EN.back}
                        </button>
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
});

export default CardsItems;
