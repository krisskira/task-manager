import { ReactNode, useContext } from "react";
import { TaskContext } from "../context/task/task.context";
import { TaskEntity, TaskStatusEntity } from "../entities/task.entity";

export const useTask = () => {
    const {
        tasks,
        addTask: _addTask,
        updateTask: _updateTask,
        taskStatuses,
    } = useContext(TaskContext);

    const getTaskStatusById = (statusId: string): TaskStatusEntity => {
        return (
            taskStatuses.find((status) => status.id === statusId) ||
            taskStatuses[0]
        );
    };

    const addTask = (title: string, description: string) => {
        _addTask?.({
            id: tasks.length.toString(),
            description: description,
            title: title,
            status: getTaskStatusById("toDo"),
        });
    };

    const updateTask = (task: TaskEntity) => {
        _updateTask?.(task);
    };

    const handleRenderTasks = (whenEmpty: ReactNode, withTask: ReactNode): ReactNode => {
        return tasks.length > 0 
            ? withTask
            : whenEmpty;
    }

    return { tasks, addTask, updateTask, getTaskStatusById, handleRenderTasks };
};
