import React from "react";
import Menu_li from "./Menu_li";
import styled from "styled-components";

const Video = () => {
  const menuList = [
    { id: 1, body: "전체" },
    { id: 2, body: "음악" },
    { id: 3, body: "게임" },
    { id: 4, body: "라이브" },
    { id: 5, body: "랩" },
    { id: 6, body: "액션 어드벤처 게임" },
    { id: 7, body: "만화 영화" },
    { id: 8, body: "최근에 업로드된 동영상" },
    { id: 9, body: "새로운 맞춤 동영상" },
  ];

  return (
    <Box>
      <MenuBox>
        {menuList.map((el) => (
          <Menu_li key={el.id} body={el.body} />
        ))}
      </MenuBox>
      <VideoBox>
        <VideoImg />
        <TitleBox>
          <UserImg />
          <Title>제목</Title>
        </TitleBox>
        <Information>
          이름
          <br />
          조회수
        </Information>
      </VideoBox>
    </Box>
  );
};

const Box = styled.div``;

const MenuBox = styled.ul`
  display: flex;
`;

const VideoBox = styled.div``;

const VideoImg = styled.img``;

const TitleBox = styled.div``;

const UserImg = styled.img``;

const Title = styled.p``;

const Information = styled.p``;

export default Video;
