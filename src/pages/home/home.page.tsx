import { FC } from "react";
import { AppLayout } from "../../components/molecules/app-layout/app-layout";
import { AddTaskForm } from "../../components/molecules/add-task-form/add-task-form";

export const HomePage: FC = () => {
    return (
        <AppLayout breadcrumbText="Home">
            <AddTaskForm />
        </AppLayout>
    );
};
