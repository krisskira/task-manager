import { Edit } from "@mui/icons-material";
import {
    Box,
    Card,
    CardActions,
    CardContent,
    Chip,
    IconButton,
    Typography,
} from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { TaskCardProps } from "./tasks-list.interface";

export const TaskCard: FC<TaskCardProps> = ({ task }) => {
    const navigate = useNavigate();
    const handleOnClickEdit = () => {
        navigate("/edit", {
            state: task,
        });
    };
    return (
        <Card
            sx={{
                width: 180,
                height: 180,
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
            }}
        >
            <CardContent
                sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        display: "-webkit-box",
                        WebkitLineClamp: 1,
                        lineClamp: 1,
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        "-webkit-box-orient": "vertical",
                    }}
                >
                    {task.title}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        lineClamp: 3,
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        "-webkit-box-orient": "vertical",
                    }}
                >
                    {task.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Chip
                    sx={{ width: 100 }}
                    label={task?.status?.text}
                    color="primary"
                />
                <Box sx={{ flexGrow: 1 }} />
                <IconButton onClick={handleOnClickEdit}>
                    <Edit />
                </IconButton>
            </CardActions>
        </Card>
    );
};
