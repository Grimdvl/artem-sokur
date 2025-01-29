import { CSSTransition } from 'react-transition-group';
import { useState, useEffect, useRef, useCallback } from 'react';

import portfolioData from './PortfolioData';
import PortfolioItems from './PortfolioItems';

const PortfolioPage = ({isAnimated, isDarkMode}) => {
    const totalItems = portfolioData.length;
    const itemsToShow = 10;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [startIndex, setStartIndex] = useState(Math.floor((totalItems - itemsToShow) / 2));
    const [activeIndex, setActiveIndex] = useState(null);
    const [isVertical, setIsVertical] = useState(window.innerWidth <= 768);
    const [isStart, setIsStart] = useState(false);
    const [isEnd, setIsEnd] = useState(false);
    const portfolioRef = useRef(null);

    useEffect(() => {

        const handleResize = () => setIsVertical(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);

        const handleClickOutside = (event) => {
            if (!portfolioRef.current) return;
            if (!event.target.closest('.portfolio__items')) {
                setActiveIndex(null);
                portfolioRef.current.classList.remove('active');
                portfolioRef.current.style.marginTop = '0';
                portfolioRef.current.style.marginBottom = '0';
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        setIsStart(startIndex === 0);
        setIsEnd(startIndex >= totalItems - itemsToShow);
    }, [startIndex, itemsToShow, totalItems]);

    const calculateSwipePosition = useCallback(() => {
        if (!portfolioRef.current) return 0;

        const firstItem = portfolioRef.current.firstElementChild;
        const gapSizeRem = 0.4;
        const itemSizeRem =
            isVertical
                ? firstItem.offsetHeight / parseFloat(getComputedStyle(document.documentElement).fontSize)
                : firstItem.offsetWidth / parseFloat(getComputedStyle(document.documentElement).fontSize);

        return itemSizeRem + gapSizeRem;
    }, [isVertical]);

    const handleNextSlide = () => {
        if (startIndex < totalItems - itemsToShow) {
            setStartIndex((prevIndex) => prevIndex + 1);
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handlePrevSlide = () => {
        if (startIndex > 0) {
            setStartIndex((prevIndex) => prevIndex - 1);
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    const handleItemClick = (index) => {
        if (isVertical) {
            if (index === 0 ) {
                portfolioRef.current.style.marginTop = '10rem';
                portfolioRef.current.style.marginBottom = '0';
            } else if (index === 1 || index === 2) {
                portfolioRef.current.style.marginTop = '5rem';
                portfolioRef.current.style.marginBottom = '0';
            } else {
                portfolioRef.current.style.marginTop = '0';
                portfolioRef.current.style.marginBottom = '5rem';
            }
        }
        setActiveIndex(index);
        portfolioRef.current.classList.add('active');
    };

    useEffect(() => {
        if (portfolioRef.current) {
            const swipePositionRem = calculateSwipePosition();
            const transformValue = isVertical
                ? `translateY(${currentIndex * -1 * swipePositionRem}rem)`
                : `translateX(${currentIndex * -1 * swipePositionRem}rem)`;

            portfolioRef.current.style.transform = transformValue;
        }
    }, [currentIndex, isVertical, calculateSwipePosition]);

    return (
        <CSSTransition
            in={isAnimated}
            timeout={1000}
            classNames="animated">
            <section className="portfolio" id="portfolio">
                    <div className="portfolio-head">
                        <h2 className="portfolio__head-title fade-in-down">Portfolio</h2>
                        <div className="portfolio__head-subtitle fade-in-right">My works</div>
                        <div className="portfolio__headdivider divider fade-in-up"></div>
                    </div>

                    <div
                        className={`portfolio__items ${isVertical ? 'vertical' : 'horizontal'}`}
                        ref={portfolioRef}>
                            {portfolioData.map(({ id, src, alt, title, description, linkGit, link }, index) => {
                                const isVisible = index >= startIndex && index < startIndex + itemsToShow;
                                return (
                                    <PortfolioItems
                                        id={id}
                                        src={src}
                                        alt={alt}
                                        title={title}
                                        description={description}
                                        linkGit={linkGit}
                                        link={link}
                                        isActive={activeIndex === index}
                                        isHidden={!isVisible}
                                        isDarkMode={isDarkMode}
                                        onClick={() => handleItemClick(index)}/>
                                );
                            })}
                    </div>

                    <div className="portfolio__slide">
                        <button
                            className={`portfolio__slide-prev ${isStart ? 'end' : ''}`}
                            onClick={handlePrevSlide}
                        >
                            <i className="bx bx-left-arrow-alt"></i>
                        </button>
                        <button
                            className={`portfolio__slide-next ${isEnd ? 'end' : ''}`}
                            onClick={handleNextSlide}
                        >
                            <i className="bx bx-right-arrow-alt"></i>
                        </button>
                    </div>
            </section>
        </CSSTransition>
    );
};

export default PortfolioPage;