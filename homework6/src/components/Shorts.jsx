import "../styles/Shorts.css";

const Shorts = ({ img, title, info }) => {
  return (
    <div className="Shorts">
      <div className="Shorts-img">
        <img src={img} alt="" />
      </div>
      <div className="Shorts-text">
        <p className="Shorts-text-title">{title}</p>
        <p className="Shorts-text-info">{info}</p>
      </div>
    </div>
  );
};

export default Shorts;
