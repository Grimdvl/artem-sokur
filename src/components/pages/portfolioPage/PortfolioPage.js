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
    const itemsRef = useRef([]);

    const itemsToShow = 10;
    const activeClass = 'active';

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

    const removeActiveClass = () => {
        itemsRef.current.forEach((item) => {
            if (item) {
                item.classList.remove(activeClass);
            }
        });
        portfolioRef.current.classList.remove(activeClass);
        portfolioRef.current.style.marginTop = '0';
        portfolioRef.current.style.marginBottom = '0';
    };

    const addActiveClass = (index) => {
        removeActiveClass();
        const clickedItem = itemsRef.current[index];
        if (clickedItem) {
            clickedItem.classList.add(activeClass);
        }
        portfolioRef.current.classList.add(activeClass);

        if (isVertical) {
            if (index === 0) {
                portfolioRef.current.style.marginTop = '10vh';
                portfolioRef.current.style.marginBottom = '0';
            } else if (index === 1 || index === 2) {
                portfolioRef.current.style.marginTop = '5vh';
                portfolioRef.current.style.marginBottom = '0';
            } else {
                portfolioRef.current.style.marginTop = '0';
                portfolioRef.current.style.marginBottom = '5vh';
            }
        }
    };

    const handleItemClick = (index) => {
        setActiveIndex(index);
        setParentActive(true);
        addActiveClass(index);
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
                    <h2 className="portfolio__head-title fade-in-down">Portfolio</h2>
                    <div className="portfolio__head-subtitle fade-in-right">My works</div>
                    <div className="portfolio__head-divider divider fade-in-up"></div>
                </div>

                <div
                    className={`portfolio__items fade-in ${isVertical ? 'vertical' : 'horizontal'} ${
                        parentActive ? 'active' : ''
                    }`}
                    ref={portfolioRef}
                >
                    {portfolioData.map(({ id, src, alt, title, description, linkGit, link }, index) => {
                        const isVisible = index >= currentIndex && index < currentIndex + itemsToShow;
                        return (
                            <CSSTransition
                                key={id}
                                in={isVisible}
                                timeout={0}
                                classNames="slide"
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
                                    ref={(el) => (itemsRef.current[index] = el)}
                                    isHidden={!isVisible}
                                    isActive={activeIndex === index}
                                    onClick={() => handleItemClick(index)}
                                />
                            </CSSTransition>
                        );
                    })}
                </div>

                <div className="portfolio__slide fade-in">
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
