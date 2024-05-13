import logo from './logo.svg';
import './App.css';
import "./styles.css";
import { Button } from 'bootstrap';
import RideForm from './RideForm';
import React, { useState } from 'react';
import tick from './tick.png'
import { useNavigate } from 'react-router-dom';

const dummyData = [
  { name: 'John Doe', startLocation: 'd-12/2', destination: 'Fast NUCES', startTime: '10:00 AM', fare: '$10', walletaddress: "123" },
  { name: 'Jane Smith', startLocation: 'F-10/2', destination: 'Peshawar', startTime: '11:00 AM', fare: '$15', walletaddress: "124" },
  // Add more dummy data as needed
];

const userData = [
  { name: 'Jane Smith', startLocation: 'F-10/2', destination: 'Peshawar', startTime: '11:00 AM', fare: '$15', walletaddress: "124" },
];


const Main = () => {
  const [showRideForm, setShowRideForm] = useState(false);
  const [showAddButton, setShowAddButton] = useState(true);
  const [showBookingPopup, setShowBookingPopup] = useState(false);
  const [showWalletPopup, setShowWalletPopup] = useState(false);
  const [AddEthPopup, setAddEthPopup] = useState(false);
  const [RemoveEthPopup, setRemoveEthPopup] = useState(false);
  const [amount, setamount] = useState('');

  const handleAddRide = () => {
    setShowRideForm(true);
    setShowAddButton(false);
  };

  const handleCloseForm = () => {
    setShowRideForm(false);
    setShowAddButton(true);
  };

  const bookNow = () => {
    console.log('Ride booked, fares transfered');
    setShowBookingPopup(true);
  };

  const WalletShow = () => {
    setShowWalletPopup(true);
  }
  const AddEth = () => {
    setAddEthPopup(true);
  }
  const RemoveEth = () => {
    setRemoveEthPopup(true);
  }

  const closeWalletShow = () => {
    setShowWalletPopup(false);
  }
  const closeAddEth = () => {
    setAddEthPopup(false);
  }
  const closeRemoveEth = () => {
    setRemoveEthPopup(false);
  }
  const ActuallyAddEth = () => {
    console.log('Eth Added');
    setAddEthPopup(false);
  }
  const ActuallyRemoveEth = () => {
    console.log('Eth Removed');
    setRemoveEthPopup(false);
  }

  const handlePopupClose = () => {
    setShowBookingPopup(false);
  };

  const Logout = () => {
    console.log("Logout");
  };
  const navigate = useNavigate();
  return (
    <div className="macbook-pro">
      
      <div className="div">
      
        <div className="overlap-group">
          <div className="rectangle" />
          <p className="car-pool">
            <span className="text-wrapper">Car</span>
            <span className="span">Pool</span>
          </p>
          <div className="frame">
            <div className='text-wrapper-2'>
            <div className='whitewashed'>Car</div>
            <div>Pool</div>
            </div>
            <div className="text-wrapper-3" onClick={WalletShow}>Wallet</div>
            <div className= "text-wrapper-3" onClick={AddEth}>Add Eth</div>
            <div className= "text-wrapper-3" onClick={RemoveEth}>Remove Eth</div>
            <div className= "logout" onClick={() => navigate('/')}>Logout</div>
            
          </div>
          
          <p className="search-rides">
            <span className="text-wrapper">Search </span>
            <span className="span">Rides</span>
          </p>
        </div>
      </div>
      
      <div className="whole">
      {dummyData.map((item, index) => (
        <div className="details" key={index}>
          <p className="first">{item.name}</p>
          <p>{item.startLocation}</p>
          <p>{item.destination}</p>
          <p>{item.startTime}</p>
          <p>{item.fare}</p>
          <button className="bookButton" onClick={bookNow}>Book Now</button>
        </div>
      ))}
    </div>
{/* Popup for Ride Form */}
{showRideForm && (
        <div className="ride-form-popup">
          <div className="ride-form-container">
            
            <RideForm />
            <p className="close-button" onClick={handleCloseForm}>Cancel</p>
          </div>
        </div>
      )}
  
  {showAddButton &&
      <div>
        <button className = "addRide" onClick={handleAddRide}> ADD RIDE</button>
      </div>
  }
  <div className="whole">
    <h1 className = "rideHistory">Ride History</h1>
      {userData.map((item, index) => (
        <div className="details2" key={index}>
          <p className="first">{item.name}</p>
          <p>{item.startLocation}</p>
          <p>{item.destination}</p>
          <p>{item.startTime}</p>
          <p>{item.fare}</p>
        </div>
      ))}
    </div>

  {showBookingPopup && (
        <div className="booking-popup">
          <div className="booking-details">
          <button className= "closebutton" onClick={handlePopupClose}>X</button>
          <h1>Booking Completed</h1>
          <img className = "image" src={tick}/>

            {/* <p>Name: {dummyData[0].name}</p>
            <p>Start Location: {dummyData[0].startLocation}</p>
            <p>Destination: {dummyData[0].destination}</p>
            <p>Start Time: {dummyData[0].startTime}</p>
            <p>Remaining Funds: {dummyData[0].fare}</p> */}
            
          </div>
        </div>
      )}
  {showWalletPopup && (
        <div className="booking-popup2">
          <div className="booking-details2">
          
          <h1 className='Text3'>Wallet Amount Remaining</h1>
          <p className='Text2'>$100</p>
          <button className= "cmon2" onClick={closeWalletShow}>Done</button>
            
          </div>
        </div>
      )}
    {AddEthPopup && (
        <div className="booking-popup2">
          <div className="booking-details2">
          
          <div className="firstLine">
          <h1 className='Text3'>Current Balance : </h1>
          <h1 className='Text3'>$100</h1>
          </div>
          <div className='firstLine'>
          <label>
            Amount:
          <input className='textinput10'
          type="text"
          value={amount}
          onChange={(e) => setamount(e.target.value)}
          required
        />
          </label>
          </div>
        <div className='firstLine'>
          <button className= "cmon" onClick={closeAddEth}>Cancel</button>
          <button className= "cmon" onClick={ActuallyAddEth}>Add</button>
          </div>
          </div>
        </div>
      )}
      {RemoveEthPopup && (
        <div className="booking-popup2">
          <div className="booking-details2">
          
          <div className="firstLine">
          <h1 className='Text3'>Current Balance : </h1>
          <h1 className='Text3'>$100</h1>
          </div>
          <div className='firstLine'>
          <label>
            Amount:
          <input className='textinput10'
          type="text"
          value={amount}
          onChange={(e) => setamount(e.target.value)}
          required
        />
          </label>
          </div>
        <div className='firstLine'>
          <button className= "cmon" onClick={closeRemoveEth}>Cancel</button>
          <button className= "cmon" onClick={ActuallyRemoveEth}>Remove</button>
          </div>
          </div>
        </div>
      )}
  
    </div>
  );
}

export default Main;
