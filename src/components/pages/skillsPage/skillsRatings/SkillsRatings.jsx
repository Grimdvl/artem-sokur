import { useState, useEffect, useMemo } from "react";
import ratingsData from "./RatingsData";
import RatingsItems from "./RatingsItems";

const SkillsRatings = ({ isAnimated, activeLanguage }) => {
    const initialProgresses = useMemo(() => ratingsData.map(() => ({ value: 0, width: 0})),[]);

    const [progresses, setProgresses] = useState(initialProgresses);

    useEffect(() => {
        if (!isAnimated) return;

        const intervalIds = [];

        ratingsData.forEach((rating, index) => {
            let currentValue = 0;
            const speed = 20;

            const intervalId = setInterval(() => {
                setProgresses((prev) => {
                    const nextValue = Math.min(currentValue + 1, rating.target);
                    currentValue = nextValue;

                    if (nextValue >= rating.target) {
                        clearInterval(intervalId);
                    }

                    return prev.map((progress, i) =>
                        i === index
                            ? {
                                value: nextValue,
                                width: nextValue,
                            }
                            : progress
                    );
                });
            }, speed);

            intervalIds.push(intervalId);
        });

        return () => intervalIds.forEach(clearInterval);
    }, [isAnimated]);

    return (
        <div className="skills__ratings">
            {ratingsData.map(({ id, translations, target }, index) => (
                <RatingsItems
                    isAnimated={isAnimated}
                    key={id}
                    title={translations[activeLanguage]}
                    target={target}
                    progress={progresses[index]}
                />
            ))}
        </div>
    );
};

export default SkillsRatings;
