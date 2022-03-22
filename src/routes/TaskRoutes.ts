import { FastifyInstance, FastifyPluginAsync } from "fastify";
import taskController from "../controllers/TaskController";

const AllTaskRoute: FastifyPluginAsync = async (server: FastifyInstance) => {
    server.get<any>("/tasks", async(request, reply) => {
        const tasks = taskController.index();
        return reply.send(tasks);
    })

    server.get<any>("/tasks/:id", async(request, reply) => {
        const { id } = request.params;
        console.log(id);
        
        const task = taskController.find(id);        
        return reply.send(task);
    })
}

export default AllTaskRoute;

