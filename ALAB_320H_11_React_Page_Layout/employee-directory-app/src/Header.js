import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
`;

const Header = () => {
  return <HeaderWrapper>Employee Directory</HeaderWrapper>;
};

export default Header;
