import "./styled/Header.css";
import youtubeLogo from "./youtubeLogo.png";
import user from "./user.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {favideo,fabell} from "@fortawesome/free-solid-svg-icons";

function Header() {
    return(
        <>
            <div className="Header">
                <img src={youtubeLogo} alt="유튜브로고" className="logo"></img>
                
                <span className="search">
                    <input placeholder="검색"></input>
               </span>

                <div className="settings">
                    <img src={favideo} alt="영상추가"></img>
                    <img src={fabell} alt="알람"></img>
                    <img src={user} className="user"></img>
                </div>
            </div>
        </>
        
    )
}

export default Header;