var tagbot = require('../index');
var uri = 'http://tagpro-pi.koalabeast.com/groups/lkasjdli';

tagbot.getSession(uri, function(err, session) {
  tagbot.connect(uri, function(err, socket) {
    socket.on('connect', function() {
      socket.emit('chat', 'Hello groups!');
    });
  });
});


