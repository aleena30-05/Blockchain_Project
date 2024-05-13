import React, { useState } from 'react';
import "./formstyles.css"


function RideForm({ onAddRide }) {
  const [name, setName] = useState('');
  const [startLocation, setStartLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [startTime, setStartTime] = useState('');
  const [walletAddress, setWalletAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the callback function passed from the parent component to add the ride
    onAddRide({ name, startLocation, destination, startTime, walletAddress });
    // Reset the form fields
    setName('');
    setStartLocation('');
    setDestination('');
    setStartTime('');
    setWalletAddress('');
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
      <button className = "addRideButton" type="submit">Add Ride</button>
      </div>
    </form>
  );
}

export default RideForm;
