// Nav.js
import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.nav`
  background-color: #555;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  color: white;
`;

const NavItem = styled.a`
  text-decoration: none;
  color: white;
  &:hover {
    text-decoration: underline;
  }
`;

const Nav = () => {
  return (
    <NavContainer>
      <NavItem href="#">Women's</NavItem>
      <NavItem href="#">Men's</NavItem>
      <NavItem href="#">On the Street</NavItem>
      <NavItem href="#">The Catwalk</NavItem>
      <NavItem href="#">AdWatch</NavItem>
      <NavItem href="#">About</NavItem>
    </NavContainer>
  );
};

export default Nav;
