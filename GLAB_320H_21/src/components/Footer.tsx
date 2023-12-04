import styled from 'styled-components';

const StyledFooter = styled.footer`
//   background-color: #333;
  color: #fff;
  text-align: center;
  width: 100%;
`;

export default function Footer () {
    return (
        <StyledFooter>
         <p>&copy; 2023. All rights reserved.</p>
      </StyledFooter>
    );
}