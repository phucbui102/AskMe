// src/socket.js
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000', {
  withCredentials: true,
});

socket.on('connect', () => {
  console.log('Connected to server:', socket.id);
});

// socket.emit('chat message', 'Hello from client');

socket.on('chat message', (msg) => {
  console.log('Message from server:', msg);
});

export default socket;
