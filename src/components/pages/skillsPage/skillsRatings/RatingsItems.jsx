import { CSSTransition } from "react-transition-group";

const RatingsItems = ({ title, progress, isAnimated }) => {
    return (
        <CSSTransition
            in={isAnimated}
            timeout={1000}
            classNames="animated"
            mountOnEnter
            unmountOnExit
            >
            <div className="skills__ratings-item">
                <div className="skills__ratings-head">
                    <div className="skills__ratings-title">{title}</div>
                    <div
                        className="skills__ratings-counter"
                        dangerouslySetInnerHTML={{
                            __html: `${Math.ceil(progress.value)}<sup>%</sup>`,
                        }}
                    ></div>
                </div>
                <div className="skills__ratings-line">
                    <span style={{ width: `${progress.width}%` }}></span>
                </div>
            </div>
        </CSSTransition>
    );
};

export default RatingsItems;
