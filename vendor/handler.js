'use strict';

const chance = require('chance');
const hub = require('../hub');

function generateOrder() {
  const order = new chance();
  return {
    store: order.word(),
    orderId: order.guid(),
    customer: order.name(),
    address: order.address(),
  };
}

function orderStatus(payload) {
	
}

function simulatePickup(store) {
  const order = generateOrder();
  hub.emit('pickup', order);
}


module.exports = {
  simulatePickup,
  orderStatus,
};