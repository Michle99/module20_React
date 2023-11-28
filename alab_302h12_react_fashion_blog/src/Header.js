// Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Satre's List</h1>
      <h3>Better-Dressed People</h3>
    </HeaderContainer>
  );
};

export default Header;
