import { useState, useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import CardsItems from './CardsItems';
import cardsData from './CardsData';

const SkillsCards = ({isAnimated}) => {
    const [progresses, setProgresses] = useState(cardsData.map(() => 0));
    const [blocks, setBlocks] = useState(
        cardsData.map(() =>
            Array.from({ length: 100 }, (_, i) => ({
                isActive: false,
                rotation: 3.6 * (i + 1),
                delay: (i + 1) / 60,
            }))
        )
    );
    const [flippedStates, setFlippedStates] = useState(cardsData.map(() => false));

    const cardRefs = useRef([]);

    const handleFlip = (index) => {
        setFlippedStates((prev) =>
            prev.map((state, i) => (i === index ? !state : state))
        );
    };

    const handleMouseMove = (index, event) => {
        const card = cardRefs.current[index];
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    };

    useEffect(() => {
        cardRefs.current.forEach((card) => {
            if (card) {
                VanillaTilt.init(card, {
                    max: 10,
                    speed: 400,
                });
            }
        });
    }, []);

    useEffect(() => {
        if (!isAnimated) return;

        let isCancelled = false;

        const incrementProgress = () => {
            setProgresses((prevProgresses) =>
                prevProgresses.map((progress, index) => {
                    if (progress < cardsData[index].target) {
                        return progress + 1;
                    }
                    return progress;
                })
            );
        };

        const interval = setInterval(() => {
            if (!isCancelled) {
                incrementProgress();
            }
        }, 15);

        const newBlocks = cardsData.map((card) =>
            Array.from({ length: 100 }, (_, i) => ({
                isActive: i < card.target,
                rotation: 3.6 * (i + 1),
                delay: (i + 1) / 60,
            }))
        );

        setBlocks(newBlocks);

        return () => {
            isCancelled = true;
            clearInterval(interval);
        };
    }, [isAnimated]);

    return (
        <div className="skills__wrapper">
            {cardsData.map(({ id, src, alt, title, description }, index) => (
                <CardsItems
                    isAnimated={isAnimated}
                    key={id}
                    ref={(el) => (cardRefs.current[index] = el)}
                    className={`skills__card ${flippedStates[index] ? 'active' : ''}`}
                    src={src}
                    alt={alt}
                    title={title}
                    description={description}
                    progress={progresses[index]}
                    blocks={blocks[index]}
                    handleFlip={() => handleFlip(index)}
                    onMouseMove={(event) => handleMouseMove(index, event)}
                    />
            ))}
        </div>
    );
};

export default SkillsCards;
