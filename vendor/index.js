'use strict';

const eventEmitter = require('../eventPool.js');
const { createPickUp, handleDelivery } = require('./handler.js');

eventEmitter.on('Delivered', handleDelivery);
eventEmitter.emit('Pickup', createPickUp('Definitely Not Wal-mart'));