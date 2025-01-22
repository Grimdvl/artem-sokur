import { Suspense, useState } from 'react';

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
    const [showPromo, setShowPromo] = useState(false);

    return (
        <main className="app">
            <NavigationMenu setActiveSectionCallback={setActiveSection} setShowPromo={setShowPromo}/>

            <Suspense fallback={<div>Loading...</div>}>
                <PromoPage
                    isAnimated={activeSection === 'promo'}
                    showPromo={showPromo}
                    setShowPromo={setShowPromo}/>
                <ResumePage isAnimated={activeSection === 'resume'} />
                <SkillsPage isAnimated={activeSection === 'skills'} />
                <PortfolioPage isAnimated={activeSection === 'portfolio'} />
                <ContactsPage isAnimated={activeSection === 'contacts'} />
            </Suspense>
        </main>
    );
}

export default App;
