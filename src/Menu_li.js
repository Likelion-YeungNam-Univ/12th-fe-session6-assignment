import styled from "styled-components";
import React from "react";

const Menu_li = ({ body }) => {
  return <Styled_li>{body}</Styled_li>;
};

const Styled_li = styled.li`
  font-size: 5px;
  margin: 5px;
`;

export default Menu_li;
