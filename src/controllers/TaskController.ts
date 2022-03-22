import { ITask } from '../interfaces/task';

const tasks: ITask[] = [
    { id: 1, title: 'Item 1', description: 'Item description', status: true },
    { id: 2, title: 'Item 2', description: 'Item description', status: false },
    { id: 3, title: 'Item 3', description: 'Item description', status: true }
];

class TaskController {
    public index() {
        return tasks;
    }

    public find(id: string) {
        return tasks.find((t) => t.id === Number(id));
    }

    public create(data: ITask) {
        const { id, title, description, status } = data;

        const newTask: ITask = { id, title, description, status };

        tasks.push(newTask);
    }

    public update() {
        return 'update';
    }

    public destroy() {
        return 'destroy';
    }
}

export default new TaskController();
