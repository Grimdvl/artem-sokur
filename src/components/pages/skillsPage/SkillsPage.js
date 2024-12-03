import VanillaTilt from './vanilla-tilt';
import { CSSTransition } from 'react-transition-group';
import { useState, useEffect } from 'react';

function loadingSkillsCards(rate, count) {
    const ratings = document.querySelectorAll(rate);
    const counters = document.querySelectorAll(count);

    ratings.forEach((rating, index) => {
        const counter = counters[index];
        for (let i = 1; i <= 100; i++) {
            const block = document.createElement('div');
            block.classList.add('block');
            if (i <= +counter.dataset.target) {
                block.classList.add('active');
            }
            rating.appendChild(block);

            block.style.transform = `rotate(${3.6 * i}deg)`;
            block.style.animationDelay = `${i / 60}s`;
        }
    });

    function numberCounter(counter, target) {
        const value = +counter.innerText.replace(/\D/g, '');

        if (value < target) {
            counter.innerHTML = `${Math.ceil(value + 1)}<sup>%</sup>`;
            setTimeout(() => {
                numberCounter(counter, target);
            }, 15);
        }
    }

    counters.forEach((counter) => {
        counter.innerHTML = `0<sup>%</sup>`;
        const target = +counter.dataset.target;

        numberCounter(counter, target);
    });
}

