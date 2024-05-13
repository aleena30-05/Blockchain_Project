import React, { useState } from 'react';
import vmContract from './blockchain/pooling.js';
import "./formstyles.css"


function RideForm({ onAddRide }) {
  const [name, setName] = useState('');
  const [startLocation, setStartLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [startTime, setStartTime] = useState('');
  const [walletAddress, setWalletAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset the form fields
    setName('');
    setStartLocation('');
    setDestination('');
    setStartTime('');
    setWalletAddress('');
  };

  //MAKE CALL TO DATABASE FOR ADDRIDE
  const addRide = async () => {
    let currentWalletAddress = localStorage.getItem('activeAccount');
    try{
      console.log("Current Wallet Address:", currentWalletAddress);
      console.log("Wallet Address:", walletAddress);
      if (currentWalletAddress !== walletAddress.toLowerCase()) {alert("The wallet address entered does not match any MetaMask account."); return;}
      const gasEstimate = await vmContract.methods.addRide(name, startLocation, destination, startTime).estimateGas({ from: walletAddress });

      

      return vmContract.methods.addRide(name, startLocation, destination, startTime)
              .send({ from: walletAddress, gas: gasEstimate });
    } catch (error) {
      console.error("Failed to add ride:", error);
      alert('Failed to add ride. Please fill in details correctly.');
    }
  };

  return (
    <form class= "form" onSubmit={handleSubmit}>
        <div class = "space">
      <label class = "textfix">
        Name:
        <input className='textinput'
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        
      </label>
      <label class = "textfix2">
        Wallet Address:
        <input className='textinput2'
          type="text"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          required
        />
      </label>
      </div>
      
      <div class='space'>
      <label class = "textfix">
        Start Location:
        <input className='textinput3'
          type="text"
          value={startLocation}
          onChange={(e) => setStartLocation(e.target.value)}
          required
        />
      </label>
      <label class = "textfix3">
        Destination:
        <input className='textinput4'
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />
      </label>
      </div>
      <label class = "textfix">
        Start Time:
        <input className='textinput5'
          type="text"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          required
        />
      </label>
      <div className='buttonenv'>
      <button className = "addRideButton" type="submit" onClick={ addRide }>Add Ride</button>
      </div>
    </form>
  );
}

export default RideForm;
