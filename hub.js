'use strict';

const eventEmitter = require('./eventPool.js');

function logger(type, payload) {

  const event = {
    event: type,
    time: new Date(),
    payload,
  };

  console.log('EVENT', event);
}

eventEmitter.on('Pickup', (payload) => logger('Pickup', payload));
eventEmitter.on('In-Transit', (payload) => logger('In-Transit', payload));
eventEmitter.on('Delivered', (payload) => logger('Delivered', payload));

require('./driver');
require('./vendor'); // Running all code in barrel file