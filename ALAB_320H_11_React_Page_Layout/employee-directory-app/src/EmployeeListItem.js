import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  width: 200px;
  overflow: hidden;
  max-height: 250px;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const EmployeeListItem = ({ employee }) => {
  const { name, picture } = employee;
  return (
    <CardWrapper>
      <Image src={picture.medium} alt={`${name.first} ${name.last}`} />
      <p>{`${name.first} ${name.last}`}</p>
    </CardWrapper>
  );
};

export default EmployeeListItem;
