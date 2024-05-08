import "./styled/Videokind.css"

function Videokind({kind}) {
    return(
        <span>
            <button className="kind">{kind}</button>
        </span>
    )
}

export default Videokind;