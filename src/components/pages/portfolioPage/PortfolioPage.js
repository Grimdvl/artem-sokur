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
    const [parentActive, setParentActive] = useState(false);

    const portfolioRef = useRef(null);

    const itemsToShow = 10;

    useEffect(() => {
        setShowContent(true);

        const handleResize = () => setIsVertical(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);

        const handleClickOutside = (event) => {
            if (portfolioRef.current && !portfolioRef.current.contains(event.target)) {
                setActiveIndex(null);
                setParentActive(false);
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

    // const calculateSwipePosition = () => {
    //     if (!portfolioRef.current) return 0;

    //     const firstItem = portfolioRef.current.firstElementChild;
    //     const gapSizeRem = 0.4;
    //     const itemSizeRem =
    //         isVertical
    //             ? firstItem.offsetHeight / parseFloat(getComputedStyle(document.documentElement).fontSize)
    //             : firstItem.offsetWidth / parseFloat(getComputedStyle(document.documentElement).fontSize);

    //     return itemSizeRem + gapSizeRem;
    // };

    const handleItemClick = (index) => {
        setActiveIndex(index);
        setParentActive(true);
    };

    const handleNextSlide = () => {
        const maxIndex = portfolioData.length - itemsToShow;
        if (currentIndex < maxIndex) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handlePrevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    // const swipePositionRem = calculateSwipePosition();
    // const transformValue = isVertical
    //     ? `translateY(-${currentIndex * swipePositionRem}rem)`
    //     : `translateX(-${currentIndex * swipePositionRem}rem)`;

    // useEffect(() => {
    //     if (portfolioRef.current) {
    //         portfolioRef.current.style.transform = transformValue;
    //     }
    // }, [transformValue]);

    return (
        <CSSTransition
            in={showContent}
            timeout={1000}
            classNames="animated"
            mountOnEnter
            unmountOnExit
            >
            <section className="portfolio" id="portfolio">
                <div className="portfolio__head">
                    <h2 className="portfolio__head-title title">Portfolio</h2>
                    <div className="portfolio__head-subtitle subtitle">My works</div>
                    <div className="portfolio__head-divider divider"></div>
                </div>

                <div className={`portfolio__items ${isVertical 
                    ? 'vertical' : 'horizontal'} ${parentActive 
                    ? 'active' : ''}`}
                    ref={portfolioRef}
                    >
                    {portfolioData.map(({ id, src, alt, title, description, linkGit, link }, index) => {
                        const isVisible = index >= currentIndex && index < currentIndex + itemsToShow;
                        return (
                            <CSSTransition
                            key={id}
                            in={isVisible}
                            timeout={0}
                            classNames='slide'
                            mountOnEnter
                            unmountOnExit
                            >
                            <PortfolioItems
                                id={id}
                                src={src}
                                alt={alt}
                                title={title}
                                description={description}
                                linkGit={linkGit}
                                link={link}
                                isHidden={!isVisible}
                                isActive={activeIndex === index}
                                onClick={() => handleItemClick(index)}
                                />
                        </CSSTransition>
                        )
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
