import logo from './logo.svg';
import './App.css';
import "./styles.css";
import { Button } from 'bootstrap';
import RideForm from './RideForm';
import React, { useState } from 'react';
import tick from './tick.png'
import Login from './login'
import Register from './register';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Main from './main';

const dummyData = [
  { name: 'John Doe', startLocation: 'd-12/2', destination: 'Fast NUCES', startTime: '10:00 AM', fare: '$10', walletaddress: "123" },
  { name: 'Jane Smith', startLocation: 'F-10/2', destination: 'Peshawar', startTime: '11:00 AM', fare: '$15', walletaddress: "124" },
  // Add more dummy data as needed
];


function App() {
  
  return (
    <Router>
      <div className="app-container">
        {/* <Link to="/register">Register</Link> */}
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
