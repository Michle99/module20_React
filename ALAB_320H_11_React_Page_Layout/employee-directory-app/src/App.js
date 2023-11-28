import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import EmployeeDetailsItem from './EmployeeDetailsItem';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/employee/:id" element={<EmployeeDetailsItem/>} />
      </Routes>
      
    </Router>
  );
}

export default App;
