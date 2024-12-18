const ResumeItems = ({src, alt, company, role, description }) => (
    <div className="resume__item">
        <div className="resume__item-head">
            <div className="resume__item-icon">
                <img src={src} alt={alt} />
            </div>
            <h4 className="resume__item-title">{company}</h4>
            <div className="resume__item-location">{role}</div>
        </div>

        <div className="resume__item-body">
            {description}
        </div>
    </div>
);

export default ResumeItems;
