const taskController = require('../controllers/TaskController');
const { getTasksOpts, getTaskOpts } = require('../shemas/tasks');

function router(fastify: any, options: any, done: any) {

    // fastify.get('/tasks', getTasksOpts, taskController.index);

    fastify.get('/tasks', getTasksOpts, (request: any, reply: any) => {

        const tasks = taskController.index();

        reply.send(tasks);
    });

    fastify.get('/tasks/:id', getTaskOpts, (request: any, reply: any) => {
        const { id } = request.params;

        const task = taskController.find(id);

        reply.send(task);
    });

    fastify.post('/tasks', (request: any, reply: any) => {
        console.log(request.body);

        reply.send('create');
    });

    done();
}

module.exports = router;
