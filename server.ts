const fastify = require('fastify');
const server = fastify({ logger: true });
server.register(require('./src/routes/router'));

const PORT = require('dotenv').config().parsed.PORT || 3000;

server
  .listen(PORT)
  .catch(console.error);

module.exports = server;