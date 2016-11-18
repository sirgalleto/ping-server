var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(process.env.PORT || 3500);

app.get('/', function (req, res) {
  res.send('Online');
});

io.on('connection', function (socket) {
  socket.on('ping2', function(data) {
    socket.emit('pong2', data);
  });
});
