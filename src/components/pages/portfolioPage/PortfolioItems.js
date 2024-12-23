const PortfolioItems = ({ id, src, alt, title, description, linkGit, link, isActive, isHidden, onClick }) => {
    return (
        <div
            className={`portfolio__items-item ${isActive ? 'active' : ''} ${isHidden ? 'hidden' : ''}`}
            tabIndex="1"
            onClick={onClick}
        >
            <img className="img" src={src} alt={alt} />
            <div className="descr">
                <h3 className="descr-title">{title}</h3>
                <p className="descr-text">{description}</p>
                <div className="descr__links">
                    <a
                        className="descr__links-git"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={linkGit}
                    >
                        <box-icon name="github" type="logo" color="#ffffff"></box-icon>
                    </a>
                    <a
                        className="descr__links-site"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={link}
                    >
                        <box-icon name="link-external" color="#ffffff"></box-icon>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PortfolioItems;
