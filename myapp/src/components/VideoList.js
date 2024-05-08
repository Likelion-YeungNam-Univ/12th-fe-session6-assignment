import styled from 'styled-components'
import VideoDetail from './VideoDetail';
import img1 from '../images/profil01.png';
import img2 from '../images/profil02.png';
import img3 from '../images/profil03.png';
import img4 from '../images/profil04.png';
import img5 from '../images/profil05.png';
import img6 from '../images/profil06.png';

import video01 from '../images/video01.png';
import video02 from '../images/video02.png';
import video03 from '../images/video03.png';
import video04 from '../images/video04.png';
import video05 from '../images/video05.png';
import video06 from '../images/video06.png';

const VideorWrapper=styled.div`
    /* height: 240px; */
    width: 100%;
    display: flex;
    flex: 5;
    padding-top: 20px;
`


function VideoList(){
    return(
        <VideorWrapper>  
            <VideoDetail video={video01} profil={img1} title='고도비만 청년의 신년맞이 1일1식 다이어트'
            channel='곽튜브' view='167만' date='2개월' />
            <VideoDetail video={video02} profil={img2} title='이스탄불 먹방 기행 【유라시아72】'
            channel='빠니보틀 Pani Bottle' view='345만' date='4개월' />
            <VideoDetail video={video03} profil={img3} title='우리가 사는 우주는 얼마나 넓은가'
            channel='침착맨' view='270만' date='3개월' />
            <VideoDetail video={video04} profil={img4} title='코딩초보들이 헷갈리는 용어 : API가 뭐냐면'
            channel='코딩애플' view='23만' date='2년' />
            <VideoDetail video={video05} profil={img5} title='[한글자막] 아이브 장원영에게 예쁘다'
            channel='피식대학Psick Univ' view='398만' date='2일' />
            <VideoDetail video={video06} profil={img6} title='모두가 지르는 시대'
            channel='슈카월드' view='66만' date='1개월' />
        </VideorWrapper>
        
    )
}

export  default VideoList;
