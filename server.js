const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 1337;

io.on('connect', socket => {
  console.log('connection established');

  socket.on('FromApp', data => {
    io.emit('FromApi', data )
  })
})

app.get('/', (req, res) => {
  res.send('hello')
})


server.listen(PORT, () => console.log(`server running on ${PORT}`))