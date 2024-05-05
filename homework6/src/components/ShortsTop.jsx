import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import "../styles/ShortsTop.css";

const ShortsTop = () => {
  return (
    <div className="ShortsTop">
      <div className="ShortsTop-title">Shorts</div>
      <div>
        <FontAwesomeIcon icon={faX} />
      </div>
    </div>
  );
};

export default ShortsTop;
