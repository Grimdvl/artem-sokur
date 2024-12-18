import { useState, useEffect, useRef } from 'react';
import cardsData from './CardsData';
// import VanillaTilt from 'vanilla-tilt';
import CardsItems from './CardsItems';

const SkillsCards = () => {
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

    const cardRefs = useRef([]);

    // useEffect(() => {
    //     if (cardRefs.current.length) {
    //         cardRefs.current.forEach((card) => {
    //             if (card) {
    //                 VanillaTilt.init(card, {
    //                     max: 10,
    //                     speed: 400,
    //                 });
    //             }
    //         });
    //     }
    // }, []);
    
    useEffect(() => {
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
    }, []);

    const [flippedStates, setFlippedStates] = useState(cardsData.map(() => false));
    const handleFlip = (index) => {
        setFlippedStates((prev) =>
            prev.map((state, i) => (i === index ? !state : state))
        );
    };

    return (
        <div className="skills__wrapper">
            {cardsData.map(({ id, src, alt, title, descr }, index) => (
                <CardsItems
                    key={id}
                    ref={(el) => (cardRefs.current[index] = el)}
                    className={`skills__card ${flippedStates[index] ? 'active' : ''}`}
                    src={src}
                    alt={alt}
                    title={title}
                    descr={descr}
                    progress={progresses[index]}
                    blocks={blocks[index]}
                    handleFlip={() => handleFlip(index)}
                />
            ))}
        </div>
    );
};

export default SkillsCards;
