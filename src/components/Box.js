import NewlineText from './NewlineText'
function Box(props) {
    
    return(
        <>
            <h2 className={props.h2className}>{props.title}</h2>
            <NewlineText text={props.content} className={props.pclassName}/>
        </>
    )
}

export default Box;