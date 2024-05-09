import React from 'react';
import styled from 'styled-components';
import ShortBox from './ShortBox';

const Short = () => {
  const shortList = [
    {
      id: 1,
      shortImg: 'image/lion2.png',
      title: '한명씩 꼭 있는 금수저 유학생',
      information: '조회수 217만회',
    },
    {
      id: 2,
      shortImg: 'image/lion2.png',
      title: '에스파 윈터 난제',
      information: '조회수 217만회',
    },
    {
      id: 3,
      shortImg: 'image/lion2.png',
      title: '터키에 있는 수직 수영장?',
      information: '조회수 217만회',
    },
    {
      id: 4,
      shortImg: 'image/lion2.png',
      title: '실제 원어민 영어 속도 체감',
      information: '조회수 217만회',
    },
    {
      id: 5,
      shortImg: 'image/lion2.png',
      title: '전직 아이돌 노래 실력',
      information: '조회수 217만회',
    },
    {
      id: 6,
      shortImg: 'image/lion2.png',
      title: '수컷 사자에게 등을 공격',
      information: '조회수 217만회',
    },
    {
      id: 7,
      shortImg: 'image/lion2.png',
      title: '대단한 춤이 아니어도 된다',
      information: '조회수 217만회',
    },
    {
      id: 8,
      shortImg: 'image/lion2.png',
      title: '[엔믹스] 오해원',
      information: '조회수 217만회',
    },
    {
      id: 9,
      shortImg: 'image/lion2.png',
      title: '바이킹이 뜨개질 하는 영상',
      information: '조회수 217만회',
    },
  ];

  return (
    <Box>
      <Top>
        <Logo />
        Shorts
      </Top>
      <ShortList>
        {shortList.map((el) => (
          <ShortBox key={el.id} shortImg={el.shortImg} title={el.title} information={el.information} />
        ))}
      </ShortList>
    </Box>
  );
};

const Box = styled.div``;

const Top = styled.div`
  padding-left: 10px;
  font-size: 20px;
  font-weight: bold;
`;

const Logo = styled.img``;

const ShortList = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px;
`;

export default Short;
