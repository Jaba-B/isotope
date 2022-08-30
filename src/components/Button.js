import { Link } from "react-router-dom";


function Button(props) {
    return(
        <button className={props.className}><Link to={'/Inner'} className="button-link">{props.icon}{props.text}</Link></button>
    )
}

export default Button;