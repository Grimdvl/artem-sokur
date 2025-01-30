import { useState } from 'react';

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
    const [isDarkMode, setDarkMode] = useState(false);

    return (
        <main className="app">
            <NavigationMenu
                setActiveSection={setActiveSection}
                activeSection={activeSection}
                setShowPromo={setShowPromo}
                showPromo={showPromo}/>

            <MenuBar
                activeLanguage={activeLanguage}
                setActiveLanguage={setActiveLanguage}
                isDarkMode={isDarkMode}
                setDarkMode={setDarkMode}/>

            <PromoPage
                isAnimated={activeSection === 'promo'}
                showPromo={showPromo}
                setShowPromo={setShowPromo}
                activeLanguage={activeLanguage}/>
            <ResumePage isAnimated={activeSection === 'resume'} activeLanguage={activeLanguage}/>
            <SkillsPage
                isAnimated={activeSection === 'skills'}
                isDarkMode={isDarkMode}
                activeLanguage={activeLanguage}/>
            <PortfolioPage
                isAnimated={activeSection === 'portfolio'}
                isDarkMode={isDarkMode}
                activeLanguage={activeLanguage}/>
            <ContactsPage isAnimated={activeSection === 'contacts'} activeLanguage={activeLanguage}/>
        </main>
    );
}

export default App;
