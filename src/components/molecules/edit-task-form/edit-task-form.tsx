import { Edit } from "@mui/icons-material";
import {
    Button,
    Container,
    Grid,
    MenuItem,
    TextField,
    Typography,
} from "@mui/material";
import { FC, SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import { EditTaskFormTarget } from "./edit-task-form.interface";

export const EditTaskForm: FC = () => {

    const taskStatus = [
        { id: "toDo", text: "To Do", canShow: ["inProgress"] },
        { id: "inProgress", text: "In Progress", canShow: ["blocked", "inQA"] },
        { id: "inQA", text: "In QA", canShow: ["toDo", "done"] },
        { id: "blocked", text: "Blocked" },
        { id: "done", text: "Done", canShow: ["inProgress"] },
        { id: "deployed", text: "Deployed", canShow: [] },
    ];

    const navigate = useNavigate();

    const onClickBackButton = () => {
        navigate("/");
    };

    const onSubmitTaskForm = (event: SyntheticEvent) => {
        event.preventDefault();
        const target = event.target as typeof event.target & EditTaskFormTarget;
        console.log("***-> Form Content: ",target);
        navigate("/");
    };

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
                            label="Title"
                            variant="filled"
                            required
                            fullWidth
                            inputProps={{
                                maxLength: 25,
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="task-description"
                            label="Description of task goes here."
                            variant="filled"
                            required
                            fullWidth
                            multiline
                            minRows={5}
                            maxRows={14}
                            inputProps={{
                                maxLength: 255,
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="task-status"
                            label="Status"
                            variant="filled"
                            fullWidth
                            select
                            onChange={console.log}
                        >
                            {taskStatus.map((option) => (
                                <MenuItem key={option.id} value={option.id}>
                                    {option.text}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item>
                        <Grid container direction="row" spacing={2}>
                            <Grid item xs>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    startIcon={<Edit />}
                                    type="submit"
                                >
                                    Edit
                                </Button>
                            </Grid>
                            <Grid item xs>
                                <Button
                                    onClick={onClickBackButton}
                                    fullWidth
                                    variant="outlined"
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
