import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Web3 from 'web3';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [walletAddress, setWalletAddress] = useState('');

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

  const connectWalletHandler = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log("Accounts:", accounts);
  
        const lowerCaseWalletAddress = walletAddress.toLowerCase();
        const matchedAccount = accounts.find(account => account.toLowerCase() === lowerCaseWalletAddress);
  
        if (!matchedAccount) {
          alert("The wallet address entered does not match any MetaMask account. Please switch your account in MetaMask.");
        } else {
          console.log("Connected to wallet:", matchedAccount);
          // Store the matched account to be used in other webpages
          localStorage.setItem('activeAccount', matchedAccount);
          navigate('/Home');
        }
      } catch (e) {
        console.log("Error:", e);
      }
    } else {
      alert("Please install MetaMask to use this dApp!");
    }
  };
  
  // Usage in other parts of your code
  const activeAccount = localStorage.getItem('activeAccount');
  console.log("Active Account:", activeAccount);
  
  
  

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
            <h2 className = "headingText">Welcome</h2>
    
      <form onSubmit={handleSubmit}>
        {/* <div>
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
        </div> */}
        <input
        type="text"
        className="textinput"
        value={walletAddress}
        onChange={(e) => setWalletAddress(e.target.value)}
        placeholder="Enter your wallet address"
      />
        <button className = "metamaskButton" onClick={ connectWalletHandler }>Connect to Metamask</button>
      </form>
    </div>
      </div>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
