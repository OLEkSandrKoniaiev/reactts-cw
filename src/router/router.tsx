import {createBrowserRouter, RouteObject} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import MoviesPage from "../pages/MoviesPage";

const routes: RouteObject[] = [
    {
        path: '', element: <MainLayout/>, errorElement: <ErrorPage/>, children: [
            {path: 'movies', element: <MoviesPage/>}
        ]
    }
];

export const router = createBrowserRouter(routes);