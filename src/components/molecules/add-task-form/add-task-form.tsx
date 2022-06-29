import { Add } from "@mui/icons-material";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { FC, FormEvent, useRef } from "react";
import { useTask } from "../../../core/hooks/useTask.hook";

export const AddTaskForm: FC = () => {
  const { addTask, filterTasks } = useTask();
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

  const onChangeTextFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    filterTasks?.(event.target.value);
  };

  return (
    <Container maxWidth="md">
      <form id="form-add-task" onSubmit={handlerOnSubmitTaskForm}>
        <Grid paddingTop={2} container direction="column" spacing={2}>
          <Grid item>
            <Grid container direction="row" spacing={2}>
              <Grid item>
                <Typography variant="h5">Add a new Task</Typography>
              </Grid>
              <Grid item flex={1}>
                <TextField
                  id="task-filter"
                  name="task-filter"
                  label="Filter tasks"
                  variant="filled"
                //   fullWidth
                  required
                  onChange={onChangeTextFilter}
                  inputRef={taskTitleInputRef}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <TextField
              id="task-title"
              name="task-title"
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
              name="task-description"
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
