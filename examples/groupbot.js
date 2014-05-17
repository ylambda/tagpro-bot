var Bot = require('../index');
var room = process.argv[2];

var groupbot = Bot({
  hostname: 'tagpro-pi.koalabeast.com',
  room: room
});

groupbot.group.connect();

groupbot.on('group socket', groupListeners);
function groupListeners() {
  var group = groupbot.group;
  var socket = group.socket;
  socket.on('connect', function() {
    socket.emit('name', 'groupbot');
    socket.emit('chat', 'Hi, I\'m group bot!');
    setTimeout(function() {
      socket.emit('chat', 'Goodbye!');
      socket.disconnect();
    }, 5e3);
  });
};
