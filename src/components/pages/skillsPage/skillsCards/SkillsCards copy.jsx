// import { useState, useEffect, useRef, useCallback } from "react";
// import VanillaTilt from "vanilla-tilt";
// import CardsItems from "./CardsItems";
// import cardsData from "./CardsData";

// const SkillsCards = ({ isAnimated, activeLanguage }) => {
//     const cardRefs = useRef([]);
//     const [flippedStates, setFlippedStates] = useState(cardsData.map(() => false));
//     const [progresses, setProgresses] = useState(cardsData.map(() => 0));
//     const [blocks, setBlocks] = useState(
//         cardsData.map(() =>
//             Array.from({ length: 100 }, (_, i) => ({
//                 isActive: false,
//                 rotation: 3.6 * (i + 1),
//                 delay: (i + 1) / 60,
//             }))
//         )
//     );

//     const clearData = useCallback(() => {
//         setProgresses(cardsData.map(() => 0));
//         setFlippedStates(cardsData.map(() => false));
//         setBlocks(
//             cardsData.map(() =>
//                 Array.from({ length: 100 }, (_, i) => ({
//                     isActive: false,
//                     rotation: 3.6 * (i + 1),
//                     delay: (i + 1) / 60,
//                 }))
//             )
//         );
//     }, []);

//     const handleFlip = useCallback((index) => {
//         setFlippedStates((prev) => prev.map((state, i) => (i === index ? !state : state)));
//     }, []);

//     const handleMouseMove = useCallback((index, event) => {
//         const card = cardRefs.current[index];
//         if (!card) return;
//         const rect = card.getBoundingClientRect();
//         const x = event.clientX - rect.left;
//         const y = event.clientY - rect.top;

//         card.style.setProperty("--x", `${x}px`);
//         card.style.setProperty("--y", `${y}px`);
//     }, []);

//     useEffect(() => {
//         cardRefs.current.forEach((card) => {
//             if (card) {
//                 VanillaTilt.init(card, {
//                     max: 10,
//                     speed: 400,
//                 });
//             }
//         });
//     }, []);

//     useEffect(() => {
//         if (!isAnimated) {
//             clearData();
//             return;
//         }

//         const intervalIds = [];
//         cardsData.forEach((card, index) => {
//             const intervalId = setInterval(() => {
//                 setProgresses((prev) =>
//                     prev.map((progress, i) => (i === index && progress < card.target ? progress + 1 : progress))
//                 );
//             }, 15);
//             intervalIds.push(intervalId);
//         });

//         setBlocks(
//             cardsData.map((card) =>
//                 Array.from({ length: 100 }, (_, i) => ({
//                     isActive: i < card.target,
//                     rotation: 3.6 * (i + 1),
//                     delay: (i + 1) / 60,
//                 }))
//             )
//         );

//         return () => {
//             intervalIds.forEach(clearInterval);
//         };
//     }, [isAnimated, clearData]);

//     return (
//         <div className="skills__wrapper">
//             {cardsData.map(({ id, src, alt, title, description }, index) => (
//                 <CardsItems
//                     isAnimated={isAnimated}
//                     key={id}
//                     ref={(el) => (cardRefs.current[index] = el)}
//                     className={`skills__card ${flippedStates[index] ? "active" : ""}`}
//                     src={src}
//                     alt={alt}
//                     title={title[activeLanguage] || title.EN}
//                     description={description[activeLanguage] || description.EN}
//                     progress={progresses[index]}
//                     blocks={blocks[index]}
//                     handleFlip={() => handleFlip(index)}
//                     onMouseMove={(event) => handleMouseMove(index, event)}
//                     activeLanguage={activeLanguage}
//                 />
//             ))}
//         </div>
//     );
// };

// export default SkillsCards;
