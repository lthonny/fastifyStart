const PORT = require('dotenv').config().parsed.PORT || 3000;

const fastify = require('fastify')({ logger: true });

fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
});

const start = async () => {
    try {
      await fastify.listen(PORT)
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
start();