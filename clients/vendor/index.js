'use strict';

const io = require('socket.io-client');
const capsSocket = io.connect('http://localhost:3002/caps');
const { createPickUp, handleDelivery, finishedDelivery } = require('./handler.js');

capsSocket.emit('join', {storeName: '1-206-flowers' });
capsSocket.on('delivered', handleDelivery);
capsSocket.on('delivered', finishedDelivery);
capsSocket.emit('pickup', createPickUp('1-206-flowers'));

