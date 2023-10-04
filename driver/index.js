'use strict';

const eventEmitter = require('../eventPool.js');
const driverPickup = require('./handler.js');

eventEmitter.on('Pickup' + driverPickup);