'use strict';

const eventEmitter = require('./eventPool');
const driverHandler = require('./driver/handler');
const vendorHandler = require('./vendor/handler');


eventEmitter.on('Package Picked Up', vendorHandler);
eventEmitter.on('Package in Transit', vendorHandler);

eventEmitter.on('Package Picked Up', driverHandler);
eventEmitter.on('Package in Transit', driverHandler);
eventEmitter.on('Package Delivered', driverHandler);

eventEmitter.emit();
eventEmitter.emit();

eventEmitter.emit();
eventEmitter.emit();
eventEmitter.emit();