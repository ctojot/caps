'use strict';

const hub = require('../hub');

function driverHandler(payload) {
  
  let output = 'Package Status' + payload.status;

  if (payload.status === 'Picked Up') {
    output += ' *** Order was Picked Up ***';
  } else if (payload.status === 'In Transit') {
    output += ' *** Order in Transit ***';
  } else if (payload.status === 'Delivered') {
    output += ' *** Order has been Delivered ***';
  } else {
    return 'Error has Occured';
  }
}




module.exports = {
  driverHandler,
};