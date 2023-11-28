// api.js

const apiUrl = 'https://randomuser.me/api/?page=3&results=10&seed=abc&exc=login';

export const fetchEmployees = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
};

export const fetchEmployeeDetails = async (id) => {
  const response = await fetch(`${apiUrl}&nat=US&inc=${id}`);
  const data = await response.json();
  return data.results[0];
};
