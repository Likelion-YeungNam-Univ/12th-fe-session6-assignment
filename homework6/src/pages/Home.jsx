import "../styles/Home.css";
import Top from "../components/Top";
import Nav from "../components/Nav";
import Video from "../components/Video";
import img from "../video.jpg";
import shorts from "../shorts.jpg";
import ShortsTop from "../components/ShortsTop";
import Shorts from "../components/Shorts";
const Home = () => {
  const videoList = [
    {
      id: 1,
      img: img,
      name: "코딩애플",
      title: "IT 산업기능 요원 인터뷰입니다",
      clock: "조회수 3.3천회 1년전",
    },
    {
      id: 2,
      img: img,
      name: "코딩애플",
      title: "IT 산업기능 요원 인터뷰입니다",
      clock: "조회수 3.3천회 1년전",
    },
    {
      id: 3,
      img: img,
      name: "코딩애플",
      title: "IT 산업기능 요원 인터뷰입니다",
      clock: "조회수 3.3천회 1년전",
    },
    {
      id: 4,
      img: img,
      name: "코딩애플",
      title: "IT 산업기능 요원 인터뷰입니다",
      clock: "조회수 3.3천회 1년전",
    },
    {
      id: 5,
      img: img,
      name: "코딩애플",
      title: "IT 산업기능 요원 인터뷰입니다",
      clock: "조회수 3.3천회 1년전",
    },
    {
      id: 6,
      img: img,
      name: "코딩애플",
      title: "IT 산업기능 요원 인터뷰입니다",
      clock: "조회수 3.3천회 1년전",
    },
  ];

  const shortsList = [
    {
      id: 1,
      img: shorts,
      title: "IT 산업기능 요원 인터뷰입니다",
      clock: "조회수 3.3천회 1년전",
    },
    {
      id: 2,
      img: shorts,

      title: "IT 산업기능 요원 인터뷰입니다",
      clock: "조회수 3.3천회 1년전",
    },
    {
      id: 3,
      img: shorts,

      title: "IT 산업기능 요원 인터뷰입니다",
      clock: "조회수 3.3천회 1년전",
    },
    {
      id: 4,
      img: shorts,
      title: "IT 산업기능 요원 인터뷰입니다",
      clock: "조회수 3.3천회 1년전",
    },
    {
      id: 5,
      img: shorts,

      title: "IT 산업기능 요원 인터뷰입니다",
      clock: "조회수 3.3천회 1년전",
    },
    {
      id: 6,
      img: shorts,
      title: "IT 산업기능 요원 인터뷰입니다",
      clock: "조회수 3.3천회",
    },
  ];

  return (
    <div className="Home">
      <Top></Top>
      <Nav></Nav>
      {/* 컨텐츠 영역에 padding주기 위해 div 사용 */}
      <div className="Home-content">
        <div className="Home-video">
          {videoList.map((video) => (
            <Video
              key={video.id}
              clock={video.clock}
              name={video.name}
              img={video.img}
              title={video.title}
            ></Video>
          ))}
        </div>
        <ShortsTop></ShortsTop>
        <div className="Home-shorts">
          {shortsList.map((shorts) => (
            <Shorts
              img={shorts.img}
              info={shorts.clock}
              title={shorts.title}
            ></Shorts>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
