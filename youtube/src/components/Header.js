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
const Image2 = styled.img`
  width: 30px;
  height: auto;
`;
const Input = styled.input`
  width: 300px;
  padding-left: 10px;
  border-radius: 15px;
  height: 20px;
  border-color: gray;
  background-color: transparent;
  color: white;
  box-shadow: none;
`;
function Header() {
  return (
    <Wrapper>
      <Image1 alt="logo" src="img/logo.png" />
      <div>
        <Input placeholder="검색"></Input>

      </div>
      <Image2 alt="profile" src="img/profile.png"></Image2>
    </Wrapper>
  );
}
export default Header;
