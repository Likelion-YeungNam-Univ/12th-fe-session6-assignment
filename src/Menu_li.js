import styled from 'styled-components';
import React from 'react';

const Menu_li = ({ body }) => {
  return <Styled_li>{body}</Styled_li>;
};

const Styled_li = styled.li`
  list-style: none;
  border-radius: 5px;
  background-color: rgb(30, 30, 30);
  padding: 5px;
  &:hover {
    background-color: white;
    color: black;
  }
`;

export default Menu_li;
