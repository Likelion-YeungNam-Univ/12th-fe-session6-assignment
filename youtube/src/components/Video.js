import styled from "styled-components";

const Container = styled.div`
  margin-top: 30px;
  height: auto;
  width: 100%;
  display: grid;
  align-items: center;
  gap: 15px;
  grid-template-columns: repeat(6, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const Image = styled.img`
  width: 300px;
  padding: 5px;
  border-radius: 10px;
  object-fit: cover;
`;
const VideoContainer = styled.div`
  display: grid;
  gap: 5px;
  grid-template-rows: auto auto auto;
`;
const Title = styled.div`
  color: white;
  font-weight: 600;
  font-size: 0.8rem;
`;
const Name = styled.a`
  color: white;
  font-size: 0.7rem;
`;
const Description = styled.a`
  color: white;
  font-size: 0.6rem;
`;
let videoArray = [
  [
    "IT 산업기능요원 인터뷰/급여,자격,구직사이트,조언 등",
    "온양",
    "3.3천회",
    "1년 전",
    "img/profileImg1.jpeg",
  ],
  [
    "위 수식이 틀린 이유는?(개발자 면접 타임)",
    "코딩애플",
    "116만회",
    "1년 전",
    "img/profileImg2.jpeg",
  ],
  [
    "playlist 너는 나의 꿈에 살고",
    "오아 OA",
    "34만회",
    "1개월 전",
    "img/profileImg3.png",
  ],
  ["투명물약은 신이다.", "랄로", "3.4만회", "22분전", "./img/profileImg4.png"],
  [
    "다비치 누나들과 섬 마을에서 생긴일-홍콩(하)",
    "곽튜브",
    "121만회",
    "1일 전",
    "img/profileImg5.jpeg",
  ],
  [
    "감스트 모르는 bj한테 한끼만 달라고 했는데.. 레전드 ㄷㄷ",
    "감스트GAMST",
    "100만회",
    "4일 전",
    "img/profileImg6.jpeg",
  ],
];
const ProfileImage = styled.img`
  border-radius: 70%;
  overflow: hidden;
  width: 25px;
  height: 25px;
`;
const SubContainer = styled.div`
  display: grid; 
  grid-template-columns: auto 1fr;  
  align-items: center; 
  gap: 10px; 
  margin-top: 20px;
`;

function Video() {
  return (
    <Container>
      {videoArray.map((video, index) => (
        <VideoContainer key={index}>
          <Image src={`img/video${index + 1}.png`} alt={`Video${index + 1}`} />
          <SubContainer>
            <ProfileImage
              src={video[4]}
              alt={`Profile of ${video[1]}`}
            ></ProfileImage>
            <Title>{video[0]}</Title>
          </SubContainer>
          <Name>{video[1]}</Name>
          <Description>
            조회수 {video[2]} {video[3]}
          </Description>
        </VideoContainer>
      ))}
    </Container>
  );
}
export default Video;
