import React from "react";
import styled from "styled-components";

const Short = () => {
  return (
    <Box>
      <Top>
        <Logo />
        Short
      </Top>
      <ShortBox>
        <ShortImg />
        <Title>숏츠 제목</Title>
        <Information>조회수</Information>
      </ShortBox>
    </Box>
  );
};

const Box = styled.div``;

const Top = styled.div``;

const Logo = styled.img``;

const ShortBox = styled.div``;

const ShortImg = styled.img``;

const Title = styled.p``;

const Information = styled.p``;

export default Short;
