function Experience(props) {
    const data = props.data;
    return(
        <section>
            <h2 className={'inner-page__title'}>{props.title}</h2>
            {Object.keys(data).map((i) => (
                <div key={i} className="experience-content">
                    <div className="experience-content__company-info">
                        <h3 className="experience-content__h3">{data[i].info.company}</h3>
                        <span className="experience-content__span">{data[i].date}</span>
                    </div>
                    <div className="experience-position-info">
                        <h3 className="experience-content__h3">{data[i].info.job}</h3>
                        <p className="experience-content__p">{data[i].info.description}</p>
                    </div>
                </div>
            ))}
        </section>

    )
}

export default Experience;