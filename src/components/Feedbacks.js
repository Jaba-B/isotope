function Feedbacks(props) {
    const url = props.url;
    return(
        <div className="feedback">
            <p className="feedback-p">{props.text}</p>
            <div className="feedbacks-content">
                <img src={url} alt="feedbacks avatar" height={50} width={50} className="feedbacks-avatar" />
                <span className="feedbacks-span">{props.nameAndPosition}</span>
                <a href={props.webSite} className="feedbacks-a">{props.webSite}</a>
            </div>
        </div>
    )
}

export default Feedbacks;