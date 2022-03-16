import { Box, Typography, useTheme } from "@mui/material";
import { FC } from "react";

export const TaskListEmptyMessage: FC = () => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                position: "relative",
                textAlign: "center",
                width: "100%",
                height: "calc(100% - 56px)",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                flexDirection: "column",
            }}
            id="task-list-empty-message"
        >
            <Typography color={theme.palette.common.black} variant="body1">
                You have nothing to do.
            </Typography>
            <Typography color={theme.palette.common.black} variant="body1">
                Go get some sleep
            </Typography>
        </Box>
    );
};
