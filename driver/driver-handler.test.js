'use strict';

const { driverPickUp } = require('./handler'); 
const eventPool = require('../eventPool');

beforeEach(() => {
  console.log = jest.fn();
  eventPool.emit = jest.fn();
});

let payload = {
  orderId: 12345,
};

describe('Testing Driver Handler', () => {
  it('Should alert system that there is a package', () => {
    
    jest.useFakeTimers();
    driverPickUp(payload);
    jest.advanceTimersByTime(2000);
    
    expect(payload).toBeTruthy();
  });


  it('Should alert system that package is picked up and in-transit', () => {
    
    jest.useFakeTimers();
    driverPickUp(payload);
    jest.advanceTimersByTime(2000);

    expect(payload.orderId).toBe(12345);
    expect(eventPool.emit).toHaveBeenCalledWith('In-Transit' + payload);
  });

  it('Should alert system that package is delivered', () => {

    jest.useFakeTimers();
    driverPickUp(payload);
    jest.advanceTimersByTime(2000);

    expect(payload.orderId).toBe(12345);
    expect(eventPool.emit).toHaveBeenCalledWith('Delivered' + payload);
  });
});