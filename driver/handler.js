'use strict';

const eventPool = require('../eventPool.js');

function driverPickUp(payload) {
  console.log('DRIVER: Picked Up' + payload.orderId);
  eventPool.emit('In-Transit' + payload);

  setTimeout (() => {
    console.log('DRIVER: Delivered Up' + payload.orderId);
    eventPool.emit('Delivered' + payload);
  }, 2000);
}

module.exports = {
  driverPickUp,
};