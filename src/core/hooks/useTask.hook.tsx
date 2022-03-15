import { useContext } from "react";
import { TaskContext } from "../context/task/task.context";
import { TaskStatusEntity } from "../entities/task.entity";
import { TASK_STATUS_MOCK_DATA } from "../repositories/data/task.data";

export const useTask = () => {
    const { tasks, addTask: _addTask, updateTask } = useContext(TaskContext);

    const getTaskStatusById = (statusId: string): TaskStatusEntity => {
        return (
            TASK_STATUS_MOCK_DATA.find((status) => status.id === statusId) ||
            TASK_STATUS_MOCK_DATA[0]
        );
    };

    const addTask = (title: string, description: string) => {
        _addTask?.({
            id: tasks.length.toString(),
            description: description,
            title: title,
            status: getTaskStatusById("toDo"),
        });
    }

    return { tasks, addTask, updateTask, getTaskStatusById };
};
