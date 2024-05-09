import Category from './Category';
import Video from './Video';
import Shorts from './Shorts';
import styled from "styled-components";
import Header from './Header';

import Shorts1 from './img/shorts1.png';
import Shorts2 from './img/shorts2.png';
import Shorts3 from './img/shorts3.png';
import Shorts4 from './img/shorts4.png';
import Shorts5 from './img/shorts5.png';
import Shorts6 from './img/shorts6.png';
import Shorts7 from './img/shorts7.png';
import Shorts8 from './img/shorts8.png';
import Shorts9 from './img/shorts9.png';

import Video1 from './img/video1.png';
import Video2 from './img/video2.png';
import Video3 from './img/video3.png';
import Video4 from './img/video4.png';
import Video5 from './img/video5.png';
import Video6 from './img/video6.png';

import Youtuber1 from './img/youtuber1.png';
import Youtuber2 from './img/youtuber2.png';
import Youtuber3 from './img/youtuber3.png';
import Youtuber4 from './img/youtuber4.png';
import Youtuber5 from './img/youtuber5.png';
import Youtuber6 from './img/youtuber6.png';

import Shortslogo from './img/shortslogo.png';

const Wrapper = styled.div`
  
  margin: 10px;
`;

const VideoWrapper = styled.div`
  display: flex;
`;

const ShortsWrapper = styled.div`
  display: flex;
`;

const Content = styled.div`
  padding : 5px;
`;

function App() {
  return (
    <Wrapper>
      <Header></Header>
      <Content>
        <Category categoryDiscription="전체"></Category>
        <Category categoryDiscription="음악"></Category>
        <Category categoryDiscription="게임"></Category>
        <Category categoryDiscription="라이브"></Category>
        <Category categoryDiscription="랩"></Category>
        <Category categoryDiscription="액션 어드벤처 게임"></Category>
        <Category categoryDiscription="만화 영화"></Category>
        <Category categoryDiscription="최근 업로드된 동영상"></Category>
        <Category categoryDiscription="새로운 맞춤 동영상"></Category>
        
        <VideoWrapper>
          <Video videoSrc={Video1} videoAlt = "유튜버 1" youtuberSrc={Youtuber1} youtuberAlt="유튜버 1" videoTitle="딜량 확인하고 눈을 의심한 팔협지.. 루덴 아지르 이거 뭐야? 버그 아니야?" youtuberName="이스타TV" videoView="1만" uploadTime="1년 전" ></Video>
          <Video videoSrc={Video2} videoAlt = "유튜버 1" youtuberSrc={Youtuber2} youtuberAlt="유튜버 1" videoTitle="짜장면 1500원? 버스 회수권? 불량 식품 먹으며 옛날 추억에 젖은 틀틀듀오ㅋㅋ" youtuberName="팔차선 [8LJAYWALKING]" videoView="1만" uploadTime="1년 전" ></Video>
          <Video videoSrc={Video3} videoAlt = "유튜버 1" youtuberSrc={Youtuber3} youtuberAlt="유튜버 1" videoTitle="일주일만에 15키로 찐 남자" youtuberName="말왕TV" videoView="1만" uploadTime="1년 전" ></Video>
          <Video videoSrc={Video4} videoAlt = "유튜버 1" youtuberSrc={Youtuber4} youtuberAlt="유튜버 1" videoTitle="단골 고깃집에서 빡친 이유" youtuberName="김단군" videoView="1만" uploadTime="1년 전" ></Video>
          <Video videoSrc={Video5} videoAlt = "유튜버 1" youtuberSrc={Youtuber5} youtuberAlt="유튜버 1" videoTitle="오늘도 실점 제로! 유일한 0점대 투수가 된 이마나가 | 김형준 야구야구" youtuberName="김형준의 야구야구 YagooYagoo" videoView="1만" uploadTime="1년 전" ></Video>
          <Video videoSrc={Video6} videoAlt = "유튜버 1" youtuberSrc={Youtuber6} youtuberAlt="유튜버 1" videoTitle="24명의 인격을 가진 다중인격자 빌리 밀리건 알아보기" youtuberName="침착맨" videoView="1만" uploadTime="1년 전" ></Video>
        </VideoWrapper>
        
        <img src={Shortslogo} alt="숏츠 로고" width="7%"></img>
        <ShortsWrapper>
          <Shorts shortsSrc={Shorts1} shortAlt="숏츠1" shortsTitle="희찬이 형이 접었죠? 골이에요." shortsView="1만"></Shorts>
          <Shorts shortsSrc={Shorts2} shortAlt="숏츠2" shortsTitle="개발자가 다크모드 쓰는 이유" shortsView="1만"></Shorts>
          <Shorts shortsSrc={Shorts3} shortAlt="숏츠3" shortsTitle="특수부대식 턱걸이 갯수 단시간에 늘리기!" shortsView="1만"></Shorts>
          <Shorts shortsSrc={Shorts4} shortAlt="숏츠4" shortsTitle="남들은 잘모르는 여름 티셔츠 맛집 5가지" shortsView="1만"></Shorts>
          <Shorts shortsSrc={Shorts5} shortAlt="숏츠5" shortsTitle="조주봉이 새 챌린지를 만든 이유" shortsView="1만"></Shorts>
          <Shorts shortsSrc={Shorts6} shortAlt="숏츠6" shortsTitle="왜 잘하냐고ㅋㅋ" shortsView="1만"></Shorts>
          <Shorts shortsSrc={Shorts7} shortAlt="숏츠7" shortsTitle="제로만 먹다가 그냥 콜라를 먹었을 때 찐 반응" shortsView="1만"></Shorts>
          <Shorts shortsSrc={Shorts8} shortAlt="숏츠8" shortsTitle="은퇴 날짜를 공개한 호날두" shortsView="1만"></Shorts>
          <Shorts shortsSrc={Shorts9} shortAlt="숏츠9" shortsTitle="축가 섭외 방법 #응답하라 1994" shortsView="1만"></Shorts>
        </ShortsWrapper>
      </Content>
    </Wrapper>
  );
}

export default App;
