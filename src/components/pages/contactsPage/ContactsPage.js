import { CSSTransition } from 'react-transition-group';
import { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';

const ContactsPage = ({isAnimated}) => {
    const [showContent, setShowContent] = useState(false);
    const typedElement = useRef(null)

    useEffect(() => {
        setShowContent(true);

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
    }, [showContent]);

    return (
        <>
        <CSSTransition
            in={isAnimated}
            timeout={1000}
            classNames="animated"
            // mountOnEnter
            // unmountOnExit
            >
            <section className="contacts" id="contacts">
                <div className="contacts__descr">
                    <div className="contacts-head">
                        <h2 className="contacts__descr-title fade-in-down">Contacts</h2>
                        <div className="contacts__contact-subtitle fade-in-right">Text me on <span ref={typedElement} className="multiple-text"></span></div>
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
                    <div className="contacts__text fade-in">Or leave your contact information, and I will get in touch with you:</div>

                    <form action="#" className="contacts__form fade-in">
                        <div className="contacts__input">
                            <input required name="name" id="name" type="text"/>
                            <label htmlFor="name">Your name</label>
                        </div>
                        <div className="contacts__input">
                            <input required name="phone" id="phone" type="phone"/>
                            <label htmlFor="phone">Your number</label>
                        </div>
                        <div className="contacts__input">
                            <input required name="email" id="email" type="email"/>
                            <label htmlFor="email">Your email</label>
                        </div>
                        <div className="contacts__textarea">
                            <textarea required name="text" id="text"></textarea>
                            <label htmlFor="text">Your message</label>
                        </div>
                        <div className="contacts__triggers">
                            <button className="contacts__btn btn">Send message</button>
                            <div className="contacts__policy">
                                <input required name="checkbox" id="checkbox" type="checkbox"/>
                                <span>I agree with the <a href="/policy/policy.html" target="_blank" rel="noopener noreferrer">privacy policy</a></span>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </CSSTransition>
        </>
    );
}

export default ContactsPage;