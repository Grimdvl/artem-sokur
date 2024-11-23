import mainPhoto from '../../../assets/img/main-photo.jpg';
import university from '../../../assets/icons/experience/university.svg';
import courses from '../../../assets/icons/experience/courses.svg';
import developer from '../../../assets/icons/experience/developer.svg';

const ResumePage = () => {
    return (
        <section class="resume" id="resume">
            <h2 class="resume-title">Resume</h2>
            <div class="resume-subtitle">Here's how I'll be helpful for you</div>
            <div class="divider"></div>

            <div class="resume__wrapper">
                <div class="resume__photo">
                    <img src={mainPhoto} alt="photo"/>
                </div>

                    <div class="resume__column">
                        <h3 class="resume__column-title">Experience</h3>
                        <ul>
                            <li>
                                <div class="resume__item">
                                    <div class="resume__item-head">
                                        <div class="resume__item-icon">
                                            <img src={university} alt="university"/>
                                        </div>
                                        <h4 class="resume__item-title">Udemy</h4>
                                        <div class="resume__item-location">Web development | JavaScript + React | WordPress - "courses"</div>
                                    </div>
                                    <div class="resume__item-body">
                                        I completed courses in web development where I studied HTML, CSS, JavaScript programming language, as well as the basics of WordPress development and the React framework. I gained skills and knowledge in creating interactive and engaging websites and web applications.
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="resume__item">
                                    <div class="resume__item-head">
                                        <div class="resume__item-icon">
                                            <img src={courses} alt="courses"/>
                                        </div>
                                        <h4 class="resume__item-title">Master's Academy</h4>
                                        <div class="resume__item-location">Front-End for beginners | Intro to React - "courses"</div>
                                    </div>
                                    <div class="resume__item-body">
                                        The Masters Academy is a subsidiary project of the IT company Master of Code, which operates in the Canadian market and is aimed at educating the younger generation. I received insights from developers from a product company who had 3-5 years of development experience. I learned to use Git as well as work in a team.
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="resume__item">
                                    <div class="resume__item-head">
                                        <div class="resume__item-icon">
                                            <img src={developer} alt="developer"/>
                                        </div>
                                        <h4 class="resume__item-title">Freelancing</h4>
                                        <div class="resume__item-location">Front-End | WordPress layout - "development"</div>
                                    </div>
                                    <div class="resume__item-body">
                                        Developing landing pages and e-commerce websites. I specialize in creating bespoke websites and handling WordPress layout development. My aim is to create stylish and user-friendly web pages. Ready to assist in enhancing your business's online presence.
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
            </div>
        </section>
    );
}

export default ResumePage;