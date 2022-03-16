import { useEffect, useState } from "react";
import { TaskEntity } from "../entities/task.entity";
import { TASK_STATUS_MOCK_DATA } from "./data/task.data";


export const useTaskRepository = () => {

    const TASK_KEY_STORAGE = "@TASK";
    const [tasks, setTask] = useState<TaskEntity[]>([]);

    const addTask = (task: TaskEntity) => {
        const _tasks = [...tasks, task];
        const tasksString = JSON.stringify(_tasks);
        localStorage.setItem(TASK_KEY_STORAGE, tasksString);
        setTask(_tasks);
    };

    const updateTask = (task: TaskEntity) => {
        const tempTaskIndex = tasks.findIndex((_task) => _task.id === task.id);
        if (tempTaskIndex < 0) return;
        const _tasks = [...tasks];
        _tasks[tempTaskIndex] = { ...task };
        const tasksString = JSON.stringify(_tasks);
        localStorage.setItem(TASK_KEY_STORAGE, tasksString);
        setTask(_tasks);
    };

    useEffect(() => {
        const tasksString = localStorage.getItem(TASK_KEY_STORAGE) || "[]";
        const taskData = JSON.parse(tasksString) as TaskEntity[];
        setTask(taskData);
    }, []);

    return { tasks, addTask, updateTask, taskStatuses: TASK_STATUS_MOCK_DATA };
};
