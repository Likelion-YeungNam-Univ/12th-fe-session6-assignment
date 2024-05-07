import styled from "styled-components"
import VideoComponent from "./VideoComponent";

const Videos = () => {

    const Wrapper = styled.div`
        display : flex;
        gap : 10px;
        margin-bottom : 50px;   
    `;

    const videos = [
        {title :"IT 산업기능 요원 인터뷰 / 급여, 자격, 구직 사이트, 조언 등", author : "온양", views : 30, date : "1년 전"}, // views : k 단위
        {title :"위 수식이 틀린 이유는? (개발자 면접 타입)", author : "코딩애플", views : 16000, date : "1년 전"},
        {title :"playlist 나는 너의 꿈에 살고 | 검정치마", author : "오아 OA", views : 340, date : "1개월 전"},
        {title :"투명물약은 신이다", author : "랄로", views : 34, date : "22분전"},
        {title :"다비치 누나들과 섬 마을에서 생긴일 - 홍콩(하)", author : "곽튜브", views : 12100, date : "1일 전"},
    ];
  return (
    <Wrapper>
    {videos.map( item => { 
        return <VideoComponent video={item}></VideoComponent>
    })}
    </Wrapper>
  )
}

export default Videos;