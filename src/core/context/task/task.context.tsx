import { createContext, FC } from "react";
import { TaskContextProps } from "./task.context.interfaces";
import { useTaskRepository } from "../../repositories/useTaskRepository.hook";

export const TASK_INITIAL_STATE: TaskContextProps = {
    tasks: [],
}

export const TaskContext = createContext<TaskContextProps>(TASK_INITIAL_STATE);

export const TaskContextProvider: FC = ({ children }) => {
    const { tasks, addTask, updateTask } = useTaskRepository();
    return (
        <TaskContext.Provider
            value={{
                tasks,
                addTask,
                updateTask,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
};
