import { Add } from "@mui/icons-material";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { FC } from "react";

export const AddTaskForm: FC = () => {

    return (
        <Container maxWidth="md">
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
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="task-description"
                        label="Description"
                        variant="filled"
                        fullWidth
                        multiline
                        rows={4}
                    />
                </Grid>
                <Grid item>
                    <Button fullWidth variant="contained" startIcon={<Add />}>
                        Add
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};
