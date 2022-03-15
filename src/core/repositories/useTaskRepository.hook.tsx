import { useEffect, useState } from "react";
import { TaskEntity } from "../entities/task.entity";
import { TASK_MOCK_DATA } from "./data/task.data";


export const useTaskRepository = () => {

    const TASK_KEY_STORAGE = "@TASK";
    const [tasks, setTask] = useState<TaskEntity[]>([]);

    const addTask = (task: TaskEntity) => {
        const _tasks = [...tasks, task];
        setTask(_tasks);
    };

    const updateTask = (task: TaskEntity) => {
        const tempTaskIndex = tasks.findIndex((_task) => _task.id === task.id);
        if (tempTaskIndex < 0) return;
        const _tasks = [...tasks];
        _tasks[tempTaskIndex] = { ...task };
        setTask(_tasks);
    };

    useEffect(() => {
        const tasksString = localStorage.getItem(TASK_KEY_STORAGE) || "[]";
        const taskData = JSON.parse(tasksString) as TaskEntity[];
        setTask(taskData);
        // setTask(TASK_MOCK_DATA);
    }, []);

    useEffect(() => {
        const tasksString = JSON.stringify(tasks);
        localStorage.setItem(TASK_KEY_STORAGE, tasksString);
    }, [tasks]);

    return { tasks, addTask, updateTask };
};
