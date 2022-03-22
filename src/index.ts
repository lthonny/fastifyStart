import fastify from 'fastify';
import taskRoutes from './routes/taskRoutes';

const port = process.env.port || 3000;

const server = fastify({
    logger: ({ level: "info" }),
});

server.register(taskRoutes, { prefix: "api"});

const start = async () => {
    try {
      await server.listen(port, "0.0.0.0");
      console.log("Server started successfully on the port", port);
    //   await updateInstaPostsJob;
    } catch (err) {
      server.log.error(err);
      process.exit(1);
    }
};
start();
