var tagbot = require('../index');
var room = process.argv[2];
var uri = 'http://tagpro-pi.koalabeast.com'

tagbot.getSession(uri, function(err, session) {
  var socket = tagbot.connect(uri+':81/groups/'+room, session);
  socket.on('connect', function() {
      socket.emit('chat', 'Hello groups!');
  });
});


