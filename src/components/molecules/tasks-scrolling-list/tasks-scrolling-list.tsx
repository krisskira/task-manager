import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import { TaskEntity } from "../../../core/entities/task.entity";
import { TaskCard } from "./task-card";

export const TasksScrollingList: FC = () => {
    const theme = useTheme();
    const tasks = Array(100)
        .fill(100)
        .map<TaskEntity>((_, i) => ({
            id: "" + i,
            title: `Title: ` + i,
            description: "adsd asdasd asdas asda asdasd asdasda adsa sASf asdfa SDADF ASFDadsA" + 1,
            status: {
                id: "1" + i,
                text: "In Progress",
                canShow: [],
            },
        }));
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
                bottom: 0,
                width: "100%",
                height: "100%",
                backgroundColor: theme.palette.primary.main,
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
            }}
        >
            <Typography
                variant="h6"
                color={theme.palette.primary.contrastText}
                padding={2}
            >
                Tasks
            </Typography>
            <Box
                sx={{
                    display: "block",
                    position: "absolute",
                    height: "calc(100% - 56px)",
                    width: "100%",
                    bottom: 0,
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    padding: "16px 16px 0 16px",
                    overflowY: "auto",
                    backgroundColor: theme.palette.primary.light,
                }}
            >
                    <Grid container spacing={1} rowSpacing={2} justifyContent="center">
                        {tasks.map((task) => (
                            <Grid key={task.id} item xs md={3} lg={2} xl={1} >
                                <TaskCard task={task} />
                            </Grid>
                        ))}
                    </Grid>
                    <Box sx={{height: 16}} />
            </Box>
        </Box>
    );
};