'use strict';

const hub = require('../hub');
const { simulatePickup } = require('./handler');

describe('Vendor Pickup Simulation', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear all previous mock calls before each test
  });

  it('should emit a pickup event with random order data', () => {
    const hubEmitSpy = jest.spyOn(hub, 'emit');

    simulatePickup('1-206-flowers');

    expect(hubEmitSpy).toHaveBeenCalledWith('pickup', expect.objectContaining({
      store: '1-206-flowers',
      orderId: expect.any(String),
      customer: expect.any(String),
      address: expect.any(String),
    }));
  });
});