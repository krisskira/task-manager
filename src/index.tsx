import React from "react";
import ReactDOM from "react-dom";
import { AppRouter } from "./core/config/router";
import AppTheme from "./core/config/theme";
import { TaskContextProvider } from "./core/context/task/task.context";

ReactDOM.render(
    <React.StrictMode>
        <AppTheme>
            <TaskContextProvider>
                <AppRouter />
            </TaskContextProvider>
        </AppTheme>
    </React.StrictMode>,
    document.getElementById("root")
);
