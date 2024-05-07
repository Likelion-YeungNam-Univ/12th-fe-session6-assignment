import FilterBar from './components/FilterBar';
import TopBar from './components/TopBar';
import './App.css';
import VideoList from './components/VideoList';
import ShortsBar from './components/ShortsBar';


function App() {
  return (
    <div className='AppBody'>
      {/* 상단바 */}
      <TopBar/>

      {/* 필터바 */}
      <FilterBar/>

      {/* 동영상 목록 */}
      <VideoList/>

      {/* 쇼츠바 */}
      <ShortsBar/>

      {/* 쇼츠 목록 */}


    </div>
  );
}

export default App;
