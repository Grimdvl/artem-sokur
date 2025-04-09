import { useState, useEffect } from 'react';

import NavigationMenu from '../navigationMenu/NavigationMenu';
import MenuBar from '../menuBar/MenuBar';
import {
    PromoPage,
    ResumePage,
    SkillsPage,
    PortfolioPage,
    ContactsPage
} from '../pages';

function App() {
    const [activeSection, setActiveSection] = useState('promo');
    const [showPromo, setShowPromo] = useState(false);
    const [activeAttribute, setActiveAttribute] = useState(null);
    const [activeLanguage, setActiveLanguage] = useState('EN');
    const [isDarkMode, setDarkMode] = useState(
        localStorage.getItem('darkMode') === 'true'
    );
    const [isLoading, setIsLoading] = useState(true);
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            setTimeout(() => setHasLoaded(true), 50);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        localStorage.setItem('darkMode', isDarkMode);
    }, [isDarkMode]);

    return (
        <main className="app">
            {isLoading && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    zIndex: 3
                }}>Загрузка...</div>
            )}
            <NavigationMenu
                isAnimated={hasLoaded}
                setActiveAttribute={setActiveAttribute}
                setActiveSection={setActiveSection}
                activeSection={activeSection}
                setShowPromo={setShowPromo}
                showPromo={showPromo}
            />
            <MenuBar
                isAnimated={hasLoaded}
                activeLanguage={activeLanguage}
                setActiveLanguage={setActiveLanguage}
                isDarkMode={isDarkMode}
                setDarkMode={setDarkMode}
            />
            <PromoPage
                isAnimated={hasLoaded && activeSection === 'promo'}
                showPromo={showPromo}
                setShowPromo={setShowPromo}
                activeLanguage={activeLanguage}
            />
            <ResumePage
                isAnimated={hasLoaded && activeSection === 'resume'}
                activeLanguage={activeLanguage}
            />
            <SkillsPage
                isAnimated={hasLoaded && activeSection === 'skills'}
                activeAttribute={activeAttribute === 'data-skills-ratings-items' || activeAttribute === 'data-skills-wrapper-card'}
                isDarkMode={isDarkMode}
                activeLanguage={activeLanguage}
            />
            <PortfolioPage
                isAnimated={hasLoaded && activeSection === 'portfolio'}
                isDarkMode={isDarkMode}
                activeLanguage={activeLanguage}
            />
            <ContactsPage
                isAnimated={hasLoaded && activeSection === 'contacts'}
                activeLanguage={activeLanguage}
            />
        </main>
    );
}

export default App;
