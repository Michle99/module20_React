import React, { useState, useEffect } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import EmployeeList from './EmployeeList';

const Homepage = () => {
  // State for employee data
  const [employees, setEmployees] = useState([]);
  // State for filtered employees based on search
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  // Fetch employee data on component mount
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then((response) => response.json())
      .then((data) => setEmployees(data.results))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Function to handle search
  const handleSearch = (query) => {
    const filtered = employees.filter(
      (employee) =>
        employee.name.first.toLowerCase().includes(query.toLowerCase()) ||
        employee.name.last.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredEmployees(filtered);
  };

  return (
    <div>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <EmployeeList employees={filteredEmployees.length > 0 ? filteredEmployees : employees} />
    </div>
  );
};

export default Homepage;
