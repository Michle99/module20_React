import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import EmployeeListItem from './EmployeeListItem';

const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px;
  gap: 20px;
  border: 5px solid #ccc;
  border-radius: 8px;
  padding: 20px;
`;

const EmployeeList = ({ employees }) => {
  return (
    <GridWrapper>
      {employees.map((employee) => (
        <Link to={`/employee/${employee.login.uuid}`} key={employee.login.uuid}>
          <EmployeeListItem employee={employee} />
        </Link>
      ))}
    </GridWrapper>
  );
};

export default EmployeeList;
