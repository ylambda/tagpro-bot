var http = require('http');
var io = require('socket.io-client');
var cookie = require('cookie');

var bot = module.exports = {};

// Create socket connection at the path
// with the given session token

bot.connect = connect;
function connect(uri, session, callback) {
  var socket = io.connect(uri, {
    cookie: cookie.serialize('tagpro', session),
    'force new connection': true,
    'reconnect': false
  });
  callback && callback(null, socket);
  return socket;
}

// Send an HTTP GET request to
// the server to get a session token.
// @param string server - server to connect to
// @param function callback(err, session) - callback function

bot.getSession = getSession;
function getSession(server, callback) {
  http.get(server, function(res) {
    if(!'set-cookie' in res.headers)
      return callback(new Error("Unable to get session token"));

    var cookies = cookie.parse(res.headers['set-cookie'][0])
    var session = cookies.tagpro;

    callback(null, session);
  }).on('error', callback);
}
