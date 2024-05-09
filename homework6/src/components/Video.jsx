import "../styles/Video.css";
import User from "./User";

const Video = ({ img, title, name, clock }) => {
  return (
    <div className="Video">
      <div className="Video-img">
        <img src={img} alt="" />
      </div>
      <div className="Video-info">
        <User></User>
        <div className="Video-info-text">
          <p className="title">{title}</p>
          <p className="gray">{name}</p>
          <p className="gray">{clock}</p>
        </div>
      </div>
    </div>
  );
};

export default Video;
