import { Edit } from "@mui/icons-material";
import {
    Button,
    Container,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
    Typography,
} from "@mui/material";
import { FC, SyntheticEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { APP_PATHS } from "../../../core/config/router";
import { TaskStatusEntity } from "../../../core/entities/task.entity";
import { useTask } from "../../../core/hooks/useTask.hook";
import { EditTaskFormProps } from "./edit-task-form.interface";

export const EditTaskForm: FC<EditTaskFormProps> = ({ task }) => {
    const taskTitleInputRef = useRef<HTMLFormElement>();
    const taskDescriptionInputRef = useRef<HTMLFormElement>();

    const [taskStatus, setTaskStatuses] = useState<TaskStatusEntity[]>([]);
    const [taskStatusSelected, selectTaskStatus] = useState<TaskStatusEntity>();

    const { getTaskStatusById, updateTask } = useTask();
    const navigate = useNavigate();

    const onClickBackButton = () => {
        navigate(APP_PATHS.taskHome);
    };

    const onSubmitTaskForm = (event: SyntheticEvent) => {
        event.preventDefault();

        const title = taskTitleInputRef.current?.value || task.title;
        const description =
            taskDescriptionInputRef.current?.value || task.description;
        const status = taskStatusSelected || task.status;

        if (!title || !description || !status.id) return;

        updateTask?.({
            ...task,
            title,
            description,
            status,
        });
        navigate(APP_PATHS.taskHome);
    };

    const onChangeTaskStatus = (event: SelectChangeEvent) => {
        const statusId = event.target.value;
        if (statusId === "*") return;
        selectTaskStatus(getTaskStatusById(statusId));
    };

    useEffect(() => {
        if (!taskTitleInputRef.current || !taskDescriptionInputRef.current)
            return;
        taskTitleInputRef.current.value = task.title;
        taskDescriptionInputRef.current.value = task.description;
        const _taskStatus = task.status.canShow.map((statusId) =>
            getTaskStatusById(statusId)
        );
        _taskStatus.push(task.status);
        setTaskStatuses(_taskStatus);
        selectTaskStatus(task.status);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container maxWidth="md">
            <form onSubmit={onSubmitTaskForm}>
                <Grid container paddingY={2} direction="column" spacing={2}>
                    <Grid item>
                        <Typography variant="h5">Edit Task</Typography>
                    </Grid>
                    <Grid item>
                        <TextField
                            id="task-title"
                            name="task-title"
                            label="Title"
                            variant="filled"
                            required
                            fullWidth
                            inputRef={taskTitleInputRef}
                            inputProps={{
                                maxLength: 25,
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="task-description"
                            name="task-description"
                            label="Description of task goes here."
                            variant="filled"
                            required
                            fullWidth
                            multiline
                            minRows={5}
                            maxRows={14}
                            inputRef={taskDescriptionInputRef}
                            inputProps={{
                                maxLength: 255,
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <FormControl fullWidth>
                            <InputLabel id="task-status-label">
                                Status
                            </InputLabel>
                            <Select
                                labelId="task-status-label"
                                id="task-status"
                                name="task-status"
                                value={taskStatusSelected?.id || "*"}
                                label="Status"
                                required
                                onChange={onChangeTaskStatus}
                            >
                                <MenuItem value="*">Select an option</MenuItem>
                                {taskStatus.map((option) => (
                                    <MenuItem key={option.id} value={option.id}>
                                        {option.text}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <Grid container direction="row" spacing={2}>
                            <Grid item xs>
                                <Button
                                    id="task-edit-submit-button"
                                    variant="contained"
                                    type="submit"
                                    fullWidth
                                    startIcon={<Edit />}
                                >
                                    Edit
                                </Button>
                            </Grid>
                            <Grid item xs>
                                <Button
                                    id="task-edit-cancel-button"
                                    variant="outlined"
                                    fullWidth
                                    onClick={onClickBackButton}
                                >
                                    Cancel
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};
