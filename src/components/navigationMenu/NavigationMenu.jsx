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

const NavigationMenu = ({ setActiveSection, activeSection }) => {
    const sections = useMemo(() => ({
        resume: "person-outline",
        skills: "school-outline",
        portfolio: "briefcase-outline",
        contacts: "mail-outline",
    }), []);

    const [isIndicatorVisible, setIndicatorVisible] = useState(false);

    const handleScroll = useCallback(() => {
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

        if (foundSection && foundSection !== activeSection) {
            setActiveSection(foundSection);
            setIndicatorVisible(true);
        } else if (!foundSection && scrollY <= 400 && activeSection !== 'promo') {
            setActiveSection('promo');
            setIndicatorVisible(false);
        }
    }, [sections, setActiveSection, activeSection]);

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
    );
};

export default NavigationMenu;