function Education(props) {
    const data = props.data;
    return(
        <section>
            <h2 className={'inner-page__title'}>{props.title}</h2>
            {Object.keys(data).map((i) => (
                <div className="education-container">
                    <div className="educaion-timeline">
                        <span className="education-span">{data[i].date}</span>
                        <div className="education-greenline"></div>
                    </div>
                    <div className="education-info">
                        <span className="education-title">{data[i].title}</span>
                        <p className="education-p">{data[i].text}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Education;