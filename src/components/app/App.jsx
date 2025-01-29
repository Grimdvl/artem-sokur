import { Suspense, useState } from 'react';

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

            <Suspense fallback={<div>Loading...</div>}>
                <PromoPage
                    isAnimated={activeSection === 'promo'}
                    showPromo={showPromo}
                    setShowPromo={setShowPromo}/>
                <ResumePage isAnimated={activeSection === 'resume'} />
                <SkillsPage isAnimated={activeSection === 'skills'} isDarkMode={isDarkMode}/>
                <PortfolioPage isAnimated={activeSection === 'portfolio'} isDarkMode={isDarkMode}/>
                <ContactsPage isAnimated={activeSection === 'contacts'} />
            </Suspense>
        </main>
    );
}

export default App;
