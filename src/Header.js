import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <h1>Header</h1>
      <FontAwesomeIcon icon={faYoutube} style={{ color: "#fa2a05" }} />
    </>
  );
};

const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.p`
  font-weight: bold;
`;

export default Header;
