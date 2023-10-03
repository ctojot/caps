'use strict';

const hub = require('../hub');
const { pickupHandler } = require('./handler');

describe('Driver Pickup Handler', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear all previous mock calls before each test
  });

  it('should log pickup message and emit in-transit event', () => {
    const payload = {
      store: '1-206-flowers',
      orderId: 'test-order-id',
      customer: 'Test Customer',
      address: 'Test Address',
    };

    const consoleLogSpy = jest.spyOn(console, 'log');
    const hubEmitSpy = jest.spyOn(hub, 'emit');

    pickupHandler(payload);

    expect(consoleLogSpy).toHaveBeenCalledWith(`DRIVER: picked up ${payload.orderId}`);
    expect(hubEmitSpy).toHaveBeenCalledWith('in-transit', payload);
  });
});