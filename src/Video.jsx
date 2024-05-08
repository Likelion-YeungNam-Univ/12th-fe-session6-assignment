import "./styled/Video.css"

function Video({img,user,title,username,views,postedDate}) {
    return(
        <div>
            <div>
                <img className="img" src={img}></img>
            </div>
            
            <div className="info">
                <img src={user} className="user"></img>
                <div>
                    <div className="title">{title}</div>
                    <div className="username">{username}</div>

                    <div>
                        <span className="views">{views}</span>
                        <span className="postedDate">{postedDate}</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Video;