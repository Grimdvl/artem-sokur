import { CSSTransition } from 'react-transition-group';
import {useState, useEffect } from 'react';

import promoPhoto from '../../../assets/img/promo-photo.png';

const PromoPage = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        setShowContent(true);
    }, []);

    return (

        <section className="promo" id="promo">
            <div className="promo__content">
                <CSSTransition
                    in={showContent}
                    timeout={0}
                    classNames="slideBottom"
                    mountOnEnter
                    unmountOnExit
                    >
                    <h1 className="promo__content-title">Hi, I'm Artem Sokur</h1>
                </CSSTransition>
                <CSSTransition
                    in={showContent}
                    timeout={500}
                    classNames="slideRight"
                    mountOnEnter
                    unmountOnExit
                    >
                    <div className="wrapper-subtitle">
                        <span className="promo__content-subtitle">Frontend Developer</span>
                    </div>
                </CSSTransition>
                <CSSTransition
                    in={showContent}
                    timeout={0}
                    classNames="slideTop"
                    mountOnEnter
                    unmountOnExit
                    >
                    <div className="divider"></div>
                </CSSTransition>
                <CSSTransition
                    in={showContent}
                    timeout={500}
                    classNames="slideLeft"
                    mountOnEnter
                    unmountOnExit
                    >
                    <p className="promo__content-description">I'm a novice in web development with experience in creating websites and landing pages. Ready to transform your vision into functional and appealing web solutions. My goal is to turn your ideas into reality and craft high-quality online projects that meet your requirements.</p>
                </CSSTransition>
                <CSSTransition
                    in={showContent}
                    timeout={1000}
                    classNames="slideTop"
                    mountOnEnter
                    unmountOnExit
                    >
                    <button className="promo__content--button">Download CV</button>
                </CSSTransition>
            </div>
            <CSSTransition
                    in={showContent}
                    timeout={1000}
                    classNames="zoomIn"
                    mountOnEnter
                    unmountOnExit
                    >
                <div className="promo__photo">
                    <span className="promo__photo-circle"></span>
                    <img className="promo__photo-img" src={promoPhoto} alt="Artem Sokur"/>
                </div>
            </CSSTransition>
        </section>
    );
}

export default PromoPage;