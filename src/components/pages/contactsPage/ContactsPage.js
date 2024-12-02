import { CSSTransition } from 'react-transition-group';
import { useState, useEffect } from 'react';

const ContactsPage = () => {
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
            <section className="contacts" id="contacts">
                <div className="contacts__descr">
                    <h2 className="contacts__descr-title title">Contacts</h2>
                    <div className="contacts__contact-subtitle subtitle">Text me on <span className="multiple-text"></span></div>
                    <div className="contacts__contact-divider divider"></div>
                    
                    <div className="contacts__social">
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
                    <div className="contacts__text">Or leave your contact information, and I will get in touch with you:</div>

                    <form action="#" className="contacts__form">
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