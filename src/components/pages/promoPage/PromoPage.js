import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useState, useEffect } from 'react';

import promoPhoto from '../../../assets/img/promo-photo.png';

const PromoPage = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        setShowContent(true);
    }, []);

    return (
        <section
        className="promo animated" id="promo"
        >
            <div className="promo__content">
                <h1 className="promo__content-title">Hi, I'm Artem Sokur</h1>
                <div className="wrapper-subtitle">
                    <span className="promo__content-subtitle">Frontend Developer</span>
                </div>
                <div className="divider"></div>

                <p className="promo__content-description">I'm a novice in web development with experience in creating websites and landing pages. Ready to transform your vision into functional and appealing web solutions. My goal is to turn your ideas into reality and craft high-quality online projects that meet your requirements.</p>
                <button className="promo__content--button">Download CV</button>
            </div>
            <div className="promo__photo">
                <span className="promo__photo-circle"></span>
                <img className="promo__photo-img" src={promoPhoto} alt="Artem Sokur"/>
            </div>
            {/* <TransitionGroup className="promo animated" id="promo">
                {showContent && (
                    <>
                        <div className="promo__content">
                            <CSSTransition timeout={1000} classNames="fade" in={showContent} appear>
                                <h1 className="promo__content-title">Hi, I'm Artem Sokur</h1>
                            </CSSTransition>

                            <CSSTransition timeout={1500} classNames="slide" in={showContent} appear>
                                <div className="wrapper-subtitle">
                                    <span className="promo__content-subtitle">Frontend Developer</span>
                                </div>
                            </CSSTransition>

                            <CSSTransition timeout={2000} classNames="slide" in={showContent} appear>
                                <div className="divider"></div>
                            </CSSTransition>

                            <CSSTransition timeout={2500} classNames="fade" in={showContent} appear>
                                <p className="promo__content-description">
                                    I'm a novice in web development with experience in creating websites and landing pages. Ready to transform your vision into functional and appealing web solutions. My goal is to turn your ideas into reality and craft high-quality online projects that meet your requirements.
                                </p>
                            </CSSTransition>

                            <CSSTransition timeout={3000} classNames="slide" in={showContent} appear>
                                <button className="promo__content--button">Download CV</button>
                            </CSSTransition>
                        </div>
                        <div className="promo__photo">
                            <span className="promo__photo-circle"></span>
                            <img className="promo__photo-img" src={promoPhoto} alt="Artem Sokur"/>
                        </div>
                    </>
                )}
            </TransitionGroup> */}
        </section>
    );
}

export default PromoPage;