import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const Header = () => {
  return (
    <Box>
      <Title>
        <FontAwesomeIcon icon={faYoutube} style={{ color: "#fa2a05" }} />
        YouTube
      </Title>
      <Search type="text" placeholder="검색"></Search>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
`;

const Title = styled.div``;

const Search = styled.input``;

const User = styled.div``;
export default Header;
