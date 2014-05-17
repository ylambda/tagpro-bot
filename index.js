var socket = require('./lib/socket');
var Bot = require('./lib/bot');

module.exports = function(opts) {
  return new Bot(opts);
}

module.exports.connect = socket.connect;
module.exports.getSession = socket.getSession;
module.exports.Bot = Bot;
