import "../styles/Top.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faBell } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import User from "./User";
const Top = () => {
  return (
    <div className="Top">
      <div className="Top-logo">
        <FontAwesomeIcon icon={faYoutube} />
        Youtube
      </div>
      <div className="Top-input">
        <input type="text" placeholder="검색" />
      </div>
      <div className="Top-setting">
        <FontAwesomeIcon icon={faVideo} />
        <FontAwesomeIcon icon={faBell} />
        <User></User>
      </div>
    </div>
  );
};

export default Top;
