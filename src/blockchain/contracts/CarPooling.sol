// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RideContract {
    struct Ride {
        uint id;
        address payable owner;
        string name;
        string startLocation;
        string destination;
        uint startTime;
        address[] bookers;
        uint[] amountsPaid;
    }

    Ride[] public rides;
    mapping(address => uint[]) public ownerRides;
    mapping(address => uint) public rideCount;

    event RideAdded(uint id, string name, address owner);
    event RideBooked(uint id, address booker, uint amount);

    // Function to add a ride
    function addRide(string memory _name, string memory _startLocation, string memory _destination, uint _startTime) public {
        rides.push(Ride({
            id: rides.length,
            owner: payable(msg.sender),
            name: _name,
            startLocation: _startLocation,
            destination: _destination,
            startTime: _startTime,
            bookers: new address[](0) ,  // Initialize empty array of addresses
            amountsPaid: new uint[](0)   // Initialize empty array of uints
        }));

        ownerRides[msg.sender].push(rides.length - 1);
        rideCount[msg.sender]++;
        emit RideAdded(rides.length - 1, _name, msg.sender);
    }

    // Function to book a ride
    event DebugBookRide(uint rideId, address indexed booker, uint amountPaid, uint numberOfBookers);

    function bookRide(uint _rideId) public payable {
        require(_rideId < rides.length, "Ride does not exist.");
        require(msg.value > 0, "Payment must be greater than 0.");

        Ride storage ride = rides[_rideId];
        ride.bookers.push(msg.sender);
        ride.amountsPaid.push(msg.value);

        ride.owner.transfer(msg.value);

        // Emit an event with detailed debug information
        emit DebugBookRide(_rideId, msg.sender, msg.value, ride.bookers.length);

        // You can still keep the original event if needed
        emit RideBooked(_rideId, msg.sender, msg.value);
    }


    // Function to get rides by owner
    function getRidesByOwner(address _owner) public view returns (uint[] memory) {
        return ownerRides[_owner];
    }

    // Function to get booking details for a ride
    function getBookingDetails(uint _rideId) public view returns (address[] memory bookers, uint[] memory amountsPaid) {
        require(_rideId < rides.length, "Ride does not exist.");
        return (rides[_rideId].bookers, rides[_rideId].amountsPaid);
    }

    // Function to get the number of bookings for a ride
    function getNumberOfBookings(uint _rideId) public view returns (uint) {
        require(_rideId < rides.length, "Ride does not exist.");
        return rides[_rideId].bookers.length;
    }
}
