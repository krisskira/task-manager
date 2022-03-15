import { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppLayout } from "../../components/molecules/app-layout/app-layout";
import { EditTaskForm } from "../../components/molecules/edit-task-form/edit-task-form";
import { EditTaskFormProps } from "../../components/molecules/edit-task-form/edit-task-form.interface";
import { TaskEntity } from "../../core/entities/task.entity";

export const EditPage: FC = () => {
    const task = useLocation().state as TaskEntity;
    const navigation = useNavigate();
    useEffect(() => {
        !task && navigation("/");
    }, [task]);
    return (
        <AppLayout breadcrumbText="Edit">{<EditTaskForm task={task} /> }</AppLayout>
    );
};
