import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import CardsItems from "./CardsItems";
import cardsData from "./CardsData";

const SkillsCards = ({ isAnimated, activeLanguage }) => {
    const cardRefs = useRef([]);
    const circumference = 2 * Math.PI * 60;

    const initialProgresses = useMemo(() => cardsData.map(() => ({ value: 0, strokeDashoffset: circumference })), [circumference]);

    const [progresses, setProgresses] = useState(initialProgresses);
    const [flippedStates, setFlippedStates] = useState(cardsData.map(() => false));

    const handleFlip = useCallback((index) => {
        setFlippedStates((prev) => prev.map((state, i) => (i === index ? !state : state)));
    }, []);

    const handleMouseMove = useCallback((index, event) => {
        const card = cardRefs.current[index];
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
    }, []);

    useEffect(() => {
        cardRefs.current.forEach((card) => {
            if (card && !card.hasAttribute("data-tilt-initialized")) {
                VanillaTilt.init(card, { max: 10, speed: 400 });
                card.setAttribute("data-tilt-initialized", "true");
            }
        });
    }, []);

    useEffect(() => {
        if (!isAnimated) return;

        const intervalIds = [];

        cardsData.forEach((card, index) => {
            let currentValue = 0;
            const speed = 20;

            const intervalId = setInterval(() => {
                setProgresses((prev) => {
                    const nextValue = Math.min(currentValue + 1, card.target);
                    currentValue = nextValue;

                    if (nextValue >= card.target) {
                        clearInterval(intervalId);
                    }

                    return prev.map((progress, i) =>
                        i === index
                            ? {
                                value: nextValue,
                                strokeDashoffset: circumference - (nextValue / 100) * circumference,
                            }
                            : progress
                    );
                });
            }, speed);

            intervalIds.push(intervalId);
        });

        return () => intervalIds.forEach(clearInterval);
    }, [isAnimated, circumference]);

    return (
        <div className="skills__wrapper">
            {cardsData.map(({ id, src, alt, title, description }, index) => (
                <CardsItems
                    key={id}
                    ref={(el) => (cardRefs.current[index] = el)}
                    className={`skills__card ${flippedStates[index] ? "active" : ""}`}
                    src={src}
                    alt={alt}
                    title={title[activeLanguage] || title.EN}
                    description={description[activeLanguage] || description.EN}
                    progress={progresses[index] || { value: 0, strokeDashoffset: circumference }}
                    handleFlip={() => handleFlip(index)}
                    activeLanguage={activeLanguage}
                    onMouseMove={(event) => handleMouseMove(index, event)}
                />
            ))}
        </div>
    );
};

export default SkillsCards;
