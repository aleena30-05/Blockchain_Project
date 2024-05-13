import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform authentication logic
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset form fields
    setUsername('');
    setPassword('');
  };
  const navigate = useNavigate(); // Import useNavigate hook

  const handleLogin = () => {
    // Perform validation if needed
  };

  return (
    <div className='mainscreen'>
      
      <div className="macbook-pro">
        <div className="div">
        
          <div className="overlap-group2">
            
            <p className="car-pool">
              <span className="text-wrapper">Car</span>
              <span className="span">Pool</span>
            </p>
          </div>
          <div className ="login-form"> 
          <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input className='textinput7'
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input className='textinput7'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button onClick={() => navigate('/Login')}>Login</button>
        <button onClick={() => navigate('/Home')}>Register</button>
      </form>
    </div>
      </div>
        </div>
      </div>
      
    </div>
  );
};

export default Register;
