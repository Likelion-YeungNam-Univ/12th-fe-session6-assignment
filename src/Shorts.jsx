import "./styled/Shorts.css"

function Shorts({img,title, views}) {
    return(
        <div>
            <div className="img">
                <img src={img}></img>
            </div>

            <div className="text">
                <p>{title}</p>
                <p>{views}</p>
            </div>
            
        </div>
    )
}

export default Shorts;