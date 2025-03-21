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
    const [activeLanguage, setActiveLanguage] = useState('EN');
    const [isDarkMode, setDarkMode] = useState(
        localStorage.getItem('darkMode') === 'true'
    );
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        localStorage.setItem('darkMode', isDarkMode);
    }, [isDarkMode]);

    return (
        <main className="app">
            {/* Экран загрузки */}
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
                    zIndex: 9999
                }}>
                    Загрузка...
                </div>
            )}

            <NavigationMenu
                setActiveSection={setActiveSection}
                activeSection={activeSection}
                setShowPromo={setShowPromo}
                showPromo={showPromo}
            />

            <MenuBar
                activeLanguage={activeLanguage}
                setActiveLanguage={setActiveLanguage}
                isDarkMode={isDarkMode}
                setDarkMode={setDarkMode}
            />

            <PromoPage
                isAnimated={activeSection === 'promo'}
                showPromo={showPromo}
                setShowPromo={setShowPromo}
                activeLanguage={activeLanguage}
            />
            <ResumePage isAnimated={activeSection === 'resume'} activeLanguage={activeLanguage} />
            <SkillsPage
                isAnimated={activeSection === 'skills'}
                isDarkMode={isDarkMode}
                activeLanguage={activeLanguage}
            />
            <PortfolioPage
                isAnimated={activeSection === 'portfolio'}
                isDarkMode={isDarkMode}
                activeLanguage={activeLanguage}
            />
            <ContactsPage isAnimated={activeSection === 'contacts'} activeLanguage={activeLanguage} />
        </main>
    );
}

export default App;
