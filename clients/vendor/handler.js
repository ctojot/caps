'use strict';

const chance = require('chance');

function handleDelivery(payload) {
  console.log('Thank you for your order ' + payload.customer);
}

function finishedDelivery(payload) {
  console.log('Thank you for your order ' + payload.orderId);
}

function createPickUp(storeName) {
  return {
    store: storeName,
    orderId: chance.guid,
    customer: chance.name,
    address: chance.address,
  };
}

module.exports = {
  handleDelivery,
  finishedDelivery,
  createPickUp,
};