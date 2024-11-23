const SkillsPage = () => {
    return (
        <section class="skills" id="skills">
            <div class="wrapper">
                <h2 class="skills-title">Skills</h2>
                <div class="skills-subtitle">The tools that I use</div>
                <div class="divider"></div>
            </div>
            <div class="skills__wrapper">
                {/* <div class="skills__card">
                    <div class="skills__card-front">
                        <div class="skills__card-front-icon">
                            <img src='img/icons/skills/html5.svg' alt='html5'>
                        </div>
                        <button type="button" class="skills__card-front-button">Read  more</button>
                    </div>

                    <div class="skills__card-back">
                        <h3 class="skills__card-back-title">HTML5</h3>
                        <p class="skills__card-back-description">Exactly, it creates the framework for your website or application, and the fifth version will allow me to create a more SEO-optimized structure for your product.</p>
                        <button type="button" class="skills__card-back-button">Back</button>
                    </div>
                </div> */}
            </div>

            <div class="skills__ratings">
                <div class="skills__ratings-item">
                    <div class="skills__ratings-head">
                        <div class="skills__ratings-title">Creating websites</div>
                        <div class="skills__ratings-counter" value="100"></div>
                    </div>
                    <div class="skills__ratings-line">
                        <span></span>
                    </div>
                </div>
                <div class="skills__ratings-item">
                    <div class="skills__ratings-head">
                        <div class="skills__ratings-title">Developing applications</div>
                        <div class="skills__ratings-counter" value="70"></div>
                    </div>
                    <div class="skills__ratings-line">
                        <span></span>
                    </div>
                </div>
                <div class="skills__ratings-item">
                    <div class="skills__ratings-head">
                        <div class="skills__ratings-title">Data handling</div>
                        <div class="skills__ratings-counter" value="90"></div>
                    </div>
                    <div class="skills__ratings-line">
                        <span></span>
                    </div>
                </div>
                <div class="skills__ratings-item">
                    <div class="skills__ratings-head">
                        <div class="skills__ratings-title">Soft skills</div>
                        <div class="skills__ratings-counter" value="95"></div>
                    </div>
                    <div class="skills__ratings-line">
                        <span></span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SkillsPage;