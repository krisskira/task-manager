import { Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import { APP_PATHS } from "../../core/config/router";

export const NotFoundPage: FC = () => {
    return (
        <>
            <Typography variant="h3">404 Page Not Found 😭</Typography>
            <Link to={APP_PATHS.taskHome}>Goback to home.</Link>
        </>
    );
};
