import { TaskEntity, TaskStatusEntity } from "../../entities/task.entity";

export const TASK_STATUS_MOCK_DATA: TaskStatusEntity[] = [
    {
        id: "toDo",
        text: "To Do",
        canShow: ["inProgress"],
    },
    {
        id: "inProgress",
        text: "In Progress",
        canShow: ["blocked", "inQA"],
    },
    {
        id: "inQA",
        text: "In QA",
        canShow: ["toDo", "done"],
    },
    {
        id: "blocked",
        text: "Blocked",
        canShow: ["toDo"],
    },
    {
        id: "done",
        text: "Done",
        canShow: ["inProgress"],
    },
    {
        id: "deployed",
        text: "Deployed",
        canShow: [],
    },
];

export const TASK_MOCK_DATA = Array(100)
    .fill(0)
    .map<TaskEntity>((_, i) => ({
        id: `${i}`,
        title: `Lorem Ipsum: ${i}`,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        status: TASK_STATUS_MOCK_DATA[Math.ceil(Math.random() * 6)],
    }));

