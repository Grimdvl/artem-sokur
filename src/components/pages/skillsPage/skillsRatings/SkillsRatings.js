import { useState, useEffect } from "react";
import ratingsData from "./RatingsData";
import RatingsItems from "./RatingsItems";

const SkillsRatings = ({isAnimated}) => {
    const [progresses, setProgresses] = useState(
        ratingsData.map(() => ({ value: 0, width: 0 }))
    );

    useEffect(() => {
        if (!isAnimated) return;

        const intervalIds = [];

        ratingsData.forEach((rating, index) => {
            const incrementProgress = () => {
                setProgresses((prev) =>
                    prev.map((progress, i) =>
                        i === index && progress.value < rating.target
                            ? {
                                value: progress.value + 1,
                                width: progress.value + 1,
                            }
                            : progress
                    )
                );
            };

            const intervalId = setInterval(() => {
                setProgresses((prev) => {
                    if (prev[index].value >= rating.target) {
                        clearInterval(intervalId);
                        return prev;
                    }
                    incrementProgress();
                    return prev;
                });
            }, 15);

            intervalIds.push(intervalId);
        });

        return () => {
            intervalIds.forEach(clearInterval);
        };
    }, [isAnimated]);

    return (
        <div className="skills__ratings">
            {ratingsData.map(({ id, title, target }, index) => (
                <RatingsItems
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
