import React from 'react';
import Menu_li from './Menu_li';
import styled from 'styled-components';
import VideoBox from './VideoBox.js';

const Video = ({ id, videoImg, userImg, title, information }) => {
  const menuList = [
    { id: 1, body: '전체' },
    { id: 2, body: '음악' },
    { id: 3, body: '게임' },
    { id: 4, body: '라이브' },
    { id: 5, body: '랩' },
    { id: 6, body: '액션 어드벤처 게임' },
    { id: 7, body: '만화 영화' },
    { id: 8, body: '최근에 업로드된 동영상' },
    { id: 9, body: '새로운 맞춤 동영상' },
  ];

  const videoList = [
    {
      id: 1,
      videoImg: 'image/lion.png',
      userImg: 'image/user.png',
      title: 'IT산업기능요원 인터뷰',
      information: '온양 \n조회수 3.3천회.1년 전',
    },
    {
      id: 2,
      videoImg: 'image/lion.png',
      userImg: 'image/user.png',
      title: '위 수식이 틀린 이유는?',
      information: '코딩애플\n조회수 116만회.1년 전',
    },
    {
      id: 3,
      videoImg: 'image/lion.png',
      userImg: 'image/user.png',
      title: '플레이리스트',
      information: '오아\n조회수 34만회.1년 전',
    },
    {
      id: 4,
      videoImg: 'image/lion.png',
      userImg: 'image/user.png',
      title: '투명물약은 신이다',
      information: '랄로\n조회수 3.4만회.1년 전',
    },
    {
      id: 5,
      videoImg: 'image/lion.png',
      userImg: 'image/user.png',
      title: '다비치 누나들과 섬 마을에서 생긴 일',
      information: '곽튜브\n조회수 120만회.1년 전',
    },
    {
      id: 6,
      videoImg: 'image/lion.png',
      userImg: 'image/user.png',
      title: '전자연구노트 최초 ISO 인증',
      information: '아직도 손으로 쓰세요?',
    },
  ];

  return (
    <Box>
      <MenuBox>
        {menuList.map((el) => (
          <Menu_li key={el.id} body={el.body} />
        ))}
      </MenuBox>
      <VideoList>
        {videoList.map((el) => (
          <VideoBox
            key={el.id}
            videoImg={el.videoImg}
            userImg={el.userImg}
            title={el.title}
            information={el.information}
          />
        ))}
      </VideoList>
    </Box>
  );
};

const Box = styled.div``;

const MenuBox = styled.ul`
  display: flex;
  gap: 10px;
  padding-left: 10px;
`;

const VideoList = styled.div`
  display: flex;
  gap: 10px;
  padding-left: 10px;
`;

export default Video;
