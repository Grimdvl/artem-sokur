import NavigationMenu from '../navigationMenu/NavigationMenu';

import {
    PromoPage,
    ResumePage,
    SkillsPage,
    PortfolioPage,
    ContactsPage
} from '../pages';

function App() {
    return (
        <main className="app">
            <NavigationMenu/>
            <PromoPage/>
            <ResumePage/>
            <SkillsPage/>
            <PortfolioPage/>
            <ContactsPage/>
        </main>
    );
}

export default App;
