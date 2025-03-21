import { useState, useEffect } from 'react';

const MenuBar = ({ activeLanguage, setActiveLanguage, isDarkMode, setDarkMode }) => {
    const [isMenuActive, setMenuActive] = useState(false);

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        const savedMode = localStorage.getItem('darkMode') === 'true';
        
        if (savedLanguage) {
            setActiveLanguage(savedLanguage);
        }
        
        if (savedMode !== null) {
            setDarkMode(savedMode);
            applyMode(savedMode);
        }
    }, [setActiveLanguage, setDarkMode]);

    const applyMode = (isDark) => {
        const root = document.documentElement;
        document.documentElement.classList.toggle("dark-mode", isDark);

        if (isDark) {
            root.style.setProperty("--main-color", "#2EA6FF");
            root.style.setProperty("--text-color", "#FFF");
            root.style.setProperty("--text-second", "#18222C");
            root.style.setProperty("--cards-bg", "rgba(24, 34, 44, .75)");
        } else {
            root.style.setProperty("--main-color", "#FFA501");
            root.style.setProperty("--text-color", "#000");
            root.style.setProperty("--text-second", "#FFF");
            root.style.setProperty("--cards-bg", "rgba(255, 255, 255, .75)");
        }
    };

    const toggleMenu = () => {
        setMenuActive(!isMenuActive);
    };

    const toggleMode = () => {
        setDarkMode((prev) => {
            const newMode = !prev;
            localStorage.setItem('darkMode', newMode);
            applyMode(newMode);
            return newMode;
        });
    };

    const changeLanguage = (language) => {
        setActiveLanguage(language);
        localStorage.setItem('language', language);
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
