'use strict';

const { Server } = require('socket.io');

const PORT = process.env.PORT || 3002;

let server = new Server(PORT); 
let caps = server.of('/caps');
console.log('Server On');

// Built in connection event
server.on('Connection', (socket) => {
  console.log('connected to general socket server');
  socket.on('message', (payload) => {
    console.log('Here is a msg', payload);
    socket.broadcast.emit('message', payload);
  });
});


caps.on('connection', (socket) => {
  console.log('Connection to vendor server');

  socket.on('message', (payload) => {
    console.log('Here is vendor payload', payload);
  });

 
  socket.on('pickup', (payload) => {
    console.log('Package has been picked up.', payload);
    socket.broadcast.to(payload.store).emit('pickup', payload);
  });
  socket.on('in-transit', (payload) => {
    console.log('Package In-Transit.', payload);
  });
  socket.on('delivered', (payload) => {
    console.log('Package has been delivered.', payload);
    socket.broadcast.to(payload.store).emit('delivered', payload);
  });

  socket.on('join', (payload) => {
    console.log('A socket has joined a room: ', payload.storeName);
    socket.join(payload.storeName); 
    socket.broadcast.to(payload.storeName).emit('join', payload);
  });
});


// server.listen();