# tagpro-bot

A library to create a bot for tagpro.

``` javascript
var Bot = require('tagpro-bot');
var room = process.argv[2];

var groupbot = Bot({
  hostname: 'tagpro-pi.koalabeast.com',
  room: room
});


groupbot.on('error', function(err) {
  console.log(err);
});
groupbot.on('group socket', groupListeners);
groupbot.group.connect();

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
```

This library also has a Bot constructor, useful for creating
a tagpro bot which can join groups, games, and the joiner.

## Install
--------------

`npm intall tagpro-bot`

## Usage
--------------

### .connect(uri, session, callback)

Open a new socket.io connection at the given uri.

  * `uri`: location to open the socket.io sessei
  * 'session`: tagpro session id to send with socket connection
  * `callback`: called after opening the socket connection with `callback(err, socket)`

### .getSession(uri, callback)

Retrieve a session token, necessary to open a socket connection.

  * `uri`: location to open the socket.io sessei
  * `callback`: called when the session is ready with `callback(err, session)`

## .Bot(options)

Create a new Bot instance, which has useful functions to connect to games, groups, or the joiner.

``` javascript
// options
{


}
```

# Credit

Thanks goes out to [plane](/jj56) for creating [SpectaBot]() and for
creating a socket.io-client with cookie option.
