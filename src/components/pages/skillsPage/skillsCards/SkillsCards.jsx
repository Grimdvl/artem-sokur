import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import CardsItems from "./CardsItems";
import cardsData from "./CardsData";

const SkillsCards = ({ isAnimated, activeAttribute, activeLanguage }) => {
    const cardRefs = useRef([]);
    const circumference = 2 * Math.PI * 60;
    const [visibleCards, setVisibleCards] = useState(new Set());
    const initialProgresses = useMemo(() => 
        cardsData.map(() => ({ value: 0, strokeDashoffset: circumference })), 
        [circumference]
    );
    const [progresses, setProgresses] = useState(initialProgresses);
    const [flippedStates, setFlippedStates] = useState(cardsData.map(() => false));
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 991);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleCards((prev) => new Set(prev).add(entry.target.dataset.id));
                    }
                });
            },
            { threshold: 0.3 }
        );

        cardRefs.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth > 991);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setIsAnimated(true);
    //     }, 1000);

    //     return () => clearTimeout(timer);
    // }, []);

    const handleFlip = useCallback((index) => {
        setFlippedStates((prev) => prev.map((state, i) => (i === index ? !state : state)));
    }, []);

    const handleMouseMove = useCallback((index, event) => {
        if (!isDesktop) return;

        const card = cardRefs.current[index];
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
    }, [isDesktop]);

    useEffect(() => {
        cardRefs.current.forEach((card) => {
            if (isDesktop) {
                if (card && !card.hasAttribute("data-tilt-initialized")) {
                    VanillaTilt.init(card, { max: 10, speed: 400 });
                    card.setAttribute("data-tilt-initialized", "true");
                }
            } else if (card && card.hasAttribute("data-tilt-initialized")) {
                const tilt = card.vanillaTilt;
                if (tilt) {
                    tilt.destroy();
                }
                card.removeAttribute("data-tilt-initialized");
            }
        });
    }, [isDesktop]);

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
                    // activeAttribute={activeAttribute}
                    // isAnimated={isAnimated}
                    data-id={id}
                    isAnimated={visibleCards.has(String(id))}
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
