import { ChevronRight } from "@mui/icons-material";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { FC } from "react";
import { AppLayoutProps } from "./app-layout.interface";

export const AppLayout: FC<AppLayoutProps> = ({ breadcrumbText, children }) => {
    return (
        <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
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
            <Box sx={{ 
                flexGrow: 1, 
                display: "flex"
            }}>
            {children}
        </Box>
        </Box >
    );
};
