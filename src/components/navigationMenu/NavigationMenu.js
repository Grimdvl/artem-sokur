const NavigationMenu = () => {
    // import {loadingSkillsCards} from './cards';
    // import skills from './skills';
    // import portfolioTrigger from './portfolio';

    function navigation(linksSelector, activeClass, sectionsSelector, indicatorSelector) {
        const links = document.querySelectorAll(linksSelector),
            indicator = document.querySelector(indicatorSelector),
            sections = document.querySelectorAll(sectionsSelector);

        const sectionsMap = {
            'promo': document.querySelector('.promo'),
            'resume': document.querySelector('.resume'),
            'skills': document.querySelector('.skills'),
            'portfolio': document.querySelector('.portfolio'),
            'contacts': document.querySelector('.contacts'),
        };

        let isSkillsCardsLoaded = false;

        function removeActiveClass() {
            links.forEach((item) => {
                item.classList.remove(activeClass);
            });
        }

        function removeAnimatedClass() {
            Object.values(sectionsMap).forEach(section => {
                if (section && section.classList) {
                    section.classList.remove('animated');
                }
            });
        }

        function scrollNavigation() {
            sections.forEach(section => {
                const promoSection = document.querySelector('.promo');
                const link = document.querySelector(`a[href="#${section.id}"]`),
                    top = window.scrollY,
                    offset = section.offsetTop - 300,
                    height = section.offsetHeight;

                if (top >= offset && top < offset + height && link) {
                    removeActiveClass();
                    removeAnimatedClass();
                    indicator.classList.remove('hide');
                    indicator.classList.add('show');
                    if (!sectionsMap[section.id].classList.contains('animated')) {
                        sectionsMap[section.id].classList.add('animated');
                        // if (sectionsMap.skills.classList.contains('animated') && !isSkillsCardsLoaded) {
                        //     isSkillsCardsLoaded = true;
                        //     loadingSkillsCards('.skills__card-front-icon', '.counter');
                        //     skills('.skills__ratings-counter', '.skills__ratings-line span');
                        // }
                        if (!sectionsMap.skills.classList.contains('animated') && isSkillsCardsLoaded) {
                            isSkillsCardsLoaded = false;
                            const blocks = document.querySelectorAll('.skills__card-front-icon .block');
                            const counters = document.querySelectorAll('.counter');
                            const width = document.querySelectorAll('.skills__ratings-line span');
                            const countersSecond = document.querySelectorAll('.skills__ratings-counter');

                            countersSecond.forEach((counterSecond) => {
                                counterSecond.textContent = '';
                            });
                            width.forEach((item) => {
                                item.style.width = 0;
                            });
                            blocks.forEach((block) => {
                                block.remove();
                            });
                            counters.forEach((counter) => {
                                counter.textContent = '';
                            });
                        }
                        // if (!sectionsMap.portfolio.classList.contains('animated')) {
                        //     portfolioTrigger('.portfolio__items-item', 'active', '.portfolio__items');
                        // }
                    }
                    link.parentNode.classList.add(activeClass);
                } else if (top <= 400) {
                    removeActiveClass();
                    removeAnimatedClass();
                    indicator.classList.remove('show');
                    indicator.classList.add('hide');
                    promoSection.classList.add('animated');
                    document.querySelector('.home').classList.remove('active');
                } else if (top >= 400) {
                    document.querySelector('.home').classList.add('active');
                    promoSection.classList.remove('animated');
                }
            });
        }

        window.addEventListener('scroll', scrollNavigation);
    }

    navigation('.navigation__link', 'active', 'section', '.indicator');
    return (
        <div className="wrapper-nav">
            <nav className="navigation">
                <ul className="navigation__list">
                <li className="navigation__link">
                <a href="#resume" className="navigation__link-item">
                    <span className="icon">
                    <ion-icon name="person-outline"></ion-icon>
                    </span>
                </a>
                </li>
                <li className="navigation__link">
                <a href="#skills" className="navigation__link-item">
                    <span className="icon">
                    <ion-icon name="school-outline"></ion-icon>
                </span>
                </a>
                </li>
                <li className="navigation__link">
                <a href="#portfolio" className="navigation__link-item">
                    <span className="icon">
                    <ion-icon name="briefcase-outline"></ion-icon>
                    </span>
                </a>
                </li>
                <li className="navigation__link">
                    <a href="#contacts" className="navigation__link-item">
                        <span className="icon">
                        <ion-icon name="mail-outline"></ion-icon>
                    </span>
                    </a>
                </li>
                <div className="indicator hide"></div>
                </ul>
            </nav>

            <a href="#promo" className="home">
                <i className='home--up bx bx-chevron-up'></i>
            </a>
        </div>
    );
}

export default NavigationMenu;