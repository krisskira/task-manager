import { createContext, FC } from "react";
import { TaskContextProps } from "./task.context.interfaces";
import { useTaskRepository } from "../../repositories/useTaskRepository.hook";

export const TASK_INITIAL_STATE: TaskContextProps = {
    tasks: [],
    taskStatuses: []
}

export const TaskContext = createContext<TaskContextProps>(TASK_INITIAL_STATE);

export const TaskContextProvider: FC = ({ children }) => {
    const { tasks, addTask, updateTask, taskStatuses, filterTasks } = useTaskRepository();
    return (
        <TaskContext.Provider
            value={{
                tasks,
                addTask,
                updateTask,
                taskStatuses,
                filterTasks
            }}
        >
            {children}
        </TaskContext.Provider>
    );
};
