import { useState } from 'react';

const MenuBar = () => {
    const [isMenuActive, setMenuActive] = useState(false);
    const [isDarkMode, setDarkMode] = useState(false);
    const [hasSkillsLoaded, setSkillsLoaded] = useState(false);
    const [activeLanguage, setActiveLanguage] = useState('EN');

    const toggleMenu = () => {
        setMenuActive(!isMenuActive);
    };

    const toggleMode = () => {
        setDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark-mode');

        const root = document.documentElement;

        if (!isDarkMode) {
            root.style.setProperty('--main-color', '#2EA6FF');
            // root.style.setProperty('--second-color', '#FFA501');
            root.style.setProperty('--text-color', '#FFF');
            root.style.setProperty('--text-second', '#18222C');
        } else {
            root.style.setProperty('--main-color', '#FFA501');
            // root.style.setProperty('--second-color', '#2EA6FF');
            root.style.setProperty('--text-color', '#000');
            root.style.setProperty('--text-second', '#FFF');
        }

        if (!hasSkillsLoaded) {
            setSkillsLoaded(true);

            clearSkills();
            setTimeout(() => {
                loadSkills();
                setSkillsLoaded(false);
            }, 500);
        }
    };

    const clearSkills = () => {
        console.log('Clearing skills data...');
    };

    const loadSkills = () => {
        console.log('Loading skills data...');
    };

    const changeLanguage = (language) => {
        setActiveLanguage(language);
    };

    return (
        <>
            <div className={`color ${isDarkMode ? 'active' : ''}`}></div>
            
            <ul className={`menu ${isMenuActive ? 'active' : ''}`}>
                <button className="menu-bar" onClick={toggleMenu}>
                    <ion-icon name="add-outline"></ion-icon>
                </button>

                <li style={{ '--i': 0 }} className="menu-list">
                    <button className={`mode ${isDarkMode ? 'active' : ''}`} onClick={toggleMode}>
                        <ion-icon class="mode--light md hydrated" name="sunny-outline" role="img"></ion-icon>
                        <ion-icon class="mode--dark md hydrated" name="moon-outline" role="img"></ion-icon>
                    </button>
                </li>

                {['EN', 'UA', 'RU'].map((lang, index) => (
                    <li
                        key={lang}
                        style={{ '--i': index + 1 }}
                        className="menu-list">
                        <button
                            className={`language ${activeLanguage === lang ? 'active' : ''}`}
                            onClick={() => changeLanguage(lang)}>{lang}</button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default MenuBar;
