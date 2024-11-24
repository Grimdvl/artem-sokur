import promoPhoto from '../../../assets/img/promo-photo.png';

const PromoPage = () => {
    return (
        <section className="promo animated" id="promo">
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
        </section>
    );
}

export default PromoPage;