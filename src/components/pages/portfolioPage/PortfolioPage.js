import { CSSTransition } from 'react-transition-group';
import { useState, useEffect } from 'react';

const PortfolioPage = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        setShowContent(true);
    }, []);

    return (
        <>
            <CSSTransition
                in={showContent}
                timeout={1000}
                classNames="animated"
                mountOnEnter
                unmountOnExit
                >
                <section className="portfolio" id="portfolio">
                    {/* <div className="portfolio__wrapper"> */}
                        <h2 className="portfolio-title title">Portfolio</h2>
                        <div className="portfolio-subtitle subtitle">My works</div>
                        <div className="portfolio-divider divider"></div>
                    {/* </div> */}

                    <div className="portfolio__items">
                        <div className="portfolio__items-item" tabIndex="1">
                            <img className="img" src="img/works/uber.jpg" alt="uber-project"/>
                            <div className="descr">
                                <h3 className="descr-title">Uber</h3>
                                <p className="descr-text">One of the largest transportation and delivery companies in the world. On this project, I honed my skills working with the Bootstrap grid and also learned about various preprocessors like Less and Sass.</p>
                                <div className="descr__links">
                                    <a className="descr__links-git" target="_blank" rel="noopener noreferrer" href="https://github.com/Grimdvl/uber"><box-icon name='github' type='logo' color='#ffffff' ></box-icon></a>
                                    <a className="descr__links-site" target="_blank" rel="noopener noreferrer" href="https://grimdvl.github.io/uber/src/"><box-icon name='link-external' color='#ffffff' ></box-icon></a>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio__items-item" tabIndex="1">
                            <img className="img" src="img/works/pulse.jpg" alt="pulse-project"/>
                            <div className="descr">
                                <h3 className="descr-title">Pulse</h3>
                                <p className="descr-text">This project is related to the sale of smart sports bracelets measuring heart rate. It's my first project where I started incorporating the JavaScript programming language. I also learned how to integrate third-party libraries into the code, such as jQuery and Animate.css.</p>
                                <div className="descr__links">
                                    <a className="descr__links-git" target="_blank" rel="noopener noreferrer" href="https://github.com/Grimdvl/pulse"><box-icon name='github' type='logo' color='#ffffff' ></box-icon></a>
                                    <a className="descr__links-site" target="_blank" rel="noopener noreferrer" href="https://grimdvl.github.io/pulse/dist/"><box-icon name='link-external' color='#ffffff' ></box-icon></a>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio__items-item" tabIndex="1">
                            <img className="img" src="img/works/food.jpg" alt="food-project"/>
                            <div className="descr">
                                <h3 className="descr-title">Food</h3>
                                <p className="descr-text">This project is related to healthy eating. This was my first advanced JavaScript project, which gave me a good start in further exploring this programming language.</p>
                                <div className="descr__links">
                                    <a className="descr__links-git" target="_blank" rel="noopener noreferrer" href="https://github.com/Grimdvl/food"><box-icon name='github' type='logo' color='#ffffff' ></box-icon></a>
                                    <a className="descr__links-site" target="_blank" rel="noopener noreferrer" href="https://grimdvl.github.io/food/"><box-icon name='link-external' color='#ffffff' ></box-icon></a>
                                </div>
                            </div>
                        </div>
                        {/* <div className="portfolio__items-item" tabIndex="1">
                            <img className="img" src="img/works/Katherine.jpg" alt="Katherine-project"/>
                            <div className="descr">
                                <h3 className="descr-title">Katherine Chafer</h3>
                                <p className="descr-text">The girl dreams of becoming a cosmetologist, and I gave her the opportunity to present herself in all her glory to her future employer through a resume website.</p>
                                <div className="descr__links">
                                    <a className="descr__links-git" target="_blank" rel="noopener noreferrer" href="https://github.com/Grimdvl/Katherine"><box-icon name='github' type='logo' color='#ffffff' ></box-icon></a>
                                    <a className="descr__links-site" target="_blank" rel="noopener noreferrer" href="https://grimdvl.github.io/Katherine/"><box-icon name='link-external' color='#ffffff' ></box-icon></a>
                                </div>
                            </div>
                        </div> */}
                        <div className="portfolio__items-item" tabIndex="1">
                            <img className="img" src="img/works/wordpress.jpg" alt="WordPress-project"/>
                            <div className="descr">
                                <h3 className="descr-title">WordPress</h3>
                                <p className="descr-text">The largest CMS in the world, used on more than 80% of websites. This is my first project related to learning web development, specifically HTML markup language and CSS styling language.</p>
                                <div className="descr__links">
                                    <a className="descr__links-git" target="_blank" rel="noopener noreferrer" href="https://github.com/Grimdvl/wordpress"><box-icon name='github' type='logo' color='#ffffff' ></box-icon></a>
                                    <a className="descr__links-site" target="_blank" rel="noopener noreferrer" href="https://grimdvl.github.io/wordpress/"><box-icon name='link-external' color='#ffffff' ></box-icon></a>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio__items-item" tabIndex="1">
                            <img className="img" src="img/works/balcony.jpg" alt="balcony-project"/>
                            <div className="descr">
                                <h3 className="descr-title">Balcony</h3>
                                <p className="descr-text">This is a project for measuring and selling balconies and windows. It's already my first serious project where working on it involved applying all the knowledge I had gained up to that point.</p>
                                <div className="descr__links">
                                    <a className="descr__links-git" target="_blank" rel="noopener noreferrer" href="https://github.com/Grimdvl/balcony"><box-icon name='github' type='logo' color='#ffffff' ></box-icon></a>
                                    <a className="descr__links-site" target="_blank" rel="noopener noreferrer" href="https://grimdvl.github.io/balcony/dist/"><box-icon name='link-external' color='#ffffff' ></box-icon></a>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio__items-item" tabIndex="1">
                            <img className="img" src="img/works/art.jpg" alt="art-project"/>
                            <div className="descr">
                                <h3 className="descr-title">Art</h3>
                                <p className="descr-text">A website for drawing and selling paintings. I reinforced my JavaScript skills and utilized technologies such as Webpack, Gulp task runner, worked with the SCSS preprocessor, as well as a local JSON database.</p>
                                <div className="descr__links">
                                    <a className="descr__links-git" target="_blank" rel="noopener noreferrer" href="https://github.com/Grimdvl/art"><box-icon name='github' type='logo' color='#ffffff' ></box-icon></a>
                                    <a className="descr__links-site" target="_blank" rel="noopener noreferrer" href="https://grimdvl.github.io/art/dist/"><box-icon name='link-external' color='#ffffff' ></box-icon></a>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio__items-item" tabIndex="1">
                            <img className="img" src="img/works/loan.jpg" alt="loan-project"/>
                            <div className="descr">
                                <h3 className="descr-title">Loan</h3>
                                <p className="descr-text">A website for legal consultations. I learned to use third-party APIs such as YouTube and also mastered the construction of a modular code structure.</p>
                                <div className="descr__links">
                                    <a className="descr__links-git" target="_blank" rel="noopener noreferrer" href="https://github.com/Grimdvl/loan"><box-icon name='github' type='logo' color='#ffffff' ></box-icon></a>
                                    <a className="descr__links-site" target="_blank" rel="noopener noreferrer" href="https://grimdvl.github.io/loan/dist/"><box-icon name='link-external' color='#ffffff' ></box-icon></a>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio__items-item" tabIndex="1">
                            <img className="img" src="img/works/pokemons.jpg" alt="pokemon-project"/>
                            <div className="descr">
                                <h3 className="descr-title">Pokemons</h3>
                                <p className="descr-text">A foundational frontend course from Master's Academy, a major Canadian IT company. In this course, I gained insights from product company developers who had 3-5 years of experience in development.</p>
                                <div className="descr__links">
                                    <a className="descr__links-git" target="_blank" rel="noopener noreferrer" href="https://github.com/Grimdvl/MA"><box-icon name='github' type='logo' color='#ffffff' ></box-icon></a>
                                    <a className="descr__links-site" target="_blank" rel="noopener noreferrer" href="https://grimdvl.github.io/MA/homeworks/artem.sokur_Grimdvl/PokemonProject/index.html"><box-icon name='link-external' color='#ffffff' ></box-icon></a>
                                </div>
                            </div>
                        </div>

                        <div className="portfolio__items-item" tabIndex="1">
                            <img className="img" src="img/works/pokemons.jpg" alt="pokemon-project"/>
                            <div className="descr">
                                <h3 className="descr-title">Pokemons</h3>
                                <p className="descr-text">A foundational frontend course from Master's Academy, a major Canadian IT company. In this course, I gained insights from product company developers who had 3-5 years of experience in development.</p>
                                <div className="descr__links">
                                    <a className="descr__links-git" target="_blank" rel="noopener noreferrer" href="https://github.com/Grimdvl/MA"><box-icon name='github' type='logo' color='#ffffff' ></box-icon></a>
                                    <a className="descr__links-site" target="_blank" rel="noopener noreferrer" href="https://grimdvl.github.io/MA/homeworks/artem.sokur_Grimdvl/PokemonProject/index.html"><box-icon name='link-external' color='#ffffff' ></box-icon></a>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio__items-item" tabIndex="1">
                            <img className="img" src="img/works/pokemons.jpg" alt="pokemon-project"/>
                            <div className="descr">
                                <h3 className="descr-title">Pokemons</h3>
                                <p className="descr-text">A foundational frontend course from Master's Academy, a major Canadian IT company. In this course, I gained insights from product company developers who had 3-5 years of experience in development.</p>
                                <div className="descr__links">
                                    <a className="descr__links-git" target="_blank" rel="noopener noreferrer" href="https://github.com/Grimdvl/MA"><box-icon name='github' type='logo' color='#ffffff' ></box-icon></a>
                                    <a className="descr__links-site" target="_blank" rel="noopener noreferrer" href="https://grimdvl.github.io/MA/homeworks/artem.sokur_Grimdvl/PokemonProject/index.html"><box-icon name='link-external' color='#ffffff' ></box-icon></a>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio__items-item" tabIndex="1">
                            <img className="img" src="img/works/pokemons.jpg" alt="pokemon-project"/>
                            <div className="descr">
                                <h3 className="descr-title">Pokemons</h3>
                                <p className="descr-text">A foundational frontend course from Master's Academy, a major Canadian IT company. In this course, I gained insights from product company developers who had 3-5 years of experience in development.</p>
                                <div className="descr__links">
                                    <a className="descr__links-git" target="_blank" rel="noopener noreferrer" href="https://github.com/Grimdvl/MA"><box-icon name='github' type='logo' color='#ffffff' ></box-icon></a>
                                    <a className="descr__links-site" target="_blank" rel="noopener noreferrer" href="https://grimdvl.github.io/MA/homeworks/artem.sokur_Grimdvl/PokemonProject/index.html"><box-icon name='link-external' color='#ffffff' ></box-icon></a>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio__items-item" tabIndex="1">
                            <img className="img" src="img/works/pokemons.jpg" alt="pokemon-project"/>
                            <div className="descr">
                                <h3 className="descr-title">Pokemons</h3>
                                <p className="descr-text">A foundational frontend course from Master's Academy, a major Canadian IT company. In this course, I gained insights from product company developers who had 3-5 years of experience in development.</p>
                                <div className="descr__links">
                                    <a className="descr__links-git" target="_blank" rel="noopener noreferrer" href="https://github.com/Grimdvl/MA"><box-icon name='github' type='logo' color='#ffffff' ></box-icon></a>
                                    <a className="descr__links-site" target="_blank" rel="noopener noreferrer" href="https://grimdvl.github.io/MA/homeworks/artem.sokur_Grimdvl/PokemonProject/index.html"><box-icon name='link-external' color='#ffffff' ></box-icon></a>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio__items-item" tabIndex="1">
                            <img className="img" src="img/works/pokemons.jpg" alt="pokemon-project"/>
                            <div className="descr">
                                <h3 className="descr-title">Pokemons</h3>
                                <p className="descr-text">A foundational frontend course from Master's Academy, a major Canadian IT company. In this course, I gained insights from product company developers who had 3-5 years of experience in development.</p>
                                <div className="descr__links">
                                    <a className="descr__links-git" target="_blank" rel="noopener noreferrer" href="https://github.com/Grimdvl/MA"><box-icon name='github' type='logo' color='#ffffff' ></box-icon></a>
                                    <a className="descr__links-site" target="_blank" rel="noopener noreferrer" href="https://grimdvl.github.io/MA/homeworks/artem.sokur_Grimdvl/PokemonProject/index.html"><box-icon name='link-external' color='#ffffff' ></box-icon></a>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio__items-item" tabIndex="1">
                            <img className="img" src="img/works/pokemons.jpg" alt="pokemon-project"/>
                            <div className="descr">
                                <h3 className="descr-title">Pokemons</h3>
                                <p className="descr-text">A foundational frontend course from Master's Academy, a major Canadian IT company. In this course, I gained insights from product company developers who had 3-5 years of experience in development.</p>
                                <div className="descr__links">
                                    <a className="descr__links-git" target="_blank" rel="noopener noreferrer" href="https://github.com/Grimdvl/MA"><box-icon name='github' type='logo' color='#ffffff' ></box-icon></a>
                                    <a className="descr__links-site" target="_blank" rel="noopener noreferrer" href="https://grimdvl.github.io/MA/homeworks/artem.sokur_Grimdvl/PokemonProject/index.html"><box-icon name='link-external' color='#ffffff' ></box-icon></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="portfolio__slide">
                        <button className="portfolio__slide-prev"><i className='bx bx-left-arrow-alt'></i></button>
                        <button className="portfolio__slide-next"><i className='bx bx-right-arrow-alt'></i></button>
                    </div>
                </section>
            </CSSTransition>
        </>
    );
}

export default PortfolioPage;