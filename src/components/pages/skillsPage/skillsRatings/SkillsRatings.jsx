import { useState, useEffect, useCallback, useMemo } from "react";
import ratingsData from "./RatingsData";
import RatingsItems from "./RatingsItems";

const SkillsRatings = ({ isAnimated }) => {
    const initialProgresses = useMemo(
        () => ratingsData.map(() => ({ value: 0, width: 0 })),
        []
    );

    const [progresses, setProgresses] = useState(initialProgresses);

    const incrementProgress = useCallback((index, target) => {
        setProgresses((prev) =>
            prev.map((progress, i) =>
                i === index && progress.value < target
                    ? {
                        value: progress.value + 1,
                        width: progress.value + 1,
                    }
                    : progress
            )
        );
    }, []);

    const decrementProgress = useCallback((index) => {
        setProgresses((prev) =>
            prev.map((progress, i) =>
                i === index && progress.value > 0
                    ? {
                        value: progress.value - 1,
                        width: progress.value - 1,
                    }
                    : progress
            )
        );
    }, []);

    useEffect(() => {
        if (!isAnimated) return;

        const intervalIds = [];

        ratingsData.forEach((rating, index) => {
            const intervalId = setInterval(() => {
                setProgresses((prev) => {
                    const currentValue = prev[index].value;

                    if (currentValue >= rating.target) {
                        clearInterval(intervalId);
                        return prev;
                    }

                    return prev.map((progress, i) =>
                        i === index
                            ? {
                                value: currentValue + 1,
                                width: currentValue + 1,
                            }
                            : progress
                    );
                });
            }, 15);

            intervalIds.push(intervalId);
        });

        return () => {
            intervalIds.forEach(clearInterval);
        };
    }, [isAnimated, incrementProgress]);

    useEffect(() => {
        if (isAnimated) return;

        const intervalIds = [];

        progresses.forEach((progress, index) => {
            const intervalId = setInterval(() => {
                setProgresses((prev) => {
                    const currentValue = prev[index].value;

                    if (currentValue <= 0) {
                        clearInterval(intervalId);
                        return prev;
                    }

                    return prev.map((prog, i) =>
                        i === index ? {
                                value: currentValue - 1,
                                width: currentValue - 1,
                            } : prog
                    );
                });
            }, 15);

            intervalIds.push(intervalId);
        });

        return () => {
            intervalIds.forEach(clearInterval);
        };
    }, [isAnimated, progresses, decrementProgress]);

    return (
        <div className="skills__ratings">
            {ratingsData.map(({ id, title, target }, index) => (
                <RatingsItems
                    isAnimated={isAnimated}
                    key={id}
                    title={title}
                    target={target}
                    progress={progresses[index]}
                />
            ))}
        </div>
    );
};

export default SkillsRatings;
