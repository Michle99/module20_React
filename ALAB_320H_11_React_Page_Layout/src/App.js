import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import EmployeeDetailsItem from './EmployeeDetailsItem';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
      <div className="App">
        <Header/>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/employee/:id" element={<EmployeeDetailsItem/>} />
          </Routes>
        </Router>
        <Footer/>
      </div>
  );
}

export default App;
