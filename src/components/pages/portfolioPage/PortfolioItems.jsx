const PortfolioItems = ({ src, alt, title, description, linkGit, link, isHidden, isActive, onClick, isDarkMode, activeLanguage }) => {
    return (
        <div
            className={`portfolio__items-item ${isActive ? 'active' : ''} ${isHidden ? 'hidden' : ''}`}
            tabIndex="1"
            onClick={onClick}
        >
            <img className="img" src={src} alt={alt} />
            <div className="descr">
                <h3 className="descr-title">
                    {title[activeLanguage]}  {/* Выводим текст на выбранном языке */}
                </h3>
                <p className="descr-text">
                    {description[activeLanguage]}  {/* Выводим описание на выбранном языке */}
                </p>
                <div className="descr__links">
                    <a
                        className="descr__links-git"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={linkGit}
                    >
                        <box-icon name="github" type="logo" color={isDarkMode ? "#000" : "#fff"}></box-icon>
                    </a>
                    <a
                        className="descr__links-site"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={link}
                    >
                        <box-icon name="link-external" color={isDarkMode ? "#000" : "#fff"}></box-icon>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PortfolioItems;
