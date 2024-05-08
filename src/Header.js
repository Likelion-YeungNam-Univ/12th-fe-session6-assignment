import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";

const Header = () => {
  return (
    <Box>
      <Title>
        <FontAwesomeIcon icon={faYoutube} style={{ color: "#fa2a05" }} />
        YouTube
      </Title>
      <SearchBox>
        <Search type="text" placeholder="검색"></Search>
      </SearchBox>
      <User>
        <FontAwesomeIcon icon={faCamera} />
        <FontAwesomeIcon icon={faBell} />
        <UserImg src="image/user.png" alt="" />
      </User>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
`;

const Title = styled.div``;

const SearchBox = styled.div``;

const Search = styled.input`
  background-color: black;
  border: 1px solid gray;
  border-radius: 10px;
  width: 300px;
  font-size: 10px;
  padding: 5px;
  color: white;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const UserImg = styled.img`
  width: 30px;
`;
export default Header;
