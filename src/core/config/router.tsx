
import { FC } from "react"
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { EditPage } from "../../pages/edit/edit.page";

import { HomePage } from "../../pages/home/home.page";
import { NotFoundPage } from "../../pages/not-found/not-found.page";

export const APP_PATHS = {
    taskHome: "/",
    taskEditForm: "/edit",
}

export const AppRouter: FC = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={APP_PATHS.taskHome} element={<HomePage />} />
                <Route path={APP_PATHS.taskEditForm} element={<EditPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}