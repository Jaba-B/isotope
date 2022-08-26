function Button(props) {
    return(
        <button className={props.className}>{props.icon}{props.text}</button>
    )
}

export default Button;