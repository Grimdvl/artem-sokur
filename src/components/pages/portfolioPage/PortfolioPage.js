import { CSSTransition } from 'react-transition-group';
import { useState, useEffect, useRef } from 'react';

import portfolioData from './PortfolioData';
import PortfolioItems from './PortfolioItems';

const PortfolioPage = () => {
    const [showContent, setShowContent] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(null);
    const [isVertical, setIsVertical] = useState(window.innerWidth <= 768);
    const [isStart, setIsStart] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const portfolioRef = useRef(null);

    const itemsToShow = 10;

    useEffect(() => {
        setShowContent(true);

        const handleResize = () => setIsVertical(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);

        const handleClickOutside = (event) => {
            if (!event.target.closest('.portfolio__items')) {
                setActiveIndex(null);
                portfolioRef.current.classList.remove('active');
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const totalItems = portfolioData.length;
        setIsStart(currentIndex === 0);
        setIsEnd(currentIndex >= totalItems - itemsToShow);
    }, [currentIndex, itemsToShow]);

    const calculateSwipePosition = () => {
        if (!portfolioRef.current) return 0;

        const firstItem = portfolioRef.current.firstElementChild;
        const gapSizeRem = 0.4;
        const itemSizeRem =
            isVertical
                ? firstItem.offsetHeight / parseFloat(getComputedStyle(document.documentElement).fontSize)
                : firstItem.offsetWidth / parseFloat(getComputedStyle(document.documentElement).fontSize);

        return itemSizeRem + gapSizeRem;
    };

    const handleNextSlide = () => {
        const totalItems = portfolioData.length;
        const maxIndex = totalItems - itemsToShow;
        if (currentIndex < maxIndex) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handlePrevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    const handleItemClick = (index) => {
        setActiveIndex(index);
        portfolioRef.current.classList.add('active');
    };

    const swipePositionRem = calculateSwipePosition();
    const transformValue = isVertical
        ? `translateY(-${currentIndex * swipePositionRem}rem)`
        : `translateX(-${currentIndex * swipePositionRem}rem)`;

    if (portfolioRef.current) {
        portfolioRef.current.style.transform = transformValue;
    }

    return (
        <CSSTransition
            in={showContent}
            timeout={1000}
            classNames="animated"
            mountOnEnter
            unmountOnExit
        >
            <section className="portfolio" id="portfolio">
                <div className="portfolio-head">
                    <h2 className="portfolio-title title">Portfolio</h2>
                    <div className="portfolio-subtitle subtitle">My works</div>
                    <div className="portfolio-divider divider"></div>
                </div>

                <div
                    className={`portfolio__items ${isVertical ? 'vertical' : 'horizontal'}`}
                    ref={portfolioRef}
                >
                        {portfolioData.map(({ id, src, alt, title, description, linkGit, link }, index) => {
                            const isVisible = index >= currentIndex && index < currentIndex + itemsToShow;
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
                                    onClick={() => handleItemClick(index)}
                                />
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
