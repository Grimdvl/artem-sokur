import { useState, useEffect, useMemo } from 'react';

const NavigationMenu = ({setActiveSectionCallback, setShowPromo, showPromo}) => {
    const sections = useMemo(
        () => ({
            resume: "person-outline",
            skills: "school-outline",
            portfolio: "briefcase-outline",
            contacts: "mail-outline",
        }),
    []);

    const [activeSection, setActiveSection] = useState('');
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
                setActiveSectionCallback(foundSection);
                setShowPromo(false);
            } else if (scrollY <= 400) {
                setShowPromo(true);
                setIndicatorVisible(false);
                setActiveSection('');
                setActiveSectionCallback('promo');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections, setActiveSectionCallback, setShowPromo, showPromo]);

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

            <a href="#promo" className={`home ${!showPromo ? 'active' : ''}`}>
                <i className="home--up bx bx-chevron-up"></i>
            </a>
        </div>
    );
};

export default NavigationMenu;