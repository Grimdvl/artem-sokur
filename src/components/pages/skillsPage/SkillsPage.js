const SkillsPage = () => {
    return (
        <section className="skills" id="skills">
            <div className="wrapper">
                <h2 className="skills-title">Skills</h2>
                <div className="skills-subtitle">The tools that I use</div>
                <div className="divider"></div>
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
    );
}

export default SkillsPage;