
import SkillsCards from './skillsCards/SkillsCards';
import { CSSTransition } from 'react-transition-group';
import { useState, useEffect } from 'react';

const SkillsPage = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        setShowContent(true);
    }, []);



        // function initializeVanillaTilt(cards) {
        //     VanillaTilt.init(document.querySelectorAll(cards), {
        //         max: 10,
        //         speed: 400,
        //         // glare: true,
        //         // "max-glare": 1
        //     });
        // }

        // function initializeBlureEffect(cards) {
        //     const card = document.querySelectorAll(cards);
        
        //     card.forEach(item => {
        //         item.onmousemove = function(e) {
        //             const rect = item.getBoundingClientRect();
        //             let x = e.clientX - rect.left;
        //             let y = e.clientY - rect.top;
        
        //             item.style.setProperty('--x', x + 'px');
        //             item.style.setProperty('--y', y + 'px');
        //         }
        //     });
        // }

        // function flippingCard(buttonsFront, buttonsBack, cardsFront, cardsBack) {
        //     const frontButtons = document.querySelectorAll(buttonsFront);
        //     const backButtons = document.querySelectorAll(buttonsBack);
        
        //     frontButtons.forEach(btnfr => {
        //         btnfr.addEventListener('click', function() {
        //             const frontCard = this.closest(cardsFront);
        //             const backCard = frontCard.nextElementSibling;
        
        //             if (frontCard) {
        //                 frontCard.classList.remove('active');
        //                 backCard.classList.add('active');
        //             }
        //         });
        //     });
        
        //     backButtons.forEach(btnbk => {
        //         btnbk.addEventListener('click', function() {
        //             const backCard = this.closest(cardsBack);
        //             const frontCard = backCard.previousElementSibling;
        
        //             if (backCard) {
        //                 frontCard.classList.add('active');
        //                 backCard.classList.remove('active');
        //             }
        //         });
        //     });
        // }

        // class SkillsCards {
        //     constructor(src, alt, title, descr, target, parentSelector, ...classes) {
        //         this.src = src;
        //         this.alt = alt;
        //         this.title = title;
        //         this.descr = descr;
        //         this.target = target;
        //         this.classes = classes;
        //         this.parent = document.querySelector(parentSelector);
        //         if (!this.parent) {
        //             console.error(`Element with selector "${parentSelector}" not found`);
        //             return;
        //         }
        //     }
        
        //     render() {
        //         if (!this.parent) return;

        //         const element = document.createElement('div');
        
        //         if (this.classes.length === 0) {
        //             this.classes = "skills__card";
        //             element.classList.add(this.classes);
        //         } else {
        //             this.classes.forEach(className => element.classList.add(className));
        //         }
        //         element.innerHTML = `
        //             <div class="skills__card-front active">
        //                 <div class="skills__card-front-icon">
        //                     <h3>
        //                         <ion-icon name="${this.src}" alt="${this.alt}"></ion-icon>
        //                         <div class="counter" data-target=${this.target}></div>
        //                     </h3>
        //                 </div>
        //                 <button type="button" class="skills__card-front-button">Read more</button>
        //             </div>
        //             <div class="skills__card-back">
        //                 <h3 class="skills__card-back-title">${this.title}</h3>
        //                 <p class="skills__card-back-description">${this.descr}</p>
        //                 <button type="button" class="skills__card-back-button">Back</button>
        //             </div>
        //         `;
        //         this.parent.append(element);

        //         initializeVanillaTilt(`.${this.classes}`);
        //         initializeBlureEffect(`.${this.classes}`);
        //     }
        // }

        // skillsData.forEach(({ src, alt, title, descr, target }) => {
        //     new SkillsCards(src, alt, title, descr, target, '.skills .skills__wrapper').render();
        // });

        // flippingCard('.skills__card-front-button', '.skills__card-back-button', '.skills__card-front', '.skills__card-back');
    

    return (
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
                <SkillsCards/>

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
    );
}

export default SkillsPage;