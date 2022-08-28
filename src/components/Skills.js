function Skills(props) {
    return (
        <section>
            <h2 className="inner-page__title">Skills</h2>
            <div className="skill"><span className="skills-span">HTML</span></div>
            <div className="skill css" id="css"><span className="skills-span">CSS</span></div>
            <div className="skill jquery" ><span className="skills-span">jQuery</span></div>
            <div className="skill php" ><span className="skills-span">PHP</span></div>
            <div className="skill laravel"><span className="skills-span">Laravel 2</span></div>
            <div className="skills-level-container">
                <div className="level"></div>
                <div className="skills-level-span-container">
                <span className="skills-level-span">Begginer</span><span className="skills-level-span proficient">Proficient</span><span className="skills-level-span expert">Expert</span><span className="skills-level-span master">Master</span>
                </div>
            </div>

        </section>
    )
}

export default Skills;