import { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import promoPhoto from '../../../assets/img/photo/promo-photo.png';

const PromoPage = ({ isAnimated, showPromo, setShowPromo }) => {
    useEffect(() => {
        setShowPromo(true);
    }, [setShowPromo]);

    return (
        <div id="promo" className="section-placeholder">
            <CSSTransition
                in={isAnimated || showPromo}
                timeout={1000}
                classNames="animated">
                <section className="promo">
                    <div className="promo__content">
                        <div className="promo-head">
                            <h1 className="promo__content-title fade-in-down">Hi, I'm Artem Sokur</h1>
                            <div className="wrapper-subtitle fade-in-right">
                                <span className="promo__content-subtitle">Frontend Developer</span>
                            </div>
                            <div className="promo__content-divider divider fade-in-up"></div>
                        </div>
                        <p className="promo__content-description fade-in-left">
                            I'm a novice in web development with experience in creating websites and landing pages.
                            Ready to transform your vision into functional and appealing web solutions. My goal is to
                            turn your ideas into reality and craft high-quality online projects that meet your
                            requirements.
                        </p>
                        <button className="promo__content--button fade-in">Download CV</button>
                    </div>
                    <div className="promo__photo fade-in">
                        <span className="promo__photo-circle"></span>
                        <img className="promo__photo-img" src={promoPhoto} alt="Artem Sokur" />
                    </div>
                </section>
            </CSSTransition>
        </div>
    );
};

export default PromoPage;