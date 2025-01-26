import { useState, useEffect, useCallback } from "react";
import ratingsData from "./RatingsData";
import RatingsItems from "./RatingsItems";

const SkillsRatings = ({ isAnimated }) => {
    const [progresses, setProgresses] = useState(
        ratingsData.map(() => ({ value: 0, width: 0 }))
    );

    // const initialProgresses = useMemo(
    //     () => ratingsData.map(() => ({ value: 0, width: 0 })),
    //     []
    // );

    const incrementProgress = useCallback((index, target) => {
        setProgresses((prev) =>
            prev.map((progress, i) =>
                i === index && progress.value < target
                    ? {
                        value: progress.value + 1,
                        width: progress.value + 1,
                    } : progress
            )
        );
    }, []);

    const decrementProgress = useCallback((index) => {
        setProgresses((prev) =>
            prev.map((prog, i) =>
                i === index && prog.value > 0
                    ? {
                        value: prog.value - 1,
                        width: prog.value - 1,
                    } : prog
            )
        );
    }, []);

    useEffect(() => {
        if (!isAnimated) return;

        const intervalIds = [];

        ratingsData.forEach((rating, index) => {
            const intervalId = setInterval(() => {
                setProgresses((prev) => {
                    if (prev[index].value >= rating.target) {
                        clearInterval(intervalId);
                        return prev;
                    }
                    incrementProgress(index, rating.target);
                    return prev;
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
                    if (prev[index].value <= 0) {
                        clearInterval(intervalId);
                        return prev;
                    }
                    decrementProgress(index);
                    return prev;
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
