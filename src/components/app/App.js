import { useState } from 'react';
import NavigationMenu from '../navigationMenu/NavigationMenu';

import {
    PromoPage,
    ResumePage,
    SkillsPage,
    PortfolioPage,
    ContactsPage
} from '../pages';

function App() {
    const [activeSection, setActiveSection] = useState('');

    return (
        <main className="app">
            <NavigationMenu setActiveSectionCallback={setActiveSection}/>
            <PromoPage isAnimated={activeSection === 'promo'}/>
            <ResumePage isAnimated={activeSection === 'resume'}/>
            <SkillsPage isAnimated={activeSection === 'skills'}/>
            <PortfolioPage isAnimated={activeSection === 'portfolio'}/>
            <ContactsPage isAnimated={activeSection === 'contacts'}/>
        </main>
    );
}

export default App;
