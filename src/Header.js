import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';

const Header = () => {
  return (
    <Box>
      <Title>
        <FontAwesomeIcon icon={faYoutube} style={{ color: '#fa2a05' }} />
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
  align-items: center;
  font-size: 30px;
  padding: 0px 10px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
`;

const SearchBox = styled.div``;

const Search = styled.input`
  background-color: black;
  border: 2px solid gray;
  border-radius: 30px;
  width: 500px;
  font-size: 20px;
  padding: 10px;
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
