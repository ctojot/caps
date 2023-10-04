'use strict';

const io = require('socket.io-client');
const capsSocket = io.connect('https://localhost:3002/caps');


function driverPickUp(payload) {
  console.log('DRIVER: Picked Up' + payload.orderId);
  capsSocket.emit('In-Transit' + payload);

  setTimeout (() => {
    console.log('DRIVER: Delivered Up' + payload.orderId);
    capsSocket.emit('Delivered' + payload);
  }, 2000);
}

module.exports = {
  driverPickUp,
};