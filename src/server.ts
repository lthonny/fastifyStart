const fastify = require('fastify')({ logger: true });
fastify.register(require('./routes/index'));

const PORT = require('dotenv').config().parsed.PORT || 3000;

const start = async () => {
  try {
    await fastify.listen(PORT);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start();