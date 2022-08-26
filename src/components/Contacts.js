function Contacts(props) {
    return(
        <div className="contacts">
            <img src={props.icon} alt="contacts-icon" height={20} width={20} className="contacts-icon"/>
            <div>
                <h3 className={'contacts__h3'}>{props.name}</h3>
                <a href={props.href} className="contacts-a">{props.contact}</a>
            </div>
        </div>
    )
}

export default Contacts;