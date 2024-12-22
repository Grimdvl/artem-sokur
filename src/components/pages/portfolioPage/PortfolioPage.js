import { CSSTransition } from 'react-transition-group';
import { useState, useEffect } from 'react';

import portfolioData from './PortfolioData';
import PortfolioItems from './PortfolioItems';

const PortfolioPage = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        setShowContent(true);
    }, []);

    return (
        <>
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

                <div className="portfolio__items">
                    {portfolioData.map(({ id, src, alt, title, description, linkGit, link }) => (
                        <PortfolioItems
                            key={id}
                            src={src}
                            alt={alt}
                            title={title}
                            description={description}
                            linkGit={linkGit}
                            link={link}
                        />
                    ))}
                </div>


                <div className="portfolio__slide">
                    <button className="portfolio__slide-prev"><i className='bx bx-left-arrow-alt'></i></button>
                    <button className="portfolio__slide-next"><i className='bx bx-right-arrow-alt'></i></button>
                </div>
            </section>
        </CSSTransition>
        </>
    );
}

export default PortfolioPage;