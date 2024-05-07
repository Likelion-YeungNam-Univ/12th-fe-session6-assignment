import styled from "styled-components"
import ShortsComponent from "./ShortsComponent";


const Shorts = () => {

    const shorts = [
        {title : "한 명씩 꼭 있는 금수저 유학생", views:217},
        {title : "에스파 윈터 난제", views:222},
        {title : "터키에 있단는 수직 수영장?", views:761},
        {title : "실제 원어민 영어 속도 체감", views:359},
        {title : "전직 아이돌의 충격적인 노래 실력", views:356},
        {title : "수컷 사자에게 등을 공격받았던 표범의 놀라운 행동", views:66},
        {title : "대단한 춤이 아니어도 이렇게 무대를 찢을 수 있네 ㅋㅋㅋㅋ", views:159},
        {title : "[엔믹스] 오해원이 추는 나루토춤", views:316}
    ];

    const Wrapper = styled.div`
        box-sizing : border-box;
        width : 100%;
        height : 400px;
        display : flex;
        gap : 15px;
    `;

    const Separator = styled.div`
        color : #fff;
        font-family: "Roboto", sans-serif;
        font-weight: 900;
        font-style: normal;
        font-size : 30px;
        margin-bottom : 30px;
        display : flex;
        align-item : center;
        gap : 10px;

    `;

  return (
    <>
        <Separator>
            <img alt="shorts-logo" src="https://i.namu.wiki/i/U9askcSIO15NPAQcXXMbIa-K4SpjZlkfgzSzHn9_8bUXlbtzLVlOacFUSELbwoNeJguuUtpgHCE9hvO8iIfHOQ.svg" width="30px"></img>
            Shorts
        </Separator>
        <Wrapper>
            {shorts.map(item => {
                return <ShortsComponent shorts={item}/>
            })}
        </Wrapper>
    </>
  )
}

export default Shorts