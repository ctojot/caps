'use strict';

const io = require('socket.io-client');
const capsSocket = io.connect('https://localhost:3002/caps');
const { createPickUp, handleDelivery, finishedDelivery } = require('./handler.js');


capsSocket.on('Delivered', handleDelivery);
capsSocket.on('Delivered', finishedDelivery);
capsSocket.emit('Pickup', createPickUp('1-206-flowers'));
capsSocket.emit('join', {roomName: '1-206-flowers' });

