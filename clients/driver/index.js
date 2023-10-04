'use strict';

const io = require('socket.io-client');
const capsSocket = io.connect('http://localhost:3002/caps');
const { curryPickup } = require('./handler.js');

capsSocket.emit('join', {storeName: '1-206-flowers' });

capsSocket.on('pickup', curryPickup(capsSocket));
capsSocket.on('join', (payload) => {
  console.log('You have joined the room!', payload);
});
