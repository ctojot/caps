'use strict';

const io = require('socket.io-client');
const capsSocket = io.connect('https://localhost:3002/caps');
const socket = io.connect('http://localhost:3002');
const driverPickup = require('./handler.js');

capsSocket.on('Pickup' + driverPickup);

socket.on('join', (payload) => {
  console.log('Message from room: ', payload);
});
capsSocket.emit('join', {roomName: '1-206-flowers' });



