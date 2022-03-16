import { TaskEntity, TaskStatusEntity } from "../../entities/task.entity";

export interface TaskContextProps {
    tasks: TaskEntity[];
    taskStatuses: TaskStatusEntity[];
    addTask?(task: TaskEntity): void;
    updateTask?(task: TaskEntity): void;
}
