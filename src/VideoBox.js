import React from 'react';
import styled from 'styled-components';

const VideoBox = ({ id, videoImg, userImg, title, information }) => {
  return (
    <Box>
      <VideoImg src={videoImg} alt="" />
      <InformationBox>
        <UserImg src={userImg} alt="" />
        <TitleBox>
          <Title>{title}</Title>
          <Information>{information}</Information>
        </TitleBox>
      </InformationBox>
    </Box>
  );
};
const Box = styled.div`
  width: 18%;
`;

const VideoImg = styled.img`
  width: 100%;
  border-radius: 20px;
  height: 150px;
`;

const InformationBox = styled.div`
  display: flex;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 5px;
`;

const UserImg = styled.img`
  margin-top: 5px;
  width: 15%;
  height: 20%;
`;

const Title = styled.p`
  display: flex;
  align-items: flex-start;
  padding: 2px;
  margin: 5px;
  padding-bottom: 0px;
  margin-bottom: 0px;
  font-size: 12px;
`;

const Information = styled.p`
  white-space: pre-line;
  padding: 2px;
  margin: 2px;
  color: gray;
  font-size: 12px;
  margin-left: 5px;
`;

export default VideoBox;
