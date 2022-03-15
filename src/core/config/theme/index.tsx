import { CssBaseline, ThemeProvider } from "@mui/material";
import { FC } from "react";
import theme from "./theme";

const AppTheme: FC = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}

export default AppTheme;