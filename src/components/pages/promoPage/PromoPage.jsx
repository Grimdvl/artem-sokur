import { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import promoPhoto from '../../../assets/img/photo/promo-photo.png';
import translations from '../../../components/menuBar/LanguageData';

const PromoPage = ({ isAnimated, showPromo, setShowPromo, activeLanguage }) => {
    useEffect(() => {
        setShowPromo(true);
    }, [setShowPromo]);

    const { greeting, role, description, downloadCV } = translations[activeLanguage].promo;

    return (
        <CSSTransition in={isAnimated && showPromo} timeout={1000} classNames="animated">
            <section id="promo" className="promo">
                <div className="promo__content">
                    <div className="promo-head">
                        <h1 className="promo__content-title fade-in-down">{greeting}</h1>
                        <div className="wrapper-subtitle fade-in-right">
                            <span className="promo__content-subtitle">{role}</span>
                        </div>
                        <div className="promo__content-divider divider fade-in-up"></div>
                    </div>
                    <p className="promo__content-description fade-in-left">{description}</p>
                    <button className="promo__content--button fade-in">{downloadCV}</button>
                </div>
                <div className="promo__photo fade-in">
                    <span className="promo__photo-circle"></span>
                    <img className="promo__photo-img" src={promoPhoto} alt="Artem Sokur" />
                </div>
            </section>
        </CSSTransition>
    );
};

export default PromoPage;
