import { ChevronRight } from "@mui/icons-material";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { FC } from "react";
import { AppLayoutProps } from "./app-layout.interface";

export const AppLayout: FC<AppLayoutProps> = ({ breadcrumbText, children }) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                position: "fixed",
                left: 0,
                top: 0,
                bottom: 0,
                right: 0,
                width: "100%",
                height: "100vh",
            }}
        >
            <>
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography>Task Management</Typography>
                        {breadcrumbText && (
                            <>
                                <ChevronRight />
                                <Typography>{breadcrumbText}</Typography>
                            </>
                        )}
                    </Toolbar>
                </AppBar>
                <Toolbar />
            </>
            <Box
                sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {children}
            </Box>
        </Box>
    );
};
