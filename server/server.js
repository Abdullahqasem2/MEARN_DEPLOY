const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
var clients = {}
io.on('connection', socket => {
  clients[socket.id] = socket;
  console.log(socket.id);
  socket.on('message', ({ name, message }) => {
    io.emit('message', { name, message })

  })
  socket.on('disconnect', function() {
    delete clients[socket.id];
    console.clear();
    console.info('disconnected user id is :' + socket.id );

});
})
http.listen(8000, function() {
  console.log('listening on port 8000')
})
