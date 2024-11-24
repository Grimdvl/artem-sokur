const ContactsPage = () => {
    return (
        <section className="contacts" id="contacts">
            <div className="contacts__descr">
                <h2 className="contacts__descr-title">Contacts</h2>
                <div className="contacts__contact">Text me on <span className="multiple-text"></span></div>
                <div className="divider"></div>
                
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
                        <label for="name">Your name</label>
                    </div>
                    <div className="contacts__input">
                        <input required name="phone" id="phone" type="phone"/>
                        <label for="phone">Your number</label>
                    </div>
                    <div className="contacts__input">
                        <input required name="email" id="email" type="email"/>
                        <label for="email">Your email</label>
                    </div>
                    <div className="contacts__textarea">
                        <textarea required name="text" id="text"></textarea>
                        <label for="text">Your message</label>
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
    );
}

export default ContactsPage;