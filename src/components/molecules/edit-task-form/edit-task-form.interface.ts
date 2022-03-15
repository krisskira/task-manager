import { TaskEntity } from "../../../core/entities/task.entity";

export interface EditTaskFormTarget {
    "task-title":  { value: string },
    "task-description":  { value: string },
    "task-status":  { value: string },
}

export interface EditTaskFormProps {
    task: TaskEntity
}