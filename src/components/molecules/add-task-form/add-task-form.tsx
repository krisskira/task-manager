import { Add } from "@mui/icons-material";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { FC, FormEvent, useRef, useState } from "react";
import { useTask } from "../../../core/hooks/useTask.hook";

export const AddTaskForm: FC = () => {
    const { addTask } = useTask();
    const taskTitleInputRef = useRef<HTMLFormElement>();
    const taskDescriptionInputRef = useRef<HTMLFormElement>();

    const handlerOnSubmitTaskForm = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const taskTitle = taskTitleInputRef.current?.value ?? "";
        const taskDescription = taskDescriptionInputRef.current?.value ?? "";
        if (!taskTitle || !taskDescription) return;
        addTask?.(taskTitle, taskDescription);
        taskTitleInputRef.current!.value = "";
        taskDescriptionInputRef.current!.value = "";
    };

    return (
        <Container maxWidth="md">
            <form onSubmit={handlerOnSubmitTaskForm}>
                <Grid paddingTop={2} container direction="column" spacing={2}>
                    <Grid item>
                        <Typography variant="h5">Add a new Task</Typography>
                    </Grid>
                    <Grid item>
                        <TextField
                            id="task-title"
                            label="Title"
                            variant="filled"
                            fullWidth
                            required
                            inputRef={taskTitleInputRef}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="task-description"
                            label="Description"
                            variant="filled"
                            fullWidth
                            required
                            multiline
                            rows={4}
                            inputRef={taskDescriptionInputRef}
                        />
                    </Grid>
                    <Grid item>
                        <Button
                            fullWidth
                            variant="contained"
                            type="submit"
                            startIcon={<Add />}
                        >
                            Add
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};
