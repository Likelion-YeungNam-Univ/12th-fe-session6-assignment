import styled from "styled-components";
const shortArray = [
  ["한명씩 꼭 있는 금수저 유학생", "217만회"],
  ["에스파 윈터 난제(금vs빨vs갈vs흑)", "222만회"],
  ["터키에 있다는 수직 수영장?", "761만회"],
  ["실제 원어민 영어 속도 체감", "359만회"],
  ["전직 아이돌의 충격적인 노래 실력..ㄷㄷ", "356만회"],
  ["수컷 사장에게 등을 공격 받았던 표범의 놀라운 행동", "66만회"],
  ["대단한 춤이 아니어도 이렇게 무대를 뺏을 수 있네 ㅋㅋㅋㅋ", "159만회"],
  ["[엔믹스]오례원이 추는 나루토 춤ㅋㅋㅋ", "316만회"],
  ["바이킹이 뜨개질을 한다는게 무슨 소리야", "280만회"],
];
const Container = styled.div`
  display: grid;
  margin-top: 40px;
  grid-template-columns: repeat(9, 1fr);
  gap: 10px;
  width: 100%;
  @media (max-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
const Image = styled.img`
  height: 350px;
  border-radius: 10px;
`;

const VideoTitle = styled.a`
  font-size: 1rem;
  color: white;
  font-weight: 500;
`;
const Description = styled.a`
  font-size: 0.7rem;
  color: white;
  font-weight: 300;
`;
const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -50px;
`;
const Logo = styled.img`
  width: 20px;
  margin-top:30px;
  height: auto;
`;

const LogoTitle = styled.a`
  color: white;
  font-size: 20px;
  font-weight: 800;
`;
const LogoContainer = styled.div`
  width: 100%;
  height: 100px;
  padding: 10px;
  margin-top: 80px;
`;
function Shorts() {
  return (
    <div>
      <LogoContainer>
        <Logo src="img/LogoImg.png"></Logo>
        <LogoTitle>Shorts</LogoTitle>
      </LogoContainer>
      <Container>
        {shortArray.map((video, index) => (
          <VideoContainer>
            <Image src={`img/shortsImg${index + 1}.png`} />
            <VideoTitle>{`${video[0]}`}</VideoTitle>
            <Description>조회수 {`${video[1]}`}</Description>
          </VideoContainer>
        ))}
      </Container>
    </div>
  );
}

export default Shorts;
