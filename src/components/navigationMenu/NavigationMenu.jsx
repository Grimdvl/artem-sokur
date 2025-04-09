import { CSSTransition } from 'react-transition-group';
import { useState, useEffect, useMemo, useCallback, memo } from 'react';

const NavigationMenuItem = memo(({ section, icon, activeSection }) => {
    return (
        <li className={`navigation__link ${activeSection === section ? 'active' : ''}`}>
            <a href={`#${section}`} className="navigation__link-item">
                <span className="icon">
                    <ion-icon name={icon}></ion-icon>
                </span>
            </a>
        </li>
    );
});

const NavigationMenu = ({ isAnimated, setActiveAttribute, activeAttribute, setActiveSection, activeSection }) => {
    const sections = useMemo(() => ({
        resume: "person-outline",
        skills: "school-outline",
        portfolio: "briefcase-outline",
        contacts: "mail-outline",
    }), []);
    const attributs = useMemo(() => (['data-skills-wrapper-card', 'data-skills-ratings-items']), []);

    const [isIndicatorVisible, setIndicatorVisible] = useState(false);

    const handleScroll = useCallback(() => {
        const scrollY = window.scrollY;

        let foundSection = null;
        let foundAttribute = null;

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
        for (const attribute of attributs) {
            const attributeElements = document.querySelectorAll(`[${attribute}]`);
            for (const attributeElement of attributeElements) {
                const rect = attributeElement.getBoundingClientRect();
                const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        
                if (isInViewport) {
                    foundAttribute = attribute;
                    break;
                }
            }
            if (foundAttribute) break;
        }
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setIsAnimated(true);
    //     }, 1000);

    //     return () => clearTimeout(timer);
    // }, []);

        if (foundSection && foundSection !== activeSection) {
            setActiveSection(foundSection);
            setIndicatorVisible(true);
        } else if (!foundSection && scrollY <= 400 && activeSection !== 'promo') {
            setActiveSection('promo');
            setIndicatorVisible(false);
        }

        if (foundAttribute && foundAttribute !== activeAttribute) {
            setActiveAttribute(foundAttribute);
        }  else if (!foundAttribute) {
            setActiveAttribute(null);
        }

    }, [sections, attributs, setActiveAttribute, activeAttribute, setActiveSection, activeSection]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const navigationItems = useMemo(() => {
        return Object.keys(sections).map((section) => (
            <NavigationMenuItem
                key={section}
                section={section}
                icon={sections[section]}
                activeSection={activeSection}
            />
        ));
    }, [sections, activeSection]);

    return (
        <CSSTransition in={isAnimated} timeout={1000} unmountOnExit>
            <div className="wrapper-nav">
                <nav className="navigation">
                    <ul className="navigation__list">
                        {navigationItems}
                        <div className={`indicator ${isIndicatorVisible ? 'show' : 'hidden'}`}></div>
                    </ul>
                </nav>

                <a href="#promo" className={`home ${activeSection !== 'promo' ? 'active' : ''}`}>
                    <i className="home--up bx bx-chevron-up"></i>
                </a>
            </div>
        </CSSTransition>
    );
};

export default NavigationMenu;
