import { FC } from "react";
import { AppLayout } from "../../components/molecules/app-layout/app-layout";
import { AddTaskForm } from "../../components/molecules/add-task-form/add-task-form";
import { Box } from "@mui/material";
import { TasksScrollingList } from "../../components/molecules/tasks-scrolling-list/tasks-scrolling-list";

export const HomePage: FC = () => {
    return (
        <AppLayout breadcrumbText="Home">
            <AddTaskForm />
            <Box sx={{ height: 16 }} />
            <TasksScrollingList />
        </AppLayout>
    );
};
