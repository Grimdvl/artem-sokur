import { CSSTransition } from 'react-transition-group';
import React, { forwardRef } from 'react';

const CardsItems = forwardRef(
    ({ src, alt, title, description, progress, blocks, handleFlip, className, onMouseMove, isAnimated }, ref) => {
        return (
            <div className={className}
                ref={ref}
                onMouseMove={onMouseMove}
                >
                <CSSTransition
                    in={isAnimated}
                    timeout={1000}
                    mountOnEnter
                    unmountOnExit
                    >
                    <div className="skills__card-front">
                        <div className="skills__card-front-icon">
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
                        >
                            Read more
                        </button>
                    </div>
                </CSSTransition>
                
                <div className="skills__card-back">
                    <h3 className="skills__card-back-title">{title}</h3>
                    <p className="skills__card-back-description">{description}</p>
                    <button
                        type="button"
                        className="skills__card-back--button"
                        onClick={handleFlip}
                    >
                        Back
                    </button>
                </div>
            </div>
        );
    }
);

export default CardsItems;
