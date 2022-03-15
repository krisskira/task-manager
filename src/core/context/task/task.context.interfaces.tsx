import { TaskEntity } from "../../entities/task.entity";

export interface TaskContextProps {
    tasks: TaskEntity[];
    addTask?(task: TaskEntity): void;
    updateTask?(task: TaskEntity): void;
}
