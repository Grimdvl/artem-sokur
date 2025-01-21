// import { CSSTransition } from 'react-transition-group';
import { useState, useEffect, useMemo } from 'react';

const NavigationMenu = () => {
    const sections = useMemo(
        () => ({
            resume: "person-outline",
            skills: "school-outline",
            portfolio: "briefcase-outline",
            contacts: "mail-outline",
        }),
        []
    );

    const [activeSection, setActiveSection] = useState('');
    const [promoActive, setPromoActive] = useState(false);
    const [isIndicatorVisible, setIndicatorVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            let foundSection = null;

            for (const section of Object.keys(sections)) {
                const sectionElement = document.getElementById(section);
                if (sectionElement) {
                    const offsetTop = sectionElement.offsetTop - 300;
                    const offsetHeight = sectionElement.offsetHeight;

                    if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
                        foundSection = section;
                        break;
                    }
                }
            }

            if (foundSection) {
                setActiveSection(foundSection);
                setIndicatorVisible(true);
                setPromoActive(true);
            } else if (scrollY <= 400) {
                setPromoActive(false);
                setIndicatorVisible(false);
                setActiveSection('');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    const NavigationMenuItem = ({ section, icon }) => {
        return (
            <li className={`navigation__link ${activeSection === section ? 'active' : ''}`}>
                <a href={`#${section}`} className="navigation__link-item">
                    <span className="icon">
                        <ion-icon name={icon}></ion-icon>
                    </span>
                </a>
            </li>
        );
    };

    return (
        <div className="wrapper-nav">
            <nav className="navigation">
                <ul className="navigation__list">
                    {Object.keys(sections).map((section) => (
                        <NavigationMenuItem
                            key={section}
                            section={section}
                            icon={sections[section]}
                        />
                    ))}
                        <div className={`indicator ${isIndicatorVisible ? 'show' : 'hidden'}`}></div>
                </ul>
            </nav>

            <a href="#promo" className={`home ${promoActive ? 'active' : ''}`}>
                <i className="home--up bx bx-chevron-up"></i>
            </a>
        </div>
    );
};

export default NavigationMenu;