const SkillsPage = () => {
    const [showContent, setShowContent] = useState(false);

    // useEffect(() => {
    //     setShowContent(true);
    //     setTimeout(() => {
    //         console.log(document.querySelector('.skills .skills__wrapper')); // Должен быть не null
    //         cards();
    //     }, 0);
    // }, []);
    // useEffect(() => {
    //     setShowContent(true);
    //     const timer = setTimeout(() => {
    //         cards(); // Запускаем после монтирования компонента
    //     }, 0);
    
    //     return () => clearTimeout(timer); // Очистка таймера
    // }, []);
    useEffect(() => {
        // if (document.querySelector('.skills .skills__wrapper')) {
            setShowContent(true);
            cards();
        // }
    }, [showContent]);

    function cards() {
        const skillsData = [
            {
                src: "html5",
                alt: "html5",
                title: "HTML5",
                descr: "Exactly, it creates the framework for your website or application, and the fifth version will allow me to create a more SEO-optimized structure for your product.",
                target: "90"
            },
            {
                src: "logo-css3",
                alt: "css3",
                title: "CSS3",
                descr: "This styling language allows me to create any appearance for your website or application. It's only limited by your imagination!",
                target: "90"
            },
            {
                src: "logo-javascript",
                alt: "javascript",
                title: "Java Script",
                descr: "This programming language allows me to animate anything: sliders, windows, tooltips, tabs, fetching data from servers, and much more.",
                target: "70"
            },
            {
                src: "logo-react",
                alt: "react",
                title: "React",
                descr: "This library enables the creation of web applications. I can create an incredibly interactive product tailored to your goals.",
                target: "10"
            },
            {
                src: "logo-wordpress",
                alt: "wordpress",
                title: "WordPress",
                descr: "It's a powerful platform for building interactive web applications and websites of any size. With its help, you can manage the content of your website yourself.",
                target: "10"
            }
        ];

        function initializeVanillaTilt(cards) {
            VanillaTilt.init(document.querySelectorAll(cards), {
                max: 10,
                speed: 400,
                // glare: true,
                // "max-glare": 1
            });
        }

        function initializeBlureEffect(cards) {
            const card = document.querySelectorAll(cards);
        
            card.forEach(item => {
                item.onmousemove = function(e) {
                    const rect = item.getBoundingClientRect();
                    let x = e.clientX - rect.left;
                    let y = e.clientY - rect.top;
        
                    item.style.setProperty('--x', x + 'px');
                    item.style.setProperty('--y', y + 'px');
                }
            });
        }

        function flippingCard(buttonsFront, buttonsBack, cardsFront, cardsBack) {
            const frontButtons = document.querySelectorAll(buttonsFront);
            const backButtons = document.querySelectorAll(buttonsBack);
        
            frontButtons.forEach(btnfr => {
                btnfr.addEventListener('click', function() {
                    const frontCard = this.closest(cardsFront);
                    const backCard = frontCard.nextElementSibling;
        
                    if (frontCard) {
                        frontCard.classList.remove('active');
                        backCard.classList.add('active');
                    }
                });
            });
        
            backButtons.forEach(btnbk => {
                btnbk.addEventListener('click', function() {
                    const backCard = this.closest(cardsBack);
                    const frontCard = backCard.previousElementSibling;
        
                    if (backCard) {
                        frontCard.classList.add('active');
                        backCard.classList.remove('active');
                    }
                });
            });
        }

        class SkillsCards {
            constructor(src, alt, title, descr, target, parentSelector, ...classes) {
                this.src = src;
                this.alt = alt;
                this.title = title;
                this.descr = descr;
                this.target = target;
                this.classes = classes;
                this.parent = document.querySelector(parentSelector);
                if (!this.parent) {
                    console.error(`Element with selector "${parentSelector}" not found`);
                    return;
                }
            }
        
            render() {
                if (!this.parent) return;

                const element = document.createElement('div');
        
                if (this.classes.length === 0) {
                    this.classes = "skills__card";
                    element.classList.add(this.classes);
                } else {
                    this.classes.forEach(className => element.classList.add(className));
                }
                element.innerHTML = `
                    <div class="skills__card-front active">
                        <div class="skills__card-front-icon">
                            <h3>
                                <ion-icon name="${this.src}" alt="${this.alt}"></ion-icon>
                                <div class="counter" data-target=${this.target}></div>
                            </h3>
                        </div>
                        <button type="button" class="skills__card-front-button">Read more</button>
                    </div>
                    <div class="skills__card-back">
                        <h3 class="skills__card-back-title">${this.title}</h3>
                        <p class="skills__card-back-description">${this.descr}</p>
                        <button type="button" class="skills__card-back-button">Back</button>
                    </div>
                `;
                this.parent.append(element);

                initializeVanillaTilt(`.${this.classes}`);
                initializeBlureEffect(`.${this.classes}`);
            }
        }

        skillsData.forEach(({ src, alt, title, descr, target }) => {
            new SkillsCards(src, alt, title, descr, target, '.skills .skills__wrapper').render();
        });

        flippingCard('.skills__card-front-button', '.skills__card-back-button', '.skills__card-front', '.skills__card-back');
    }

    return (
        <>
        <CSSTransition
            in={showContent}
            timeout={1000}
            classNames="animated"
            mountOnEnter
            unmountOnExit
            >
            <section className="skills" id="skills">
                <div className="skills-head">
                    <h2 className="skills-title title">Skills</h2>
                    <div className="skills-subtitle subtitle">The tools that I use</div>
                    <div className="skills-divider divider"></div>
                </div>
                <div className="skills__wrapper">
                    {/* <div className="skills__card">
                        <div className="skills__card-front">
                            <div className="skills__card-front-icon">
                                <img src='img/icons/skills/html5.svg' alt='html5'>
                            </div>
                            <button type="button" className="skills__card-front-button">Read  more</button>
                        </div>

                        <div className="skills__card-back">
                            <h3 className="skills__card-back-title">HTML5</h3>
                            <p className="skills__card-back-description">Exactly, it creates the framework for your website or application, and the fifth version will allow me to create a more SEO-optimized structure for your product.</p>
                            <button type="button" className="skills__card-back-button">Back</button>
                        </div>
                    </div> */}
                </div>

                <div className="skills__ratings">
                    <div className="skills__ratings-item">
                        <div className="skills__ratings-head">
                            <div className="skills__ratings-title">Creating websites</div>
                            <div className="skills__ratings-counter" value="100"></div>
                        </div>
                        <div className="skills__ratings-line">
                            <span></span>
                        </div>
                    </div>
                    <div className="skills__ratings-item">
                        <div className="skills__ratings-head">
                            <div className="skills__ratings-title">Developing applications</div>
                            <div className="skills__ratings-counter" value="70"></div>
                        </div>
                        <div className="skills__ratings-line">
                            <span></span>
                        </div>
                    </div>
                    <div className="skills__ratings-item">
                        <div className="skills__ratings-head">
                            <div className="skills__ratings-title">Data handling</div>
                            <div className="skills__ratings-counter" value="90"></div>
                        </div>
                        <div className="skills__ratings-line">
                            <span></span>
                        </div>
                    </div>
                    <div className="skills__ratings-item">
                        <div className="skills__ratings-head">
                            <div className="skills__ratings-title">Soft skills</div>
                            <div className="skills__ratings-counter" value="95"></div>
                        </div>
                        <div className="skills__ratings-line">
                            <span></span>
                        </div>
                    </div>
                </div>
            </section>
        </CSSTransition>
        </>
    );
}

export {loadingSkillsCards};
export default SkillsPage;