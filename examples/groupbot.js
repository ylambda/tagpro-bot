var Bot = require('../index');
var room = process.argv[2];

var groupbot = Bot({
  hostname: 'http://tagpro-pi.koalabeast.com',
  room: room
});

groupbot.on('session', function() {
  var socket = groupbot.group.connect();
  socket.on('connect', function() {
    socket.emit('name', 'groupbot');
    socket.emit('chat', 'Hi, I\'m group bot!');
    setTimeout(function() {
      socket.emit('chat', 'Goodbye!');
      socket.disconnect();
    }, 5e3);
  });
});
