
import { FC } from "react"
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { EditPage } from "../../pages/edit/edit.page";

import { HomePage } from "../../pages/home/home.page";
import { NotFoundPage } from "../../pages/not-found/not-found.page";

export const AppRouter: FC = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/edit" element={<EditPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}