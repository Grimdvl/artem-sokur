const CardsItems = ({ src, alt, title, descr, progress, blocks, handleFlip, className }) => {
    return (
        <div className={className}>
            <div className="skills__card-front">
                <div class="skills__card-front-icon">
                    <h3>
                        <ion-icon name={src} alt={alt}></ion-icon>
                        <div className="counter">{progress}<sup>%</sup></div>
                    </h3>
                    {blocks.map((block, index) => (
                            <div
                                key={index}
                                className={`block${block.isActive ? ' active' : ''}`}
                                style={{
                                    transform: `rotate(${block.rotation}deg)`,
                                    animationDelay: `${block.delay}s`,
                                }}
                            ></div>
                        ))}
                </div>
                <button
                        type="button"
                        className="skills__card-front--button"
                        onClick={handleFlip}
                        >Read more</button>
            </div>

            <div className="skills__card-back">
                <h3 className="skills__card-back-title">{title}</h3>
                <p className="skills__card-back-description">{descr}</p>
                <button
                    type="button"
                    className="skills__card-back--button"
                    onClick={handleFlip}
                    >Back</button>
            </div>
        </div>
    );
};

export default CardsItems;
