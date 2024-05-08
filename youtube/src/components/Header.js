import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Image1 = styled.img`
  width: 100px;
  height: auto;
`;
const ProgfileImage = styled.img`
  width: 30px;
  height: auto;
  cursor: pointer;
`;
const Search = styled.input`
  width: 300px;
  padding-left: 10px;
  border-radius: 15px;
  height: 20px;
  border-color: gray;
  background-color: transparent;
  color: white;
  box-shadow: none;
`;
const Alarm = styled.button`
  width: 5px;
  background-color: black;
  border: none;
`;
const AlarmImg = styled.img`
  width: 20px;
  height: auto;
  cursor: pointer;
`;
const Camera = styled.button`
  width: 5px;
  background-color: black;
  border: none;
`;
const CameraImg = styled.img`
  width: 20px;
  height: auto;
  cursor: pointer;
`;
const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
const Mike = styled.div`
  width: 15px;
  height: 15px;
`;
const MikeImg = styled.img`
  width: 30px;
  height: auto;
  cursor: pointer;
  margin-left:10px;
`;
const Container=styled.div`
  display: flex;
`
function Header() {
  return (
    <Wrapper>
      <Image1 alt="logo" src="img/logo.png" />
      <Container>
        <Search placeholder="검색"></Search>
        <Mike>
          <MikeImg src="img/mike.png" alt="Mike"></MikeImg>
        </Mike>
      </Container>
      <ProfileContainer>
        <Camera>
          <CameraImg src="img/camera.png" alt="Camera" />
        </Camera>
        <Alarm>
          <AlarmImg alt="Alarm" src="img/alarm.png"></AlarmImg>
        </Alarm>
        <ProgfileImage alt="profile" src="img/profile.png"></ProgfileImage>
      </ProfileContainer>
    </Wrapper>
  );
}
export default Header;
