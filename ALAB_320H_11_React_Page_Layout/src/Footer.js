import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
`;

const FooterItem = styled.a`
  text-decoration: none;
  color: white;
  margin: 0 10px;
  &:hover {
    text-decoration: underline;
  }
`;

const Copyright = styled.p`
  margin-top: 10px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterItem href="#">Home</FooterItem>
      <FooterItem href="#">About</FooterItem>
      <FooterItem href="#">Contact Us</FooterItem>
      <FooterItem href="#">About</FooterItem>
      <Copyright>Copyright 2013 Valet Industries, Inc</Copyright>
    </FooterContainer>
  );
};

export default Footer;
