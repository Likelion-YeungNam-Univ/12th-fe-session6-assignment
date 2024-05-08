import React from 'react';
import styled from 'styled-components';

const ShortBox = ({ id, shortImg, title, information }) => {
  return (
    <Box>
      <ShortImg src={shortImg} alt="" />
      <InformationBox>
        <TitleBox>
          <Title>{title}</Title>
          <Information>{information}</Information>
        </TitleBox>
      </InformationBox>
    </Box>
  );
};
const Box = styled.div`
  width: 12%;
`;

const ShortImg = styled.img`
  width: 100%;
  border-radius: 20px;
  height: 250px;
`;

const InformationBox = styled.div`
  display: flex;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  display: flex;
  align-items: flex-start;
  padding: 2px;
  margin: 5px;
  font-size: 14px;
`;

const Information = styled.p`
  white-space: pre-line;
  padding: 2px;
  margin: 2px;
  color: gray;
  font-size: 12px;
  margin-left: 5px;
`;

export default ShortBox;
