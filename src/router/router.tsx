import {createBrowserRouter, RouteObject} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import MoviesPage from "../pages/MoviesPage";
import GenresPage from "../pages/GenresPage";

const routes: RouteObject[] = [
    {
        path: '', element: <MainLayout/>, errorElement: <ErrorPage/>, children: [
            {path: 'movies', element: <MoviesPage/>, children: [
                    {path: ':id', element: <GenresPage/>}
                ]},
        ]
    }
];

export const router = createBrowserRouter(routes);