import Web3 from 'web3';

const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");

const web3 = new Web3(provider);

const abi = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"rideId","type":"uint256"},{"indexed":true,"internalType":"address","name":"booker","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountPaid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"numberOfBookers","type":"uint256"}],"name":"DebugBookRide","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"RideAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"address","name":"booker","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RideBooked","type":"event"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_startLocation","type":"string"},{"internalType":"string","name":"_destination","type":"string"},{"internalType":"uint256","name":"_startTime","type":"uint256"}],"name":"addRide","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rideId","type":"uint256"}],"name":"bookRide","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rideId","type":"uint256"}],"name":"getBookingDetails","outputs":[{"internalType":"address[]","name":"bookers","type":"address[]"},{"internalType":"uint256[]","name":"amountsPaid","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rideId","type":"uint256"}],"name":"getNumberOfBookings","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getRidesByOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"ownerRides","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rideCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rides","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"startLocation","type":"string"},{"internalType":"string","name":"destination","type":"string"},{"internalType":"uint256","name":"startTime","type":"uint256"}],"stateMutability":"view","type":"function"}];
const vmContract = new web3.eth.Contract(abi, "0x94bb0636EC21894473AfDc57030097Ffe1A281f7");

export default vmContract;