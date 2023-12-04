import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const DetailsWrapper = styled.div`
  text-align: center;
  margin: 70px auto;
  max-width: 600px;
  border: 15px solid brown;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 5px solid grey;
  margin-bottom: 15px;

`;
const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EmployeeDetailsItem = () => {
  const { id } = useParams();
  const [employeeDetails, setEmployeeDetails] = useState(null);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=1&seed=${id}`)
      .then((response) => response.json())
      .then((data) => setEmployeeDetails(data.results[0]))
      .catch((error) => console.error('Error fetching details:', error));
  }, [id]);

  if (!employeeDetails) {
    return <p>No employees found...</p>; 
  }

  const { 
    name, 
    picture, 
    email, 
    phone, 
    login,
    location
  } = employeeDetails;

  return (
    <DetailsWrapper>
      <Image src={picture.medium} alt={`${name.first} ${name.last}`} />
      <TextContainer>
        <p>{`${name.first} ${name.last}`}</p>
        <p>{email}</p>
        <p>{login.username}</p>
        <p>{phone}</p>
        <p>{location.city}</p>
        <p>{location.state}</p>
        <p>{location.country}</p>
       </TextContainer>
  </DetailsWrapper>
  );
};

export default EmployeeDetailsItem;
