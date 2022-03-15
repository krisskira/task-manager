import { FC } from "react";
import { AppLayout } from "../../components/molecules/app-layout/app-layout";
import { EditTaskForm } from "../../components/molecules/edit-task-form/edit-task-form";

export const EditPage: FC = () => {
    return (
        <AppLayout breadcrumbText="Edit">
            <EditTaskForm />
        </AppLayout>
    );
};
