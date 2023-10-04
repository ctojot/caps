'use strict';

const eventPool = require('../eventPool.js');
const { handleDelivery, createPickUp } = require('./handler'); 

beforeEach(() => {
  console.log = jest.fn();
  eventPool.emit = jest.fn();
});

describe('Testing Vendor Handler', () => {
  it('Should alert system when there is a package to be picked up', () => {
    let order = createPickUp('Not Walmart');

    expect(order.store).toBe('Not Walmart');
  });

  it('Should notify vendor when package is delivered', () => {
    let payload = {
      customer: 'any string',
    };

    handleDelivery(payload);

    expect(console.log).toHaveBeenCalledWith('Thank you for your order ' + payload.customer);
  });
});
