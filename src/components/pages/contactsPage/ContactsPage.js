const ContactsPage = () => {
    return (
        <section class="contacts" id="contacts">
            <div class="contacts__descr">
                <h2 class="contacts__descr-title">Contacts</h2>
                <div class="contacts__contact">Text me on <span class="multiple-text"></span></div>
                <div class="divider"></div>
                
                <div class="contacts__social">
                    <a href="https://www.facebook.com/profile.php?id=100079481086820" target="_blank" class="contacts__link">
                        <i class='bx bxl-facebook'></i>
                    </a>
                    <a href="https://t.me/Grim_679" target="_blank" class="contacts__link">
                        <i class='bx bxl-telegram'></i>
                    </a>
                    <a href="https://www.instagram.com/artemsokur69" target="_blank" class="contacts__link">
                        <i class='bx bxl-instagram-alt'></i>
                    </a>
                </div>
                <div class="contacts__text">Or leave your contact information, and I will get in touch with you:</div>

                <form action="#" class="contacts__form">
                    <div class="contacts__input">
                        <input required name="name" id="name" type="text"/>
                        <label for="name">Your name</label>
                    </div>
                    <div class="contacts__input">
                        <input required name="phone" id="phone" type="phone"/>
                        <label for="phone">Your number</label>
                    </div>
                    <div class="contacts__input">
                        <input required name="email" id="email" type="email"/>
                        <label for="email">Your email</label>
                    </div>
                    <div class="contacts__textarea">
                        <textarea required name="text" id="text"></textarea>
                        <label for="text">Your message</label>
                    </div>
                    <div class="contacts__triggers">
                        <button class="contacts__btn btn">Send message</button>
                        <div class="contacts__policy">
                            <input required name="checkbox" id="checkbox" type="checkbox"/>
                            <span>I agree with the <a href="/policy/policy.html" target="_blank">privacy policy</a></span>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default ContactsPage;