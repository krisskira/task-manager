import { FC } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AppLayout } from "../../components/molecules/app-layout/app-layout";
import { EditTaskForm } from "../../components/molecules/edit-task-form/edit-task-form";
import { APP_PATHS } from "../../core/config/router";
import { TaskEntity } from "../../core/entities/task.entity";

export const EditPage: FC = () => {
    const task = useLocation().state as TaskEntity;

    if (!task) {
        return <Navigate to={APP_PATHS.taskHome} replace={true} />;
    }

    return (
        <AppLayout breadcrumbText="Edit">
            {<EditTaskForm task={task} />}
        </AppLayout>
    );
};
