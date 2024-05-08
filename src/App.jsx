import './styled/App.css';
import Header from './Header';
import Videokind from './Videokind';
import Video from './Video';
import img from "./videoimg.jpeg";
import ShortsTop from './ShortsTop';
import Shorts from './Shorts';
import shortsimg from './shortsimg.jpeg';
import user from "./user.png";


function App() {
  const videoList = [
    {
      id: 1,
      img: img,
      user: user, 
      title: "제목입니다",
      username: "유튜버이름",
      views: "조회수 34만회",
      postedDate: "1년전"
    },
    {
      id: 2,
      img: img,
      user: user, 
      title: "제목입니다",
      username: "유튜버이름",
      views: "조회수 34만회",
      postedDate: "1년전"
    },
    {
      id: 3,
      img: img,
      user: user, 
      title: "제목입니다",
      username: "유튜버이름",
      views: "조회수 34만회",
      postedDate: "1년전"
    },
    {
      id: 4,
      img: img,
      user: user, 
      title: "제목입니다",
      username: "유튜버이름",
      views: "조회수 34만회",
      postedDate: "1년전"
    },
    {
      id: 5,
      img: img,
      user: user, 
      title: "제목입니다",
      username: "유튜버이름",
      views: "조회수 34만회",
      postedDate: "1년전"
    },
    {
      id: 6,
      img: img,
      user: user, 
      title: "제목입니다",
      username: "유튜버이름",
      views: "조회수 34만회",
      postedDate: "1년전"
    }
  ];
  const shortsList=[
    {
      id: 1,
      img: shortsimg,
      title: "쇼츠제목",
      views: "조회수 11만회"
    },
    {
      id: 2,
      img: shortsimg,
      title: "쇼츠제목",
      views: "조회수 11만회"
    },
    {
      id: 3,
      img: shortsimg,
      title: "쇼츠제목",
      views: "조회수 11만회"
    },
    {
      id: 4,
      img: shortsimg,
      title: "쇼츠제목",
      views: "조회수 11만회"
    },
    {
      id: 5,
      img: shortsimg,
      title: "쇼츠제목",
      views: "조회수 11만회"
    },
    {
      id: 6,
      img: shortsimg,
      title: "쇼츠제목",
      views: "조회수 11만회"
    },
    {
      id: 7,
      img: shortsimg,
      title: "쇼츠제목",
      views: "조회수 11만회"
    },
    {
      id: 8,
      img: shortsimg,
      title: "쇼츠제목",
      views: "조회수 11만회"
    }
  ];
  return (
    <>
      <Header/>

      <Videokind kind="전체"/>
      <Videokind kind="음악"/>
      <Videokind kind="게임"/>
      <Videokind kind="라이브"/>
      <Videokind kind="최근에 업로드된 동영상"/>

      <div className='videos'>
        {videoList.map((video)=>(
          <Video 
          key={video.id}
          img={video.img}
          user={video.user}
          title={video.title}
          username={video.username}
          views={video.views}
          postedDate={video.postedDate}
          ></Video>
      ))}
      </div>
      
      <ShortsTop/>

      <div className='shorts'>
        {shortsList.map((shorts)=>(
          <Shorts 
          key={shorts.id}
          img={shorts.img}
          title={shorts.title}
          views={shorts.views}
          ></Shorts>
      ))}
      </div>
    </>
    
  );
}

export default App;
