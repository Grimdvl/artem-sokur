import { CSSTransition } from 'react-transition-group';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import translations from '../../../components/menuBar/LanguageData';

const ContactsPage = ({ isAnimated, activeLanguage }) => {
    const typedElement = useRef(null);

    useEffect(() => {
        if (typedElement.current) {
            const typed = new Typed(typedElement.current, {
                strings: ['Facebook', 'Telegram', 'Instagram'],
                typeSpeed: 100,
                backSpeed: 100,
                backDelay: 1000,
                loop: true
            });

            return () => {
                typed.destroy();
            };
        }
    }, [isAnimated]);

    const { title, subtitle, formText, placeholders, sendButton, policyText, privacyPolicy } = translations[activeLanguage].contacts;

    return (
        <CSSTransition in={isAnimated} timeout={1000} classNames="animated">
            <section className="contacts" id="contacts">
                <div className="contacts__descr">
                    <div className="contacts-head">
                        <h2 className="contacts__descr-title fade-in-down">{title}</h2>
                        <div className="contacts__contact-subtitle fade-in-right">
                            {subtitle} <span ref={typedElement} className="multiple-text"></span>
                        </div>
                        <div className="contacts__contact-divider divider fade-in-up"></div>
                    </div>
                    
                    <div className="contacts__social fade-in-left">
                        <a href="https://www.facebook.com/profile.php?id=100079481086820" target="_blank" rel="noopener noreferrer" className="contacts__link">
                            <i className='bx bxl-facebook'></i>
                        </a>
                        <a href="https://t.me/Grim_679" target="_blank" rel="noopener noreferrer" className="contacts__link">
                            <i className='bx bxl-telegram'></i>
                        </a>
                        <a href="https://www.instagram.com/artemsokur69" target="_blank" rel="noopener noreferrer" className="contacts__link">
                            <i className='bx bxl-instagram-alt'></i>
                        </a>
                    </div>
                    <div className="contacts__text fade-in">{formText}</div>

                    <form action="#" className="contacts__form fade-in">
                        <div className="contacts__input">
                            <input required name="name" id="name" type="text"/>
                            <label htmlFor="name">{placeholders.name}</label>
                        </div>
                        <div className="contacts__input">
                            <input required name="phone" id="phone" type="phone"/>
                            <label htmlFor="phone">{placeholders.phone}</label>
                        </div>
                        <div className="contacts__input">
                            <input required name="email" id="email" type="email"/>
                            <label htmlFor="email">{placeholders.email}</label>
                        </div>
                        <div className="contacts__textarea">
                            <textarea required name="text" id="text"></textarea>
                            <label htmlFor="text">{placeholders.message}</label>
                        </div>
                        <div className="contacts__triggers">
                            <button className="contacts__btn btn">{sendButton}</button>
                            <div className="contacts__policy">
                                <input required name="checkbox" id="checkbox" type="checkbox"/>
                                <span>{policyText} <a href="/policy/policy.html" target="_blank" rel="noopener noreferrer">{privacyPolicy}</a></span>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </CSSTransition>
    );
};

export default ContactsPage;
